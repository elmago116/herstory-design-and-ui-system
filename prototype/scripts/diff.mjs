#!/usr/bin/env node
/**
 * diff.mjs — parity gate: reference PNG (Subframe export) vs local PNG (Astro).
 *
 * Two metrics, because one is not enough:
 *   ratio   full-resolution pixelmatch — sensitive to glyph rasterisation
 *   ratio8  pixelmatch on 8× area-averaged images — sensitive to layout, colour,
 *           spacing, but blind to glyph-AA differences
 *
 * Why: the Subframe export service rasterises text on Linux (FreeType), a macOS
 * run of Chromium rasterises with CoreText. Same fonts, same advances at the
 * integer level, but glyph coverage differs, which pins the full-res ratio floor
 * at ~0.3–0.5 % on text-heavy boards. Measured evidence (2026-11-16, UI-01):
 *   header crop           0.074 %      table row pitch identical (88 px @2x)
 *   full board            0.525 %      ratio8 0.114 %
 * So the gate is:
 *   verified   ratio8 ≤ 0.2 %  and heightΔ ≤ 1 %   (layout + colour exact)
 *   deviated   ratio8 ≤ 2 %                        (recorded, must be explained)
 *   FAIL       otherwise, or any width mismatch
 * A real layout break moves ratio8 by whole percent; the AA floor does not.
 *
 *   npm run diff -- --all
 *   npm run diff -- --only UI-01 --tolerance 0.001
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => (args.indexOf(n) === -1 ? null : args[args.indexOf(n) + 1]);

const REF = path.join(root, "shots/reference");
const LOCAL = path.join(root, "shots/local");
const OUT = path.join(root, "shots/diff");
const PARITY = path.join(root, "shots/parity.json");

const TOL8 = Number(opt("--tolerance") ?? 0.001); // 0.2 % structural
const FAIL8 = Number(opt("--fail-at") ?? 0.02); // 2 %
const HEIGHT_TOL = Number(opt("--height") ?? 0.01); // 1 %

const refIndex = JSON.parse(fs.readFileSync(path.join(REF, "index.json"), "utf8")).refs;
const only = opt("--only") ? new Set(opt("--only").split(",").map((s) => s.trim())) : null;
const CHARTS = path.join(root, "shots/local/charts.json");
const chartBoxes = fs.existsSync(CHARTS) ? JSON.parse(fs.readFileSync(CHARTS, "utf8")) : {};
// Per-cell change threshold on the 8× downsampled images (max channel delta).

fs.mkdirSync(OUT, { recursive: true });
const parity = fs.existsSync(PARITY) ? JSON.parse(fs.readFileSync(PARITY, "utf8")) : {};
const rows = [];
let failed = 0;

/**
 * Subframe exports keep transparency (a modal scrim arrives as rgba(0,0,0,153));
 * a Chromium screenshot composites it onto white. Flatten both to white so the
 * same visual state compares equal.
 */
function flatten(img) {
  const out = new PNG({ width: img.width, height: img.height });
  for (let i = 0; i < img.data.length; i += 4) {
    const a = img.data[i + 3] / 255;
    out.data[i] = Math.round(img.data[i] * a + 255 * (1 - a));
    out.data[i + 1] = Math.round(img.data[i + 1] * a + 255 * (1 - a));
    out.data[i + 2] = Math.round(img.data[i + 2] * a + 255 * (1 - a));
    out.data[i + 3] = 255;
  }
  return out;
}

function downsample(img, f) {
  const w = Math.floor(img.width / f);
  const h = Math.floor(img.height / f);
  const out = new PNG({ width: w, height: h });
  const n = f * f;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      for (let dy = 0; dy < f; dy++) {
        for (let dx = 0; dx < f; dx++) {
          const i = ((y * f + dy) * img.width + (x * f + dx)) * 4;
          r += img.data[i];
          g += img.data[i + 1];
          b += img.data[i + 2];
        }
      }
      const o = (y * w + x) * 4;
      out.data[o] = r / n;
      out.data[o + 1] = g / n;
      out.data[o + 2] = b / n;
      out.data[o + 3] = 255;
    }
  }
  return out;
}

function crop2(img, width, height) {
  if (img.width === width && img.height === height) return img;
  const out = new PNG({ width, height });
  PNG.bitblt(img, out, 0, 0, width, height, 0, 0);
  return out;
}

const keys = Object.keys(refIndex)
  .filter((k) => flag("--all") || (only && only.has(k.split("@")[0])))
  .sort();

