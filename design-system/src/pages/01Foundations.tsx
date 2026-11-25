"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Table } from "@/ui/components/Table";
import { FeatherCheck } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherLayers } from "@subframe/core";
import { FeatherX } from "@subframe/core";

function _01Foundations() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY DESIGN SYSTEM · v2
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            01 — Foundations
          </h1>
          <p className="text-body font-body text-subtext-color">
            Tokens, colour, type and elevation. Shapes bind to semantic tokens,
            never primitives.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Brand colours
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              The four anchor colours every surface, action and graph element
              resolves to.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-4 mobile:gap-4 mobile:grid mobile:grid-cols-2">
            <div className="flex flex-col items-start self-stretch overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background">
              <div className="flex h-[120px] w-full flex-none items-start bg-brand-primary" />
              <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Brand Primary
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Primary action
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  #1976D2
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background">
              <div className="flex h-[120px] w-full flex-none items-start bg-brand-800" />
              <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Focus
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Focus rings &amp; accent
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  #2196F3
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background">
              <div className="flex h-[120px] w-full flex-none items-start bg-brand-200" />
              <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Viz Node
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Graph nodes
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  #90CAF9
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background">
              <div className="flex h-[120px] w-full flex-none items-start bg-neutral-900" />
              <div className="flex w-full flex-col items-start gap-1 px-4 py-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Default Font
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Text primary
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  #212121
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Primitive ramps
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Raw palette steps 50–900. Referenced only by semantic tokens,
              never directly by shapes.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-2">
              <div className="flex w-24 flex-none items-center pt-4 mobile:px-0 mobile:py-0">
                <span className="text-body-bold font-body-bold text-default-font">
                  Primary
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-1 mobile:flex-wrap">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      50
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      D0CB93
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-100" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      100
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      B6C091
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-200" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      200
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      AEB384
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      300
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      C79F6F
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      400
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      D2724F
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-500" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      500
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      CC2747
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      600
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      A82551
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-700" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      700
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      842352
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-800" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      800
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      62204B
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-brand-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      900
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      431B3D
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-2">
              <div className="flex w-24 flex-none items-center pt-4 mobile:px-0 mobile:py-0">
                <span className="text-body-bold font-body-bold text-default-font">
                  Blue
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-1 mobile:flex-wrap">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      50
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      A6CCF7
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-100" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      100
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      9CBDE3
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-200" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      200
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      91B1D6
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      300
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      83ABD8
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      400
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      5094DD
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-500" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      500
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      0073CF
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      600
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      0061B0
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-700" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      700
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      004F91
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-800" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      800
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      003E73
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-blue-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      900
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      072D52
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-2">
              <div className="flex w-24 flex-none items-center pt-4 mobile:px-0 mobile:py-0">
                <span className="text-body-bold font-body-bold text-default-font">
                  Gray
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-1 mobile:flex-wrap">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      50
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FAFAFA
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-100" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      100
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      F5F5F5
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-200" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      200
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      EEEEEE
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      300
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      E0E0E0
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      400
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      BDBDBD
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-500" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      500
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      9E9E9E
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      600
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      757575
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-700" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      700
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      616161
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-800" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      800
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      424242
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-neutral-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      900
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      212121
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-2">
              <div className="flex w-24 flex-none items-center pt-4 mobile:px-0 mobile:py-0">
                <span className="text-body-bold font-body-bold text-default-font">
                  Green
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-1 mobile:flex-wrap">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      50
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      E8F5E9
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-100" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      100
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      C8E6C9
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-200" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      200
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      A5D6A7
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      300
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      81C784
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      400
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      66BB6A
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-500" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      500
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      4CAF50
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      600
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      43A047
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-700" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      700
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      388E3C
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-800" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      800
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      2E7D32
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-success-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      900
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      1B5E20
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-2">
              <div className="flex w-24 flex-none items-center pt-4 mobile:px-0 mobile:py-0">
                <span className="text-body-bold font-body-bold text-default-font">
                  Amber
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-1 mobile:flex-wrap">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      50
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFEBEE
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-100" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      100
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFCDD2
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-200" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      200
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      EF9A9A
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      300
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      E57373
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      400
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      EF5350
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-500" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      500
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      F44336
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      600
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      E53935
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-700" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      700
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      D32F2F
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-800" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      800
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      C62828
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-error-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      900
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      B71C1C
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-2">
              <div className="flex w-24 flex-none items-center pt-4 mobile:px-0 mobile:py-0">
                <span className="text-body-bold font-body-bold text-default-font">
                  Red
                </span>
              </div>
              <div className="flex grow shrink-0 basis-0 items-start gap-1 mobile:flex-wrap">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-50" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      50
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFF3E0
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-100" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      100
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFE0B2
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-200" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      200
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFCC80
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      300
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFB74D
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      400
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FFA726
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-500" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      500
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FF9800
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      600
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      FB8C00
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-700" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      700
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      F57C00
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-800" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      800
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      EF6C00
                    </span>
                  </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 mobile:min-w-[56px]">
                  <div className="flex h-14 w-full flex-none items-start rounded-md border border-solid border-neutral-border bg-warning-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      900
                    </span>
                    <span className="text-monospace-body font-monospace-body text-subtext-color">
                      E65100
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2 px-2 py-2">
          <span className="text-body-bold font-body-bold text-default-font">
            Logo Actual
          </span>
          <span className="text-body font-body text-default-font">
            Por definir variaciones y usos
          </span>
          <img
            className="max-w-[192px] flex-none"
            src="https://res.cloudinary.com/subframe/image/upload/v1793618264/uploads/46244/ibydat4skkcx2dfqblcl.svg"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Semantic colour tokens
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Purpose-named aliases. Components bind here so the palette can
              change underneath them.
            </span>
          </div>
          <div className="w-full items-start border-t border-solid border-neutral-200 grid grid-cols-2 gap-x-12 mobile:grid mobile:gap-x-12 mobile:grid-cols-1">
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-default-background" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.bg.default
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → white
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-50" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.bg.alt
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.50
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-100" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.bg.surface
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.100
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-50" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.bg.input
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.50
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-900" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.text.primary
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.900
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.text.secondary
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-brand-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.text.link
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → blue.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-brand-primary" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.action.primary.bg
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → blue.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-100" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.action.secondary.bg
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.100
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-300" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.border.default
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.300
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-brand-500" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.border.focus
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → blue.500
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-success-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.status.success
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → green.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-warning-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.status.warning
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → amber.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-error-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.status.error
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → red.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-brand-300" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.viz.node
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → blue.300
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-neutral-400" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.viz.edge
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → gray.400
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-success-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.viz.quality-high
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → green.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-warning-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.viz.quality-medium
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → amber.700
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 items-center gap-3 self-stretch border-b border-solid border-neutral-200 py-3">
              <div className="flex h-6 w-6 flex-none items-start rounded-sm border border-solid border-neutral-border bg-error-700" />
              <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                color.viz.quality-low
              </span>
              <span className="text-caption font-caption text-subtext-color">
                → red.700
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Typography hierarchy — 5 levels
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              IBM Plex Sans for interface and reading, IBM Plex Mono for
              identifiers and queries.
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Sample</Table.HeaderCell>
                  <Table.HeaderCell>Spec</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
                    L1 Title
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-heading-1 font-heading-1 text-brand-primary">
                    Women in the 1912 Barcelona census
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    24/32 · 600 · font.title
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
                    L2 Section
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    Ingestion pipeline
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    20/28 · 600 · font.heading
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
                    L3 Subsection
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Mapping rules
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    16/24 · 600 · font.heading
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
                    L4 Body
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Each statement keeps its source, its transformation and its
                    human reviewer.
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    14/20 · 400 · font.body
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-subtext-color">
                    L4 Body · bold
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Label / emphasis
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    14/20 · 600 · font.label
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
                    L5 Caption
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-caption font-caption text-default-font">
                    Last ingested 3 hours ago by M. Puig
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    12/16 · 400 · font.body-sm
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-subtext-color">
                    L5 Micro
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-micro font-micro text-brand-900 uppercase">
                    PROVENANCE
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    10/12 · 500 · font.caption
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="h-16 w-auto flex-none">
                <Table.Cell className="h-11 w-40 flex-none">
                  <span className="whitespace-nowrap text-caption-bold font-caption-bold text-subtext-color">
                    L5 Mono
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    SELECT ?person WHERE &#123; ?person wdt:P21 wd:Q6581072
                    &#125;
                  </span>
                </Table.Cell>
                <Table.Cell className="h-11 w-64 flex-none">
                  <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color">
                    12/20 · IBM Plex Mono · font.mono
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Spacing — 4px grid
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Every padding, gap and offset is a multiple of 4px.
            </span>
          </div>
          <div className="flex w-full flex-wrap items-end gap-8 mobile:gap-6">
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-1 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                4
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-2 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                8
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-3 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                12
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-4 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                16
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-5 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                20
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-6 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                24
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-8 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                32
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-10 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                40
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-12 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                48
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex h-12 w-16 flex-none items-start rounded-sm bg-brand-300" />
              <span className="text-monospace-body font-monospace-body text-default-font">
                64
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[560px] flex-col items-start gap-3">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              Semantic aliases
            </span>
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Token</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>Preview</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.inset.xs
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    4px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-1 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.inset.sm
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    8px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-2 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.inset.md
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    16px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-4 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.inset.lg
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    24px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-6 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.inset.xl
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    32px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-8 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.gap.sm
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    4px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-1 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.gap.md
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    8px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-2 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    spacing.gap.lg
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    12px
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex h-3 w-3 flex-none items-start rounded-sm bg-brand-300" />
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Radius &amp; elevation
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Restrained corners and three surface levels; depth signals
              layering, not decoration.
            </span>
          </div>
          <div className="flex w-full flex-wrap items-start gap-8 mobile:gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-24 w-24 flex-none items-start rounded-sm border border-solid border-brand-300 bg-brand-50" />
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  rounded-sm
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  2px
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-24 w-24 flex-none items-start rounded-md border border-solid border-brand-300 bg-brand-50" />
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  rounded-md
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  4px
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-24 w-24 flex-none items-start rounded-lg border border-solid border-brand-300 bg-brand-50" />
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  rounded-lg
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  8px
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-24 w-24 flex-none items-start rounded-full border border-solid border-brand-300 bg-brand-50" />
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  rounded-full
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  9999px
                </span>
              </div>
            </div>
          </div>
          <div className="w-full items-start gap-6 rounded-lg bg-background-alt px-6 py-8 grid grid-cols-3 mobile:px-4 mobile:grid mobile:grid-cols-1">
            <div className="flex h-32 flex-col items-start justify-end gap-1 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
              <span className="text-monospace-body font-monospace-body text-default-font">
                surface.flat
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Backgrounds &amp; controls · border only
              </span>
            </div>
            <div className="flex h-32 flex-col items-start justify-end gap-1 rounded-lg border border-solid border-neutral-200 bg-default-background px-4 py-4 shadow-sm">
              <span className="text-monospace-body font-monospace-body text-default-font">
                surface.raised
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Cards, tables, dialogs · shadow-sm
              </span>
            </div>
            <div className="flex h-32 flex-col items-start justify-end gap-1 rounded-lg border border-solid border-neutral-200 bg-default-background px-4 py-4 shadow-lg">
              <span className="text-monospace-body font-monospace-body text-default-font">
                surface.overlay
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Modals, tooltips, menus · shadow-lg
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12 mobile:pt-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Status &amp; quality
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Review states for statements and confidence levels for extracted
              data.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              Review status
            </span>
            <div className="flex w-full flex-wrap items-center gap-3">
              <Badge variant="success" icon={<FeatherCheck />}>
                Validated
              </Badge>
              <Badge variant="warning" icon={<FeatherClock />}>
                Needs review
              </Badge>
              <Badge variant="error" icon={<FeatherX />}>
                Rejected
              </Badge>
              <Badge variant="brand" icon={<FeatherLayers />}>
                In staging
              </Badge>
              <Badge variant="neutral" icon={<FeatherFileText />}>
                Draft
              </Badge>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              Data quality
            </span>
            <div className="flex w-full flex-wrap items-center gap-8 mobile:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-3 w-3 flex-none items-start rounded-full bg-success-700" />
                <span className="text-body font-body text-default-font">
                  Quality high
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 w-3 flex-none items-start rounded-full bg-warning-300" />
                <span className="text-body font-body text-default-font">
                  Quality medium
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 w-3 flex-none items-start rounded-full bg-error-400" />
                <span className="text-body font-body text-default-font">
                  Quality low
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _01Foundations;
