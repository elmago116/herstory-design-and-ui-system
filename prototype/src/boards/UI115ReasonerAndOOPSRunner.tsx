"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { Table } from "@/ui/components/Table";
import { FeatherBot } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherCheckCheck } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherMessageCircleQuestionMark } from "@/ui/core";
import { FeatherPersonStanding } from "@/ui/core";
import { FeatherX } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui115ReasonerAndOopsRunner() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Reasoner and OOPS! runner
              </h1>
              <span className="text-body font-body text-subtext-color">
                Check the ontology for inferred statements and modelling
                pitfalls before mapping.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-secondary"
                icon={<FeatherBot />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Run reasoner
              </Button>
              <SubframeCore.Popover.Root>
                <SubframeCore.Popover.Trigger asChild={true}>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Run OOPS!
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
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Last run
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  13 Nov 2026, 08:12 · reasoner + OOPS! on ontology v12
                </span>
              </div>
              <Badge variant="success" icon={<FeatherCheck />}>
                Consistent
              </Badge>
            </div>
            <div className="w-full items-start gap-6 grid grid-cols-3 mobile:gap-4 mobile:grid mobile:grid-cols-1">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Inferred triples
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  1,284
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Inconsistencies
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  0
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  OOPS! pitfalls
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  5 · 3 minor
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                OOPS! pitfalls
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Modelling pitfalls detected in ontology v12. Fix in the class
                tree, then re-run.
              </span>
            </div>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Pitfall</Table.HeaderCell>
                  <Table.HeaderCell>Severity</Table.HeaderCell>
                  <Table.HeaderCell>Class</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell icon={<FeatherBot />}>
                    Recomendation
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    icon={<FeatherPersonStanding />}
                    sortable={true}
                  >
                    Action
                  </Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    P04 · Creating untyped class domains
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Minor</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    hs:occupation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Open</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-brand-700">
                    Review
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center justify-end">
                    <IconButton
                      icon={<FeatherCheckCheck />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherMessageCircleQuestionMark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    P06 · Cycles in a class hierarchy
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Major</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    hs:Person
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Open</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-brand-700">
                    Review
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center justify-end">
                    <IconButton
                      icon={<FeatherCheckCheck />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherMessageCircleQuestionMark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    P10 · Missing annotations
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Minor</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    hs:ateneu_obrer
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Open</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-brand-700">
                    Review
                  </span>
                </Table.Cell>
                <Table.Cell className="h-auto w-auto flex-none">
                  <div className="flex items-center justify-end">
                    <IconButton
                      icon={<FeatherCheckCheck />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherMessageCircleQuestionMark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    P22 · Wrong inverse relation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Minor</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    hs:memberOf
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Dismissed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-brand-700">
                    View
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center justify-end">
                    <IconButton
                      icon={<FeatherCheckCheck />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      icon={<FeatherMessageCircleQuestionMark />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Inferred statements stay out of the graph"
            description="Reasoner output is staged for review; OOPS! findings are advisory until a coordinator resolves or dismisses them."
          />
          <div className="flex items-center gap-2">
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              See changes
            </Button>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Reconsider changes
            </Button>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Open validation report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui115ReasonerAndOopsRunner;
