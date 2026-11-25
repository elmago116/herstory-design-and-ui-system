#!/usr/bin/env node
/**
 * signoff.mjs — record a per-board visual sign-off (§11 option 2).
 *
 * A sign-off is the explicit, dated record that a human accepted a board at its
 * current measured parity (the renderer floor), with a note explaining why. It
 * pins a baseline so `gen-yaml --check` fails if the board later regresses
 * past it (§11 option 4).
 *
 *   node scripts/signoff.mjs --only UI-17,UI-13.2 --by "Elena G." \
 *     --note "Accepted at renderer floor: CoreText metric cascade, layout verified identical."
 *   node scripts/signoff.mjs --remove UI-17
 *   node scripts/signoff.mjs                # lists current sign-offs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONFIG = path.join(root, "uis.yaml");
const PARITY = path.join(root, "shots/parity.json");

const args = process.argv.slice(2);
const opt = (n) => (args.indexOf(n) === -1 ? null : args[args.indexOf(n) + 1]);
const ids = opt("--only")?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];
const remove = opt("--remove")?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];

const cfg = YAML.parse(fs.readFileSync(CONFIG, "utf8"));
cfg.signoffs = cfg.signoffs ?? {};
const measured = fs.existsSync(PARITY) ? JSON.parse(fs.readFileSync(PARITY, "utf8")) : {};

if (ids.length) {
  const by = opt("--by");
  const note = opt("--note");
  if (!by || !note) {
    console.error("usage: signoff.mjs --only A,B --by <name> --note <explanation>");
    process.exit(1);
  }
  const baseline = {};
  for (const vp of ["desktop", "mobile"]) {
    baseline[vp] =
      measured[`${ids[0]}@${vp}`]?.outside8 ?? measured[`${ids[0]}@${vp}`]?.ratio8 ?? null;
  }
  for (const id of ids) {
    cfg.signoffs[id] = { by, date: new Date().toISOString().slice(0, 10), note, baseline };
    console.log(`[signoff] ${id} → ${by}, baseline ${JSON.stringify(baseline)}`);
  }
}

for (const id of remove) {
  if (cfg.signoffs[id]) {
    delete cfg.signoffs[id];
    console.log(`[signoff] removed ${id}`);
  } else {
    console.error(`[signoff] no sign-off for ${id}`);
  }
}

fs.writeFileSync(CONFIG, YAML.stringify(cfg, { lineWidth: 100 }) + "\n");
console.log("[signoff] current sign-offs: " + (Object.keys(cfg.signoffs).join(", ") || "none"));
