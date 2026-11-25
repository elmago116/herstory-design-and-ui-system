---
title: Requirement index — REQ-* by module (condensed)
source: HerStory/ux/Requirements — Design requirements for the historical-data → Wikidata KG system.md
note: Strength is derived from the requirement wording (MUST / SHOULD / MAY). Full text, rationale and citations live in the Requirements note.
---

# Requirement index

123 requirements: 88 MUST, 35 SHOULD, 0 MAY.

Use the REQ ID (not the dimension ID) when a finding violates a stated requirement; cross-reference the dimension ID for the protocol item it belongs to.

M11 has no counterpart in the protocol dimension catalogue — the protocol itself records the gap (`Lacks: epistemic justice and biases components in all dimensions`). Report M11 findings under module **M11 / requirements-only** and state the gap; do not invent M11.x dimension IDs.

## M1 — Core usability (all surfaces)

- **REQ-1.1.1** [MUST] Nielsen's 10 heuristics — The system MUST keep users informed about system status through appropriate feedback within a reasonable time
- **REQ-1.1.2** [MUST] Nielsen's 10 heuristics — The system MUST speak the users' language, using familiar concepts rather than technical Wikidata or ontology jargon
- **REQ-1.1.3** [MUST] Nielsen's 10 heuristics — The system MUST provide clearly marked "emergency exits" to undo/redo actions and navigate freely
- **REQ-1.1.4** [MUST] Nielsen's 10 heuristics — The system MUST maintain consistent conventions across surfaces (terminology, layout, interaction patterns)
- **REQ-1.1.5** [MUST] Nielsen's 10 heuristics — The system MUST prevent errors where possible (gray out destructive actions, validate input) and provide clear recovery instructions when errors occur
- **REQ-1.1.6** [MUST] Nielsen's 10 heuristics — The system MUST minimise memory load by keeping elements, actions, and options visible or easily retrievable
- **REQ-1.1.7** [SHOULD] Nielsen's 10 heuristics — The system SHOULD provide accelerators and shortcuts for expert users alongside novice-friendly paths
- **REQ-1.1.8** [SHOULD] Nielsen's 10 heuristics — The system SHOULD present information with minimalist, focused design — no irrelevant or rarely needed information
- **REQ-1.1.9** [MUST] Nielsen's 10 heuristics — Errors MUST be expressed in plain language, precisely indicate the problem, and constructively suggest a solution
- **REQ-1.1.10** [SHOULD] Nielsen's 10 heuristics — The system SHOULD provide searchable, task-focused help documentation
- **REQ-1.2.1** [MUST] Shneiderman's 8 golden rules — The system MUST permit easy reversal of actions, especially for destructive operations (mapping deletion, re-ingestion, pipeline re-runs)
- **REQ-1.2.2** [SHOULD] Shneiderman's 8 golden rules — The system SHOULD seek universal usability: features for novices (explanations) and experts (shortcuts)
- **REQ-1.2.3** [MUST] Shneiderman's 8 golden rules — The system MUST offer informative feedback for every user action
- **REQ-1.2.4** [MUST] Shneiderman's 8 golden rules — Dialog sequences (wizards, pipeline runs) MUST yield closure — a clear end-state signal
- **REQ-1.2.5** [MUST] Shneiderman's 8 golden rules — The system MUST prevent serious errors and, if an error occurs, leave the interface state unchanged or offer specific recovery instructions
- **REQ-1.3.1** [MUST] ISO 9241-11 usability — The system MUST demonstrate effectiveness: users can complete their tasks accurately and completely
- **REQ-1.3.2** [MUST] ISO 9241-11 usability — The system MUST demonstrate efficiency: reasonable time and effort to accomplish tasks
- **REQ-1.3.3** [MUST] ISO 9241-11 usability — The system MUST deliver user satisfaction in its particular context of use
- **REQ-1.4.1** [MUST] Cognitive Dimensions for authoring tasks — The mapping editor MUST NOT hide dependencies between mapping rules
- **REQ-1.4.2** [MUST] Cognitive Dimensions for authoring tasks — The mapping editor MUST NOT commit users prematurely to irreversible mapping decisions
- **REQ-1.4.3** [SHOULD] Cognitive Dimensions for authoring tasks — The mapping editor SHOULD support secondary notation (annotations, comments) for mapping rules
- **REQ-1.5.1** [MUST] Five-plane cumulative check — Each step of every workflow MUST make sense to the user rather than merely reducing click counts

