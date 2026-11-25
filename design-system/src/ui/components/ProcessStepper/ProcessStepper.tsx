"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: React.ReactNode;
  label?: React.ReactNode;
  state?: "complete" | "active" | "upcoming";
  lastStep?: boolean;
  className?: string;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(function Step(
  {
    number,
    label,
    state = "upcoming",
    lastStep = false,
    className,
    ...otherProps
  }: StepProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/bf152645 flex items-center gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {number ? (
        <span
          className={SubframeUtils.twClassNames(
            "h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100",
            {
              "text-white bg-brand-500": state === "active",
              "text-success-800 bg-success-100": state === "complete",
            }
          )}
        >
          {number}
        </span>
      ) : null}
      {label ? (
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-subtext-color",
            {
              "font-[700] text-brand-700": state === "active",
              "text-default-font": state === "complete",
            }
          )}
        >
          {label}
        </span>
      ) : null}
      <span
        className={SubframeUtils.twClassNames(
          "h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300",
          { hidden: lastStep }
        )}
      >
        {" "}
      </span>
    </div>
  );
});

export interface ProcessStepperRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ProcessStepperRoot = React.forwardRef<
  HTMLDivElement,
  ProcessStepperRootProps
>(function ProcessStepperRoot(
  { children, className, ...otherProps }: ProcessStepperRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full flex-wrap items-center gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-3 py-2 shadow-sm",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const ProcessStepper = Object.assign(ProcessStepperRoot, {
  Step,
});
