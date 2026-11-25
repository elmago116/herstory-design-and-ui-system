"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui092EditSource() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Edit source
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Update the parameters of census_raw.csv · changes are versioned
              and audited.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <TextField
              label="Source name"
              helpText="Human-readable name for this source data"
            >
              <TextField.Input
                placeholder="Barcelona census 1912"
                value="census_raw.csv"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <Select
              label="Type"
              placeholder="Select type"
              helpText="Format of the source data"
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="CSV">CSV</Select.Item>
              <Select.Item value="PDF">PDF</Select.Item>
              <Select.Item value="API">API</Select.Item>
            </Select>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <TextField
              label="Source URL"
              helpText="Location or file path of the source"
            >
              <TextField.Input
                placeholder="https://..."
                value="s3://herstory-archive/census_raw.csv"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <Select
              label="Format"
              placeholder="Select format"
              helpText="Data format specification"
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="CSV">CSV</Select.Item>
              <Select.Item value="JSON">JSON</Select.Item>
              <Select.Item value="Turtle">Turtle</Select.Item>
            </Select>
            <Select
              label="Permission / workspace"
              placeholder="Select workspace"
              helpText="Workspace scope and access level"
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
              <Select.Item value="Ateneu Obrer">Ateneu Obrer</Select.Item>
              <Select.Item value="Parish Records">Parish Records</Select.Item>
            </Select>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Alert
              variant="warning"
              icon={<FeatherAlertTriangle />}
              title="Saving re-queues ingestion for this source"
              description="Existing mapped triples keep their current version until the new run is approved in staging."
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
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui092EditSource;
