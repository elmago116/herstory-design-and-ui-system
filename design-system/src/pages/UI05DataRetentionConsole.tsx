"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Slider } from "@/ui/components/Slider";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherRefreshCw } from "@subframe/core";

function Ui05DataRetentionConsole() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Data-retention console
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Define how long raw imports, derived data and operational logs are
            kept across the pipeline.
          </span>
          <div className="flex w-full flex-wrap items-start gap-3 pt-2">
            <Button
              variant="brand-primary"
              icon={<FeatherRefreshCw />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Run retention sweep
            </Button>
          </div>
        </div>
        <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Storage used
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              6.2 GB of 10 GB
            </span>
            <Progress value={62} />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Active policies
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              5
            </span>
            <span className="text-caption font-caption text-subtext-color">
              2 due for review
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <span className="text-caption font-caption text-subtext-color">
              Next scheduled sweep
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              2026-11-04 02:00
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Nightly · UTC
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 pt-8">
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Automatic deletion window
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Raw source files older than the window are purged automatically
                after confirmation.
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full items-center justify-between">
                <span className="text-body font-body text-default-font">
                  Raw imports &amp; intermediate files
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  730 days
                </span>
              </div>
              <Slider
                value={[]}
                onValueChange={(value: number[]) => {}}
                onValueCommit={(value: number[]) => {}}
              />
              <div className="flex w-full items-center justify-between">
                <span className="text-caption font-caption text-subtext-color">
                  30 days
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  10 years
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Retention policies
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Per data class: how long it is kept and what happens on expiry.
              </span>
            </div>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell sortable={true}>
                    Data class
                  </Table.HeaderCell>
                  <Table.HeaderCell>Scope</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Retention</Table.HeaderCell>
                  <Table.HeaderCell>On expiry</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Status</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Raw source files
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      CSV, PDF, scans as ingested
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    All workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    730 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Archive to cold storage
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Active</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Derived KG statements
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Triples with provenance, never auto-deleted
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    All workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Indefinite
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Versioned, never deleted
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand">Protected</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Mapping drafts
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Unpublished mapping rules
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    All workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    365 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Hard delete
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Active</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Pipeline logs
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Observability &amp; audit traces
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    All workspaces
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    90 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Anonymize then delete
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">Active</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Audit trail
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      CIA-triad monitoring records
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Global
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3650 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Append-only, archive
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand">Protected</Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="Destructive actions require confirmation"
          description="Sweeps that purge raw files or mapping drafts stage a preview first. Nothing is deleted until an operator confirms; every purge is recorded in the audit trail."
        />
      </div>
    </div>
  );
}

export default Ui05DataRetentionConsole;
