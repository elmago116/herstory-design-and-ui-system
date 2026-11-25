---
tags:
  - design/UX
  - design/UX/testing
  - op/doc/evaluation
date: 2026-11-25
title: Interaction evaluation — HerStory prototype, round 1
evaluates: HerStory/UI/astrocodebase - prototype (Astro static build, uis.yaml generated 2026-11-24T16:15:47Z)
protocol: "[[Protocol — Usability dimensions for the historical-data to Wikidata KG system]]"
requirements: "[[Requirements — Design requirements for the historical-data → Wikidata KG system]]"
evaluator: expert inspection + scripted runtime probes (no participants)
remediation: "[[Interaction remediation plan — HerStory prototype (2026-11-25)]]"
---

# Interaction evaluation — HerStory prototype (round 1)

## 0. Verdict

The interaction layer is a **navigation model, not a state model**. Every rule in `public/interactions.yaml` resolves, no route target is dead, and the pipeline's one real guard (cannot publish an unapproved batch) works and is observable. Beyond navigation, the layer fails in four ways that matter for task evaluation: confirmation feedback is destroyed by the navigation that immediately follows the action (48.6% of action rules), destructive operations have no confirmation and no reversal, per-row identity collapses so every row's control goes to the same destination, and the custom navigation surfaces are not keyboard operable.

Consequence for the protocol: rounds T1–T7 can be run *as navigation exercises only*; T5 (exploration), T7 (reverse a mapping change) and T9 (mapping adjudication) cannot be run against this artefact because the corresponding interactions do not exist. Not ready for participant testing except for navigation-cost and labelling studies.

---

## 1. Scope and instrument

| Field | Value |
|---|---|
| Artefact | `HerStory/UI/astrocodebase - prototype`, served by `npm run dev` on `http://127.0.0.1:4322` |
| Version marker | `uis.yaml` → `generated_at: 2026-11-24T16:15:47.474Z`; 149 surfaces, 17,722 lines |
| Instrument | Expert inspection (T1) + scripted runtime probes in headless Chromium (T0), `localStorage` cleared between probes |
| Surfaces evaluated (runtime) | UI-02 `/ui/ui-02-workspace-management` · UI-05 `/ui/ui-05-data-retention-console` · UI-05.1 `/ui/ui-05-1-run-retention-sweep` · UI-09 `/ui/ui-09-source-registration` · UI-11.6 `/ui/ui-11-6-edit-class` · UI-16.1 `/ui/ui-16-1-approve-batch` · UI-16.2 `/ui/ui-16-2-approve-and-publish` · UI-37.5 `/ui/ui-37-5-general-operation-superadmin` |
| Surfaces evaluated (inventory only) | all 149, via `uis.yaml` + `interactions.yaml` analysis |
| Out of scope | visual parity, token/aesthetic review, any live service, explanations with real content, provenance with real data |

Protocol tasks attempted: **T1** partial (ingestion entry surfaces only, no ingest), **T7** partial (approve → publish → no reversal available). Tasks not attempted: T2, T3, T4, T5, T6, T8, T9 — no mapping editor state, no service, no graph, no second channel. Named in §5.

---

## 2. Interaction inventory

| Metric | Value | Source |
|---|---|---|
| Surfaces | 149 (141 with behaviour rules, 9 without) | `uis.yaml`, `interactions.yaml` |
| Component instances | 1,740 | `uis.yaml` `components:` |
| Instances with a behaviour rule | 367 (**21.1%**) | coverage script (skill `references/03` §5.2) |
| Rules by effect | `navigate` 336 · `action` 109 · `back` 3 = **448** across 141 surfaces | `node scripts/check-interactions.mjs` |
| Rules keyed by control | 371 by `control:` + 77 label-only | `interactions.yaml` |
| `onClick` handlers with real logic | 49 of 904 (**5.4%**) | `uis.yaml` → `handlers` |
| Duplicate-label instances | 632; 35 label groups covered by exactly **one** unscoped rule; `nth:`/`scope:` used **0** times | coverage script |
| Action rules that navigate away immediately after acting | **53 of 109 (48.6%)** | `interactions.yaml` |
| Hydration | 111 `client:load`, 38 `static` | `uis.yaml` |

