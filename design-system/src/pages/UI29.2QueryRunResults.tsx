"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui292QueryRunResults() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[720px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · QUERY
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Query result
          </h1>
          <p className="text-body font-body text-subtext-color">
            2 conditions · executed against 1,284 triples in 340 ms · 128 rows
            returned.
          </p>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Person</Table.HeaderCell>
                <Table.HeaderCell>Occupation</Table.HeaderCell>
                <Table.HeaderCell>Place</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Mercè Puig
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  El Raval
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1912
                </span>
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
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  El Raval
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1911
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Francesca Bonnemaison
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  El Raval
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1909
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3 overflow-x-auto">
          <span className="text-monospace-body font-monospace-body text-default-font">
            SELECT ?person WHERE &#123; ?person wdt:P106 wd:Q327529 . &#125;
          </span>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open in SPARQL editor
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui292QueryRunResults;
