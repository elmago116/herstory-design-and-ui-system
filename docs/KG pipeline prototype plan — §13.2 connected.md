---
tags:
  - op/project/plan
status: awaiting-approval
target: "astrocodebase - prototype"
source: "HerStory UIs.md §13.2 KG pipeline surfaces (coordinator)"
supersedes: "Interactive prototype plan — four shells first.md"
---

# KG pipeline prototype — §13.2 connected

Plan only. Scope: **one connected, clickable pipeline** through the 15 boards of
§13.2, in the doc's order, with real navigation, a process stepper, and mock
interaction on the key controls (mapping creation, ontology, runs, gates). Shared
running gear (interactive copies, label-wiring, localStorage store, parity split)
is specified in the parent plan *Interactive prototype plan — four shells first.md*
§3–§5; this plan only defines the pipeline-specific slice.

## 0. The chain (from the inventory table)

| # | Step (board) | Surface | Journey | Key interaction to make live (mock) |
|---|---|---|---|---|
| 1 | UI-09 | Source registration | 1.1–1.2 | register a source: connection type combobox, config fields, "Test & probe", save → step Complete |
| 2 | UI-10 | Ingestion monitor | 1.4–1.5, M2 | "Run ingestion" triggers progress; rows pass/fail; retry/escalate (UI-10.2) |
| 3 | UI-11C / UI-11S | Ontology create / consult | 2.1–2.5 | create: fork/upload → class dashboard → edit class (UI-11.6) / property (UI-11.1) → validate/publish gate |
| 4 | UI-12 | Mapping editor | 2.2–2.3, 2.7–2.8, C4 | create a mapping rule (UI-12.1), column→property mapper rows, draft/publish toggle, conflict (UI-12.2) |
| 5 | UI-13 | SHACL shapes editor | 2.4 | constraint form + shape list; validation report (UI-13.2) |
| 6 | UI-14 | CQ registry | 2.6, 4.6, S6, E5 | faceted query builder (class + property/operator/value, AND/OR), generated SPARQL preview, expected-vs-actual |
| 7 | UI-15 | Transformation runner | 3.1 | source+mapping selectors, "Run transformation" → progress + determinism hash |
| 8 | UI-16 | **Staging review — the gate** | 3.2–3.7 | batch list, approve batch (16.1) → step Complete; reject (16.3) with reason → Needs review; SHACL report (16.4) |
| 9 | UI-17 | LLM suggestion panel | 5.3, M5 | accept/reject suggestions (17.1/17.2), reasoning trace (17.3) |
| 10 | UI-18 | Wikidata resolver & aliases | 4.1, 4.5, 5.1–5.2 | QID search, match confirm (18.1), candidate comparison (18.2) |
| 11 | UI-19 | Artifact exporter | 6.1–6.5 | export buttons (TTL/RML/pyLODE/DCAT) → Export run receipt (19.1) |
| 12 | UI-20 | Absence registry | 4.4, M8 | register absence gap (20.2), view entry (20.1), provenance link |
| 13 | UI-38 | Provenance & polyvocality | REQ-6.1.1, 11.2.1 | statement origin tabs (Wikidata/archival/curation/community/LLM), dual-voice diff (38.2) |
| 14 | UI-39 | Pipeline observability | REQ-6.4.1, 6.3.3 | stage coverage panels, alert drill-down (39.2 / 39.1) |

Secondary boards (`.2`/`.3`/`.4` in the table) are reachable via the step's primary
board: dialogs and drill-downs stay board-local on the corresponding interactive
copy, not separate routes.

## 0.5 Complete component functionality (F0 — cross-cutting)

Verified against the codebase: `theme.css` ships a `.dark { … }` token block,
Tailwind runs `darkMode: "selector"`, and every §13.2 board already uses `dark:`
variants — so dark mode is a real re-skin, not a dimming hack.

