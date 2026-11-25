"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui163RejectTripleWithReason() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Reject triple
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Staging batch staging-2026-11-02a · the rejection is kept with its
              reason and reviewer.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
            <span className="text-caption font-caption text-subtext-color">
              Triple
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              Mercè Puig → hasOccupation → seamstress · El Raval, 1912
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Source: census_raw.csv row 441 · confidence 94%
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Reason"
              placeholder="Select a reason"
              helpText="Reason codes feed the mapping-quality report."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Drift from source">
                Drift from source
              </Select.Item>
              <Select.Item value="Coupling across workspaces">
                Coupling across workspaces
              </Select.Item>
              <Select.Item value="Not in source">Not in source</Select.Item>
              <Select.Item value="Sensitive category">
                Sensitive category
              </Select.Item>
              <Select.Item value="Other">Other</Select.Item>
            </Select>
            <TextArea
              label="Note"
              helpText="Optional · shown next to the rejected row."
            >
              <TextArea.Input
                placeholder="The source says costurera, not seamstress; keep the verbatim term."
                value=""
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
              />
            </TextArea>
            <Alert
              variant="warning"
              icon={<FeatherAlertTriangle />}
              title="Rejection does not publish anything"
              description="The triple stays in staging and is excluded from the next approval. Re-ingestion can bring it back as a new row."
            />
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Cancel
              </Button>
              <Button
                variant="destructive-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Reject triple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui163RejectTripleWithReason;
