"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { FeatherDownload } from "@subframe/core";

function Ui081ExportLogs() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Export audit logs
          </h1>
          <p className="text-body font-body text-subtext-color">
            Last export governance decisions.zip failed: export quota exceeded.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            label="Range"
            placeholder="Last 24 hours"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Last 24 hours">Last 24 hours</Select.Item>
            <Select.Item value="Last 7 days">Last 7 days</Select.Item>
            <Select.Item value="Last 30 days">Last 30 days</Select.Item>
          </Select>
          <Select
            label="Actor"
            placeholder="All actors"
            helpText="Every superadmin, coordinator and bot account."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="All actors">All actors</Select.Item>
            <Select.Item value="Mercè Puig">Mercè Puig</Select.Item>
          </Select>
          <Select
            label="Format"
            placeholder="CSV"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="CSV">CSV</Select.Item>
            <Select.Item value="JSONL">JSONL</Select.Item>
          </Select>
        </div>
        <p className="text-caption font-caption text-subtext-color">
          Large exports are queued and emailed.
        </p>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            size="medium"
            icon={<FeatherDownload />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Export logs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui081ExportLogs;
