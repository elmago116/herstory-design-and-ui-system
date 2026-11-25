"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@/ui/core";

function Ui212ReviewTerm() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-[#00000099]">
      <div className="flex w-[520px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            criada
          </h1>
          <div className="flex w-full items-center gap-2">
            <Badge variant="warning" icon={<FeatherAlertTriangle />}>
              Loaded term carries class hierarchy
            </Badge>
            <span className="text-caption font-caption text-subtext-color">
              High severity · Open
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-1">
          <div className="flex w-full items-center justify-between py-2 gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Workspace
            </span>
            <span className="text-body font-body text-default-font">
              Domestic service
            </span>
          </div>
          <div className="flex w-full items-center justify-between py-2 gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Proposed by
            </span>
            <span className="text-body font-body text-default-font">
              El Raval community workshop
            </span>
          </div>
          <div className="flex w-full items-center justify-between py-2 gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Occurrences
            </span>
            <span className="text-body font-body text-default-font">
              38 records
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Review trail
          </h2>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Actor</Table.HeaderCell>
                <Table.HeaderCell>Decision</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-24
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Flag for contested framing
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-30
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  El Raval workshop
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Reviewed source usage
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-11-01
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Community review
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Relabel to empleada domestica
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full items-center justify-end gap-2 mt-auto">
          <Button
            variant="neutral-tertiary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Reject
          </Button>
          <Button
            variant="brand-primary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Approve term
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui212ReviewTerm;
