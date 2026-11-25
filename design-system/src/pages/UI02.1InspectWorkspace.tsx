"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui021InspectWorkspace() {
  return (
    <div className="flex h-full w-full items-start justify-end bg-[#00000099]">
      <div className="flex w-[520px] flex-none flex-col items-start gap-6 self-stretch rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Barcelona 1912
          </h1>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-wrap items-center gap-3">
            <Badge variant="success">Active</Badge>
            <span className="text-caption font-caption text-subtext-color">
              Created 12 Sep 2026 · 4 members
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Members
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Accounts with access to this workspace.
            </span>
          </div>
        </div>
        <Table
          header={
            <Table.HeaderRow>
              <Table.HeaderCell>Member</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Last active</Table.HeaderCell>
            </Table.HeaderRow>
          }
          density="comfortable"
        >
          <Table.Row>
            <Table.Cell>
              <span className="text-body-bold font-body-bold text-default-font">
                Elena Gómez
              </span>
            </Table.Cell>
            <Table.Cell>
              <Badge variant="brand">Superadmin</Badge>
            </Table.Cell>
            <Table.Cell>
              <span className="text-body font-body text-default-font">
                2 hours ago
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="text-body font-body text-default-font">
                Marta Ferrer
              </span>
            </Table.Cell>
            <Table.Cell>
              <Badge variant="neutral">Editor</Badge>
            </Table.Cell>
            <Table.Cell>
              <span className="text-body font-body text-default-font">
                Yesterday
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="text-body font-body text-default-font">
                Joan Puig
              </span>
            </Table.Cell>
            <Table.Cell>
              <Badge variant="neutral">Reviewer</Badge>
            </Table.Cell>
            <Table.Cell>
              <span className="text-body font-body text-default-font">
                3 days ago
              </span>
            </Table.Cell>
          </Table.Row>
        </Table>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Pipeline
          </h2>
          <span className="text-caption font-caption text-subtext-color">
            Ingestion and publication counts for this workspace.
          </span>
          <div className="flex w-full flex-wrap gap-3 items-stretch">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
              <span className="text-heading-3 font-heading-3 text-default-font">
                14
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Sources
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
              <span className="text-heading-3 font-heading-3 text-default-font">
                1,284
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Records
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
              <span className="text-heading-3 font-heading-3 text-default-font">
                3,410
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Published triples
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 mt-auto">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open workspace
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui021InspectWorkspace;
