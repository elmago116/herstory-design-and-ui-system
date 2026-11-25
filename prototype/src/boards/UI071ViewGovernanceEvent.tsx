"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";

function Ui071ViewGovernanceEvent() {
  return (
    <div className="flex h-full w-full items-start justify-end bg-[#00000099]">
      <div className="flex w-[520px] flex-none flex-col items-start gap-6 self-stretch rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Mapping regression: person_mapping.ttl v41
          </h1>
          <div className="flex w-full items-center gap-2">
            <Badge variant="success">Reverted</Badge>
            <span className="text-caption font-caption text-subtext-color">
              Suffrage Correspondence · 2026-11-01
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-surface px-4 py-4">
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Decision
            </span>
            <span className="text-body font-body text-default-font">
              Reverted by automated checkpoint
            </span>
          </div>
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Mapping version
            </span>
            <span className="text-body font-body text-default-font">
              person_mapping.ttl v41 to v40
            </span>
          </div>
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Actor
            </span>
            <span className="text-body font-body text-default-font">
              Automated checkpoint
            </span>
          </div>
          <div className="flex w-full items-start justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Scope
            </span>
            <span className="text-body font-body text-default-font">
              Suffrage Correspondence · 14 entities
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Trace
          </h2>
          <div className="flex w-full items-start gap-2">
            <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-neutral-100">
              <span className="text-caption font-caption text-subtext-color">
                1
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              Checkpoint compared person_mapping.ttl v41 against v40 across 14
              Q-typing slips.
            </span>
          </div>
          <div className="flex w-full items-start gap-2">
            <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-neutral-100">
              <span className="text-caption font-caption text-subtext-color">
                2
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              Uneven P-projection flagged as a mapping regression and held the
              authoring pipeline.
            </span>
          </div>
          <div className="flex w-full items-start gap-2">
            <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-neutral-100">
              <span className="text-caption font-caption text-subtext-color">
                3
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              Rollback to v40 applied and the retrieval index re-verified.
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 mt-auto">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open mapping version
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui071ViewGovernanceEvent;
