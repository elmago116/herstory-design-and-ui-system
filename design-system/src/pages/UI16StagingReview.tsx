"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Switch } from "@/ui/components/Switch";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherShield } from "@subframe/core";

function Ui16StagingReview() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
        <div className="flex w-full flex-col items-start gap-2 pb-2 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Staging triples review
          </h1>
          <span className="text-body font-body text-subtext-color">
            Inspect triples staged from the pipeline before they enter the
            knowledge graph.
          </span>
          <div className="flex w-full items-center gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-3 py-2">
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Source registration
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Ingestion
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Ontology
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Mapping
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  5
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
                  Validation
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  6
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Publish
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Badge className="whitespace-nowrap" variant="brand">
                batch 02a
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 5 of 6
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex w-full flex-col items-start gap-3 self-stretch">
            <Alert
              variant="brand"
              icon={<FeatherShield />}
              title="EJ review step required before approval"
              description="REQ-11.3.6: every batch must pass a human ethics & justice review before triples can be approved into the graph."
            />
            <Alert
              variant="warning"
              icon={<FeatherAlertTriangle />}
              title="12 of 250 triples flagged"
              description="Two conflict classes detected — drift from the source text and coupling across workspaces. Review flagged rows before approval."
            />
          </div>
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Batch progress
              </span>
              <span className="text-caption font-caption text-subtext-color">
                pipeline run 2026-11-02 09:40 · staging-2026-11-02a
              </span>
            </div>
            <span className="text-heading-2 font-heading-2 text-brand-700">
              78%
            </span>
          </div>
          <Progress value={78} />
          <div className="flex w-full items-center justify-between">
            <span className="text-body font-body text-default-font">
              178 / 250 triples reviewed
            </span>
            <span className="text-body font-body text-subtext-color">
              72 remain · 12 flagged
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border px-4 py-4">
          <div className="flex w-full flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Staged triples
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Approve or reject each triple extracted from the registered
              sources.
            </span>
          </div>
          <div className="flex w-full flex-col items-start">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Subject</Table.HeaderCell>
                  <Table.HeaderCell>Predicate</Table.HeaderCell>
                  <Table.HeaderCell>Object</Table.HeaderCell>
                  <Table.HeaderCell>Source</Table.HeaderCell>
                  <Table.HeaderCell>Conflict</Table.HeaderCell>
                  <Table.HeaderCell>Confidence</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Mercè Puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    hasOccupation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    seamstress · El Raval, 1912
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Barcelona 1912
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    none
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="text-body font-body text-default-font">
                      94%
                    </span>
                    <Progress value={94} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Reject
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Teresa Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    isMemberOf
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Catalan Women&#39;s Suffrage League
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Suffrage Correspondence
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    drift
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="text-body font-body text-default-font">
                      71%
                    </span>
                    <Progress value={71} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Reject
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Rosa Serra
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    authored
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    &quot;La Mujer&quot; editorial, 1909
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Women in Catalan Press
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    none
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="text-body font-body text-default-font">
                      88%
                    </span>
                    <Progress value={88} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Reject
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Laia Font
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    correspondsWith
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Clara Campoamor, 1931
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Seville Archivo Municipal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    coupling
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="text-body font-body text-default-font">
                      64%
                    </span>
                    <Progress value={64} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Reject
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Núria Bosch
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    recordedIn
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    trade register fol. 41, 1901
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Maritime Trade Register
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    none
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="text-body font-body text-default-font">
                      97%
                    </span>
                    <Progress value={97} />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Reject
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <div className="flex w-full items-center gap-4 rounded-lg bg-default-background pl-2 pr-6 py-4 self-stretch">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Require Epistemic Justice checklist before publish
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Blocks approval until the EJ checklist for this batch is
                completed.
              </span>
            </div>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
          </div>
          <div className="flex w-full items-center gap-3 pt-2 self-stretch">
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Approve batch
            </Button>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Approve and publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui16StagingReview;
