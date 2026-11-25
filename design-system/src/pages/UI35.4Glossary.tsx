"use client";

import React from "react";

function Ui354Glossary() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · HELP
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Glossary
          </h1>
          <p className="text-body font-body text-subtext-color">
            Key platform terms
          </p>
        </div>
        <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full flex-col items-start gap-1 py-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Competency question
            </span>
            <span className="text-body font-body text-subtext-color">
              The specific research question a domain model must answer, used to
              scope entities and properties.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 border-t border-solid border-neutral-border py-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Facet
            </span>
            <span className="text-body font-body text-subtext-color">
              A dimension of an entity, such as occupation or place, that
              organises attributes and enables filtering.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 border-t border-solid border-neutral-border py-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Staging
            </span>
            <span className="text-body font-body text-subtext-color">
              The holding area where imported rows are validated against
              mappings before entering the knowledge graph.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 border-t border-solid border-neutral-border py-4">
            <span className="text-body-bold font-body-bold text-default-font">
              EJ checklist
            </span>
            <span className="text-body font-body text-subtext-color">
              The environmental justice checks every dataset must pass before
              publication.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 border-t border-solid border-neutral-border py-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Absence
            </span>
            <span className="text-body font-body text-subtext-color">
              A documented gap where a person or group is missing from the
              record, recorded as evidence rather than error.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 border-t border-solid border-neutral-border py-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Trace
            </span>
            <span className="text-body font-body text-subtext-color">
              The auditable record linking an assertion back to its source
              document and the mapping that produced it.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui354Glossary;
