"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherClock } from "@subframe/core";

function Ui121EditMappingRule() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            MAPPING RULES · census_raw.csv
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Edit mapping rule
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            Change the target property or transform for this rule
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Source file
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              census_raw.csv
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Rule status
            </span>
            <Badge variant="warning" icon={<FeatherClock />}>
              Review
            </Badge>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            className="h-auto w-full flex-none"
            label="CSV column"
            placeholder="Select source column…"
            helpText="Columns from census_raw.csv"
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="full_name">full_name</Select.Item>
            <Select.Item value="birth_year">birth_year</Select.Item>
            <Select.Item value="occupation">occupation</Select.Item>
            <Select.Item value="address">address</Select.Item>
            <Select.Item value="gender">gender</Select.Item>
          </Select>
          <Combobox
            className="h-auto w-full flex-none"
            label="Target property"
            placeholder="Search by label or property ID…"
            value=""
            helpText="e.g. P106 (occupation), P21 (sex/gender)"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Select
            className="h-auto w-full flex-none"
            label="Transform"
            placeholder="No transform"
            helpText="Applied to every value in this column before writing"
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="none">none</Select.Item>
            <Select.Item value="date parser">date parser</Select.Item>
            <Select.Item value="gender normaliser">
              gender normaliser
            </Select.Item>
          </Select>
          <TextField
            label="Note for reviewers"
            helpText="Visible in the mapping audit trail"
          >
            <TextField.Input
              placeholder="e.g. checked against P106 sample of 50 rows"
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
            Save rule
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui121EditMappingRule;
