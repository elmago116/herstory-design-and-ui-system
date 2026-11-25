"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui022CreateWorkspace() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Create workspace
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            A workspace scopes sources, members and publication rights.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField label="Name" helpText="">
            <TextField.Input
              placeholder="Barcelona 1912"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Coordinator"
            placeholder="Select a coordinator"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Elena Gómez">Elena Gómez</Select.Item>
            <Select.Item value="Julián Giraldo">Julián Giraldo</Select.Item>
            <Select.Item value="Marta Puig">Marta Puig</Select.Item>
          </Select>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            label="Retention window"
            placeholder="Select a window"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="1 year">1 year</Select.Item>
            <Select.Item value="3 years">3 years</Select.Item>
            <Select.Item value="10 years">10 years</Select.Item>
          </Select>
          <TextField label="Purpose" helpText="">
            <TextField.Input
              placeholder="Census records of Barcelona, 1912"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
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
            Create workspace
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui022CreateWorkspace;
