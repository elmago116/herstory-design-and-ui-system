"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherX } from "@subframe/core";

function Ui19ArtifactExporter() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Artifact exporter
          </h1>
          <p className="text-body font-body text-subtext-color">
            Export the graph in interoperable formats
          </p>
          <div className="flex w-full items-center gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-3 py-2">
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Source registration
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Ingestion
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Ontology
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Mapping
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Validation
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  6
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
                  Publish
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Badge className="whitespace-nowrap" variant="brand">
                bundle v3
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 6 of 6
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                New export
              </span>
            </div>
            <Select
              label="Format"
              placeholder="Select format"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="JSON-LD">JSON-LD</Select.Item>
              <Select.Item value="RDF/XML">RDF/XML</Select.Item>
              <Select.Item value="Turtle">Turtle</Select.Item>
              <Select.Item value="CSV">CSV</Select.Item>
            </Select>
            <Select
              label="Scope"
              placeholder="Select scope"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="All workspaces">All workspaces</Select.Item>
              <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
              <Select.Item value="Suffrage Correspondence">
                Suffrage Correspondence
              </Select.Item>
            </Select>
            <Select
              label="Content"
              placeholder="Select content"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Statements">Statements</Select.Item>
              <Select.Item value="Entities">Entities</Select.Item>
              <Select.Item value="Provenance">Provenance</Select.Item>
            </Select>
            <div className="flex w-full items-center justify-between">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Export progress
              </span>
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                Idle
              </span>
            </div>
            <Progress value={0} />
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Export
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Recent exports
            </span>
            <span className="text-caption font-caption text-subtext-color">
              5 exports
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Artifact</Table.HeaderCell>
                  <Table.HeaderCell>Format</Table.HeaderCell>
                  <Table.HeaderCell sortable={true} sort="ascending">
                    Records
                  </Table.HeaderCell>
                  <Table.HeaderCell>Size</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font">
                    barcelona1912-20261102.jsonld
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    JSON-LD
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    1,284
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    47 KB
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Ready
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Download
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font">
                    suffrage_20261001.ttl
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Turtle
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    312
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    12 KB
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Processing
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Download
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex grow shrink-0 basis-0 items-center justify-between">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      Progress
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      45%
                    </span>
                  </div>
                  <Progress value={45} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font">
                    bcn1912_october.rdf
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    RDF/XML
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    890
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    38 KB
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error" icon={<FeatherX />}>
                    Error
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Download
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font">
                    barcelona1912_full.csv
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    CSV
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    5,678
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    210 KB
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Ready
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Download
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font">
                    entities_20260915.jsonld
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    JSON-LD
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2,047
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    78 KB
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Ready
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Download
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="FAIR export"
            description="Provenance preserved, both voices kept in disputed statements."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui19ArtifactExporter;
