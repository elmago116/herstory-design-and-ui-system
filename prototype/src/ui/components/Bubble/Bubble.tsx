"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface CitationChipProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  className?: string;
}

const CitationChip = React.forwardRef<HTMLDivElement, CitationChipProps>(
  function CitationChip(
    { label, className, ...otherProps }: CitationChipProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/eee0dd63 flex h-4 min-w-[16px] cursor-pointer items-center justify-center rounded-full bg-brand-50 px-1 active:bg-brand-900",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {label ? (
          <span className="text-caption-bold font-caption-bold text-brand-800 group-hover/eee0dd63:text-brand-500 group-active/eee0dd63:text-neutral-0">
            {label}
          </span>
        ) : null}
        <span className="text-caption-bold font-caption-bold text-brand-800 group-hover/eee0dd63:text-brand-500 group-active/eee0dd63:text-neutral-0">
          Font A
        </span>
      </div>
    );
  }
);

export interface BubbleRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
  role?: "assistant" | "user";
  text?: React.ReactNode;
  citations?: React.ReactNode;
  className?: string;
}

const BubbleRoot = React.forwardRef<HTMLDivElement, BubbleRootProps>(
  function BubbleRoot(
    {
      role = "assistant",
      text,
      citations,
      className,
      ...otherProps
    }: BubbleRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/e81bf0f6 flex w-full flex-col items-start gap-2",
          { "items-end": role === "user" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex max-w-[560px] flex-col items-start gap-2 rounded-lg bg-neutral-100 px-4 py-3",
            { "bg-brand-700": role === "user" }
          )}
        >
          {text ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-body font-body text-default-font",
                { "text-white": role === "user" }
              )}
            >
              {text}
            </span>
          ) : null}
          {citations ? (
            <div
              className={SubframeUtils.twClassNames(
                "flex flex-wrap items-center gap-1",
                { hidden: role === "user" }
              )}
            >
              {citations}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const Bubble = Object.assign(BubbleRoot, {
  CitationChip,
});
