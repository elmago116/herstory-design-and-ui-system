---
tags:
  - design/UX
  - op/doc/requirements
date: 2026-10-09
title: Requirements — Design requirements for the historical-data → Wikidata KG system
based-on: Report — Dimensions evaluated in UX-tagged clippings
system: Information system that ingests historical databases, maps them onto the Wikidata ontology, and supports explainability and observability of the knowledge-graph building process.
---

This document is the foundation for: 
1. [[HerStory UIs]]
2. [[HerStory UI Map]]
# Requirements — Design requirements for the historical-data → Wikidata KG system

**Scope.** Every requirement below is grounded in one or more of the 51 UX-tagged clippings analysed in [[Report — Dimensions evaluated in UX-tagged clippings]]. The source clipping is cited in parentheses as a wikilink. Requirements are phrased as "the system MUST …" (essential), "SHOULD …" (recommended), or "MAY …" (optional).

**Benchmark:** [[Revisión de Aura Neo4J, open refine y GraphBD]]


---

## 1. Core usability (all surfaces)

Requirements that apply to every interface of the system — ingestion UI, mapping editor, KG explorer, explainability views, and observability dashboard.

### 1.1 Nielsen's 10 heuristics (M1.1)

- **REQ-1.1.1** The system MUST keep users informed about system status through appropriate feedback within a reasonable time ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.2** The system MUST speak the users' language, using familiar concepts rather than technical Wikidata or ontology jargon ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.3** The system MUST provide clearly marked "emergency exits" to undo/redo actions and navigate freely ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.4** The system MUST maintain consistent conventions across surfaces (terminology, layout, interaction patterns) ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.5** The system MUST prevent errors where possible (gray out destructive actions, validate input) and provide clear recovery instructions when errors occur ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.6** The system MUST minimise memory load by keeping elements, actions, and options visible or easily retrievable ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.7** The system SHOULD provide accelerators and shortcuts for expert users alongside novice-friendly paths ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.8** The system SHOULD present information with minimalist, focused design — no irrelevant or rarely needed information ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.9** Errors MUST be expressed in plain language, precisely indicate the problem, and constructively suggest a solution ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).
- **REQ-1.1.10** The system SHOULD provide searchable, task-focused help documentation ([[10 Usability Heuristics for User Interface Design|Nielsen, 1994]]).

### 1.2 Shneiderman's 8 golden rules (M1.2)

- **REQ-1.2.1** The system MUST permit easy reversal of actions, especially for destructive operations (mapping deletion, re-ingestion, pipeline re-runs) ([[The Eight Golden Rules of Interface Design|Shneiderman, n.d.]]).
- **REQ-1.2.2** The system SHOULD seek universal usability: features for novices (explanations) and experts (shortcuts) ([[The Eight Golden Rules of Interface Design|Shneiderman, n.d.]]).
- **REQ-1.2.3** The system MUST offer informative feedback for every user action ([[The Eight Golden Rules of Interface Design|Shneiderman, n.d.]]).
- **REQ-1.2.4** Dialog sequences (wizards, pipeline runs) MUST yield closure — a clear end-state signal ([[The Eight Golden Rules of Interface Design|Shneiderman, n.d.]]).
- **REQ-1.2.5** The system MUST prevent serious errors and, if an error occurs, leave the interface state unchanged or offer specific recovery instructions ([[The Eight Golden Rules of Interface Design|Shneiderman, n.d.]]).

### 1.3 ISO 9241-11 usability (M1.3)

- **REQ-1.3.1** The system MUST demonstrate effectiveness: users can complete their tasks accurately and completely ([[Usability Testing  A Bibliometric Analysis Based on WoS Data – Journal of Scientometric Research|Shojaei Baghini, 2024]]).
- **REQ-1.3.2** The system MUST demonstrate efficiency: reasonable time and effort to accomplish tasks ([[Usability Testing  A Bibliometric Analysis Based on WoS Data – Journal of Scientometric Research|Shojaei Baghini, 2024]]).
- **REQ-1.3.3** The system MUST deliver user satisfaction in its particular context of use ([[Usability Evaluation of a Knowledge Graph–Based Dementia Care Intelligent Recommender System Mixed Methods Study|Leng, 2023]]).

### 1.4 Cognitive Dimensions for authoring tasks (M1.4)

