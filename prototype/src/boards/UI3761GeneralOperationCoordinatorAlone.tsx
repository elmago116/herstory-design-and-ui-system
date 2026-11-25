"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { ContextMenu } from "@/ui/components/ContextMenu";
import { IconButton } from "@/ui/components/IconButton";
import { LanguageSelector } from "@/ui/components/LanguageSelector";
import { SidebarWithSections } from "@/ui/components/SidebarWithSections";
import { WorkspaceSelector } from "@/ui/components/WorkspaceSelector";
import { FeatherActivity } from "@/ui/core";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherCompass } from "@/ui/core";
import { FeatherComponent } from "@/ui/core";
import { FeatherCopy } from "@/ui/core";
import { FeatherEyeOff } from "@/ui/core";
import { FeatherFlaskConical } from "@/ui/core";
import { FeatherHelpCircle } from "@/ui/core";
import { FeatherImport } from "@/ui/core";
import { FeatherLayers } from "@/ui/core";
import { FeatherSettings } from "@/ui/core";
import { FeatherSun } from "@/ui/core";
import { FeatherTrash } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui3761GeneralOperationCoordinatorAlone() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start bg-default-background">
        <header className="flex max-h-[120px] w-full items-center justify-between border-b border-solid border-neutral-border bg-default-background px-6 py-6 gap-4 mobile:px-4 mobile:py-0">
          <img
            className="flex-none self-stretch object-contain"
            src="https://res.cloudinary.com/subframe/image/upload/v1794238443/uploads/46244/hppnuvhehgcglyrtlpne.png"
          />
          <div className="flex flex-col items-end justify-between">
            <div className="flex items-center gap-2">
              <LanguageSelector state="default" code="ENG" />
              <IconButton
                icon={<FeatherHelpCircle />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                icon={<FeatherSun />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <span className="text-body-bold font-body-bold text-default-font">
                Elena Gómez
              </span>
              <Badge variant="neutral">Coordinator</Badge>
              <Avatar variant="neutral" image="">
                EG
              </Avatar>
            </div>
            <div className="flex items-center gap-2 px-3 pt-3">
              <span className="text-caption font-caption text-default-font">
                Workspace
              </span>
              <WorkspaceSelector
                state="selected"
                workspaceName="Barcelona 1912"
              >
                <WorkspaceSelector.WorkspaceOption
                  name="Barcelona 1912"
                  location="Local"
                  selected={true}
                />
                <WorkspaceSelector.WorkspaceOption
                  name="Women in Catalan Press"
                  location="Remote · eu-west"
                />
              </WorkspaceSelector>
            </div>
          </div>
        </header>
        <div className="flex w-full items-center border-b border-solid border-neutral-border bg-default-background px-6 py-2">
          <Breadcrumbs>
            <Breadcrumbs.Item>Provenance and observability</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <Breadcrumbs.Item active={true}>
              Pipeline dashboard
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start">
          <SidebarWithSections className="h-auto w-auto flex-none self-stretch">
            <SidebarWithSections.NavSection label="Ingestion and mapping">
              <SidebarWithSections.NavItem icon={<FeatherImport />}>
                Sources
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Ingestion monitor
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Ontology
              </SidebarWithSections.NavItem>
              <SubframeCore.ContextMenu.Root>
                <SubframeCore.ContextMenu.Trigger asChild={true}>
                  <SidebarWithSections.NavItem>
                    Mapping editor
                  </SidebarWithSections.NavItem>
                </SubframeCore.ContextMenu.Trigger>
                <SubframeCore.ContextMenu.Portal>
                  <SubframeCore.ContextMenu.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <ContextMenu>
                      <ContextMenu.ContextItem icon={<FeatherCheck />}>
                        Enabled
                      </ContextMenu.ContextItem>
                      <ContextMenu.ContextItem icon={<FeatherEyeOff />}>
                        Hide
                      </ContextMenu.ContextItem>
                      <ContextMenu.ContextItem
                        icon={null}
                        rightSlot={<Badge variant="neutral">⌘G</Badge>}
                      >
                        Wrap with stack
                      </ContextMenu.ContextItem>
                      <ContextMenu.ContextDivider />
                      <ContextMenu.ContextItem icon={<FeatherComponent />}>
                        Create component
                      </ContextMenu.ContextItem>
                      <ContextMenu.ContextItem icon={null}>
                        View code
                      </ContextMenu.ContextItem>
                      <ContextMenu.ContextItem
                        icon={<FeatherCopy />}
                        rightSlot={<Badge variant="neutral">⌘C</Badge>}
                      >
                        Copy
                      </ContextMenu.ContextItem>
                      <ContextMenu.ContextItem
                        icon={<FeatherTrash />}
                        rightSlot={<Badge variant="neutral">⌘D</Badge>}
                      >
                        Delete
                      </ContextMenu.ContextItem>
                    </ContextMenu>
                  </SubframeCore.ContextMenu.Content>
                </SubframeCore.ContextMenu.Portal>
              </SubframeCore.ContextMenu.Root>
              <SidebarWithSections.NavItem>
                Staging review
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Explainability">
              <SidebarWithSections.NavItem icon={<FeatherFlaskConical />}>
                CQ registry
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                LLM suggestions
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Provenance and observability">
              <SidebarWithSections.NavItem
                icon={<FeatherActivity />}
                selected={true}
              >
                Pipeline dashboard
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Provenance and polyvocality
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Absence registry
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Participation and justice">
              <SidebarWithSections.NavItem icon={<FeatherLayers />}>
                Vocabulary review
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Objections
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                EJ checklist
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Governance and administration">
              <SidebarWithSections.NavItem icon={<FeatherSettings />}>
                Policy · read only
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Stakeholders · read only
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="KG exploration">
              <SidebarWithSections.NavItem icon={<FeatherCompass />}>
                Graph
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>Query</SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
          </SidebarWithSections>
          <main className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch px-8 py-8">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Pipeline overview
                </span>
                <span className="text-body font-body text-subtext-color">
                  Sources, runs and staging for Barcelona 1912.
                </span>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Active runs
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    2
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    1 OCR stage failed
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Staged triples
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    250
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    178 reviewed
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Flagged
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    12
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    drift 7 · coupling 5
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6 rounded-lg bg-background-alt px-6 py-6">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Workspaces
                </span>
                <div className="flex w-full flex-wrap items-center gap-6">
                  <span className="text-body font-body text-subtext-color">
                    3 workspaces · 2 active · Barcelona 1912selected
                  </span>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    2 accomplishes
                  </Badge>
                  <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                    4 pending processes
                  </Badge>
                </div>
                <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                  <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border-2 border-solid border-brand-primary bg-default-background px-5 py-5 cursor-pointer">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Barcelona 1912
                      </span>
                      <Badge variant="success">active</Badge>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                      <Badge variant="neutral">coordinator</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        6 datasets · 250 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        last activity 15 Nov
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        2 active runs
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5 cursor-pointer">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        SIDBRINT
                      </span>
                      <Badge variant="neutral">active</Badge>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                      <Badge variant="neutral">collaborator</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        3 datasets · 112 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        last activity 5 Nov
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        1 active run
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5 cursor-pointer">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Cultura y censura
                      </span>
                      <Badge variant="neutral">archived</Badge>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                      <Badge variant="neutral">read only</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        8 datasets · 845 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        last activity 28 Oct
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2 items-baseline">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Barcelona 1912
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        · 6 general processes
                      </span>
                    </div>
                    <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                      4 still to comply
                    </Badge>
                  </div>
                  <div className="w-full items-start gap-4 grid grid-cols-1">
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-brand-700 flex items-center justify-center rounded-full bg-brand-50">
                        1
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Source registration
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          14 sources registered · 0 pending
                        </span>
                      </div>
                      <Badge variant="success" icon={<FeatherCheck />}>
                        Complete
                      </Badge>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-brand-700 flex items-center justify-center rounded-full bg-brand-50">
                        2
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Ingestion monitor
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          2 runs active · 1 OCR stage failed
                        </span>
                      </div>
                      <Badge variant="success" icon={<FeatherCheck />}>
                        In progress
                      </Badge>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-warning-800 flex items-center justify-center rounded-full bg-warning-50">
                        3
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Ontology
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          4 classes drafted · mapping editor pending
                        </span>
                      </div>
                      <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                        Pending
                      </Badge>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        4
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Mapping editor
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          0 mapping rules · pending ontology review
                        </span>
                      </div>
                      <Badge variant="neutral">Not started</Badge>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        5
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Staging review
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          250 staged triples · 12 flagged conflicts
                        </span>
                      </div>
                      <Badge variant="neutral">Not started</Badge>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        6
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          CQ registry
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          2 CQs registered · 0 automatically checked
                        </span>
                      </div>
                      <Badge variant="neutral">Pending</Badge>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-4 gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="success" icon={<FeatherCheck />}>
                        2 accomplished
                      </Badge>
                      <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                        4 still to comply
                      </Badge>
                    </div>
                    <Button
                      variant="brand-primary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Open workspace
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Next actions
                </span>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <Button
                    variant="brand-primary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Open ingestion monitor
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Run transformation
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review staging
                  </Button>
                </div>
                <span className="text-caption font-caption text-subtext-color">
                  Pipeline groups come first in this role; governance stays
                  visible but read-only.
                </span>
              </div>
              <Alert
                variant="warning"
                icon={<FeatherAlertTriangle />}
                title="12 triples need adjudication before publication"
                description="Batch staging-2026-11-02a holds drift and coupling conflicts; the EJ checklist blocks publication until they are resolved."
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ui3761GeneralOperationCoordinatorAlone;