Reading: the artefact is deliberately a parity prototype of *screens*, and its behaviour is a thin routing layer over them. That makes navigation findings generalisable (the routing model is real) and state findings weak (the state model is one `localStorage` object with two records). Finding class `boundary` is applied wherever absence is a declared prototype limit rather than a design decision.

---

## 3. Findings

### 3.1 Severity summary

| Module | 4 | 3 | 2 | 1 | 0 (positive) | boundary | validity |
|---|---|---|---|---|---|---|---|
| M1 Core usability | 0 | 3 | 2 | 0 | 3 | 1 | 0 |
| M2 Information architecture | 0 | 1 | 1 | 0 | 2 | 0 | 0 |
| M3 KG exploration | 0 | 0 | 0 | 0 | 0 | 0 | 1 (not evaluable) |
| M4 Ingestion/mapping authoring | 0 | 0 | 0 | 0 | 0 | 1 | 1 (not evaluable) |
| M5 Explainability | — | — | — | — | — | — | not evaluable |
| M6 Provenance/observability | — | — | — | — | — | — | not evaluable |
| M7 Beyond-task UX | — | — | — | — | — | — | not evaluable |
| M8 Trust/ethics/culture | — | — | — | — | — | — | not evaluable |
| M11 Epistemic justice | 0 | 0 | 0 | 0 | 0 | 1 | — |

**No severity 4 was recorded.** A severity 4 is reachable on port (see F-02) but is not observable in an artefact that deletes nothing.

### 3.2 Core usability (M1)

#### F-01 — Confirmation feedback is destroyed by the navigation that follows it
- **Dimension** M1.1.1 · **REQ** REQ-1.2.3 · **Severity** 3 · **Class** defect · **Tier** T0 + T1
- **Surface** UI-16.1 `/ui/ui-16-1-approve-batch`, UI-16.2 `/ui/ui-16-2-approve-and-publish`; structurally 53 action rules.
- **Repro** clear `localStorage` → `Publish` (batch pending) → toast `Approve the batch before publishing` is visible (this is the *failure* path, no navigation). Now `localStorage.batches["staging-2026-11-02a"].status = approved` via `Approve batch` → store flips to `approved`, URL changes to `/ui/ui-16-2-approve-and-publish`, and `#herstory-toast-host [role='status']` in the destination document is empty. Same for `Publish` → store `published`, no toast.
- **Evidence** the success toast is created and the document is replaced in the same click: `src/scripts/interactions.ts` `onClick()` calls `runAction(rule)` then immediately `navigate(rule)` when `rule.to` is set; the toast lives in the old document's `#herstory-toast-host` and 3.8 s of lifetime are irrelevant. Exposure measured: 53/109 action rules carry `to:`.
- **Recommendation** carry the outcome across the boundary: put the message in `sessionStorage`/query and re-render it on the destination surface, or drop `to:` from action rules and let the user navigate after reading. A success signal that the user never sees is the same as no success signal, which is exactly the difference between H1 and H1-in-theory.

#### F-02 — Destructive action executes with no confirmation and no reversal
- **Dimension** M1.2.6 · **REQ** REQ-4.4.1 · **Severity** 3 · **Class** defect · **Tier** T0 + T1
- **Surface** UI-05.1 `/ui/ui-05-1-run-retention-sweep`, button `Delete files`.
- **Repro** navigate → count `[role='dialog'],[role='alertdialog'],dialog[open]` = 0 → click `Delete files` → dialogs still 0, URL jumps to `/ui/ui-05-data-retention-console`, no toast anywhere in the trace.
- **Evidence** `interactions.yaml` maps the control to `action: destructive`; `actions.destructive` in `src/scripts/interactions.ts` returns only a message (`"Destructive action simulated; data left unchanged."`), never a confirm gate, and `to:` navigates immediately (F-01). Four controls use `action: destructive`; no undo/redo affordance exists anywhere in the inventory (`handlers.live` = 49/904, none implementing reversal).
- **Recommendation** confirmation dialog naming the object and count; an undo entry in the console after execution; keep the user on the surface that shows the outcome. On a live backend this behaviour is severity 4 (irreversible data loss) — the prototype's simulated delete is the only reason it is rated 3 here.

