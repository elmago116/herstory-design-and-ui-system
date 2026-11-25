"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { FeatherSave } from "@subframe/core";

function Ui191ExportRun() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Export in progress
          </h1>
          <p className="text-body font-body text-subtext-color">
            JSON-LD · All workspaces · Statements. The artifact is written once
            complete; you can leave this dialog.
          </p>
        </div>
        <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <span className="text-monospace-body font-monospace-body text-default-font">
            barcelona1912-20261113.jsonld
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <Progress value={45} />
          <span className="text-caption font-caption text-subtext-color">
            640 of 1,284 statements · 47 KB so far
          </span>
        </div>
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
            Download when ready
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui191ExportRun;
