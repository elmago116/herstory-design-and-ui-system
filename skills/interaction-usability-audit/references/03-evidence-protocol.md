---
title: Evidence protocol — tiers, severity anchors, sampling, instrument scripts
used-by: interaction-usability-audit
---

# Evidence protocol

## 1. Evidence tiers

Every finding carries one tier. A finding may cite several, but the tier is the weakest fact it depends on.

| Tier | Meaning | Example |
|---|---|---|
| **T0 observed** | Reproduced in a running artefact this round; the trace is in the report | click `Publish` → toast `Approve the batch before publishing` at `#herstory-toast-host`, `localStorage` unchanged |
| **T1 code-read** | Established by reading the implementing source, not by running | `onClick()` runs `runAction()` then `navigate()` synchronously in `src/scripts/interactions.ts` |
| **T2 inference** | Neither: derived from configuration counts, specs, or reasoning. Must be marked `[INFERENCE]` | "a click during the first ~250 ms of hydration is dropped" |

Rules:
- T2 findings may enter the report only as `validity` or as an explicitly marked open question; never as a rated `defect`.
- A T1 claim that a designer could reasonably reach differently from a 30-second probe must be probed or demoted.
- Counts (coverage percentages, rule counts) are T1 unless produced by a script whose invocation is recorded — then T0.

## 2. Severity anchors (fixed; protocol §3)

| Severity | Anchor |
|---|---|
| 4 — catastrophic | irreversible data loss, or the primary task cannot be completed through the interface |
| 3 — major | task fails, or completes silently with the wrong outcome, or the user cannot tell the outcome |
| 2 — minor | recoverable friction: retry, extra step, lost input that can be re-entered, unclear but discoverable |
| 1 — cosmetic | noticed only when pointed out; does not affect task completion |
| 0 | not a problem (record it: it is evidence of coverage) |

Do not escalate for frequency, and do not escalate because a requirement says MUST. A MUST violation still scores on behaviour. Frequency goes in the summary ("×5 surfaces"), not the score.

## 3. Class

| Class | Rate? | Meaning |
|---|---|---|
| `defect` | yes, 1–4 | Present, implemented, and wrong or missing inside declared scope |
| `boundary` | cap at 2 | Absent because the artefact is a prototype/parity build, a declared limitation, or a mock. Quantify coverage instead of rating the design |
| `validity` | no | The instrument cannot measure it (real users, live service, second channel, bias audits, culture) |
| `positive` | 0 | A working guard/feedback path. Required: the protocol evaluates effectiveness, not only failure |

Boundary test — ask in order: (1) Does the artefact's own documentation declare it a prototype boundary? (2) Is the missing thing a service, dataset, or backend? (3) Would the same code path work if the service existed? Three yess → `boundary`. Any no → `defect`.

## 4. Sampling

- Scope by capability: pick ≥1 surface per capability touched by the round, ≥3 surfaces per module under review, plus every surface named in a requirement under test.
- Mandatory probe set per surface: state-changing action; the same action with its precondition false; a destructive action; an unwired/unnamed control; keyboard-only traversal; type → navigate → return.
- Rotate surfaces between rounds so coverage is not concentrated on the boards that render fastest.

## 5. Instrument scripts

### 5.1 Rule validity (repo-provided)

```bash
cd "HerStory/UI/astrocodebase - prototype" && node scripts/check-interactions.mjs
```
Expect: `N rules across M surfaces; targets valid`. Any error line is a T0 finding (dead rule, unknown route).

### 5.2 Coverage and label collisions

```bash
cd "HerStory/UI/astrocodebase - prototype" && node - <<'EOF'
import fs from "node:fs"; import YAML from "./node_modules/yaml/dist/index.js";
const inv = YAML.parse(fs.readFileSync("uis.yaml","utf8"));
const ix  = YAML.parse(fs.readFileSync("public/interactions.yaml","utf8"));
let inst=0, wired=0; const per=[];
for (const s of inv.ui) {
  const keys=new Set((s.components??[]).map(c=>c.key.split("/").slice(1).join("/")));
  const rc=new Set((ix.surfaces[s.id]??[]).map(r=>r.control).filter(Boolean));
  const w=[...keys].filter(k=>rc.has(k)).length; inst+=keys.size; wired+=w;
  per.push({id:s.id,keys:keys.size,rules:(ix.surfaces[s.id]??[]).length,wired:w});
}
const eff={}; for (const rl of Object.values(ix.surfaces)) for (const r of rl) eff[r.effect]=(eff[r.effect]??0)+1;
console.log(JSON.stringify({surfaces:inv.ui.length, instances:inst, wired, pct:+(100*wired/inst).toFixed(1), effects:eff,
  noRules:per.filter(p=>p.rules===0).map(p=>p.id)}, null, 1));
EOF
```

### 5.3 Runtime probe loop

```bash
cd "HerStory/UI/astrocodebase - prototype" && npm run dev    # note the port it actually binds
```

Then, per probe: clear `localStorage`, navigate, take the box of the target control, click with a real mouse event, read `#herstory-toast-host [role='status']`, `location.href`, and `localStorage`. Record the URL, the visible control label, and the observed values. A toast read >3.8 s after the click is meaningless: the host removes it.

## 6. Recording a finding

```markdown
### F-03 — Destructive action executes with no confirmation
- **Dimension** M1.2.6 · **REQ** REQ-4.4.1 · **Severity** 4 · **Class** defect · **Tier** T0+T1
- **Surface** UI-05.1 `/ui/ui-05-1-run-retention-sweep`
- **Repro** click `Delete files` → dialogs before 0, dialogs after 0, URL → `/ui/ui-05-data-retention-console`, no toast in the destination document
- **Code** `src/scripts/interactions.ts` `actions.destructive` returns a toast only; `onClick()` navigates immediately after `runAction()`
- **Recommendation** confirmation dialog naming the artefact and record count; reversible via undo entry; keep the outcome toast on the destination surface
```

## 7. Do not

- Do not seed state through a script to make a flow reachable, then report the flow as working: either drive it through the UI or mark the probe `seeded`.
- Do not evaluate against the deployed service and the prototype in one finding; different instruments, different findings.
- Do not carry severities between rounds: re-score on the current artefact.
