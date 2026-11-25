"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { Pagination } from "@/ui/components/Pagination";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function Ui01UserManagement() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full items-start justify-between pb-8 gap-6">
          <div className="flex flex-col items-start gap-1">
            <span className="text-micro font-micro text-subtext-color uppercase">
              HERSTORY · SUPERADMIN
            </span>
            <h1 className="text-heading-1 font-heading-1 text-brand-primary">
              User management
            </h1>
            <p className="text-body font-body text-subtext-color">
              Accounts, roles and workspace access across the platform.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-secondary"
                  icon={<FeatherFileText />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Export
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={null}>
                      .csv
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      .pdf
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      .json
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
            <Button
              variant="brand-primary"
              icon={<FeatherPlus />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Invite user
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center gap-3 border-t border-solid border-neutral-border py-4">
          <span className="text-caption font-caption text-subtext-color">
            24 accounts
          </span>
          <Badge variant="success" icon={<FeatherCheck />}>
            19 active
          </Badge>
          <Badge variant="warning" icon={<FeatherClock />}>
            3 pending
          </Badge>
          <Badge variant="error" icon={<FeatherX />}>
            2 suspended
          </Badge>
          <span className="text-caption font-caption text-subtext-color">
            Last sync 2 hours ago
          </span>
        </div>
        <div className="flex w-full flex-wrap items-end gap-3 pb-6">
          <Combobox
            className="h-auto w-[340px] flex-none"
            state="default"
            label="Search"
            placeholder="Name or email…"
            value=""
            helpText=""
          />
          <Select
            className="h-auto w-[190px] flex-none"
            label="Role"
            placeholder="All roles"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Superadmin">Superadmin</Select.Item>
            <Select.Item value="Coordinator">Coordinator</Select.Item>
            <Select.Item value="Reviewer">Reviewer</Select.Item>
            <Select.Item value="Inquirer">Inquirer</Select.Item>
          </Select>
          <Select
            className="h-auto w-[190px] flex-none"
            label="Status"
            placeholder="All statuses"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Active">Active</Select.Item>
            <Select.Item value="Pending">Pending</Select.Item>
            <Select.Item value="Suspended">Suspended</Select.Item>
          </Select>
        </div>
        <div className="flex w-full flex-col items-start overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell sortable={true} sort="ascending">
                  Name
                </Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Workspace access</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Last active</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Mercè Puig
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  merce.puig@ub.edu
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Superadmin
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  All workspaces
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Active
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-body font-body text-subtext-color">
                  2 hours ago
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Teresa Vidal
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  t.vidal@ub.edu
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Barcelona 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Active
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-body font-body text-subtext-color">
                  Yesterday
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Rosa Serra
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  r.serra@gencat.cat
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Coordinator
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Women in Catalan Press
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherClock />}>
                  Pending
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Laia Font
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  laia.font@ub.edu
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Reviewer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Barcelona 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Active
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-body font-body text-subtext-color">
                  3 days ago
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Núria Bosch
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  n.bosch@ub.edu
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Inquirer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error" icon={<FeatherX />}>
                  Suspended
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-body font-body text-subtext-color">
                  2 weeks ago
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Marta Riera
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  m.riera@ub.edu
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Inquirer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Suffrage Correspondence
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand" icon={<FeatherUser />}>
                  Invited
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="whitespace-nowrap text-body font-body text-subtext-color">
                  —
                </span>
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

export default Ui01UserManagement;
