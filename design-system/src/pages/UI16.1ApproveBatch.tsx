"use client";

import React from "react";
import { FeatherCheck } from "@subframe/core";

function Ui161ApproveBatch() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Approve batch
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            The Epistemic Justice gate must pass before a batch can be approved.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background" />
            <span className="text-body font-body text-default-font">
              Gender representation
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
              <FeatherCheck className="text-caption font-caption text-brand-primary" />
            </div>
            <span className="text-body font-body text-default-font">
              Intersectionality coverage
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
              <FeatherCheck className="text-caption font-caption text-brand-primary" />
            </div>
            <span className="text-body font-body text-default-font">
              Language diversity
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
              <FeatherCheck className="text-caption font-caption text-brand-primary" />
            </div>
            <span className="text-body font-body text-default-font">
              Community provenance
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
              <FeatherCheck className="text-caption font-caption text-brand-primary" />
            </div>
            <span className="text-body font-body text-default-font">
              Source diversity
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-control-border bg-default-background">
              <FeatherCheck className="text-caption font-caption text-brand-primary" />
            </div>
            <span className="text-body font-body text-default-font">
              Absence classification
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui161ApproveBatch;
