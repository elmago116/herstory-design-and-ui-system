"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";

function Ui182CandidateComparison() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <span className="text-micro font-micro text-subtext-color uppercase">
                HERSTORY · COORDINATOR
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Wikidata resolver / Mercè Puig · born El Raval, 1894
              </span>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Candidate comparison
              </h1>
              <span className="text-body font-body text-subtext-color">
                Three Wikidata entities match the local name. Choose the correct
                one or keep the local identifier.
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherAlertTriangle />}>
              Ambiguous match
            </Badge>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border px-4 py-4">
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Candidate</Table.HeaderCell>
                    <Table.HeaderCell>Lifespan and place</Table.HeaderCell>
                    <Table.HeaderCell>Match score</Table.HeaderCell>
                    <Table.HeaderCell>Evidence</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="comfortable"
              >
                <Table.Row>
                  <Table.Cell>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Mercè Puig i Roca
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Q123456
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      1894–1971 · El Raval, Barcelona
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="success">0.82</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      Census 1912 · Ateneu Obrer rolls
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Select
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Mercè Puig
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Q987021
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      1890–1968 · Barcelona
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="warning">0.61</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      Census 1912 only
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Select
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Mercè Puig Ferrer
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Q456789
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      unknown · Barcelona
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="neutral">0.24</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      Press 1927 only · occupation mismatch
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Select
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </div>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="No match is a valid outcome"
              description="Keeping the HS local identifier preserves the person in the graph even when Wikidata has no equivalent; local identity is not a lesser record."
            />
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Keep HS identifier
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Confirm match
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui182CandidateComparison;
