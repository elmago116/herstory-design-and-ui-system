"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherX } from "@/ui/core";

function Ui102RetryOrEscalateRun() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[640px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Retry or escalate run
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              run-2026-11-13-0412 · parish_register.pdf · failed at the OCR
              stage.
            </span>
          </div>
          <Alert
            variant="error"
            icon={<FeatherX />}
            title="Stage failed: text extraction"
            description="Scanned pages 41–58 have no OCR layer. 0 of 312 records committed; the run can resume from the failed stage."
          />
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Retry mode"
              placeholder="Select mode"
              helpText="Resuming keeps the records already extracted."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Resume from the failed stage">
                Resume from the failed stage
              </Select.Item>
              <Select.Item value="Full re-run">Full re-run</Select.Item>
            </Select>
            <TextArea
              label="Note for the engineer"
              helpText="Optional context attached to the escalation."
            >
              <TextArea.Input
                placeholder="The OCR layer is missing on the scanned insert; a pre-processing step may be needed."
                value=""
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
              />
            </TextArea>
          </div>
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Cancel
            </Button>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Escalate to engineer
            </Button>
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Retry run
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui102RetryOrEscalateRun;
