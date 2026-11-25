"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Slider } from "@/ui/components/Slider";
import { Switch } from "@/ui/components/Switch";
import { Table } from "@/ui/components/Table";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherEye } from "@subframe/core";

function Ui40PersonalisationAdaptationSettings() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <span className="text-micro font-micro text-subtext-color">
            HERSTORY · PREFERENCES
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Personalisation &amp; adaptation settings
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Adapt the system to how you work
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <span className="text-body-bold font-body-bold text-default-font">
              Preferences
            </span>
            <div className="flex w-full flex-col items-start gap-5">
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-body font-body text-default-font">
                    Language
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Choose your interface language
                  </span>
                </div>
                <Select
                  label=""
                  placeholder="Select language"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="Català">Català</Select.Item>
                  <Select.Item value="Español">Español</Select.Item>
                  <Select.Item value="English">English</Select.Item>
                </Select>
              </div>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-body font-body text-default-font">
                    Theme
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Set light, dark or system default
                  </span>
                </div>
                <Select
                  label=""
                  placeholder="Select theme"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="Light">Light</Select.Item>
                  <Select.Item value="Dark">Dark</Select.Item>
                  <Select.Item value="System">System</Select.Item>
                </Select>
              </div>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-body font-body text-default-font">
                    Default query depth
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    How many hops from the root entity
                  </span>
                </div>
                <div className="flex w-48 flex-none items-center">
                  <Slider
                    value={[]}
                    onValueChange={(value: number[]) => {}}
                    onValueCommit={(value: number[]) => {}}
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-body font-body text-default-font">
                    Results per page
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Number of results shown per page
                  </span>
                </div>
                <Select
                  label=""
                  placeholder="Select count"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="20">20</Select.Item>
                  <Select.Item value="50">50</Select.Item>
                  <Select.Item value="100">100</Select.Item>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <span className="text-body-bold font-body-bold text-default-font">
              Adaptation
            </span>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-body font-body text-default-font">
                  Remember my recent searches
                </span>
                <Switch
                  checked={true}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="text-body font-body text-default-font">
                  Personalise suggestions from my history
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="text-body font-body text-default-font">
                  Show data-quality flags
                </span>
                <Switch
                  checked={true}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="text-body font-body text-default-font">
                  Email digest
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Search history
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Clear history
              </Button>
            </div>
            <Table>
              <Table.HeaderRow>
                <Table.HeaderCell sortable={true}>Query</Table.HeaderCell>
                <Table.HeaderCell sortable={true}>Date</Table.HeaderCell>
                <Table.HeaderCell>Results</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.HeaderRow>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    women labour Barcelona 1912
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-28
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    47
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    census el raval seamstresses
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-27
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    23
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    merce puig 1912 address
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-26
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save preferences
            </Button>
            <Alert
              variant="success"
              icon={<FeatherCheckCircle />}
              title="Preferences saved"
              description="Your personalisation settings have been updated."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui40PersonalisationAdaptationSettings;
