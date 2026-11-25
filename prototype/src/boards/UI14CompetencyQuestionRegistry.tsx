"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { IconButton } from "@/ui/components/IconButton";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheck } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherEdit2 } from "@/ui/core";
import { FeatherEye } from "@/ui/core";
import { FeatherFileText } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import { FeatherShare2 } from "@/ui/core";
import { FeatherX } from "@/ui/core";

function Ui14CompetencyQuestionRegistry() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <div className="flex w-full items-start justify-between gap-6">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                Competency question registry
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                Formulate, test, and validate competency questions that define
                what the knowledge graph must answer for historical
                interpretability.
              </span>
            </div>
            <Button
              size="medium"
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              New CQ
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Competency questions
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              5 registered questions · 3 approved · 1 needs review · 1 archived
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell sortable={true} sort="ascending">
                    Code
                  </Table.HeaderCell>
                  <Table.HeaderCell>Question</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Facets</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Runs</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    CQ-01
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Which women of El Raval were registered as seamstresses in
                    1912?
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Approved
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    4
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherShare2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    CQ-02
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    What labour associations existed in Barcelona’s Raval
                    district (1900–1920)?
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Approved
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    8
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherShare2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    CQ-03
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Which women appear in both the 1912 census and Ateneu Obrer
                    membership rolls?
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Needs review
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    5
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherShare2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    CQ-04
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    What was the average wage for a seamstress in Barcelona
                    between 1900 and 1915?
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Approved
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    6
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherShare2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    CQ-05
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    How many women in El Raval were registered as heads of
                    household in the 1912 census?
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="neutral" icon={<FeatherFileText />}>
                    Archived
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    3
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    4
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherEdit2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    icon={<FeatherShare2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Faceted query builder
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Compose filters against the knowledge graph to test your
              competency question.
            </span>
          </div>
          <div className="flex w-full items-start gap-8">
            <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
              <span className="text-body-bold font-body-bold text-default-font">
                Query filters
              </span>
              <Combobox
                label="Target class"
                placeholder="Person"
                value=""
                helpText="Wikidata entity class to filter for the query"
              />
              <div className="flex flex-col items-start gap-3">
                <span className="text-caption font-caption text-subtext-color">
                  Facet 1
                </span>
                <div className="flex items-center gap-3">
                  <Select
                    label="Property"
                    placeholder="Property"
                    helpText=""
                    value={undefined}
                    onValueChange={(value: string) => {}}
                  >
                    <Select.Item value="Occupation">Occupation</Select.Item>
                    <Select.Item value="Location">Location</Select.Item>
                    <Select.Item value="Gender">Gender</Select.Item>
                  </Select>
                  <Select
                    label="Operator"
                    placeholder="Operator"
                    helpText=""
                    value={undefined}
                    onValueChange={(value: string) => {}}
                  >
                    <Select.Item value="equals">equals</Select.Item>
                    <Select.Item value="contains">contains</Select.Item>
                    <Select.Item value="greater than">greater than</Select.Item>
                  </Select>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Value
                    </span>
                    <TextField label="" helpText="">
                      <TextField.Input
                        placeholder="Value"
                        value=""
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                      />
                    </TextField>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-lg border-2 border-solid border-focus">
                <Button
                  variant="brand-primary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  AND
                </Button>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  OR
                </Button>
              </div>
              <div className="flex flex-col items-start gap-3">
                <span className="text-caption font-caption text-subtext-color">
                  Facet 2
                </span>
                <div className="flex items-center gap-3">
                  <Select
                    label="Property"
                    placeholder="Property"
                    helpText=""
                    value={undefined}
                    onValueChange={(value: string) => {}}
                  >
                    <Select.Item value="Occupation">Occupation</Select.Item>
                    <Select.Item value="Location">Location</Select.Item>
                    <Select.Item value="Gender">Gender</Select.Item>
                  </Select>
                  <Select
                    label="Operator"
                    placeholder="Operator"
                    helpText=""
                    value={undefined}
                    onValueChange={(value: string) => {}}
                  >
                    <Select.Item value="equals">equals</Select.Item>
                    <Select.Item value="contains">contains</Select.Item>
                    <Select.Item value="greater than">greater than</Select.Item>
                  </Select>
                  <div className="flex flex-col items-start">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Value
                    </span>
                    <TextField label="" helpText="">
                      <TextField.Input
                        placeholder="Value"
                        value=""
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                      />
                    </TextField>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
              <div className="flex flex-col items-start gap-1">
                <h2 className="text-heading-2 font-heading-2 text-default-font">
                  Generated SPARQL
                </h2>
                <span className="text-caption font-caption text-subtext-color">
                  Preview the query that will be run against the endpoint.
                </span>
              </div>
              <div className="flex flex-col items-start rounded-md border border-solid border-neutral-50 bg-neutral-50 px-3 py-2 overflow-x-auto">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  SELECT ?person WHERE &#123;
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
                  &#125;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12 mobile:pt-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Expected vs actual
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Compare the expected result count against the actual query
              response.
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Expected count</Table.HeaderCell>
                  <Table.HeaderCell>Actual count</Table.HeaderCell>
                  <Table.HeaderCell>Delta</Table.HeaderCell>
                  <Table.HeaderCell>Note</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    128
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
                  <span className="text-body font-body text-default-font">
                    12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    10
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="error" icon={<FeatherX />}>
                    −2
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    2 entities missing — check source alignment
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    24
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    27
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

export default Ui14CompetencyQuestionRegistry;
