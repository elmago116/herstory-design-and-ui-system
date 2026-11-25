"use client";
/*
 * Documentation:
 * Tabs — https://app.subframe.com/fbbaaa9a39d6/library?component=Tabs_e1ad5091-8ad8-4319-b1f7-3e47f0256c20
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  active?: boolean;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    disabled = false,
    active = false,
    iconOnly = false,
    icon = null,
    children,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/d5612535 flex h-10 cursor-pointer items-center justify-center gap-2 border-b border-solid border-neutral-border px-3 relative [.tabs-vertical_&]:w-full [.tabs-vertical_&]:justify-start [.tabs-vertical_&]:border-b-0 [.tabs-vertical_&]:border-r hover:bg-neutral-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-500",
        {
          "w-10 px-0 py-0 [.tabs-vertical_&]:w-10 [.tabs-vertical_&]:justify-center":
            iconOnly,
          "cursor-not-allowed hover:bg-transparent": disabled,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "hidden items-start absolute inset-0 [.tabs-vertical_&]:flex",
          { "bg-brand-50": active }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0.5 items-start absolute -bottom-px left-0 right-0 [.tabs-vertical_&]:top-0 [.tabs-vertical_&]:bottom-0 [.tabs-vertical_&]:left-auto [.tabs-vertical_&]:-right-px [.tabs-vertical_&]:h-auto [.tabs-vertical_&]:w-0.5",
          { "bg-brand-700": active }
        )}
      />
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-body font-body text-subtext-color relative group-hover/d5612535:text-default-font",
            {
              "text-brand-800 group-hover/d5612535:text-brand-800": active,
              "text-neutral-400 group-hover/d5612535:text-neutral-400":
                disabled,
            }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-body-bold font-body-bold text-subtext-color relative group-hover/d5612535:text-default-font",
            {
              hidden: iconOnly,
              "text-brand-800 group-hover/d5612535:text-brand-800": active,
              "text-neutral-400 group-hover/d5612535:text-neutral-400":
                disabled,
            }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

export interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  function TabsRoot(
    {
      children,
      orientation = "horizontal",
      className,
      ...otherProps
    }: TabsRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/e1ad5091 flex w-full items-end",
          {
            "flex-col items-start tabs-vertical w-50":
              orientation === "vertical",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children ? (
          <div
            className={SubframeUtils.twClassNames(
              "flex items-start self-stretch",
              {
                "flex-col self-stretch items-stretch":
                  orientation === "vertical",
              }
            )}
          >
            {children}
          </div>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch border-b border-solid border-neutral-border",
            {
              "min-h-[40px] border-r border-y-0 border-l-0 border-solid border-neutral-border self-stretch":
                orientation === "vertical",
            }
          )}
        />
      </div>
    );
  }
);

export const Tabs = Object.assign(TabsRoot, {
  Item,
});
