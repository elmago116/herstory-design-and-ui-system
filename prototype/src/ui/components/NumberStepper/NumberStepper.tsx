"use client";

import React from "react";
import { FeatherMinus } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface NumberStepperRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
  state?: "default" | "focus" | "at-min" | "disabled";
  className?: string;
}

const NumberStepperRoot = React.forwardRef<
  HTMLDivElement,
  NumberStepperRootProps
>(function NumberStepperRoot(
  {
    label,
    value,
    state = "default",
    className,
    ...otherProps
  }: NumberStepperRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/fa7248db flex items-center gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {label ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-caption-bold font-caption-bold text-default-font",
            { "text-neutral-400": state === "disabled" }
          )}
        >
          {label}
        </span>
      ) : null}
      <div
        className={SubframeUtils.twClassNames(
          "flex h-9 items-center overflow-hidden rounded-md border border-solid border-control-border bg-default-background",
          {
            "border border-solid border-neutral-300 bg-neutral-100":
              state === "disabled",
            "border border-solid border-focus outline outline-2 outline-offset-0 outline-focus":
              state === "focus",
          }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-9 w-9 flex-none items-center justify-center cursor-pointer hover:bg-neutral-100 active:bg-neutral-200",
            {
              "cursor-not-allowed hover:bg-transparent active:bg-transparent":
                state === "disabled" || state === "at-min",
            }
          )}
        >
          <FeatherMinus
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-neutral-400": state === "disabled" || state === "at-min" }
            )}
          />
        </div>
        <div className="flex w-px flex-none items-start self-stretch bg-neutral-border" />
        <input
          className={SubframeUtils.twClassNames(
            "w-16 flex-none self-stretch px-2 text-monospace-body font-monospace-body text-default-font outline-none placeholder:text-neutral-400 min-w-16 text-center",
            { "text-neutral-400": state === "disabled" }
          )}
          placeholder=""
          value={value}
          type="text"
        />
        <div className="flex w-px flex-none items-start self-stretch bg-neutral-border" />
        <div
          className={SubframeUtils.twClassNames(
            "flex h-9 w-9 flex-none items-center justify-center cursor-pointer hover:bg-neutral-100 active:bg-neutral-200",
            {
              "cursor-not-allowed hover:bg-transparent active:bg-transparent":
                state === "disabled",
            }
          )}
        >
          <FeatherPlus
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-neutral-400": state === "disabled" }
            )}
          />
        </div>
      </div>
    </div>
  );
});

export const NumberStepper = NumberStepperRoot;
