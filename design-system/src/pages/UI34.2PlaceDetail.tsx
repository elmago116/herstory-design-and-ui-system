"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";
import { FeatherInfo } from "@subframe/core";

function Ui342PlaceDetail() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[1120px] flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <span className="text-micro font-micro text-subtext-color uppercase">
                HERSTORY · INQUIRER
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Map view / Place
              </span>
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                El Raval
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="neutral">Q1492</Badge>
                <Badge variant="success">Semantic zoom · district</Badge>
                <Badge variant="neutral">1,284 records</Badge>
              </div>
            </div>
            <Button
              variant="brand-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Explore related places
            </Button>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-3 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Persons
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                412
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Records
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                1,284
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Period
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                1901–1927
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Entities recorded here
            </span>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Entity</Table.HeaderCell>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Records</Table.HeaderCell>
                  <Table.HeaderCell>Quality</Table.HeaderCell>
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
                  <span className="text-body font-body text-subtext-color">
                    Person
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">high</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Ateneu Obrer
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Organization
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success">high</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Carrer de la Cera
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-subtext-color">
                    Street
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    1
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning">medium</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Place boundaries are historical, not current"
            description="The district outline follows the 1912 municipal boundary; modern streets may not align with it."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui342PlaceDetail;
