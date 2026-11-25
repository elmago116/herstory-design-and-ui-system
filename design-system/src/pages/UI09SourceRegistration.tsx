"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { Progress } from "@/ui/components/Progress";
import { Select } from "@/ui/components/Select";
import { Stepper } from "@/ui/components/Stepper";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherChevronUp } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function Ui09SourceRegistration() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2 mobile:px-0 mobile:pt-0 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Source registration
          </h1>
          <p className="text-body font-body text-subtext-color">
            Register archival sources before their inclusion into the knowledge
            graph pipeline.
          </p>
          <Stepper className="w-full grow shrink-0 basis-0">
            <Stepper.SecondaryStep
              className="h-auto w-auto flex-none"
              variant="active"
              firstStep={true}
              stepNumber="1"
              label="Create a source"
            />
            <Stepper.SecondaryStep stepNumber="2" label="Enter details" />
            <Stepper.SecondaryStep
              className="h-auto w-auto flex-none"
              lastStep={true}
              stepNumber="3"
              label="Start building!"
            />
          </Stepper>
          <div className="flex w-full items-center gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-3 py-2">
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  1
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
                  Source registration
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  2
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Ingestion
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  3
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Ontology
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  4
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Mapping
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  5
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Validation
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  6
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Publish
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Badge className="whitespace-nowrap" variant="brand">
                Barcelona 1912
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 1 of 6
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 py-1">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full grow shrink-0 basis-0 items-center justify-between">
              <div className="flex flex-col items-start gap-1 pr-2 py-2">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Register new source
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Each source must be registered before its data can be
                  ingested.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Source details
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Fill in the metadata for the archival source.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <TextField
                label="Source name"
                helpText="Human-readable name for this source data"
              >
                <TextField.Input
                  placeholder="e.g. Barcelona census 1912"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <Select
                label="Type"
                placeholder="Select type"
                helpText="Format of the source data"
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="CSV">CSV</Select.Item>
                <Select.Item value="PDF">PDF</Select.Item>
                <Select.Item value="API">API</Select.Item>
                <Select.Item value="Other">Other</Select.Item>
              </Select>
              <TextField
                label="Source URL"
                helpText="Location or file path of the source"
              >
                <TextField.Input
                  placeholder="https://..."
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <Select
                label="Format"
                placeholder="Select format"
                helpText="Data format specification"
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="CSV">CSV</Select.Item>
                <Select.Item value="JSON">JSON</Select.Item>
                <Select.Item value="RDF/XML">RDF/XML</Select.Item>
                <Select.Item value="Turtle">Turtle</Select.Item>
              </Select>
              <Select
                label="Permission / Workspace"
                placeholder="Select workspace"
                helpText="Workspace scope and access level"
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
                <Select.Item value="Ateneu Obrer">Ateneu Obrer</Select.Item>
                <Select.Item value="Parish Records">Parish Records</Select.Item>
              </Select>
            </div>
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Register source
            </Button>
            <SubframeCore.Popover.Root>
              <SubframeCore.Popover.Trigger asChild={true}>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      Upload progress
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      0%
                    </span>
                  </div>
                  <Progress value={0} />
                  <span className="text-caption font-caption text-subtext-color">
                    Awaiting upload
                  </span>
                </div>
              </SubframeCore.Popover.Trigger>
              <SubframeCore.Popover.Portal>
                <SubframeCore.Popover.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg" />
                </SubframeCore.Popover.Content>
              </SubframeCore.Popover.Portal>
            </SubframeCore.Popover.Root>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Alert
            variant="success"
            icon={<FeatherCheckCircle />}
            title="Source registered"
            description="The source has been registered and is ready for upload."
          />
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Possible duplicate: census_raw.csv already exists in Barcelona 1912"
            description="A source with the same filename was already registered. Verify before proceeding."
          />
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start rounded-md border border-solid border-neutral-border bg-background-alt pb-2">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start px-6 py-6">
            <span className="w-full grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
              Monitor registered sources
            </span>
            <span className="w-full grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
              Sources already registered in this workspace.
            </span>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-6">
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Name
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Type
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Status
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Records
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Sync
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Actions
              </span>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-6">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                census_raw.csv
              </span>
              <span className="text-body font-body text-default-font">CSV</span>
              <Badge variant="success" icon={<FeatherCheck />}>
                Active
              </Badge>
              <span className="text-body font-body text-default-font">
                2,418
              </span>
              <span className="whitespace-nowrap text-body font-body text-subtext-color">
                2h ago
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronUp />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Close
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-8 py-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Source details · census_raw.csv
                </span>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Expanded
                </Badge>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    URL
                  </span>
                  <span className="text-body font-body text-default-font">
                    https://data.bcn.cat/census/1912/census_raw.csv
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Format
                  </span>
                  <span className="text-body font-body text-default-font">
                    CSV · UTF-8 · semicolon-delimited
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Workspace
                  </span>
                  <span className="text-body font-body text-default-font">
                    Barcelona 1912
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Permission
                  </span>
                  <span className="text-body font-body text-default-font">
                    Coordinator · read-write
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Registered
                  </span>
                  <span className="text-body font-body text-default-font">
                    12 Nov 2026 · 08:25
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Duplicate check
                  </span>
                  <span className="text-body font-body text-default-font">
                    No duplicate in this workspace
                  </span>
                </div>
              </div>
              <span className="text-heading-3 font-heading-3 text-default-font">
                Ingestion history
              </span>
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Run</Table.HeaderCell>
                    <Table.HeaderCell>Records</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="compact"
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Run 3 · 12 Nov 2026 10:05
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      2,418
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="success" icon={<FeatherCheck />}>
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Run 2 · 9 Nov 2026 16:40
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      2,418
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="success" icon={<FeatherCheck />}>
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Run 1 · 7 Nov 2026 09:12
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      2,401
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="neutral">Superseded</Badge>
                  </Table.Cell>
                </Table.Row>
              </Table>
              <div className="flex w-full items-center justify-end gap-2">
                <Button
                  variant="brand-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Edit source
                </Button>
                <Button
                  variant="brand-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Re-ingest
                </Button>
                <IconButton
                  className="h-auto w-auto min-w-[40px] flex-none self-stretch"
                  variant="destructive-secondary"
                  icon={<FeatherTrash />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                parish_register.pdf
              </span>
              <span className="text-body font-body text-default-font">PDF</span>
              <div className="flex flex-col items-start gap-1">
                <Badge variant="warning" icon={<FeatherClock />}>
                  Ingesting
                </Badge>
                <Progress value={45} />
              </div>
              <span className="text-body font-body text-subtext-color">—</span>
              <span className="whitespace-nowrap text-body font-body text-subtext-color">
                12m ago
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                ateneu_members.csv
              </span>
              <span className="text-body font-body text-default-font">CSV</span>
              <Badge variant="success" icon={<FeatherCheck />}>
                Active
              </Badge>
              <span className="text-body font-body text-default-font">312</span>
              <span className="whitespace-nowrap text-body font-body text-subtext-color">
                30m ago
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                press_articles_api
              </span>
              <span className="text-body font-body text-default-font">API</span>
              <Badge variant="error" icon={<FeatherX />}>
                Error
              </Badge>
              <span className="text-body font-body text-subtext-color">—</span>
              <span className="whitespace-nowrap text-body font-body text-subtext-color">
                1h ago
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                parish_baptisms.pdf
              </span>
              <span className="text-body font-body text-default-font">PDF</span>
              <Badge variant="success" icon={<FeatherCheck />}>
                Active
              </Badge>
              <span className="text-body font-body text-default-font">960</span>
              <span className="whitespace-nowrap text-body font-body text-subtext-color">
                3h ago
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui09SourceRegistration;
