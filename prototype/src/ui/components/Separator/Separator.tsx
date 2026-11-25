"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface SeparatorRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: "none" | "with-label";
  text?: React.ReactNode;
  className?: string;
}

const SeparatorRoot = React.forwardRef<HTMLDivElement, SeparatorRootProps>(
  function SeparatorRoot(
    {
      orientation = "horizontal",
      label = "none",
      text,
      className,
      ...otherProps
    }: SeparatorRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/3462e84c flex w-full items-center gap-3",
          {
            "h-full min-h-[16px] w-px flex-col gap-0 items-stretch":
              orientation === "vertical",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-px grow shrink-0 basis-0 items-start bg-neutral-border",
            { "h-auto grow shrink-0 basis-0": orientation === "vertical" }
          )}
        />
        {text ? (
          <span
            className={SubframeUtils.twClassNames(
              "hidden whitespace-nowrap text-caption font-caption text-subtext-color shrink-0",
              { inline: label === "with-label" }
            )}
          >
            {text}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-px grow shrink-0 basis-0 items-start bg-neutral-border",
            {
              flex: label === "with-label",
              "grow shrink-0 basis-0": orientation === "vertical",
            }
          )}
        />
      </div>
    );
  }
);

export const Separator = SeparatorRoot;
