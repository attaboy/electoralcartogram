#!/usr/bin/env node
/**
 * Remaps electoral cartogram ridings from legacy 20×20 asymmetric hex cells to
 * flat-top regular hexagons with side s=10 (width 20, height 10√3), on a
 * standard offset-row triangular lattice.
 *
 * Run from repo root: node scripts/remap-hex-grid.mjs
 *
 * Not idempotent: run only on a clean tree (e.g. reset Map, Borders, riding_data, mapLayout
 * from git) before re-running, or output coordinates will be wrong.
 *
 * Rewrites data/riding_data_2015.ts, data/riding_data_2025.ts, components/Map.tsx,
 * components/Borders2015.tsx, components/Borders2025.tsx.
 *
 * New riding positions use flat-top hex, side S=10 (width 20), odd-q offset layout:
 *   x = x0 + (3/2)*S*col,  y = y0 + sqrt(3)*S*(row + 0.5*(col&1))
 * (columns share x; adjacent columns stagger by half hex height). See Red Blob Games
 * “Hexagonal Grids” → Offset coordinates → odd-q.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

/** Same as Map.tsx root <g> under the SVG */
const T_OUTER_STR = "matrix(1.07895,0,0,0.938776,-107.895,-46.9388)";

const S = 10;
const SQRT3 = Math.sqrt(3);
const HEX_H = (S * Math.sqrt(3)) / 2;
const q4 = (n) => Number(n.toFixed(4));
/** Flat-top regular hex centered at (0,0), side S=10 → width 20 */
const CANONICAL_HEX_D = [
  `M${q4(-S)},0`,
  `L${q4(-S / 2)},${q4(-HEX_H)}`,
  `L${q4(S / 2)},${q4(-HEX_H)}`,
  `L${q4(S)},0`,
  `L${q4(S / 2)},${q4(HEX_H)}`,
  `L${q4(-S / 2)},${q4(HEX_H)}`,
  "Z",
].join("");

function parseMatrix(str) {
  if (!str || !str.trim()) {
    return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  }
  const m = /matrix\(\s*([^)]+)\)/.exec(str);
  if (!m) throw new Error(`Bad matrix: ${str}`);
  const parts = m[1].split(",").map((x) => parseFloat(x.trim()));
  if (parts.length !== 6) throw new Error(`Bad matrix values: ${str}`);
  const [a, b, c, d, e, f] = parts;
  return { a, b, c, d, e, f };
}

/** SVG matrix(a,b,c,d,e,f): x' = a*x + c*y + e, y' = b*x + d*y + f */
function mat3FromSvg(s) {
  return [
    [s.a, s.c, s.e],
    [s.b, s.d, s.f],
    [0, 0, 1],
  ];
}

function multiply3(A, B) {
  const C = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      C[i][j] = A[i][0] * B[0][j] + A[i][1] * B[1][j] + A[i][2] * B[2][j];
    }
  }
  return C;
}

function invert3(M) {
  const [[a, b, c], [d, e, f], [g, h, i]] = M;
  const A = e * i - f * h;
  const B = -(d * i - f * g);
  const C = d * h - e * g;
  const D = -(b * i - c * h);
  const E = a * i - c * g;
  const F = -(a * h - b * g);
  const G = b * f - c * e;
  const H = -(a * f - c * d);
  const I = a * e - b * d;
  let det = a * A + b * B + c * C;
  if (Math.abs(det) < 1e-12) throw new Error("Singular matrix");
  det = 1 / det;
  return [
    [A * det, D * det, G * det],
    [B * det, E * det, H * det],
    [C * det, F * det, I * det],
  ];
}

function apply3(M, x, y) {
  return [
    M[0][0] * x + M[0][1] * y + M[0][2],
    M[1][0] * x + M[1][1] * y + M[1][2],
  ];
}

function matVec3(M, v) {
  return [
    M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
    M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
    M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2],
  ];
}

function parsePathPoints(d) {
  const pts = [];
  const segs = d.trim().match(/[MmLlZz][^MmLlZz]*/g) || [];
  for (const seg of segs) {
    const cmd = seg[0];
    const rest = seg.slice(1).trim();
    if (cmd === "Z" || cmd === "z") continue;
    const nums = rest.split(/[\s,]+/).filter(Boolean).map(Number);
    if (cmd === "M" || cmd === "m" || cmd === "L" || cmd === "l") {
      const rel = cmd === cmd.toLowerCase();
      for (let i = 0; i < nums.length; i += 2) {
        let x = nums[i];
        let y = nums[i + 1];
        if (rel && pts.length) {
          x += pts[pts.length - 1][0];
          y += pts[pts.length - 1][1];
        }
        pts.push([x, y]);
      }
    }
  }
  return pts;
}

function centroid2D(pts) {
  if (pts.length === 0) return [0, 0];
  let sx = 0;
  let sy = 0;
  for (const [x, y] of pts) {
    sx += x;
    sy += y;
  }
  return [sx / pts.length, sy / pts.length];
}

function extractDatasetArray(tsContent, exportName) {
  const marker = `export const ${exportName}`;
  const idx = tsContent.indexOf(marker);
  if (idx < 0) throw new Error(`Missing ${exportName}`);
  const eq = tsContent.indexOf("=", idx);
  const arrStart = tsContent.indexOf("[", eq);
  let depth = 0;
  let i = arrStart;
  for (; i < tsContent.length; i++) {
    const ch = tsContent[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) break;
    }
  }
  const jsonStr = tsContent
    .slice(arrStart, i + 1)
    .replace(/,\s*]/g, "]")
    .replace(/,\s*}/g, "}");
  return JSON.parse(jsonStr);
}

/** Approximate legacy layout: flat-top odd-q (vertical columns, staggered). */
function latticePointOld(col, row, x0, y0, dx, dy) {
  return {
    x: x0 + col * dx,
    y: y0 + dy * (row + 0.5 * (col & 1)),
  };
}

function assignGrid(centroids, x0, y0, dx, dy) {
  const assignments = centroids.map((c) => {
    const col = Math.round((c.x - x0) / dx);
    const row = Math.round((c.y - y0) / dy - 0.5 * (col & 1));
    return { col, row };
  });
  const cells = new Map();
  let collisions = 0;
  for (let i = 0; i < assignments.length; i++) {
    const { col, row } = assignments[i];
    const k = `${col},${row}`;
    if (cells.has(k)) collisions++;
    cells.set(k, i);
  }
  let score = 0;
  for (let i = 0; i < centroids.length; i++) {
    const { col, row } = assignments[i];
    const lp = latticePointOld(col, row, x0, y0, dx, dy);
    const c = centroids[i];
    score += (c.x - lp.x) ** 2 + (c.y - lp.y) ** 2;
  }
  score += collisions * 1e12;
  return { assignments, score, collisions };
}

