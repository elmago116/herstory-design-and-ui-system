"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherInfo } from "@/ui/core";

function Ui284LlinatgePanel() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[720px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full items-start justify-between gap-6">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-heading-3 font-heading-3 text-default-font">
                Llinatge panel
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                Mercè Puig · kinship and household relations with their sources.
              </span>
            </div>
            <Badge variant="neutral">4 relations</Badge>
          </div>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Relation</Table.HeaderCell>
                <Table.HeaderCell>Person</Table.HeaderCell>
                <Table.HeaderCell>Source</Table.HeaderCell>
                <Table.HeaderCell>Confidence</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Spouse
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Joan Ferrer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Parish register 1914
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">single voice</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Mother
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Antònia Roca
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Census 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">high</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Daughter
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Josepa Puig
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Ateneu Obrer rolls
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">high</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Sister
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Maria Puig
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Census 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">medium</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Kinship is asserted, not inferred"
            description="Marriage or descent is shown only when a source states it; household co-residence is a separate relation."
          />
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Open graph
            </Button>
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Add relation
            </Button>
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui284LlinatgePanel;
