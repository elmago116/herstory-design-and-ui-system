"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { IconButton } from "@/ui/components/IconButton";
import { Progress } from "@/ui/components/Progress";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherEdit2 } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";

function Ui18WikidataResolver() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Wikidata resolver &amp; alias manager
          </h1>
          <p className="text-body font-body text-subtext-color">
            Match local names to Wikidata entities, manage aliases
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-border py-8">
          <Combobox
            className="h-auto w-full flex-none"
            label=""
            placeholder="Resolve local name…"
            value=""
            helpText=""
          />
          <div className="flex flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Resolved entity
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  local:merce-puig → Q55983715
                </span>
              </div>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Accept
              </Button>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Match confidence
              </span>
              <Badge variant="success" icon={<FeatherCheck />}>
                Match score
              </Badge>
            </div>
            <Progress value={92} />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 border-t border-solid border-neutral-border py-8">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Registered aliases
          </h2>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Local name</Table.HeaderCell>
                  <Table.HeaderCell>Wikidata QID</Table.HeaderCell>
                  <Table.HeaderCell>Wikidata item </Table.HeaderCell>
                  <Table.HeaderCell>Confidence</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    merce-puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Q55983715
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    organisms known by a particular common name
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    High
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherCheck />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    rosa-serra
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Q14902344
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-pre-wrap text-body font-body text-neutral-500">
                    {"Phyllopertha irregularis"}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    High
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherCheck />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    teresa-vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Q87214509
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    Author&#39;s response
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherInfo />}>
                    Medium
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    carme-rius
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Q30457281
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    Microglia - the brain&#39;s busy bees
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    High
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherCheck />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    anna-miralles
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    —
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    -
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-col items-start gap-1">
                    <Badge variant="warning" icon={<FeatherInfo />}>
                      Ambiguous
                    </Badge>
                    <span className="text-caption font-caption text-subtext-color">
                      2 candidates
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border-t border-solid border-neutral-border py-8">
          <div className="flex w-full items-end gap-4">
            <TextField
              className="h-auto grow shrink-0 basis-0"
              label="New alias"
              helpText=""
            >
              <TextField.Input
                placeholder="local-name"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <Button
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Add
            </Button>
          </div>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="Local HS: identifiers are valid even without a QID"
          description="REQ-11.2.2"
        />
      </div>
    </div>
  );
}

export default Ui18WikidataResolver;
