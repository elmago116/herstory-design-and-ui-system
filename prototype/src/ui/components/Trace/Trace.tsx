"use client";

import React from "react";
import { FeatherCheckCircle } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherLoader2 } from "@/ui/core";
import { FeatherRoute } from "@/ui/core";
import { FeatherXCircle } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface StepProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  duration?: React.ReactNode;
  detail?: React.ReactNode;
  status?: "done" | "running" | "failed";
  expanded?: boolean;
  last?: boolean;
  className?: string;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(function Step(
  {
    title,
    duration,
    detail,
    status = "done",
    expanded = false,
    last = false,
    className,
    ...otherProps
  }: StepProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/dc5e5ceb flex w-full gap-3 items-stretch",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex flex-col items-center gap-1 self-stretch">
        <div className="flex h-5 w-5 flex-none items-center justify-center">
          <FeatherCheckCircle
            className={SubframeUtils.twClassNames(
              "text-body font-body text-success-700",
              { hidden: status === "failed" || status === "running" }
            )}
          />
          <FeatherLoader2
            className={SubframeUtils.twClassNames(
              "hidden text-body font-body text-brand-700 animate-spin",
              { "inline-flex": status === "running" }
            )}
          />
          <FeatherXCircle
            className={SubframeUtils.twClassNames(
              "hidden text-body font-body text-error-700",
              { "inline-flex": status === "failed" }
            )}
          />
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex min-h-[8px] w-px grow shrink-0 basis-0 items-start bg-neutral-border",
            { hidden: last }
          )}
        />
      </div>
      <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-2 pb-4">
        <div className="flex w-full items-center gap-3">
          {title ? (
            <span className="min-w-[0px] grow shrink-0 basis-0 whitespace-nowrap text-body font-body text-default-font truncate">
              {title}
            </span>
          ) : null}
          {duration ? (
            <span className="text-monospace-body font-monospace-body text-subtext-color">
              {duration}
            </span>
          ) : null}
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-3 py-2",
            { flex: expanded }
          )}
        >
          {detail ? (
            <span className="w-full whitespace-pre-wrap break-words text-monospace-body font-monospace-body text-default-font">
              {detail}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export interface TraceRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  summary?: React.ReactNode;
  state?: "expanded" | "collapsed";
  children?: React.ReactNode;
  className?: string;
}

const TraceRoot = React.forwardRef<HTMLDivElement, TraceRootProps>(
  function TraceRoot(
    {
      title,
      summary,
      state = "expanded",
      children,
      className,
      ...otherProps
    }: TraceRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/eb8352b0 flex w-full flex-col items-start rounded-md bg-default-background",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-2 px-4 py-3">
          <FeatherRoute className="text-body font-body text-brand-700" />
          {title ? (
            <span className="text-caption-bold font-caption-bold text-default-font">
              {title}
            </span>
          ) : null}
          {summary ? (
            <span className="grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
              {summary}
            </span>
          ) : null}
          {state === "collapsed" ? (
            <FeatherChevronDown className="text-body font-body text-subtext-color" />
          ) : (
            <FeatherChevronUp className="text-body font-body text-subtext-color" />
          )}
        </div>
        {children ? (
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full flex-col items-start border-t border-solid border-neutral-border px-4 pt-4",
              { hidden: state === "collapsed" }
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
    );
  }
);

export const Trace = Object.assign(TraceRoot, {
  Step,
});
