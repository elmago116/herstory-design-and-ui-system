"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { LanguageSelector } from "@/ui/components/LanguageSelector";
import { SidebarWithSections } from "@/ui/components/SidebarWithSections";
import { TextField } from "@/ui/components/TextField";
import { WorkspaceSelector } from "@/ui/components/WorkspaceSelector";
import { FeatherBadgeHelp } from "@/ui/core";
import { FeatherBookA } from "@/ui/core";
import { FeatherBookmark } from "@/ui/core";
import { FeatherCompass } from "@/ui/core";
import { FeatherDice1 } from "@/ui/core";
import { FeatherFileText } from "@/ui/core";
import { FeatherHelpCircle } from "@/ui/core";
import { FeatherHistory } from "@/ui/core";
import { FeatherMap } from "@/ui/core";
import { FeatherRoute } from "@/ui/core";
import { FeatherSettings } from "@/ui/core";
import { FeatherShovel } from "@/ui/core";
import { FeatherSun } from "@/ui/core";

function Ui377GeneralOperationInquirer() {
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
              <Badge variant="neutral">Inquirer</Badge>
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
            <Breadcrumbs.Item>KG exploration</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <Breadcrumbs.Item active={true}>Search</Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start">
          <SidebarWithSections>
            <SidebarWithSections.NavSection label="KG exploration">
              <SidebarWithSections.NavItem
                icon={<FeatherCompass />}
                selected={true}
              >
                Search
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Graph explorer
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Visual query
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                SPARQL editor
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>Chat</SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem>
                Collections
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherFileText />}>
                Documents
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherMap />}>
                Map
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Explainability">
              <SidebarWithSections.NavItem icon={<FeatherRoute />}>
                Trace · read only
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherShovel />}>
                Sources · read only
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Personalisation">
              <SidebarWithSections.NavItem icon={<FeatherSettings />}>
                Preferences
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherHistory />}>
                History and defaults
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
            <SidebarWithSections.NavSection label="Help">
              <SidebarWithSections.NavItem icon={<FeatherDice1 />}>
                Getting started
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherBookmark />}>
                FAQ
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherBookA />}>
                Glossary
              </SidebarWithSections.NavItem>
              <SidebarWithSections.NavItem icon={<FeatherBadgeHelp />}>
                Contact support
              </SidebarWithSections.NavItem>
            </SidebarWithSections.NavSection>
          </SidebarWithSections>
          <main className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch px-8 py-8">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Explore the graph
                </span>
                <span className="text-body font-body text-subtext-color">
                  Ask in your own words, or start from an entity or a
                  collection.
                </span>
              </div>
              <div className="flex items-center justify-end gap-2">
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
                <span className="text-body font-body text-default-font">
                  Workspace
                </span>
              </div>
              <div className="flex w-full items-center justify-center gap-3 mobile:flex-col mobile:items-start mobile:justify-start">
                <TextField
                  className="h-auto grow shrink-0 basis-0"
                  label="Ask or search"
                  helpText="Every answer shows its sources and quality."
                >
                  <TextField.Input
                    placeholder="Which women of El Raval were registered as seamstresses in 1912?"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <Button
                  variant="brand-primary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Search
                </Button>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Start with a person
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Open an entity and follow its relations, sources and quality
                    badges.
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Start with a place
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Browse El Raval on the map and zoom into the entities
                    recorded there.
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Start with a question
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Use chat for a guided answer, or the visual builder for a
                    precise query.
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center justify-between rounded-lg bg-background-alt px-6 py-4 gap-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Experience level: familiarized
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Novice paths stay available; expert tools appear as you gain
                    confidence.
                  </span>
                </div>
                <Button
                  variant="neutral-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Change level
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ui377GeneralOperationInquirer;
