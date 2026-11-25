"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui064EditStakeholderRecord() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Edit stakeholder record
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Marta Puig · Ateneu Obrer · added 14 Oct 2026
            </span>
          </div>
          <TextField label="Name" helpText="">
            <TextField.Input
              placeholder="Marta Puig"
              value="Marta Puig"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField label="Organisation" helpText="">
            <TextField.Input
              placeholder="Ateneu Obrer"
              value="Ateneu Obrer"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Phase of intervention"
            placeholder="Select phase"
            helpText="When this stakeholder entered the project."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Conceptualisation">
              Conceptualisation
            </Select.Item>
            <Select.Item value="Design">Design</Select.Item>
            <Select.Item value="Development">Development</Select.Item>
            <Select.Item value="Deployment">Deployment</Select.Item>
            <Select.Item value="Evaluation">Evaluation</Select.Item>
            <Select.Item value="Monitoring">Monitoring</Select.Item>
          </Select>
          <Select
            label="Level of engagement"
            placeholder="Select level"
            helpText="Authority this stakeholder holds."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Consultative">Consultative</Select.Item>
            <Select.Item value="Collaborative">Collaborative</Select.Item>
            <Select.Item value="Co-ownership">Co-ownership</Select.Item>
          </Select>
          <TextField
            label="Linked decision"
            helpText="Optional · the governance decision this record supports."
          >
            <TextField.Input
              placeholder="Vocabulary review · term seamstress"
              value="Vocabulary review · term seamstress"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
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
              Save record
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui064EditStakeholderRecord;
