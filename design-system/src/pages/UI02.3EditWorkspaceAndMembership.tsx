"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui023EditWorkspaceAndMembership() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[640px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Edit workspace and membership
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Barcelona 1912 · 6 members · 3 data sources enabled
            </span>
          </div>
          <TextField label="Workspace name" helpText="">
            <TextField.Input
              placeholder="Barcelona 1912"
              value="Barcelona 1912"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            label="Coordinator"
            placeholder="Select a coordinator"
            helpText="Owns membership and publication rights."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Teresa Vidal">Teresa Vidal</Select.Item>
            <Select.Item value="Rosa Serra">Rosa Serra</Select.Item>
            <Select.Item value="Elena Gómez">Elena Gómez</Select.Item>
          </Select>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Members
            </span>
            <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-3">
              <span className="text-body font-body text-default-font">
                Mercè Puig
              </span>
              <Badge variant="brand">Coordinator</Badge>
            </div>
            <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-3">
              <span className="text-body font-body text-default-font">
                Laia Font
              </span>
              <Badge variant="neutral">Reviewer</Badge>
            </div>
            <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-3">
              <span className="text-body font-body text-default-font">
                Núria Bosch
              </span>
              <Badge variant="neutral">Inquirer</Badge>
            </div>
          </div>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Removing a member revokes their sessions"
            description="Their authored mappings stay attributed to them and remain in the audit trail."
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
              Save workspace
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui023EditWorkspaceAndMembership;
