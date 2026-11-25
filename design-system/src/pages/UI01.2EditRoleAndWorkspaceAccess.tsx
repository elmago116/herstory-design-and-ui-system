"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui012EditRoleAndWorkspaceAccess() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[560px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full flex-col items-start gap-1">
            <h1 className="text-heading-3 font-heading-3 text-default-font">
              Edit role and workspace access
            </h1>
            <span className="text-caption font-caption text-subtext-color">
              Teresa Vidal · t.vidal@ub.edu · last active yesterday
            </span>
          </div>
          <Select
            label="Role"
            placeholder="Select role"
            helpText="Roles set the maximum authority across the platform."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Superadmin">Superadmin</Select.Item>
            <Select.Item value="Coordinator">Coordinator</Select.Item>
            <Select.Item value="Reviewer">Reviewer</Select.Item>
            <Select.Item value="Inquirer">Inquirer</Select.Item>
          </Select>
          <Select
            label="Workspace access"
            placeholder="Select scope"
            helpText="Which workspaces this account can open."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="All workspaces">All workspaces</Select.Item>
            <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
            <Select.Item value="Women in Catalan Press">
              Women in Catalan Press
            </Select.Item>
            <Select.Item value="Suffrage Correspondence">
              Suffrage Correspondence
            </Select.Item>
          </Select>
          <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-4 gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Can publish mappings
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Allows approval and publication without a second reviewer.
              </span>
            </div>
            <Switch
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            />
          </div>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Role changes are audited"
            description="The change is written to the audit log and the account is notified by email."
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
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui012EditRoleAndWorkspaceAccess;
