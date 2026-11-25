---
tags:
  - design/UX/testing
  - op/doc/test-script
date: 2026-11-25
title: Task scripts — protocol tasks T1–T7 against the prototype
protocol: "[[Protocol — Usability dimensions for the historical-data to Wikidata KG system]]"
artefact: HerStory/UI/astrocodebase - prototype (schema v2)
---

# Task scripts — T1–T7

One script per protocol task (§3 of the protocol). A control is written as `` `SURFACE/Control:Name` `` **only when a rule exists for it**; `npm run check:interactions` enforces that (gate I06). Gaps are written in prose so they do not read as wired controls.

Status vocabulary: **runnable** (every step has a wired control) · **partial** (steps exist, one or more gaps) · **not runnable** (the surface or the behaviour does not exist).

| Task | Protocol dimensions | Status |
|---|---|---|
| T1 ingest + ingestion report | M6.4–M6.8, M1.1 | partial |
| T2 map a column set without property IDs | M4.1–M4.3, M1.4 | partial |
| T3 trace an entity to its source record | M6.1–M6.3, M5.1 | partial |
| T4 why this class + what-if | M5.2–M5.5 | partial |
| T5 explore: filter, pivot, save a view | M3.1–M3.5 | partial |
| T6 document a data-quality issue | M3.4, M6.2, M6.5 | partial |
| T7 edit a mapping, re-run, reverse | M1.2, M4.4, M6.7 | partial |

---

## T1 — Ingest a sample database and locate the ingestion report

**Entry** `/ui/ui-09-source-registration/`

1. `UI-09/Button:RegisterSource` — "Register source" → simulated save (prototype has no ingest service), confirmation toast.
2. `UI-09/Button:ReIngest` — "Re-ingest" → simulated run.
3. `UI-09/IconButton:Trash` — "Trash" → confirmation dialog + undo (destructive path, T7 overlap).
4. Navigate to the monitor: `UI-09/Button:Close` (back) or the pipeline step labelled *Ingestion*.
5. `UI-10/Button:RetryRun` — "Retry run" → retry/escalate surface.
6. `UI-10/Button:View` — "View" → run detail.

**Gaps.** No ingestion progress or completion state exists on the monitor (static rows); there is no report artefact to locate, so the second half of T1 cannot be scored for findability. Record as boundary.

## T2 — Create a mapping without consulting property IDs

**Entry** `/ui/ui-12-mapping-editor/`

1. `UI-12/Button:EditRule` — "Edit rule" → rule editor.
2. `UI-12/Button:Edit` — row-level edit → rule editor (row-scoped, see T3).
3. `UI-12/Button:Validate` — "Validate" → simulated validation.
4. `UI-12/Button:Save` — "Save" → confirmed save, outcome carried to the destination.
5. `UI-12/Button:Adjudicate` — "Adjudicate" → conflict adjudication.

**Gaps.** The rule editor is a static surface: there is no property/class picker, so "without memorising Wikidata property IDs" cannot be demonstrated. M4.1 stays unverified.

## T3 — Trace one KG entity back to its source record

**Entry** `/ui/ui-16-staging-review/`

1. `UI-16/Button:Approve` — row-level approve → approve surface (row-scoped).
2. `UI-16/Button:Reject` — row-level reject → reject-with-reason.
3. `UI-16/Button:ApproveBatch` — "Approve batch" → batch approval.
4. `UI-16.1/Button:ApproveBatch` — "Approve batch" → state change, outcome carried.
5. `UI-19/Button:Download` — "Download" → artefact detail.
6. `UI-19/Button:Export` — "Export" → export run.

**Gaps.** No entity-level "provenance" trail from a KG statement to the source row exists in the rule set; the provenance surfaces (UI-24 and neighbours) expose workshop/editing actions only. T3 can be run as navigation, not as provenance verification.

## T4 — Ask why an entity got its class, then test a what-if

**Entry** `/ui/ui-12-mapping-editor/` and the suggestion panel.

1. `UI-12/Button:Adjudicate` — "Adjudicate" → conflict adjudication.
2. Pipeline step *Validation* → SHACL shapes editor.
3. `UI-16/Button:ApproveBatch` — approving after inspection (the nearest available "accept the model's output" action).

**Gaps.** No explanation surface carries content: there is no "why this class" panel and no what-if preview. M5.1–M5.5 cannot be scored; the protocol's local/global explanation requirement is unrepresented in the artefact.

## T5 — Explore: filter by period/provenance/class, pivot, save a view

**Entry** `/ui/ui-33-document-corpus/`

1. `UI-33/Button:Open` — "Open" → document detail.
2. `UI-33/Button:UploadDocument` — "Upload document" → upload surface.
3. `UI-25/Button:Compare` — "Compare" → comparison result.
4. `UI-25/Button:DivergenceReport` — "Divergence report" → divergence report.

**Gaps.** Faceted filtering, pivoting and saved views are not wired anywhere; the corpus and collection surfaces expose only open/upload. M3.1–M3.3 stay unverified.

## T6 — Detect a data-quality issue and record both voices

**Entry** `/ui/ui-16-staging-review/` and `/ui/ui-25-multichannel-comparator/`

1. `UI-16/Button:Reject` — reject a triple with a reason (the recording path that exists).
2. `UI-25/Button:DivergenceReport` — open the divergence report.
3. `UI-12/Button:Adjudicate` — adjudicate conflicting mappings.

**Gaps.** Polyvocality (two voices on one statement) has no interaction: no control lets a user attach a second source's claim to the same entity. Absence/polyvocality registry surfaces are not wired.

## T7 — Edit a mapping, re-run the pipeline, reverse the change

**Entry** `/ui/ui-12-mapping-editor/`

1. `UI-12/Button:EditRule` — edit the rule.
2. `UI-12/Button:Remove` — remove the rule → confirmation dialog → destructive run → undo offered on the destination.
3. `UI-12/Button:Save` — save, outcome carried forward.
4. `UI-09/Button:ReIngest` — re-run from the source surface.

**Gaps.** Re-run is simulated and has no before/after diff; reversal is available for the removal (10 s undo) but not for a rule edit. M1.2 "easy reversal" is demonstrated only on the destructive path.

---

## How to run a script

1. `npm run dev` (or the built `dist/`), open the entry route, clear `localStorage`/`sessionStorage`.
2. Follow the numbered controls in order; a step fails when the control does not act, navigates elsewhere than stated, or gives no feedback.
3. Record per step: completed (y/n), time, unexpected behaviour, and the finding ID if one already exists in the round-1 report.
4. Any control used above must remain wired: `npm run check:interactions` fails otherwise (gate I06).
