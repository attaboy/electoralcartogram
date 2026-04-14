#!/usr/bin/env node
/**
 * One-off generator: reads the 2025 SVG and writes data/riding_data-2025.ts
 * Run: node scripts/generate-riding-data-2025.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SVG_PATH =
  "/Users/luke/Library/Mobile Documents/com~apple~CloudDocs/Work/electoral cartogram/canada map 2025 just ridings.svg";
const OUT_PATH = path.join(__dirname, "../data/riding_data-2025.ts");

const PROVINCE_ORDER = [
  "British-Columbia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
  "Ontario",
  "Quebec",
  "New-Brunswick",
  "Nova-Scotia",
  "Prince-Edward-Island",
  "Newfoundland-and-Labrador",
  "Nunavut",
  "Yukon",
  "Northwest-Territories",
];

const PROVINCE_CODE = {
  "Newfoundland-and-Labrador": 10,
  "Prince-Edward-Island": 11,
  "Nova-Scotia": 12,
  "New-Brunswick": 13,
  Quebec: 24,
  Ontario: 35,
  Manitoba: 46,
  Saskatchewan: 47,
  Alberta: 48,
  "British-Columbia": 59,
  Yukon: 60,
  "Northwest-Territories": 61,
  Nunavut: 62,
};

const PROVINCE_TOP_LEVEL = new Set(PROVINCE_ORDER);

const RIDING_DATA_2015 = path.join(__dirname, "../data/riding_data_2015.ts");

function loadProvinceMetaFrom2015() {
  let t = fs.readFileSync(RIDING_DATA_2015, "utf8");
  t = t.replace(/\n    index: (\d+),/g, '\n    "index": $1,');
  const provRe =
    /  \{\s*\n    "id": "([^"]+)",\s*\n    "flagUrl": "([^"]+)",\s*\n    "en": "([^"]+)",\s*\n    "fr": "([^"]+)",\s*\n    "flagDescription-en": "([^"]+)",\s*\n    "flagDescription-fr": "([^"]+)",\s*\n    "transform": "([^"]+)",\s*\n    "index": (\d+)/g;
  const meta = {};
  let m;
  while ((m = provRe.exec(t)) !== null) {
    meta[m[1]] = {
      flagUrl: m[2],
      en: m[3],
      fr: m[4],
      "flagDescription-en": m[5],
      "flagDescription-fr": m[6],
      transform: m[7],
      index: +m[8],
    };
  }
  if (Object.keys(meta).length !== 13)
    throw new Error(
      `Expected 13 provinces from riding_data_2015.ts, got ${Object.keys(meta).length}`
    );
  return meta;
}

const PROVINCE_META = loadProvinceMetaFrom2015();

/** Serif/Affinity often uses NBSP (U+00A0) and similar; normalize for plain ASCII spaces in TS output. */
function normalizeUnicodeSpaces(s) {
  return s
    .replace(/\u00a0/g, " ")
    .replace(/[\u2007\u202f\u2009\u200a\u3000]/g, " ");
}

function ridingIdToFallbackName(id) {
  return normalizeUnicodeSpaces(
    id
      .split("---")
      .map((part) => part.replace(/-/g, " "))
      .join(" — ")
  );
}

function parseSerifNames(serifId, ridingId) {
  if (serifId) {
    const trimmed = normalizeUnicodeSpaces(serifId).trim();
    if (trimmed.includes(" / ")) {
      const [en, fr] = trimmed.split(" / ").map((s) => s.trim());
      return { en, fr };
    }
    return { en: trimmed, fr: trimmed };
  }
  return { en: ridingIdToFallbackName(ridingId), fr: ridingIdToFallbackName(ridingId) };
}

function makeRidingIndex(provinceId, localNum) {
  const code = PROVINCE_CODE[provinceId];
  return code * 1000 + localNum;
}

/** Riding groups are indented with 12 spaces; nested <g id> (e.g. label wrappers) use more. */
const RIDING_OPEN_RE =
  /^[ ]{12}<g\s+id="([^"]+)"(?:\s+serif:id="([^"]*)")?(?:\s+transform="([^"]+)")?[^>]*>/gm;

const IDENTITY_TRANSFORM = "matrix(1,0,0,1,0,0)";

function extractFirstPathD(s, fromIdx) {
  const sub = s.slice(fromIdx);
  const m = /<path\s+d="([^"]+)"/.exec(sub);
  return m ? m[1] : null;
}

