"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui114OntologyImportAndExport() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Import or export ontology
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Move the ontology in or out of the workspace. Imports are
              validated before they replace anything.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Scope"
              placeholder="Select scope"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="All classes and properties">
                All classes and properties
              </Select.Item>
              <Select.Item value="Selected class only">
                Selected class only
              </Select.Item>
              <Select.Item value="Mapping rules only">
                Mapping rules only
              </Select.Item>
            </Select>
            <Select
              label="Format"
              placeholder="Select format"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Turtle">Turtle</Select.Item>
              <Select.Item value="RDF/XML">RDF/XML</Select.Item>
              <Select.Item value="JSON-LD">JSON-LD</Select.Item>
            </Select>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-dashed border-control-border bg-neutral-50 px-6 py-8">
              <span className="text-body-bold font-body-bold text-default-font">
                Drop an ontology file here
              </span>
              <span className="text-caption font-caption text-subtext-color">
                TTL, RDF/XML or JSON-LD · max 25 MB · validated before applying
              </span>
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Choose file
              </Button>
            </div>
            <Alert
              variant="warning"
              icon={<FeatherAlertTriangle />}
              title="An import replaces the active class set"
              description="Classes absent from the file are marked inactive, not deleted; existing mappings keep their version history."
            />
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
              Start import
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui114OntologyImportAndExport;
