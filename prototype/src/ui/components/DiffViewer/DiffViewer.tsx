"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface DiffLineProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "unchanged" | "added" | "removed" | "empty";
  lineNumber?: React.ReactNode;
  text?: React.ReactNode;
  className?: string;
}

const DiffLine = React.forwardRef<HTMLDivElement, DiffLineProps>(
  function DiffLine(
    {
      variant = "unchanged",
      lineNumber,
      text,
      className,
      ...otherProps
    }: DiffLineProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/1ebdb49f flex min-h-[20px] w-full items-start gap-2 bg-default-background px-3",
          {
            "bg-neutral-50": variant === "empty",
            "bg-error-50": variant === "removed",
            "bg-success-50": variant === "added",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-8 flex-none items-start justify-end">
          {lineNumber ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-monospace-body font-monospace-body text-neutral-500",
                { hidden: variant === "empty" }
              )}
            >
              {lineNumber}
            </span>
          ) : null}
        </div>
        <div className="flex w-4 flex-none items-start justify-center">
          <span
            className={SubframeUtils.twClassNames(
              "hidden text-monospace-body font-monospace-body text-success-700",
              { inline: variant === "added" }
            )}
          >
            +
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "hidden text-monospace-body font-monospace-body text-error-700",
              { inline: variant === "removed" }
            )}
          >
            −
          </span>
        </div>
        {text ? (
          <span
            className={SubframeUtils.twClassNames(
              "grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font whitespace-pre",
              { hidden: variant === "empty" }
            )}
          >
            {text}
          </span>
        ) : null}
      </div>
    );
  }
);

export interface DiffViewerRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "side-by-side" | "inline";
  beforeLabel?: React.ReactNode;
  afterLabel?: React.ReactNode;
  additions?: React.ReactNode;
  deletions?: React.ReactNode;
  beforeLines?: React.ReactNode;
  afterLines?: React.ReactNode;
  inlineLines?: React.ReactNode;
  className?: string;
}

const DiffViewerRoot = React.forwardRef<HTMLDivElement, DiffViewerRootProps>(
  function DiffViewerRoot(
    {
      layout = "side-by-side",
      beforeLabel,
      afterLabel,
      additions,
      deletions,
      beforeLines,
      afterLines,
      inlineLines,
      className,
      ...otherProps
    }: DiffViewerRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/9b46ea44 flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center border-b border-solid border-neutral-border bg-background-alt">
          <div
            className={SubframeUtils.twClassNames(
              "flex grow shrink-0 basis-0 items-center border-r border-solid border-neutral-border px-3 py-2",
              {
                "border-none pr-0 shrink-0 grow-0 basis-auto":
                  layout === "inline",
              }
            )}
          >
            {beforeLabel ? (
              <span className="text-caption-bold font-caption-bold text-default-font">
                {beforeLabel}
              </span>
            ) : null}
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden items-center px-2 py-2",
              { flex: layout === "inline" }
            )}
          >
            <span className="text-caption font-caption text-neutral-500">
              →
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 items-center gap-2 px-3 py-2">
            {afterLabel ? (
              <span
                className={SubframeUtils.twClassNames(
                  "grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font",
                  { "pl-0": layout === "inline" }
                )}
              >
                {afterLabel}
              </span>
            ) : null}
            {additions ? (
              <span className="text-caption font-caption text-success-700">
                {additions}
              </span>
            ) : null}
            {deletions ? (
              <span className="text-caption font-caption text-error-700">
                {deletions}
              </span>
            ) : null}
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full items-start py-1 overflow-x-auto",
            { hidden: layout === "inline" }
          )}
        >
          {beforeLines ? (
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch border-r border-solid border-neutral-border">
              {beforeLines}
            </div>
          ) : null}
          {afterLines ? (
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch">
              {afterLines}
            </div>
          ) : null}
        </div>
        {inlineLines ? (
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full flex-col items-start py-1 overflow-x-auto",
              { flex: layout === "inline" }
            )}
          >
            {inlineLines}
          </div>
        ) : null}
      </div>
    );
  }
);

export const DiffViewer = Object.assign(DiffViewerRoot, {
  DiffLine,
});
