"use client";

import React from "react";
import * as SubframeUtils from "../../utils";
import { Badge } from "../Badge";

export interface PipelineStepperRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  step1Number?: React.ReactNode;
  step1Label?: React.ReactNode;
  step2Number?: React.ReactNode;
  step2Label?: React.ReactNode;
  step3Number?: React.ReactNode;
  step3Label?: React.ReactNode;
  step4Number?: React.ReactNode;
  step4Label?: React.ReactNode;
  step5Number?: React.ReactNode;
  step5Label?: React.ReactNode;
  step6Number?: React.ReactNode;
  step6Label?: React.ReactNode;
  children?: React.ReactNode;
  stageText?: React.ReactNode;
  className?: string;
}

const PipelineStepperRoot = React.forwardRef<
  HTMLDivElement,
  PipelineStepperRootProps
>(function PipelineStepperRoot(
  {
    step1Number,
    step1Label,
    step2Number,
    step2Label,
    step3Number,
    step3Label,
    step4Number,
    step4Label,
    step5Number,
    step5Label,
    step6Number,
    step6Label,
    children,
    stageText,
    className,
    ...otherProps
  }: PipelineStepperRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full items-center gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-3 py-2 shadow-sm",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex grow shrink-0 basis-0 items-center gap-2">
        <div className="flex items-center gap-1.5">
          {step1Number ? (
            <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
              {step1Number}
            </span>
          ) : null}
          {step1Label ? (
            <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
              {step1Label}
            </span>
          ) : null}
        </div>
        <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
          {" "}
        </span>
        <div className="flex items-center gap-1.5">
          {step2Number ? (
            <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
              {step2Number}
            </span>
          ) : null}
          {step2Label ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {step2Label}
            </span>
          ) : null}
        </div>
        <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
          {" "}
        </span>
        <div className="flex items-center gap-1.5">
          {step3Number ? (
            <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
              {step3Number}
            </span>
          ) : null}
          {step3Label ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {step3Label}
            </span>
          ) : null}
        </div>
        <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
          {" "}
        </span>
        <div className="flex items-center gap-1.5">
          {step4Number ? (
            <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
              {step4Number}
            </span>
          ) : null}
          {step4Label ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {step4Label}
            </span>
          ) : null}
        </div>
        <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
          {" "}
        </span>
        <div className="flex items-center gap-1.5">
          {step5Number ? (
            <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
              {step5Number}
            </span>
          ) : null}
          {step5Label ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {step5Label}
            </span>
          ) : null}
        </div>
        <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
          {" "}
        </span>
        <div className="flex items-center gap-1.5">
          {step6Number ? (
            <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
              {step6Number}
            </span>
          ) : null}
          {step6Label ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {step6Label}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-2 ml-2">
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        <Badge className="whitespace-nowrap" variant="brand">
          {children}
        </Badge>
        {stageText ? (
          <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
            {stageText}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const PipelineStepper = PipelineStepperRoot;