for (const key of keys) {
  const localPath = path.join(LOCAL, `${key}.png`);
  if (!fs.existsSync(localPath)) {
    rows.push({ key, status: "no local shot", ratio: 1, ratio8: 1 });
    failed++;
    continue;
  }
  const a = flatten(PNG.sync.read(fs.readFileSync(path.join(REF, `${key}.png`))));
  const b = flatten(PNG.sync.read(fs.readFileSync(localPath)));

  // A mobile export is padded to the canvas width; compare the shared box and
  // record how much each side exceeded it.
  const width = Math.min(a.width, b.width);
  const widthDelta = Math.abs(a.width - b.width) / a.width;
  const height = Math.min(a.height, b.height);
  const A = crop2(a, width, height);
  const B = crop2(b, width, height);

  const diff = new PNG({ width: A.width, height });
  const changed = pixelmatch(A.data, B.data, diff.data, A.width, A.height, {
    threshold: 0.1,
    includeAA: false,
  });
  fs.writeFileSync(path.join(OUT, `${key}.png`), PNG.sync.write(diff));

  const A8 = downsample(A, 8);
  const B8 = downsample(B, 8);
  const diff8 = new PNG({ width: A8.width, height: A8.height });
  const changed8 = pixelmatch(A8.data, B8.data, diff8.data, A8.width, A8.height, {
    threshold: 0.1,
    includeAA: false,
  });

  const ratio = changed / (A.width * A.height);
  const ratio8 = changed8 / (A8.width * A8.height);
  const heightDelta = Math.abs(a.height - b.height) / a.height;

  // Per-chart tolerance (§11 option 3): the board is scored outside the chart
  // boxes at the strict bar; each chart region is scored inside its own band.
  // Chart boxes come from the local DOM svg elements captured at shot time.
  // Per-chart tolerance (§11 option 3), same metric as ratio8: mask the chart
  // cells to a constant in both 8× images and run pixelmatch again. Outside =
  // image with chart cells zeroed (only outside diffs count); chart = image with
  // outside cells zeroed (only chart diffs count).
  const cells = A8.width * A8.height;
  const boxes8 = (chartBoxes[key] ?? []).map((b) => [
    Math.floor(b[0] / 8),
    Math.floor(b[1] / 8),
    Math.ceil(b[2] / 8),
    Math.ceil(b[3] / 8),
  ]);
  let outside8 = null;
  let chart8 = null;
  if (boxes8.length) {
    const isChart = new Set();
    for (const [bx, by, bw, bh] of boxes8) {
      for (let cy = by; cy < Math.min(by + bh + 1, A8.height); cy++) {
        for (let cx = bx; cx < Math.min(bx + bw + 1, A8.width); cx++) isChart.add(cy * A8.width + cx);
      }
    }
    const outside = new Set();
    for (let i = 0; i < cells; i++) if (!isChart.has(i)) outside.add(i);
    const clone = (img) => {
      const c = new PNG({ width: img.width, height: img.height });
      Buffer.from(img.data).copy(c.data);
      return c;
    };
    const zero = (img, set) => {
      for (const i of set) {
        const o = i * 4;
        img.data[o] = 0;
        img.data[o + 1] = 0;
        img.data[o + 2] = 0;
      }
    };
    // Outside: chart cells neutralized in both copies → only non-chart diffs count.
    const oa = clone(A8);
    const ob = clone(B8);
    zero(oa, isChart);
    zero(ob, isChart);
    const dOut = new PNG({ width: A8.width, height: A8.height });
    outside8 =
      pixelmatch(oa.data, ob.data, dOut.data, A8.width, A8.height, {
        threshold: 0.1,
        includeAA: false,
      }) / cells;
    // Chart: outside cells neutralized in both copies → only chart diffs count.
    const ca = clone(A8);
    const cb = clone(B8);
    zero(ca, outside);
    zero(cb, outside);
    const dCh = new PNG({ width: A8.width, height: A8.height });
    chart8 =
      pixelmatch(ca.data, cb.data, dCh.data, A8.width, A8.height, {
        threshold: 0.1,
        includeAA: false,
      }) / cells;
  }

  const status =
    outside8 !== null
      ? outside8 <= TOL8 && chart8 <= FAIL8 && heightDelta <= HEIGHT_TOL && widthDelta <= HEIGHT_TOL
        ? "pass"
        : outside8 <= FAIL8 && chart8 <= FAIL8 && widthDelta <= FAIL8
          ? "deviated"
          : "FAIL"
      : ratio8 <= TOL8 && heightDelta <= HEIGHT_TOL && widthDelta <= HEIGHT_TOL
        ? "pass"
        : ratio8 <= FAIL8 && widthDelta <= FAIL8
          ? "deviated"
          : "FAIL";
  if (status === "FAIL") failed++;

  parity[key] = {
    ratio: Number(ratio.toFixed(6)),
    ratio8: Number(ratio8.toFixed(6)),
    ...(outside8 !== null
      ? { outside8: Number(outside8.toFixed(6)), chart8: Number(chart8.toFixed(6)) }
      : {}),
    changed,
    changed8,
    pxWidth: A.width,
    pxHeight: A.height,
    refHeight: a.height,
    localHeight: b.height,
    heightDelta: Number(heightDelta.toFixed(4)),
    widthDelta: Number(widthDelta.toFixed(4)),
    status,
    measuredAt: new Date().toISOString(),
  };
  rows.push({ key, status, ratio, ratio8, outside8, chart8, changed, heightDelta });
}

fs.writeFileSync(PARITY, JSON.stringify(parity, null, 2) + "\n");

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("surface", 34) + pad("status", 10) + pad("px ratio", 10) + pad("outside", 10) + pad("chart", 10) + "heightΔ");
for (const r of rows.sort((x, y) => y.ratio8 - x.ratio8)) {
  console.log(
    pad(r.key, 34) +
      pad(r.status, 10) +
      pad(r.ratio !== undefined ? (r.ratio * 100).toFixed(3) + "%" : "—", 10) +
      pad(r.outside8 !== undefined ? (r.outside8 * 100).toFixed(3) + "%" : (r.ratio8 * 100).toFixed(3) + "%", 10) +
      pad(r.chart8 !== undefined ? (r.chart8 * 100).toFixed(3) + "%" : "—", 10) +
      (r.heightDelta !== undefined ? (r.heightDelta * 100).toFixed(2) + "%" : "—"),
  );
}
const pass = rows.filter((r) => r.status === "pass").length;
console.log(`\n${pass}/${rows.length} within ${(TOL8 * 100).toFixed(2)}% structural (${(FAIL8 * 100).toFixed(0)}% fails) — diff images in shots/diff/`);
process.exit(failed ? 1 : 0);
