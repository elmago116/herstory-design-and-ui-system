"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function Ui132ValidationReport() {
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
                SHACL validation report
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                PersonShape · batch staging-2026-11-02a · run 13 Nov 2026, 09:41
              </span>
            </div>
            <Badge variant="error" icon={<FeatherAlertTriangle />}>
              14 violations
            </Badge>
          </div>
          <Alert
            variant="error"
            icon={<FeatherX />}
            title="Validation blocks publication"
            description="14 staged triples violate cardinality or datatype constraints. Fix the shapes or the source rows; the batch stays in staging until the report is clean."
          />
          <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Triples checked
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                250
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Violations
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                14
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Warnings
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                2
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start gap-3">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Failing constraints
              </span>
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Focus node</Table.HeaderCell>
                    <Table.HeaderCell>Constraint</Table.HeaderCell>
                    <Table.HeaderCell>Severity</Table.HeaderCell>
                    <Table.HeaderCell>Suggested fix</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="compact"
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Mercè Puig
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-monospace-body font-monospace-body text-default-font">
                      birth_date maxCount 1
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="error">Violation</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      Keep the census date, drop the inferred one
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Teresa Vidal
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-monospace-body font-monospace-body text-default-font">
                      occupation datatype QID
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="error">Violation</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      Resolve the label to a Wikidata QID
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Rosa Serra
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-monospace-body font-monospace-body text-default-font">
                      family_name minCount 1
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="warning">Warning</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      Confirm the source row is complete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </div>
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Edit shape
              </Button>
              <SubframeCore.Popover.Root>
                <SubframeCore.Popover.Trigger asChild={true}>
                  <Button
                    variant="brand-primary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Re-run validation
                  </Button>
                </SubframeCore.Popover.Trigger>
                <SubframeCore.Popover.Portal>
                  <SubframeCore.Popover.Content
                    side="bottom"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <Button
                        className="min-h-[32px] w-full min-w-[145px] grow shrink-0 basis-0"
                        loading={true}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Button
                      </Button>
                    </div>
                  </SubframeCore.Popover.Content>
                </SubframeCore.Popover.Portal>
              </SubframeCore.Popover.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui132ValidationReport;
