"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherInfo } from "@/ui/core";

function Ui392AlertAction() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Resolve pipeline alert
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Pipeline observability / ingestion stage · alert #A-118 · opened
              13 Nov 2026, 02:14.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
            <span className="text-caption font-caption text-subtext-color">
              Alert
            </span>
            <span className="text-body font-body text-default-font">
              Ingestion volume dropped 38% below the 7-day baseline for
              parish_register.pdf.
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Threshold: 1,200 records · actual: 744 · predictive band:
              1,150–1,320
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Action"
              placeholder="Select action"
              helpText="Retry re-queues the stage; assign routes the alert."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Retry stage">Retry stage</Select.Item>
              <Select.Item value="Assign to coordinator">
                Assign to coordinator
              </Select.Item>
              <Select.Item value="Escalate to engineer">
                Escalate to engineer
              </Select.Item>
              <Select.Item value="Dismiss as expected">
                Dismiss as expected
              </Select.Item>
            </Select>
            <Select
              label="Owner"
              placeholder="Select an owner"
              helpText="Who is accountable for the follow-up."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Teresa Vidal">Teresa Vidal</Select.Item>
              <Select.Item value="Rosa Serra">Rosa Serra</Select.Item>
              <Select.Item value="Laia Font">Laia Font</Select.Item>
            </Select>
            <TextArea
              label="Note"
              helpText="Optional · attached to the alert timeline."
            >
              <TextArea.Input
                placeholder="Parish register volume is genuinely lower this quarter; retry first, dismiss if the recount is stable."
                value=""
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
              />
            </TextArea>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="Alert cadence is calibrated, not silenced"
              description="Every action or dismissal is recorded in the observability timeline and reviewed in the weekly governance check."
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
                Apply action
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui392AlertAction;
