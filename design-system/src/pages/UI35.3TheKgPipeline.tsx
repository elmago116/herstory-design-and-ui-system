"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui353TheKgPipeline() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2 pb-4">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · HELP
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            The knowledge graph pipeline
          </h1>
          <p className="text-body font-body text-subtext-color">
            Source to knowledge graph
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Stage</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
                <Table.HeaderCell>Output</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body-bold font-body-bold text-default-font">
                  Registration
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Archivist
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Source record with a stable identifier
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body-bold font-body-bold text-default-font">
                  Ingestion
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Data engineer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Extracted persons and places
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body-bold font-body-bold text-default-font">
                  Validation
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Reviewer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Verified evidence spans
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body-bold font-body-bold text-default-font">
                  Mapping
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Source column to property mappings
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body-bold font-body-bold text-default-font">
                  Ontology
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Ontology lead
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Concepts aligned to the HERSTORY model
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body-bold font-body-bold text-default-font">
                  Publication
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Superadmin
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Reconciled graph snapshot
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <p className="w-full max-w-[760px] text-body font-body text-subtext-color">
          Each stage hands a reviewed artefact to the next, so a claim only
          reaches the graph once its source, evidence span and mapping have all
          been confirmed.
        </p>
        <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-6">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Back to help
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui353TheKgPipeline;
