"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@/ui/core";

function Ui043AuthorityMatrixEditor() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Authority matrix
              </h1>
              <span className="text-body font-body text-subtext-color">
                Who may author, correct, approve and publish mappings — and
                under what oversight.
              </span>
            </div>
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save matrix
            </Button>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>Author mappings</Table.HeaderCell>
                  <Table.HeaderCell>Correct records</Table.HeaderCell>
                  <Table.HeaderCell>Approve batches</Table.HeaderCell>
                  <Table.HeaderCell>Publish to Wikidata</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Superadmin
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Coordinator
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">EJ gate</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Reviewer
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Read only</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Read only</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Allowed</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Denied</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Inquirer
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Read only</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral">Read only</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Denied</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error">Denied</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Publication always needs a human checkpoint"
            description="No role may bypass the EJ checklist; the matrix can widen who approves, never remove the gate."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui043AuthorityMatrixEditor;
