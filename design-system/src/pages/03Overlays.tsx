"use client";

import React from "react";
import { AgentConfigDialog } from "@/ui/components/AgentConfigDialog";
import { Button } from "@/ui/components/Button";
import { FullscreenDialog } from "@/ui/components/FullscreenDialog";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherStar } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";

function _03Overlays() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY DESIGN SYSTEM · v2
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            03 — Overlays
          </h1>
          <p className="text-body font-body text-subtext-color">
            Surfaces that sit above the page: modal dialogs, sheets and menus.
            Each is shown in its open state inside a bounded stage.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Modal surfaces
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Blocking surfaces over a dimmed backdrop — confirm and
              destructive.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Dialog
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · confirm · destructive
                </span>
              </div>
              <div className="flex h-[360px] w-full flex-none items-center justify-center overflow-hidden rounded-md bg-[#00000099]">
                <div className="flex w-[340px] flex-none flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Delete mapping?
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    This removes the rule and its 128 generated statements. The
                    source document is kept.
                  </span>
                  <div className="flex w-full items-center justify-end gap-2 pt-1">
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive-primary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Drawer
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  right sheet · detail and review
                </span>
              </div>
              <div className="flex h-[360px] w-full flex-none items-center justify-end overflow-hidden rounded-md bg-[#00000066]">
                <div className="flex w-[300px] flex-none flex-col items-start gap-4 self-stretch border-l border-solid border-neutral-border bg-default-background px-6 py-6">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Statement detail
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Mercè Puig · born 1884, Barcelona. Source: 1912 census,
                    folio 214.
                  </span>
                  <div className="flex w-full items-center justify-end gap-2 pt-1">
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Close
                    </Button>
                    <Button
                      variant="brand-primary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Fullscreen Dialog
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  full-surface · staging review
                </span>
              </div>
              <FullscreenDialog
                className="h-[360px] w-full flex-none overflow-hidden rounded-md border border-solid border-neutral-border"
                open={false}
                onOpenChange={(open: boolean) => {}}
              >
                <div className="flex w-full items-center justify-between border-b border-solid border-neutral-border px-6 py-4">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Review batch · 214 records
                  </span>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Close
                  </Button>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-6 py-6">
                  <span className="text-body font-body text-default-font">
                    12 records need review — birth dates conflict between two
                    sources.
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Approve, reject or defer each record before publishing to
                    Wikidata.
                  </span>
                </div>
                <div className="flex w-full items-center justify-end gap-2 border-t border-solid border-neutral-border px-6 py-4">
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Defer
                  </Button>
                  <Button
                    variant="brand-primary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Approve all
                  </Button>
                </div>
              </FullscreenDialog>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Panels &amp; menus
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Non-blocking surfaces: configuration panels and context menus.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Agent Config
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · advanced-collapsed
                </span>
              </div>
              <AgentConfigDialog className="h-192 w-full flex-none" />
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Context Menu
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  row actions · with divider — static open state
                </span>
              </div>
              <div className="flex w-[280px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-lg">
                <div className="flex h-8 w-full flex-none items-center gap-2 rounded-md px-2 cursor-pointer hover:bg-neutral-100">
                  <div className="flex h-4 w-4 flex-none items-center justify-center">
                    <FeatherStar className="text-body font-body text-default-font" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                    Favorite
                  </span>
                </div>
                <div className="flex h-8 w-full flex-none items-center gap-2 rounded-md px-2 cursor-pointer hover:bg-neutral-100">
                  <div className="flex h-4 w-4 flex-none items-center justify-center">
                    <FeatherPlus className="text-body font-body text-default-font" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                    Add to workspace
                  </span>
                </div>
                <div className="flex h-8 w-full flex-none items-center gap-2 rounded-md px-2 cursor-pointer hover:bg-neutral-100">
                  <div className="flex h-4 w-4 flex-none items-center justify-center">
                    <FeatherEdit2 className="text-body font-body text-default-font" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                    Rename
                  </span>
                </div>
                <div className="flex w-full items-start px-1 py-1">
                  <div className="flex h-px grow shrink-0 basis-0 flex-col items-center bg-neutral-200" />
                </div>
                <div className="flex h-8 w-full flex-none items-center gap-2 rounded-md px-2 cursor-pointer hover:bg-neutral-100">
                  <div className="flex h-4 w-4 flex-none items-center justify-center">
                    <FeatherTrash className="text-body font-body text-error-700" />
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-error-700">
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _03Overlays;