- **REQ-1.4.1** The mapping editor MUST NOT hide dependencies between mapping rules ([[User Interfaces for Personal Knowledge Management with Semantic Technologies|Völkel, 2008]]).
- **REQ-1.4.2** The mapping editor MUST NOT commit users prematurely to irreversible mapping decisions ([[User Interfaces for Personal Knowledge Management with Semantic Technologies|Völkel, 2008]]).
- **REQ-1.4.3** The mapping editor SHOULD support secondary notation (annotations, comments) for mapping rules ([[User Interfaces for Personal Knowledge Management with Semantic Technologies|Völkel, 2008]]).

### 1.5 Five-plane cumulative check (M1.5)

- **REQ-1.5.1** Each step of every workflow MUST make sense to the user rather than merely reducing click counts ([[The Elements of User Experience_ User-Centered Design for -- written and illustrated by Jesse James Garret|Garrett, 2011]]).

---

## 2. Information architecture & content quality (M2)

### 2.1 Organisation, labelling, navigation

- **REQ-2.1.1** The system MUST organise information with flexibility, with similar items grouped by consistent criteria, proportionate depth, and exact category boundaries ([[Proposta de redisseny del lloc web de la Direcció General de Serveis Digitals i Experiència Ciutadana a partir del mètode de Disseny Centrat en la persona Usuària (DCU)|Molina Moral, n.d.]]).
- **REQ-2.1.2** Labels throughout the system MUST be clear, consistent, concordant with content, conventional for the domain, univocal, concise, and precise ([[Proposta de redisseny del lloc web de la Direcció General de Serveis Digitals i Experiència Ciutadana a partir del mètode de Disseny Centrat en la persona Usuària (DCU)|Molina Moral, n.d.]]).
- **REQ-2.1.3** Navigation MUST be visible, effective, usable, balanced, uniform across modules, and supported by assistance mechanisms ([[Proposta de redisseny del lloc web de la Direcció General de Serveis Digitals i Experiència Ciutadana a partir del mètode de Disseny Centrat en la persona Usuària (DCU)|Molina Moral, n.d.]]).

### 2.2 Heuristic indicators for digital content

- **REQ-2.2.1** The system SHOULD follow classified heuristic indicator taxonomies (principles, directives, conventions) for content-level quality ([[DISEÑO DE INFORMACIÓN DIGITAL-Revision y clasificación de indicadores heurísticos para contenidos web|Jiménez-Iglesias, 2017]]).

### 2.3 Archive-site heuristics + WCAG

- **REQ-2.3.1** Documentation and help surfaces MUST satisfy WCAG 2.x perceivable/operable/understandable/robust criteria ([[Conceptualització i disseny del lloc web de l’Arxiu Capitular de la Catedral de Barcelona]]).
- **REQ-2.3.2** Help and documentation surfaces SHOULD cover: identity and information, structure and navigation, page composition, search, multimedia, help, and accessibility ([[Conceptualització i disseny del lloc web de l’Arxiu Capitular de la Catedral de Barcelona]]).

### 2.4 Findability & data quality signals in IA

- **REQ-2.4.1** The system MUST make data quality signals (outliers, missing values) visible as part of the information organisation rather than hidden in technical logs ([[Rhizomer- Interactive semantic knowledge graphs exploration|García, 2022]]).
- **REQ-2.4.2** Information organisation mechanisms SHOULD include taxonomies, ontologies, graphs, facets, and hierarchies where appropriate, with each mapping to standard heuristic expectations (consistency, error prevention) ([[CAP A UNA IA GENERATIVA FIABLE- Requisits per a la interacció i el rigor semàntic|Díez de los Ríos, 2026]]).

---

## 3. KG exploration & historical-data access (M3)

### 3.1 Visual information-seeking

- **REQ-3.1.1** The KG browser MUST support the seven tasks: overview, zoom, filter, details-on-demand, relate, history, extract ([[Rhizomer- Interactive semantic knowledge graphs exploration|García, 2022]]).
- **REQ-3.1.2** The KG browser SHOULD scale to large graphs without losing navigability ([[Rhizomer- Interactive semantic knowledge graphs exploration|García, 2022]]).

### 3.2 Faceted exploration

- **REQ-3.2.1** Users MUST be able to filter by provenance, period, Wikidata class, and pivot across differently faceted views without writing SPARQL ([[From Overview to Facets and Pivoting for Interactive Exploration of Semantic Web Data|Brunetti, 2013]]).

### 3.3 Non-expert access

- **REQ-3.3.1** Historians without knowledge of Wikidata internals or Semantic Web technologies MUST be able to explore the KG via autocomplete, text search, word cloud, and network overview ([[Rhizomer- Interactive semantic knowledge graphs exploration|García, 2022]]).
- **REQ-3.3.2** Labels SHOULD be available in the user's preferred language ([[Rhizomer- Interactive semantic knowledge graphs exploration|García, 2022]]).