function fitOldGridParams(centroids) {
  const xmin = Math.min(...centroids.map((c) => c.x));
  const ymin = Math.min(...centroids.map((c) => c.y));
  let best = null;
  for (let dy = 14; dy <= 22; dy += 0.5) {
    for (let dx = 12; dx <= 20; dx += 0.5) {
      for (let ox = -28; ox <= 28; ox += 4) {
        for (let oy = -28; oy <= 28; oy += 4) {
          const x0 = xmin - dx + ox;
          const y0 = ymin - dy + oy;
          const r = assignGrid(centroids, x0, y0, dx, dy);
          if (!best || r.score < best.score) {
            best = { x0, y0, dx, dy, ...r };
          }
        }
      }
    }
  }
  if (best.collisions > 0) {
    const b0 = best;
    for (let dy = b0.dy - 2; dy <= b0.dy + 2; dy += 0.125) {
      for (let dx = b0.dx - 2; dx <= b0.dx + 2; dx += 0.125) {
        for (let ox = -12; ox <= 12; ox += 0.25) {
          for (let oy = -12; oy <= 12; oy += 0.25) {
            const x0 = b0.x0 + ox;
            const y0 = b0.y0 + oy;
            const r = assignGrid(centroids, x0, y0, dx, dy);
            if (r.score < best.score) best = { x0, y0, dx, dy, ...r };
          }
        }
      }
    }
  }
  if (best.collisions > 0) {
    throw new Error(`Could not resolve lattice collisions: ${best.collisions}`);
  }
  return {
    x0: best.x0,
    y0: best.y0,
    dx: best.dx,
    dy: best.dy,
    assignments: best.assignments,
  };
}

/** Target SVG world space: flat-top odd-q, S = side length (width = 2S). */
function newWorldFromCR(col, row, x0n, y0n) {
  return {
    x: x0n + (3 / 2) * S * col,
    y: y0n + SQRT3 * S * (row + 0.5 * (col & 1)),
  };
}

function solveAffine2D(oldPts, newPts) {
  let s11 = 0,
    s12 = 0,
    s13 = 0,
    s22 = 0,
    s23 = 0,
    s33 = oldPts.length;
  let t1x = 0,
    t2x = 0,
    t3x = 0,
    t1y = 0,
    t2y = 0,
    t3y = 0;
  for (let i = 0; i < oldPts.length; i++) {
    const [x, y] = oldPts[i];
    const [tx, ty] = newPts[i];
    s11 += x * x;
    s12 += x * y;
    s13 += x;
    s22 += y * y;
    s23 += y;
    t1x += x * tx;
    t2x += y * tx;
    t3x += tx;
    t1y += x * ty;
    t2y += y * ty;
    t3y += ty;
  }
  const Smtx = [
    [s11, s12, s13],
    [s12, s22, s23],
    [s13, s23, s33],
  ];
  const invS = invert3(Smtx);
  const vx = matVec3(invS, [t1x, t2x, t3x]);
  const vy = matVec3(invS, [t1y, t2y, t3y]);
  return {
    a11: vx[0],
    a12: vx[1],
    b1: vx[2],
    a21: vy[0],
    a22: vy[1],
    b2: vy[2],
  };
}

function applyAffine(Aff, x, y) {
  return [Aff.a11 * x + Aff.a12 * y + Aff.b1, Aff.a21 * x + Aff.a22 * y + Aff.b2];
}

function remapPathDWithAff(d, M_local_to_world, Aff) {
  const inv = invert3(M_local_to_world);
  const segs = d.trim().match(/[MmLlZz][^MmLlZz]*/g) || [];
  const parts = [];
  let cx = 0,
    cy = 0;
  for (const seg of segs) {
    const cmd0 = seg[0];
    const rest = seg.slice(1).trim();
    if (cmd0 === "Z" || cmd0 === "z") {
      parts.push("Z");
      continue;
    }
    const nums = rest.split(/[\s,]+/).filter(Boolean).map(Number);
    const rel = cmd0 === cmd0.toLowerCase();
    for (let i = 0; i < nums.length; i += 2) {
      let x = nums[i];
      let y = nums[i + 1];
      if (rel) {
        x += cx;
        y += cy;
      }
      const [wx, wy] = apply3(M_local_to_world, x, y);
      const [tx, ty] = applyAffine(Aff, wx, wy);
      const [nx, ny] = apply3(inv, tx, ty);
      const oc = i === 0 ? cmd0.toUpperCase() : "L";
      parts.push(`${oc}${nx.toFixed(4)},${ny.toFixed(4)}`);
      cx = x;
      cy = y;
    }
  }
  return parts.join("");
}

function composeChainToMat(chainSvg) {
  return chainSvg.reduce(
    (acc, s) => multiply3(acc, mat3FromSvg(s)),
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
  );
}

function identity3() {
  return [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
}

function composeMatArray(mats) {
  return mats.reduce((acc, M) => multiply3(acc, M), identity3());
}

function nearly(a, b, eps = 1e-3) {
  return Math.abs(a - b) < eps;
}

/** True if M is translate(tx,ty) with identity linear part. */
function isTranslate2d(M) {
  return (
    nearly(M[0][0], 1) &&
    nearly(M[1][1], 1) &&
    nearly(M[0][1], 0) &&
    nearly(M[1][0], 0) &&
    nearly(M[2][0], 0) &&
    nearly(M[2][1], 0) &&
    nearly(M[2][2], 1)
  );
}

function transformPathDWithMat3(d, M) {
  const inv = invert3(M);
  const segs = d.trim().match(/[MmLlZz][^MmLlZz]*/g) || [];
  const parts = [];
  let cx = 0,
    cy = 0;
  for (const seg of segs) {
    const cmd0 = seg[0];
    const rest = seg.slice(1).trim();
    if (cmd0 === "Z" || cmd0 === "z") {
      parts.push("Z");
      continue;
    }
    const nums = rest.split(/[\s,]+/).filter(Boolean).map(Number);
    const rel = cmd0 === cmd0.toLowerCase();
    for (let i = 0; i < nums.length; i += 2) {
      let x = nums[i];
      let y = nums[i + 1];
      if (rel) {
        x += cx;
        y += cy;
      }
      const [tx, ty] = apply3(M, x, y);
      const oc = i === 0 ? cmd0.toUpperCase() : "L";
      parts.push(`${oc}${q4(tx)},${q4(ty)}`);
      cx = x;
      cy = y;
    }
  }
  return parts.join("");
}

/**
 * p' = inv(S)*T*S applied to path local points (S = suffix chain below the removed translate).
 */
function bakePathDRemovingTranslate(d, suffixFromPath, Tremove) {
  const invS = invert3(suffixFromPath);
  const M = multiply3(multiply3(invS, Tremove), suffixFromPath);
  return transformPathDWithMat3(d, M);
}

/**
 * Extended ancestor stack for TSX: matrix("..."), `matrix(...)`, `translate(...)`.
 */
function stackAtExtended(text, pos) {
  const stack = [];
  let idx = 0;
  while (idx < pos) {
    const nextOpen = text.indexOf("<g", idx);
    const nextClose = text.indexOf("</g>", idx);
    if (nextOpen === -1 && nextClose === -1) break;
    const useOpen = nextOpen !== -1 && (nextClose === -1 || nextOpen < nextClose);
    if (useOpen) {
      const gtEnd = text.indexOf(">", nextOpen);
      if (gtEnd === -1 || gtEnd > pos) break;
      const tag = text.slice(nextOpen, gtEnd + 1);
      let m = /\btransform="matrix\(([^"]+)\)"/.exec(tag);
      if (m) {
        stack.push(mat3FromSvg(parseMatrix(`matrix(${m[1]})`)));
        idx = gtEnd + 1;
        continue;
      }
      m = /transform=\{`matrix\(([^`]+)\)`\}/.exec(tag);
      if (m) {
        stack.push(mat3FromSvg(parseMatrix(`matrix(${m[1]})`)));
        idx = gtEnd + 1;
        continue;
      }
      m = /transform=\{`translate\(([^`]+)\)`\}/.exec(tag);
      if (m) {
        const parts = m[1].split(",").map((x) => parseFloat(x.trim()));
        if (parts.length >= 2 && parts.every((n) => !Number.isNaN(n))) {
          stack.push(translateMat3(parts[0], parts[1]));
        }
        idx = gtEnd + 1;
        continue;
      }
      idx = gtEnd + 1;
    } else {
      if (nextClose >= pos) break;
      if (stack.length) stack.pop();
      idx = nextClose + 4;
    }
  }
  return stack;
}

