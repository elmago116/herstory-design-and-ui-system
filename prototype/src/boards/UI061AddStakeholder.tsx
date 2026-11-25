"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui061AddStakeholder() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-[#00000099]">
      <div className="flex w-[520px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Add stakeholder
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Stakeholders are consulted at named phases; consent is recorded per
            workspace.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            label="Name"
            helpText="Full name, as it should appear in the registry."
          >
            <TextField.Input
              placeholder="Maria Claramunt"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField
            label="Affiliation"
            helpText="Organisation, institution or self-description."
          >
            <TextField.Input
              placeholder="Associació Dones de la Memòria"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <Select
          label="Phase of intervention"
          placeholder="Select a phase"
          helpText="The phase at which this stakeholder is consulted."
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Conceptualisation">Conceptualisation</Select.Item>
          <Select.Item value="Design">Design</Select.Item>
          <Select.Item value="Development">Development</Select.Item>
          <Select.Item value="Deployment">Deployment</Select.Item>
          <Select.Item value="Evaluation">Evaluation</Select.Item>
          <Select.Item value="Monitoring">Monitoring</Select.Item>
        </Select>
        <Select
          label="Level of engagement"
          placeholder="Select a level"
          helpText="How much decision power the stakeholder holds."
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Consultative">Consultative</Select.Item>
          <Select.Item value="Collaborative">Collaborative</Select.Item>
          <Select.Item value="Co-ownership">Co-ownership</Select.Item>
        </Select>
        <Select
          label="Workspace"
          placeholder="Select a workspace"
          helpText="Consent is recorded per workspace."
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Suffrage Correspondence">
            Suffrage Correspondence
          </Select.Item>
          <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
          <Select.Item value="Women in Catalan Press">
            Women in Catalan Press
          </Select.Item>
          <Select.Item value="Seville Archivo Municipal">
            Seville Archivo Municipal
          </Select.Item>
          <Select.Item value="All workspaces">All workspaces</Select.Item>
        </Select>
        <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-neutral-border pt-4 mt-auto">
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
            Add stakeholder
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui061AddStakeholder;
