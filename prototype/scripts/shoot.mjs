#!/usr/bin/env node
/**
 * shoot.mjs — render the built site and capture one PNG per board per viewport.
 *
 * Determinism: the viewport width and scale come from the frozen reference export,
 * so both images share a pixel grid. Animations/transitions are frozen by
 * html[data-shots] in globals.css, fonts are awaited, locale/timezone are pinned.
 *
 *   npm run shoot -- --all
 *   npm run shoot -- --only UI-01,UI-28
 *
 * Requires dist/ (npm run build). Writes shots/local/<id>@<viewport>.png
 */
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { createRequire } from "node:module";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => (args.indexOf(n) === -1 ? null : args[args.indexOf(n) + 1]);

const DIST = path.join(root, "dist");
const REF_INDEX = path.join(root, "shots/reference/index.json");
const OUT = path.join(root, "shots/local");

if (!fs.existsSync(DIST)) {
  console.error("shoot: dist/ missing — run `npm run build` first");
  process.exit(1);
}
const refs = fs.existsSync(REF_INDEX) ? JSON.parse(fs.readFileSync(REF_INDEX, "utf8")).refs : {};

/**
 * Mobile exports are wider than the layout: Subframe renders the page at the
 * breakpoint max width and pads the capture to the canvas width. Measured on
 * UI-37.5 (export 800 css): rendering at 767 → 0.06 % diff, at 800 → 7.4 %.
 * So the layout width for `mobile` is the max width of the `mobile:` screen.
 */
const tw = createRequire(import.meta.url)("../tailwind.config.cjs");
const MOBILE_WIDTH = Number(String(tw.theme?.extend?.screens?.mobile?.max ?? "767px").replace("px", ""));
const config = YAML.parse(fs.readFileSync(path.join(root, "uis.yaml"), "utf8"));
const only = opt("--only") ? new Set(opt("--only").split(",").map((s) => s.trim())) : null;

const jobs = [];
for (const entry of config.ui) {
  if (!entry.route) continue;
  if (!flag("--all") && !(only && only.has(entry.id))) continue;
  for (const viewport of ["desktop", "mobile"]) {
    const ref = refs[`${entry.id}@${viewport}`];
    if (!ref) continue;
    jobs.push({ entry, viewport, ref });
  }
}
if (!jobs.length) {
  console.error("shoot: nothing to do — need shots/reference/index.json (npm run refs)");
  process.exit(1);
}

/* ---- tiny static server over dist/ so the harness never depends on astro dev ---- */
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(DIST, urlPath);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file)) {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, { "content-type": MIME[path.extname(file)] ?? "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;

fs.mkdirSync(OUT, { recursive: true });
const chartIndex = fs.existsSync(path.join(OUT, "charts.json"))
  ? JSON.parse(fs.readFileSync(path.join(OUT, "charts.json"), "utf8"))
  : {};
const browser = await chromium.launch();
const results = [];

for (const { entry, viewport, ref } of jobs) {
  const context = await browser.newContext({
    // Boards are authored as full-canvas layouts (h-full): the box must match the
    // canvas the reference was rendered in. Mobile lays out at the breakpoint max.
    viewport: {
      width: viewport === "mobile" ? Math.min(MOBILE_WIDTH, ref.cssWidth) : ref.cssWidth,
      height: ref.cssHeight,
    },
    deviceScaleFactor: ref.scale,
    reducedMotion: "reduce",
    locale: "en-GB",
    timezoneId: "UTC",
    colorScheme: "light",
  });
  await context.addInitScript(() => {
    // set after <html> exists; runs before any page script
    const mark = () => document.documentElement.setAttribute("data-shots", "");
    if (document.documentElement) mark();
    else document.addEventListener("DOMContentLoaded", mark, { once: true });
    // Determinism: no wall-clock or random ids in the rendered output.
    let seed = 42;
    Math.random = () => {
      seed = (seed * 1103515245 + 12345) % 2 ** 31;
      return seed / 2 ** 31;
    };
    const fixed = 1_700_000_000_000;
    const RealDate = Date;
    // @ts-expect-error — test-only shim
    window.Date = class extends RealDate {
      constructor(...a) {
        super(...(a.length ? a : [fixed]));
      }
      static now() {
        return fixed;
      }
    };
  });
  const page = await context.newPage();
  await page.goto(base + entry.route, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const out = path.join(OUT, `${entry.id}@${viewport}.png`);
  await page.screenshot({ path: out, fullPage: true, animations: "disabled", caret: "hide", scale: "device" });
  const { width, height, charts } = await page.evaluate(() => {
    // Chart regions (recharts svgs and any svg-bearing element that spans a
    // meaningful area) are recorded so diff.mjs can split the gate: the page is
    // scored outside the charts, the charts are scored inside their own band.
    const boxes = [...document.querySelectorAll("svg")]
      .map((el) => {
        const r = el.getBoundingClientRect();
        if (r.width < 60 || r.height < 40) return null; // icons, avatars
        return [
          Math.round((r.left + window.scrollX) * window.devicePixelRatio),
          Math.round((r.top + window.scrollY) * window.devicePixelRatio),
          Math.round(r.width * window.devicePixelRatio),
          Math.round(r.height * window.devicePixelRatio),
        ];
      })
      .filter(Boolean);
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.scrollHeight,
      charts: boxes,
    };
  });
  await context.close();
  results.push({ key: `${entry.id}@${viewport}`, viewport, cssWidth: width, cssHeight: height });
  chartIndex[`${entry.id}@${viewport}`] = charts;
  console.log(`[shoot] ${entry.id}@${viewport}  ${width}×${height} css`);
}

await browser.close();
server.close();

fs.writeFileSync(
  path.join(OUT, "index.json"),
  JSON.stringify({ base, shotAt: new Date().toISOString(), shots: results }, null, 2) + "\n",
);
fs.writeFileSync(path.join(OUT, "charts.json"), JSON.stringify(chartIndex, null, 2) + "\n");
console.log(`[shoot] ${results.length} screenshot(s) → shots/local/`);
