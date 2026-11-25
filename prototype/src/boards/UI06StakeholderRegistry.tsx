"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Pagination } from "@/ui/components/Pagination";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { FeatherDownload } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";

function Ui06StakeholderRegistry() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <h1 className="text-heading-2 font-heading-2 text-default-font">
            Stakeholder registry
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Who participates in the project, at which phase, and with what level
            of engagement.
          </span>
          <div className="flex w-full flex-wrap items-start gap-3 pt-2">
            <Button
              variant="brand-primary"
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Add stakeholder
            </Button>
            <Button
              variant="neutral-tertiary"
              icon={<FeatherDownload />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Export
            </Button>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Edit record
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-start gap-3">
          <span className="text-body font-body text-default-font">
            32 participants
          </span>
          <Badge variant="brand">9 co-ownership</Badge>
          <Badge variant="success">14 collaborative</Badge>
          <Badge variant="neutral">9 consultative</Badge>
        </div>
        <div className="flex w-full flex-wrap items-start gap-4 pt-6">
          <div className="flex max-w-[260px] grow shrink-0 basis-0 flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color">
              Level of engagement
            </span>
            <Select
              label=""
              placeholder="All levels"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="All levels">All levels</Select.Item>
              <Select.Item value="Consultative">Consultative</Select.Item>
              <Select.Item value="Collaborative">Collaborative</Select.Item>
              <Select.Item value="Co-ownership">Co-ownership</Select.Item>
            </Select>
          </div>
          <div className="flex max-w-[260px] grow shrink-0 basis-0 flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color">
              Phase of intervention
            </span>
            <Select
              label=""
              placeholder="Any phase"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Any phase">Any phase</Select.Item>
              <Select.Item value="Conceptualisation">
                Conceptualisation
              </Select.Item>
              <Select.Item value="Design">Design</Select.Item>
              <Select.Item value="Development">Development</Select.Item>
              <Select.Item value="Deployment">Deployment</Select.Item>
              <Select.Item value="Evaluation">Evaluation</Select.Item>
              <Select.Item value="Monitoring">Monitoring</Select.Item>
            </Select>
          </div>
        </div>
        <div className="flex items-start pt-6">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Participant</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell sortable={true}>
                  Phase of intervention
                </Table.HeaderCell>
                <Table.HeaderCell sortable={true}>
                  Level of engagement
                </Table.HeaderCell>
                <Table.HeaderCell>Workspaces</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Maria Claramunt
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Associació Dones de la Memòria
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Community representative
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">Conceptualisation</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">Co-ownership</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Suffrage Correspondence
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Teresa Vidal
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    UB · Historia Contemporània
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">Design</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand">Co-ownership</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  All workspaces
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Jordi Fontcuberta
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Arxiu Nacional de Catalunya
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Archivist
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Development</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Collaborative</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Barcelona 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Elena Robles
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Consorci de Biblioteques
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Librarian
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Evaluation</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Collaborative</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Women in Catalan Press
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Martí Roca
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Historian · independent
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Domain expert
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Monitoring</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Consultative</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Seville Archivo Municipal
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full flex-col items-start pt-4">
          <Pagination position="first" />
        </div>
      </div>
    </div>
  );
}

export default Ui06StakeholderRegistry;
