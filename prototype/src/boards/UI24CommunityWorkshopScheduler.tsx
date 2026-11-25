"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Calendar } from "@/ui/components/Calendar";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheck } from "@/ui/core";
import { FeatherCheckCircle } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";

function Ui24CommunityWorkshopScheduler() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Citizen Science Sessions Scheduler
          </h1>
          <p className="text-body font-body text-subtext-color">
            Plan citizen science sessions…
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 rounded-md border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 mobile:px-0 mobile:py-8">
            <div className="flex flex-col items-start gap-1">
              <h2 className="text-heading-2 font-heading-2 text-default-font">
                Workshop settings
              </h2>
              <span className="text-caption font-caption text-subtext-color">
                Configure next session parameters
              </span>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-start gap-12 px-5 py-5">
              <div className="flex flex-col items-start gap-2 rounded-md bg-neutral-50 px-2 py-2">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Calendar
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Monthly view · workshop planning
                  </span>
                </div>
                <Calendar
                  className="w-full grow shrink-0 basis-0"
                  mode={"single"}
                  selected={new Date()}
                  onSelect={(date: Date | undefined) => {}}
                />
              </div>
              <div className="grow shrink-0 basis-0 flex-col items-start gap-3 rounded-md bg-neutral-50 px-2 py-2 grid grid-cols-2 mobile:flex-row mobile:gap-4 mobile:grid mobile:grid-cols-1">
                <TextField label="Location" helpText="Venue or meeting link">
                  <TextField.Input
                    placeholder="e.g. Ateneu Obrer, Barcelona"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField label="Purpose" helpText="Venue or meeting link">
                  <TextField.Input
                    placeholder="e.g. Ateneu Obrer, Barcelona"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField label="Coordinator" helpText="Venue or meeting link">
                  <TextField.Input
                    placeholder="e.g. Ateneu Obrer, Barcelona"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField
                  label="Participants"
                  helpText="Venue or meeting link"
                >
                  <TextField.Input
                    placeholder="e.g. Ateneu Obrer, Barcelona"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField label="Location" helpText="Venue or meeting link">
                  <TextField.Input
                    placeholder="e.g. Ateneu Obrer, Barcelona"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField
                  label="Max participants"
                  helpText="Maximum number of attendees"
                >
                  <TextField.Input
                    placeholder="e.g. 25"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
            </div>
            <Button
              className="h-10 w-full flex-none"
              variant="brand-primary"
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Schedule workshop
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Upcoming workshops
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Scheduled community sessions with status
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell sortable={true}>Workshop</Table.HeaderCell>
                  <Table.HeaderCell sortable={true}>Date</Table.HeaderCell>
                  <Table.HeaderCell>Location</Table.HeaderCell>
                  <Table.HeaderCell>Participants</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.HeaderRow>
              }
              density="comfortable"
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Women of El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    2026-11-15
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Ateneu Obrer, Barcelona
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    12
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Confirmed
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Oral Histories Workshop
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    2026-11-22
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Biblioteca de Catalunya
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    8
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Confirmed
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Mapping Census Data
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    2026-11-29
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Arxiu Històric
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    15
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Planned
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Wikidata Edit-a-thon
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    2026-12-06
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Online (Meet)
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    20
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Planned
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Provenance Review Session
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    2026-12-13
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Ateneu Obrer, Barcelona
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    6
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="brand" icon={<FeatherInfo />}>
                    Done
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <Alert
            variant="success"
            icon={<FeatherCheckCircle />}
            title="Last workshop (2026-10-30): 9 participants, 2 categories reviewed"
            description=""
          />
        </div>
      </div>
    </div>
  );
}

export default Ui24CommunityWorkshopScheduler;
