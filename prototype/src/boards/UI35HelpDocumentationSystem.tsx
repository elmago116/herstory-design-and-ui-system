"use client";

import React from "react";
import { Accordion } from "@/ui/components/Accordion";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { FeatherInfo } from "@/ui/core";

function Ui35HelpDocumentationSystem() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Help &amp; documentation
          </h1>
          <p className="text-body font-body text-subtext-color">
            Guides, glossary and support for every role
          </p>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title="New: the EJ gate explained — read the 5-minute guide"
          description=""
        />
        <Combobox
          label=""
          placeholder="Search help articles…"
          value=""
          helpText=""
        />
        <div className="w-full items-start gap-6 grid grid-cols-4 mobile:gap-4 mobile:grid mobile:grid-cols-1">
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5">
            <span className="text-body-bold font-body-bold text-default-font">
              Getting started
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Set up your workspace and first pipeline
            </span>
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Getting started
            </Button>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5">
            <span className="text-body-bold font-body-bold text-default-font">
              Roles &amp; permissions
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Understand coordinator, superadmin and viewer access
            </span>
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Roles and permissions
            </Button>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5">
            <span className="text-body-bold font-body-bold text-default-font">
              The KG pipeline
            </span>
            <span className="text-caption font-caption text-subtext-color">
              From raw source to reconciled knowledge graph
            </span>
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              The KG pipeline
            </Button>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-5 py-5">
            <span className="text-body-bold font-body-bold text-default-font">
              Glossary
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Key terms used across the HerStory platform
            </span>
            <Button
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Glossary
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <h2 className="text-heading-2 font-heading-2 text-default-font">
            Frequently asked
          </h2>
          <Accordion
            trigger={
              <div className="flex w-full items-center gap-2 px-3 py-2">
                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  How do I search the archive?
                </span>
                <Accordion.Chevron />
              </div>
            }
          >
            <div className="flex w-full flex-col items-start px-3 pb-3">
              <span className="text-body font-body text-subtext-color">
                Use the search bar at the top of any page to find entities by
                name, place or occupation.
              </span>
            </div>
          </Accordion>
          <Accordion
            trigger={
              <div className="flex w-full items-center gap-2 px-3 py-2">
                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  What is a mapping?
                </span>
                <Accordion.Chevron />
              </div>
            }
          >
            <div className="flex w-full flex-col items-start px-3 pb-3">
              <span className="text-body font-body text-subtext-color">
                A mapping connects a source column to a KG property so data can
                be reconciled and imported.
              </span>
            </div>
          </Accordion>
          <Accordion
            trigger={
              <div className="flex w-full items-center gap-2 px-3 py-2">
                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  What does &#39;archival silence&#39; mean?
                </span>
                <Accordion.Chevron />
              </div>
            }
          >
            <div className="flex w-full flex-col items-start px-3 pb-3">
              <span className="text-body font-body text-subtext-color">
                It refers to gaps in the historical record where certain voices
                or communities are absent from official archives.
              </span>
            </div>
          </Accordion>
          <Accordion
            trigger={
              <div className="flex w-full items-center gap-2 px-3 py-2">
                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  How are community objections handled?
                </span>
                <Accordion.Chevron />
              </div>
            }
          >
            <div className="flex w-full flex-col items-start px-3 pb-3">
              <span className="text-body font-body text-subtext-color">
                Objections are reviewed in the Objection Management dashboard by
                a coordinator before any resolution is applied.
              </span>
            </div>
          </Accordion>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-monospace-body font-monospace-body text-default-font rounded border px-1">
              Ctrl+K
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Search
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font rounded border px-1">
              ?
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Shortcuts
            </span>
          </div>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Contact support
          </Button>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            FAQ
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Video index
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Changelog
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Keyboard shortcuts
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui35HelpDocumentationSystem;