## M2 — Information architecture & content quality

- **REQ-2.1.1** [MUST] Organisation, labelling, navigation — The system MUST organise information with flexibility, with similar items grouped by consistent criteria, proportionate depth, and exact category boundaries
- **REQ-2.1.2** [MUST] Organisation, labelling, navigation — Labels throughout the system MUST be clear, consistent, concordant with content, conventional for the domain, univocal, concise, and precise
- **REQ-2.1.3** [MUST] Organisation, labelling, navigation — Navigation MUST be visible, effective, usable, balanced, uniform across modules, and supported by assistance mechanisms
- **REQ-2.2.1** [SHOULD] Heuristic indicators for digital content — The system SHOULD follow classified heuristic indicator taxonomies (principles, directives, conventions) for content-level quality
- **REQ-2.3.1** [MUST] Archive-site heuristics + WCAG — Documentation and help surfaces MUST satisfy WCAG 2.x perceivable/operable/understandable/robust criteria
- **REQ-2.3.2** [SHOULD] Archive-site heuristics + WCAG — Help and documentation surfaces SHOULD cover: identity and information, structure and navigation, page composition, search, multimedia, help, and accessibility
- **REQ-2.4.1** [MUST] Findability & data quality signals in IA — The system MUST make data quality signals (outliers, missing values) visible as part of the information organisation rather than hidden in technical logs
- **REQ-2.4.2** [SHOULD] Findability & data quality signals in IA — Information organisation mechanisms SHOULD include taxonomies, ontologies, graphs, facets, and hierarchies where appropriate, with each mapping to standard heuristic expectations (consistency, error prevention)

## M3 — KG exploration & historical-data access

- **REQ-3.1.1** [MUST] Visual information-seeking — The KG browser MUST support the seven tasks: overview, zoom, filter, details-on-demand, relate, history, extract
- **REQ-3.1.2** [SHOULD] Visual information-seeking — The KG browser SHOULD scale to large graphs without losing navigability
- **REQ-3.2.1** [MUST] Faceted exploration — Users MUST be able to filter by provenance, period, Wikidata class, and pivot across differently faceted views without writing SPARQL
- **REQ-3.3.1** [MUST] Non-expert access — Historians without knowledge of Wikidata internals or Semantic Web technologies MUST be able to explore the KG via autocomplete, text search, word cloud, and network overview
- **REQ-3.3.2** [SHOULD] Non-expert access — Labels SHOULD be available in the user's preferred language
- **REQ-3.4.1** [SHOULD] Data-quality observability in exploration — The KG explorer SHOULD surface outliers and missing values directly in the exploration views
- **REQ-3.5.1** [MUST] Semantic-enabling gains — The shared Wikidata ontology and inference capabilities MUST reduce the user's cognitive burden, not expose it
- **REQ-3.5.2** [MUST] Semantic-enabling gains — Data entry for semantic enrichment MUST be simple and not burden the user unduly
- **REQ-3.6.1** [SHOULD] Extensibility & multiple paths — Workflows SHOULD be extensible to evolving user information needs via modular composition and multiple reachable paths to the same goal
- **REQ-3.7.1** [SHOULD] Spatial overviews & cognitive mapping — Visual/graphical surfaces SHOULD provide spatial arrangement with semantic zoom to avoid "lost in hyperspace" navigation
- **REQ-3.7.2** [SHOULD] Spatial overviews & cognitive mapping — The diagrammatic representation SHOULD maintain structural analogy with the user's mental model
- **REQ-3.8.1** [MUST] Cross-channel retrieval consistency — The system MUST document divergence between UI-mediated, API-accessed, and Cypher-direct query results — infrastructure variance counts as validity evidence
- **REQ-3.8.2** [MUST] Cross-channel retrieval consistency — Mediation layers (translation, truncation, conversational summarisation) between channels MUST be detectable and reportable

