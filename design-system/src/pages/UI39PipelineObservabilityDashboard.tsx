"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { AreaChart } from "@/ui/components/AreaChart";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { LineChart } from "@/ui/components/LineChart";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function Ui39PipelineObservabilityDashboard() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Pipeline observability dashboard
          </h1>
          <p className="text-body font-body text-subtext-color">
            End-to-end pipeline health.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Overview
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Current state of the knowledge pipeline.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-4 mobile:gap-4 mobile:grid mobile:grid-cols-2">
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <span className="text-caption font-caption text-subtext-color">
                Records
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                24,312
              </span>
              <span className="text-caption font-caption text-subtext-color">
                +8.1% vs September
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <span className="text-caption font-caption text-subtext-color">
                Entities
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                9,745
              </span>
              <span className="text-caption font-caption text-subtext-color">
                +3.1% vs September
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <span className="text-caption font-caption text-subtext-color">
                Statements
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                142,880
              </span>
              <span className="text-caption font-caption text-subtext-color">
                +14.9% vs September
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <span className="text-caption font-caption text-subtext-color">
                Failure rate
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                0.4%
              </span>
              <Badge variant="success">Healthy</Badge>
            </div>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex h-[405px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Ingested records
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Records ingested per month
                </span>
              </div>
              <LineChart
                className="h-[260px] w-full flex-none"
                categories={["Ingested"]}
                data={[
                  { Month: "Jun", Ingested: 8200 },
                  { Month: "Jul", Ingested: 12400 },
                  { Month: "Aug", Ingested: 16100 },
                  { Month: "Sep", Ingested: 21800 },
                  { Month: "Oct", Ingested: 24312 },
                ]}
                index={"Month"}
              />
            </div>
            <div className="flex h-[405px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Stage volumes
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Records through each stage · stacked
                </span>
              </div>
              <AreaChart
                className="h-[260px] w-full flex-none"
                stacked={true}
                categories={["Raw", "Staged", "Published"]}
                data={[
                  { Month: "Aug", Raw: 5200, Staged: 4600, Published: 3900 },
                  { Month: "Sep", Raw: 6100, Staged: 5500, Published: 4700 },
                  { Month: "Oct", Raw: 6800, Staged: 6200, Published: 5400 },
                ]}
                index={"Month"}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12 mobile:pt-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Pipeline stages
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Last run of each stage, with duration and errors.
            </span>
          </div>
          <div className="flex w-full items-start gap-2">
            <Button
              variant="brand-primary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Ingestion
            </Button>
            <Button
              variant="neutral-secondary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Transformation
            </Button>
            <Button
              variant="neutral-secondary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Mapping
            </Button>
            <Button
              variant="neutral-secondary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              SHACL validation
            </Button>
            <Button
              variant="neutral-secondary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Staging review
            </Button>
            <Button
              variant="neutral-secondary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Publication
            </Button>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-1 mobile:gap-4">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell sortable={true} sort="ascending">
                    Stage
                  </Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Duration</Table.HeaderCell>
                  <Table.HeaderCell>Records</Table.HeaderCell>
                  <Table.HeaderCell>Errors</Table.HeaderCell>
                  <Table.HeaderCell>Alerts</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Ingestion
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Done
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    4m12s
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    24,312
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Transformation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Done
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    6m48s
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    24,312
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Mapping
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    In review
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    8m02s
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    24,112
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    14
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    14
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    SHACL validation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Done
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    1m15s
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    24,112
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Staging review
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand" icon={<FeatherClock />}>
                    Review
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    1d
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    250
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    12
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Publication
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Done
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    2m50s
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    142,880
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    0
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12 mobile:pt-8">
          <Alert
            variant="success"
            icon={<FeatherCheckCircle />}
            title="No critical alerts"
            description="3 warnings in 24h — no blocking issues across stages."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui39PipelineObservabilityDashboard;
