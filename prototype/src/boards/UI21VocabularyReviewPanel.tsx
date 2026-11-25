"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Table } from "@/ui/components/Table";
import { Trace } from "@/ui/components/Trace";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";

function Ui21VocabularyReviewPanel() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <span className="text-body font-body text-default-font"> </span>
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-body font-body text-default-font"> </span>
          <span className="text-body font-body text-default-font"> </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Vocabulary review panel
          </h1>
          <span className="text-body font-body text-default-font"> </span>
          <span className="text-body font-body text-subtext-color">
            Flag, review and resolve contested categories
          </span>
          <span className="text-body font-body text-default-font"> </span>
        </div>
        <span className="text-body font-body text-default-font"> </span>
        <div className="flex w-full flex-col items-start gap-8 pb-12 mobile:pb-8">
          <span className="text-body font-body text-default-font"> </span>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="2 categories impose contested interpretive frames"
            description="Community review required before these terms can be published to the knowledge graph."
          />
          <span className="text-body font-body text-default-font"> </span>
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-body font-body text-default-font"> </span>
            <div className="flex max-w-[420px] grow shrink-0 basis-0 flex-col items-start gap-1">
              <span className="text-body font-body text-default-font"> </span>
              <span className="text-caption font-caption text-subtext-color">
                Filter flagged terms
              </span>
              <span className="text-body font-body text-default-font"> </span>
              <Combobox
                label=""
                placeholder="Filter by term, workspace or flag reason…"
                value=""
                helpText=""
              />
              <span className="text-body font-body text-default-font"> </span>
            </div>
            <span className="text-body font-body text-default-font"> </span>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Escalate
            </Button>
            <Button
              variant="brand-primary"
              size="small"
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Flag new term
            </Button>
            <span className="text-body font-body text-default-font"> </span>
          </div>
          <span className="text-body font-body text-default-font"> </span>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <span className="text-body font-body text-default-font"> </span>
            <span className="text-body-bold font-body-bold text-default-font">
              Flagged categories
            </span>
            <span className="text-body font-body text-default-font"> </span>
            <Table
              header={
                <Table.HeaderRow>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Term</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Workspace</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Flag reason</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Severity</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Escalation</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                  <span className="text-body font-body text-default-font">
                    {" "}
                  </span>
                </Table.HeaderRow>
              }
            >
              <span className="text-body font-body text-default-font"> </span>
              <Table.Row>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    criada
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Domestic service
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Loaded term carries class hierarchy
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="error">High</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="neutral">Open</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-caption font-caption text-subtext-color">
                    —
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
              </Table.Row>
              <span className="text-body font-body text-default-font"> </span>
              <Table.Row>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    costurera
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Textile workers
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Occupational label vs broad category
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="warning">Medium</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="brand">In review</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="brand">Escalated</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
              </Table.Row>
              <span className="text-body font-body text-default-font"> </span>
              <Table.Row>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    prostituta
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Police records
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Victimizing framing — community term needed
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="error">High</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="neutral">Open</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="brand">Escalated</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
              </Table.Row>
              <span className="text-body font-body text-default-font"> </span>
              <Table.Row>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    sirvienta
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Domestic service
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Synonym of criada — merge candidate
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="neutral">Low</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="brand">In review</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-caption font-caption text-subtext-color">
                    —
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
              </Table.Row>
              <span className="text-body font-body text-default-font"> </span>
              <Table.Row>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    modista
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Textile workers
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Near-duplicate of costurera
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="neutral">Low</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Badge variant="success">Resolved</Badge>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <span className="text-caption font-caption text-subtext-color">
                    —
                  </span>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
                <Table.Cell>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </Table.Cell>
                <span className="text-body font-body text-default-font"> </span>
              </Table.Row>
              <span className="text-body font-body text-default-font"> </span>
            </Table>
            <span className="text-body font-body text-default-font"> </span>
          </div>
          <span className="text-body font-body text-default-font"> </span>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <span className="text-body font-body text-default-font"> </span>
            <span className="text-body-bold font-body-bold text-default-font">
              Resolution timeline · criada
            </span>
            <span className="text-body font-body text-default-font"> </span>
            <Trace
              title="Resolution timeline"
              summary="Flag → community review → decision"
            >
              <span className="text-body font-body text-default-font"> </span>
              <Trace.Step
                title="Flagged by coordinator"
                duration="2026-10-24"
                detail="Term flagged for contested framing during mapping review."
                status="done"
              />
              <span className="text-body font-body text-default-font"> </span>
              <Trace.Step
                title="Community workshop review"
                duration="2026-10-30"
                detail="Women of El Raval workshop reviewed source usage and proposed alternatives."
                status="done"
              />
              <span className="text-body font-body text-default-font"> </span>
              <Trace.Step
                title="Decision: relabel → 'empleada doméstica'"
                duration="2026-11-01"
                detail="Note: keep original term as historical variant with provenance link."
                status="done"
                last={true}
              />
              <span className="text-body font-body text-default-font"> </span>
            </Trace>
            <span className="text-body font-body text-default-font"> </span>
          </div>
          <span className="text-body font-body text-default-font"> </span>
        </div>
        <span className="text-body font-body text-default-font"> </span>
      </div>
    </div>
  );
}

export default Ui21VocabularyReviewPanel;
