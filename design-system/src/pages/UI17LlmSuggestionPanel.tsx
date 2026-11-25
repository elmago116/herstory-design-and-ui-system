"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { Switch } from "@/ui/components/Switch";
import { Table } from "@/ui/components/Table";
import { Trace } from "@/ui/components/Trace";
import { FeatherArrowBigRight } from "@subframe/core";
import { FeatherBot } from "@subframe/core";
import { FeatherCheckSquare } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherPersonStanding } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function Ui17LlmSuggestionPanel() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-4">
        <div className="flex w-full flex-col items-start gap-2 pb-2 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            LLM triple suggestion panel
          </h1>
          <p className="text-body font-body text-subtext-color">
            Suggestions are hypotheses until a human validates them
          </p>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border px-6 py-6">
          <div className="flex flex-col items-start">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Support from a DB reasoner
            </span>
            <span className="text-caption font-caption text-subtext-color">
              LLM reasoning path for the selected suggestion
            </span>
          </div>
          <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pl-2 pr-6 pt-2 pb-6 self-stretch">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Reasoning trace
            </span>
            <Trace
              title="Reasoning path for wd:Q123456 wdt:P106 wd:Q11997032"
              summary="3 steps · 1.2s"
              state="expanded"
            >
              <Trace.Step
                title="Retrieved context"
                duration="0.4s"
                detail="Source: 1912 census, folio 214"
                status="done"
              />
              <Trace.Step
                title="Suggested triple"
                duration="0.6s"
                detail="wd:Q123456 → occupation → Seamstress"
                status="done"
                expanded={true}
              />
              <Trace.Step
                title="Confidence 0.82"
                duration="0.2s"
                detail="Sources: 3 · agreement: high"
                status="done"
                last={true}
              />
            </Trace>
            <div className="flex items-start gap-6">
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Require human gate for new suggestions
              </Button>
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Accept and add
              </Button>
            </div>
          </div>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title="Hypotheses, not history — every LLM triple needs human validation"
          description=""
        />
        <div className="flex w-full flex-col items-start gap-10 rounded-lg border border-solid border-neutral-border px-3.5 py-3.5 overflow-x-auto">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Re
          </span>
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Triple</Table.HeaderCell>
                <Table.HeaderCell>Confidence</Table.HeaderCell>
                <Table.HeaderCell>Epistemic risk</Table.HeaderCell>
                <Table.HeaderCell>Provider</Table.HeaderCell>
                <Table.HeaderCell>Model</Table.HeaderCell>
                <Table.HeaderCell>Approved?</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.HeaderRow>
            }
            density="comfortable"
          >
            <Table.Row>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  wd:Q123456 wdt:P106 wd:Q11997032
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">High</Badge>
              </Table.Cell>
              <Table.Cell>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <Button
                      variant="neutral-secondary"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Dropdown
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
                        <DropdownMenu.DropdownItem>
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  OpenAI
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  GPT-4
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  yes
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  no
                </span>
              </Table.Cell>
              <Table.Cell className="h-auto grow shrink-0 basis-0">
                <div className="flex items-center gap-1">
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    icon={<FeatherCheckSquare />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Add
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    icon={<FeatherPersonStanding />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    icon={<FeatherBot />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  wd:Q987021 wdt:P19 wd:Q1492
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Med</Badge>
              </Table.Cell>
              <Table.Cell>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <Button
                      variant="neutral-secondary"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Dropdown
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
                        <DropdownMenu.DropdownItem>
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Anthropic
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Claude 3
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  yes
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  no
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherCheckSquare />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Add
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherArrowBigRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherBot />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  wd:Q6581072 wdt:P21 wd:Q48270
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">Low</Badge>
              </Table.Cell>
              <Table.Cell>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <Button
                      variant="neutral-secondary"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Dropdown
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
                        <DropdownMenu.DropdownItem>
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Meta
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  LLaMA 3
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  yes
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  no
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherCheckSquare />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Add
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherArrowBigRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherBot />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  wd:Q456789 wdt:P39 wd:Q167078
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">High</Badge>
              </Table.Cell>
              <Table.Cell>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <Button
                      variant="neutral-secondary"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Dropdown
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
                        <DropdownMenu.DropdownItem>
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  OpenAI
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  GPT-4
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  yes
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  no
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherCheckSquare />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Add
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherArrowBigRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherBot />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  wd:Q234567 wdt:P26 wd:Q345678
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">Med</Badge>
              </Table.Cell>
              <Table.Cell>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <Button
                      variant="neutral-secondary"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Dropdown
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
                        <DropdownMenu.DropdownItem>
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Google
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  Gemini Pro
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  yes
                </span>
                <Switch
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <span className="text-body font-body text-default-font">
                  no
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherCheckSquare />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Add
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherArrowBigRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherBot />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Review
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Ui17LlmSuggestionPanel;
