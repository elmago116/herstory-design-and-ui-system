"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import { FeatherSend } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui29VisualQueryBuilder() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Visual query builder
          </h1>
          <p className="text-body font-body text-subtext-color">
            Filter by provenance, period and class without writing SPARQL.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <div className="flex w-full items-center gap-4">
              <Combobox
                className="h-auto grow shrink-0 basis-0"
                label="Class"
                placeholder="Person (Q5)"
                value=""
                helpText="Select the entity class to query"
              />
              <Button
                variant="neutral-tertiary"
                icon={<FeatherPlus />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Add condition
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full items-center gap-3">
                <Select
                  className="h-auto grow shrink-0 basis-0"
                  label="Property"
                  placeholder="occupation"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="occupation">occupation</Select.Item>
                  <Select.Item value="born in">born in</Select.Item>
                  <Select.Item value="residence">residence</Select.Item>
                </Select>
                <Select
                  className="h-auto grow shrink-0 basis-0"
                  label="Operator"
                  placeholder="equals"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="equals">equals</Select.Item>
                  <Select.Item value="contains">contains</Select.Item>
                  <Select.Item value="starts with">starts with</Select.Item>
                </Select>
                <TextField
                  className="h-auto grow shrink-0 basis-0"
                  label=""
                  helpText=""
                >
                  <TextField.Input
                    placeholder="Value"
                    value="seamstress"
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
              <div className="flex w-full items-center gap-3">
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Combine with:
                </span>
                <Button
                  variant="brand-primary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  AND
                </Button>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  OR
                </Button>
              </div>
            </div>
            <div className="flex w-full items-center gap-3">
              <Select
                className="h-auto grow shrink-0 basis-0"
                label="Property"
                placeholder="born in"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="born in">born in</Select.Item>
                <Select.Item value="occupation">occupation</Select.Item>
                <Select.Item value="residence">residence</Select.Item>
              </Select>
              <Select
                className="h-auto grow shrink-0 basis-0"
                label="Operator"
                placeholder="contains"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="contains">contains</Select.Item>
                <Select.Item value="equals">equals</Select.Item>
                <Select.Item value="starts with">starts with</Select.Item>
              </Select>
              <TextField
                className="h-auto grow shrink-0 basis-0"
                label=""
                helpText=""
              >
                <TextField.Input
                  placeholder="Value"
                  value="El Raval"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
            </div>
            <div className="flex w-full items-center justify-end">
              <Button
                variant="brand-primary"
                icon={<FeatherSend />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Run query
              </Button>
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Button
                    variant="neutral-secondary"
                    iconRight={<FeatherChevronDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    More
                  </Button>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem>
                        Save query
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem>
                        Open in SPARQL editor
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Results
              </span>
              <span className="text-caption font-caption text-subtext-color">
                5 people matching your query
              </span>
            </div>
            <div className="flex w-full flex-col items-start overflow-x-auto">
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell sortable={true} sort="ascending">
                      People
                    </Table.HeaderCell>
                    <Table.HeaderCell>Occupation</Table.HeaderCell>
                    <Table.HeaderCell>District</Table.HeaderCell>
                    <Table.HeaderCell>Source</Table.HeaderCell>
                    <Table.HeaderCell>Confidence</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="comfortable"
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Mercè Puig
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      El Raval
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-subtext-color">
                      1912 census
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="success" icon={<FeatherCheck />}>
                      High
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Teresa Clos
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      El Raval
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-subtext-color">
                      Parish register
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="success" icon={<FeatherCheck />}>
                      High
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Rosa Rubí
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      El Raval
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-subtext-color">
                      Membership roll
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="warning" icon={<FeatherClock />}>
                      Medium
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Àngela Sabaté
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      El Raval
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-subtext-color">
                      1912 census
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="success" icon={<FeatherCheck />}>
                      High
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Clara Duran
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      El Raval
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-subtext-color">
                      Press archive
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="warning" icon={<FeatherClock />}>
                      Medium
                    </Badge>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </div>
          </div>
          <span className="text-caption font-caption text-subtext-color">
            Generated SPARQL is shown for transparency — you never write it.
          </span>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Filters pivot across provenance, period and class"
            description="Adjust any condition to refine your query without touching SPARQL syntax."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui29VisualQueryBuilder;
