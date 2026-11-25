"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui052EditRetentionRule() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            Retention policy
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Raw source files
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            CSV, PDF and scans as ingested. All workspaces · 730 days.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            label="Window (days)"
            helpText="Minimum 30 days, maximum 3650."
          >
            <TextField.Input
              placeholder="730"
              value="730"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Action on expiry"
            placeholder="Choose an action"
            helpText="Applied automatically by the nightly sweep."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Delete">Delete</Select.Item>
            <Select.Item value="Archive to cold storage">
              Archive to cold storage
            </Select.Item>
            <Select.Item value="Anonymise">Anonymise</Select.Item>
          </Select>
          <TextField
            label="Legal basis"
            helpText="Recorded in the audit trail with every sweep."
          >
            <TextField.Input
              placeholder="e.g. GDPR Art. 6(1)(f) legitimate interest"
              value="GDPR Art. 17 erasure request handling"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
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
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save rule
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui052EditRetentionRule;
