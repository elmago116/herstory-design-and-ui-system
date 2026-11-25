"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherX } from "@subframe/core";

function Ui082RevokeSession() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Revoke session
          </h1>
          <p className="text-body font-body text-subtext-color">
            The user is signed out immediately and must authenticate again.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-body font-body text-subtext-color">User</span>
            <span className="text-body-bold font-body-bold text-default-font">
              Mercè Puig
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-body font-body text-subtext-color">Role</span>
            <span className="text-body font-body text-default-font">
              Superadmin
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-body font-body text-subtext-color">
              Started
            </span>
            <span className="text-body font-body text-default-font">
              07:44 · 2h 14m
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-body font-body text-subtext-color">IP</span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              84.120.3.99
            </span>
          </div>
        </div>
        <div className="flex w-full items-start gap-3 rounded-md bg-warning-50 px-4 py-3 border border-solid border-warning-border">
          <FeatherAlertTriangle className="text-body font-body text-warning-700" />
          <p className="text-caption font-caption text-warning-800">
            Open tabs and in-flight uploads by this session are closed. The
            action is recorded in the audit trail.
          </p>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="destructive-primary"
            icon={<FeatherX />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Revoke session
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui082RevokeSession;
