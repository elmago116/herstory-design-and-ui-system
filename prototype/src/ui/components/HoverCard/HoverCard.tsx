"use client";

import React from "react";
import { FeatherArrowUpRight } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Avatar } from "../Avatar";
import { LinkButton } from "../LinkButton";

export interface HoverCardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "visible" | "hidden";
  qualityLevel?: "high" | "medium" | "low";
  name?: React.ReactNode;
  qid?: React.ReactNode;
  description?: React.ReactNode;
  avatarImage?: string;
  avatarInitial?: React.ReactNode;
  bornValue?: React.ReactNode;
  occupationValue?: React.ReactNode;
  sourcesValue?: React.ReactNode;
  quality?: React.ReactNode;
  className?: string;
}

const HoverCardRoot = React.forwardRef<HTMLDivElement, HoverCardRootProps>(
  function HoverCardRoot(
    {
      state = "visible",
      qualityLevel = "high",
      name,
      qid,
      description,
      avatarImage,
      avatarInitial,
      bornValue,
      occupationValue,
      sourcesValue,
      quality,
      className,
      ...otherProps
    }: HoverCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/6e1dfd8f flex flex-col items-start gap-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {name ? (
          <span className="text-body font-body text-link underline decoration-dotted cursor-pointer">
            {name}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "flex w-80 flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4 shadow-lg mobile:w-full mobile:flex-none",
            { hidden: state === "hidden" }
          )}
        >
          <div className="flex w-full items-center gap-3">
            <Avatar size="large" image={avatarImage}>
              {avatarInitial}
            </Avatar>
            <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
              {name ? (
                <span className="w-full whitespace-nowrap text-body-bold font-body-bold text-default-font truncate">
                  {name}
                </span>
              ) : null}
              {qid ? (
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  {qid}
                </span>
              ) : null}
            </div>
          </div>
          {description ? (
            <span className="line-clamp-2 w-full text-caption font-caption text-default-font">
              {description}
            </span>
          ) : null}
          <div className="flex w-full items-start gap-3 rounded-md bg-background-alt px-3 py-2">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Born
              </span>
              {bornValue ? (
                <span className="text-caption-bold font-caption-bold text-default-font">
                  {bornValue}
                </span>
              ) : null}
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Occupation
              </span>
              {occupationValue ? (
                <span className="text-caption-bold font-caption-bold text-default-font">
                  {occupationValue}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Sources
              </span>
              {sourcesValue ? (
                <span className="text-caption-bold font-caption-bold text-default-font">
                  {sourcesValue}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-3">
            <div className="flex items-center gap-2">
              <div
                className={SubframeUtils.twClassNames(
                  "flex h-2 w-2 flex-none items-start rounded-full bg-quality-high",
                  {
                    "bg-quality-low": qualityLevel === "low",
                    "bg-quality-medium": qualityLevel === "medium",
                  }
                )}
              />
              {quality ? (
                <span className="text-caption font-caption text-subtext-color">
                  {quality}
                </span>
              ) : null}
            </div>
            <LinkButton
              variant="brand"
              size="small"
              iconRight={<FeatherArrowUpRight />}
            >
              Open entity
            </LinkButton>
          </div>
        </div>
      </div>
    );
  }
);

export const HoverCard = HoverCardRoot;
