"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui112AddClass() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Add class
          </h1>
          <p className="text-body font-body text-subtext-color">
            Classes mirror Wikidata items; keep labels in the workspace
            language.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            label="Label"
            helpText="Human-readable name, e.g. Seamstress."
          >
            <TextField.Input
              placeholder="Seamstress"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField
            label="IRI"
            helpText="Wikidata item URI this class maps to."
          >
            <TextField.Input
              placeholder="https://www.wikidata.org/wiki/Q1234"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Parent class"
            placeholder="Select a parent class"
            helpText="Leave empty for a root class."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Person">Person</Select.Item>
            <Select.Item value="Occupation">Occupation</Select.Item>
            <Select.Item value="Organization">Organization</Select.Item>
            <Select.Item value="Place">Place</Select.Item>
          </Select>
          <TextField
            label="Definition"
            helpText="One sentence describing what belongs in this class."
          >
            <TextField.Input
              placeholder="A person who earns a living by sewing."
              value=""
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
            Add class
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui112AddClass;
