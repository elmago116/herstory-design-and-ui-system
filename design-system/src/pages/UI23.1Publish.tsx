"use client";

import React from "react";
import { FeatherXCircle } from "@subframe/core";

function Ui231Publish() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Publish to Wikidata
          </h1>
          <p className="text-body font-body text-subtext-color">
            Publication runs only after every Epistemic Justice check passes.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-md bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-caption font-caption text-subtext-color">
              Batch
            </span>
            <span className="text-body font-body text-default-font">
              Batch 7 · Barcelona 1912
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-caption font-caption text-subtext-color">
              Triples
            </span>
            <span className="text-body font-body text-default-font">
              250 triples
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-caption font-caption text-subtext-color">
              Readiness
            </span>
            <span className="text-body font-body text-default-font">83%</span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-error-200 bg-error-50 px-3 py-2">
          <div className="flex w-full items-center gap-2">
            <FeatherXCircle className="text-body font-body text-error-600" />
            <span className="text-body font-body text-default-font">
              Gender representation
            </span>
            <span className="text-monospace-body font-monospace-body text-error-600">
              47%
            </span>
          </div>
          <p className="text-caption font-caption text-subtext-color">
            Below the 50% threshold required by REQ-11.2.5
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ui231Publish;
