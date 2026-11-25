"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherSave } from "@subframe/core";

function Ui192ArtifactDetail() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[640px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            barcelona1912-20261102.jsonld
          </h1>
          <p className="text-body font-body text-subtext-color">
            JSON-LD · 1,284 records · 47 KB · exported 2 Nov 2026, 14:20 by
            Elena Gómez.
          </p>
        </div>
        <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border pb-2 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Format
            </span>
            <span className="text-body font-body text-default-font">
              JSON-LD 1.1
            </span>
          </div>
          <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border py-2 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Scope
            </span>
            <span className="text-body font-body text-default-font">
              Barcelona 1912
            </span>
          </div>
          <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border py-2 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Content
            </span>
            <span className="text-body font-body text-default-font">
              Statements
            </span>
          </div>
          <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border py-2 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              SHA-256
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              9f2c…a71e
            </span>
          </div>
          <div className="flex w-full items-center justify-between pt-2 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Provenance
            </span>
            <span className="text-body font-body text-default-font">
              preserved — 38 statements carry two voices
            </span>
          </div>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherCheckCircle />}
          title="FAIR export"
          description="Provenance and disputed-voice structure are preserved in the artifact, so the file can be re-imported into the workspace without loss of attribution."
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
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui192ArtifactDetail;
