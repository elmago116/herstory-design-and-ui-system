"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { TextField } from "@/ui/components/TextField";
import { FeatherInfo } from "@/ui/core";

function Ui013AuthenticationPolicy() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Authentication policy
            </h1>
            <span className="text-body font-body text-subtext-color">
              How accounts prove identity and how long sessions last.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <Select
              label="Identity provider"
              placeholder="Select provider"
              helpText="SSO requires a verified institutional domain."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Institutional SSO (SAML)">
                Institutional SSO (SAML)
              </Select.Item>
              <Select.Item value="Google Workspace">
                Google Workspace
              </Select.Item>
              <Select.Item value="Email and password">
                Email and password
              </Select.Item>
            </Select>
            <TextField
              label="Allowed domains"
              helpText="Comma-separated; accounts from other domains are rejected."
            >
              <TextField.Input
                placeholder="ub.edu, gencat.cat"
                value="ub.edu, gencat.cat"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-4 gap-4">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Require two-factor authentication
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Applies to superadmin and coordinator roles.
                </span>
              </div>
              <Switch
                checked={true}
                onCheckedChange={(checked: boolean) => {}}
              />
            </div>
            <Select
              label="Session timeout"
              placeholder="Select duration"
              helpText="Idle sessions are revoked after this period."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="1 hour">1 hour</Select.Item>
              <Select.Item value="8 hours">8 hours</Select.Item>
              <Select.Item value="24 hours">24 hours</Select.Item>
            </Select>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="Policy changes take effect at next sign-in"
              description="Existing sessions keep the previous timeout until they expire or are revoked in Audit logs."
            />
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Discard
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Save policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui013AuthenticationPolicy;
