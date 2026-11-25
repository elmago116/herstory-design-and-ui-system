"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";

function Ui162ApproveAndPublish() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Approve and publish
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Publishes the approved triples to Wikidata and records the reviewer.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Batch
            </span>
            <span className="text-body font-body text-default-font">
              staging-2026-11-02a
            </span>
          </div>
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Triples
            </span>
            <span className="text-body font-body text-default-font">
              250 staged · 178 approved · 12 flagged
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full items-start justify-between gap-4">
              <span className="text-caption font-caption text-subtext-color">
                Reviewer
              </span>
              </div>
            <div className="flex w-full items-start justify-between gap-4">
              <span className="text-caption font-caption text-subtext-color">
                EJ status
              </span>
              <div className="flex items-center gap-2">
                <span className="text-body font-body text-default-font">
                  Checklist required before publish
                </span>
                <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                  Pending
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <TextField
          label="Edit summary"
          helpText="Recorded on the Wikidata revision and in the batch audit log."
        >
          <TextField.Input
            placeholder="Publish 178 approved triples from staging-2026-11-02a"
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </TextField>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui162ApproveAndPublish;
