"use client";

import React from "react";
import { FeatherX } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

export interface GuidePanelRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  step?:
    | "welcome"
    | "create-workspace"
    | "load-dataset"
    | "run-query"
    | "rest-api";
  className?: string;
}

const GuidePanelRoot = React.forwardRef<HTMLDivElement, GuidePanelRootProps>(
  function GuidePanelRoot(
    {
      step = "create-workspace",
      className,
      ...otherProps
    }: GuidePanelRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/3fdc023c flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm mobile:px-4 mobile:py-4",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-start gap-4">
          <div className="flex min-h-[160px] grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-h-[0px]">
            <div
              className={SubframeUtils.twClassNames(
                "hidden w-full flex-col items-start gap-2",
                { flex: step === "welcome" }
              )}
            >
              <span className="text-micro font-micro text-subtext-color uppercase">
                Getting started · Step 1 of 5
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Welcome to HerStory
              </span>
              <span className="max-w-[720px] text-body font-body text-default-font">
                HerStory turns historical records (letters, parish registers,
                censuses and oral histories) into a Wikidata knowledge graph.
                This short guide walks you through creating a workspace, loading
                data, querying it and connecting through the API. Every
                statement keeps its sources and review history.
              </span>
              <span className="text-body font-body text-link underline">
                Read the HerStory overview
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "flex w-full flex-col items-start gap-2",
                {
                  hidden:
                    step === "rest-api" ||
                    step === "run-query" ||
                    step === "load-dataset" ||
                    step === "welcome",
                }
              )}
            >
              <span className="text-micro font-micro text-subtext-color uppercase">
                Getting started · Step 2 of 5
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Create a workspace
              </span>
              <span className="max-w-[720px] text-body font-body text-default-font">
                Now let&#39;s create your first workspace. Go to Setup &gt;
                Workspaces and press Create new workspace. Fill in the Workspace
                ID and press Enter. The default workspace parameters are
                optimized for collections of up to 100 million statements. If
                you plan to load more, check for more information:
              </span>
              <span className="text-body font-body text-link underline">
                Configuring a workspace
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "hidden w-full flex-col items-start gap-2",
                { flex: step === "load-dataset" }
              )}
            >
              <span className="text-micro font-micro text-subtext-color uppercase">
                Getting started · Step 3 of 5
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Load a sample dataset
              </span>
              <span className="max-w-[720px] text-body font-body text-default-font">
                Import the sample archive of suffrage petitions (1866–1918) to
                explore HerStory. Go to Import &gt; Sample datasets, select
                Suffrage Petitions and press Import. Each record is mapped to
                Wikidata items and staged for human review before anything is
                published.
              </span>
              <span className="text-body font-body text-link underline">
                About sample datasets
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "hidden w-full flex-col items-start gap-2",
                { flex: step === "run-query" }
              )}
            >
              <span className="text-micro font-micro text-subtext-color uppercase">
                Getting started · Step 4 of 5
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Run a SPARQL query
              </span>
              <span className="max-w-[720px] text-body font-body text-default-font">
                You can find sample SPARQL queries under Explore &gt; Saved
                queries, demonstrating how to find people, places and events in
                your workspace, like:
              </span>
              <div className="flex flex-col items-start gap-1 pl-6">
                <span className="text-body font-body text-default-font">
                  (1) Which women in the dataset were born in Manchester?
                </span>
                <span className="text-body font-body text-default-font">
                  (2) Show all occupations recorded for every petitioner
                </span>
                <span className="text-body font-body text-default-font">
                  (3) List the members of a specific suffrage society
                </span>
              </div>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "hidden w-full flex-col items-start gap-2",
                { flex: step === "rest-api" }
              )}
            >
              <span className="text-micro font-micro text-subtext-color uppercase">
                Getting started · Step 5 of 5
              </span>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Use the REST API
              </span>
              <span className="max-w-[720px] text-body font-body text-default-font">
                Connect your own tools to HerStory through the REST API.
                Generate an access token under Settings &gt; API tokens, then
                call the workspace endpoints to search entities, submit records
                or run SPARQL queries programmatically.
              </span>
              <span className="text-body font-body text-link underline">
                REST API reference
              </span>
            </div>
          </div>
          <IconButton
            variant="neutral-tertiary"
            size="medium"
            icon={<FeatherX />}
          />
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-4 mobile:flex-col mobile:flex-nowrap mobile:items-start">
          <div className="flex items-center gap-2">
            <Button variant="neutral-secondary">Hide panel</Button>
            <Button variant="brand-primary">Open guides</Button>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={SubframeUtils.twClassNames(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md border border-solid border-control-border bg-default-background cursor-pointer hover:bg-neutral-100",
                {
                  "border border-solid border-brand-primary bg-brand-primary hover:bg-brand-800":
                    step === "welcome",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-body-bold font-body-bold text-default-font",
                  { "text-white": step === "welcome" }
                )}
              >
                1
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md border border-solid border-brand-primary bg-brand-primary cursor-pointer hover:bg-brand-800",
                {
                  "border border-solid border-control-border bg-default-background hover:bg-neutral-100":
                    step === "rest-api" ||
                    step === "run-query" ||
                    step === "load-dataset" ||
                    step === "welcome",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-body-bold font-body-bold text-white",
                  {
                    "text-default-font":
                      step === "rest-api" ||
                      step === "run-query" ||
                      step === "load-dataset" ||
                      step === "welcome",
                  }
                )}
              >
                2
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md border border-solid border-control-border bg-default-background cursor-pointer hover:bg-neutral-100",
                {
                  "border border-solid border-brand-primary bg-brand-primary hover:bg-brand-800":
                    step === "load-dataset",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-body-bold font-body-bold text-default-font",
                  { "text-white": step === "load-dataset" }
                )}
              >
                3
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md border border-solid border-control-border bg-default-background cursor-pointer hover:bg-neutral-100",
                {
                  "border border-solid border-brand-primary bg-brand-primary hover:bg-brand-800":
                    step === "run-query",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-body-bold font-body-bold text-default-font",
                  { "text-white": step === "run-query" }
                )}
              >
                4
              </span>
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "flex h-8 w-8 flex-none items-center justify-center rounded-md border border-solid border-control-border bg-default-background cursor-pointer hover:bg-neutral-100",
                {
                  "border border-solid border-brand-primary bg-brand-primary hover:bg-brand-800":
                    step === "rest-api",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-body-bold font-body-bold text-default-font",
                  { "text-white": step === "rest-api" }
                )}
              >
                5
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const GuidePanel = GuidePanelRoot;