## M4 — Ingestion & mapping authoring

- **REQ-4.1.1** [MUST] Usable by non-experts — The mapping UI MUST NOT require OWL/ontology syntax knowledge or memorising Wikidata property IDs
- **REQ-4.1.2** [SHOULD] Usable by non-experts — The mapping interface SHOULD use block/metaphor-based authoring with minimal text-input effort
- **REQ-4.2.1** [SHOULD] Verification & evaluation — The generation approach SHOULD be verified by proof-of-concept plus user-based evaluation (SUS)
- **REQ-4.3.1** [SHOULD] Platform quality — The authoring surface SHOULD meet ISO/IEC 25010 usability and accessibility criteria, with RITE-style rapid iteration
- **REQ-4.4.1** [MUST] Error prevention & reversal — Destructive operations (re-ingestion, mapping deletion, re-runs) MUST require confirmation and be reversible
- **REQ-4.5.1** [MUST] Mapping-aware adjudication — The system MUST provide GroundTruthMapping overlays to distinguish drift, coupling errors, and authorised absence from actual mapping gaps
- **REQ-4.5.2** [MUST] Mapping-aware adjudication — P-projection unevenness and Q-typing slips MUST be surfaced as mapping-quality signals

## M5 — Explainability & transparency

- **REQ-5.1.1** [MUST] Explanation scope — The system MUST provide both pipeline-level (global) and entity-level (local) explanations of mapping decisions
- **REQ-5.1.2** [MUST] Explanation scope — Explanations MUST demonstrate fidelity to the actual graph content, completeness, and robustness
- **REQ-5.2.1** [MUST] User explanation needs — Historians MUST be able to ask: "why is this record linked to Wikidata class X?", "what happens if I change this mapping?", "how was this decision reached?", "what data went into this entity?", and "how reliable is this result?"
- **REQ-5.3.1** [MUST] Motivations for explanations — Explanations MUST help users build accurate mental models of how the mapping pipeline works
- **REQ-5.3.2** [MUST] Motivations for explanations — Explanations MUST let domain experts evaluate AI capability (data quality, mapping logic vs. domain knowledge) and mitigate decision biases
- **REQ-5.4.1** [MUST] Symbiotic-AI & procedural justice — The mapping pipeline MUST expose an automation-level control with meaningful human checkpoints
- **REQ-5.4.2** [MUST] Symbiotic-AI & procedural justice — Users MUST be able to override a mapping decision and see the override respected
- **REQ-5.5.1** [MUST] Bias visibility across the AI lifecycle — The system MUST make lifecycle-stage bias visible (collection, annotation, model design, deployment, monitoring) using fairness metrics, counterfactual analysis, sensitivity analysis, algorithmic transparency, and adversarial testing
- **REQ-5.5.2** [MUST] Bias visibility across the AI lifecycle — For any recommender-like mapping suggestions, the system MUST surface patterns of over/under-reliance, fairness workarounds, and blind spots in monitoring
- **REQ-5.6.1** [MUST] Semantic-fidelity caveat — Natural-language explanations MUST NOT be accepted as evidence of semantic completeness — the system MUST verify that explanations map to actual graph content rather than narrating cohesion from brittle subgraph selections

## M6 — Provenance & observability

