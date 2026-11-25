"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherCheck } from "@/ui/core";

function Ui171ReviewSuggestion() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-[#00000099]">
      <div className="flex w-[520px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <header className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Review suggestion
          </h1>
        </header>
        <div className="flex w-full items-center gap-2">
          <Badge variant="success" icon={<FeatherCheck />}>
            High
          </Badge>
          <span className="text-caption font-caption text-subtext-color">
            Confidence 0.82 · OpenAI · GPT-4
          </span>
        </div>
        <section className="flex w-full flex-col items-start gap-3">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Suggested triple
          </h2>
          <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-monospace-body font-monospace-body text-default-font">
              subject wd:Q123456
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              predicate wdt:P106 · occupation
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              object wd:Q11997032 · Seamstress
            </span>
          </div>
        </section>
        <section className="flex w-full flex-col items-start gap-3">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Evidence
          </h2>
          <div className="flex w-full items-start justify-between gap-4">
            <p className="text-body font-body text-default-font">
              1912 census, folio 214
            </p>
            <span className="text-monospace-body font-monospace-body text-subtext-color">
              0.82
            </span>
          </div>
          <div className="flex w-full items-start justify-between gap-4">
            <p className="text-body font-body text-default-font">
              Reasoning path · 3 steps · 1.2s
            </p>
            <span className="text-monospace-body font-monospace-body text-subtext-color">
              0.82
            </span>
          </div>
          <p className="text-caption font-caption text-subtext-color">
            Sources: 3 · agreement: high
          </p>
        </section>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Reject
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Accept suggestion
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui171ReviewSuggestion;
