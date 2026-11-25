"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui222ReclassifyObjection() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <h1 className="text-heading-3 font-heading-3 text-default-font">
          Reclassify objection
        </h1>
        <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-start gap-2">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Objection
            </span>
            <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
              OBJ-042
            </span>
          </div>
          <div className="flex w-full items-start gap-2">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Entity
            </span>
            <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
              Person: Mercè Puig
            </span>
          </div>
          <div className="flex w-full items-start gap-2">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Mapping version
            </span>
            <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
              v3
            </span>
          </div>
        </div>
        <Select
          label="Classification"
          placeholder="Select a classification"
          helpText=""
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Person">Person</Select.Item>
          <Select.Item value="Place">Place</Select.Item>
          <Select.Item value="Mapping">Mapping</Select.Item>
        </Select>
        <TextField label="Reason for change" helpText="">
          <TextField.Input
            placeholder="Explain why the classification changes"
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </TextField>
        <span className="text-caption font-caption text-subtext-color">
          Reclassification is logged in the objection trace.
        </span>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Reclassify
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui222ReclassifyObjection;