- **REQ-6.1.1** [MUST] Provenance-reporting UI — The provenance view of each KG statement MUST satisfy four requirements: standardisation, multiple perspectives, usability, and data management
- **REQ-6.1.2** [MUST] Provenance-reporting UI — Where two historical databases disagree, the KG statement MUST carry both voices without flattening them into a singular truth (polyvocality)
- **REQ-6.2.1** [MUST] FAIR provenance — Exported provenance MUST be findable, accessible, interoperable, and reusable — the UI MUST NOT sacrifice human narrative expressiveness for machine readability
- **REQ-6.3.1** [MUST] Data quality dimensions — The observability surface MUST show intrinsic data quality (accuracy, validity, reliability) via established error frameworks
- **REQ-6.3.2** [MUST] Data quality dimensions — Quality MUST be displayed relative to the historian's research task (extrinsic quality: relevancy, timeliness, completeness, appropriate amount) — not as abstract metrics
- **REQ-6.3.3** [MUST] Data quality dimensions — The observability surface MUST cover the whole pipeline: collection, processing, analysis, archiving, and sharing
- **REQ-6.4.1** [MUST] Dashboard observability — The pipeline-monitoring dashboard MUST differentiate predictive vs. actual data, use focal points for attention, calibrate error-notification frequency, and support storytelling for analytics
- **REQ-6.5.1** [MUST] Security observability — Logging and monitoring MUST cover CIA triad, authentication/authorisation, encryption, vulnerability management, resilience, and training — logging is part of the usability of trust

## M7 — Beyond-task UX

- **REQ-7.1.1** [SHOULD] Four UX components — The system SHOULD be evaluated on all four UX components: usability, usefulness, emotional impact, and meaningfulness
- **REQ-7.2.1** [SHOULD] Aware UX model — The questionnaire and evaluation SHOULD be structured by UX stage: BEFORE-UX (interest, novelty, prior experience), DURING-UX (engagement, enjoyment, aesthetic self-assessment, knowing how to use), AFTER-UX (remembering, brand meaning, originality of use)
- **REQ-7.3.1** [SHOULD] Complementary quality lenses — The dimension set SHOULD be cross-checked against Quesenbery's 5Es (effective, efficient, engaging, error tolerant, easy to learn) and Morville's honeycomb (useful, usable, valuable, desirable, credible, accessible, findable)
- **REQ-7.4.1** [SHOULD] Aesthetic design — Visual-design review of KG surfaces SHOULD consider perceptual standards (equilibrium, proportion, Gestalt), cognitive determinants, and sociocultural determinants
- **REQ-7.5.1** [SHOULD] UEQ scales — Summative evaluation SHOULD use the UEQ questionnaire: attractiveness, perspicuity, efficiency, dependability, stimulation, novelty
- **REQ-7.6.1** [MUST] User role & participation — The system's participatory channels MUST match the intended user role: passive (receive information), active (perform tasks), co-designer (shape functionality), or validator (approve/reject mappings)
- **REQ-7.6.2** [SHOULD] User role & participation — The co-design process SHOULD involve users across multiple levels: consortium feedback, requirement workshops, iterative test-and-development phases
- **REQ-7.7.1** [SHOULD] Personalisation & adaptation — The system SHOULD surface adaptation options based on user profile, history, context, and preferences
- **REQ-7.7.2** [SHOULD] Personalisation & adaptation — Personalised recommendation of resources SHOULD exploit linked open data and user profiles, evaluated for perceived accuracy and beyond-accuracy metrics

## M8 — Trust, security, ethics & culture

- **REQ-8.1.1** [MUST] Usable security — Security measures MUST balance strong protection with ease of use to avoid users bypassing them
- **REQ-8.2.1** [MUST] Cross-cultural usability — The evaluation MUST explicitly state which culture definition it uses and MUST NOT rely solely on student samples
- **REQ-8.2.2** [SHOULD] Cross-cultural usability — Cross-national cohorts SHOULD be included since historical databases serve international researchers
- **REQ-8.3.1** [MUST] Ethics & governance — If automated mapping/reconciliation agents act for users, the system MUST address privacy, informed consent, trust, and agent authorisation
- **REQ-8.3.2** [MUST] Ethics & governance — The evaluation panel MUST include multidisciplinary stakeholders: HCD specialists, ethicists, domain experts, data engineers, and end communities
- **REQ-8.3.3** [MUST] Ethics & governance — Evaluation personas MUST be built for distinct user profiles: historian, data engineer, ontologist, archivist
- **REQ-8.4.1** [SHOULD] Participatory & value-sensitive design — Codesign teams SHOULD combine domain professionals with lead users for higher user-benefit and novelty in design concepts
- **REQ-8.4.2** [SHOULD] Participatory & value-sensitive design — A participatory design approach SHOULD integrate UX/domain experts and lay users in iterative evaluation

