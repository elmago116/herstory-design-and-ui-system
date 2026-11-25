"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherInfo } from "@/ui/core";

function Ui223RejectionRationale() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Record rejection rationale
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Objection #O-118 · submitted 9 Nov 2026 · community panel
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
            <span className="text-caption font-caption text-subtext-color">
              Objection
            </span>
            <span className="text-body font-body text-default-font">
              “Bordadora is not the same occupation as costurera; merging them
              erases the embroidery trade.”
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Entity: Mercè Puig · mapping v41 · evidence attached: 2 documents
            </span>
          </div>
          <Select
            label="Reason"
            placeholder="Select reason"
            helpText="Reason codes are reported in the governance review."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Insufficient evidence">
              Insufficient evidence
            </Select.Item>
            <Select.Item value="Not historically grounded">
              Not historically grounded
            </Select.Item>
            <Select.Item value="Duplicate objection">
              Duplicate objection
            </Select.Item>
            <Select.Item value="Out of scope">Out of scope</Select.Item>
          </Select>
          <TextArea
            label="Rationale"
            helpText="Required · shared with the objector."
          >
            <TextArea.Input
              placeholder="The two source terms are used interchangeably in the 1912 census; the attached documents do not establish a distinct trade."
              value=""
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
            />
          </TextArea>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="The objector is notified with the rationale"
            description="Rejection does not close the issue permanently; new evidence can reopen the objection."
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
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Record decision
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui223RejectionRationale;
