"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronRight } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherX } from "@/ui/core";

function Ui141CqDetail() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex min-w-[0px] flex-col items-start gap-2">
              <div className="flex items-center gap-1">
                <span className="text-caption font-caption text-subtext-color">
                  Competency question registry
                </span>
                <FeatherChevronRight className="text-caption font-caption text-subtext-color" />
                <span className="text-caption-bold font-caption-bold text-default-font">
                  CQ-01
                </span>
              </div>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Which women of El Raval were registered as seamstresses in 1912?
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success" icon={<FeatherCheck />}>
                  Approved
                </Badge>
                <span className="text-caption font-caption text-subtext-color">
                  4 facets · 12 runs · last validated 2 Nov 2026
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-secondary"
                size="medium"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Edit
              </Button>
              <Button
                variant="brand-primary"
                size="medium"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Run against graph
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border px-6 py-6">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Question definition
          </h2>
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-1">
              <span className="w-56 flex-none text-caption font-caption text-subtext-color">
                Intended answer
              </span>
              <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
                Women aged 16 and over recorded with occupation modista or
                costurera in the 1912 El Raval census, resolved to Person
                entities with a Wikidata QID.
              </span>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-1">
              <span className="w-56 flex-none text-caption font-caption text-subtext-color">
                Expected count
              </span>
              <span className="text-body font-body text-default-font">128</span>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-1">
              <span className="w-56 flex-none text-caption font-caption text-subtext-color">
                Facets
              </span>
              <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
                Occupation = seamstress · Location = El Raval · Gender = female
                · Year = 1912
              </span>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-1">
              <span className="w-56 flex-none text-caption font-caption text-subtext-color">
                Source alignment
              </span>
              <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
                Barcelona census 1912 (registered) · Ateneu Obrer membership
                rolls (partial, 6 of 14 sources)
              </span>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-1">
              <span className="w-56 flex-none text-caption font-caption text-subtext-color">
                Approved by
              </span>
              <span className="text-body font-body text-default-font">
                Elena Gómez, workspace coordinator · 2 Nov 2026
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3 pt-8">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Generated SPARQL
          </h2>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-monospace-body font-monospace-body text-default-font">
              PREFIX wdt: &lt;http://www.wikidata.org/prop/direct/&gt;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              PREFIX wd: &lt;http://www.wikidata.org/entity/&gt;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              SELECT ?person ?personLabel WHERE &#123;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              ?person wdt:P31 wd:Q5 .
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              ?person wdt:P106 wd:Q327529 .
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              ?person wdt:P131 wd:Q1492 .
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              ?person wdt:P569 ?dob .
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              FILTER(YEAR(?dob) &lt;= 1896)
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              SERVICE wikibase:label &#123;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              bd:serviceParam wikibase:language &quot;ca,es,en&quot;.
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              &#125;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              &#125;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              LIMIT 500
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3 pt-8 pb-4">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Run history
          </h2>
          <span className="text-caption font-caption text-subtext-color">
            Each run compares the expected count of 128 against the live query
            response.
          </span>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Run</Table.HeaderCell>
                  <Table.HeaderCell>Started</Table.HeaderCell>
                  <Table.HeaderCell>Actual count</Table.HeaderCell>
                  <Table.HeaderCell>Delta</Table.HeaderCell>
                  <Table.HeaderCell>Outcome</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    #12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2 Nov 2026, 14:20
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    128
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    0
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Exact match — all expected entities found
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    #11
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    1 Nov 2026, 09:12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    126
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error" icon={<FeatherX />}>
                    −2
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2 entities missing — source alignment unresolved
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    #10
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    28 Oct 2026, 16:05
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    131
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    +3
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3 extra results — review facet constraints
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui141CqDetail;