## M9 — Evaluation methodology

- **REQ-9.1.1** [SHOULD] Testing methods — Heuristic evaluation with 3–5 experts SHOULD be used to discover up to ~90% of usability issues
- **REQ-9.1.2** [SHOULD] Testing methods — User testing SHOULD follow a think-aloud protocol with 5 users across three iterations
- **REQ-9.1.3** [SHOULD] Testing methods — Evaluation SHOULD use a mixed-methods convergence design — check whether quantitative and qualitative findings confirm, expand, or contradict each other
- **REQ-9.1.4** [MUST] Testing methods — XAI validation MUST be conducted with the real user population, not with convenience samples
- **REQ-9.2.1** [MUST] Metrics & instruments — Effectiveness, efficiency, and satisfaction MUST be measured per ISO 9241-11
- **REQ-9.2.2** [MUST] Metrics & instruments — SUS MUST be administered after mapping-authoring tasks
- **REQ-9.2.3** [SHOULD] Metrics & instruments — CSUQ (system usefulness, information quality, interface quality, overall satisfaction) SHOULD be used after the full session
- **REQ-9.2.4** [SHOULD] Metrics & instruments — UEQ SHOULD be used for experiential scales (attractiveness, perspicuity, efficiency, dependability, stimulation, novelty)
- **REQ-9.3.1** [MUST] Multi-channel evaluation — The evaluation MUST include a threefold protocol: two manually driven sessions through the deployed system and one automated trace pairing browser MCP capture with synchronous graph probes — to detect mediation layers between channels

## M10 — Process & governance

- **REQ-10.1.1** [MUST] Requirements & task analysis — The design process MUST begin with a Phase 0 — user requirements elicitation and task analysis before any interface judgement
- **REQ-10.1.2** [MUST] Requirements & task analysis — UX goals MUST be defined → UX measures → UX targets per dimension so evaluation is empirical, not anecdotal
- **REQ-10.2.1** [MUST] Design awareness & reflection — Designers MUST be aware of the design situation at important points: state of the product, state of the process, state of the context
- **REQ-10.2.2** [SHOULD] Design awareness & reflection — Regular reflection at the beginning and end of design sessions SHOULD be supported
- **REQ-10.3.1** [MUST] Iteration & co-design cycles — The system MUST undergo at least three iteration cycles: findings → redesign → re-evaluate, with UX targets re-stated before each round
- **REQ-10.3.2** [SHOULD] Iteration & co-design cycles — Iteration SHOULD move between low- and high-fidelity prototypes driven by user evaluation feedback
- **REQ-10.3.3** [MUST] Iteration & co-design cycles — Codevelopment with participatory reviewers MUST be enabled so contentious mappings can be rerouted before public release freezes interpretive defaults
- **REQ-10.4.1** [MUST] Governance of mappings — Mapping regressions MUST be embedded beside retrieval regressions in a shared governance pipeline
- **REQ-10.4.2** [MUST] Governance of mappings — Repeatable governance checkpoints MUST separate automated mapping authoring from accountable public dissemination

## M11 — Epistemic justice & participatory governance (requirements-only; no protocol dimension)