#### F-03 — Row identity collapses: every row's control reaches the same destination
- **Dimension** M1.1.6 · **REQ** REQ-1.1.6 · **Severity** 3 · **Class** defect · **Tier** T0 + T1
- **Surface** UI-02 `/ui/ui-02-workspace-management` (5 × `Inspect`); structurally 35 label groups on 35 surfaces.
- **Repro** click the 5th `Inspect` → URL `/ui/ui-02-1-inspect-workspace`; click the 1st → same URL. No per-row identity is carried.
- **Evidence** rules match by visible label (`findRule()` compares `textContent`), and when a label repeats without `nth`/`scope` the first unscoped rule wins: 632 duplicate-label instances exist, 35 label groups have exactly one unscoped rule, and `nth`/`scope` appear 0 times in 448 rules. The 5 `Inspect` rows are 5 different workspaces in the design; the prototype can only show one.
- **Recommendation** carry the row key into the target (`?id=` or path segment) and make the detail surface read it; or, if the prototype intentionally has one detail page, name the narrowed destination in the control ("Inspect workspace A") so the evaluation does not read as a competence failure by the user. Cross-referenced under M2.1.13 and M3.1.4 (details-on-demand).

#### F-06 — Typed input does not survive navigation
- **Dimension** M1.2.8 · **REQ** REQ-1.1.6 · **Severity** 2 · **Class** defect · **Tier** T0
- **Surface** UI-09 `/ui/ui-09-source-registration`, first text input (placeholder `e.g. Barcelona census 1912`).
- **Repro** type `Fons Batlle 1782` → value present → navigate away and back to the same route → all board inputs empty.
- **Evidence** `primePrototypeDom()` clones inputs to make them uncontrolled (typing works within the page), but nothing persists across documents; `localStorage` holds only the batch/suggestion store and `herstory-role`.
- **Recommendation** for evaluation purposes, persist form state per route in `sessionStorage` and restore on load. Losing a half-filled source-registration form is the exact memory-load penalty REQ-1.1.6 forbids, and it makes multi-step tasks unmeasurable for time-on-task.

#### F-07 — Loader failure and the pre-ready window are silent
- **Dimension** M1.1.9 · **REQ** REQ-1.1.9 · **Severity** 2 · **Class** defect · **Tier** T1 (+T2 marked)
- **Surface** every board route (`Board.astro` loads `src/scripts/interactions.ts`).
- **Evidence** `load()` sets `documentElement.dataset.interactions = "error"` and `console.warn`s when `/interactions.yaml` fails — no user-visible error, no retry, and the page looks fully interactive. Before the fetch resolves, `config` is `null` and `onClick()` returns silently at its first guard, so early clicks are dropped with no feedback. `[INFERENCE]` the window is short on localhost and long on a cold network; the silent-drop code path is T1.
- **Recommendation** render a visible "interactions unavailable" banner bound to `data-interactions="error"`, and queue or explain clicks while loading instead of swallowing them.

#### F-08 — 78.9% of controls carry no behaviour (validity constraint)
- **Dimension** M1.3.1 · **REQ** REQ-9.2.1 · **Severity** 2 · **Class** boundary · **Tier** T0
- **Evidence** 367 of 1,740 component instances have a rule; 9 surfaces have none (`UI-11`, `UI-37`, `UI-37.1`–`37.4`, `DS-01`–`DS-03`); 49 of 904 `onClick` handlers contain logic. Clicking a labelled unwired control explains itself (P-03), which is honest, but any task that needs one of the 1,373 unwired controls measures the boundary, not the design.
- **Recommendation** before participant rounds, either wire the controls for the tasks in scope or mark those tasks "not runnable" in the test script. Publishing the coverage number with the artefact is the cheapest defensible option.

#### P-01 — Pipeline gate guard works and is observable
- **Dimension** M1.1.5 · **REQ** REQ-1.1.5 · **Severity** 0 · **Class** positive · **Tier** T0
- `Publish` with a pending batch → toast `Approve the batch before publishing`, `localStorage` unchanged. Guard is in `actions.publishBatch` and its message names the required prior step. This is the model other gates should copy.

