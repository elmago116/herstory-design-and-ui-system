---
title: Report template — interaction usability audit
used-by: interaction-usability-audit
---

# Report template

Copy into `HerStory/ux/Interaction evaluation — <artefact> (<YYYY-MM-DD>).md`. Keep the section order; drop sections only when they are explicitly marked "not applicable for this round" with a reason.

````markdown
---
tags:
  - design/UX
  - design/UX/testing
  - op/doc/evaluation
date: YYYY-MM-DD
title: Interaction evaluation — <artefact>, round <n>
evaluates: <what exactly: prototype build / service / branch + commit>
protocol: "[[Protocol — Usability dimensions for the historical-data to Wikidata KG system]]"
requirements: "[[Requirements — Design requirements for the historical-data → Wikidata KG system]]"
evaluator: <name / instrument>
---

# Interaction evaluation — <artefact> (round <n>)

## 0. Verdict

<3–6 lines: what the interaction layer does well, what it fails at, and whether it is ready for the next protocol phase (user testing). No numbers without their source.>

## 1. Scope and instrument

| Field | Value |
|---|---|
| Artefact | <repo path / URL, build date, commit> |
| Version marker | <`generated_at` from uis.yaml, image tag, deploy sha> |
| Instrument | <expert inspection (T1) / scripted runtime probes (T0) / participants (n)> |
| Surfaces evaluated | <IDs + routes, grouped by capability> |
| Out of scope | <surfaces, modules, or behaviours deliberately skipped> |

Protocol tasks attempted: T<x> (…). Tasks not attempted and why: <…>.

## 2. Interaction inventory

| Metric | Value | Source |
|---|---|---|
| Surfaces | | `uis.yaml` |
| Component instances | | `uis.yaml` |
| Instances with behaviour rule | | coverage script |
| Rules by effect (`navigate` / `action` / `back`) | | `interactions.yaml` |
| `onClick` handlers with real logic | | `uis.yaml` → `handlers.live` |
| Duplicate-label groups with one unscoped rule | | coverage script |

<One paragraph: what this distribution means for evaluation validity — e.g. "the artefact is a navigation model, not a state model; findings about state-changing interaction generalise weakly".>

## 3. Findings

### 3.1 Severity summary

| Module | 4 | 3 | 2 | 1 | 0 | Positive | Boundary | Total |
|---|---|---|---|---|---|---|---|---|
| M1 | | | | | | | | |
| … | | | | | | | | |

### 3.2 Core usability (M1)

#### F-01 — <one-line behaviour statement>
- **Dimension** M1.x.y · **REQ** REQ-x.y.z · **Severity** n · **Class** defect|boundary|positive · **Tier** T0|T1|T2
- **Surface** …
- **Repro** …
- **Evidence** …
- **Recommendation** …

### 3.3 Information architecture (M2)

### 3.4 KG exploration (M3)

### 3.5 Ingestion & mapping authoring (M4)

### 3.6 Explainability (M5)
<reported separately per protocol §4.2>

### 3.7 Provenance & observability (M6)
<reported separately; map each finding to intrinsic / extrinsic / processing quality>

### 3.8 Beyond-task UX (M7)
<inspection can only flag prerequisites; experiential claims require participants>

### 3.9 Trust, security, ethics, culture (M8)

### 3.10 Epistemic justice (M11, requirements-only)
<protocol has no M11 dimension; state that gap>

## 4. Requirement coverage

| REQ | Strength | Status | Evidence |
|---|---|---|---|
| REQ-1.1.1 | MUST | met / partial / violated / not evaluable | F-xx |

Status vocabulary only — no free text. `not evaluable` must name the missing instrument.

## 5. Not evaluable in this round

| Dimension / task | Why | What would measure it |
|---|---|---|

## 6. Iteration plan

| Round | Change under test | Surfaces | Success criterion (UX target) |
|---|---|---|---|

Include the protocol's three-round minimum and the action-queue of the highest-severity findings.

## 7. Evidence ledger

| ID | Artefact | Where |
|---|---|---|
| … | screenshot / log / probe trace | path or command |
````

## Filling rules

- Finding IDs are stable across rounds: keep `F-03` for the same behaviour, mark status in the ledger, never renumber.
- One finding, one dimension, one requirement. A behaviour that violates three requirements gets one primary REQ and cross-references.
- The verdict must not exceed the evidence: T1-only rounds cannot claim task success or user satisfaction.
- Every number in §2 and §4 must be reproducible by a command in the report.
