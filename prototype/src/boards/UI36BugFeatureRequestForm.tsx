"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheckCircle } from "@/ui/core";

function Ui36BugFeatureRequestForm() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Bug &amp; feature request
          </h1>
          <p className="text-body font-body text-subtext-color">
            Help us improve the system.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <Select
              className="h-auto w-full flex-none"
              label="Type"
              placeholder="Select a type"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Bug">Bug</Select.Item>
              <Select.Item value="Feature request">Feature request</Select.Item>
              <Select.Item value="Question">Question</Select.Item>
            </Select>
            <TextField
              className="h-auto w-full flex-none"
              label="Title"
              helpText=""
            >
              <TextField.Input
                placeholder="Short summary of the issue or idea"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextArea
              className="h-auto w-full flex-none"
              label="Description"
              helpText=""
            >
              <TextArea.Input
                placeholder="Describe the issue or idea…"
                value=""
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
              />
            </TextArea>
            <Select
              className="h-auto w-full flex-none"
              label="Workspace affected"
              placeholder="Select a workspace"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Women of El Raval">
                Women of El Raval
              </Select.Item>
              <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
              <Select.Item value="General workspace">
                General workspace
              </Select.Item>
            </Select>
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <Switch
                  checked={true}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  Include my current query context
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Switch
                  checked={true}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  Notify me on updates
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-3">
              <Button
                variant="brand-primary"
                size="medium"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Submit
              </Button>
              <Button
                variant="neutral-secondary"
                size="medium"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Cancel
              </Button>
            </div>
          </div>
          <Alert
            variant="success"
            icon={<FeatherCheckCircle />}
            title="Submitted as ticket #T-4821"
            description="We reply within 5 working days."
          />
          <span className="text-caption font-caption text-subtext-color">
            Only you and HerStory administrators can see this report. Your query
            context is shared only if you opt in above.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Ui36BugFeatureRequestForm;
