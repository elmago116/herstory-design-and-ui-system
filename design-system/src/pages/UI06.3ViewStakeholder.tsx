"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui063ViewStakeholder() {
  return (
    <div className="flex h-full w-full items-start justify-end bg-[#00000099]">
      <div className="flex w-[520px] flex-none flex-col items-start gap-6 self-stretch rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-2 font-heading-2 text-default-font">
            Maria Claramunt
          </h1>
          <div className="flex w-full flex-wrap items-center gap-2">
            <Badge variant="brand">Co-ownership</Badge>
            <span className="text-caption font-caption text-subtext-color">
              Community representative · Associació Dones de la Memòria
            </span>
          </div>
        </div>
        <div className="w-full items-start gap-4 grid grid-cols-2">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <span className="text-caption font-caption text-subtext-color">
              Affiliation
            </span>
            <span className="text-body font-body text-default-font">
              Associació Dones de la Memòria
            </span>
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <span className="text-caption font-caption text-subtext-color">
              Phase
            </span>
            <span className="text-body font-body text-default-font">
              Conceptualisation
            </span>
          </div>
          <div className="grow shrink-0 basis-0 items-start gap-4 col-span-2 grid grid-cols-2">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Workspaces
              </span>
              <span className="text-body font-body text-default-font">
                Suffrage Correspondence
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Consent
              </span>
              <span className="text-body font-body text-default-font">
                Granted · informed consent on file
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Engagement history
          </h2>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Phase</Table.HeaderCell>
                <Table.HeaderCell>Channel</Table.HeaderCell>
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  14 Feb 2025
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Conceptualisation
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Co-design workshop
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  28 May 2025
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Design
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Advisory meeting
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  09 Oct 2025
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Design
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Written review
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-neutral-border pt-4 mt-auto">
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
            Edit stakeholder
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui063ViewStakeholder;
