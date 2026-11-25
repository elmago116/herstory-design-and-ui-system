export const MAIN_STEPS: { label: string; route: string }[] = [
  { label: "Source registration", route: "/ui/ui-09-source-registration" },
  { label: "Ingestion", route: "/ui/ui-10-ingestion-monitor" },
  { label: "Ontology", route: "/ui/ui-11s-ontology-manager-select" },
  { label: "Mapping", route: "/ui/ui-12-mapping-editor" },
  { label: "Validation", route: "/ui/ui-13-shacl-shapes-editor" },
  { label: "Publish", route: "/ui/ui-19-artifact-exporter" },
];

export const ACTIVE_MAIN: Record<string, number> = {
  "source-registration": 0,
  ingestion: 1,
  ontology: 2,
  mapping: 3,
  shacl: 4,
  cq: 4,
  suggestions: 4,
  transformation: 4,
  absence: 4,
  provenance: 4,
  staging: 5,
  export: 5,
  observability: 5,
};
