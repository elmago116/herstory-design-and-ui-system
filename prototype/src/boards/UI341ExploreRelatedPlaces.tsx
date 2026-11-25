"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui341ExploreRelatedPlaces() {
  return (
    <div className="flex h-full w-full items-start justify-end bg-[#00000099]">
      <div className="flex w-[520px] flex-none flex-col items-start gap-6 self-stretch rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Related places
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            Places sharing the same occupation profile as the selected marker.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-body-bold font-body-bold text-default-font">
            Nearest matches
          </span>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Place</Table.HeaderCell>
                <Table.HeaderCell>Shared occupations</Table.HeaderCell>
                <Table.HeaderCell>Persons</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  El Born
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress, talladora
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  96
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Sant Pere
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress, bordadora
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  74
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Gràcia
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  bordadora, talladora
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  58
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Carrer d&#39;en Robador
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  seamstress
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  41
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Why related
          </h2>
          <p className="text-caption font-caption text-subtext-color">
            Occupation profiles overlap by at least 40 per cent: seamstress,
            bordadora and talladora dominate both El Raval and El Born in the
            1912 register.
          </p>
          <p className="text-caption font-caption text-subtext-color">
            Shared records point to the same workshops and employers, so a
            person sampled in one place is often listed in the other.
          </p>
        </div>
        <div className="flex w-full items-center justify-end gap-2 mt-auto">
          <Button
            variant="neutral-secondary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open in graph
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open place
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui341ExploreRelatedPlaces;
