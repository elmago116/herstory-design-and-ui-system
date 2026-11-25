"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui355ContactSupport() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Contact support
          </h1>
          <p className="text-body font-body text-subtext-color">
            We reply within one working day.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            label="Topic"
            placeholder="Choose a topic"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Access">Access</Select.Item>
            <Select.Item value="Ingestion">Ingestion</Select.Item>
            <Select.Item value="Mapping">Mapping</Select.Item>
            <Select.Item value="Publication">Publication</Select.Item>
          </Select>
          <TextField label="Subject" helpText="">
            <TextField.Input
              placeholder="Short summary of the issue"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField label="Message" helpText="">
            <TextField.Input
              placeholder="Describe what happened and what you expected"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <p className="text-caption font-caption text-subtext-color">
            Your workspace and recent actions are attached automatically.
          </p>
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Cancel
            </Button>
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Send message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui355ContactSupport;
