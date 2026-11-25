"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";

function Ui251ComparisonResult() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[880px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Comparison result
          </h1>
          <p className="text-body font-body text-subtext-color">
            S-7 Seamstresses of El Raval, run against three channels.
            Differences are shown per entity, never merged.
          </p>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Entity</Table.HeaderCell>
                <Table.HeaderCell>Census 1912</Table.HeaderCell>
                <Table.HeaderCell>Ateneu rolls</Table.HeaderCell>
                <Table.HeaderCell>Parish records</Table.HeaderCell>
                <Table.HeaderCell>Agreement</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Mercè Puig
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Agree
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Unnamed, no name in source
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  criada
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  costurera
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                  Label differs
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Teresa Vidal
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Single source</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <span className="text-caption font-caption text-subtext-color">
          3 entities · 1 agreement · 1 label conflict · 1 single-source
        </span>
        <Alert
          variant="neutral"
          icon={<FeatherInfo />}
          title="Conflicts are preserved, not resolved"
          description="Each channel keeps its own field vocabulary in its own column: criada is not silently normalised to costurera. Reconciliation belongs to the mapping editor, where every merge is recorded with its provenance."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open in mapping editor
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui251ComparisonResult;