| Component | Functionality (mock, no backend) | Where it lives |
|---|---|---|
| **Buttons** | No button is a dead end: wired controls (per §0 table) mutate store/DOM; any unmounted button falls back to an inline toast "Prototype: ‹label› (not wired yet)" so every press gives visible feedback | `PilotLogic` action router + `toast` |
| **Breadcrumbs** | Trail `Home / Pipeline / Step N — Name` under the top bar; every crumb navigates (Home → `/`, Pipeline → `/ui/ui-37-6-1-general-operation-coordinator-alone`, Step → current); updates on every navigation, incl. stepper Next/Prev | shell chrome, store-derived |
| **Navigation links** | All links navigate: stepper, breadcrumbs, lateral menu, inline "Continue →" and drill-down links — target map generated from `kpg_pipeline` + `roles` | chrome + stepper |
| **Dark / light mode** | Top-bar toggle flips `html.dark`, persists (`herstory-prototype/v1.theme`), re-skins the board AND chrome via the existing `dark:` variants; **gate invariant: never active under `html[data-shots]` (harness stays light)** | chrome toggle + `data-theme` listener |
| **Language selector** | Two selectors like the shells: UI language and label language (en · ca · es, persisted). UI language drives **chrome/stepper/breadcrumb strings** through a small dictionary; label language persists and swaps the demo entity labels on pilots that render Wikidata labels (UI-18 candidates, UI-11 class rows) via `data-label-key` keys. Declared non-goal: board body copy stays as-authored (one language) — `lang` attribute + `data-i18n` hooks are left as the future slot, with a visible "text: as-designed" chip when label language differs | chrome + `data-label-key` patch |
| **Workspace selector** | Role-aware workspace list (curated in `uis.yaml`: superadmin EG/IV/JM/ML + archived; coordinator/team from §13.6 galleries), persisted; active workspace shows in the header, drives the gallery highlight in the shells, and is read by pipeline steps (e.g. the staging gate records the workspace) | `uis.yaml` `workspaces:` + store |

