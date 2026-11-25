"use client";

import React from "react";
import { FeatherChevronRight } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  active?: boolean;
  variant?: "option-1" | "option-2";
  className?: string;
}

const Item = React.forwardRef<HTMLSpanElement, ItemProps>(function Item(
  {
    children,
    active = false,
    variant = "option-1",
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return children ? (
    <span
      className={SubframeUtils.twClassNames(
        "group/bbdc1640 line-clamp-1 cursor-pointer break-words text-body font-body text-subtext-color hover:text-default-font",
        {
          "text-brand-primary hover:text-body-bold hover:font-body-bold active:text-brand-primary":
            variant === "option-2",
          "text-body-bold font-body-bold text-default-font": active,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </span>
  ) : null;
});

export interface DividerProps
  extends React.ComponentProps<typeof FeatherChevronRight> {
  className?: string;
}

const Divider = React.forwardRef<
  React.ElementRef<typeof FeatherChevronRight>,
  DividerProps
>(function Divider({ className, ...otherProps }: DividerProps, ref) {
  return (
    <FeatherChevronRight
      className={SubframeUtils.twClassNames(
        "text-body font-body text-subtext-color",
        className
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

export interface BreadcrumbsRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "option-1" | "option-2";
  className?: string;
}

const BreadcrumbsRoot = React.forwardRef<HTMLDivElement, BreadcrumbsRootProps>(
  function BreadcrumbsRoot(
    {
      children,
      variant = "option-1",
      className,
      ...otherProps
    }: BreadcrumbsRootProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeUtils.twClassNames(
          "group/8898334b flex items-center gap-2",
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

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item,
  Divider,
});
