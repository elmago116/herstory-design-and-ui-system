"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Table } from "@/ui/components/Table";

function Ui271GenerateImpactReport() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-1">
          <span className="text-caption text-eyebrow font-eyebrow">
            HERSTORY · IMPACT REPORT
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Participation &amp; impact report
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Generated 2026-11-13 · Q3 2026 programme period · 72% completeness ·
            data sufficient for narrative generation
          </span>
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Summary
          </h2>
          <p className="text-body font-body text-default-font">
            Across the period, 32 participants took part in 6 workshops held in
            El Raval, Gracia and Barceloneta. Engagement was distributed as 9
            consultative, 14 collaborative and 9 co-ownership participants, with
            18 recorded decisions affected by community input.
          </p>
          <p className="text-body font-body text-default-font">
            Contributions produced measurable knowledge graph change in 4 of 5
            registered entries, and the report is 72% complete, which the team
            judges sufficient for narrative generation and external sharing.
          </p>
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-3 font-heading-3 text-default-font">
              Metrics
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Participation depth and impact outcomes against programme targets
            </span>
          </div>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Metric</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
                <Table.HeaderCell>Target</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Participants
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  32
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  40
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Below target</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Workshops delivered
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">6</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">6</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Met</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Decisions affected
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  18
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  15
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Exceeded</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Report completeness
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  72%
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  90%
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">In progress</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Ui271GenerateImpactReport;
