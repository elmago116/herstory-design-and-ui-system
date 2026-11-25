"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherX } from "@/ui/core";

function Ui391StageDetail() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[720px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Ingestion stage
          </h1>
          <p className="text-body font-body text-subtext-color">
            Last run 13 Nov 2026, 02:00 UTC · 1,284 records · 14 alerts open.
          </p>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Source</Table.HeaderCell>
                <Table.HeaderCell>Records</Table.HeaderCell>
                <Table.HeaderCell>Duration</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Padró municipal 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1,284
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  2m 14s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Done
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Ateneu Obrer rolls
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  312
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  41s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Done
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Parish records Sant Pau
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">0</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error" icon={<FeatherX />}>
                  Failed
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Police records 1911
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  96
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  12s
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherClock />}>
                  Partial
                </Badge>
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

export default Ui391StageDetail;