/** Suffix = transforms after the matching translate(tx,ty) in parent order. */
function findSuffixAfterTranslate(stackMats, tx, ty) {
  for (let i = 0; i < stackMats.length; i++) {
    const Mi = stackMats[i];
    if (
      isTranslate2d(Mi) &&
      nearly(Mi[0][2], tx, 0.05) &&
      nearly(Mi[1][2], ty, 0.05)
    ) {
      return { index: i, suffix: composeMatArray(stackMats.slice(i + 1)) };
    }
  }
  return null;
}

function substituteMapConstants(text, layout) {
  let out = text;
  const sub = {
    MAP_FRAME_X: layout.frameX,
    MAP_FRAME_Y: layout.frameY,
    MAP_BG_SHIFT_X: layout.bgShiftX,
    MAP_BG_SHIFT_Y: layout.bgShiftY,
    MAP_RIDING_SHIFT_X: layout.ridingShiftX,
    MAP_RIDING_SHIFT_Y: layout.ridingShiftY,
  };
  for (const [k, v] of Object.entries(sub)) {
    out = out.split(`\$\{${k}\}`).join(String(v));
  }
  return out;
}

function applyRideShiftToProvinceTransforms(provinces, rx, ry) {
  const T = translateMat3(rx, ry);
  for (const p of provinces) {
    const Mp = mat3FromSvg(parseMatrix(p.transform));
    const M2 = multiply3(T, Mp);
    p.transform = `matrix(${M2[0][0]},${M2[0][1]},${M2[1][0]},${M2[1][1]},${M2[0][2]},${M2[1][2]})`;
  }
}

function writeRidingDataset(tsPath, exportName, provinces) {
  const out = `import { ProvinceData } from "./riding_data";


export const ${exportName}: ProvinceData[] = [
${provinces.map(formatProvince).join(",\n")}
];
`;
  fs.writeFileSync(tsPath, out, "utf8");
}

/**
 * Bake paths, rects, and static text in Map.tsx: remove bg and riding translates from coordinates.
 */
function bakeMapTsx(mapText, layout) {
  const subbed = substituteMapConstants(mapText, layout);
  const T_outer = mat3FromSvg(parseMatrix(T_OUTER_STR));
  const Tbg = translateMat3(layout.bgShiftX, layout.bgShiftY);
  const Tride = translateMat3(layout.ridingShiftX, layout.ridingShiftY);

  let text = subbed;

  const pathRe = /<path\b[\s\S]*?\sd="([^"]+)"[\s\S]*?\/>/g;
  text = text.replace(pathRe, (match, dVal, offset) => {
    const stack = stackAtExtended(text, offset);
    const full = composeMatArray([T_outer, ...stack]);
    const chainMats = [T_outer, ...stack];
    let d = dVal;
    const hitBg = findSuffixAfterTranslate(chainMats, layout.bgShiftX, layout.bgShiftY);
    if (hitBg) {
      d = bakePathDRemovingTranslate(d, hitBg.suffix, Tbg);
    }
    const hitRide = findSuffixAfterTranslate(chainMats, layout.ridingShiftX, layout.ridingShiftY);
    if (hitRide) {
      d = bakePathDRemovingTranslate(d, hitRide.suffix, Tride);
    }
    if (d === dVal) return match;
    const needle = `d="${dVal}"`;
    const i = match.indexOf(needle);
    if (i < 0) throw new Error("bakeMapTsx path d mismatch");
    return match.slice(0, i) + `d="${d}"` + match.slice(i + needle.length);
  });

  const textRe = /<text(\s+)x="([^"]+)"(\s+)y="([^"]+)"/g;
  text = text.replace(textRe, (match, _s1, xv, _s2, yv, offset) => {
    if (match.includes("{getLabelFor")) return match;
    const x = stripPx(xv);
    const y = stripPx(yv);
    const stack = stackAtExtended(text, offset);
    const chainMats = [T_outer, ...stack];
    let px = x,
      py = y;
    const hitBg = findSuffixAfterTranslate(chainMats, layout.bgShiftX, layout.bgShiftY);
    if (hitBg) {
      const invS = invert3(hitBg.suffix);
      const M = multiply3(multiply3(invS, Tbg), hitBg.suffix);
      [px, py] = apply3(M, x, y);
    }
    const hitRide = findSuffixAfterTranslate(chainMats, layout.ridingShiftX, layout.ridingShiftY);
    if (hitRide) {
      const invS = invert3(hitRide.suffix);
      const M = multiply3(multiply3(invS, Tride), hitRide.suffix);
      [px, py] = apply3(M, px, py);
    }
    if (px === x && py === y) return match;
    return match.replace(
      /x="[^"]+"(\s+)y="[^"]+"/,
      `x="${px.toFixed(3)}px"$1y="${py.toFixed(3)}px"`,
    );
  });

  const rectRe = /<rect\b([^>]*)\/>/g;
  text = text.replace(rectRe, (match, attrs, offset) => {
    const stack = stackAtExtended(text, offset);
    const chainMats = [T_outer, ...stack];
    const xm = /\bx="([^"]+)"/.exec(attrs);
    const ym = /\by="([^"]+)"/.exec(attrs);
    const wm = /\bwidth="([^"]+)"/.exec(attrs);
    const hm = /\bheight="([^"]+)"/.exec(attrs);
    if (!xm || !ym || !wm || !hm) return match;
    const x = parseFloat(xm[1]);
    const y = parseFloat(ym[1]);
    const w = parseFloat(wm[1]);
    const h = parseFloat(hm[1]);
    const corners = [
      [x, y],
      [x + w, y],
      [x + w, y + h],
      [x, y + h],
    ];
    let pts = corners;
    const applyBake = (Trem, hit) => {
      if (!hit) return;
      const invS = invert3(hit.suffix);
      const M = multiply3(multiply3(invS, Trem), hit.suffix);
      pts = pts.map(([cx, cy]) => apply3(M, cx, cy));
    };
    applyBake(Tbg, findSuffixAfterTranslate(chainMats, layout.bgShiftX, layout.bgShiftY));
    applyBake(Tride, findSuffixAfterTranslate(chainMats, layout.ridingShiftX, layout.ridingShiftY));
    if (pts === corners) return match;
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    for (const [qx, qy] of pts) {
      minX = Math.min(minX, qx);
      minY = Math.min(minY, qy);
      maxX = Math.max(maxX, qx);
      maxY = Math.max(maxY, qy);
    }
    const newAttrs = attrs
      .replace(/\bx="[^"]+"/, `x="${q4(minX)}"`)
      .replace(/\by="[^"]+"/, `y="${q4(minY)}"`)
      .replace(/\bwidth="[^"]+"/, `width="${q4(maxX - minX)}"`)
      .replace(/\bheight="[^"]+"/, `height="${q4(maxY - minY)}"`);
    return `<rect${newAttrs}/>`;
  });

  /** Template form (before constant substitution) */
  text = text.replace(
    /<g transform=\{`matrix\(1,0,0,1,\$\{MAP_BG_SHIFT_X\},\$\{MAP_BG_SHIFT_Y\}\)`\}>/g,
    "<g>",
  );
  text = text.replace(
    /<g\s+transform=\{`translate\(\$\{MAP_RIDING_SHIFT_X\},\$\{MAP_RIDING_SHIFT_Y\}\)`\}\s*>/g,
    "<g>",
  );
  const bgOpen = `<g transform={\`matrix(1,0,0,1,${layout.bgShiftX},${layout.bgShiftY})\`}>`;
  text = text.split(bgOpen).join("<g>");
  const rideOpens = [
    `<g\n            transform={\`translate(${layout.ridingShiftX},${layout.ridingShiftY})\`}\n          >`,
    `<g transform={\`translate(${layout.ridingShiftX},${layout.ridingShiftY})\`}>`,
  ];
  for (const ro of rideOpens) {
    text = text.split(ro).join("<g>");
  }

  text = text.replace(
    /import \{\s*\n\s*MAP_BG_SHIFT_X,\s*\n\s*MAP_BG_SHIFT_Y,\s*\n\s*MAP_FRAME_X,\s*\n\s*MAP_FRAME_Y,\s*\n\s*MAP_PROVINCIAL_NUDGE_Y,\s*\n\s*MAP_RIDING_SHIFT_X,\s*\n\s*MAP_RIDING_SHIFT_Y,\s*\n\s*MAP_VIEWBOX_STR,\s*\n\} from "\.\.\/data\/mapLayout\.generated";/m,
    `import {
  MAP_FRAME_X,
  MAP_FRAME_Y,
  MAP_VIEWBOX_STR,
} from "../data/mapLayout.generated";`,
  );
  text = text.replace(
    /\{\s*electionUses2025RidingBoundaries\(election\)\s*\?\s*\(\s*[\s\S]*?<Borders2025[\s\S]*?\/>\s*\)\s*:\s*\(\s*[\s\S]*?<Borders2015[\s\S]*?\/>\s*\)\s*\}/m,
    `{electionUses2025RidingBoundaries(election) ? (
              <Borders2025 />
            ) : (
              <Borders2015 />
            )}`,
  );

  return text;
}

