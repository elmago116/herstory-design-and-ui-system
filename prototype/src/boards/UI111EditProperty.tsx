"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@/ui/core";

function Ui111EditProperty() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Edit property
          </h1>
          <p className="text-body font-body text-subtext-color">
            Opened from a row&#39;s Edit action. Example: given_name · Class
            Person (Q5). Each row opens this dialog with its own property.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            label="Label"
            helpText="Human-readable label shown in the editor."
          >
            <TextField.Input
              placeholder="given_name"
              value="given_name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField
            label="IRI"
            helpText="Ontology identifier this property maps to."
          >
            <TextField.Input
              placeholder="https://schema.org/givenName"
              value="https://schema.org/givenName"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Datatype"
            placeholder="Choose a datatype"
            helpText="xsd:string in the current mapping."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="string">string</Select.Item>
            <Select.Item value="date">date</Select.Item>
            <Select.Item value="URI">URI</Select.Item>
            <Select.Item value="decimal">decimal</Select.Item>
          </Select>
          <Select
            label="Cardinality"
            placeholder="Choose a cardinality"
            helpText="1..* in the current mapping."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="1..1">1..1</Select.Item>
            <Select.Item value="0..1">0..1</Select.Item>
            <Select.Item value="0..*">0..*</Select.Item>
          </Select>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="Used by 3 mapping rules and 2 SHACL shapes"
          description="Changing the datatype or IRI can break them. Every save is versioned and written to the audit log."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save property
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui111EditProperty;