### 3.4 Data-quality observability in exploration

- **REQ-3.4.1** The KG explorer SHOULD surface outliers and missing values directly in the exploration views ([[Rhizomer- Interactive semantic knowledge graphs exploration|García, 2022]]).

### 3.5 Semantic-enabling gains

- **REQ-3.5.1** The shared Wikidata ontology and inference capabilities MUST reduce the user's cognitive burden, not expose it ([[Semantic Web HCI- DiscussingResearch Implications|Degler, 2007]]).
- **REQ-3.5.2** Data entry for semantic enrichment MUST be simple and not burden the user unduly ([[Semantic Web HCI- DiscussingResearch Implications|Degler, 2007]]).

### 3.6 Extensibility & multiple paths

- **REQ-3.6.1** Workflows SHOULD be extensible to evolving user information needs via modular composition and multiple reachable paths to the same goal ([[How Should One Explore the Digital Library of the Future?|Fox, 2021]]).

### 3.7 Spatial overviews & cognitive mapping

- **REQ-3.7.1** Visual/graphical surfaces SHOULD provide spatial arrangement with semantic zoom to avoid "lost in hyperspace" navigation ([[iMapping_Wikis_-_Towards_a_Graphical_Environment_f|Tolksdorf, 2006]]).
- **REQ-3.7.2** The diagrammatic representation SHOULD maintain structural analogy with the user's mental model ([[iMapping_Wikis_-_Towards_a_Graphical_Environment_f|Tolksdorf, 2006]]).

### 3.8 Cross-channel retrieval consistency

- **REQ-3.8.1** The system MUST document divergence between UI-mediated, API-accessed, and Cypher-direct query results — infrastructure variance counts as validity evidence ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).
- **REQ-3.8.2** Mediation layers (translation, truncation, conversational summarisation) between channels MUST be detectable and reportable ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).

---

## 4. Ingestion & mapping authoring (M4)

### 4.1 Usable by non-experts

- **REQ-4.1.1** The mapping UI MUST NOT require OWL/ontology syntax knowledge or memorising Wikidata property IDs ([[A case study for block-based linked data generation-Recipes as jigsaw puzzles|Öztürk, 2020]]).
- **REQ-4.1.2** The mapping interface SHOULD use block/metaphor-based authoring with minimal text-input effort ([[A case study for block-based linked data generation-Recipes as jigsaw puzzles|Öztürk, 2020]]).

### 4.2 Verification & evaluation

- **REQ-4.2.1** The generation approach SHOULD be verified by proof-of-concept plus user-based evaluation (SUS) ([[A case study for block-based linked data generation-Recipes as jigsaw puzzles|Öztürk, 2020]]).

### 4.3 Platform quality

- **REQ-4.3.1** The authoring surface SHOULD meet ISO/IEC 25010 usability and accessibility criteria, with RITE-style rapid iteration ([[From Overview to Facets and Pivoting for Interactive Exploration of Semantic Web Data|Brunetti, 2013]]).

### 4.4 Error prevention & reversal

- **REQ-4.4.1** Destructive operations (re-ingestion, mapping deletion, re-runs) MUST require confirmation and be reversible ([[The Eight Golden Rules of Interface Design|Shneiderman, n.d.]]).

### 4.5 Mapping-aware adjudication

- **REQ-4.5.1** The system MUST provide GroundTruthMapping overlays to distinguish drift, coupling errors, and authorised absence from actual mapping gaps ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).
- **REQ-4.5.2** P-projection unevenness and Q-typing slips MUST be surfaced as mapping-quality signals ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).

---

## 5. Explainability & transparency of the KG building process (M5)

### 5.1 Explanation scope

- **REQ-5.1.1** The system MUST provide both pipeline-level (global) and entity-level (local) explanations of mapping decisions ([[Questioning the AI Informing Design Practices for Explainable AI User Experiences|Liao, 2020]]).
- **REQ-5.1.2** Explanations MUST demonstrate fidelity to the actual graph content, completeness, and robustness ([[Questioning the AI Informing Design Practices for Explainable AI User Experiences|Liao, 2020]]).

### 5.2 User explanation needs

- **REQ-5.2.1** Historians MUST be able to ask: "why is this record linked to Wikidata class X?", "what happens if I change this mapping?", "how was this decision reached?", "what data went into this entity?", and "how reliable is this result?" ([[Questioning the AI Informing Design Practices for Explainable AI User Experiences|Liao, 2020]]).

