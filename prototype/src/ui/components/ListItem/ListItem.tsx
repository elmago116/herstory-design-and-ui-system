"use client";

import React from "react";
import { FeatherFileText } from "@/ui/core";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface ListItemRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  state?: "default" | "hover" | "selected";
  leading?: "icon" | "thumbnail";
  title?: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  icon?: React.ReactNode;
  thumbnail?: string;
  badge?: React.ReactNode;
  className?: string;
}

const ListItemRoot = React.forwardRef<HTMLDivElement, ListItemRootProps>(
  function ListItemRoot(
    {
      state = "default",
      leading = "icon",
      title,
      description,
      meta,
      icon = <FeatherFileText />,
      thumbnail,
      badge,
      className,
      ...otherProps
    }: ListItemRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/51039ade flex min-h-[56px] w-full cursor-pointer items-center gap-3 overflow-hidden rounded-md px-4 py-3 group/listitem relative hover:bg-neutral-50",
          {
            "bg-brand-50 hover:bg-brand-50": state === "selected",
            "bg-neutral-50": state === "hover",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-[3px] flex-none items-start bg-brand-700 absolute left-0 top-0 bottom-0",
            { flex: state === "selected" }
          )}
        />
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-md bg-neutral-100",
            {
              hidden: leading === "thumbnail",
              "bg-brand-100": state === "selected",
            }
          )}
        >
          {icon ? (
            <SubframeCore.IconWrapper
              className={SubframeUtils.twClassNames(
                "text-heading-3 font-heading-3 text-subtext-color",
                { "text-brand-700": state === "selected" }
              )}
            >
              {icon}
            </SubframeCore.IconWrapper>
          ) : null}
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-10 w-10 flex-none items-start overflow-hidden rounded-md bg-neutral-100",
            { flex: leading === "thumbnail" }
          )}
        >
          {thumbnail ? (
            <img
              className="h-10 grow shrink-0 basis-0 object-cover"
              src={thumbnail}
            />
          ) : null}
        </div>
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-1">
          {title ? (
            <span
              className={SubframeUtils.twClassNames(
                "w-full whitespace-nowrap text-body-bold font-body-bold text-default-font truncate",
                { "text-brand-800": state === "selected" }
              )}
            >
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="w-full whitespace-nowrap text-caption font-caption text-subtext-color truncate">
              {description}
            </span>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          {meta ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {meta}
            </span>
          ) : null}
          {badge ? (
            <div className="flex items-center mobile:hidden">{badge}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const ListItem = ListItemRoot;
