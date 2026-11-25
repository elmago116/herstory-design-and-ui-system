"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherPlus } from "@subframe/core";

function Ui291ConditionEditor() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · QUERY
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Add condition
          </h1>
          <p className="text-body font-body text-subtext-color">
            Conditions combine with AND / OR in the order shown. Class is fixed
            for the whole query.
          </p>
        </div>
        <Combobox
          className="h-auto w-full flex-none"
          label="Property"
          placeholder="occupation"
          value=""
          helpText="Searched against the ontology, not the raw source strings."
        />
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            className="h-auto w-full flex-none"
            label="Operator"
            placeholder="equals"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="equals">equals</Select.Item>
            <Select.Item value="contains">contains</Select.Item>
            <Select.Item value="starts with">starts with</Select.Item>
            <Select.Item value="is not">is not</Select.Item>
            <Select.Item value="greater than">greater than</Select.Item>
            <Select.Item value="before">before</Select.Item>
          </Select>
          <TextField
            className="h-auto w-full flex-none"
            label="Value"
            helpText="Matched case-insensitively against the literal source term."
          >
            <TextField.Input
              placeholder="seamstress"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <Select
          className="h-auto w-full flex-none"
          label="Combine with"
          placeholder="AND"
          helpText="Applies to the previous condition; the first condition in a block starts the block."
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="AND">AND</Select.Item>
          <Select.Item value="OR">OR</Select.Item>
        </Select>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <span className="text-caption font-caption text-subtext-color">
            Suggested properties: occupation, place of birth, date of birth,
            gender.
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
            Add condition
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui291ConditionEditor;
