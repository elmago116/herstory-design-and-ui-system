"use client";

import React from "react";
import { Button } from "@/ui/components/Button";

function Ui351GettingStarted() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · HELP
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Getting started
          </h1>
          <p className="text-body font-body text-subtext-color">
            Workspace and first pipeline
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              1.
            </span>
            <p className="text-body font-body text-default-font">
              Create your workspace under Settings, then invite coordinators by
              email.
            </p>
          </div>
          <div className="flex w-full items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              2.
            </span>
            <p className="text-body font-body text-default-font">
              Upload a source CSV in the Sources panel; columns are validated
              before anything is imported.
            </p>
          </div>
          <div className="flex w-full items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              3.
            </span>
            <p className="text-body font-body text-default-font">
              Confirm the mapping, then run the two pipeline steps below in the
              CLI.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-monospace-body font-monospace-body text-default-font">
              herstory init --workspace=ellis-island
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              herstory pipeline run --step=ingest --step=reconcile
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Related
          </h2>
          <span className="text-caption font-caption text-subtext-color">
            Roles &amp; permissions — who can approve a mapping
          </span>
          <span className="text-caption font-caption text-subtext-color">
            The KG pipeline — what happens after ingest
          </span>
        </div>
        <div className="flex w-full items-center gap-2 border-t border-solid border-neutral-border pt-6">
          <Button
            variant="neutral-secondary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Back to help
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui351GettingStarted;
