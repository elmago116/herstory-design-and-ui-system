"use client";

import React from "react";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface SkeletonTextRootProps
  extends React.ComponentProps<typeof SubframeCore.Skeleton> {
  size?: "default" | "label" | "subheader" | "section-header" | "header";
  className?: string;
}

const SkeletonTextRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.Skeleton>,
  SkeletonTextRootProps
>(function SkeletonTextRoot(
  { size = "default", className, ...otherProps }: SkeletonTextRootProps,
  ref
) {
  return (
    <SubframeCore.Skeleton
      className={SubframeUtils.twClassNames(
        "group/a9aae3f0 flex h-5 w-full flex-col items-start gap-2 rounded-md bg-neutral-200",
        {
          "h-10": size === "header",
          "h-9": size === "section-header",
          "h-7": size === "subheader",
          "h-4": size === "label",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

export const SkeletonText = SkeletonTextRoot;
