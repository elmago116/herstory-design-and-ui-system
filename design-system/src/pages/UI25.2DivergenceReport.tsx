"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui252DivergenceReport() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <span className="text-micro font-micro text-subtext-color uppercase">
                HERSTORY · SUPERADMIN
              </span>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Divergence report
              </h1>
              <span className="text-body font-body text-subtext-color">
                CQ-01 · Seamstresses of El Raval 1912 · run 13 Nov 2026, 10:02
              </span>
            </div>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Export report
            </Button>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-4 mobile:gap-4 mobile:grid mobile:grid-cols-2">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                UI-mediated
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                128
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                API
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                128
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Cypher
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                126
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Chat
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                121
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Channel</Table.HeaderCell>
                  <Table.HeaderCell>Result</Table.HeaderCell>
                  <Table.HeaderCell>Divergence</Table.HeaderCell>
                  <Table.HeaderCell>Class</Table.HeaderCell>
                  <Table.HeaderCell>Note</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="compact"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    UI-mediated
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    128
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">0</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    match
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    baseline
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
                    128
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">0</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    match
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    same SPARQL template
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
                    126
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">−2</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    truncation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    relationship depth capped at 2
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    NL chat
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    121
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">−7</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    summarisation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    answer omits 7 rows under 16 years
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Divergence is validity evidence, not noise"
            description="Document the mediation layer behind each difference; do not reconcile the numbers by hand."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui252DivergenceReport;
