"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { Trace } from "@/ui/components/Trace";
import { FeatherFileText } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherShield } from "@subframe/core";

function Ui04GovernancePanel() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Governance panel
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Define who can author, correct and publish mappings — and under what
            authority.
          </span>
          <div className="flex w-full flex-wrap items-start gap-3 pt-2">
            <Button
              variant="brand-primary"
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              New policy
            </Button>
            <Button
              variant="neutral-tertiary"
              icon={<FeatherFileText />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Export decisions
            </Button>
          </div>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherShield />}
          title="Accountable publication"
          description="Repeatable governance checkpoints separate automated mapping authoring from accountable public dissemination. Every correction and override is recorded in the decision log."
        />
        <div className="flex w-full flex-col items-start gap-8 pt-8">
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Mapping governance policies
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Policies that gate authoring, correction and dissemination of
                graph content.
              </span>
            </div>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Policy</Table.HeaderCell>
                  <Table.HeaderCell>Scope</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Status</Table.HeaderCell>
                  <Table.HeaderCell>Oversight</Table.HeaderCell>
                  <Table.HeaderCell>Last review</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Community correction chain
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Objections → coordinator response → restitution
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    All workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Active</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Coordinator + superadmin sign-off
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-28
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      EJ checklist gate
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Blocks publication when representation checks fail
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Public workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Active</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Checklist operator (EJ-4)
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-25
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      LLM hypothesis gate
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Triples from LLM suggestions require human validation
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    All workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Active</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Coordinator approval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-22
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Vocabulary escalation
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Contested categories route to community review
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Public workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">In review</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Community review panel
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-10-30
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Legacy record freeze
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Blocks edits to contested 1920s suffrage records
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Suffrage Correspondence
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Escalated</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Superadmin resolution
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2026-11-01
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Recent governance decisions
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Mappings, overrides and corrections with audit trail.
              </span>
            </div>
            <Trace title="Decision log" summary="14 events this week">
              <Trace.Step
                title="Override accepted: Suffrage Correspondence · person S-214 → Q55983715"
                duration="2026-11-01 09:14"
                detail="Coordinator Teresa Vidal. Rationale: archival evidence (letter dated 1926). Override respected; mapping.version 41."
              />
              <Trace.Step
                title="Community objection resolved · Women in Catalan Press Q4481"
                duration="2026-10-31 16:02"
                detail="Objector: Maria Claramunt. Evidence artefact: press clipping, La Veu de Catalunya 1927. Outcome: category relabelled, mapping re-run."
              />
              <Trace.Step
                title="EJ checklist passed · Barcelona 1912 batch 7"
                duration="2026-10-31 11:40"
                detail="Gender representation 47% · intersectionality coverage ok · source diversity ok. Publication unblocked."
              />
              <Trace.Step
                title="Mapping regression reverted · person_mapping.ttl v38"
                duration="2026-10-30 22:05"
                detail="Coupling error detected (P-projection unevenness) by automated checkpoint. Reverted to v37, review assigned."
                status="failed"
              />
              <Trace.Step
                title="Vocabulary flag: 'criada' → community review"
                duration="2026-10-29 14:30"
                detail="Flagged by coordinator per contested interpretive frame policy. Escalation recorded."
                last={true}
              />
            </Trace>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Who may correct records
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Authority matrix per US-PAR-4.
              </span>
            </div>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                  <Table.HeaderCell>Coordinator</Table.HeaderCell>
                  <Table.HeaderCell>Superadmin</Table.HeaderCell>
                  <Table.HeaderCell>Community</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Propose mapping
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">No</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Approve mapping
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">No</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Override mapping
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">No</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Object to a representation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Publish to public graph
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">No</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Yes</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">No</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui04GovernancePanel;
