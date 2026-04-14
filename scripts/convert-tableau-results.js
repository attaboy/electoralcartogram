#!/usr/bin/env node
/**
 * Convert an Elections Canada "table tableau12" style CSV (candidate rows with
 * bilingual party suffixes) into a data/results*.ts module exporting Result[].
 *
 * Usage:
 *   node scripts/convert-tableau-results.js <input.csv> <output.ts> [--seed path] [--export Name]
 *
 * If --export is omitted, the export name is derived from the output filename
 * (e.g. data/results20250818.ts -> results20250818).
 *
 * Default --seed: data/results20191021.ts (party labels bootstrapped from there).
 */

"use strict";

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");

const EXTRA_PARTY_SEEDS = [
  "People's Party - PPC/Parti populaire - PPC",
  "Marijuana Party/Parti Marijuana",
  "Free Party Canada/Parti Libre Canada",
  "Marxist-Leninist/Marxiste-Léniniste",
  "Centrist/Centriste",
  "Maverick Party/Maverick Party",
  "United Party of Canada (UP)/Parti Uni du Canada (UP)",
];

function usage() {
  console.error(`Usage: node scripts/convert-tableau-results.js <input.csv> <output.ts> [--seed <path>] [--export <identifier>]

 --seed Path to an existing results*.ts file whose "party" strings seed matching (default: data/results20191021.ts)
  --export  TypeScript export name (default: basename of output without .ts)`);
  process.exit(1);
}

function parseArgs(argv) {
  const positional = [];
  const flags = { seed: null, exportName: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--seed") {
      flags.seed = argv[++i];
      if (!flags.seed) usage();
    } else if (a === "--export") {
      flags.exportName = argv[++i];
      if (!flags.exportName) usage();
    } else if (a.startsWith("-")) {
      console.error("Unknown flag:", a);
      usage();
    } else {
      positional.push(a);
    }
  }
  if (positional.length !== 2) usage();
  return { input: positional[0], output: positional[1], ...flags };
}

function parseLine(line) {
  const out = [];
  let i = 0;
  let cur = "";
  let inQ = false;
  while (i < line.length) {
    const ch = line[i];
    if (inQ) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i += 2;
        continue;
      }
      if (ch === '"') {
        inQ = false;
        i++;
        continue;
      }
      cur += ch;
      i++;
    } else {
      if (ch === ",") {
        out.push(cur);
        cur = "";
        i++;
        continue;
      }
      if (ch === '"') {
        inQ = true;
        i++;
        continue;
      }
      cur += ch;
      i++;
    }
  }
  out.push(cur);
  return out;
}

function extractPartiesFromSeedFile(seedPath) {
  const text = fs.readFileSync(seedPath, "utf8");
  return new Set([...text.matchAll(/"party": "([^"]+)"/g)].map((m) => m[1]));
}

function buildPartySet(seedPath) {
  const parties = extractPartiesFromSeedFile(seedPath);
  for (const p of EXTRA_PARTY_SEEDS) parties.add(p);
  return parties;
}

function tryParseCandidate(cand, partyList) {
  if (cand.includes(" ** ")) {
    const [n, p] = cand.split(" ** ");
    return { candidate: n.trim() + " **", party: p.trim() };
  }
  const sorted = [...partyList].sort((a, b) => b.length - a.length);
  for (const p of sorted) {
    if (!cand.endsWith(p)) continue;
    if (cand.length > p.length && cand[cand.length - p.length - 1] !== " ") continue;
    const name = cand.slice(0, cand.length - p.length - 1).trim();
    if (!name) continue;
    return { candidate: name, party: p };
  }
  return null;
}

function expandParties(rows, parties) {
  for (const row of rows) {
    const c = row[3];
    if (c.includes(" ** ")) parties.add(c.split(" ** ")[1].trim());
  }
  let prev = -1;
  while (parties.size !== prev) {
    prev = parties.size;
    for (const row of rows) {
      const c = row[3];
      if (tryParseCandidate(c, parties)) continue;
      const idx = c.indexOf("/");
      if (idx < 0) continue;
      const after = c.slice(idx + 1);
      const before = c.slice(0, idx);
      const sp = before.lastIndexOf(" ");
      if (sp < 0) continue;
      const guess = before.slice(sp + 1) + "/" + after;
      if ((guess.match(/\//g) || []).length === 1) parties.add(guess);
    }
  }
}

function csvRows(csvPath) {
  const text = fs.readFileSync(csvPath, "utf8");
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  const rows = [];
  for (let li = 1; li < lines.length; li++) {
    const row = parseLine(lines[li]);
    if (row.length >= 10) rows.push(row);
  }
  return rows;
}

function deriveExportName(outputPath) {
  const base = path.basename(outputPath, ".ts");
  if (!base || base === outputPath) {
    console.error("Output must be a .ts file:", outputPath);
    process.exit(1);
  }
  return base;
}

function main() {
  const args = parseArgs(process.argv);
  const inputPath = path.resolve(args.input);
  const outputPath = path.resolve(args.output);
  const seedPath = path.resolve(args.seed || path.join(REPO_ROOT, "data/results20191021.ts"));
  const exportName = args.exportName || deriveExportName(outputPath);

  if (!fs.existsSync(inputPath)) {
    console.error("Input not found:", inputPath);
    process.exit(1);
  }
  if (!fs.existsSync(seedPath)) {
    console.error("Seed file not found:", seedPath);
    process.exit(1);
  }

  const rows = csvRows(inputPath);
  const parties = buildPartySet(seedPath);
  expandParties(rows, parties);
  const partyList = [...parties];

  const results = [];
  for (const row of rows) {
    const parsed = tryParseCandidate(row[3], partyList);
    if (!parsed) {
      console.error("Could not parse candidate column:", row[3]);
      process.exit(1);
    }
    const maj = row[8].trim();
    const majPct = row[9].trim();
    results.push({
      index: parseInt(row[2], 10),
      candidate: parsed.candidate,
      party: parsed.party,
      votes: parseInt(row[6], 10),
      votePercentage: parseFloat(row[7]),
      majority: maj === "" ? 0 : parseInt(maj.replace(/\s/g, ""), 10),
      majorityPercentage: majPct === "" ? 0 : parseFloat(majPct.replace(/\s/g, "")),
    });
  }

  let buf = `import { Result } from "./result_data";

export const ${exportName}: Result[] = [
`;
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const comma = i < results.length - 1 ? "," : "";
    buf += `{
  "index": ${r.index},
  "candidate": ${JSON.stringify(r.candidate)},
  "party": ${JSON.stringify(r.party)},
  "votes": ${r.votes},
  "votePercentage": ${r.votePercentage},
  "majority": ${r.majority},
  "majorityPercentage": ${r.majorityPercentage}
}${comma}
`;
  }
  buf += `];
`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, buf);
  console.error(`Wrote ${results.length} rows -> ${outputPath} (export ${exportName})`);
}

main();
