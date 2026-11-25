"use client";
/*
 * Documentation:
 * Card — https://app.subframe.com/fbbaaa9a39d6/library?component=Card_2127be4a-5177-436c-8d65-13ab999d6d05
 */

import React from "react";
import { FeatherCheck } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface CardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: "default" | "actionable" | "hover" | "selected";
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  meta?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  function CardRoot(
    {
      variant = "default",
      icon,
      title,
      subtitle,
      children,
      meta,
      action,
      className,
      ...otherProps
    }: CardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/2127be4a flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4",
          {
            "border-2 border-solid border-brand-700 bg-neutral-50":
              variant === "selected",
            "border border-solid border-neutral-400 shadow-md":
              variant === "hover",
            "shadow-sm hover:shadow-md hover:border-neutral-400":
              variant === "actionable",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-start gap-3">
          {icon ? <div className="flex items-start">{icon}</div> : null}
          <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-1">
            {title ? (
              <span className="w-full whitespace-nowrap text-heading-3 font-heading-3 text-default-font truncate">
                {title}
              </span>
            ) : null}
            {subtitle ? (
              <span className="w-full whitespace-nowrap text-caption font-caption text-subtext-color truncate">
                {subtitle}
              </span>
            ) : null}
          </div>
          <FeatherChevronRight
            className={SubframeUtils.twClassNames(
              "hidden text-heading-3 font-heading-3 text-subtext-color",
              { inline: variant === "hover" || variant === "actionable" }
            )}
          />
          <div
            className={SubframeUtils.twClassNames(
              "hidden h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-700",
              { flex: variant === "selected" }
            )}
          >
            <FeatherCheck className="text-caption font-caption text-white" />
          </div>
        </div>
        {children ? (
          <div className="flex w-full flex-col items-start gap-2">
            {children}
          </div>
        ) : null}
        <div className="flex w-full items-center justify-between gap-2">
          {meta ? (
            <span className="min-w-[0px] grow shrink-0 basis-0 whitespace-nowrap text-caption font-caption text-subtext-color truncate">
              {meta}
            </span>
          ) : null}
          {action ? <div className="flex items-center">{action}</div> : null}
        </div>
      </div>
    );
  }
);

export const Card = CardRoot;