/**
 * Bake Map background translate into border paths (bg is a parent in Map, not in this file).
 * W = E*Tbg*S_bf*p  =>  p' = inv(S_bf)*Tbg*S_bf*p  (S_bf = border-file chain only).
 * Do not include E (electoral outer matrix) in S: inv(E*S)*Tbg*(E*S) is wrong.
 */
function bakeBordersTsx(relPath, layout) {
  let text = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const Tbg = translateMat3(layout.bgShiftX, layout.bgShiftY);

  const pathRe = /<path\b[\s\S]*?\sd="([^"]+)"[\s\S]*?\/>/g;
  text = text.replace(pathRe, (match, dVal, offset) => {
    const stack = stackAtExtended(text, offset);
    const S_bf = composeMatArray(stack);
    const d = bakePathDRemovingTranslate(dVal, S_bf, Tbg);
    if (d === dVal) return match;
    const needle = `d="${dVal}"`;
    const i = match.indexOf(needle);
    if (i < 0) throw new Error(`bakeBordersTsx path d mismatch in ${relPath}`);
    return match.slice(0, i) + `d="${d}"` + match.slice(i + needle.length);
  });
  fs.writeFileSync(path.join(ROOT, relPath), text, "utf8");
  console.log("Baked bg into", relPath);
}

/**
 * Bake translate(0, ty) from explicit <g> wrappers; remove wrappers.
 * Run before bakeBordersTsx. Expands ProvinceBorderWrap to a numeric translate for parsing.
 */
