"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherX } from "@/ui/core";

function Ui25MultichannelComparisonTool() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Multichannel comparison tool
          </h1>
          <p className="text-body font-body text-subtext-color">
            Document divergence between UI, API, SPARQL, Cypher and chat
          </p>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title="Infrastructure variance is validity evidence — divergence is documented, not hidden"
          description=""
        />
        <div className="flex w-full items-end gap-4">
          <Select
            className="h-auto grow shrink-0 basis-0"
            label="Saved query"
            placeholder="Choose query"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="S-7 Seamstresses of El Raval">
              S-7 Seamstresses of El Raval
            </Select.Item>
          </Select>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Compare
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Divergence report
          </Button>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Channel</Table.HeaderCell>
                <Table.HeaderCell>Results</Table.HeaderCell>
                <Table.HeaderCell>Duration</Table.HeaderCell>
                <Table.HeaderCell>Divergence</Table.HeaderCell>
                <Table.HeaderCell>Note</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  UI
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  241
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  0.8s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Match
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Faceted (2 facets applied)
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  SPARQL
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  241
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1.2s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Match
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Direct endpoint
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Cypher
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  238
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1.5s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                  Truncated
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  3 triples missing
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  API
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  231
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2.1s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                  Summarised
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Mediation truncation
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Xat
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  200+
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">—</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error" icon={<FeatherX />}>
                  Mismatch
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Conversational summary
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-neutral-50 px-3 py-2">
          <span className="text-monospace-body font-monospace-body text-default-font">
            DIVERGENCE REPORT — S-7
          </span>
          <span className="text-monospace-body font-monospace-body text-default-font">
            UI: 241 results (faceted, 2 facets applied)
          </span>
          <span className="text-monospace-body font-monospace-body text-default-font">
            SPARQL: 241 results (direct)
          </span>
          <span className="text-monospace-body font-monospace-body text-default-font">
            Cypher: 238 results (3 triples missing)
          </span>
          <span className="text-monospace-body font-monospace-body text-default-font">
            API: 231 results (mediation truncation)
          </span>
          <span className="text-monospace-body font-monospace-body text-default-font">
            Xat: &#39;more than 200&#39; (conversational summary)
          </span>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="Xat summaries may truncate — see REQ-3.8.2"
          description=""
        />
      </div>
    </div>
  );
}

export default Ui25MultichannelComparisonTool;
