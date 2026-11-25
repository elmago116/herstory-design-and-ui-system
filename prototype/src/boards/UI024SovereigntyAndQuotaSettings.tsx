"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { FeatherInfo } from "@/ui/core";

function Ui024SovereigntyAndQuotaSettings() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Sovereignty and quota settings
            </h1>
            <span className="text-body font-body text-subtext-color">
              Where the workspace data lives, what may leave it, and how much it
              may hold.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <Select
              label="Data residency"
              placeholder="Select region"
              helpText="Storage region for raw imports, derived data and logs."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="EU · Frankfurt">EU · Frankfurt</Select.Item>
              <Select.Item value="EU · Paris">EU · Paris</Select.Item>
              <Select.Item value="On premises">On premises</Select.Item>
            </Select>
            <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-4 gap-4">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Cloud-write guard
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Blocks writes to Wikidata until the EJ checklist passes.
                </span>
              </div>
              <Switch
                checked={true}
                onCheckedChange={(checked: boolean) => {}}
              />
            </div>
            <Select
              label="Storage quota"
              placeholder="Select quota"
              helpText="Current use: 12.4 GB."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="10 GB">10 GB</Select.Item>
              <Select.Item value="50 GB">50 GB</Select.Item>
              <Select.Item value="100 GB">100 GB</Select.Item>
            </Select>
            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full items-center justify-between">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Storage used
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  25%
                </span>
              </div>
              <Progress value={25} />
              <span className="text-caption font-caption text-subtext-color">
                12.4 GB of 50 GB · imports 9.1 GB · derived data 3.3 GB
              </span>
            </div>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="Quota changes affect new imports only"
              description="Existing sources stay readable; ingestion is paused when the quota is reached."
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
                Save settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui024SovereigntyAndQuotaSettings;
