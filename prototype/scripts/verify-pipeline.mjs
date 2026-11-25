/**
 * verify-pipeline.mjs — audit every primary pipeline surface for the in-content
 * flow: no sticky chrome and six main stages. Secondary process steppers stay
 * where the board already renders them.
 *
 *   npm run build && node scripts/verify-pipeline.mjs
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { chromium } from "playwright";

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2" };
const srv = http.createServer((req, res) => {
  let f = path.join("dist", new URL(req.url, "http://x").pathname);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { "content-type": MIME[path.extname(f)] ?? "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => srv.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${srv.address().port}`;
const cfg = YAML.parse(fs.readFileSync("uis.yaml", "utf8"));
const targets = cfg.ui.filter((u) => u.route && u.kind === "primary" && u.pipeline);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1500, height: 1000 } });
const p = await ctx.newPage();
const errors = [];
p.on("pageerror", (e) => errors.push(String(e)));
let failures = 0;
for (const entry of targets) {
  await p.goto(base + entry.route, { waitUntil: "networkidle" });
  const state = await p.evaluate(() => ({
    chrome: !!document.querySelector(".pipeline-chrome"),
    flow: document.querySelectorAll(".pipeline-flow .pf-step").length,
    boardMain: document.querySelectorAll("[data-board-root] [data-nav-item]").length,
  }));
  const ok = !state.chrome && (state.flow === 6 || state.boardMain >= 6);
  if (!ok) failures++;
  console.log(`${entry.id} ${ok ? "ok" : "FAIL"} flow=${state.flow} boardSteps=${state.boardMain}`);
}
console.log(`${targets.length - failures}/${targets.length} primary pipeline surfaces have a flow`);
console.log("page errors:", errors.slice(0, 3));
await b.close();
srv.close();
if (failures) process.exit(1);
