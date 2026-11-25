"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Trace } from "@/ui/components/Trace";
import { FeatherInfo } from "@subframe/core";
import { FeatherSave } from "@subframe/core";

function Ui312GroundingTrace() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[720px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · CHAT
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Grounding · sources used
          </h1>
          <p className="text-body font-body text-subtext-color">
            Every step the answer passed through, in order. Nothing is shown
            that was not retrieved.
          </p>
        </div>
        <div className="flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border">
          <Trace
            title="Grounding"
            summary="2 sources · 1 reconciliation · 0 unfilled gaps"
          >
            <Trace.Step
              title="Question parsed"
              duration=""
              detail="Intent: count persons by occupation in a place and year."
              status="done"
              expanded={true}
            />
            <Trace.Step
              title="Sources retrieved"
              duration=""
              detail="Padró municipal 1912 (1,284 rows), Ateneu Obrer rolls (312 rows)."
              status="done"
              expanded={true}
            />
            <Trace.Step
              title="Entities reconciled"
              duration=""
              detail="1,271 of 1,284 rows resolved to Wikidata QIDs; 13 held back."
              status="done"
              expanded={true}
            />
            <Trace.Step
              title="Answer composed"
              duration=""
              detail="128 seamstresses; no value inferred for the 13 unresolved rows."
              status="done"
              expanded={true}
              last={true}
            />
          </Trace>
        </div>
        <Alert
          variant="neutral"
          icon={<FeatherInfo />}
          title="Held-back rows stay visible"
          description="The 13 unresolved rows are reported alongside the answer instead of being dropped silently. The count keeps its denominator, and a reader can see which rows were left out and why."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherSave />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Copy trace
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui312GroundingTrace;
