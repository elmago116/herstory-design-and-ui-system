/**
 * verify-chrome.mjs — smoke-test the shell chrome and the in-content flow.
 *
 *   npm run build && node scripts/verify-chrome.mjs
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
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
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1500, height: 900 } });
const p = await ctx.newPage();
const errors = [];
p.on("pageerror", (e) => errors.push(String(e)));

await p.goto(base + "/ui/ui-01-user-management", { waitUntil: "networkidle" });
console.log("header:", await p.evaluate(() => ({
  chrome: !!document.querySelector(".general-header"),
  headers: document.querySelectorAll("header").length,
  language: [...document.querySelectorAll("header *")].filter((e) => e.children.length === 0 && e.textContent.trim() === "CA").length,
  breadcrumbs: !!document.querySelector(".general-breadcrumbs"),
})));

await p.locator(".general-nav button").click();
await p.waitForTimeout(250);
const collapsed = await p.locator(".general-nav").evaluate((e) => e.getBoundingClientRect().width);
await p.locator(".general-nav").hover();
await p.waitForTimeout(300);
const hovered = await p.locator(".general-nav").evaluate((e) => e.getBoundingClientRect().width);
console.log("rail:", { collapsed, hovered });

await p.evaluate(() => {
  localStorage.setItem("herstory-role", "coordinator-team");
  localStorage.setItem("herstory-nav-collapsed", "0");
});
await p.reload({ waitUntil: "networkidle" });
console.log("coordinator-team rail:", await p.evaluate(() =>
  [...document.querySelectorAll(".general-nav nav > div > span")].map((e) => e.textContent.trim()).filter(Boolean).slice(0, 2),
));

await p.goto(base + "/ui/ui-09-source-registration", { waitUntil: "networkidle" });
console.log("UI-09:", await p.evaluate(() => ({
  chrome: !!document.querySelector(".pipeline-chrome"),
  flow: !!document.querySelector(".pipeline-flow"),
  boardSteps: document.querySelectorAll("[data-board-root] [data-nav-item]").length,
})));
await p.locator("[data-board-root] [data-nav-item]", { hasText: "Ingestion" }).first().click();
await p.waitForTimeout(500);
console.log("step nav:", await p.evaluate(() => location.pathname));

console.log("UI-10 flow:", await p.evaluate(() => ({
  chrome: !!document.querySelector(".pipeline-chrome"),
  main: document.querySelectorAll(".pipeline-flow .pf-step").length,
  active: document.querySelector(".pipeline-flow .pf-step.is-active .pf-label")?.textContent,
})));

await p.goto(base + "/ui/ui-32-collection-browser", { waitUntil: "networkidle" });
console.log("UI-32 breadcrumb rows:", await p.evaluate(() => document.querySelectorAll(".general-breadcrumbs").length));

console.log("page errors:", errors.slice(0, 3));
await b.close();
srv.close();
