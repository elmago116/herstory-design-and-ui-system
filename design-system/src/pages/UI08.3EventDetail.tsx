"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherAlertTriangle } from "@subframe/core";

function Ui083EventDetail() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[720px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
          <div className="flex w-full items-start justify-between gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-micro font-micro text-subtext-color uppercase">
                HERSTORY · SUPERADMIN
              </span>
              <h1 className="text-heading-3 font-heading-3 text-default-font">
                Audit event detail
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                evt-88213 · 13 Nov 2026, 08:42:11 UTC
              </span>
            </div>
            <Badge variant="warning" icon={<FeatherAlertTriangle />}>
              Flagged
            </Badge>
          </div>
          <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Actor
              </span>
              <span className="text-body font-body text-default-font">
                Teresa Vidal
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Action
              </span>
              <span className="text-body font-body text-default-font">
                mapping.publish
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Workspace
              </span>
              <span className="text-body font-body text-default-font">
                Barcelona 1912
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Session
              </span>
              <span className="text-body font-body text-default-font">
                sess-4412 · Chrome · 81.0
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                IP address
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                10.4.12.88
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <span className="text-caption font-caption text-subtext-color">
                Outcome
              </span>
              <span className="text-body font-body text-default-font">
                allowed
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4 overflow-x-auto">
            <span className="text-caption font-caption text-subtext-color">
              Payload
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              target: person_mapping.ttl v41
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              batch: staging-2026-11-02a
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              statements: 250 · flagged: 12
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              ej_check: passed · reviewer: Laia Font
            </span>
          </div>
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="Flagged: publish outside the usual window"
            description="Publication happened at 08:42 UTC, outside the 09:00–18:00 governance window. Verify the authorisation."
          />
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Verify with owner
            </Button>
            <Button
              variant="destructive-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Revoke session
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui083EventDetail;
