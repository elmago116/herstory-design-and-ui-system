"use client";

import React from "react";
import * as SubframeUtils from "../../utils";
import { Progress } from "../Progress";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: React.ReactNode;
  label?: React.ReactNode;
  status?: "complete" | "active" | "review" | "pending";
  statusLabel?: React.ReactNode;
  metricValue?: React.ReactNode;
  metricLabel?: React.ReactNode;
  completion?: number;
  detail?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    index,
    label,
    status = "active",
    statusLabel,
    metricValue,
    metricLabel,
    completion = 64,
    detail,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/cf7c228a flex w-full min-w-[0px] cursor-pointer gap-3 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4 items-stretch hover:bg-input-background focus-within:border focus-within:border-solid focus-within:border-brand-primary",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex w-0.5 flex-none flex-col items-start rounded-full bg-brand-primary",
          {
            "bg-neutral-300": status === "pending",
            "bg-warning-500": status === "review",
            "bg-success-500": status === "complete",
          }
        )}
      />
      <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-3">
        <div className="flex w-full items-center justify-between gap-2">
          {index ? (
            <span className="text-monospace-body font-monospace-body text-subtext-color">
              {index}
            </span>
          ) : null}
          <div className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-0.5">
            <div
              className={SubframeUtils.twClassNames(
                "flex h-1.5 w-1.5 flex-none items-start rounded-full bg-brand-primary",
                {
                  "bg-neutral-500": status === "pending",
                  "bg-warning-900": status === "review",
                  "bg-success-500": status === "complete",
                }
              )}
            />
            {statusLabel ? (
              <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
                {statusLabel}
              </span>
            ) : null}
          </div>
        </div>
        {label ? (
          <span className="line-clamp-2 w-full text-body-bold font-body-bold text-default-font">
            {label}
          </span>
        ) : null}
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full flex-wrap gap-1 items-baseline">
            {metricValue ? (
              <span className="text-heading-3 font-heading-3 text-default-font">
                {metricValue}
              </span>
            ) : null}
            {metricLabel ? (
              <span className="text-caption font-caption text-subtext-color">
                {metricLabel}
              </span>
            ) : null}
          </div>
          <Progress value={completion} />
          {detail ? (
            <span className="line-clamp-2 w-full text-caption font-caption text-subtext-color">
              {detail}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export interface DashboardStepperRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DashboardStepperRoot = React.forwardRef<
  HTMLDivElement,
  DashboardStepperRootProps
>(function DashboardStepperRoot(
  { children, className, ...otherProps }: DashboardStepperRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "h-full w-full gap-3 grid grid-cols-4 items-stretch mobile:grid mobile:items-stretch mobile:grid-cols-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const DashboardStepper = Object.assign(DashboardStepperRoot, {
  Item,
});