function bakeBorderProvincialNudgeAndUsHalf(relPath, tyProvincial, labelHalfRow) {
  let text = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const tyStr = tyProvincial.toFixed(4);
  text = text.replace(
    /<ProvinceBorderWrap nudge=\{provincialNudge\}>/g,
    `<g transform={\`translate(0,${tyStr})\`}>`,
  );
  text = text.replace(/<\/ProvinceBorderWrap>/g, "</g>");
  text = text.replace(
    /\$\{LABEL_HEX_HALF_ROW\}/g,
    ((SQRT3 * S) / 2).toFixed(4),
  );

  const T_outer = mat3FromSvg(parseMatrix(T_OUTER_STR));
  const Tprov = translateMat3(0, tyProvincial);
  const Tus = translateMat3(0, labelHalfRow);

  const pathRe = /<path\b[\s\S]*?\sd="([^"]+)"[\s\S]*?\/>/g;
  text = text.replace(pathRe, (match, dVal, offset) => {
    const stack = stackAtExtended(text, offset);
    const chainMats = [T_outer, ...stack];
    let d = dVal;
    if (labelHalfRow !== 0) {
      const hitUs = findSuffixAfterTranslate(chainMats, 0, labelHalfRow);
      if (hitUs) {
        d = bakePathDRemovingTranslate(d, hitUs.suffix, Tus);
      }
    }
    if (tyProvincial !== 0) {
      const hitPr = findSuffixAfterTranslate(chainMats, 0, tyProvincial);
      if (hitPr) {
        d = bakePathDRemovingTranslate(d, hitPr.suffix, Tprov);
      }
    }
    if (d === dVal) return match;
    const needle = `d="${dVal}"`;
    const i = match.indexOf(needle);
    if (i < 0) throw new Error(`bakeBorderNudge path d mismatch in ${relPath}`);
    return match.slice(0, i) + `d="${d}"` + match.slice(i + needle.length);
  });

  const halfStr = ((SQRT3 * S) / 2).toFixed(4);
  if (labelHalfRow !== 0) {
    text = text.split(`<g transform={\`translate(0,${halfStr})\`}>`).join("<g>");
  }
  text = text.split(`<g transform={\`translate(0,${tyStr})\`}>`).join("<g>");
  text = text.replace(
    /^import \{ ProvinceBorderWrap \} from "\.\/ProvinceBorderWrap";\n/m,
    "",
  );
  text = text.replace(
    /^\/\*\* Labels-space half row[\s\S]*? \*\/\nconst LABEL_HEX_HALF_ROW[^\n]+\n\n/m,
    "",
  );
  text = text.replace(
    /export function Borders2015\(\{[\s\S]*?\}\s*=\s*\{\}\)\s*\{/,
    "export function Borders2015() {",
  );
  text = text.replace(
    /export function Borders2025\(\{[\s\S]*?\}\s*=\s*\{\}\)\s*\{/,
    "export function Borders2025() {",
  );

  fs.writeFileSync(path.join(ROOT, relPath), text, "utf8");
  console.log("Baked provincial/US nudge in", relPath);
}

function formatRiding(r, indent) {
  const sp = " ".repeat(indent);
  const esc = (s) => JSON.stringify(s);
  return [
    `${sp}{`,
    `${sp}  "id": ${esc(r.id)},`,
    `${sp}  "en": ${esc(r.en)},`,
    `${sp}  "fr": ${esc(r.fr)},`,
    `${sp}  "transform": ${esc(r.transform)},`,
    `${sp}  "pathD": ${esc(r.pathD)},`,
    `${sp}  "index": ${r.index}`,
    `${sp}}`,
  ].join("\n");
}

function formatProvince(p) {
  const esc = (s) => JSON.stringify(s);
  return `  {
    "id": ${esc(p.id)},
    "flagUrl": ${esc(p.flagUrl)},
    "en": ${esc(p.en)},
    "fr": ${esc(p.fr)},
    "flagDescription-en": ${esc(p["flagDescription-en"])},
    "flagDescription-fr": ${esc(p["flagDescription-fr"])},
    "transform": ${esc(p.transform)},
    "index": ${p.index},
    "ridings": [
${p.ridings.map((r) => formatRiding(r, 6)).join(",\n")}
    ]
  }`;
}

function processDataset(exportName, fileName) {
  const tsPath = path.join(ROOT, "data", fileName);
  const tsContent = fs.readFileSync(tsPath, "utf8");
  const provinces = extractDatasetArray(tsContent, exportName);
  const T_outer = mat3FromSvg(parseMatrix(T_OUTER_STR));

  const items = [];
  for (const prov of provinces) {
    const T_prov = mat3FromSvg(parseMatrix(prov.transform));
    for (const riding of prov.ridings) {
      const T_ride = mat3FromSvg(parseMatrix(riding.transform));
      const M = multiply3(multiply3(T_outer, T_prov), T_ride);
      const pts = parsePathPoints(riding.pathD);
      const [cx, cy] = centroid2D(pts);
      const [wx, wy] = apply3(M, cx, cy);
      items.push({
        province: prov,
        riding,
        world: { x: wx, y: wy },
      });
    }
  }

  const centroids = items.map((i) => i.world);
  const grid = fitOldGridParams(centroids);
  console.log(fileName, "old grid fit (odd-q)", {
    x0: grid.x0,
    y0: grid.y0,
    dx: grid.dx,
    dy: grid.dy,
  });

  let sumColX = 0,
    sumColY = 0;
  for (let i = 0; i < items.length; i++) {
    const { col, row } = grid.assignments[i];
    const c = items[i].world;
    const baseX = (3 / 2) * S * col;
    const baseY = SQRT3 * S * (row + 0.5 * (col & 1));
    sumColX += c.x - baseX;
    sumColY += c.y - baseY;
  }
  const x0n = sumColX / items.length;
  const y0n = sumColY / items.length;

  const oldWorld = [];
  const newWorld = [];
  for (let i = 0; i < items.length; i++) {
    const { col, row } = grid.assignments[i];
    const ow = items[i].world;
    const nw = newWorldFromCR(col, row, x0n, y0n);
    oldWorld.push([ow.x, ow.y]);
    newWorld.push([nw.x, nw.y]);
  }

  const pad = 40;
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (const [nx, ny] of newWorld) {
    minX = Math.min(minX, nx - pad);
    maxX = Math.max(maxX, nx + pad);
    minY = Math.min(minY, ny - pad);
    maxY = Math.max(maxY, ny + pad);
  }
  const bbox = { minX, minY, maxX, maxY };

  const Aff = solveAffine2D(oldWorld, newWorld);
  console.log(fileName, "affine oldWorld→newWorld", Aff);

  for (let i = 0; i < items.length; i++) {
    const prov = items[i].province;
    const riding = items[i].riding;
    const nw = { x: newWorld[i][0], y: newWorld[i][1] };
    const T_prov = mat3FromSvg(parseMatrix(prov.transform));
    const T_stack = multiply3(T_outer, T_prov);
    const inv = invert3(T_stack);
    const [tx, ty] = apply3(inv, nw.x, nw.y);
    riding.pathD = CANONICAL_HEX_D;
    riding.transform = `matrix(1,0,0,1,${tx.toFixed(4)},${ty.toFixed(4)})`;
  }

  const out = `import { ProvinceData } from "./riding_data";


export const ${exportName}: ProvinceData[] = [
${provinces.map(formatProvince).join(",\n")}
];
`;
  fs.writeFileSync(tsPath, out, "utf8");
  console.log("Wrote", tsPath);
  return { Aff, x0n, y0n, bbox };
}

/** Transforms on map artwork groups (must match Map.tsx). */
const T_USA_STR = "matrix(0.926829,0,0,1.06522,100,50)";
const T_OCEANS_STR = "matrix(0.791667,0,0,0.887681,100,50)";
const T_CANADA_STR = "matrix(0.926829,0,0,1.06522,100,50)";
const T_LABELS_STR = "matrix(0.926829,0,0,1.06522,155.61,50)";
const T_BETWEEN_STR = "matrix(1,0,0,1,56,-10)";

function translateMat3(tx, ty) {
  return [
    [1, 0, tx],
    [0, 1, ty],
    [0, 0, 1],
  ];
}

/** [[a,c],[b,d]] as rows: x' = a*x + c*y, y' = b*x + d*y */
function inv2x2([[a, c], [b, d]]) {
  const det = a * d - b * c;
  if (Math.abs(det) < 1e-12) throw new Error("Singular 2x2");
  const inv = 1 / det;
  return [
    [d * inv, -c * inv],
    [-b * inv, a * inv],
  ];
}

function mul2x2v(M, vx, vy) {
  return [M[0][0] * vx + M[0][1] * vy, M[1][0] * vx + M[1][1] * vy];
}

function linear2FromM3(M) {
  return [
    [M[0][0], M[0][1]],
    [M[1][0], M[1][1]],
  ];
}

function bboxEmpty() {
  return {
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
  };
}

function bboxAddPoint(B, x, y) {
  B.minX = Math.min(B.minX, x);
  B.minY = Math.min(B.minY, y);
  B.maxX = Math.max(B.maxX, x);
  B.maxY = Math.max(B.maxY, y);
}

function bboxUnion(A, B) {
  return {
    minX: Math.min(A.minX, B.minX),
    minY: Math.min(A.minY, B.minY),
    maxX: Math.max(A.maxX, B.maxX),
    maxY: Math.max(A.maxY, B.maxY),
  };
}

function bboxFromPathD(d, M) {
  const B = bboxEmpty();
  const pts = parsePathPoints(d);
  for (const [x, y] of pts) {
    const [wx, wy] = apply3(M, x, y);
    bboxAddPoint(B, wx, wy);
  }
  return B;
}

function bboxRidingHexes(provinces, M_outer) {
  const B = bboxEmpty();
  const verts = parsePathPoints(CANONICAL_HEX_D);
  for (const prov of provinces) {
    const Mp = mat3FromSvg(parseMatrix(prov.transform));
    for (const r of prov.ridings) {
      const Mr = mat3FromSvg(parseMatrix(r.transform));
      const M = multiply3(multiply3(M_outer, Mp), Mr);
      for (const [vx, vy] of verts) {
        const [x, y] = apply3(M, vx, vy);
        bboxAddPoint(B, x, y);
      }
    }
  }
  return B;
}

/** Riding layer: M_outer * translate(nudge) * Mp * Mr — matches Map.tsx */
function bboxRidingHexesWithNudge(provinces, M_outer, nx, ny) {
  const Mn = translateMat3(nx, ny);
  const B = bboxEmpty();
  const verts = parsePathPoints(CANONICAL_HEX_D);
  for (const prov of provinces) {
    const Mp = mat3FromSvg(parseMatrix(prov.transform));
    for (const r of prov.ridings) {
      const Mr = mat3FromSvg(parseMatrix(r.transform));
      const M = multiply3(multiply3(M_outer, Mn), multiply3(Mp, Mr));
      for (const [vx, vy] of verts) {
        const [x, y] = apply3(M, vx, vy);
        bboxAddPoint(B, x, y);
      }
    }
  }
  return B;
}

const ARCTIC_PROV_IDS = new Set(["Yukon", "Northwest-Territories"]);

function minMaxPathY(d, M3) {
  const pts = parsePathPoints(d);
  let minY = Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let maxX = -Infinity;
  for (const [x, y] of pts) {
    const [wx, wy] = apply3(M3, x, y);
    minY = Math.min(minY, wy);
    maxY = Math.max(maxY, wy);
    minX = Math.min(minX, wx);
    maxX = Math.max(maxX, wx);
  }
  return { minX, maxX, minY, maxY };
}

function minMaxRidingHexesForProvinces(provinces, M_outer, idFilter) {
  const verts = parsePathPoints(CANONICAL_HEX_D);
  let minY = Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let maxX = -Infinity;
  for (const prov of provinces) {
    if (idFilter && !idFilter.has(prov.id)) continue;
    const Mp = mat3FromSvg(parseMatrix(prov.transform));
    for (const r of prov.ridings) {
      const Mr = mat3FromSvg(parseMatrix(r.transform));
      const M = multiply3(multiply3(M_outer, Mp), Mr);
      for (const [vx, vy] of verts) {
        const [x, y] = apply3(M, vx, vy);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
      }
    }
  }
  return { minX, maxX, minY, maxY };
}

/** Flat-top hex height in electoral space (Yukon riding), for “one hex from top”. */
function electoralFlatHexHeight(provinces, M_outer) {
  const yt = provinces.find((p) => p.id === "Yukon");
  if (!yt || !yt.ridings[0]) return SQRT3 * S;
  const Mp = mat3FromSvg(parseMatrix(yt.transform));
  const Mr = mat3FromSvg(parseMatrix(yt.ridings[0].transform));
  const M = multiply3(multiply3(M_outer, Mp), Mr);
  const verts = parsePathPoints(CANONICAL_HEX_D);
  let minY = Infinity;
  let maxY = -Infinity;
  for (const [vx, vy] of verts) {
    const [, y] = apply3(M, vx, vy);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  return Math.max(maxY - minY, 1e-6);
}

function findRootMonotone(fn, target, lo, hi, iters = 60) {
  let a = lo;
  let b = hi;
  let fa = fn(a) - target;
  let fb = fn(b) - target;
  let expand = 0;
  while (fa * fb > 0 && expand < 20) {
    b += 400;
    fb = fn(b) - target;
    expand++;
  }
  if (fa * fb > 0) {
    a = -800;
    fa = fn(a) - target;
  }
  if (fa * fb > 0) return (a + b) / 2;
  for (let i = 0; i < iters; i++) {
    const mid = (a + b) / 2;
    const fm = fn(mid) - target;
    if (Math.abs(fm) < 1e-4) return mid;
    if (fa * fm <= 0) {
      b = mid;
      fb = fm;
    } else {
      a = mid;
      fa = fm;
    }
  }
  return (a + b) / 2;
}

function meanRidingCentroidSvg(provinces, M_outer) {
  let sx = 0,
    sy = 0,
    n = 0;
  for (const prov of provinces) {
    const Mp = mat3FromSvg(parseMatrix(prov.transform));
    for (const r of prov.ridings) {
      const Mr = mat3FromSvg(parseMatrix(r.transform));
      const pts = parsePathPoints(r.pathD);
      const [cx, cy] = centroid2D(pts);
      const M = multiply3(multiply3(M_outer, Mp), Mr);
      const [wx, wy] = apply3(M, cx, cy);
      sx += wx;
      sy += wy;
      n++;
    }
  }
  return { x: sx / n, y: sy / n };
}

function meanPathCentroidSvg(d, M) {
  const pts = parsePathPoints(d);
  let sx = 0,
    sy = 0,
    n = 0;
  for (const [x, y] of pts) {
    const [wx, wy] = apply3(M, x, y);
    sx += wx;
    sy += wy;
    n++;
  }
  return { x: sx / n, y: sy / n };
}

function extractPathDAfterId(mapText, id) {
  const re = new RegExp(`id="${id}"[\\s\\S]*?d="([^"]+)"`, "i");
  const m = re.exec(mapText);
  if (!m) throw new Error(`path with id ${id} not found in Map.tsx`);
  return m[1];
}

function extractCanadaPathD(mapText) {
  const re = /<g id="Canada"[^>]*>[\s\S]*?<path[\s\S]*?d="([^"]+)"/i;
  const m = re.exec(mapText);
  if (!m) throw new Error("Canada path not found");
  return m[1];
}

