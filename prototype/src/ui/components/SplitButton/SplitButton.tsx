"use client";

import React from "react";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherDownload } from "@/ui/core";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  className?: string;
}

const Option = React.forwardRef<HTMLDivElement, OptionProps>(function Option(
  { label, className, ...otherProps }: OptionProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/73413f8b flex h-9 w-full cursor-pointer items-center px-3 hover:bg-neutral-50",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {label ? (
        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
          {label}
        </span>
      ) : null}
    </div>
  );
});

export interface SplitButtonRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  emphasis?: "primary" | "secondary";
  state?: "closed" | "open";
  icon?: React.ReactNode;
  label?: React.ReactNode;
  menuTitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const SplitButtonRoot = React.forwardRef<HTMLDivElement, SplitButtonRootProps>(
  function SplitButtonRoot(
    {
      disabled = false,
      emphasis = "primary",
      state = "closed",
      icon = <FeatherDownload />,
      label,
      menuTitle,
      children,
      className,
      ...otherProps
    }: SplitButtonRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/502e687b flex flex-col items-start gap-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex items-start">
          <div
            className={SubframeUtils.twClassNames(
              "flex h-10 items-center gap-2 rounded-l-md bg-brand-primary px-4 cursor-pointer hover:bg-brand-800 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus",
              {
                "border-y border-l border-r-0 border-solid border-control-border bg-default-background hover:bg-neutral-50":
                  emphasis === "secondary",
                "bg-neutral-200 hover:bg-neutral-200": disabled,
              }
            )}
          >
            {icon ? (
              <SubframeCore.IconWrapper
                className={SubframeUtils.twClassNames(
                  "text-body font-body text-white",
                  {
                    "text-default-font": emphasis === "secondary",
                    "text-neutral-400": disabled,
                  }
                )}
              >
                {icon}
              </SubframeCore.IconWrapper>
            ) : null}
            {label ? (
              <span
                className={SubframeUtils.twClassNames(
                  "whitespace-nowrap text-body-bold font-body-bold text-white",
                  {
                    "text-default-font": emphasis === "secondary",
                    "text-neutral-400": disabled,
                  }
                )}
              >
                {label}
              </span>
            ) : null}
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "flex h-10 w-10 flex-none items-center justify-center rounded-r-md border-l border-solid border-brand-800 bg-brand-primary cursor-pointer hover:bg-brand-800 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus",
              {
                "border border-solid border-control-border bg-default-background hover:bg-neutral-50":
                  emphasis === "secondary",
                "border-l border-y-0 border-r-0 border-solid border-neutral-300 bg-neutral-200 hover:bg-neutral-200":
                  disabled,
              }
            )}
          >
            <FeatherChevronDown
              className={SubframeUtils.twClassNames(
                "text-body font-body text-white",
                {
                  "rotate-180": state === "open",
                  "text-default-font": emphasis === "secondary",
                  "text-neutral-400": disabled,
                }
              )}
            />
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden max-h-[256px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background py-1 shadow-lg w-50 overflow-auto",
            { flex: state === "open" }
          )}
        >
          <div className="flex w-full items-center px-3 pt-2 pb-1">
            {menuTitle ? (
              <span className="text-caption font-caption text-subtext-color">
                {menuTitle}
              </span>
            ) : null}
          </div>
          {children ? (
            <div className="flex w-full flex-col items-start">{children}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const SplitButton = Object.assign(SplitButtonRoot, {
  Option,
});