- **REQ-11.1.3** [MUST] Participation MUST NOT be limited to interface-level consultation — it MUST shape scope, purpose, ontology decisions, mapping conventions, and governance rules
- **REQ-11.1.4** [MUST] The system MUST enable multi-actor workflow integration — explicitly linking UX researchers, subject-matter experts (historians, archivists, ontologists), and developers in extensible knowledge-graph-driven workflows
- **REQ-11.1.5** [MUST] The stakeholder registry (UI-06) MUST record the phase of intervention for each participant (conceptualisation / design / development / deployment / evaluation / monitoring) and the level of engagement (consultative / collaborative / co-ownership) per US-PAR-1
- **REQ-11.1.6** [MUST] The objection dashboard (UI-22) MUST process community corrections and disputed representations with full traceability — each objection MUST be linked to the entity, mapping version, objector identity, coordinator response, and evidence artefact per US-PAR-3
- **REQ-11.2.1** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — The system MUST surface the provenance of every category, label, and mapping decision — distinguishing whether it originated from Wikidata, an archival source, the curation team, a community workshop, or an LLM suggestion, per US-EJ-1
- **REQ-11.2.2** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — Local `HS:` identifiers MUST be treated as valid entities even when no Wikidata QID exists — the system MUST NOT treat Wikidata as the sole source of historical legitimacy or existence, per US-EJ-2
- **REQ-11.2.3** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — Bias lifecycle evaluation MUST be integrated across collection, annotation, model design, deployment, and monitoring — using fairness metrics, counterfactual analysis, sensitivity analysis, and algorithmic transparency per US-BIAS-1
- **REQ-11.2.4** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — The vocabulary review panel (UI-21) MUST provide a structured workflow for flagging, reviewing, and resolving sensitive or contested categories — with escalation to community review when a category imposes a contested interpretive frame per US-PAR-2
- **REQ-11.2.5** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — The EJ (Epistemic Justice) checklist operator (UI-23) MUST verify, before every publication: gender representation, intersectionality coverage, language diversity, community provenance, source diversity, and absence classification — and MUST block publication if the checklist fails per US-INC-2, US-EJ-4
- **REQ-11.2.6** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — When two historical sources disagree, the KG MUST preserve both voices without flattening them into a singular truth — polyvocality is a design requirement, not an edge case
- **REQ-11.2.7** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — Governance MUST specify who may correct records, under what authority, and with what audit trail — the system MUST document entity-edit provenance, mapping-override decisions, and community-correction chains per US-PAR-4
- **REQ-11.2.8** [MUST] Governance, transparency & epistemic infrastructures (Paper Rec 2) — LLM-suggested triples MUST be treated as hypotheses, not as historical understanding — the system MUST label each LLM suggestion with confidence, provider, model, and a human-validation gate before any triple enters the graph, per US-EJ-5
- **REQ-11.3.1** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — The system MUST measure and report participation depth per stakeholder group using a structured scale: consultative (preferences elicited, scope held by experts) → collaborative (shared decision-making) → co-ownership (community authority over governance), per US-INC-1
- **REQ-11.3.2** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — The participation metrics dashboard (UI-27) MUST aggregate: number of participants by role, phase of intervention, decisions affected, and level of engagement — enabling evaluation of consultative vs. collaborative vs. co-ownership depth
- **REQ-11.3.3** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — The system MUST generate a participatory impact report (UI-27) that connects KG changes to specific community contributions, workshop outcomes, and objection resolutions — demonstrating social impact, not only technical performance, per US-INC-3
- **REQ-11.3.4** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — The absence registry (UI-20) MUST classify every data gap using a structured taxonomy: data absent, not ingested, hidden by policy, uncertain, archival silence, or ethical restriction — preventing the graph from implying false non-existence, per US-EJ-6
- **REQ-11.3.5** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — Competency questions MUST support historically interpretable forms: covering uncertainty, disputed labels, absences, silences, and sensitive categories — not only technical correctness, per US-EJ-3
- **REQ-11.3.6** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — The staging review (UI-16) MUST include an epistemic-justice review step (EJ-4) that flags batches where representation may be unfair, sensitive categories may be imposed, or community review may be needed — blocking approval until resolved, per US-EJ-4
- **REQ-11.3.7** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — The multichannel comparator (UI-25) MUST include a divergence report that documents mediation-layer effects (translation, truncation, conversational summarisation) between UI, API, SPARQL, Cypher, and Xat channels — infrastructure variance counts as validity evidence
- **REQ-11.3.8** [MUST] Evaluation of participation quality & impact (Paper Rec 3) — Evaluation of the system MUST go beyond usability and information-retrieval metrics — participation quality, trust-building, representational fairness, and community authority MUST be measured and reported alongside SUS, CSUQ, and UEQ scores
