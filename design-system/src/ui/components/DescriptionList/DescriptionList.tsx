"use client";
/*
 * Documentation:
 * Description List — https://app.subframe.com/fbbaaa9a39d6/library?component=Description+List_38098dc1-a826-4462-82e4-438f2346003f
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  variant?: "default" | "link";
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    label,
    value,
    layout = "horizontal",
    variant = "default",
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/37726bdd flex flex-col items-start gap-1",
        {
          "w-full flex-row gap-4 border-b border-x-0 border-t-0 border-solid border-neutral-border px-0 py-3":
            layout === "vertical",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {label ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-caption font-caption text-subtext-color",
            {
              "w-40 flex-none text-caption-bold font-caption-bold mobile:w-28 mobile:flex-none":
                layout === "vertical",
            }
          )}
        >
          {label}
        </span>
      ) : null}
      {value ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-body font-body text-default-font",
            { "text-link hover:underline": variant === "link" }
          )}
        >
          {value}
        </span>
      ) : null}
    </div>
  );
});

export interface DescriptionListRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  className?: string;
}

const DescriptionListRoot = React.forwardRef<
  HTMLDivElement,
  DescriptionListRootProps
>(function DescriptionListRoot(
  {
    children,
    layout = "horizontal",
    className,
    ...otherProps
  }: DescriptionListRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "group/38098dc1 flex flex-wrap items-start gap-x-8 mobile:gap-x-6",
        {
          "w-full flex-col flex-nowrap border-t border-x-0 border-b-0 border-solid border-neutral-border":
            layout === "vertical",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const DescriptionList = Object.assign(DescriptionListRoot, {
  Item,
});
