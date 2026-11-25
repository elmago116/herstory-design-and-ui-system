"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { FeatherInfo } from "@/ui/core";

function Ui359KeyboardShortcuts() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Keyboard shortcuts
            </h1>
            <span className="text-body font-body text-subtext-color">
              Every accelerator has a visible path; shortcuts never replace the
              menu.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Global
            </span>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Open search
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ⌘
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  K
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Open help
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ?
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Switch workspace
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ⌘
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ⇧
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  W
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Pipeline
            </span>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Save mapping
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ⌘
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  S
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Run dry run
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ⌘
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ↵
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Approve selected
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  A
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Graph
            </span>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Zoom to fit
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  0
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Filter facets
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  F
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="text-body font-body text-default-font">
                Open entity
              </span>
              <div className="flex items-center gap-1">
                <span className="text-monospace-body font-monospace-body text-default-font rounded-sm border border-solid border-neutral-border bg-neutral-50 px-2 py-1">
                  ↵
                </span>
              </div>
            </div>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Shortcuts are also in the menus"
            description="No action exists only as a shortcut; this list mirrors the visible menu entries."
          />
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

export default Ui359KeyboardShortcuts;
