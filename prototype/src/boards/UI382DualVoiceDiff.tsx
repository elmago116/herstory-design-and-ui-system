"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";

function Ui382DualVoiceDiff() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Provenance &amp; polyvocality / stat-8823 · Mercè Puig →
                occupation
              </span>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Dual-voice diff
              </h1>
              <span className="text-body font-body text-subtext-color">
                Two sources describe the same property differently. Both
                readings are kept; neither is flattened into a single truth.
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherAlertTriangle />}>
              two voices
            </Badge>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex w-full items-center justify-between">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Census 1912
                </span>
                <Badge variant="brand">voice 1</Badge>
              </div>
              <span className="text-caption font-caption text-subtext-color">
                Barcelona Labour Archive · row 441 · recorded 1912
              </span>
              <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
                <span className="text-caption font-caption text-subtext-color">
                  Verbatim
                </span>
                <span className="text-body font-body text-default-font">
                  &quot;costurera&quot;
                </span>
              </div>
              <span className="text-caption font-caption text-subtext-color">
                Mapped to schema:jobTitle &quot;seamstress&quot; · confidence
                0.94
              </span>
            </div>
            <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex w-full items-center justify-between">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Press 1927
                </span>
                <Badge variant="brand">voice 2</Badge>
              </div>
              <span className="text-caption font-caption text-subtext-color">
                La Mujer · obituary, 1927 · recorded 1927
              </span>
              <div className="flex w-full flex-col items-start gap-1 rounded-md bg-background-alt px-4 py-4">
                <span className="text-caption font-caption text-subtext-color">
                  Verbatim
                </span>
                <span className="text-body font-body text-default-font">
                  &quot;bordadora&quot;
                </span>
              </div>
              <span className="text-caption font-caption text-subtext-color">
                Mapped to schema:jobTitle &quot;embroiderer&quot; · confidence
                0.71
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Differences
              </span>
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Property</Table.HeaderCell>
                    <Table.HeaderCell>Census 1912</Table.HeaderCell>
                    <Table.HeaderCell>Press 1927</Table.HeaderCell>
                    <Table.HeaderCell>Treatment</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="compact"
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Occupation term
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      costurera
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      bordadora
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="brand">both preserved</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Normalised concept
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      seamstress
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      embroiderer
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="warning">kept separate</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Period
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      1912
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      1927
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="neutral">temporal qualifier</Badge>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </div>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="The disagreement is the evidence"
              description="Neither reading overrides the other. A later source can describe a changed occupation without invalidating the earlier record."
            />
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Export diff
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Keep both readings
              </Button>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui382DualVoiceDiff;