### 5.3 Motivations for explanations

- **REQ-5.3.1** Explanations MUST help users build accurate mental models of how the mapping pipeline works ([[Questioning the AI Informing Design Practices for Explainable AI User Experiences|Liao, 2020]]).
- **REQ-5.3.2** Explanations MUST let domain experts evaluate AI capability (data quality, mapping logic vs. domain knowledge) and mitigate decision biases ([[Questioning the AI Informing Design Practices for Explainable AI User Experiences|Liao, 2020]]).

### 5.4 Symbiotic-AI & procedural justice

- **REQ-5.4.1** The mapping pipeline MUST expose an automation-level control with meaningful human checkpoints ([[Guiding Designers and Developers in Creating Symbiotic AI Systems | Proceedings of the 16th Biannual Conference of the Italian SIGCHI Chapter|Calvano, 2025]]).
- **REQ-5.4.2** Users MUST be able to override a mapping decision and see the override respected ([[Procedural Justice in Algorithmic Fairness - Leveraging Transparency and Outcome Control for Fair Algorithmic Mediation|Lee, 2019]]).

### 5.5 Bias visibility across the AI lifecycle

- **REQ-5.5.1** The system MUST make lifecycle-stage bias visible (collection, annotation, model design, deployment, monitoring) using fairness metrics, counterfactual analysis, sensitivity analysis, algorithmic transparency, and adversarial testing ([[Human-Centered Design to Address Biases in Artificial Intelligence - PMC|Chen, 2023]]).
- **REQ-5.5.2** For any recommender-like mapping suggestions, the system MUST surface patterns of over/under-reliance, fairness workarounds, and blind spots in monitoring ([[Fairness and Accountability Design Needs for Algorithmic Support in High-Stakes Public Sector Decision-Making|Veale, 2018]]).

### 5.6 Semantic-fidelity caveat

- **REQ-5.6.1** Natural-language explanations MUST NOT be accepted as evidence of semantic completeness — the system MUST verify that explanations map to actual graph content rather than narrating cohesion from brittle subgraph selections ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).

---

## 6. Provenance & observability of ingested data (M6)

### 6.1 Provenance-reporting UI

- **REQ-6.1.1** The provenance view of each KG statement MUST satisfy four requirements: standardisation, multiple perspectives, usability, and data management ([[Designing a User Interface for Provenance Reporting of Objects with Colonial Heritage|Abelardo, 2024]]).
- **REQ-6.1.2** Where two historical databases disagree, the KG statement MUST carry both voices without flattening them into a singular truth (polyvocality) ([[Designing a User Interface for Provenance Reporting of Objects with Colonial Heritage|Abelardo, 2024]]).

### 6.2 FAIR provenance

- **REQ-6.2.1** Exported provenance MUST be findable, accessible, interoperable, and reusable — the UI MUST NOT sacrifice human narrative expressiveness for machine readability ([[Designing a User Interface for Provenance Reporting of Objects with Colonial Heritage|Abelardo, 2024]]).

### 6.3 Data quality dimensions

- **REQ-6.3.1** The observability surface MUST show intrinsic data quality (accuracy, validity, reliability) via established error frameworks ([[Conceptualizing, Assessing, and Improving the Quality of Digital Behavioral Data|Daikeler, 2025]]).
- **REQ-6.3.2** Quality MUST be displayed relative to the historian's research task (extrinsic quality: relevancy, timeliness, completeness, appropriate amount) — not as abstract metrics ([[Conceptualizing, Assessing, and Improving the Quality of Digital Behavioral Data|Daikeler, 2025]]).
- **REQ-6.3.3** The observability surface MUST cover the whole pipeline: collection, processing, analysis, archiving, and sharing ([[Conceptualizing, Assessing, and Improving the Quality of Digital Behavioral Data|Daikeler, 2025]]).

### 6.4 Dashboard observability

- **REQ-6.4.1** The pipeline-monitoring dashboard MUST differentiate predictive vs. actual data, use focal points for attention, calibrate error-notification frequency, and support storytelling for analytics ([[Brick by Brick- A Human-Centered Approach to Effective Dashboard Design for Smart Building and Energy Management|Noor, 2025]]).

### 6.5 Security observability

- **REQ-6.5.1** Logging and monitoring MUST cover CIA triad, authentication/authorisation, encryption, vulnerability management, resilience, and training — logging is part of the usability of trust ([[Assessing Usability and Cybersecurity of AI Systems through the Human-Centered Design|Calvano, 2025]]).

---

## 7. Beyond-task UX (M7)

