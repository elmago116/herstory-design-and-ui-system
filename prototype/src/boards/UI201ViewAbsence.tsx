"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui201ViewAbsence() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-[#00000099]">
      <div className="flex w-[520px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-3">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Census · 1920
          </h1>
          <div className="flex w-full items-center gap-2">
            <Badge variant="neutral">Data absent</Badge>
            <span className="text-caption font-caption text-subtext-color">
              Q4481 · Open
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border px-4 py-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Class
            </span>
            <span className="text-body font-body text-default-font">
              Data absent
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Scope
            </span>
            <span className="text-body font-body text-default-font">
              Women’s occupation
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Documented by
            </span>
            <span className="text-body font-body text-default-font">INE</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Date
            </span>
            <span className="text-body font-body text-default-font">
              2026-10-28
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Why it is absent
          </h2>
          <p className="text-body font-body text-subtext-color">
            The 1920 census schedule records occupation for men only; the column
            was never printed for women, so no value exists to be digitised. The
            gap is structural, not an ingestion failure.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-body-bold font-body-bold text-default-font">
            History
          </h2>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Actor</Table.HeaderCell>
                <Table.HeaderCell>Change</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-28
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Ingestion pipeline
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Gap flagged
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui201ViewAbsence;
