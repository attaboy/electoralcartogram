#!/usr/bin/env node
/**
 * Convert Elections Canada preliminary results TSV (EventResults-style export)
 * into a data/results*.ts module exporting Result[].
 *
 * Expected columns (tab-separated, bilingual header row):
 *   district #, riding name EN, riding name FR, result type EN/FR, surname, middle,
 *   given, party EN, party FR, votes, vote %, rejected ballots, total ballots
 *
 * Majority and majority percentage are derived per riding (top vote-getter vs runner-up),
 * matching the logic used for other preliminary conversions in this repo.
 *
 * Usage:
 *   node scripts/convert-preliminary-tsv-results.js <input.txt> <output.ts> [--export Name]
 *
 * If --export is omitted, the export name is derived from the output basename
 * (e.g. data/results20260413.ts -> results20260413).
 */

"use strict";

const fs = require("fs");
const path = require("path");

function usage() {
  console.error(`Usage: node scripts/convert-preliminary-tsv-results.js <input.txt> <output.ts> [--export <identifier>]`);
  process.exit(1);
}

function parseArgs(argv) {
  const positional = [];
  let exportName = null;
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--export") {
      exportName = argv[++i];
      if (!exportName) usage();
    } else if (a.startsWith("-")) {
      console.error("Unknown flag:", a);
      usage();
    } else {
      positional.push(a);
    }
  }
  if (positional.length !== 2) usage();
  return { input: positional[0], output: positional[1], exportName };
}

function deriveExportName(outputPath) {
  const base = path.basename(outputPath, ".ts");
  if (!base || base === outputPath) {
    console.error("Output must be a .ts file:", outputPath);
    process.exit(1);
  }
  return base;
}

/** @param {string} raw */
function parseVotePct(raw) {
  const s = String(raw).trim();
  if (!s) return 0;
  const normalized = s.startsWith(".") ? `0${s}` : s;
  const n = parseFloat(normalized);
  return Number.isFinite(n) ? n : 0;
}

/** @param {string[]} fields */
function candidateDisplayName(surname, middle, given) {
  const parts = [given, middle, surname]
    .map((x) => (x == null ? "" : String(x).trim()))
    .filter(Boolean);
  return parts.join(" ");
}

/** @param {number} x */
function roundPct(x) {
  return Math.round(x * 100) / 100;
}

/**
 * Find the header row index: first line containing district + surname column titles.
 * @param {string[]} lines
 */
function findHeaderLineIndex(lines) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (
      line.includes("Electoral district number") &&
      line.includes("Surname") &&
      line.includes("Given name")
    ) {
      return i;
    }
  }
  return -1;
}

/**
 * @param {string} line
 * @returns {string[]}
 */
function splitTsvLine(line) {
  return line.split("\t").map((c) => c.trim());
}

function main() {
  const args = parseArgs(process.argv);
  const inputPath = path.resolve(args.input);
  const outputPath = path.resolve(args.output);
  const exportName = args.exportName || deriveExportName(outputPath);

  if (!fs.existsSync(inputPath)) {
    console.error("Input not found:", inputPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(inputPath, "utf8");
  const lines = raw.split(/\r?\n/);
  const hi = findHeaderLineIndex(lines);
  if (hi === -1) {
    console.error("Could not find TSV header row (Electoral district number / Surname / Given name).");
    process.exit(1);
  }

  /** @type {Array<{ index: number, candidate: string, party: string, votes: number, votePercentage: number, majority: number, majorityPercentage: number }>} */
  const results = [];

  for (let li = hi + 1; li < lines.length; li++) {
    const line = lines[li];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("*")) break;

    const fields = splitTsvLine(line);
    if (fields.length < 12) continue;

    const indexStr = fields[0];
    if (!/^\d+$/.test(indexStr)) continue;

    const index = parseInt(indexStr, 10);
    const surname = fields[5] || "";
    const middle = fields[6] || "";
    const given = fields[7] || "";
    const partyEn = fields[8] || "";
    const partyFr = fields[9] || "";
    const votes = parseInt(fields[10], 10);
    const votePercentage = parseVotePct(fields[11]);

    if (!Number.isFinite(votes)) continue;

    const candidate = candidateDisplayName(surname, middle, given);
    const party = `${partyEn}/${partyFr}`;

    results.push({
      index,
      candidate,
      party,
      votes,
      votePercentage,
      majority: 0,
      majorityPercentage: 0,
    });
  }

  const byIndex = new Map();
  for (const row of results) {
    if (!byIndex.has(row.index)) byIndex.set(row.index, []);
    byIndex.get(row.index).push(row);
  }

  for (const [, group] of byIndex) {
    const sorted = group.slice().sort((a, b) => {
      if (b.votes !== a.votes) return b.votes - a.votes;
      return a.candidate.localeCompare(b.candidate, "en", { sensitivity: "base" });
    });
    const winner = sorted[0];
    const runnerUp = sorted[1];
    for (const row of group) {
      if (row !== winner) {
        row.majority = 0;
        row.majorityPercentage = 0;
      } else if (runnerUp) {
        row.majority = winner.votes - runnerUp.votes;
        row.majorityPercentage = roundPct(winner.votePercentage - runnerUp.votePercentage);
      } else {
        row.majority = winner.votes;
        row.majorityPercentage = roundPct(winner.votePercentage);
      }
    }
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
