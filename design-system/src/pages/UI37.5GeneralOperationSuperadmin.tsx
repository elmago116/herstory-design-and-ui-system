"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { LanguageSelector } from "@/ui/components/LanguageSelector";
import { SidebarWithSections } from "@/ui/components/SidebarWithSections";
import { WorkspaceSelector } from "@/ui/components/WorkspaceSelector";
import { FeatherActivity } from "@subframe/core";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCompass } from "@subframe/core";
import { FeatherFlaskConical } from "@subframe/core";
import { FeatherHelpCircle } from "@subframe/core";
import { FeatherImport } from "@subframe/core";
import { FeatherLayers } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherSun } from "@subframe/core";

function Ui375GeneralOperationSuperadmin() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end bg-default-background">
        <header className="flex max-h-[120px] w-full items-center justify-between border-b border-solid border-neutral-border bg-default-background px-6 py-6 gap-4 mobile:px-4 mobile:py-0">
          <img
            className="flex-none self-stretch object-contain"
            src="https://res.cloudinary.com/subframe/image/upload/v1794238443/uploads/46244/hppnuvhehgcglyrtlpne.png"
          />
          <div className="flex flex-col items-end justify-between">
            <div className="flex items-center gap-2">
              <LanguageSelector state="default" code="CA" />
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
              <Badge variant="neutral">Superadmin</Badge>
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
            <SidebarWithSections.NavSection label="Governance and administration">
              <SidebarWithSections.NavItem icon={<FeatherSettings />}>
                Overview
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Policy and authority
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Consent and GDPR
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>Users</SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Workspaces
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Participation and justice">
              <SidebarWithSections.NavItem icon={<FeatherLayers />}>
                Stakeholders
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Vocabulary review
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Objections
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Epistemic Justice checklist
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
                Audit logs
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Ingestion and mapping">
              <SidebarWithSections.NavItem icon={<FeatherImport />}>
                Sources
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>Mapping</SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Ontology
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Explainability">
              <SidebarWithSections.NavItem icon={<FeatherFlaskConical />}>
                CQ registry 
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                &quot;LLM suggestions&quot;
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="KG exploration">
              <SidebarWithSections.NavItem icon={<FeatherCompass />}>
                Graph
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Query builder
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
          </SidebarWithSections>
          <main className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch px-8 py-8">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Governance overview
                </span>
                <span className="text-body font-body text-subtext-color">
                  Policies, consent and audit activity across every workspace.
                </span>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Open policies
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    3
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    1 awaiting review
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Consent coverage
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    92%
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    2 workshop consents pending
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Audit events · 24h
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    41
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    1 flagged for review
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full items-center justify-between">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Workspaces
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    5 workspaces · 3 with active runs
                  </span>
                </div>
                <div className="flex w-full flex-wrap items-end gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      User
                    </span>
                    <div className="flex h-10 w-48 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 text-body font-body text-default-font outline-none">
                      <span className="text-body font-body text-default-font">
                        All roles
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      Workspace
                    </span>
                    <div className="flex h-10 w-48 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 text-body font-body text-default-font outline-none">
                      <span className="text-body font-body text-default-font">
                        All workspaces
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      Advance
                    </span>
                    <div className="flex h-10 w-48 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 text-body font-body text-default-font outline-none">
                      <span className="text-body font-body text-default-font">
                        All stages
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Apply
                  </Button>
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
                      <Badge variant="neutral">coordinator: EG</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        6 datasets · 250 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        3 users · last audit 15 Nov
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        stage: mapping
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5 cursor-pointer">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        SIDBRINT
                      </span>
                      <Badge variant="success">active</Badge>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                      <Badge variant="neutral">coordinator: JM</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        3 datasets · 112 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        2 users · last audit 5 Nov
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        stage: validation
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5 cursor-pointer">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Cultura y censura
                      </span>
                      <Badge variant="warning">review</Badge>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                      <Badge variant="neutral">coordinator: IV</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        8 datasets · 845 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        5 users · last audit 28 Oct
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        stage: review
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5 cursor-pointer">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Peninsula
                      </span>
                      <Badge variant="neutral">archived</Badge>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                      <Badge variant="neutral">coordinator: ML</Badge>
                      <span className="text-caption font-caption text-subtext-color">
                        15 datasets · 3400 triples
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        6 users · last audit 20 Sep
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        stage: complete
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
                        · 4 general processes
                      </span>
                    </div>
                    <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                      2 still to comply
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
                          Validation
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          38 records flagged · SHACL check needed
                        </span>
                      </div>
                      <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                        Needs review
                      </Badge>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        4
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Mapping
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          0 rules · queued after validation
                        </span>
                      </div>
                      <Badge variant="neutral">Not started</Badge>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-4 gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="success" icon={<FeatherCheck />}>
                        2 accomplished
                      </Badge>
                      <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                        2 still to comply
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
                    Review authority matrix
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    New policy
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Export audit
                  </Button>
                </div>
                <span className="text-caption font-caption text-subtext-color">
                  Pipeline authoring is read-only in this role; source and
                  mapping actions stay with coordinators.
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ui375GeneralOperationSuperadmin;
