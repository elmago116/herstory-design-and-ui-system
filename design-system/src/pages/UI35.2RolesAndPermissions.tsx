"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table";

function Ui352RolesPermissions() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2 pb-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · HELP
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Roles &amp; permissions
          </h1>
          <p className="text-body font-body text-subtext-color">
            Coordinator and viewer access
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Role matrix
          </h2>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Can edit</Table.HeaderCell>
                <Table.HeaderCell>Can publish</Table.HeaderCell>
                <Table.HeaderCell>Can invite</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Superadmin
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  All workspaces
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Yes
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Yes
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Own projects
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Yes
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Yes
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Reviewer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Assigned entities
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  No
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  No
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Inquirer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  No
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  No
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  No
                </span>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <p className="text-body font-body text-subtext-color">
          Superadmins manage every workspace and role, coordinators run the
          projects they own, reviewers verify the entities assigned to them, and
          inquirers can only read already published knowledge graphs.
        </p>
        <div className="flex w-full items-center justify-end">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Back to help
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui352RolesPermissions;
