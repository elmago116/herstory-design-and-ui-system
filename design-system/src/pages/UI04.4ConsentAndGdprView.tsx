"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui044ConsentAndGdprView() {
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
                Consent and GDPR view
              </h1>
              <span className="text-body font-body text-subtext-color">
                Lawful basis, consent records and erasure status for every data
                class.
              </span>
            </div>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Export record
            </Button>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Consent register
            </span>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Data class</Table.HeaderCell>
                  <Table.HeaderCell>Lawful basis</Table.HeaderCell>
                  <Table.HeaderCell>Consent</Table.HeaderCell>
                  <Table.HeaderCell>Retention</Table.HeaderCell>
                  <Table.HeaderCell>Erasure</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="compact"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Archival records
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Public task
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Not required</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    10 years
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Policy-bound</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Community submissions
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Consent
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Granted · 14</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Until withdrawn
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Self-service</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Workshop recordings
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Consent
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">2 pending</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3 years
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Self-service</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    User accounts
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Contract
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Not required</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Account + 1 year
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Anonymised</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Alert
              variant="warning"
              icon={<FeatherAlertTriangle />}
              title="Two workshop consents are pending"
              description="Recordings stay quarantined and out of the graph until consent is recorded or the files are deleted."
            />
          </div>
          <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border px-4 py-4">
              <span className="text-caption font-caption text-subtext-color">
                Data minimisation
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                Pass
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Only fields used by a mapping are ingested.
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border px-4 py-4">
              <span className="text-caption font-caption text-subtext-color">
                Right to erasure
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                Pass
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Entity deletion propagates to derived triples.
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border px-4 py-4">
              <span className="text-caption font-caption text-subtext-color">
                Audit completeness
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                Pass
              </span>
              <span className="text-caption font-caption text-subtext-color">
                All edits carry actor and timestamp.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui044ConsentAndGdprView;
