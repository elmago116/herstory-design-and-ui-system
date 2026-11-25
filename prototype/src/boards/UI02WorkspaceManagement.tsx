"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Pagination } from "@/ui/components/Pagination";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { Table } from "@/ui/components/Table";
import { FeatherEye } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";

function Ui02WorkspaceManagement() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start px-2 py-2">
        <div className="flex flex-col items-start gap-2 pb-6 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Workspace management
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Create and manage workspaces across the platform.
          </span>
        </div>
        <span className="text-heading-2 font-heading-2 text-default-font">
          Filter
        </span>
        <div className="flex items-start gap-4">
          <div className="flex max-w-[360px] flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color">
              Status
            </span>
            <Select
              label=""
              placeholder="All workspaces"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="All workspaces">All workspaces</Select.Item>
              <Select.Item value="Active">Active</Select.Item>
              <Select.Item value="Paused">Paused</Select.Item>
              <Select.Item value="Archived">Archived</Select.Item>
            </Select>
          </div>
          <div className="flex max-w-[200px] grow shrink-0 basis-0 flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color">
              Member
            </span>
            <Select
              label=""
              placeholder="Any member"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Any member">Any member</Select.Item>
              <Select.Item value="You">You</Select.Item>
            </Select>
          </div>
        </div>
        <div className="flex items-start pt-6">
          <Table
            className="h-auto grow shrink-0 basis-0 self-stretch"
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Workspace</Table.HeaderCell>
                <Table.HeaderCell>Members</Table.HeaderCell>
                <Table.HeaderCell>Coordinator</Table.HeaderCell>
                <Table.HeaderCell>Data sources</Table.HeaderCell>
                <Table.HeaderCell>Mapping</Table.HeaderCell>
                <Table.HeaderCell>Ontology</Table.HeaderCell>
                <Table.HeaderCell sortable={true}>Status</Table.HeaderCell>
                <Table.HeaderCell>Last activity</Table.HeaderCell>
                <Table.HeaderCell sortable={true}>Enabled</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Barcelona 1912
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Census records
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">4</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Name
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">3</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">1</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">1</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Merged</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  2 hours ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <Switch
                  checked={true}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Inspect
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Women in Catalan Press
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Press &amp; periodicals
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">3</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Name
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Merged</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Yesterday
                </span>
              </Table.Cell>
              <Table.Cell>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Inspect
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Suffrage Correspondence
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Barcelona 1920s
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Name
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">1</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">1</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">1</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Paused</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  3 days ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Inspect
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Seville Archivo Municipal
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    City council archives
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">1</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Name
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">4</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">4</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">4</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error">Under review</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1 week ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Inspect
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Maritime Trade Register
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Valencia, 1860–1910
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">3</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Name
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">2</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Merged</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  3 days ago
                </span>
              </Table.Cell>
              <Table.Cell>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </Table.Cell>
              <Table.Cell>
                <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
                  <Button
                    variant="brand-secondary"
                    icon={<FeatherEye />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Inspect
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="flex w-full flex-col items-start pt-4">
          <Pagination position="first" />
        </div>
        <div className="flex w-full flex-wrap items-start gap-3">
          <span className="text-body font-body text-default-font">
            15 workspaces
          </span>
          <Badge variant="success">10 Merged</Badge>
          <Badge variant="warning">3 Paused</Badge>
          <Badge variant="error">2 Under review</Badge>
        </div>
        <div className="flex w-full flex-wrap items-start gap-3 pt-6">
          <Button
            variant="brand-primary"
            icon={<FeatherPlus />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Create workspace
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Edit workspace
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Sovereignty and quota
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui02WorkspaceManagement;
