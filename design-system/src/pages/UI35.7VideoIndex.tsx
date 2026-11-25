"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";

function Ui357VideoIndex() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-micro font-micro text-subtext-color uppercase">
              HERSTORY · ALL USERS
            </span>
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Video index
            </h1>
            <span className="text-body font-body text-subtext-color">
              Short walkthroughs of the pipeline, the graph and the governance
              workflow.
            </span>
          </div>
          <TextField label="Search videos" helpText="">
            <TextField.Input
              placeholder="Search a topic…"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Video</Table.HeaderCell>
                  <Table.HeaderCell>Topic</Table.HeaderCell>
                  <Table.HeaderCell>Duration</Table.HeaderCell>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Registering a source
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Ingestion
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    4:12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Beginner</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Mapping a column to Wikidata
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Mapping
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    7:38
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Intermediate</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Reading a dual-voice statement
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Provenance
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    3:05
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Beginner</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Running the EJ checklist
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Governance
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    6:20
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">Intermediate</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Publishing to Wikidata
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Governance
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    5:44
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Advanced</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui357VideoIndex;
