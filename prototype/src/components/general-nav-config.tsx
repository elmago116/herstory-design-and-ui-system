import React from "react";
import {
  FeatherActivity,
  FeatherBadgeHelp,
  FeatherBookA,
  FeatherBookmark,
  FeatherCircleDashed,
  FeatherCompass,
  FeatherDice1,
  FeatherFileText,
  FeatherFlaskConical,
  FeatherHistory,
  FeatherImport,
  FeatherLayers,
  FeatherMap,
  FeatherRoute,
  FeatherSettings,
  FeatherShovel,
} from "@/ui/core";

export interface GeneralNavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
  badge?: { text: string; variant?: "neutral" | "warning" };
}

export interface GeneralNavSection {
  label: string;
  items: GeneralNavItem[];
}

const dot = <FeatherCircleDashed />;

const shared = {
  sources: { label: "Sources", to: "/ui/ui-09-source-registration", icon: <FeatherImport /> },
  mapping: { label: "Mapping", to: "/ui/ui-12-mapping-editor", icon: dot },
  ontology: { label: "Ontology", to: "/ui/ui-11s-ontology-manager-select", icon: dot },
  staging: { label: "Staging review", to: "/ui/ui-16-staging-review", icon: dot },
  cq: { label: "CQ registry", to: "/ui/ui-14-competency-question-registry", icon: <FeatherFlaskConical /> },
  llm: { label: "LLM suggestions", to: "/ui/ui-17-llm-suggestion-panel", icon: dot },
  pipeline: { label: "Pipeline dashboard", to: "/ui/ui-39-pipeline-observability-dashboard", icon: <FeatherActivity /> },
  provenance: { label: "Provenance and polyvocality", to: "/ui/ui-38-provenance-polyvocality-panel", icon: dot },
  absence: { label: "Absence registry", to: "/ui/ui-20-absence-registry", icon: dot },
  vocabulary: { label: "Vocabulary review", to: "/ui/ui-21-vocabulary-review-panel", icon: <FeatherLayers /> },
  objections: { label: "Objections", to: "/ui/ui-22-objection-management-dashboard", icon: dot },
  ej: { label: "EJ checklist", to: "/ui/ui-23-ej-checklist-operator", icon: dot },
  graph: { label: "Graph", to: "/ui/ui-28-graph-explorer", icon: <FeatherCompass /> },
  query: { label: "Query", to: "/ui/ui-29-visual-query-builder", icon: dot },
};

