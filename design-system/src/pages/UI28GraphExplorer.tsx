"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { GraphToolbar } from "@/ui/components/GraphToolbar";
import { NetworkGraph } from "@/ui/components/NetworkGraph";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { Tabs } from "@/ui/components/Tabs";
import { FeatherCode } from "@subframe/core";
import { FeatherShare2 } from "@subframe/core";
import { FeatherTable } from "@subframe/core";

function Ui28GraphExplorer() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start pb-12 mobile:pb-8">
          <span className="text-body text-eyebrow font-eyebrow">
            HERSTORY · EXPLORE
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Graph explorer
          </h1>
        </div>
        <Tabs>
          <Tabs.Item active={true} icon={<FeatherShare2 />}>
            Graph
          </Tabs.Item>
          <Tabs.Item active={false} icon={<FeatherTable />}>
            Table
          </Tabs.Item>
          <Tabs.Item icon={<FeatherCode />}>Code</Tabs.Item>
        </Tabs>
        <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2 items-baseline">
              <span className="text-body-bold font-body-bold text-default-font">
                Query this view answers
              </span>
              <span className="text-caption font-caption text-subtext-color">
                SPARQL · read only
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="neutral">graph view</Badge>
              <Button
                variant="neutral-tertiary"
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Copy
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-body font-body text-default-font whitespace-pre">
              PREFIX wd: &lt;http://www.wikidata.org/entity/&gt;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              PREFIX hs: &lt;https://herstory.example/ontology/&gt;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              SELECT ?person ?personLabel ?placeLabel ?source WHERE &#123;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
              ?person a wd:Q5 ;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
              hs:placeOfBirth ?place ;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
              hs:documentedIn ?source .
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
              ?place hs:locatedIn wd:Q1492 . # Barcelona
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
              FILTER NOT EXISTS &#123; ?person hs:dateOfDeath ?d .
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              {" "}
              FILTER(?d &lt; &quot;1900-01-01&quot;^^xsd:date) &#125;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              &#125;
            </span>
            <span className="text-body font-body text-default-font whitespace-pre">
              LIMIT 200
            </span>
          </div>
          <span className="text-body font-body text-subtext-color">
            Returns every person born in Barcelona who is documented in at least
            one archival source, together with the place of birth and that
            source. People who died before 1900 are excluded, and the result is
            capped at 200 rows — which is why the graph shows a sample, not the
            full set.
          </span>
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <span className="text-caption font-caption text-subtext-color">
              Matches the current filters: person · place of birth · Barcelona.
              Editable in UI-30 SPARQL editor.
            </span>
            <span className="text-caption font-caption text-subtext-color">
              3 triple patterns · 1 filter
            </span>
          </div>
        </div>
        <div className="flex w-full items-start gap-3">
          <Combobox
            label=""
            placeholder="Search persons, places, sources…"
            value=""
            helpText=""
          />
          <Select
            label=""
            placeholder="Entity type"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="All">All</Select.Item>
            <Select.Item value="Person">Person</Select.Item>
            <Select.Item value="Place">Place</Select.Item>
            <Select.Item value="Organization">Organization</Select.Item>
            <Select.Item value="Occupation">Occupation</Select.Item>
          </Select>
          <Button
            variant="neutral-tertiary"
            size="small"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Clear
          </Button>
        </div>
        <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
          <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
            <NetworkGraph
              className="h-[420px] w-full flex-none"
              state="selected"
            />
            <GraphToolbar
              maxLinks="300"
              searchPlaceholder="Search RDF resources…"
              searchHint={'"abC" matches "abC*", "ab c*" and "ab-c*"'}
              showLabel="Show"
            />
            <span className="text-caption font-caption text-subtext-color">
              Mercè Puig · seamstress · El Raval — selected
            </span>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Mercè Puig
              </span>
            </div>
            <Badge variant="brand">Person</Badge>
            <Table>
              <Table.HeaderRow>
                <Table.HeaderCell>Property</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.HeaderRow>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Born
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    1887
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    District
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Occupation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    seamstress
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Records
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Alert
              variant="warning"
              title="Missing value"
              description="father's name absent — archival silence"
            />
            <Alert
              variant="neutral"
              title="Two sources disagree on occupation"
              description="voices preserved"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui28GraphExplorer;
