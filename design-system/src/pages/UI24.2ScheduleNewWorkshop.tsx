"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";

function Ui242ScheduleNewWorkshop() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Schedule new workshop
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Community session · Barcelona 1912 workspace
            </span>
          </div>
          <TextField label="Title" helpText="">
            <TextField.Input
              placeholder="Vocabulary workshop"
              value="Vocabulary workshop"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full items-start gap-4 mobile:flex-col">
            <TextField label="Date" helpText="">
              <TextField.Input
                placeholder="21 Nov 2026"
                value="21 Nov 2026"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextField label="Time" helpText="">
              <TextField.Input
                placeholder="17:00 CET"
                value="17:00 CET"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
          <TextField label="Location" helpText="Physical room or video link.">
            <TextField.Input
              placeholder="Ateneu Obrer, room 2"
              value="Ateneu Obrer, room 2"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Capacity"
            placeholder="Select capacity"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="12 people">12 people</Select.Item>
            <Select.Item value="20 people">20 people</Select.Item>
            <Select.Item value="40 people">40 people</Select.Item>
          </Select>
          <TextArea label="Agenda" helpText="What the session will decide.">
            <TextArea.Input
              placeholder="Review the costurera / bordadora distinction and agree how it is represented in the graph."
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
              Schedule workshop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui242ScheduleNewWorkshop;
