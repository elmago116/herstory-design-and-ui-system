"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";

function Ui131EditShape() {
  return (
    <div className="flex h-full w-full items-start justify-end bg-[#00000099]">
      <div className="flex w-[520px] flex-none flex-col items-start gap-6 self-stretch rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-3">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · VALIDATION
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            PersonShape
          </h1>
          <div className="flex w-full items-center gap-2">
            <Badge variant="error">Violation</Badge>
            <span className="text-caption font-caption text-subtext-color">
              Targets ex:Person
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-surface px-4 py-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Target class
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              ex:Person
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Property
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              ex:birthDate
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Constraint
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              sh:minCount 1
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Definition
          </h2>
          <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-monospace-body font-monospace-body text-default-font">
              ex:PersonShape a sh:NodeShape ;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              sh:targetClass ex:Person ;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              sh:property [
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              sh:path ex:birthDate ;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              sh:minCount 1 ;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              sh:message &quot;Birth date is required&quot; ] .
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 mt-auto">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save shape
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui131EditShape;
