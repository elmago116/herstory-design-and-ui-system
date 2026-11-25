"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { Trace } from "@/ui/components/Trace";
import { FeatherBot } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";

function Ui173ReasoningTrace() {
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
                LLM suggestion panel / wd:Q123456 wdt:P106 wd:Q11997032
              </span>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Reasoning trace
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                OpenAI · GPT-4 · confidence 0.82 · generated 12 Nov 2026, 14:20
                · hypothesis only.
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherBot />}>
              Hypothesis
            </Badge>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Reasoning path
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Four recorded steps from retrieved context to the proposed
                triple.
              </span>
            </div>
            <Trace
              title="Reasoning path for wd:Q123456 wdt:P106 wd:Q11997032"
              summary="4 steps · 1.2s"
              state="expanded"
            >
              <Trace.Step
                title="Retrieved context"
                duration="0.4s"
                detail="Source: 1912 census, folio 214 · 3 candidate rows"
                status="done"
              />
              <Trace.Step
                title="Normalised occupation"
                duration="0.3s"
                detail="costurera → seamstress · Wikidata Q11997032"
                status="done"
              />
              <Trace.Step
                title="Suggested triple"
                duration="0.3s"
                detail="wd:Q123456 → occupation → Seamstress"
                status="done"
                expanded={true}
              />
              <Trace.Step
                title="Confidence 0.82"
                duration="0.2s"
                detail="Sources: 3 · agreement: high · provider: OpenAI GPT-4"
                status="done"
                last={true}
              />
            </Trace>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-6 py-6">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Evidence used
              </span>
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Source</Table.HeaderCell>
                    <Table.HeaderCell>Fragment</Table.HeaderCell>
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                    <Table.HeaderCell>Voice</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="compact"
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Census 1912
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      folio 214 · occupation costurera
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      0.52
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="brand">voice 1</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Press 1927
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      obituary · occupation bordadora
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      0.30
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="brand">voice 2</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Ateneu Obrer rolls
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-subtext-color">
                      membership list · seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      0.18
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="neutral">single voice</Badge>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </div>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="The trace explains the suggestion — it does not verify it"
              description="Approval moves the triple into staging as a hypothesis; the human gate stays on until a coordinator validates the source row."
            />
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Back to suggestions
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Approve suggestion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui173ReasoningTrace;
