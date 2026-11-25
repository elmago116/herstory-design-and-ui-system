"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";

function Ui261MetricDetail() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[640px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Occupational labelling skew
          </h1>
          <p className="text-body font-body text-subtext-color">
            Stage: Annotation · measured 2 Nov 2026 · flagged medium.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Definition
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              Share of persons whose occupation term differs by gender in the
              source
            </span>
          </div>
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Sample
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              1,284 persons across 6 sources
            </span>
          </div>
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Threshold
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              medium above 8%, high above 15%
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Cohort</Table.HeaderCell>
                <Table.HeaderCell>n</Table.HeaderCell>
                <Table.HeaderCell>Skew</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Women
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  812
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  11.4%
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                  Medium
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Men
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  472
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  3.1%
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Low
                </Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="This is a measurement, not a verdict"
          description="The metric indicates a labelling pattern in the sources. It does not license correcting the historical record: a skew is evidence about the archive and the model, and is logged as such for review."
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
            Open evaluation log
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui261MetricDetail;
