"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui302CompareWithUiQuery() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            SPARQL vs UI query
          </h1>
          <p className="text-body font-body text-subtext-color">
            Same intent, two expressions of the query.
          </p>
        </div>
        <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <h2 className="text-heading-3 font-heading-3 text-default-font">
              Editor query
            </h2>
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
              <span className="text-monospace-body font-monospace-body text-default-font">
                SELECT ?p ?label WHERE &#123;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                ?p wdt:P106 wd:Q327529 .
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                ?p wdt:P131 wd:Q1492 .
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                SERVICE wikibase:label &#123; bd:serviceParam wikibase:language
                &quot;ca&quot;,&quot;es&quot;,&quot;en&quot; . &#125;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                &#125;
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <h2 className="text-heading-3 font-heading-3 text-default-font">
              UI builder query
            </h2>
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
              <span className="text-monospace-body font-monospace-body text-default-font">
                Entity · Person
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                Occupation · Seamstress
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                District · El Raval
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                Labels · ca, es, en
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                Limit · 500 rows
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Differences
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Three clauses diverge in syntax only.
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Clause</Table.HeaderCell>
                  <Table.HeaderCell>Editor</Table.HeaderCell>
                  <Table.HeaderCell>Builder</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Occupation
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    wdt:P106 wd:Q327529
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Seamstress
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    District
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    wdt:P131 wd:Q1492
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
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Label language
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    &quot;ca&quot;,&quot;es&quot;,&quot;en&quot;
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    ca, es, en
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Adopt builder version
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui302CompareWithUiQuery;
