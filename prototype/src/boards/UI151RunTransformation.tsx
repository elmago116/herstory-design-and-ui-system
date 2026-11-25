"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherFileText } from "@/ui/core";

function Ui151RunTransformation() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Confirm transformation run
          </h1>
          <p className="text-body font-body text-subtext-color">
            A transformation writes candidate triples into the staging review
            queue. Nothing is written directly into the published graph, so this
            run can be reverted by discarding its batch.
          </p>
        </div>
        <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border pb-3 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Transformer
            </span>
            <span className="text-body font-body text-default-font">
              CSV→RDF Triples
            </span>
          </div>
          <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border py-3 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Dataset
            </span>
            <span className="text-body font-body text-default-font">
              Barcelona_1912
            </span>
          </div>
          <div className="flex w-full items-center justify-between pt-3 gap-6">
            <span className="text-caption font-caption text-subtext-color">
              Target
            </span>
            <span className="text-body font-body text-default-font">
              Staging review queue
            </span>
          </div>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="This run will create new triples"
          description="Rows that fail SHACL validation are held back and reported instead of being written. The previous run of this transformer produced 1,284 triples from the same dataset."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="neutral-secondary"
            icon={<FeatherFileText />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Show report
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Run transformation
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui151RunTransformation;