F0 ships on all §13.2 pages in P0.5; the toggle components themselves are reused by
the four shells in the parent plan. Parity is untouched: the entire chrome layer
(unlike the boards' own `dark:` styling) hides under `data-shots`.

## 1. What "connected" means concretely

1. **Process stepper** (shared island, fixed under the top bar, hidden under
   `html[data-shots]`): the 14 steps above, showing the current step, completion
   badges (Not started · Pending · In progress · Needs review · Complete), Next/Prev
   navigation. State lives in `localStorage herstory-prototype/v1` (`steps:{id…}`,
   `gates:{staging:…}`).
2. **Forward/back links** are embedded in each step: "Continue → UI-10" on UI-09,
   etc. Reaching a step via any route marks it **In progress**; the gate (UI-16)
   flips it to **Complete** or **Needs review**.
3. **The gate is a real round-trip**: UI-16 Approve → store update → stepper badge
   changes AND the shell/gallery badges on 37.6.1 respond (parent plan P1 wiring),
   because both read the same store.
4. **UI-11 is two boards, one step**: 11C is the default entry (create); 11S
   (consult) is a sibling tab on the same step. UI-11.6/11.1 open from the class /
   property rows.
5. **No dead ends**: every step's primary controls are wired per the table; anything
   unmatched by `make-interactive.mjs` is listed as a visible inline note on the
   board, never hidden. Gaps UI-09.1 / UI-10.1 stay disabled entries with lock
   reasons (doc rule).

## 2. Pipeline slice of the machine

Reuses from the parent plan: `src/boards-interactive/` copies at the same URLs,
`make-interactive.mjs` (label-matched no-op rewrite → `data-ui-action`),
`PilotLogic.tsx` island reading `interactions:`, store versioning, parity split
(pristine copies stay the gate subjects; interactive copies checked at rest state).

Additions for §13.2 only:

```yaml
# uis.yaml
kpg_pipeline:
  steps:
    - id: source-registration   surface: UI-09      next: ingestion
    - id: ingestion             surface: UI-10      next: ontology
    - id: ontology              surface: UI-11C     sibling: UI-11S
    - id: mapping               surface: UI-12      next: shacl
    - id: shacl                surface: UI-13      next: cq
    - id: cq                   surface: UI-14      next: transformation
    - id: transformation        surface: UI-15      next: staging
    - id: staging               surface: UI-16      gate: true
    - id: suggestions           surface: UI-17      next: wikidata
    - id: wikidata              surface: UI-18      next: export
    - id: export                surface: UI-19      next: absence
    - id: absence               surface: UI-20      next: provenance
    - id: provenance            surface: UI-38      next: observability
    - id: observability         surface: UI-39
  interactions:
    UI-09:  { controls: [connection-type, probe, save] }
    UI-10:  { controls: [run-ingestion, retry, escalate] }
    UI-11C: { controls: [fork, upload, new-class, publish-gate] }
    UI-12:  { controls: [new-rule, column-property-rows, draft-publish] }
    UI-15:  { controls: [source, mapping, run] }
    UI-16:  { controls: [approve-batch, reject-with-reason, shacl-report] gate: staging }
    UI-17:  { controls: [accept, reject, trace] }
    UI-18:  { controls: [qid-search, confirm, compare] }
    UI-19:  { controls: [export-ttl, export-rml, export-pylode, export-dcat] }
```

`gen-yaml.mjs` passes `kpg_pipeline` through like `roles`/`signoffs`; `gen-routes`
keeps using pristine sources until `make-interactive` produces a copy.

## 3. Phases

| # | Phase | Steps | Acceptance |
|---|---|---|---|
| P0 | Stepper + chain | `kpg_pipeline` block; shared stepper island on the 15 URLs; Next/Prev wired; store schema | walking UI-09 → UI-39 in order with the stepper tracking In-progress/Complete; persistence across reload |
| P0.5 | F0 component layer | chrome island with breadcrumbs, dark/light toggle (`.dark`), UI/label language selectors (chrome dictionary + `data-label-key`), workspace selector (role list from `uis.yaml`), button toast fallback | every button gives feedback; breadcrumbs/language/theme/workspace persist and update chrome + shells; **gate still light-only under `data-shots`** and counts unchanged |
| P1 | Core authoring loop | interactive copies for UI-09, 10, 11C (11S sibling), 12, 13+13.2; controls per table; publish-gate at 11C | register→ingest→ontology→mapping→SHACL round-trips; steps flip correctly |
| P2 | Runs & gate | UI-15 run (progress, hash), UI-16 approve/reject with reason; gate store wiring to 37.6.1 badges | UI-16 reject → Needs review blocks "Next"; approve → Complete unlocks UI-17 |
| P3 | Review & export tier | UI-17 accept/reject, UI-18 QID confirm, UI-19 exports → 19.1 receipt; UI-20 register gap | each control changes visible state; no dead ends |
| P4 | Provenance & observability | UI-38 origin tabs + 38.2 diff; UI-39 stage drill + 39.2 alert | drill-downs reachable; parity re-run on all pristine §13.2 boards still green |

Pilot proof point after P2: UI-09 → … → UI-16 with a reject → re-approve loop.

## 3.5 Status 2026-11-18 — P0, P0.5, P1(partial), P2(partial) implemented

Implemented and verified (Playwright, no page errors):

| Delivered | Evidence |
|---|---|
| `kpg_pipeline` 14-step chain + `workspaces` in `uis.yaml` (gen-preserved), 15 boards marked `pipeline:` | `gen-yaml --check` current |
| `PipelineChrome.astro`: stepper (14 steps, current highlight), breadcrumbs `Home / Pipeline / Step N — Name`, Next/Prev links | UI-09 → "Step 1 — Source registration"; step link navigates UI-09 → UI-10 |
| F0 controls: dark/light (`.dark`, persists), UI + label language, role-aware workspace selector, Help → UI-35 | dark persisted across navigation; workspace options populated per role |
| Buttons never dead-end: label-keyed action wiring + toast fallback | `Prototype: ‹label› (not wired yet)` shown on unmounted controls |
| The gate: UI-16 Reject → `needs-review`, forward navigation blocked with explanation; Approve → `complete`, UI-17 reachable | verified both ways, persisted across reload |
| Ingestion run: UI-10 Run → in-progress → complete (1.4 s) | badge transitions observed |
| Parity safety | chrome + nav hidden under `html[data-shots]` (flag timing fixed in `shoot.mjs`); counts unchanged |

**Deviation from §2 (recorded):** controls are wired at **runtime by label**, not by
rewriting boards into `src/boards-interactive/`. Vendored boards stay byte-identical,
so the parity story is strictly better and no post-pull regeneration step is needed.
`make-interactive.mjs` is therefore not required for this scope; if a control's label
is missing from the map, the toast fallback still responds.

Smoke tests committed: `npm run verify:chrome`, `npm run verify:pipeline`.

**P3 and P4 also implemented (2026-11-18):** export tier (UI-19 Export → complete;
UI-19.1 receipt labels), absence (UI-20.2 "Register gap" → complete), provenance
(UI-38.2 "Export diff" → complete; origin views as info), observability (UI-39.2
"Apply" → complete; Alert/Stage routed), and the drill-downs are chrome-aware: 24
secondary boards marked with their parent step (UI-11.1/11.6 → ontology,
12.1/12.2 → mapping, 13.2 → shacl, 16.x → staging, 17.x → suggestions,
18.x → wikidata, 19.x → export, 20.x → absence, 38.x → provenance,
39.x → observability). 39 boards total now carry pipeline chrome. Spanish labels in
UI-11.6 (guardar/cancelar) are mapped too. Smoke coverage: `npm run verify:pipeline`.

## 4. Risks

| Risk | Mitigation |
|---|---|
| Label-matching misses "Run"/"Approve" buttons in some boards | per-board `controls` log + inline note; visible, not silent (parent §7) |
| 11C/11S and their dialogs span many files | step scope = parent board + listed drill-downs only; others flagged |
| Store schema drift across phases | versioned key + migration; reset on bump |
| Stepper overlay collides with shell chrome (37.6.1) | fixed slot under the top bar; hides under `data-shots`; visual check per P0 |
| Board copy is single-language by design; label-language swaps only demo labels | declared in F0: `lang` attr + `data-i18n` hooks as the future slot; chip shows "text: as-designed" when label language differs |
| Dark toggle affects board pixels | gate invariant: `data-shots` forces light; dark is a runtime-only class, never captured |
| Future Subframe pulls overwrite copies | `make-interactive` re-runs post-pull; pristine stays source of truth |

## 5. Approval gates

F0 additions to approve:

6. F0 scope as §0.5: buttons never dead-end (toast fallback), working breadcrumbs/nav, real dark/light via `.dark`, UI/label language selectors with the declared copy limitation, workspace selector from a curated `workspaces:` list.
7. Workspace list source: `uis.yaml` `workspaces:` (role-aware, from the §13.6 galleries) — curated, preserved by `gen`.
8. Gate invariant: chrome hidden and theme forced light under `data-shots`; parity counts must stay 101 verified on the §13.2 surface.

## 6. Approval gates (original)


1. Pipeline order and per-step controls as the §0 table (or your edit to it).
2. UI-11 = 11C entry + 11S sibling tab; drill-downs (11.6, 12.1, 13.2, 16.1/16.3/16.4, 17.3, 18.1, 19.1, 20.2, 38.2, 39.2) are the only secondary boards wired.
3. State store shared with the shells (both read `herstory-prototype/v1`), so 37.6.x badges respond to the gate.
4. Parity: pristine §13.2 boards stay the gate subjects; interactive copies checked at rest state.
5. Stepper and links hide under `html[data-shots]`; the visible prototype keeps them.
