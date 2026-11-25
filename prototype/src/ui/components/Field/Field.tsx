"use client";

import React from "react";
import { FeatherAlertCircle } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface FieldRootProps extends React.HTMLAttributes<HTMLDivElement> {
  requirement?: "required" | "optional";
  state?: "default" | "error";
  showInfo?: boolean;
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  errorText?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const FieldRoot = React.forwardRef<HTMLDivElement, FieldRootProps>(
  function FieldRoot(
    {
      requirement = "required",
      state = "default",
      showInfo = false,
      label,
      helpText,
      errorText,
      children,
      className,
      ...otherProps
    }: FieldRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c63eaa65 flex w-full flex-col items-start gap-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-1">
          {label ? (
            <span className="text-caption-bold font-caption-bold text-default-font">
              {label}
            </span>
          ) : null}
          <span
            className={SubframeUtils.twClassNames(
              "text-caption-bold font-caption-bold text-error-700",
              { hidden: requirement === "optional" }
            )}
          >
            *
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-subtext-color",
              { inline: requirement === "optional" }
            )}
          >
            Optional
          </span>
          <FeatherInfo
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-subtext-color",
              { "inline-flex": showInfo }
            )}
          />
        </div>
        {children ? (
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full flex-col items-start rounded-md",
              { "ring-1 ring-error-700": state === "error" }
            )}
          >
            {children}
          </div>
        ) : null}
        {helpText ? (
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color",
              { hidden: state === "error" }
            )}
          >
            {helpText}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full items-center gap-1",
            { flex: state === "error" }
          )}
        >
          <FeatherAlertCircle className="text-caption font-caption text-error-700" />
          {errorText ? (
            <span className="text-caption font-caption text-error-700">
              {errorText}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const Field = FieldRoot;
