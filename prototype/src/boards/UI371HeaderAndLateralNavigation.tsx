"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { IconButton } from "@/ui/components/IconButton";
import { LanguageSelector } from "@/ui/components/LanguageSelector";
import { WorkspaceSelector } from "@/ui/components/WorkspaceSelector";
import { FeatherHelpCircle } from "@/ui/core";
import { FeatherMoon } from "@/ui/core";

function Ui371HeaderAndLateralNavigation() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start bg-default-background">
        <header className="flex max-h-[120px] w-full items-center justify-between border-b border-solid border-neutral-border bg-default-background px-6 py-6 gap-4 mobile:px-4 mobile:py-0">
          <img
            className="flex-none self-stretch object-contain"
            src="https://res.cloudinary.com/subframe/image/upload/v1794238443/uploads/46244/hppnuvhehgcglyrtlpne.png"
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
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
            <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
            <LanguageSelector state="default" code="CA" />
            <IconButton
              icon={<FeatherHelpCircle />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              icon={<FeatherMoon />}
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
        </header>
        <div className="flex w-full grow shrink-0 basis-0 items-start">
          <nav className="flex w-[220px] flex-none flex-col items-start gap-1 self-stretch border-r border-solid border-neutral-border bg-default-background px-3 py-4">
            <span className="w-full text-body-bold font-body-bold text-brand-primary rounded-md bg-background-alt px-3 py-2">
              Ingestion
            </span>
            <span className="w-full text-body font-body text-subtext-color rounded-md px-3 py-2">
              Mapping
            </span>
            <span className="w-full text-body font-body text-subtext-color rounded-md px-3 py-2">
              Staging review
            </span>
            <span className="w-full text-body font-body text-subtext-color rounded-md px-3 py-2">
              Ontology
            </span>
            <span className="w-full text-body font-body text-subtext-color rounded-md px-3 py-2">
              Observability
            </span>
            <div className="flex w-full flex-col items-start gap-1 pt-6">
              <span className="text-micro font-micro text-subtext-color uppercase">
                Workspace
              </span>
              <span className="w-full text-body font-body text-subtext-color rounded-md px-3 py-2">
                Governance
              </span>
              <span className="w-full text-body font-body text-subtext-color rounded-md px-3 py-2">
                Help
              </span>
            </div>
          </nav>
          <main className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch px-8 py-8">
            <span className="text-micro font-micro text-subtext-color uppercase">
              Content area
            </span>
            <span className="text-heading-2 font-heading-2 text-default-font">
              Page header and body render here
            </span>
            <span className="text-body font-body text-subtext-color">
              The rail is always visible; the active item uses the brand colour
              and a tinted background, never colour alone.
            </span>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ui371HeaderAndLateralNavigation;
