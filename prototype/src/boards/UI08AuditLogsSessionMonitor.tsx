"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { Trace } from "@/ui/components/Trace";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherDownload } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherX } from "@/ui/core";

function Ui08AuditLogsSessionMonitor() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-2 font-heading-2 text-default-font">
            Audit logs &amp; session monitor
          </h1>
          <p className="text-body font-body text-subtext-color">
            Login, mapping and pipeline activity with full traceability.
          </p>
        </div>
        <div className="w-full flex-col items-start gap-3 grid grid-cols-2 mobile:flex-row mobile:gap-4 mobile:grid mobile:grid-cols-1">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-end gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-end gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Recent audit events
              </span>
              <span className="text-caption font-caption text-subtext-color">
                append-only · last 24 hours
              </span>
            </div>
            <Trace
              title="Audit trail"
              summary="5 events · 4.0s"
              state="expanded"
            >
              <Trace.Step
                title="Superadmin login · IP 84.120.3.99"
                duration="0.4s"
                detail="Auth: password + TOTP"
                status="done"
              />
              <Trace.Step
                title="Mapping override person_mapping.ttl v41"
                duration="1.2s"
                detail="Rule: census → Person"
                status="done"
              />
              <Trace.Step
                title="Export: governance decisions.zip"
                duration="0.8s"
                detail="Failed: export quota exceeded"
                status="failed"
              />
              <Trace.Step
                title="Failed login · 3 attempts"
                duration="1.5s"
                detail="Account locked for 15 minutes"
                status="done"
              />
              <Trace.Step
                title="Session ended: Teresa Vidal"
                duration="0.1s"
                detail="Duration: 2h 14m"
                status="done"
                last={true}
              />
            </Trace>
            <div className="flex items-end">
              <Button
                variant="brand-primary"
                icon={<FeatherDownload />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Export logs
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Active sessions
            </span>
            <span className="text-caption font-caption text-subtext-color">
              4 sessions · 1 idle
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>User</Table.HeaderCell>
                  <Table.HeaderCell>IP</Table.HeaderCell>
                  <Table.HeaderCell>Last activity</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Mercè Puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    84.120.3.99
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    09:58
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Badge variant="brand">Active</Badge>
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Revoke
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Laura Fernández
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    192.168.14.7
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    09:41
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Badge variant="brand">Active</Badge>
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Revoke
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Teresa Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    10.0.4.21
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    08:30
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Badge variant="neutral">Idle</Badge>
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Revoke
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Admin bot
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    84.120.3.99
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    09:59
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Badge variant="brand">Active</Badge>
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherX />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Revoke
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <Alert
          variant="neutral"
          icon={<FeatherInfo />}
          title="Session retention"
          description="Sessions and audit events are kept for 365 days (append-only) per CIA-triad policy."
        />
        <Alert
          variant="error"
          icon={<FeatherAlertTriangle />}
          title="Security event"
          description="Unusual login from a new device for coordinator account — verify or revoke."
        />
      </div>
    </div>
  );
}

export default Ui08AuditLogsSessionMonitor;
