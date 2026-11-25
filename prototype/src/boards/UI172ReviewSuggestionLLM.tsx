"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherCheckSquare } from "@/ui/core";

function Ui172ReviewSuggestionLlm() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-[#00000099]">
      <div className="flex w-[520px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-2 font-heading-2 text-default-font">
            Model re-review
          </h1>
          <div className="flex w-full items-center gap-2 pt-1">
            <Badge variant="brand">LLM</Badge>
            <span className="text-caption font-caption text-subtext-color">
              GPT-4 · run 2 of 2 · 3 sources
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Prompt
          </h2>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-monospace-body font-monospace-body text-default-font">
              Input: wd:Q123456 wdt:P106 wd:Q11997032
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              Context: 1912 census, folio 214
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              Task: verify this occupation triple
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              Rules: cite one source per claim
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full items-center justify-between gap-2">
            <h2 className="text-heading-3 font-heading-3 text-default-font">
              Model output
            </h2>
            <Badge variant="neutral">Draft</Badge>
          </div>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3 overflow-x-auto">
            <span className="text-monospace-body font-monospace-body text-default-font">
              TRIPLE: wd:Q123456 wdt:P106 wd:Q11997032
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              VERDICT: supported by 3 of 3 sources
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              CONFIDENCE: 0.82
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <h2 className="text-heading-3 font-heading-3 text-default-font">
            Grounding
          </h2>
          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-caption font-caption text-default-font">
              1912 census, folio 214
            </span>
            <span className="text-caption font-caption text-subtext-color">
              0.91
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-caption font-caption text-default-font">
              Seamstress guild register, 1911
            </span>
            <span className="text-caption font-caption text-subtext-color">
              0.84
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-caption font-caption text-default-font">
              Wikidata item Q11997032
            </span>
            <span className="text-caption font-caption text-subtext-color">
              0.71
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 mt-auto">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherCheckSquare />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Accept output
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui172ReviewSuggestionLlm;