### 7.1 Four UX components

- **REQ-7.1.1** The system SHOULD be evaluated on all four UX components: usability, usefulness, emotional impact, and meaningfulness ([[The UX Book Agile UX Design for a Quality User Experience|Hartson, 2019]]).

### 7.2 Aware UX model

- **REQ-7.2.1** The questionnaire and evaluation SHOULD be structured by UX stage: BEFORE-UX (interest, novelty, prior experience), DURING-UX (engagement, enjoyment, aesthetic self-assessment, knowing how to use), AFTER-UX (remembering, brand meaning, originality of use) ([[The Aware User Experience Model, Its Method of Construction and Derived Heuristics|Maya, 2020]]).

### 7.3 Complementary quality lenses

- **REQ-7.3.1** The dimension set SHOULD be cross-checked against Quesenbery's 5Es (effective, efficient, engaging, error tolerant, easy to learn) and Morville's honeycomb (useful, usable, valuable, desirable, credible, accessible, findable) ([[User Experience - an overview   ScienceDirect Topics|Hartson, 2019]]).

### 7.4 Aesthetic design

- **REQ-7.4.1** Visual-design review of KG surfaces SHOULD consider perceptual standards (equilibrium, proportion, Gestalt), cognitive determinants, and sociocultural determinants ([[Aesthetic heuristics for design - cognitive and sociocultural determinants|Cadavid, 2024]]).

### 7.5 UEQ scales

- **REQ-7.5.1** Summative evaluation SHOULD use the UEQ questionnaire: attractiveness, perspicuity, efficiency, dependability, stimulation, novelty ([[User Interfaces for Personal Knowledge Management with Semantic Technologies|Völkel, 2008]]).

### 7.6 User role & participation

- **REQ-7.6.1** The system's participatory channels MUST match the intended user role: passive (receive information), active (perform tasks), co-designer (shape functionality), or validator (approve/reject mappings) ([[CAP A UNA IA GENERATIVA FIABLE- Requisits per a la interacció i el rigor semàntic|Díez de los Ríos, 2026]]).
- **REQ-7.6.2** The co-design process SHOULD involve users across multiple levels: consortium feedback, requirement workshops, iterative test-and-development phases ([[The Multiple Faces of Cultural Heritage Towards an Integrated Visualization Platform for Tangible and Intangible Cultural Assets1|Mayr, 2022]]).

### 7.7 Personalisation & adaptation

- **REQ-7.7.1** The system SHOULD surface adaptation options based on user profile, history, context, and preferences ([[CAP A UNA IA GENERATIVA FIABLE- Requisits per a la interacció i el rigor semàntic|Díez de los Ríos, 2026]]).
- **REQ-7.7.2** Personalised recommendation of resources SHOULD exploit linked open data and user profiles, evaluated for perceived accuracy and beyond-accuracy metrics ([[Using Social Media for Personalizing the Cultural Heritage Experience|Sansonetti, 2021]]).

---

## 8. Trust, security, ethics & culture (M8)

### 8.1 Usable security

- **REQ-8.1.1** Security measures MUST balance strong protection with ease of use to avoid users bypassing them ([[Assessing Usability and Cybersecurity of AI Systems through the Human-Centered Design|Calvano, 2025]]).

### 8.2 Cross-cultural usability

- **REQ-8.2.1** The evaluation MUST explicitly state which culture definition it uses and MUST NOT rely solely on student samples ([[Cultures in Human-Computer Interaction -- Sergio Sayago -- Synthesis Lectures on Human-Centered Informatics, Synthesis -- Springer Nature Switzerland -- isbn13 97830313|Sayago, 2023]]).
- **REQ-8.2.2** Cross-national cohorts SHOULD be included since historical databases serve international researchers ([[Cultures in Human-Computer Interaction -- Sergio Sayago -- Synthesis Lectures on Human-Centered Informatics, Synthesis -- Springer Nature Switzerland -- isbn13 97830313|Sayago, 2023]]).

### 8.3 Ethics & governance

- **REQ-8.3.1** If automated mapping/reconciliation agents act for users, the system MUST address privacy, informed consent, trust, and agent authorisation ([[Semantic Web HCI- DiscussingResearch Implications|Degler, 2007]]).
- **REQ-8.3.2** The evaluation panel MUST include multidisciplinary stakeholders: HCD specialists, ethicists, domain experts, data engineers, and end communities ([[Human-Centered Design to Address Biases in Artificial Intelligence - PMC|Chen, 2023]]).
- **REQ-8.3.3** Evaluation personas MUST be built for distinct user profiles: historian, data engineer, ontologist, archivist ([[The Multiple Faces of Cultural Heritage Towards an Integrated Visualization Platform for Tangible and Intangible Cultural Assets1|Mayr, 2022]]).

