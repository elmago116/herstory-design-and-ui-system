"use client";

import React from "react";
import { FeatherChevronRight } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface BreadcrumbsMainProcessRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  step1Label?: React.ReactNode;
  step2Label?: React.ReactNode;
  step3Label?: React.ReactNode;
  step4Label?: React.ReactNode;
  step5Label?: React.ReactNode;
  step6Label?: React.ReactNode;
  className?: string;
}

const BreadcrumbsMainProcessRoot = React.forwardRef<
  HTMLDivElement,
  BreadcrumbsMainProcessRootProps
>(function BreadcrumbsMainProcessRoot(
  {
    step1Label,
    step2Label,
    step3Label,
    step4Label,
    step5Label,
    step6Label,
    className,
    ...otherProps
  }: BreadcrumbsMainProcessRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/c3d8abca flex items-center gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {step1Label ? (
        <span className="line-clamp-1 break-words text-body font-body text-brand-500 group-active/c3d8abca:text-heading-3 group-active/c3d8abca:font-heading-3">
          {step1Label}
        </span>
      ) : null}
      <FeatherChevronRight className="text-body font-body text-subtext-color group-active/c3d8abca:text-brand-primary" />
      {step2Label ? (
        <span className="line-clamp-1 break-words text-body font-body text-subtext-color group-active/c3d8abca:text-heading-3 group-active/c3d8abca:font-heading-3">
          {step2Label}
        </span>
      ) : null}
      <FeatherChevronRight className="text-body font-body text-subtext-color group-active/c3d8abca:text-brand-primary" />
      {step3Label ? (
        <span className="line-clamp-1 break-words text-body font-body text-subtext-color group-active/c3d8abca:text-heading-3 group-active/c3d8abca:font-heading-3">
          {step3Label}
        </span>
      ) : null}
      <FeatherChevronRight className="text-body font-body text-subtext-color group-active/c3d8abca:text-brand-primary" />
      {step4Label ? (
        <span className="line-clamp-1 break-words text-body font-body text-subtext-color group-active/c3d8abca:text-heading-3 group-active/c3d8abca:font-heading-3">
          {step4Label}
        </span>
      ) : null}
      <FeatherChevronRight className="text-body font-body text-subtext-color group-active/c3d8abca:text-brand-primary" />
      {step5Label ? (
        <span className="line-clamp-1 break-words text-body font-body text-subtext-color group-active/c3d8abca:text-heading-3 group-active/c3d8abca:font-heading-3">
          {step5Label}
        </span>
      ) : null}
      <FeatherChevronRight className="text-body font-body text-subtext-color group-active/c3d8abca:text-brand-primary" />
      {step6Label ? (
        <span className="line-clamp-1 break-words text-body font-body text-subtext-color group-active/c3d8abca:text-body-bold group-active/c3d8abca:font-body-bold">
          {step6Label}
        </span>
      ) : null}
    </div>
  );
});

export const BreadcrumbsMainProcess = BreadcrumbsMainProcessRoot;
