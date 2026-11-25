"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherPlus } from "@/ui/core";

function Ui211FlagNewTerm() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Flag new term
          </h1>
          <p className="text-body font-body text-subtext-color">
            A flagged term is scoped to one workspace and stays open until
            community review resolves it. The original spelling is kept so the
            source stays citable.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            className="h-auto w-full flex-none"
            label="Term as written in source"
            helpText="Stored verbatim, including spelling and accents."
          >
            <TextField.Input
              placeholder="criada"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            className="h-auto w-full flex-none"
            label="Workspace"
            placeholder="Select a workspace"
            helpText="A flag belongs to one workspace and cannot be shared."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Domestic service">Domestic service</Select.Item>
            <Select.Item value="Textile workers">Textile workers</Select.Item>
            <Select.Item value="Police records">Police records</Select.Item>
          </Select>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              className="h-auto w-full flex-none"
              label="Flag reason"
              placeholder="Select a reason"
              helpText="Explains why the term needs community review."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Contested interpretive frame">
                Contested interpretive frame
              </Select.Item>
              <Select.Item value="Loaded class hierarchy">
                Loaded class hierarchy
              </Select.Item>
              <Select.Item value="Occupational label vs broad category">
                Occupational label vs broad category
              </Select.Item>
              <Select.Item value="Victimising framing">
                Victimising framing
              </Select.Item>
              <Select.Item value="Near-duplicate / merge candidate">
                Near-duplicate / merge candidate
              </Select.Item>
            </Select>
            <Select
              className="h-auto w-full flex-none"
              label="Severity"
              placeholder="Select severity"
              helpText="High blocks publication until a decision is recorded."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="High">High</Select.Item>
              <Select.Item value="Medium">Medium</Select.Item>
              <Select.Item value="Low">Low</Select.Item>
            </Select>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label="Note for reviewers"
            helpText="Visible to the community workshop alongside the source excerpt."
          >
            <TextField.Input
              placeholder="Why does this term need review?"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <span className="text-caption font-caption text-subtext-color">
            Flagging opens a community review. The term cannot be published to
            Wikidata until a decision is recorded.
          </span>
          <span className="text-caption font-caption text-subtext-color">
            The original term is retained as a historical variant with its
            provenance link.
          </span>
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
            icon={<FeatherPlus />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Flag for review
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui211FlagNewTerm;
