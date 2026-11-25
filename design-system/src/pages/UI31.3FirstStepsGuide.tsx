"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { FeatherInfo } from "@subframe/core";

function Ui313FirstStepsGuide() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-micro font-micro text-subtext-color uppercase">
              HERSTORY · INQUIRER
            </span>
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              First steps
            </h1>
            <span className="text-body font-body text-subtext-color">
              Ask a question, follow the sources, check what the graph does not
              know.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-start gap-4">
              <Badge variant="brand">1</Badge>
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Ask in your own words
                </span>
                <span className="text-body font-body text-subtext-color">
                  Type a question about a person, place or record. The assistant
                  shows the sources behind each answer.
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-md bg-background-alt px-4 py-3">
              <span className="text-caption font-caption text-subtext-color">
                Try:
              </span>
              <span className="text-body font-body text-default-font">
                Which women of El Raval were registered as seamstresses in 1912?
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-start gap-4">
              <Badge variant="brand">2</Badge>
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Follow the citation
                </span>
                <span className="text-body font-body text-subtext-color">
                  Open a citation to read the source row, the mapping version
                  and who authorised it.
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-md bg-background-alt px-4 py-3">
              <span className="text-caption font-caption text-subtext-color">
                Look for:
              </span>
              <span className="text-body font-body text-default-font">
                the source chip under each statement
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-start gap-4">
              <Badge variant="brand">3</Badge>
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Read absence as evidence
                </span>
                <span className="text-body font-body text-subtext-color">
                  A missing value carries an absence class — silence, policy or
                  uncertainty — not a blank.
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-md bg-background-alt px-4 py-3">
              <span className="text-caption font-caption text-subtext-color">
                Try:
              </span>
              <span className="text-body font-body text-default-font">
                Why is there no occupation for this person?
              </span>
            </div>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="You can always go back to the raw record"
            description="The chat is a way into the graph, not a replacement for the archive; every answer links out."
          />
        </div>
      </div>
    </div>
  );
}

export default Ui313FirstStepsGuide;