function extractBetweenLakesPathD(mapText) {
  const re = /<g[^>]*id="Between-lakes"[^>]*>[\s\S]*?d="([^"]+)"/i;
  const m = re.exec(mapText);
  return m ? m[1] : null;
}

function bboxLabelTexts(mapText, M_chain) {
  const B = bboxEmpty();
  const slice = mapText.indexOf('id="Labels"');
  if (slice < 0) return B;
  const tail = mapText.slice(slice);
  const re = /<text\s+x="([\d.-]+)px"\s+y="([\d.-]+)px"/g;
  let m;
  while ((m = re.exec(tail)) !== null) {
    const x = parseFloat(m[1]);
    const y = parseFloat(m[2]);
    const [wx, wy] = apply3(M_chain, x, y);
    bboxAddPoint(B, wx, wy);
    bboxAddPoint(B, wx + 80, wy + 20);
  }
  return B;
}

/**
 * Background shift: align map art to riding hex lattice using Arctic (YT + NT) top edges,
 * not centroid (fixes ridings “floating” above the landmass).
 * Riding nudge: place YT/NT hex tops one flat-top hex height below Canada’s top edge.
 * Frame: anchor Canada land top to y=TOP_PAD in viewBox (no extra water band above Canada).
 */
function computeAndWriteMapLayout(mapText) {
  const M_outer = mat3FromSvg(parseMatrix(T_OUTER_STR));
  const M_usa = mat3FromSvg(parseMatrix(T_USA_STR));
  const M_oceans = mat3FromSvg(parseMatrix(T_OCEANS_STR));
  const M_canada = mat3FromSvg(parseMatrix(T_CANADA_STR));
  const M_labels = mat3FromSvg(parseMatrix(T_LABELS_STR));
  const M_between = mat3FromSvg(parseMatrix(T_BETWEEN_STR));

  const p2015Path = path.join(ROOT, "data", "riding_data_2015.ts");
  const p2025Path = path.join(ROOT, "data", "riding_data_2025.ts");
  const prov2015 = extractDatasetArray(
    fs.readFileSync(p2015Path, "utf8"),
    "ridingDataSet2015",
  );
  const prov2025 = extractDatasetArray(
    fs.readFileSync(p2025Path, "utf8"),
    "ridingDataSet2025",
  );

  const canadaD = extractCanadaPathD(mapText);

  const minYCanadaWrap = (wx, wy) => {
    const M_wrap = translateMat3(wx, wy);
    const Mchain = multiply3(M_outer, multiply3(M_wrap, M_canada));
    return minMaxPathY(canadaD, Mchain).minY;
  };
  const minXCanadaWrap = (wx, wy) => {
    const M_wrap = translateMat3(wx, wy);
    const Mchain = multiply3(M_outer, multiply3(M_wrap, M_canada));
    return minMaxPathY(canadaD, Mchain).minX;
  };

  const arcticY = minMaxRidingHexesForProvinces(
    prov2015,
    M_outer,
    ARCTIC_PROV_IDS,
  ).minY;
  const allRidingMinX = minMaxRidingHexesForProvinces(prov2015, M_outer, null)
    .minX;

  const wy = findRootMonotone((w) => minYCanadaWrap(0, w), arcticY, -700, 700);
  const wx = findRootMonotone((w) => minXCanadaWrap(w, wy), allRidingMinX, -700, 700);

  const txy = [wx, wy];
  const M_wrap = translateMat3(txy[0], txy[1]);

  const Mw_usa = multiply3(M_outer, multiply3(M_wrap, M_usa));
  const Mw_oceans = multiply3(M_outer, multiply3(M_wrap, M_oceans));
  const Mw_canada = multiply3(M_outer, multiply3(M_wrap, M_canada));
  const Mw_labels = multiply3(M_outer, multiply3(M_wrap, M_labels));
  const Mw_between = multiply3(Mw_usa, M_between);

  const y_can_top = minMaxPathY(canadaD, Mw_canada).minY;
  const ytNt = minMaxRidingHexesForProvinces(prov2015, M_outer, ARCTIC_PROV_IDS);
  const y_yt_nt_top = ytNt.minY;
  const Hhex = electoralFlatHexHeight(prov2015, M_outer);
  /** Odd-q column spacing in electoral x: (3/2)·S times outer scale (flat-top hex, side S). */
  const colStrideElectoralX = ((3 / 2) * S) * M_outer[0][0];
  /**
   * Half-hex residual (S·sx) minus 3 columns, then +⅔ column (fine tune vs dashed borders).
   */
  const ride_shift_x_core =
    S * M_outer[0][0] -
    3 * colStrideElectoralX +
    (2 / 3) * colStrideElectoralX;
  const ride_shift_y_core = y_can_top + Hhex - y_yt_nt_top;
  /** Subpixel QA on hex layer only: 1px left, 1px lower (SVG +y = down). Provincial nudge Y excludes this so dashes stay aligned. */
  const RIDING_FINE_PX_X = -1;
  const RIDING_FINE_PX_Y = 1;
  const ride_shift_x = ride_shift_x_core + RIDING_FINE_PX_X;
  const ride_shift_y = ride_shift_y_core + RIDING_FINE_PX_Y;
  /** Provincial dashed paths ~½ hex low vs land; stack Y uses core riding shift (no RIDING_FINE_PX_Y). */
  const provincialBorderOffsetY = -0.5 * Hhex;
  const provincialNudgeY = ride_shift_y_core + provincialBorderOffsetY;

  const unionElectoralBbox = () => {
    let B = bboxEmpty();
    B = bboxUnion(B, bboxRidingHexesWithNudge(prov2015, M_outer, ride_shift_x, ride_shift_y));
    B = bboxUnion(B, bboxRidingHexesWithNudge(prov2025, M_outer, ride_shift_x, ride_shift_y));
    B = bboxUnion(B, bboxFromPathD(canadaD, Mw_canada));
    B = bboxUnion(B, bboxFromPathD(extractPathDAfterId(mapText, "Western-USA"), Mw_usa));
    B = bboxUnion(B, bboxFromPathD(extractPathDAfterId(mapText, "Eastern-USA"), Mw_usa));
    B = bboxUnion(B, bboxFromPathD(extractPathDAfterId(mapText, "Alaska"), Mw_usa));
    const bl = extractBetweenLakesPathD(mapText);
    if (bl) B = bboxUnion(B, bboxFromPathD(bl, Mw_between));
    /** Top edge of ocean rect only — omit bottom corners so bbox height follows land, not 600px-tall water. */
    for (const [ox, oy] of [
      [0, 0],
      [960, 0],
    ]) {
      const [x, y] = apply3(Mw_oceans, ox, oy);
      bboxAddPoint(B, x, y);
    }
    B = bboxUnion(B, bboxLabelTexts(mapText, Mw_labels));
    return B;
  };

  const TOP_PAD = 0;
  /** No horizontal inset — viewBox width matches content span exactly (rounded up). */
  const SIDE_PAD = 0;
  const BOTTOM_PAD = 0;
  /** Pad below continental US shape (Western + Eastern paths) so viewBox ends near US land, not ocean/empty band. */
  const PAD_BELOW_USA_LAND = 2;

  const westernUsaD = extractPathDAfterId(mapText, "Western-USA");
  const easternUsaD = extractPathDAfterId(mapText, "Eastern-USA");
  const usaLandLowerY = Math.max(
    bboxFromPathD(westernUsaD, Mw_usa).maxY,
    bboxFromPathD(easternUsaD, Mw_usa).maxY,
  );

  const Bu = unionElectoralBbox();
  const frameX = SIDE_PAD - Bu.minX;
  const frameY = TOP_PAD - y_can_top;

  const maxX_final = Bu.maxX + frameX;
  const contentBottomY = Math.min(Bu.maxY, usaLandLowerY + PAD_BELOW_USA_LAND);
  const maxY_final = contentBottomY + frameY;
  const viewW = Math.ceil(maxX_final + SIDE_PAD);
  const viewH = Math.ceil(maxY_final + BOTTOM_PAD);

  const outPath = path.join(ROOT, "data", "mapLayout.generated.ts");
  const q = (n) => Number(n.toFixed(4));
  const provincialNudge2015 = provincialNudgeY - (SQRT3 * S) / 2;
  const body = `/** Generated by scripts/remap-hex-grid.mjs — do not edit by hand. */
export const MAP_VIEW_WIDTH = ${viewW};
export const MAP_VIEW_HEIGHT = ${viewH};
export const MAP_VIEWBOX_STR = "0 0 ${viewW} ${viewH}";
export const MAP_FRAME_X = ${q(frameX)};
export const MAP_FRAME_Y = ${q(frameY)};
`;
  fs.writeFileSync(outPath, body, "utf8");
  console.log("Wrote", outPath, {
    view: [viewW, viewH],
    frame: [frameX, frameY],
    bgShift: txy,
    ridingShift: [ride_shift_x, ride_shift_y],
    provincialNudgeY,
    arcticY,
    yCanTop: y_can_top,
    Hhex,
  });
  return {
    viewW,
    viewH,
    frameX,
    frameY,
    bgShiftX: txy[0],
    bgShiftY: txy[1],
    ridingShiftX: ride_shift_x,
    ridingShiftY: ride_shift_y,
    provincialNudgeY,
    provincialNudge2015,
    provincialNudge2025: provincialNudgeY,
  };
}

