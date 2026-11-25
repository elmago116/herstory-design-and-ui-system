"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui331UploadDocument() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Upload document
          </h1>
          <p className="text-body font-body text-subtext-color">
            Documents keep their provenance; rights must be recorded before
            ingestion.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-solid border-neutral-300 bg-neutral-50 px-6 py-8">
          <p className="text-body font-body text-subtext-color">
            Drop a PDF, CSV or image
          </p>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Choose file
          </Button>
        </div>
        <TextField
          className="h-auto w-full flex-none"
          label="Document title"
          helpText="Shown in the corpus table and citations."
        >
          <TextField.Input
            placeholder="Barcelona Census 1912"
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </TextField>
        <Select
          className="h-auto w-full flex-none"
          label="Source collection"
          placeholder="Select a repository"
          helpText=""
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Arxiu Municipal">Arxiu Municipal</Select.Item>
          <Select.Item value="Arxiu Diocesà">Arxiu Diocesà</Select.Item>
          <Select.Item value="Arxiu Històric">Arxiu Històric</Select.Item>
          <Select.Item value="ANC">ANC</Select.Item>
          <Select.Item value="Hemeroteca Digital">
            Hemeroteca Digital
          </Select.Item>
        </Select>
        <Select
          className="h-auto w-full flex-none"
          label="Rights"
          placeholder="Select the rights status"
          helpText="Rights are recorded before ingestion."
          value={undefined}
          onValueChange={(value: string) => {}}
        >
          <Select.Item value="Public domain">Public domain</Select.Item>
          <Select.Item value="In copyright — permission granted">
            In copyright — permission granted
          </Select.Item>
          <Select.Item value="Unknown — review required">
            Unknown — review required
          </Select.Item>
        </Select>
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
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui331UploadDocument;
