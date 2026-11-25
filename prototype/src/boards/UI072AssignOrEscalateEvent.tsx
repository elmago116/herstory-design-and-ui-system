"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";

function Ui072AssignOrEscalateEvent() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Assign or escalate event
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Cross-workspace regression · G-204 · opened 13 Nov 2026, 06:10
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
            <span className="text-caption font-caption text-subtext-color">
              Event
            </span>
            <span className="text-body font-body text-default-font">
              Vocabulary overlap: hs:seamstress used in two workspaces with
              different Wikidata targets.
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Barcelona 1912 → Q11997032 · Suffrage Correspondence → Q1107989
            </span>
          </div>
          <Select
            label="Action"
            placeholder="Select action"
            helpText="Assign keeps it in this workspace; escalate takes it platform-wide."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Assign to coordinator">
              Assign to coordinator
            </Select.Item>
            <Select.Item value="Escalate to superadmin">
              Escalate to superadmin
            </Select.Item>
          </Select>
          <Select
            label="Owner"
            placeholder="Select an owner"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Teresa Vidal">Teresa Vidal</Select.Item>
            <Select.Item value="Rosa Serra">Rosa Serra</Select.Item>
            <Select.Item value="Mercè Puig">Mercè Puig</Select.Item>
          </Select>
          <TextArea label="Note" helpText="Optional · shown with the event.">
            <TextArea.Input
              placeholder="Both readings may be valid in their own workspace; check before aligning the target."
              value=""
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
            />
          </TextArea>
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
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui072AssignOrEscalateEvent;
