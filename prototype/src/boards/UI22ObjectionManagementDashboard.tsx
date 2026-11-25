"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { Trace } from "@/ui/components/Trace";
import { FeatherCheck } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherMessageCircle } from "@/ui/core";
import { FeatherSend } from "@/ui/core";
import { FeatherX } from "@/ui/core";

function Ui22ObjectionManagementDashboard() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Objection management dashboard
          </h1>
          <p className="text-body font-body text-subtext-color">
            Community corrections with full traceability
          </p>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title="Every objection links entity, mapping version, objector, response and evidence"
          description=""
        />
        <div className="flex w-full items-start gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
            <span className="text-body-bold font-body-bold text-default-font">
              All objections
            </span>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell sortable={true}>Objection</Table.HeaderCell>
                  <Table.HeaderCell>Entity</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Objector</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Mapping version</Table.HeaderCell>
                  <Table.HeaderCell>Evidence</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    OBJ-042
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Person: Mercè Puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    L. Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Open
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    v3
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    View document
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="brand-primary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Respond
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    OBJ-043
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Place: El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    M. Casals
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Open
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    v2
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    View document
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="brand-primary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Respond
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    OBJ-044
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Person: Teresa Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    J. Roca
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral" icon={<FeatherMessageCircle />}>
                    Awaiting response
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    v3
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    View document
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Respond
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    OBJ-045
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Mapping: census→Person
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    A. Miro
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Resolved
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    v1
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    View document
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    —
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    OBJ-046
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Person: Rosa Serra
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    L. Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral" icon={<FeatherX />}>
                    Dismissed
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    v4
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    View document
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    —
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Respond to objection
              </span>
              <span className="text-caption font-caption text-subtext-color">
                #OBJ-042
              </span>
            </div>
            <TextField label="Your reply" helpText="Draft a formal response">
              <TextField.Input
                placeholder="Type your response to OBJ-042…"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <div className="flex w-full flex-wrap items-center gap-3">
              <Button
                variant="brand-primary"
                icon={<FeatherSend />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Send response
              </Button>
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Reclassify
              </Button>
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Rejection rationale
              </Button>
            </div>
            <Trace title="Response history" summary="3 steps" state="expanded">
              <Trace.Step
                title="Objection opened by L. Vidal"
                duration="2 days ago"
                detail="Initial filing against v3 mapping"
                status="done"
              />
              <Trace.Step
                title="Evidence reviewed by M. Casals"
                duration="1 day ago"
                detail="Documentation attached to objection"
                status="done"
              />
              <Trace.Step
                title="Awaiting coordinator response"
                duration="Today"
                detail="Pending your reply"
                status="running"
                last={true}
              />
            </Trace>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui22ObjectionManagementDashboard;
