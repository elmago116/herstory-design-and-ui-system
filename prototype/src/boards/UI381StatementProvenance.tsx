"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherChevronRight } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";

function Ui381StatementProvenance() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[720px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Statement provenance
          </h1>
          <p className="text-body font-body text-subtext-color">
            Mercè Puig · occupation · seamstress. Two sources describe this
            differently; both are kept.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3 overflow-x-auto">
          <span className="text-caption font-caption text-subtext-color">
            Statement
          </span>
          <span className="text-monospace-body font-monospace-body text-default-font">
            wd:Q977847 wdt:P106 wd:Q327529
          </span>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Voice</Table.HeaderCell>
                <Table.HeaderCell>Source</Table.HeaderCell>
                <Table.HeaderCell>Literal value</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Voice 1
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Padró municipal 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  costurera
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">two voices</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Voice 2
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Ateneu Obrer rolls
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">two voices</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <Alert
          variant="neutral"
          icon={<FeatherInfo />}
          title="Polyvocality preserved"
          description="Neither voice is ranked above the other. Publication carries both literal values with their provenance attached, so a downstream query can choose one and still show why the other exists."
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
            icon={<FeatherChevronRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open publication record
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui381StatementProvenance;
