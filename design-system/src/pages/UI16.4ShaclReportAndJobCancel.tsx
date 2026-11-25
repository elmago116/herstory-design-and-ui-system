"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Table } from "@/ui/components/Table";
import { FeatherClock } from "@subframe/core";

function Ui164ShaclReportAndJobCancel() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[720px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full items-start justify-between gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-micro font-micro text-subtext-color uppercase">
                HERSTORY · COORDINATOR
              </span>
              <h1 className="text-heading-3 font-heading-3 text-default-font">
                SHACL report and job control
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                Batch staging-2026-11-02a · job #4412 · running 18 of 250
                triples.
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherClock />}>
              Job running
            </Badge>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Job progress
              </span>
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                18%
              </span>
            </div>
            <Progress value={18} />
            <span className="text-caption font-caption text-subtext-color">
              18 of 250 triples · validation runs after each block of 25
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Shape</Table.HeaderCell>
                  <Table.HeaderCell>Focus node</Table.HeaderCell>
                  <Table.HeaderCell>Result</Table.HeaderCell>
                  <Table.HeaderCell>Severity</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="compact"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    PersonShape
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Mercè Puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    birth_date maxCount 1
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Violation</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    OccupationShape
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Teresa Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    occupation datatype QID
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Warning</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    PersonShape
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Rosa Serra
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    family_name minCount 1
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Warning</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
            <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border bg-background-alt px-4 py-4 gap-4">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Cancel running job
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Stops the batch after the current triple. No staged rows are
                  published.
                </span>
              </div>
              <Button
                variant="destructive-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Cancel job
              </Button>
            </div>
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Export report
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui164ShaclReportAndJobCancel;
