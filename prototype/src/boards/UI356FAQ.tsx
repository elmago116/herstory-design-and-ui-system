"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { TextField } from "@/ui/components/TextField";

function Ui356Faq() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Frequently asked questions
            </h1>
            <span className="text-body font-body text-subtext-color">
              Short answers to the questions that come up most often.
            </span>
          </div>
          <TextField label="Search the FAQ" helpText="">
            <TextField.Input
              placeholder="Search a question…"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Why does a statement show two answers?
            </span>
            <span className="text-body font-body text-subtext-color">
              Two historical sources disagree. The graph keeps both voices side
              by side and labels each one; it does not pick a winner.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              What does “archival silence” mean?
            </span>
            <span className="text-body font-body text-subtext-color">
              The record does not exist because the archive never recorded it —
              not because the event did not happen. The absence registry
              explains each case.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Can I use the graph without a Wikidata account?
            </span>
            <span className="text-body font-body text-subtext-color">
              Yes. Browsing, queries and exports work with your HerStory
              account; publishing to Wikidata is reserved for authorised
              coordinators.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              How do I report a wrong or harmful record?
            </span>
            <span className="text-body font-body text-subtext-color">
              Open the entity and use “Raise objection”. The objection goes to
              the community panel with a trace and you are notified of the
              resolution.
            </span>
          </div>
          <div className="flex w-full items-center justify-between rounded-lg bg-background-alt px-6 py-4 gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Still stuck?
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Contact support or read the getting-started guide.
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
              variant="neutral-tertiary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Back to help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui356Faq;
