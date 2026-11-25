"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@/ui/core";

function Ui202RegisterAbsenceGap() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Register absence gap
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Document why an expected property is missing, so the graph does
              not imply non-existence.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <TextField
              label="Entity"
              helpText="The person, place or organisation the gap belongs to."
            >
              <TextField.Input
                placeholder="Search an entity"
                value="Mercè Puig"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <Select
              label="Dimension"
              placeholder="Select dimension"
              helpText="Which property or relation is missing."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Occupation">Occupation</Select.Item>
              <Select.Item value="Date of birth">Date of birth</Select.Item>
              <Select.Item value="Place of residence">
                Place of residence
              </Select.Item>
              <Select.Item value="Kinship">Kinship</Select.Item>
            </Select>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Absence class"
              placeholder="Select class"
              helpText="The taxonomy distinguishes silence from missing data."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Data absent">Data absent</Select.Item>
              <Select.Item value="Not ingested">Not ingested</Select.Item>
              <Select.Item value="Hidden by policy">
                Hidden by policy
              </Select.Item>
              <Select.Item value="Uncertain">Uncertain</Select.Item>
              <Select.Item value="Archival silence">
                Archival silence
              </Select.Item>
              <Select.Item value="Ethical restriction">
                Ethical restriction
              </Select.Item>
            </Select>
            <Select
              label="Linked competency question"
              placeholder="Select a CQ"
              helpText="Why the property was expected in the first place."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="CQ-01 Seamstresses of El Raval 1912">
                CQ-01 Seamstresses of El Raval 1912
              </Select.Item>
              <Select.Item value="CQ-04 Migration routes">
                CQ-04 Migration routes
              </Select.Item>
              <Select.Item value="None">None</Select.Item>
            </Select>
            <TextArea
              label="Evidence and note"
              helpText="Cite the archive gap or policy that explains the absence."
            >
              <TextArea.Input
                placeholder="The 1912 census records occupation for women in domestic service only; the parish register does not list an occupation."
                value=""
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
              />
            </TextArea>
            <Alert
              variant="warning"
              icon={<FeatherAlertTriangle />}
              title="An undocumented gap reads as non-existence"
              description="Registering the gap adds a provenance note to the entity and links it to the absence class."
            />
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
                Register gap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui202RegisterAbsenceGap;
