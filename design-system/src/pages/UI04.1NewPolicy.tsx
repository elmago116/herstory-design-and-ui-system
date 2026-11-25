"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheck } from "@subframe/core";

function Ui041NewPolicy() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            New policy
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Policies gate publication and record who reviewed what.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            label="Policy name"
            helpText="Uppercase label used in the decision log."
          >
            <TextField.Input
              placeholder="e.g. Community correction chain"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full items-start gap-4">
            <div className="flex grow shrink-0 basis-0 flex-col items-start">
              <Select
                label="Scope"
                placeholder="Select scope"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Workspace">Workspace</Select.Item>
                <Select.Item value="Cross-workspace">
                  Cross-workspace
                </Select.Item>
                <Select.Item value="Publication">Publication</Select.Item>
              </Select>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start">
              <Select
                label="Oversight"
                placeholder="Select oversight"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Coordinator only">
                  Coordinator only
                </Select.Item>
                <Select.Item value="Coordinator + reviewer">
                  Coordinator + reviewer
                </Select.Item>
                <Select.Item value="Superadmin">Superadmin</Select.Item>
              </Select>
            </div>
          </div>
          <TextField
            label="Rule summary"
            helpText="One sentence describing what this policy blocks."
          >
            <TextField.Input
              placeholder="e.g. Blocks publication when representation checks fail"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
              <FeatherCheck className="text-caption font-caption text-brand-primary" />
            </div>
            <span className="text-body font-body text-default-font">
              Require human sign-off before publish
            </span>
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
            Create policy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui041NewPolicy;