### 8.4 Participatory & value-sensitive design

- **REQ-8.4.1** Codesign teams SHOULD combine domain professionals with lead users for higher user-benefit and novelty in design concepts ([[The Value of Codesign The Effect of Customer Involvement in Service Design Teams|Trischler, 2017]]).
- **REQ-8.4.2** A participatory design approach SHOULD integrate UX/domain experts and lay users in iterative evaluation ([[From Ontology Design to User Experience. A methodology to design interfaces for information seeking purposes|Grasso, 2024]]).

---

## 9. Evaluation methodology

### 9.1 Testing methods

- **REQ-9.1.1** Heuristic evaluation with 3–5 experts SHOULD be used to discover up to ~90% of usability issues ([[From Ontology Design to User Experience. A methodology to design interfaces for information seeking purposes|Grasso, 2024]]).
- **REQ-9.1.2** User testing SHOULD follow a think-aloud protocol with 5 users across three iterations ([[Brick by Brick- A Human-Centered Approach to Effective Dashboard Design for Smart Building and Energy Management|Noor, 2025]]).
- **REQ-9.1.3** Evaluation SHOULD use a mixed-methods convergence design — check whether quantitative and qualitative findings confirm, expand, or contradict each other ([[Usability Evaluation of a Knowledge Graph–Based Dementia Care Intelligent Recommender System Mixed Methods Study|Leng, 2023]]).
- **REQ-9.1.4** XAI validation MUST be conducted with the real user population, not with convenience samples ([[Questioning the AI Informing Design Practices for Explainable AI User Experiences|Liao, 2020]]).

### 9.2 Metrics & instruments

- **REQ-9.2.1** Effectiveness, efficiency, and satisfaction MUST be measured per ISO 9241-11 ([[Usability Testing  A Bibliometric Analysis Based on WoS Data – Journal of Scientometric Research|Shojaei Baghini, 2024]]).
- **REQ-9.2.2** SUS MUST be administered after mapping-authoring tasks ([[A case study for block-based linked data generation-Recipes as jigsaw puzzles|Öztürk, 2020]]).
- **REQ-9.2.3** CSUQ (system usefulness, information quality, interface quality, overall satisfaction) SHOULD be used after the full session ([[Usability Evaluation of a Knowledge Graph–Based Dementia Care Intelligent Recommender System Mixed Methods Study|Leng, 2023]]).
- **REQ-9.2.4** UEQ SHOULD be used for experiential scales (attractiveness, perspicuity, efficiency, dependability, stimulation, novelty) ([[User Interfaces for Personal Knowledge Management with Semantic Technologies|Völkel, 2008]]).

### 9.3 Multi-channel evaluation

- **REQ-9.3.1** The evaluation MUST include a threefold protocol: two manually driven sessions through the deployed system and one automated trace pairing browser MCP capture with synchronous graph probes — to detect mediation layers between channels ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).

---

## 10. Process & governance

### 10.1 Requirements & task analysis

- **REQ-10.1.1** The design process MUST begin with a Phase 0 — user requirements elicitation and task analysis before any interface judgement ([[Requisitos de usuario Investigación y análisis|Gil Rodríguez, 2016]]).
- **REQ-10.1.2** UX goals MUST be defined → UX measures → UX targets per dimension so evaluation is empirical, not anecdotal ([[The UX Book Agile UX Design for a Quality User Experience|Hartson, 2019]]).

### 10.2 Design awareness & reflection

- **REQ-10.2.1** Designers MUST be aware of the design situation at important points: state of the product, state of the process, state of the context ([[Design method supporting regular reflection on design situations|Reymen & Hammer, 2000]]).
- **REQ-10.2.2** Regular reflection at the beginning and end of design sessions SHOULD be supported ([[Design method supporting regular reflection on design situations|Reymen & Hammer, 2000]]).

### 10.3 Iteration & co-design cycles

- **REQ-10.3.1** The system MUST undergo at least three iteration cycles: findings → redesign → re-evaluate, with UX targets re-stated before each round ([[The UX Book Agile UX Design for a Quality User Experience|Hartson, 2019]]).
- **REQ-10.3.2** Iteration SHOULD move between low- and high-fidelity prototypes driven by user evaluation feedback ([[Brick by Brick- A Human-Centered Approach to Effective Dashboard Design for Smart Building and Energy Management|Noor, 2025]]).
- **REQ-10.3.3** Codevelopment with participatory reviewers MUST be enabled so contentious mappings can be rerouted before public release freezes interpretive defaults ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).

