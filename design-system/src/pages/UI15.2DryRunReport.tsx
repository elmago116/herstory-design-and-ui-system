"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherSave } from "@subframe/core";
import { FeatherX } from "@subframe/core";

function Ui152DryRunReport() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[720px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Dry run report
          </h1>
          <p className="text-body font-body text-subtext-color">
            Nothing was written. The transformer was executed against
            Barcelona_1912 and its output discarded after validation.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <span className="text-caption font-caption text-subtext-color">
            1,284 rows · 1,271 valid · 13 rejected · 4 warnings
          </span>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Row</Table.HeaderCell>
                  <Table.HeaderCell>Field</Table.HeaderCell>
                  <Table.HeaderCell>Finding</Table.HeaderCell>
                  <Table.HeaderCell>Severity</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    214
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    birth_date
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Unparseable date: 12 juñ 1887
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error" icon={<FeatherX />}>
                    Error
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    508
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    occupation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Term &#39;modista&#39; maps to two QIDs
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    Warning
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    902
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    place_of_birth
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval resolves to Q1492 (Barcelona)
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    Warning
                  </Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <Alert
          variant="neutral"
          icon={<FeatherInfo />}
          title="Rejected rows are not dropped silently"
          description="Each rejection is logged with its source page and line, so a coordinator can correct the source mapping before the run is repeated."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherSave />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Export report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui152DryRunReport;
