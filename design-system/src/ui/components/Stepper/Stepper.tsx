"use client";
/*
 * Documentation:
 * Stepper — https://app.subframe.com/fbbaaa9a39d6/library?component=Stepper_3c5d47dc-1b1a-45d9-b244-18422d7bfb56
 */

import React from "react";
import { FeatherArrowRight } from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface SecondaryStepProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "completed" | "active";
  firstStep?: boolean;
  lastStep?: boolean;
  stepNumber?: React.ReactNode;
  label?: React.ReactNode;
  variant2?: "process";
  className?: string;
}

const SecondaryStep = React.forwardRef<HTMLDivElement, SecondaryStepProps>(
  function SecondaryStep(
    {
      variant = "default",
      firstStep = false,
      lastStep = false,
      stepNumber,
      label,
      variant2 = "process",
      className,
      ...otherProps
    }: SecondaryStepProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c1145464 flex w-full cursor-pointer flex-col items-center justify-center gap-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full items-center justify-center gap-2",
            { "gap-0": variant === "active" }
          )}
        >
          {stepNumber ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-caption-bold font-caption-bold text-subtext-color",
                {
                  "text-brand-700":
                    variant === "active" || variant === "completed",
                }
              )}
            >
              {stepNumber}
            </span>
          ) : null}
        </div>
        <div className="flex items-center justify-center gap-1">
          {label ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-body font-body text-subtext-color text-center group-hover/c1145464:text-default-font",
                {
                  "text-body-bold font-body-bold text-default-font":
                    variant === "active",
                }
              )}
            >
              {label}
            </span>
          ) : null}
          <FeatherArrowRight
            className={SubframeUtils.twClassNames(
              "text-caption-bold font-caption-bold text-subtext-color",
              {
                hidden: lastStep,
                "text-brand-700":
                  variant === "active" || variant === "completed",
              }
            )}
          />
        </div>
      </div>
    );
  }
);

export interface StepperRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const StepperRoot = React.forwardRef<HTMLDivElement, StepperRootProps>(
  function StepperRoot(
    { children, className, ...otherProps }: StepperRootProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full items-start justify-center rounded-md px-2 py-2 shadow-lg",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  }
);

export const Stepper = Object.assign(StepperRoot, {
  SecondaryStep,
});