export const GENERAL_NAV: Record<string, GeneralNavSection[]> = {
  superadmin: [
    {
      label: "Ingestion and mapping",
      items: [shared.sources, { ...shared.mapping, label: "Mapping" }, shared.ontology],
    },
    {
      label: "Provenance and observability",
      items: [
        shared.pipeline,
        shared.provenance,
        { label: "Audit logs", to: "/ui/ui-08-audit-logs-session-monitor", icon: dot },
      ],
    },
    { label: "Explainability", items: [shared.cq, shared.llm] },
    { label: "KG exploration", items: [shared.graph, { ...shared.query, label: "Query builder" }] },
    {
      label: "Participation and justice",
      items: [
        { label: "Stakeholders", to: "/ui/ui-06-stakeholder-registry", icon: <FeatherLayers /> },
        shared.vocabulary,
        shared.objections,
        { label: "Epistemic Justice checklist", to: "/ui/ui-23-ej-checklist-operator", icon: dot },
      ],
    },
    {
      label: "Governance and administration",
      items: [
        { label: "Overview", to: "/ui/ui-07-cross-workspace-governance-dashboard", icon: <FeatherSettings /> },
        { label: "Policy and authority", to: "/ui/ui-04-3-authority-matrix-editor", icon: dot },
        { label: "Consent and GDPR", to: "/ui/ui-04-4-consent-and-gdpr-view", icon: dot },
        { label: "Users", to: "/ui/ui-01-user-management", icon: dot },
        { label: "Workspaces", to: "/ui/ui-02-workspace-management", icon: dot },
      ],
    },
  ],

  coordinator: [
    {
      label: "Ingestion and mapping",
      items: [
        shared.sources,
        { label: "Ingestion monitor", to: "/ui/ui-10-ingestion-monitor", icon: dot },
        shared.ontology,
        { ...shared.mapping, label: "Mapping editor" },
        shared.staging,
      ],
    },
    { label: "Explainability", items: [shared.cq, shared.llm] },
    {
      label: "Provenance and observability",
      items: [shared.pipeline, shared.provenance, shared.absence],
    },
    {
      label: "Participation and justice",
      items: [shared.vocabulary, shared.objections, { ...shared.ej, label: "EJ checklist" }],
    },
    {
      label: "Governance and administration",
      items: [
        { label: "Policy · read only", to: "/ui/ui-04-governance-panel", icon: <FeatherSettings /> },
        { label: "Stakeholders · read only", to: "/ui/ui-06-stakeholder-registry", icon: dot },
      ],
    },
    { label: "KG exploration", items: [shared.graph, shared.query] },
  ],

  "coordinator-team": [
    {
      label: "Team and quality gates",
      items: [
        {
          label: "Overview",
          to: "/ui/ui-37-6-2-general-operation-coordinator-team",
          icon: <FeatherSettings />,
        },
        {
          label: "Team work",
          to: "/ui/ui-07-cross-workspace-governance-dashboard",
          icon: <FeatherLayers />,
          badge: { text: "5" },
        },
        {
          label: "Quality gates",
          to: "/ui/ui-16-4-shacl-report-and-job-cancel",
          icon: <FeatherActivity />,
          badge: { text: "1", variant: "warning" },
        },
      ],
    },
    {
      label: "Ingestion and mapping",
      items: [
        shared.sources,
        { label: "Ingestion monitor", to: "/ui/ui-10-ingestion-monitor", icon: dot },
        shared.ontology,
        { ...shared.mapping, label: "Mapping editor" },
        shared.staging,
      ],
    },
    { label: "Explainability", items: [shared.cq, shared.llm] },
    {
      label: "Provenance and observability",
      items: [shared.pipeline, shared.provenance, shared.absence],
    },
    {
      label: "Participation and justice",
      items: [shared.vocabulary, shared.objections, { ...shared.ej, label: "EJ checklist" }],
    },
    {
      label: "Governance and administration",
      items: [
        { label: "Policy · read only", to: "/ui/ui-04-governance-panel", icon: <FeatherSettings /> },
        { label: "Stakeholders · read only", to: "/ui/ui-06-stakeholder-registry", icon: dot },
      ],
    },
    {
      label: "KG exploration",
      items: [
        { ...shared.graph, label: "Graph · read only" },
        { ...shared.query, label: "Query · read only" },
      ],
    },
  ],

  inquirer: [
    {
      label: "KG exploration",
      items: [
        { label: "Search", to: "/ui/ui-28-1-entity-search", icon: <FeatherCompass /> },
        { label: "Graph explorer", to: "/ui/ui-28-graph-explorer", icon: dot },
        { label: "Visual query", to: "/ui/ui-29-visual-query-builder", icon: dot },
        { label: "SPARQL editor", to: "/ui/ui-30-sparql-editor", icon: dot },
        { label: "Chat", to: "/ui/ui-31-nl-chat", icon: dot },
        { label: "Collections", to: "/ui/ui-32-collection-browser", icon: dot },
        { label: "Documents", to: "/ui/ui-33-document-corpus", icon: <FeatherFileText /> },
        { label: "Map", to: "/ui/ui-34-map-view", icon: <FeatherMap /> },
      ],
    },
    {
      label: "Explainability",
      items: [
        { label: "Trace · read only", to: "/ui/ui-31-2-grounding-trace", icon: <FeatherRoute /> },
        { label: "Sources · read only", to: "/ui/ui-09-source-registration", icon: <FeatherShovel /> },
      ],
    },
    {
      label: "Personalisation",
      items: [
        { label: "Preferences", to: "/ui/ui-40-personalisation-adaptation-settings", icon: <FeatherSettings /> },
        { label: "History and defaults", to: "/ui/ui-40-1-clear-history", icon: <FeatherHistory /> },
      ],
    },
    {
      label: "Help",
      items: [
        { label: "Getting started", to: "/ui/ui-35-1-getting-started", icon: <FeatherDice1 /> },
        { label: "FAQ", to: "/ui/ui-35-6-faq", icon: <FeatherBookmark /> },
        { label: "Glossary", to: "/ui/ui-35-4-glossary", icon: <FeatherBookA /> },
        { label: "Contact support", to: "/ui/ui-35-5-contact-support", icon: <FeatherBadgeHelp /> },
      ],
    },
  ],
};

export const ROLE_LABELS: Record<string, string> = {
  superadmin: "Superadmin",
  coordinator: "Coordinator",
  "coordinator-team": "Coordinator · team",
  inquirer: "Inquirer",
};

export const readRole = (): string => {
  try {
    const explicit = localStorage.getItem("herstory-role");
    if (explicit && GENERAL_NAV[explicit]) return explicit;
    const raw = localStorage.getItem("herstory-prototype/v1");
    const role = raw ? JSON.parse(raw)?.role : null;
    if (role && GENERAL_NAV[role]) return role;
  } catch {
    /* storage can be unavailable in private mode */
  }
  return "superadmin";
};
