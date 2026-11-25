"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";

function Ui281EntitySearch() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[720px] flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Entity search
          </h1>
          <p className="text-body font-body text-subtext-color">
            Search persons, places, occupations and sources across every
            workspace you can read. Results keep the field vocabulary of their
            source.
          </p>
        </div>
        <div className="flex w-full items-start gap-3 mobile:flex-col">
          <Combobox
            className="h-auto grow shrink-0 basis-0"
            label=""
            placeholder="Search persons, places, sources…"
            value=""
            helpText=""
          />
          <Select
            className="h-auto w-[200px] flex-none"
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
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-caption font-caption text-subtext-color">
            4 results · ranked by match · El Raval
          </span>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Entity</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Workspace</Table.HeaderCell>
                <Table.HeaderCell>Records</Table.HeaderCell>
                <Table.HeaderCell>Quality</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
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
                <Badge variant="brand">Person</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Barcelona 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">3</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">High</Badge>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  El Raval
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Place</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Barcelona 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  412
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">High</Badge>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  costurera
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Occupation</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Textile workers
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  128
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Medium</Badge>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Ateneu Obrer
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Organization</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Ateneu Obrer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  56
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error">Low</Badge>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <Alert
          variant="neutral"
          title="Results respect archival silence"
          description="Entities absent from a source are not inferred. A missing value is shown as a documented absence, not as a blank field."
        />
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
            Open in graph
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui281EntitySearch;
