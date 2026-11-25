"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherCheck } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";

function Ui113MappingCodeInspector() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
              <div className="flex flex-col items-start gap-1">
                <span className="text-caption font-caption text-subtext-color">
                  Ontology manager / Person / occupation
                </span>
                <h1 className="text-heading-1 font-heading-1 text-default-font">
                  Mapping code · person_mapping.ttl
                </h1>
                <span className="text-caption font-caption text-subtext-color">
                  v41 · read-only · 3 rules · applied by the last transformation
                  run on 12 Nov 2026.
                </span>
              </div>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open in mapping editor
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Person mapping
              </span>
              <Badge variant="success" icon={<FeatherCheck />}>
                v41 current
              </Badge>
            </div>
            <div className="w-full items-start gap-6 grid grid-cols-4 mobile:gap-4 mobile:grid mobile:grid-cols-2">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Author
                </span>
                <span className="text-body font-body text-default-font">
                  Elena Gómez
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Last run
                </span>
                <span className="text-body font-body text-default-font">
                  12 Nov 2026, 09:40
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Rows covered
                </span>
                <span className="text-body font-body text-default-font">
                  2,418 of 2,418
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Conflict rule
                </span>
                <span className="text-body font-body text-default-font">
                  flag drift · keep coupling
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4 overflow-x-auto">
              <span className="text-monospace-body font-monospace-body text-default-font">
                @prefix hs: &lt;https://herstory.example/ontology#&gt; .
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                @prefix schema: &lt;https://schema.org/&gt; .
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                @prefix wdt: &lt;http://www.wikidata.org/prop/direct/&gt; .
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                hs:Person a owl:Class ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                rdfs:subClassOf wd:Q5 .
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                hs:occupation a owl:ObjectProperty ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                rdfs:label &quot;occupation&quot;@en ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                rdfs:range wd:Q28640 .
              </span>
            </div>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Read-only inspection"
            description="Edit rules in the mapping editor (UI-12); every save creates a new version and is linked to the staging batch it produced."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui113MappingCodeInspector;
