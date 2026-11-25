"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";

function Ui262AssignMitigation() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Assign mitigation
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Bias finding B-07 · annotation stage · opened 12 Nov 2026
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
            <span className="text-caption font-caption text-subtext-color">
              Finding
            </span>
            <span className="text-body font-body text-default-font">
              Domestic workers are mapped to occupation at 41% vs. 78% for
              industrial workers in the same census.
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Metric: coverage parity · current 0.53 · threshold 0.80
            </span>
          </div>
          <Select
            label="Mitigation"
            placeholder="Select a mitigation"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Add source coverage">
              Add source coverage
            </Select.Item>
            <Select.Item value="Relabel category">Relabel category</Select.Item>
            <Select.Item value="Adjust mapping rule">
              Adjust mapping rule
            </Select.Item>
            <Select.Item value="Raise threshold">Raise threshold</Select.Item>
          </Select>
          <Select
            label="Owner"
            placeholder="Select an owner"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Elena Gómez">Elena Gómez</Select.Item>
            <Select.Item value="Teresa Vidal">Teresa Vidal</Select.Item>
            <Select.Item value="Laia Font">Laia Font</Select.Item>
          </Select>
          <TextField
            label="Due date"
            helpText="Re-measurement happens after this date."
          >
            <TextField.Input
              placeholder="28 Nov 2026"
              value="28 Nov 2026"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextArea
            label="Plan"
            helpText="What will change and how the metric will be re-measured."
          >
            <TextArea.Input
              placeholder="Ingest the domestic-service schedules and re-run the occupation mapping on the affected cohort."
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
              Assign mitigation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui262AssignMitigation;
