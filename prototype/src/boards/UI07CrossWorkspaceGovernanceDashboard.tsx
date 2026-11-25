"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { BarChart } from "@/ui/components/BarChart";
import { Button } from "@/ui/components/Button";
import { NetworkGraph } from "@/ui/components/NetworkGraph";
import { Table } from "@/ui/components/Table";
import { FeatherShield } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui07CrossWorkspaceGovernanceDashboard() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <h1 className="text-heading-2 font-heading-2 text-default-font">
            Cross-workspace governance dashboard
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Mapping and retrieval regressions, escalations and objections across
            every workspace.
          </span>
          <div className="flex w-full items-center justify-end gap-2 pt-2">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Assign or escalate
            </Button>
          </div>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherShield />}
          title="Shared governance pipeline"
          description="Mapping regressions run beside retrieval regressions in one pipeline. Checkpoints gate automated authoring, and every cross-workspace event below is traceable to a specific mapping version."
        />
        <div className="w-full items-start gap-6 pt-8 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Active policies
            </span>
            <span className="text-heading-2 font-heading-2 text-default-font">
              12
            </span>
            <span className="text-caption font-caption text-subtext-color">
              across 5 workspaces
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Open objections
            </span>
            <span className="text-heading-2 font-heading-2 text-default-font">
              3
            </span>
            <Badge variant="warning">2 awaiting response</Badge>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Pending escalations
            </span>
            <span className="text-heading-2 font-heading-2 text-default-font">
              2
            </span>
            <Badge variant="error">1 overdue</Badge>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Regressions this week
            </span>
            <span className="text-heading-2 font-heading-2 text-default-font">
              4
            </span>
            <Badge variant="success">all reverted</Badge>
          </div>
        </div>
        <div className="w-full items-start gap-6 pt-8 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Shared entities across workspaces
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Records linked to more than one workspace; node = workspace,
                edge = shared entity.
              </span>
            </div>
            <NetworkGraph
              className="h-[300px] w-full flex-none"
              state="selected"
            />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Regressions by workspace
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Mapping vs retrieval regressions, last 30 days.
              </span>
            </div>
            <BarChart
              className="w-full grow shrink-0 basis-0"
              categories={["Mapping", "Retrieval"]}
              data={[
                { Workspace: "Barcelona 1912", Mapping: 2, Retrieval: 3 },
                { Workspace: "Women in Press", Mapping: 1, Retrieval: 1 },
                { Workspace: "Suffrage Corresp.", Mapping: 4, Retrieval: 2 },
                { Workspace: "Trade Register", Mapping: 0, Retrieval: 1 },
              ]}
              index={"Workspace"}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 pt-6 pb-2">
          <div className="flex w-full flex-col items-start gap-1 pb-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Governance events across workspaces
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Escalations, objections and regressions, newest first.
            </span>
          </div>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Event</Table.HeaderCell>
                <Table.HeaderCell>Workspace</Table.HeaderCell>
                <Table.HeaderCell sortable={true}>Status</Table.HeaderCell>
                <Table.HeaderCell>Assigned to</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Mapping regression: person_mapping.ttl v41
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    P-projection unevenness across 14 Q-typing slips
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Suffrage Correspondence
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Reverted</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Automated checkpoint
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-11-01
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Objection: category &#39;costurera&#39;
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Contested interpretive frame — community escalation
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Barcelona 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">In response</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-31
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Retrieval regression: query S-7 slower ×4.2
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Mediation-layer truncation detected via multichannel
                    comparator
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Women in Catalan Press
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error">Open</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Data engineer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-30
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Legacy record freeze escalated
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Requires superadmin resolution per governance policy
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Suffrage Correspondence
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error">Escalated</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Superadmin
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-29
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Objection resolved: suffragist Q-number
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Evidence artefact: letter dated 1926, restitution applied
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Suffrage Correspondence
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Resolved</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2026-10-27
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Ui07CrossWorkspaceGovernanceDashboard;
