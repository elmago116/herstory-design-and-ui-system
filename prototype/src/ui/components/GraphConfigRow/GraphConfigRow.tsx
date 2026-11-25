"use client";

import React from "react";
import { FeatherLink } from "@/ui/core";
import { FeatherPencil } from "@/ui/core";
import { FeatherPlusCircle } from "@/ui/core";
import { FeatherTrash2 } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Badge } from "../Badge";
import { IconButton } from "../IconButton";
import { LinkButton } from "../LinkButton";

export interface GraphConfigRowRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  type?: "config" | "saved";
  isHeader?: boolean;
  showDefaultBadge?: boolean;
  name?: React.ReactNode;
  meta?: React.ReactNode;
  basedOn?: React.ReactNode;
  advancedLabel?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actionLabel?: React.ReactNode;
  className?: string;
}

const GraphConfigRowRoot = React.forwardRef<
  HTMLDivElement,
  GraphConfigRowRootProps
>(function GraphConfigRowRoot(
  {
    type = "config",
    isHeader = false,
    showDefaultBadge = false,
    name,
    meta,
    basedOn,
    advancedLabel,
    title,
    description,
    actionLabel,
    className,
    ...otherProps
  }: GraphConfigRowRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/468ef516 flex w-full flex-col items-start group/graphrow",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "hidden w-full items-start gap-4 border-b border-solid border-neutral-border px-4 py-4 mobile:flex-col mobile:gap-3",
          { flex: isHeader }
        )}
      >
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-1">
          {title ? (
            <span className="text-heading-3 font-heading-3 text-default-font">
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="text-caption font-caption text-subtext-color">
              {description}
            </span>
          ) : null}
        </div>
        <LinkButton variant="brand" icon={<FeatherPlusCircle />}>
          {actionLabel}
        </LinkButton>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-16 w-full flex-none items-center gap-4 border-b border-solid border-neutral-border px-4 py-3 hover:bg-neutral-50 mobile:gap-3",
          { hidden: isHeader }
        )}
      >
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-neutral-50 relative">
          <div className="flex h-px w-5 flex-none items-start bg-viz-edge absolute left-2 top-2" />
          <div className="flex h-5 w-px flex-none items-start bg-viz-edge absolute left-2 top-2" />
          <div className="flex h-5 w-px flex-none items-start bg-viz-edge absolute left-7 top-2" />
          <div className="flex h-px w-5 flex-none items-start bg-viz-edge absolute left-2 top-7" />
          <div className="flex h-2 w-2 flex-none items-start rounded-full bg-neutral-500 absolute left-1 top-1" />
          <div className="flex h-2 w-2 flex-none items-start rounded-full bg-neutral-500 absolute left-6 top-1" />
          <div className="flex h-2 w-2 flex-none items-start rounded-full bg-neutral-500 absolute left-1 top-6" />
          <div className="flex h-4 w-4 flex-none items-start rounded-full bg-viz-node absolute left-5 top-5" />
        </div>
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
          <div className="flex w-full items-center gap-2">
            {name ? (
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font truncate">
                {name}
              </span>
            ) : null}
            <Badge
              className={SubframeUtils.twClassNames("hidden", {
                flex: showDefaultBadge,
              })}
              variant="neutral"
            >
              Default
            </Badge>
          </div>
          {meta ? (
            <span
              className={SubframeUtils.twClassNames(
                "w-full whitespace-nowrap text-caption font-caption text-subtext-color truncate",
                { hidden: type === "saved" }
              )}
            >
              {meta}
            </span>
          ) : null}
          {basedOn ? (
            <span
              className={SubframeUtils.twClassNames(
                "hidden w-full whitespace-nowrap text-caption font-caption text-subtext-color truncate",
                { inline: type === "saved" }
              )}
            >
              {basedOn}
            </span>
          ) : null}
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-48 flex-none items-center",
            { "flex mobile:hidden": type === "saved" }
          )}
        >
          {advancedLabel ? (
            <span className="whitespace-nowrap text-caption font-caption text-default-font truncate">
              {advancedLabel}
            </span>
          ) : null}
        </div>
        <div className="flex items-center gap-1">
          <IconButton
            className={SubframeUtils.twClassNames("hidden", {
              flex: type === "saved",
            })}
            icon={<FeatherLink />}
          />
          <IconButton icon={<FeatherPencil />} />
          <IconButton variant="destructive-tertiary" icon={<FeatherTrash2 />} />
        </div>
      </div>
    </div>
  );
});

export const GraphConfigRow = GraphConfigRowRoot;