function extractFirstTextNumber(s, fromIdx) {
  const sub = s.slice(fromIdx);
  const m = /<text[^>]*>\s*(\d+)\s*<\/text>/.exec(sub);
  return m ? parseInt(m[1], 10) : null;
}

function extractStandardRidings(section, provinceId) {
  const ridings = [];
  let m;
  RIDING_OPEN_RE.lastIndex = 0;
  while ((m = RIDING_OPEN_RE.exec(section)) !== null) {
    const ridingId = m[1];
    const serifId = m[2] ?? "";
    const transform = m[3] ?? IDENTITY_TRANSFORM;
    if (PROVINCE_TOP_LEVEL.has(ridingId)) continue;

    const start = m.index;
    const pathD = extractFirstPathD(section, start);
    const localNum = extractFirstTextNumber(section, start);
    if (pathD == null || localNum == null) {
      throw new Error(
        `Missing path or text for riding ${ridingId} in ${provinceId}`
      );
    }
    const { en, fr } = parseSerifNames(serifId, ridingId);
    ridings.push({
      id: ridingId,
      en,
      fr,
      transform,
      pathD,
      index: makeRidingIndex(provinceId, localNum),
    });
  }
  return ridings;
}

function extractNunavut(svg) {
  const marker = `<g transform="matrix(0.926829,0,0,1.06522,21.0341,-216.198)">`;
  const start = svg.indexOf(marker);
  if (start < 0) throw new Error("Nunavut wrapper not found");
  const end = svg.indexOf(
    `<g transform="matrix(0.926829,0,0,1.06522,-145.517,-173.802)">`,
    start
  );
  const section = svg.slice(start, end);
  const pathD = extractFirstPathD(section, 0);
  const localNum = extractFirstTextNumber(section, 0);
  if (pathD == null || localNum == null)
    throw new Error("Nunavut path/text missing");
  const { en, fr } = parseSerifNames("", "Nunavut");
  return [
    {
      id: "Nunavut",
      en,
      fr,
      transform: "",
      pathD,
      index: makeRidingIndex("Nunavut", localNum),
    },
  ];
}

function extractYukon(svg) {
  const marker = `<g transform="matrix(0.926829,0,0,1.06522,-145.517,-173.802)">`;
  const start = svg.indexOf(marker);
  if (start < 0) throw new Error("Yukon wrapper not found");
  const end = svg.indexOf(
    `<g transform="matrix(0.926829,0,0,1.06522,-76.0215,-184.446)">`,
    start
  );
  const section = svg.slice(start, end);
  const innerPathG = section.indexOf(
    '<g transform="matrix(1,0,0,1,0,-40)">'
  );
  if (innerPathG < 0) throw new Error("Yukon inner transform not found");
  const pathD = extractFirstPathD(section, innerPathG);
  const localNum = extractFirstTextNumber(section, 0);
  if (pathD == null || localNum == null)
    throw new Error("Yukon path/text missing");
  const { en, fr } = parseSerifNames("", "Yukon");
  return [
    {
      id: "Yukon",
      en,
      fr,
      transform: "matrix(1,0,0,1,0,-40)",
      pathD,
      index: makeRidingIndex("Yukon", localNum),
    },
  ];
}

function extractNwt(svg) {
  const marker = `<g transform="matrix(0.926829,0,0,1.06522,-76.0215,-184.446)">`;
  const start = svg.indexOf(marker);
  if (start < 0) throw new Error("NWT wrapper not found");
  const section = svg.slice(start);
  const innerPathG = section.indexOf(
    '<g transform="matrix(1,0,0,1,-0.0820313,-20)">'
  );
  if (innerPathG < 0) throw new Error("NWT inner transform not found");
  const pathD = extractFirstPathD(section, innerPathG);
  const localNum = extractFirstTextNumber(section, 0);
  if (pathD == null || localNum == null)
    throw new Error("NWT path/text missing");
  const en = "Northwest Territories";
  const fr = "Territoires du Nord-Ouest";
  return [
    {
      id: "Northwest-Territories",
      en,
      fr,
      transform: "matrix(1,0,0,1,-0.0820313,-20)",
      pathD,
      index: makeRidingIndex("Northwest-Territories", localNum),
    },
  ];
}