### 10.4 Governance of mappings

- **REQ-10.4.1** Mapping regressions MUST be embedded beside retrieval regressions in a shared governance pipeline ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).
- **REQ-10.4.2** Repeatable governance checkpoints MUST separate automated mapping authoring from accountable public dissemination ([[Drafts/pasados/DCMI26/DCMI26_submission_1500w_R2|Gómez, 2026]]).

---


## 11. Epistemic justice & participatory governance (M11)

> Epistemic justice is a **first-class design dimension** for HerStory, co-equal with usability (M1), information architecture (M2), and KG exploration (M3). The system mediates whose historical knowledge is represented, how, and under whose authority — this is not a bolt-on concern but a load-bearing structural requirement.

- **REQ-11.1.3** Participation MUST NOT be limited to interface-level consultation — it MUST shape scope, purpose, ontology decisions, mapping conventions, and governance rules ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 1]], Delgado et al., 2023, p. 6).
- **REQ-11.1.4** The system MUST enable multi-actor workflow integration — explicitly linking UX researchers, subject-matter experts (historians, archivists, ontologists), and developers in extensible knowledge-graph-driven workflows ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 1]], Fox & Chandrasekar, 2021).
- **REQ-11.1.5** The stakeholder registry (UI-06) MUST record the phase of intervention for each participant (conceptualisation / design / development / deployment / evaluation / monitoring) and the level of engagement (consultative / collaborative / co-ownership) per US-PAR-1 ([[DLP-12-2025-0292 - R3|Participatory Practices, §4 Dimension 1 (Timing)]]).
- **REQ-11.1.6** The objection dashboard (UI-22) MUST process community corrections and disputed representations with full traceability — each objection MUST be linked to the entity, mapping version, objector identity, coordinator response, and evidence artefact per US-PAR-3 ([[DLP-12-2025-0292 - R3|Participatory Practices, §4 Dimension 4 (Ownership)]]).

### 11.2 Governance, transparency & epistemic infrastructures (Paper Rec 2)

> *"Bias reduction, transparency, and rights-oriented compliance (e.g., AI Act)" (Calvano, 2025). "Power should be discussed openly" (Turnhout et al., 2020).*

- **REQ-11.2.1** The system MUST surface the provenance of every category, label, and mapping decision — distinguishing whether it originated from Wikidata, an archival source, the curation team, a community workshop, or an LLM suggestion, per US-EJ-1 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Fox & Chandrasekar, 2021).
- **REQ-11.2.2** Local `HS:` identifiers MUST be treated as valid entities even when no Wikidata QID exists — the system MUST NOT treat Wikidata as the sole source of historical legitimacy or existence, per US-EJ-2 ([[DLP-12-2025-0292 - R3|Participatory Practices, §4 Dimension 4 (Ownership)]], Fricker, 2007).
- **REQ-11.2.3** Bias lifecycle evaluation MUST be integrated across collection, annotation, model design, deployment, and monitoring — using fairness metrics, counterfactual analysis, sensitivity analysis, and algorithmic transparency per US-BIAS-1 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Calvano, 2025; Chen, 2023).
- **REQ-11.2.4** The vocabulary review panel (UI-21) MUST provide a structured workflow for flagging, reviewing, and resolving sensitive or contested categories — with escalation to community review when a category imposes a contested interpretive frame per US-PAR-2 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Nesterov et al., 2023).
- **REQ-11.2.5** The EJ (Epistemic Justice) checklist operator (UI-23) MUST verify, before every publication: gender representation, intersectionality coverage, language diversity, community provenance, source diversity, and absence classification — and MUST block publication if the checklist fails per US-INC-2, US-EJ-4 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Farnel & Shiri, 2019).
- **REQ-11.2.6** When two historical sources disagree, the KG MUST preserve both voices without flattening them into a singular truth — polyvocality is a design requirement, not an edge case ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Escobar, 2016; Sartini, 2025).
- **REQ-11.2.7** Governance MUST specify who may correct records, under what authority, and with what audit trail — the system MUST document entity-edit provenance, mapping-override decisions, and community-correction chains per US-PAR-4 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Fox & Chandrasekar, 2021).
- **REQ-11.2.8** LLM-suggested triples MUST be treated as hypotheses, not as historical understanding — the system MUST label each LLM suggestion with confidence, provider, model, and a human-validation gate before any triple enters the graph, per US-EJ-5 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 2]], Capel & Brereton, 2023).

