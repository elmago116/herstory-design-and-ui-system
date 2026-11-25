"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";

function Ui282EntityDetail() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Graph explorer / Person
              </span>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Mercè Puig
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="neutral">Q123456</Badge>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Quality high
                </Badge>
                <Badge variant="brand">HS:person-441</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Llinatge panel
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Raise objection
              </Button>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Close
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Properties
            </span>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Property</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>Source</Table.HeaderCell>
                  <Table.HeaderCell>Quality</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Occupation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    seamstress
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Census 1912 · row 441
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">high</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Place of birth
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval, Barcelona
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
                    Date of birth
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    1894
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Ateneu Obrer rolls
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">medium</Badge>
                </Table.Cell>
              </Table.Row>
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
                  <Badge variant="error">single voice</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Provenance snapshot
            </span>
            <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Sources
                </span>
                <span className="text-body font-body text-default-font">
                  3 records
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Mapping version
                </span>
                <span className="text-body font-body text-default-font">
                  person_mapping.ttl v41
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Last reviewed
                </span>
                <span className="text-body font-body text-default-font">
                  2 Nov 2026 · Elena Gómez
                </span>
              </div>
            </div>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="A quality badge is never colour alone"
            description="Every indicator carries a text label; missing values show their absence class instead of an empty cell."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui282EntityDetail;
