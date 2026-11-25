"use client";

import React from "react";
import { FeatherGripVertical } from "@/ui/core";
import { FeatherLink2 } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  tag?: React.ReactNode;
  state?: "default" | "drag-source" | "dragging" | "drop-target" | "mapped";
  className?: string;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(function Chip(
  { label, tag, state = "default", className, ...otherProps }: ChipProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/c1d348ce flex h-10 w-full items-center gap-2 rounded-md border border-solid border-neutral-border bg-white px-3",
        {
          "bg-success-50 border border-solid border-neutral-border border-l-4 border-l-success-700":
            state === "mapped",
          "border-2 border-dashed border-brand-700 bg-brand-50":
            state === "drop-target",
          "border border-solid border-brand-700 shadow-lg rotate-2":
            state === "dragging",
          "border border-dashed border-neutral-400 opacity-50":
            state === "drag-source",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <FeatherGripVertical className="text-body font-body text-neutral-500" />
      <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-2">
        {label ? (
          <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font truncate">
            {label}
          </span>
        ) : null}
        {tag ? (
          <span className="text-caption font-caption text-subtext-color">
            {tag}
          </span>
        ) : null}
      </div>
      <span
        className={SubframeUtils.twClassNames(
          "hidden text-caption-bold font-caption-bold text-brand-700",
          { inline: state === "drop-target" }
        )}
      >
        Drop to map
      </span>
      <FeatherLink2
        className={SubframeUtils.twClassNames(
          "hidden text-body font-body text-success-700",
          { inline: state === "mapped" }
        )}
      />
    </div>
  );
});

export interface MappingBoardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "idle" | "dragging";
  className?: string;
}

const MappingBoardRoot = React.forwardRef<
  HTMLDivElement,
  MappingBoardRootProps
>(function MappingBoardRoot(
  { state = "idle", className, ...otherProps }: MappingBoardRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/0482c2f1 flex flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex items-start relative mobile:flex-col mobile:gap-6">
        <div className="flex w-64 flex-none flex-col items-start gap-2">
          <div className="flex h-6 w-full flex-none items-center gap-2">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Source columns
            </span>
            <span className="text-caption font-caption text-subtext-color rounded-full bg-neutral-100 px-2">
              5
            </span>
          </div>
          <Chip label="nom_complet" tag="string" state="mapped" />
          <Chip
            label="data_naixement"
            tag="date"
            state={state === "dragging" ? "drag-source" : "default"}
          />
          <Chip label="ofici" tag="string" state="mapped" />
          <Chip label="lloc_naixement" tag="string" />
          <Chip label="data_defuncio" tag="date" />
        </div>
        <div className="flex w-16 flex-none flex-col items-start gap-2 mobile:hidden">
          <div className="flex h-6 w-full flex-none items-start" />
          <div className="flex h-52 w-full flex-none items-start relative">
            <div className="flex items-start absolute left-0 top-0 text-[64px] text-brand-700">
              <svg
                className="font-['IBM_Plex_Sans'] text-[64px] font-[400] leading-[96px] text-brand-700"
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
              >
                <ellipse
                  cx="2"
                  cy="20"
                  rx="2"
                  ry="2"
                  fill="currentColor"
                  fillOpacity="1"
                />
                <rect
                  x="0"
                  y="19.25"
                  width="64"
                  height="1.5"
                  rx="0"
                  ry="0"
                  fill="currentColor"
                  fillOpacity="1"
                />
                <ellipse
                  cx="62"
                  cy="20"
                  rx="2"
                  ry="2"
                  fill="currentColor"
                  fillOpacity="1"
                />
              </svg>
            </div>
            <div className="flex items-start absolute left-0 top-15 text-[64px] text-brand-700">
              <svg
                className="font-['IBM_Plex_Sans'] text-[64px] font-[400] leading-[96px] text-brand-700"
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
              >
                <ellipse
                  cx="2"
                  cy="56"
                  rx="2"
                  ry="2"
                  fill="currentColor"
                  fillOpacity="1"
                />
                <path
                  d="M0 55.25c32 0 32-48 64-48v1.5c-31.25 0-31.25 48-64 48Z"
                  fill="currentColor"
                  fillOpacity="1"
                />
                <ellipse
                  cx="62"
                  cy="8"
                  rx="2"
                  ry="2"
                  fill="currentColor"
                  fillOpacity="1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-64 flex-none flex-col items-start gap-2">
          <div className="flex h-6 w-full flex-none items-center gap-2">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Target properties
            </span>
            <span className="text-caption font-caption text-subtext-color rounded-full bg-neutral-100 px-2">
              5
            </span>
          </div>
          <Chip label="name" tag="P2561" state="mapped" />
          <Chip label="occupation" tag="P106" state="mapped" />
          <Chip
            label="date of birth"
            tag="P569"
            state={state === "dragging" ? "drop-target" : "default"}
          />
          <Chip label="place of birth" tag="P19" />
          <Chip label="date of death" tag="P570" />
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-56 flex-none items-start absolute left-44 top-20",
            { flex: state === "dragging" }
          )}
        >
          <Chip label="data_naixement" tag="date" state="dragging" />
        </div>
      </div>
    </div>
  );
});

export const MappingBoard = Object.assign(MappingBoardRoot, {
  Chip,
});
