"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { BarChart } from "@/ui/components/BarChart";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function Ui26BiasEvaluationDashboard() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Bias evaluation dashboard
          </h1>
          <p className="text-body font-body text-subtext-color">
            Bias across the AI lifecycle — collection to monitoring
          </p>
        </div>
        <div className="w-full items-start gap-6 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Collection
              </span>
              <span className="text-heading-2 font-heading-2 text-brand-700">
                0.10
              </span>
              <span className="text-caption font-caption text-subtext-color">
                bias index · lower is better
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherClock />}>
              review
            </Badge>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Annotation
              </span>
              <span className="text-heading-2 font-heading-2 text-success-600">
                0.02
              </span>
              <span className="text-caption font-caption text-subtext-color">
                bias index · lower is better
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Model design
              </span>
              <span className="text-heading-2 font-heading-2 text-error-600">
                0.40
              </span>
              <span className="text-caption font-caption text-subtext-color">
                bias index · lower is better
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherClock />}>
              review
            </Badge>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Deployment
              </span>
              <span className="text-heading-2 font-heading-2 text-brand-700">
                0.08
              </span>
              <span className="text-caption font-caption text-subtext-color">
                bias index · lower is better
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Stage comparison
          </h2>
          <span className="text-caption font-caption text-subtext-color">
            Score vs baseline by pipeline stage
          </span>
          <BarChart
            className="h-[280px] w-full flex-none"
            categories={["Score", "Baseline"]}
            data={[
              { Stage: "Collection", Score: 0.1, Baseline: 0.3 },
              { Stage: "Annotation", Score: 0.02, Baseline: 0.25 },
              { Stage: "Model design", Score: 0.4, Baseline: 0.3 },
              { Stage: "Deployment", Score: 0.08, Baseline: 0.3 },
              { Stage: "Monitoring", Score: 0.15, Baseline: 0.3 },
            ]}
            index={"Stage"}
          />
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Bias findings
          </h2>
          <span className="text-caption font-caption text-subtext-color">
            Detailed evaluation results per pipeline stage
          </span>
          <Select
            label="Stage filter"
            placeholder="Filter by stage…"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="All stages">All stages</Select.Item>
            <Select.Item value="Collection">Collection</Select.Item>
            <Select.Item value="Annotation">Annotation</Select.Item>
            <Select.Item value="Model design">Model design</Select.Item>
            <Select.Item value="Deployment">Deployment</Select.Item>
          </Select>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Stage</Table.HeaderCell>
                  <Table.HeaderCell sortable={true} sort="ascending">
                    Metric
                  </Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>Severity</Table.HeaderCell>
                  <Table.HeaderCell>Mitigation</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Collection
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Gender balance
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    0.10
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Moderate
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Stratify sampling
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral" icon={<FeatherClock />}>
                    Open
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Annotation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Label uniformity
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    0.02
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Low
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Auto-verify
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand" icon={<FeatherCheck />}>
                    Resolved
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Model design
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Representational harm
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    0.40
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error" icon={<FeatherX />}>
                    Critical
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Rebalance training data
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    In progress
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Deployment
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Allocation disparity
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    0.08
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Low
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Threshold tuning
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand" icon={<FeatherCheck />}>
                    Resolved
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Monitoring
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Drift detection
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    0.15
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Moderate
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Schedule retraining
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral" icon={<FeatherClock />}>
                    Open
                  </Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title="Fairness metrics, counterfactual and sensitivity analyses available"
          description=""
        />
      </div>
    </div>
  );
}

export default Ui26BiasEvaluationDashboard;
