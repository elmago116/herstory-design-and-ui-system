#!/usr/bin/env node
/**
 * audit-interactions.mjs — behaviour gate for the prototype's interaction layer.
 *
 * Every assertion here closed a finding in
 * `HerStory/ux/Interaction evaluation — HerStory prototype (2026-11-25).md`.
 * It runs the built site (dist/) in Chromium and fails on the first broken
 * contract, so `npm run verify` cannot drift back to the pre-round-2 behaviour.
 *
 *   npm run build && npm run audit:interactions
 */
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(root, "dist");

if (!fs.existsSync(DIST)) {
  console.error("audit-interactions: dist/ missing — run `npm run build` first");
  process.exit(1);
}

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json",
  ".yaml": "text/yaml",
};

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

const results = [];
const record = (name, ok, detail) => {
  results.push({ name, ok, detail });
  console.log(`${ok ? "pass" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
};

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const norm = (value) => (value ?? "").replace(/\s+/g, " ").trim().toLowerCase();

async function open(route) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  }).catch(() => {});
  await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => document.documentElement.dataset.interactions === "ready",
    undefined,
    { timeout: 8000 },
  ).catch(() => {});
  await page.waitForTimeout(400);
}

async function clickLabel(label, nth = 1) {
  const box = await page.evaluate(
    ({ label, nth }) => {
      const clean = (value) => (value || "").replace(/\s+/g, " ").trim().toLowerCase();
      const hits = [...document.querySelectorAll("button, [role='button'], a, [data-nav-item]")].filter(
        (element) =>
          clean(element.textContent) === clean(label) ||
          clean(element.getAttribute("aria-label")) === clean(label),
      );
      const element = hits[nth - 1];
      if (!element) return null;
      element.scrollIntoView({ block: "center" });
      const rect = element.getBoundingClientRect();
      return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2, count: hits.length };
    },
    { label, nth },
  );
  if (!box) return null;
  await page.waitForTimeout(150);
  await page.mouse.click(box.x, box.y);
  await page.waitForTimeout(500);
  return box;
}

const snapshot = () =>
  page.evaluate(() => ({
    path: location.pathname,
    query: location.search,
    dialog: Boolean(document.querySelector("[role='alertdialog']")),
    banner: document.querySelector("#herstory-banner")?.textContent ?? null,
    toast: document.querySelector("#herstory-toast-host [role='status']")?.textContent ?? null,
    undo: document.querySelector("#herstory-toast-host button")?.textContent ?? null,
    store: localStorage.getItem("herstory-prototype/v1"),
    rowStrip: document.querySelector("#herstory-row-context")?.textContent ?? null,
  }));

/* ---------------------------------------------------------------- A1 guard -- */
await open("/ui/ui-16-2-approve-and-publish/");
const a1before = await snapshot();
await clickLabel("Publish");
const a1 = await snapshot();
record(
  "A1 publish without approval is refused and says why",
  a1.toast?.includes("Approve the batch before publishing") === true && a1.store === a1before.store,
  `toast=${JSON.stringify(a1.toast)} store=${a1.store ? "unchanged" : "absent"}`,
);

/* ------------------------------------------------------------- A2 carry ----- */
await open("/ui/ui-16-1-approve-batch/");
await clickLabel("Approve batch");
const a2 = await snapshot();
record(
  "A2 approval outcome survives the navigation",
  a2.path.includes("ui-16-2") && a2.banner?.includes("Batch approved") === true,
  `path=${a2.path} banner=${JSON.stringify(a2.banner)}`,
);

/* ------------------------------------------------------- A3 destructive ----- */
await open("/ui/ui-05-1-run-retention-sweep/");
await clickLabel("Delete files");
const a3dialog = await snapshot();
await page.keyboard.press("Escape");
await page.waitForTimeout(200);
const a3cancel = await snapshot();
await clickLabel("Delete files");
await clickLabel("Delete files", 2);
const a3confirm = await snapshot();
const undoButton = await page.evaluate(() => {
  const button = document.querySelector("#herstory-toast-host button");
  if (!button) return null;
  const rect = button.getBoundingClientRect();
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
});
if (undoButton) {
  await page.mouse.click(undoButton.x, undoButton.y);
  await page.waitForTimeout(400);
}
const a3undo = await snapshot();
record(
  "A3 destructive action asks first (F-02)",
  a3dialog.dialog && a3cancel.dialog === false && a3cancel.path.includes("ui-05-1"),
  `dialog=${a3dialog.dialog} escClosed=${a3cancel.dialog === false} stayed=${a3cancel.path.includes("ui-05-1")}`,
);
record(
  "A3 destructive action is reversible (F-02)",
  Boolean(undoButton) && a3confirm.store?.includes("destructiveRuns") === true && a3undo.store?.includes("destructiveRuns") === false,
  `undoOffered=${Boolean(undoButton)} ran=${a3confirm.store?.includes("destructiveRuns")} reverted=${a3undo.store?.includes("destructiveRuns") === false}`,
);

/* ----------------------------------------------------------- A4 row key ----- */
await open("/ui/ui-02-workspace-management/");
await clickLabel("Inspect", 5);
const a4 = await snapshot();
record(
  "A4 row identity reaches the destination (F-03)",
  a4.query.includes("row=") && Boolean(a4.rowStrip),
  `query=${a4.query} strip=${JSON.stringify(a4.rowStrip?.slice(0, 60))}`,
);

/* --------------------------------------------------- A5 names + keyboard ---- */
await open("/ui/ui-11-6-edit-class/");
const a5names = await page.evaluate(() => {
  const buttons = [...document.querySelectorAll("[data-board-root] button")];
  const unnamed = buttons.filter(
    (button) =>
      !(button.getAttribute("aria-label") || "").trim() &&
      !(button.textContent || "").trim() &&
      !button.getAttribute("title"),
  );
  return { total: buttons.length, unnamed: unnamed.length };
});
record("A5 every icon-only control has an accessible name (F-05)", a5names.unnamed === 0, `${a5names.unnamed} unnamed of ${a5names.total}`);

await open("/ui/ui-37-5-general-operation-superadmin/");
const a5rail = await page.evaluate(() => {
  const items = [...document.querySelectorAll("[data-nav-item]")];
  const unreachable = items.filter(
    (item) => item.getAttribute("tabindex") !== "0" || !item.getAttribute("role"),
  );
  return { total: items.length, unreachable: unreachable.length };
});
record("A5 board-drawn rail is keyboard reachable (F-04)", a5rail.total > 0 && a5rail.unreachable === 0, `${a5rail.unreachable} of ${a5rail.total} unreachable`);

await open("/ui/ui-09-source-registration/");
const a5step = await page.evaluate(() => {
  const steps = [...document.querySelectorAll("[data-board-root] [data-nav-item]")];
  const unreachable = steps.filter((step) => step.getAttribute("tabindex") !== "0" || !step.getAttribute("role"));
  return { total: steps.length, unreachable: unreachable.length };
});
record("A5 pipeline stepper is keyboard reachable (F-04)", a5step.total > 0 && a5step.unreachable === 0, `${a5step.unreachable} of ${a5step.total} unreachable`);

/* -------------------------------------------------------------- A6 draft ---- */
await open("/ui/ui-09-source-registration/");
const typed = await page.evaluate(() => {
  const field = document.querySelector("[data-board-root] input[type='text'], [data-board-root] input:not([type])");
  if (!field) return null;
  const rect = field.getBoundingClientRect();
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
});
if (typed) {
  await page.mouse.click(typed.x, typed.y);
  await page.keyboard.type("Fons Batlle 1782");
  await page.waitForTimeout(600);
}
await page.goto(`${base}/ui/ui-10-ingestion-monitor/`, { waitUntil: "networkidle" });
await page.goto(`${base}/ui/ui-09-source-registration/`, { waitUntil: "networkidle" });
await page.waitForTimeout(900);
const a6 = await page.evaluate(() => ({
  values: [...document.querySelectorAll("[data-board-root] input, [data-board-root] textarea")]
    .map((field) => field.value)
    .filter(Boolean),
  strip: Boolean(document.getElementById("herstory-draft-strip")),
}));
record("A6 typed input survives navigation (F-06)", a6.values.includes("Fons Batlle 1782") && a6.strip, `values=${JSON.stringify(a6.values.slice(0, 2))} strip=${a6.strip}`);

/* ------------------------------------------------------- A7 loader banner --- */
await page.route("**/interactions.yaml", (route) => route.abort());
await page.goto(`${base}/ui/ui-09-source-registration/`, { waitUntil: "networkidle" });
await page.waitForTimeout(900);
const a7 = await page.evaluate(() => ({
  attr: document.documentElement.dataset.interactions,
  banner: document.querySelector("#herstory-banner")?.textContent ?? null,
}));
await page.unroute("**/interactions.yaml");
record("A7 a failed rule load is visible, not silent (F-07)", a7.attr === "error" && Boolean(a7.banner), `attr=${a7.attr} banner=${Boolean(a7.banner)}`);

/* ------------------------------------------------------- A8 dead clicks ----- */
// UI-11.6/IconButton:Copy has no rule by design: the parity build keeps it in
// the board. Clicking it must explain the boundary, not do nothing silently.
await open("/ui/ui-11-6-edit-class/");
const a8target = await page.evaluate(() => {
  const button = [...document.querySelectorAll("[data-board-root] button")].find(
    (candidate) => (candidate.getAttribute("aria-label") || "").trim() === "Copy",
  );
  if (!button) return null;
  button.scrollIntoView({ block: "center" });
  const rect = button.getBoundingClientRect();
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
});
if (a8target) {
  await page.mouse.click(a8target.x, a8target.y);
  await page.waitForTimeout(500);
}
const a8 = await snapshot();
record(
  "A8 an unwired control explains itself instead of failing silently",
  Boolean(a8target) && a8.path.includes("ui-11-6") && Boolean(a8.toast),
  `target=${Boolean(a8target)} stayed=${a8.path.includes("ui-11-6")} toast=${JSON.stringify(a8.toast?.slice(0, 60))}`,
);

await browser.close();
server.close();

const failed = results.filter((result) => !result.ok);
console.log(
  `audit-interactions: ${results.length - failed.length}/${results.length} assertions pass`,
);
if (failed.length) process.exit(1);
