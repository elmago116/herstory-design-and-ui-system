"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Pagination — https://app.subframe.com/fbbaaa9a39d6/library?component=Pagination_7986d0d8-90fb-4e83-9da2-e494ea666bf9
 */

import React from "react";
import { FeatherChevronLeft } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";

export interface PageItemProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "current" | "disabled";
  children?: React.ReactNode;
  className?: string;
}

const PageItem = React.forwardRef<HTMLDivElement, PageItemProps>(
  function PageItem(
    { state = "default", children, className, ...otherProps }: PageItemProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/ea6f6c9b flex h-9 w-9 cursor-pointer items-center justify-center rounded-md hover:bg-neutral-100",
          {
            "cursor-default hover:bg-transparent": state === "disabled",
            "bg-brand-700 hover:bg-brand-700": state === "current",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children ? (
          <span
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              {
                "text-subtext-color opacity-50": state === "disabled",
                "text-white": state === "current",
              }
            )}
          >
            {children}
          </span>
        ) : null}
      </div>
    );
  }
);

export interface PaginationRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  position?: "first" | "middle" | "last";
  className?: string;
}

const PaginationRoot = React.forwardRef<HTMLDivElement, PaginationRootProps>(
  function PaginationRoot(
    { position = "middle", className, ...otherProps }: PaginationRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/7986d0d8 flex w-full items-center justify-between py-2 gap-4 mobile:flex-col mobile:items-start",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex items-center">
          <span
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-subtext-color",
              { inline: position === "first" }
            )}
          >
            Showing 1–20 of 1,284
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color",
              { hidden: position === "last" || position === "first" }
            )}
          >
            Showing 21–40 of 1,284
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-subtext-color",
              { inline: position === "last" }
            )}
          >
            Showing 1,281–1,284 of 1,284
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <Button
            className="h-9 w-auto flex-none"
            disabled={position === "first" ? true : false}
            variant="neutral-tertiary"
            icon={<FeatherChevronLeft />}
          >
            Previous
          </Button>
          <PageItem state={position === "first" ? "current" : "default"}>
            1
          </PageItem>
          <PageItem
            state={
              position === "last"
                ? "default"
                : position === "first"
                ? "default"
                : "current"
            }
          >
            2
          </PageItem>
          <PageItem state="default">3</PageItem>
          <PageItem state="disabled">…</PageItem>
          <PageItem state={position === "last" ? "current" : "default"}>
            64
          </PageItem>
          <Button
            className="h-9 w-auto flex-none"
            disabled={position === "last" ? true : false}
            variant="neutral-tertiary"
            iconRight={<FeatherChevronRight />}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
);

export const Pagination = Object.assign(PaginationRoot, {
  PageItem,
});
