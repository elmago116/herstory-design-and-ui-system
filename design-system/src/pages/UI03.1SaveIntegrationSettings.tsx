"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { FeatherSave } from "@subframe/core";

function Ui031SaveIntegrationSettings() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Save integration settings
          </h1>
          <p className="text-body font-body text-subtext-color">
            3 settings changed. These apply to every workspace on the next
            ingestion run, not only to the one you are viewing.
          </p>
        </div>
        <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border">
          <div className="flex w-full items-start justify-between border-b border-solid border-neutral-border px-4 py-3 gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Default language
            </span>
            <span className="text-body font-body text-default-font">
              Spanish (es) → Catalan (ca)
            </span>
          </div>
          <div className="flex w-full items-start justify-between border-b border-solid border-neutral-border px-4 py-3 gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Sync frequency
            </span>
            <span className="text-body font-body text-default-font">
              Nightly → Hourly
            </span>
          </div>
          <div className="flex w-full items-start justify-between px-4 py-3 gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Auto-validate mappings
            </span>
            <span className="text-body font-body text-default-font">
              Off → On
            </span>
          </div>
        </div>
        <Alert
          variant="warning"
          title="Endpoint changes affect the whole pipeline"
          description="Reconciliation runs against the new endpoint on the next sync. Mappings validated against the old endpoint are re-checked, and any that no longer resolve enter staging review."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherSave />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save 3 changes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui031SaveIntegrationSettings;