#### P-02 — State transitions are recorded, not animated
- **Dimension** M1.2.4 · **REQ** REQ-1.2.4 · **Severity** 0 · **Class** positive (with F-01 as caveat) · **Tier** T0
- `approveBatch` → `{status:"approved"}`, `publishBatch` → `{status:"published"}` in `localStorage["herstory-prototype/v1"]`; the state vocabulary is explicit (`pending|staging|approved|published`), which makes closure measurable once F-01 is fixed.

#### P-03 — Unwired controls explain themselves instead of failing silently
- **Dimension** M1.1.9 · **REQ** REQ-1.1.9 · **Severity** 0 · **Class** positive · **Tier** T1
- `explainMissing()` toasts `…is present for visual parity but has no wired destination. Coverage: /prototype` once per label. The design intent is right; F-05 shows two paths where it silently does nothing.

### 3.3 Information architecture (M2)

#### F-04 — Custom navigation surfaces are not keyboard operable
- **Dimension** M2.3.11 · **REQ** REQ-2.3.1 · **Severity** 3 · **Class** defect · **Tier** T0
- **Surface** UI-09 pipeline stepper (6 steps), UI-37.5 role shell (19 sidebar items).
- **Repro** on `/ui/ui-09-source-registration` evaluate `.pipeline-flow [data-nav-item]`: every step is `DIV`, `tabIndex -1`, `role null`, `cursor: pointer`. Tabbing through the page reaches header and rail links but never a pipeline step. Same on `/ui/ui-37-5-general-operation-superadmin`: 19 `[data-nav-item]` divs, `tabIndex -1`, no role.
- **Evidence** `primePrototypeDom()` promotes `div`s to clickable by setting `dataset.navItem`, `dataset.match` and `cursor` only; no `tabindex`, no `role`, no key handler. WCAG 2.1.1 (keyboard) and 4.1.2 (name, role, value) fail for the primary navigation of the pipeline.
- **Recommendation** render steps and rail items as `<a>`/`<button>` (or `role="link" tabindex="0"` plus Enter/Space handling) and keep the click delegation. Fixing this in the board component, not in the interaction script, keeps parity.

