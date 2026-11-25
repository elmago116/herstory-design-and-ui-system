"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherCode } from "@/ui/core";
import { FeatherSave } from "@/ui/core";

function Ui301SaveQuery() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Save query
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Store the current SPARQL query so it can be rerun from any channel.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField label="Name" helpText="Shown in the saved query list.">
            <TextField.Input
              placeholder="Seamstresses of El Raval"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField
            label="Description"
            helpText="Optional note for collaborators."
          >
            <TextField.Input
              placeholder="SPARQL 1.1 · Wikidata · 1912 crosswalk"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Workspace"
            placeholder="Select a workspace"
            helpText="Saved queries are shared with everyone in the workspace."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="HerStory · El Raval">
              HerStory · El Raval
            </Select.Item>
            <Select.Item value="HerStory · Barcelona">
              HerStory · Barcelona
            </Select.Item>
            <Select.Item value="Personal sandbox">Personal sandbox</Select.Item>
          </Select>
        </div>
        <div className="flex w-full items-center gap-2 rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3">
          <FeatherCode className="text-body font-body text-subtext-color" />
          <span className="text-caption font-caption text-subtext-color">
            5 lines · SPARQL 1.1 · seamstresses of El Raval, Barcelona
          </span>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-secondary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            size="medium"
            icon={<FeatherSave />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save query
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui301SaveQuery;
