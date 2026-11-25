"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { BarChart } from "@/ui/components/BarChart";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Table } from "@/ui/components/Table";
import * as SubframeCore from "@subframe/core";

function Ui27ParticipationMetricsImpactReport() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex flex-col items-start gap-1">
          <span className="text-body text-eyebrow font-eyebrow">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Participation metrics &amp; impact report
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Participation depth and social impact, not only technical
            performance
          </span>
        </div>
        <div className="flex w-full items-start gap-6">
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-caption font-caption text-subtext-color">
              Participants
            </span>
            <span className="text-heading-1 font-heading-1 text-default-font">
              32
            </span>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-caption font-caption text-subtext-color">
              Decisions affected
            </span>
            <span className="text-heading-1 font-heading-1 text-default-font">
              18
            </span>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-caption font-caption text-subtext-color">
              Workshops
            </span>
            <span className="text-heading-1 font-heading-1 text-default-font">
              6
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Participation depth
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Level of engagement across participants
            </span>
          </div>
          <BarChart
            className="h-[260px] w-full flex-none"
            categories={["Participants"]}
            data={[
              { Level: "Consultative", Participants: 9 },
              { Level: "Collaborative", Participants: 14 },
              { Level: "Co-ownership", Participants: 9 },
            ]}
            index={"Level"}
          />
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Impact register
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Recorded knowledge graph contributions and outcomes
            </span>
          </div>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Contribution</Table.HeaderCell>
                <Table.HeaderCell>Source</Table.HeaderCell>
                <Table.HeaderCell>KG change</Table.HeaderCell>
                <Table.HeaderCell>Outcome</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Community census data (1912)
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Workshop · El Raval
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  +342 triples
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Applied</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Occupation mapping revision
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Objection · OCC-03
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  +18 mappings
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Applied</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Women street vendors category
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Workshop · Gràcia
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  +1 class, +56 triples
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">Cited</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Church attendance normalisation
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Objection · ATT-12
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  +2 SHACL rules
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Applied</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Intergenerational household pattern
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Workshop · Barceloneta
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  +127 triples
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Follow-up</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Impact report completeness
            </span>
            <span className="text-caption font-caption text-subtext-color">
              72% — data sufficient for narrative generation
            </span>
          </div>
          <Progress value={72} />
          <Button
            variant="brand-primary"
            size="small"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Generate impact report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui27ParticipationMetricsImpactReport;