#### F-05 — Icon-only controls have no accessible name and produce no feedback when clicked
- **Dimension** M2.3.13 · **REQ** REQ-2.3.1 · **Severity** 2 · **Class** defect · **Tier** T0 + T1
- **Surface** UI-11.6 `/ui/ui-11-6-edit-class`.
- **Repro** six `<button>`s on the surface have empty text, `aria-label` null, `title` null, and one `svg` child; the `IconButton:Copy` (board line 73) has no rule. Clicking it changes nothing and shows nothing.
- **Evidence** `explainMissing()` derives the label from `aria-label` → `data-match` → `textContent`; all three are empty for these buttons, so it returns before toasting. A silent dead click is worse than a dead click with an explanation, because the reviewer cannot distinguish "not wired" from "broken".
- **Recommendation** require an accessible name on every icon button (`aria-label` from the icon's meaning), and fall back to the icon name or the control key when the label is empty so the parity toast still fires.

#### P-04 — Toast host is announced to assistive technology
- **Dimension** M2.3.10 · **REQ** REQ-2.3.1 · **Severity** 0 · **Class** positive · **Tier** T1 + T0
- `#herstory-toast-host` sets `aria-live="polite"`, each item is `role="status"`. Confirmed present in the DOM after a failed `Publish`. The announcement path exists even though F-01 destroys most of the messages it would carry.

#### P-05 — Chrome controls are named and in tab order
- **Dimension** M2.3.11 · **REQ** REQ-2.3.1 · **Severity** 0 · **Class** positive · **Tier** T0
- Tab order on a board route: `A[aria-label="HerStory home"]` → workspace button → `Language` → `Help` → theme toggle → `Home` → `Collapse navigation` → rail links. Accessible names exist where the chrome is React (`GeneralHeader`, `GeneralNav`).

### 3.4 M11 — Epistemic justice (requirements-only; protocol has no dimension)

**Coverage note, not a defect.** REQ-11.3.6 requires the staging review to carry an epistemic-justice review step that can block approval. The prototype's staging flow (UI-16 → UI-16.1 → UI-16.2) is a two-button approval with a state machine and no EJ gate, no representation warning, no community-review branch. Class `boundary` (prototype), severity 2: the prototype cannot be used to test whether the EJ gate helps, and the review path that would need it is currently 2 clicks long. Verify against the product specification before treating this as a design omission.

---

## 4. Requirement coverage

| REQ | Strength | Status | Evidence |
|---|---|---|---|
| REQ-1.1.1 status visibility | MUST | violated | F-01 T0: 53/109 actions navigate before the message is read |
| REQ-1.1.3 undo/redo exits | MUST | violated | F-02: no undo affordance in the inventory |
| REQ-1.1.5 error prevention | MUST | partial | P-01 gate guard works; F-02 destructive path has none |
| REQ-1.1.6 minimise memory load | MUST | violated | F-03 row identity, F-06 input loss |
| REQ-1.1.9 plain-language errors | MUST | partial | P-03 toast explains unwired; F-05 silent dead clicks; F-07 silent loader failure |
| REQ-1.2.1 easy reversal | MUST | violated | F-02, no reversal anywhere |
| REQ-1.2.3 informative feedback | MUST | violated | F-01 |
| REQ-1.2.4 closure | MUST | partial | P-02 state recorded; signal invisible per F-01 |
| REQ-1.3.1–1.3.3 effectiveness/efficiency/satisfaction | MUST | not evaluable | needs participants (M7/M8 instruments) |
| REQ-2.1.13 navigation effectiveness | MUST | violated | F-03 |
| REQ-2.3.1 WCAG on help/documentation and surfaces | MUST | violated | F-04 keyboard, F-05 names |
| REQ-3.1.4 details-on-demand | SHOULD | violated | F-03 (single detail for 5 rows) |
| REQ-4.4.1 destructive confirm + reversal | MUST | violated | F-02 |
| REQ-9.2.1 ISO 9241-11 measures | MUST | not evaluable | no participant round yet |
| REQ-9.3.1 threefold protocol (2 manual + 1 automated MCP trace) | MUST | partial | this round = the automated-trace leg in spirit (scripted browser probes); the two manual sessions are pending |
| REQ-11.3.6 EJ review step in staging | MUST | not represented | §3.4 coverage note |

M5, M6, M7, M8 requirements: not evaluated this round — the artefact contains no explanation content, no provenance data, and no participants. Every one of them needs either the live service (T3, T4, T8) or users (T2, T5, T6).

---

## 5. Not evaluable in this round

| Dimension / task | Why | What would measure it |
|---|---|---|
| M3.1–3.8 exploration | no graph, no facets, no filters wired (UI-33 has 26 unwired of 28) | live KG service + T5 |
| M4.5 mapping adjudication, M5.* explanations | no mapping state, no explanation surface with content | T4, T9 against service |
| M6.1–6.8 provenance, polyvocality, data quality | screens exist, data does not | T3, T6 with seeded records |
| M7.1–7.7 experiential UX, UEQ/CSUQ | requires participants | protocol §3 measures |
| M8.2–8.5 culture, ethics panel, personas | requires panel and cohorts | protocol §3 cohorts |
| T8 cross-channel consistency | no API, no Cypher session | DCMI26 threefold protocol |

---

## 6. Iteration plan

| Round | Change under test | Surfaces | Success criterion |
|---|---|---|---|
| 2 | Outcome carried across navigation (F-01); confirm dialog + undo for destructive rules (F-02) | UI-16.1, UI-16.2, UI-05.1 | after `Approve`/`Publish`/`Delete files`, success state visible on the destination surface without a second click; undo present for destructive |
| 2 | Row identity in targets (F-03) | UI-02, UI-04, UI-06 | 5th row reaches a destination that names the 5th row |
| 2 | Semantic elements for pipeline steps and rail (F-04); accessible names (F-05) | UI-09, UI-37.5, UI-11.6 | full traversal by keyboard only; zero unnamed buttons |
| 3 | Form persistence (F-06); loader states (F-07) | UI-09, all routes | type → navigate → return keeps values; failed load shows a banner |
| 3 | Coverage push to the T1–T7 task set (F-08) | as listed per task | every control named in a task script is wired |

Protocol minimum is three iterations (REQ-10.3.1); this is round 1.

---

## 7. Evidence ledger

| ID | Artefact | Where |
|---|---|---|
| E-01 | Publish-before-approve toast | `ux/assets/2026-11-25-publish-guard-toast.png` |
| E-02 | Rule validity run | `node scripts/check-interactions.mjs` → `448 rules across 141 surfaces; targets valid` |
| E-03 | Coverage + collision counts | skill `references/03-evidence-protocol.md` §5.2, run against `uis.yaml` + `interactions.yaml` |
| E-04 | Five `Inspect` → one destination | probe on `/ui/ui-02-workspace-management`, 1st and 5th click, same URL |
| E-05 | `Delete files` no dialog | probe on `/ui/ui-05-1-run-retention-sweep`, dialog count 0 → 0, URL to console |
| E-06 | Approve/publish state trace | `localStorage["herstory-prototype/v1"]` before/after, `pending → approved → published` |
| E-07 | Keyboard inoperability | `[data-nav-item]` inspection on UI-09 (6) and UI-37.5 (19): `DIV`, `tabIndex -1` |
| E-08 | Unnamed icon buttons | DOM inspection on `/ui/ui-11-6-edit-class`, 6 buttons with empty name |
| E-09 | Input loss | type then navigate then return on `/ui/ui-09-source-registration` |

Method note: probes ran on headless Chromium (headless WebKit failed to download its engine, `ECONNRESET`); engine choice does not affect any finding, all of which are DOM/state facts.

---

## 8. Round 2 verification (2026-11-25, same day)

Findings were re-probed after the remediation plan ran. `npm run audit:interactions` (11 assertions) and `npm run check:interactions` (schema + coverage gates) are the reproduction; both are wired into `npm run verify`.

| ID | Status | Evidence |
|---|---|---|
| F-01 feedback destroyed by navigation | **fixed** | A2: `/ui/ui-16-1` → approve → destination `/ui/ui-16-2` shows banner `Batch approved`; 53 action rules carry the outcome |
| F-02 destructive without confirm/reversal | **fixed** | A3: dialog opens on `Delete files`, `Esc` cancels without navigating, confirm runs, undo offered on destination, `destructiveRuns` disappears after undo |
| F-03 row identity collapse | **fixed** | A4: 5th `Inspect` → `?row=Maritime%20Trade%20RegisterValencia…` + strip `Viewing: …`; 31 rules row-scoped |
| F-04 custom nav not keyboard operable | **fixed** | A5: 19/19 rail items and 6/6 stepper steps are `role=link`, `tabindex=0`; Enter navigates (observed to `/ui/ui-12-mapping-editor`) |
| F-05 unnamed icon controls, silent click | **fixed** | A5: 0 unnamed of 32 buttons on UI-11.6 (`Copy`, `Close`, `Edit`, `Delete`); A8: clicking the unwired `Copy` explains the boundary |
| F-06 input lost on navigation | **fixed** | A6: `Fons Batlle 1782` restored after leaving and returning, with a `Draft restored` strip |
| F-07 silent loader failure | **fixed** | A7: aborted `/interactions.yaml` → `data-interactions="error"` + error banner with Retry |
| F-08 78.9% of controls unwired | **unchanged, now instrumented** | coverage printed by the gate (`367/1740` keyed, `484/1740` reachable); coverage work is task-driven (22/22 task-script controls wired) |

Two caveats keep this honest:

- **Parity gate**: still red on most boards, and identically red on boards this round never touched (UI-01 3.6–6.3%, UI-10 10.6–12.3%, `heightΔ 0.00%`, `outside 0.000%`). Pre-existing rendering debt against the Subframe export, not a regression from this work.
- **Behaviour on a static build only**: the gate runs `dist/` in Chromium. `localStorage`/`sessionStorage` are cleared per assertion; the undo assertion proves the simulated destructive run is reversible, not that a real deletion is.
