"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";

function Ui283ObjectionForm() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Raise objection
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Mercè Puig · Q123456 · the objection goes to the community panel
              with a trace.
            </span>
          </div>
          <Select
            label="What is disputed"
            placeholder="Select the issue"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Identity or attribution">
              Identity or attribution
            </Select.Item>
            <Select.Item value="Occupation or category">
              Occupation or category
            </Select.Item>
            <Select.Item value="Date or place">Date or place</Select.Item>
            <Select.Item value="Missing record">Missing record</Select.Item>
            <Select.Item value="Sensitive representation">
              Sensitive representation
            </Select.Item>
          </Select>
          <TextArea
            label="Claim"
            helpText="Describe what is wrong and what should change."
          >
            <TextArea.Input
              placeholder="The record lists her as seamstress, but the family archive documents her as an embroiderer."
              value=""
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
            />
          </TextArea>
          <TextField
            label="Evidence link"
            helpText="Optional · a URL or archive reference."
          >
            <TextField.Input
              placeholder="https://..."
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField
            label="Contact"
            helpText="Used only to follow up on this objection."
          >
            <TextField.Input
              placeholder="name@example.org"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-4 gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Allow follow-up contact
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Required to notify you of the resolution.
              </span>
            </div>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
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
              Submit objection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui283ObjectionForm;