### 11.3 Evaluation of participation quality & impact (Paper Rec 3)

> *"Pair participatory methods with explicit evaluation of engagement and governance outcomes, not only usability/performance" (Fox & Chandrasekar, 2021; Calvano, 2025).*

- **REQ-11.3.1** The system MUST measure and report participation depth per stakeholder group using a structured scale: consultative (preferences elicited, scope held by experts) → collaborative (shared decision-making) → co-ownership (community authority over governance), per US-INC-1 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], Delgado et al., 2023; Vohland et al., 2021).
- **REQ-11.3.2** The participation metrics dashboard (UI-27) MUST aggregate: number of participants by role, phase of intervention, decisions affected, and level of engagement — enabling evaluation of consultative vs. collaborative vs. co-ownership depth ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], European Commission, 2015).
- **REQ-11.3.3** The system MUST generate a participatory impact report (UI-27) that connects KG changes to specific community contributions, workshop outcomes, and objection resolutions — demonstrating social impact, not only technical performance, per US-INC-3 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], Turnhout et al., 2020).
- **REQ-11.3.4** The absence registry (UI-20) MUST classify every data gap using a structured taxonomy: data absent, not ingested, hidden by policy, uncertain, archival silence, or ethical restriction — preventing the graph from implying false non-existence, per US-EJ-6 ([[DLP-12-2025-0292 - R3|Participatory Practices, §4 Dimension 4 (Ownership)]], Fricker, 2007).
- **REQ-11.3.5** Competency questions MUST support historically interpretable forms: covering uncertainty, disputed labels, absences, silences, and sensitive categories — not only technical correctness, per US-EJ-3 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], Fox & Chandrasekar, 2021).
- **REQ-11.3.6** The staging review (UI-16) MUST include an epistemic-justice review step (EJ-4) that flags batches where representation may be unfair, sensitive categories may be imposed, or community review may be needed — blocking approval until resolved, per US-EJ-4 ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], Farnel & Shiri, 2019).
- **REQ-11.3.7** The multichannel comparator (UI-25) MUST include a divergence report that documents mediation-layer effects (translation, truncation, conversational summarisation) between UI, API, SPARQL, Cypher, and Xat channels — infrastructure variance counts as validity evidence ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], Calvano, 2025).
- **REQ-11.3.8** Evaluation of the system MUST go beyond usability and information-retrieval metrics — participation quality, trust-building, representational fairness, and community authority MUST be measured and reported alongside SUS, CSUQ, and UEQ scores ([[DLP-12-2025-0292 - R3|Participatory Practices, Rec 3]], Mahdie et al., 2024).


---

# Development priorities

Informal priority grouping for planning purposes:

| Priority | Requirements |
|---|---|
| **P0 — Foundation** | REQ-1.1.1–1.1.10 (Nielsen), REQ-2.1.1–2.1.3 (IA), REQ-3.1.1–3.2.1 (KG exploration), REQ-4.1.1 (non-expert mapping), **REQ-11.1.1–11.1.6 (lifecycle participation)** |
| **P1 — Trust & rigour** | REQ-5.1.1–5.2.1 (explainability), REQ-6.1.1–6.3.3 (provenance), REQ-4.5.1–4.5.2 (mapping adjudication), **REQ-11.2.1–11.2.8 (governance & transparency)** |
| **P2 — Cross-channel quality** | REQ-3.8.1–3.8.2 (cross-channel), REQ-9.3.1 (triple-run eval), REQ-5.6.1 (semantic fidelity) |
| **P3 — Participation & adaptation** | REQ-7.6.1–7.7.2 (user roles, personalisation), REQ-10.3.1–10.4.2 (governance cycles) |
| **P4 — Deep evaluation** | REQ-9.1.1–9.2.4 (methods, metrics), REQ-8.2.1–8.4.2 (culture, ethics, co-design) |
| **P5 — Epistemic justice** | **REQ-11.3.1–11.3.8** (participation evaluation), **US-EJ-1–US-EJ-6** (interpretable provenance, local identity, interpretable CQs, EJ staging, LLM human–machine, absence taxonomy), **US-PAR-1–US-PAR-4** (stakeholder registry, vocabulary review, objections, participation evidence), **US-INC-1–US-INC-3** (participation metrics, EJ checklist, impact report), **US-BIAS-1** (bias evaluation) — cross-reference: full requirements in §11 |
| **P6 — Beyond-task** | REQ-7.1.1–7.5.1 (UX model, aesthetics, UEQ) |
