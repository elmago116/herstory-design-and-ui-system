"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { FeatherCheck } from "@/ui/core";

function Ui062Export() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Export stakeholders
          </h1>
          <span className="text-body font-body text-subtext-color">
            Exports the filtered registry, including consent state.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            label="Format"
            placeholder="CSV"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="CSV">CSV</Select.Item>
            <Select.Item value="JSON">JSON</Select.Item>
            <Select.Item value="XLSX">XLSX</Select.Item>
          </Select>
          <Select
            label="Scope"
            placeholder="Current filter"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Current filter">Current filter</Select.Item>
            <Select.Item value="All stakeholders">All stakeholders</Select.Item>
          </Select>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Columns to include
          </h2>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background" />
              <span className="text-body font-body text-default-font">
                Include contact details
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
                <FeatherCheck className="text-caption font-caption text-brand-primary" />
              </div>
              <span className="text-body font-body text-default-font">
                Include engagement history
              </span>
            </div>
          </div>
        </div>
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
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui062Export;
