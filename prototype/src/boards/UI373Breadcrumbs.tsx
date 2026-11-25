"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { FeatherInfo } from "@/ui/core";

function Ui373Breadcrumbs() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Breadcrumbs
            </h1>
            <span className="text-body font-body text-subtext-color">
              One pattern for spatial orientation across pipeline, graph and
              governance.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Pipeline
            </span>
            <div className="flex items-center gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Ingestion
              </span>
              <span className="text-caption font-caption text-subtext-color">
                /
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Sources
              </span>
              <span className="text-caption font-caption text-subtext-color">
                /
              </span>
              <span className="text-caption-bold font-caption-bold text-default-font">
                census_raw.csv
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Graph
            </span>
            <div className="flex items-center gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Graph explorer
              </span>
              <span className="text-caption font-caption text-subtext-color">
                /
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Person
              </span>
              <span className="text-caption font-caption text-subtext-color">
                /
              </span>
              <span className="text-caption-bold font-caption-bold text-default-font">
                Mercè Puig
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Governance
            </span>
            <div className="flex items-center gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Governance
              </span>
              <span className="text-caption font-caption text-subtext-color">
                /
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Vocabulary
              </span>
              <span className="text-caption font-caption text-subtext-color">
                /
              </span>
              <span className="text-caption-bold font-caption-bold text-default-font">
                seamstress
              </span>
            </div>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Long paths collapse from the middle"
            description="Keep the first and last two levels visible; never truncate the current page name."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui373Breadcrumbs;
