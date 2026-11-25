"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherAlertTriangle } from "@/ui/core";

function Ui042ReviewPolicy() {
  return (
    <div className="flex h-full w-full items-start justify-end bg-[#00000099]">
      <div className="flex w-[520px] flex-none flex-col items-start gap-6 self-stretch rounded-l-lg bg-default-background px-6 py-6 shadow-lg max-w-full overflow-y-auto">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Vocabulary escalation
          </h1>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <Badge variant="warning">Pending review</Badge>
          <span className="text-caption font-caption text-subtext-color">
            Public workspaces - last review 2026-10-30
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-3 border-t border-solid border-neutral-border pt-6">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Rule
          </h2>
          <p className="text-body font-body text-default-font">
            When two or more reviewers contest a category label, the mapping is
            frozen and routed to the community review panel. No mapping that
            depends on the contested label may publish until the panel returns a
            decision, and the decision is recorded in the governance log.
          </p>
          <div className="flex w-full items-start gap-2 rounded-md border border-solid border-neutral-200 bg-neutral-50 px-4 py-3">
            <FeatherAlertTriangle className="text-body font-body text-warning-600" />
            <span className="text-caption font-caption text-subtext-color">
              Trigger: 2 reviewer objections within 7 days on the same category
              label.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3 border-t border-solid border-neutral-border pt-6">
          <h2 className="text-body-bold font-body-bold text-default-font">
            Decision trace
          </h2>
          <span className="text-caption font-caption text-subtext-color">
            Three events on this policy, newest first.
          </span>
          <div className="flex w-full items-center justify-between rounded-md bg-neutral-50 px-4 py-3 gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-default-font">
                Maria Claramunt (community reviewer)
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Objected to label &#39;criada&#39; as contested interpretive
                frame
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              2026-10-30 14:30
            </span>
          </div>
          <div className="flex w-full items-center justify-between rounded-md bg-neutral-50 px-4 py-3 gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-default-font">
                Teresa Vidal (coordinator)
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Escalated the objection to the community review panel
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              2026-10-29 14:30
            </span>
          </div>
          <div className="flex w-full items-center justify-between rounded-md bg-neutral-50 px-4 py-3 gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-default-font">
                Governance clerk (superadmin)
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Opened review case VC-14 and assigned three panel reviewers
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              2026-10-28 09:12
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-neutral-border pt-6 mt-auto">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Reject
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Approve policy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui042ReviewPolicy;