function sliceBetween(svg, startId, endId) {
  const startNeedle = `<g id="${startId}"`;
  const start = svg.indexOf(startNeedle);
  if (start < 0) throw new Error(`Start ${startId} not found`);
  if (startId === "Newfoundland-and-Labrador") {
    const alt = svg.indexOf(
      `<g transform="matrix(0.926829,0,0,1.06522,21.0341,-216.198)">`,
      start + 1
    );
    if (alt < 0) throw new Error("End after Newfoundland not found");
    return svg.slice(start, alt);
  }
  const endNeedle = `<g id="${endId}"`;
  const end = svg.indexOf(endNeedle, start + 1);
  if (end < 0) throw new Error(`End ${endId} not found after ${startId}`);
  return svg.slice(start, end);
}

function escapeTsString(s) {
  return JSON.stringify(normalizeUnicodeSpaces(s));
}

function formatRiding(r, indent) {
  const sp = " ".repeat(indent);
  const lines = [
    `${sp}{`,
    `${sp}  "id": ${escapeTsString(r.id)},`,
    `${sp}  "en": ${escapeTsString(r.en)},`,
    `${sp}  "fr": ${escapeTsString(r.fr)},`,
    `${sp}  "transform": ${escapeTsString(r.transform)},`,
    `${sp}  "pathD": ${escapeTsString(r.pathD)},`,
    `${sp}  "index": ${r.index}`,
    `${sp}}`,
  ];
  return lines.join("\n");
}

function main() {
  const svg = fs.readFileSync(SVG_PATH, "utf8");

  const sectionMap = {
    "British-Columbia": sliceBetween(svg, "British-Columbia", "Alberta"),
    Alberta: sliceBetween(svg, "Alberta", "Saskatchewan"),
    Saskatchewan: sliceBetween(svg, "Saskatchewan", "Manitoba"),
    Manitoba: sliceBetween(svg, "Manitoba", "Ontario"),
    Ontario: sliceBetween(svg, "Ontario", "Quebec"),
    Quebec: sliceBetween(svg, "Quebec", "New-Brunswick"),
    "New-Brunswick": sliceBetween(svg, "New-Brunswick", "Nova-Scotia"),
    "Nova-Scotia": sliceBetween(svg, "Nova-Scotia", "Prince-Edward-Island"),
    "Prince-Edward-Island": sliceBetween(
      svg,
      "Prince-Edward-Island",
      "Newfoundland-and-Labrador"
    ),
    "Newfoundland-and-Labrador": sliceBetween(svg, "Newfoundland-and-Labrador"),
  };

  const provincesOut = [];

  for (const pid of PROVINCE_ORDER) {
    const meta = PROVINCE_META[pid];
    let ridings;
    if (pid === "Nunavut") ridings = extractNunavut(svg);
    else if (pid === "Yukon") ridings = extractYukon(svg);
    else if (pid === "Northwest-Territories") ridings = extractNwt(svg);
    else ridings = extractStandardRidings(sectionMap[pid], pid);

    if (ridings.length === 0) throw new Error(`No ridings for ${pid}`);

    const header = `  {
    "id": ${escapeTsString(pid)},
    "flagUrl": ${escapeTsString(meta.flagUrl)},
    "en": ${escapeTsString(meta.en)},
    "fr": ${escapeTsString(meta.fr)},
    "flagDescription-en": ${escapeTsString(meta["flagDescription-en"])},
    "flagDescription-fr": ${escapeTsString(meta["flagDescription-fr"])},
    "transform": ${escapeTsString(meta.transform)},
    "index": ${meta.index},
    "ridings": [
${ridings.map((r) => formatRiding(r, 6)).join(",\n")}
    ]
  }`;

    provincesOut.push(header);
  }

  const file = `import { ProvinceData } from "./riding_data";


export const ridingDataSet2025: ProvinceData[] = [
${provincesOut.join(",\n")}
];
`;

  fs.writeFileSync(OUT_PATH, file, "utf8");
  const total = provincesOut.reduce((acc, _, i) => {
    const pid = PROVINCE_ORDER[i];
    let n;
    if (pid === "Nunavut") n = extractNunavut(svg).length;
    else if (pid === "Yukon") n = extractYukon(svg).length;
    else if (pid === "Northwest-Territories") n = extractNwt(svg).length;
    else n = extractStandardRidings(sectionMap[pid], pid).length;
    return acc + n;
  }, 0);
  console.log(`Wrote ${OUT_PATH} (${total} ridings)`);
}

main();