function stripPx(s) {
  return parseFloat(String(s).replace(/px$/i, ""));
}

/** SVG ancestor <g transform="matrix(...)"> stack at byte offset `pos` (for multiline TSX). */
function stackAt(text, pos) {
  const stack = [];
  let idx = 0;
  while (idx < pos) {
    const nextOpen = text.indexOf("<g", idx);
    const nextClose = text.indexOf("</g>", idx);
    if (nextOpen === -1 && nextClose === -1) break;
    const useOpen = nextOpen !== -1 && (nextClose === -1 || nextOpen < nextClose);
    if (useOpen) {
      const gtEnd = text.indexOf(">", nextOpen);
      if (gtEnd === -1 || gtEnd > pos) break;
      const tag = text.slice(nextOpen, gtEnd + 1);
      const tm = /\btransform="matrix\(([^"]+)\)"/.exec(tag);
      if (tm) stack.push(parseMatrix(`matrix(${tm[1]})`));
      idx = gtEnd + 1;
    } else {
      if (nextClose >= pos) break;
      if (stack.length) stack.pop();
      idx = nextClose + 4;
    }
  }
  return stack;
}

function remapTsxFile(relPath, Aff) {
  const full = path.join(ROOT, relPath);
  let text = fs.readFileSync(full, "utf8");
  const T_outer = parseMatrix(T_OUTER_STR);

  const pathRe = /<path\b[\s\S]*?\sd="([^"]+)"[\s\S]*?\/>/g;
  text = text.replace(pathRe, (match, dVal, offset) => {
    const stack = stackAt(text, offset);
    const chain = [T_outer, ...stack];
    const M = composeChainToMat(chain);
    const newD = remapPathDWithAff(dVal, M, Aff);
    const needle = `d="${dVal}"`;
    const i = match.indexOf(needle);
    if (i < 0) throw new Error("path d= mismatch in remapTsxFile");
    return match.slice(0, i) + `d="${newD}"` + match.slice(i + needle.length);
  });

  const textRe = /<text(\s+)x="([^"]+)"(\s+)y="([^"]+)"/g;
  text = text.replace(textRe, (match, _s1, xv, _s2, yv, offset) => {
    if (match.includes("{getLabelFor")) return match;
    const x = stripPx(xv);
    const y = stripPx(yv);
    const stack = stackAt(text, offset);
    const chain = [T_outer, ...stack];
    const M = composeChainToMat(chain);
    const [wx, wy] = apply3(M, x, y);
    const [tx, ty] = applyAffine(Aff, wx, wy);
    const inv = invert3(M);
    const [nx, ny] = apply3(inv, tx, ty);
    return match.replace(
      /x="[^"]+"(\s+)y="[^"]+"/,
      `x="${nx.toFixed(3)}px"$1y="${ny.toFixed(3)}px"`,
    );
  });

  fs.writeFileSync(full, text, "utf8");
  console.log("Remapped TSX", relPath);
}

function main() {
  const r2015 = processDataset("ridingDataSet2015", "riding_data_2015.ts");
  const r2025 = processDataset("ridingDataSet2025", "riding_data_2025.ts");
  console.log("Affine delta check", {
    db1: r2015.Aff.b1 - r2025.Aff.b1,
    db2: r2015.Aff.b2 - r2025.Aff.b2,
    da11: r2015.Aff.a11 - r2025.Aff.a11,
  });

  remapTsxFile("components/Map.tsx", r2015.Aff);
  remapTsxFile("components/Borders2015.tsx", r2015.Aff);
  remapTsxFile("components/Borders2025.tsx", r2025.Aff);

  let mapText = fs.readFileSync(path.join(ROOT, "components", "Map.tsx"), "utf8");
  const layout = computeAndWriteMapLayout(mapText);

  const p2015Path = path.join(ROOT, "data", "riding_data_2015.ts");
  const p2025Path = path.join(ROOT, "data", "riding_data_2025.ts");
  const prov2015 = extractDatasetArray(
    fs.readFileSync(p2015Path, "utf8"),
    "ridingDataSet2015",
  );
  const prov2025 = extractDatasetArray(
    fs.readFileSync(p2025Path, "utf8"),
    "ridingDataSet2025",
  );
  applyRideShiftToProvinceTransforms(prov2015, layout.ridingShiftX, layout.ridingShiftY);
  applyRideShiftToProvinceTransforms(prov2025, layout.ridingShiftX, layout.ridingShiftY);
  writeRidingDataset(p2015Path, "ridingDataSet2015", prov2015);
  writeRidingDataset(p2025Path, "ridingDataSet2025", prov2025);

  mapText = bakeMapTsx(mapText, layout);
  fs.writeFileSync(path.join(ROOT, "components", "Map.tsx"), mapText, "utf8");
  console.log("Baked shifts into Map.tsx");

  const halfRow = (SQRT3 * S) / 2;
  bakeBorderProvincialNudgeAndUsHalf(
    "components/Borders2015.tsx",
    layout.provincialNudge2015,
    halfRow,
  );
  bakeBorderProvincialNudgeAndUsHalf(
    "components/Borders2025.tsx",
    layout.provincialNudge2025,
    0,
  );
  bakeBordersTsx("components/Borders2015.tsx", layout);
  bakeBordersTsx("components/Borders2025.tsx", layout);
}

main();
