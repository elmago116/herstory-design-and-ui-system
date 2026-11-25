"use client";

import React from "react";
import { Button } from "@/ui/components/Button";

function Ui358Changelog() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Changelog
            </h1>
            <span className="text-body font-body text-subtext-color">
              What changed in the platform, most recent first.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                v1.4 · Dual-voice provenance
              </span>
              <span className="text-caption font-caption text-subtext-color">
                13 Nov 2026
              </span>
            </div>
            <span className="text-body font-body text-subtext-color">
              Added the dual-voice diff, absence registration and the pipeline
              alert action. Published statements now carry both readings.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                v1.3 · KG pipeline secondaries
              </span>
              <span className="text-caption font-caption text-subtext-color">
                13 Nov 2026
              </span>
            </div>
            <span className="text-body font-body text-subtext-color">
              Completed the coordinator secondary screens: source editing, run
              retry, mapping inspector, ontology import/export, reasoner and
              OOPS!, conflict adjudication, validation report and SHACL job
              control.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid bg-default-background px-6 py-6 border-border-neutral">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                v1.2 · Explainability
              </span>
              <span className="text-caption font-caption text-subtext-color">
                12 Nov 2026
              </span>
            </div>
            <span className="text-body font-body text-subtext-color">
              Reasoning traces now show every evidence source and its weight;
              LLM suggestions remain hypotheses until a human validates them.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                v1.1 · Epistemic justice
              </span>
              <span className="text-caption font-caption text-subtext-color">
                10 Nov 2026
              </span>
            </div>
            <span className="text-body font-body text-subtext-color">
              Publication is blocked until the EJ checklist passes; sensitive
              categories trigger community review.
            </span>
          </div>
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Back to help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui358Changelog;
