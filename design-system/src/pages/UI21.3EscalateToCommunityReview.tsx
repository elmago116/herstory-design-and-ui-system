"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherInfo } from "@subframe/core";

function Ui213EscalateToCommunityReview() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Escalate to community review
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Vocabulary review · term “seamstress” · flagged 12 Nov 2026
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
            <span className="text-caption font-caption text-subtext-color">
              Flag
            </span>
            <span className="text-body font-body text-default-font">
              The term collapses costurera and bordadora into one Wikidata
              target; the community may read them differently.
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Affected statements: 41 · workspaces: Barcelona 1912, Suffrage
              Correspondence
            </span>
          </div>
          <Select
            label="Escalate to"
            placeholder="Select target"
            helpText="Community review is required when a category imposes an interpretive frame."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Community panel">Community panel</Select.Item>
            <Select.Item value="Next workshop">Next workshop</Select.Item>
            <Select.Item value="Both">Both</Select.Item>
          </Select>
          <Select
            label="Workshop"
            placeholder="Select workshop"
            helpText="Optional · links the escalation to a scheduled session."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Vocabulary workshop · 21 Nov 2026">
              Vocabulary workshop · 21 Nov 2026
            </Select.Item>
            <Select.Item value="None">None</Select.Item>
          </Select>
          <TextArea
            label="Context for reviewers"
            helpText="Explain what is contested, without prescribing the answer."
          >
            <TextArea.Input
              placeholder="Both terms name home-based needlework; the question is whether the graph should keep them distinct or align them."
              value=""
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
            />
          </TextArea>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Escalation pauses the relabel"
            description="The term stays flagged and no mapping is changed until the community review records a resolution."
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
              Escalate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui213EscalateToCommunityReview;
