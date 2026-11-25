"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherAlertTriangle } from "@/ui/core";

function Ui122ConflictAdjudication() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[640px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Adjudicate mapping conflict
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              person_mapping.ttl · census_raw.csv row 441 · detected 13 Nov
              2026, 09:40.
            </span>
          </div>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Drift between source and mapped value"
            description="The source text says costurera; the rule maps the row to seamstress (wd:Q11997032). Human decision required before the batch can be approved."
          />
          <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-1 self-stretch rounded-md bg-background-alt px-4 py-4">
              <span className="text-caption font-caption text-subtext-color">
                Source · census_raw.csv row 441
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                costurera
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Occupation field, kept verbatim
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch rounded-md bg-background-alt px-4 py-4">
              <span className="text-caption font-caption text-subtext-color">
                Mapped · wd:Q11997032
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                seamstress
              </span>
              <span className="text-caption font-caption text-subtext-color">
                schema:jobTitle via rule 3 · confidence 0.94
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Decision"
              placeholder="Select decision"
              helpText="The decision is recorded against this mapping version."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Keep both readings (polyvocality)">
                Keep both readings (polyvocality)
              </Select.Item>
              <Select.Item value="Follow the source">
                Follow the source
              </Select.Item>
              <Select.Item value="Keep the mapped value">
                Keep the mapped value
              </Select.Item>
              <Select.Item value="Mark authorised absence">
                Mark authorised absence
              </Select.Item>
            </Select>
            <TextArea
              className="h-auto w-full flex-none"
              label="Rationale"
              helpText="Required · visible in the audit trail."
            >
              <TextArea.Input
                placeholder="costurera is the census term for a seamstress working at home; the mapping is correct."
                value=""
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
              />
            </TextArea>
            <div className="flex w-full items-center justify-end gap-2">
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
                Save decision
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui122ConflictAdjudication;
