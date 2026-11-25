"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { LanguageSelector } from "@/ui/components/LanguageSelector";
import { SidebarWithSections } from "@/ui/components/SidebarWithSections";
import { Table } from "@/ui/components/Table";
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

function Ui3762GeneralOperationCoordinatorTeam() {
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
            <Breadcrumbs.Item>Team and quality gates</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <Breadcrumbs.Item active={true}>Overview</Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start">
          <SidebarWithSections>
            <SidebarWithSections.NavSection label="Team and quality gates">
              <SidebarWithSections.NavItem
                icon={<FeatherSettings />}
                selected={true}
              >
                Overview
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem
                icon={<FeatherLayers />}
                rightSlot={<Badge variant="neutral">5</Badge>}
              >
                Team work
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem
                icon={<FeatherActivity />}
                rightSlot={<Badge variant="warning">1</Badge>}
              >
                Quality gates
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
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
              <SidebarWithSections.NavItem>
                Mapping editor
              </SidebarWithSections.NavItem>
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
              <SidebarWithSections.NavItem icon={<FeatherActivity />}>
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
                Graph · read only
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Query · read only
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
          </SidebarWithSections>
          <main className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch px-8 py-8">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Team and quality gates
                </span>
                <span className="text-body font-body text-subtext-color">
                  Delegate technical work, review outputs and own the gates
                  before anything reaches Wikidata.
                </span>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Open delegations
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    5
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    2 due today
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Awaiting your review
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    3
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    data 1 · ontology 1 · research 1
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-caption font-caption text-subtext-color">
                    Gates blocking
                  </span>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    1
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    publication waiting on revisor
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full items-center justify-between">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Workspaces
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    3 workspaces · Barcelona 1912 selected
                  </span>
                </div>
                <div className="flex w-full flex-wrap items-end gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      User role
                    </span>
                    <div className="flex h-10 w-44 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 text-body font-body text-default-font outline-none">
                      <span className="text-body font-body text-default-font">
                        All roles
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      Workspace
                    </span>
                    <div className="flex h-10 w-44 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 text-body font-body text-default-font outline-none">
                      <span className="text-body font-body text-default-font">
                        All workspaces
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      Advance
                    </span>
                    <div className="flex h-10 w-44 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 text-body font-body text-default-font outline-none">
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
                    <div className="flex w-full flex-wrap items-center gap-1">
                      <Badge variant="neutral" icon={<FeatherCheck />}>
                        curador de datos
                      </Badge>
                      <Badge variant="neutral">ontólogo</Badge>
                      <Badge variant="warning">revisor</Badge>
                      <Badge variant="success">asistente</Badge>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        5 team members
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        3 datasets · 250 triples
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
                    <div className="flex w-full flex-wrap items-center gap-1">
                      <Badge variant="neutral" icon={<FeatherCheck />}>
                        curador de datos
                      </Badge>
                      <Badge variant="neutral">ontólogo</Badge>
                      <Badge variant="neutral">asistente</Badge>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        3 team members
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        3 datasets · 112 triples
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
                    <div className="flex w-full flex-wrap items-center gap-1">
                      <Badge variant="neutral" icon={<FeatherCheck />}>
                        curador de datos
                      </Badge>
                      <Badge variant="neutral">ontólogo</Badge>
                      <Badge variant="warning">revisor</Badge>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        6 team members
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        8 datasets · 845 triples
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
                    <div className="flex w-full flex-wrap items-center gap-1">
                      <Badge variant="neutral" icon={<FeatherCheck />}>
                        ontólogo
                      </Badge>
                      <Badge variant="success">asistente</Badge>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-caption font-caption text-subtext-color">
                        2 team members
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        ·
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        15 datasets · 3400 triples
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
                        · 5 team members · 6 general processes
                      </span>
                    </div>
                    <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                      4 still to comply
                    </Badge>
                  </div>
                  <div className="flex w-full flex-col items-start gap-3">
                    <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-brand-700 flex items-center justify-center rounded-full bg-brand-50">
                        1
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Source registration
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          14 sources · curador: Marta Puig
                        </span>
                      </div>
                      <Badge variant="success" icon={<FeatherCheck />}>
                        Complete
                      </Badge>
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-brand-700 flex items-center justify-center rounded-full bg-brand-50">
                        2
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Ingestion monitor
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          2 active runs · curadora: Rosa Serra
                        </span>
                      </div>
                      <Badge variant="success" icon={<FeatherCheck />}>
                        In progress
                      </Badge>
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-warning-800 flex items-center justify-center rounded-full bg-warning-50">
                        3
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Ontology
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          4 classes · ontóloga: Rosa Serra
                        </span>
                      </div>
                      <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                        Pending
                      </Badge>
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        4
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Mapping editor
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          0 rules · pending ontology
                        </span>
                      </div>
                      <Badge variant="neutral">Not started</Badge>
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        5
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          Staging review
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          250 triples · revisora: Laia Font
                        </span>
                      </div>
                      <Badge variant="neutral">Not started</Badge>
                    </div>
                    <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-3">
                      <span className="h-8 w-8 flex-none text-caption-bold font-caption-bold text-neutral-700 flex items-center justify-center rounded-full bg-neutral-100">
                        6
                      </span>
                      <div className="flex grow shrink-0 basis-0 flex-col items-start">
                        <span className="text-body font-body text-default-font">
                          CQ registry
                        </span>
                        <span className="text-caption font-caption text-subtext-color">
                          2 CQs · investigador: Núria Bosch
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
                    <div className="flex items-center gap-2">
                      <Button
                        variant="neutral-tertiary"
                        size="small"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Delegate task
                      </Button>
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
              </div>
              <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Specialised roles
                </span>
                <Table
                  header={
                    <Table.HeaderRow>
                      <Table.HeaderCell>Role</Table.HeaderCell>
                      <Table.HeaderCell>Person</Table.HeaderCell>
                      <Table.HeaderCell>Workload</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.HeaderRow>
                  }
                  density="comfortable"
                >
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body-bold font-body-bold text-default-font">
                        Curador de datos
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Marta Puig
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        3 tasks
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="success">On track</Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body-bold font-body-bold text-default-font">
                        Curador ontólogo
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Rosa Serra
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        2 tasks
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="warning">Ontology review</Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body-bold font-body-bold text-default-font">
                        Revisor
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Laia Font
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        4 tasks
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="warning">2 pending approvals</Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body-bold font-body-bold text-default-font">
                        Investigador
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Núria Bosch
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        2 tasks
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="success">On track</Badge>
                    </Table.Cell>
                  </Table.Row>
                </Table>
              </div>
              <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border px-4 py-4">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Quality gates
                </span>
                <Table
                  header={
                    <Table.HeaderRow>
                      <Table.HeaderCell>Gate</Table.HeaderCell>
                      <Table.HeaderCell>Owner</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.HeaderRow>
                  }
                  density="compact"
                >
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        SHACL validation
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-subtext-color">
                        Curador ontólogo
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="success">Passed</Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-brand-700">
                        View report
                      </span>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        EJ checklist
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-subtext-color">
                        Revisor
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="success">Passed</Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-brand-700">
                        View checklist
                      </span>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Publication
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-subtext-color">
                        Coordinator
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="error">Blocked</Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-brand-700">
                        Review outputs
                      </span>
                    </Table.Cell>
                  </Table.Row>
                </Table>
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
                    Delegate task
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Review outputs
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Open quality gates
                  </Button>
                </div>
                <span className="text-caption font-caption text-subtext-color">
                  Delegation keeps authorship and review attributed to each
                  specialised role.
                </span>
              </div>
              <Alert
                variant="warning"
                icon={<FeatherAlertTriangle />}
                title="Publication is blocked until the revisor approves"
                description="Batch staging-2026-11-02a has passed SHACL and the EJ checklist, but 2 outputs still await revisor sign-off."
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ui3762GeneralOperationCoordinatorTeam;
