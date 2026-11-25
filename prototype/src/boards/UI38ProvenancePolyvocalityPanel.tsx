"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { Trace } from "@/ui/components/Trace";
import { FeatherInfo } from "@/ui/core";

function Ui38ProvenancePolyvocalityPanel() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Provenance &amp; polyvocality panel
          </h1>
          <span className="text-body font-body text-subtext-color">
            Every statement carries its sources — disagreements are preserved
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              KG statements
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Five statements from the Mercè Puig cluster — two are attested by
              more than one source.
            </span>
          </div>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell sortable={true} sort="ascending">
                  Statement (subject → predicate → object)
                </Table.HeaderCell>
                <Table.HeaderCell>Sources</Table.HeaderCell>
                <Table.HeaderCell>Polyvocality</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Mercè Puig → occupation → seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Census 1912 · Press 1927
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">two voices</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">published</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Mercè Puig → born in → El Raval
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Census 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">single voice</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">published</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Mercè Puig → married to → Joan Ferrer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Parish register 1914
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">single voice</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">in review</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Antònia Vidal → occupation → tobacco roller
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Census 1912 · Union roll 1919
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">two voices</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">published</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Josepa Roca → migrated from → Múrcia
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Census 1912 · In-migrant list
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">two voices</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">queued</Badge>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Statement provenance
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              One statement followed from raw row to publication — then the two
              readings it holds.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Provenance · stat-8823
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  source row → mapping version → authorisation → publication
                </span>
              </div>
              <Trace
                title="Row to publication"
                summary="Four recorded steps, each with an actor and a timestamp"
              >
                <Trace.Step
                  title="Source"
                  duration="census_raw.csv row 441"
                  detail="Ingested 2026-10-24 · Barcelona Labour Archive"
                  status="done"
                />
                <Trace.Step
                  title="Mapped by"
                  duration="person_mapping.ttl v41"
                  detail="occupation → schema:jobTitle · confidence 0.94"
                  status="done"
                />
                <Trace.Step
                  title="Authorised"
                  duration="2026-10-28 · coordinator"
                  detail=""
                  status="done"
                />
                <Trace.Step
                  title="Published"
                  duration="2026-10-31"
                  detail="Statement stat-8823 in KG · both voices attached"
                  status="done"
                  last={true}
                />
              </Trace>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Two voices preserved
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Census 1912 and Press 1927 disagree on the same property.
                </span>
              </div>
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Source</Table.HeaderCell>
                    <Table.HeaderCell>Statement</Table.HeaderCell>
                    <Table.HeaderCell>Voice</Table.HeaderCell>
                    <Table.HeaderCell>Note</Table.HeaderCell>
                  </Table.HeaderRow>
                }
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Census 1912
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      occupation: costurera
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="brand">voice 1</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Original Catalan wording kept verbatim
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Press 1927
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      occupation: bordadora
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="brand">voice 2</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Disagreement preserved, not flattened
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </div>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Polyvocality is a design requirement, not an edge case"
            description="When two sources disagree the panel keeps both statements side by side, labels each voice, and never merges them into one preferred reading."
          />
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Open provenance
            </Button>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Dual-voice diff
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui38ProvenancePolyvocalityPanel;
