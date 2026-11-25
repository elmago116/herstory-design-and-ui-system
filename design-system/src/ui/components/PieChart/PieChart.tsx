"use client";
/*
 * Documentation:
 * Pie Chart — https://app.subframe.com/fbbaaa9a39d6/library?component=Pie+Chart_0654ccc7-054c-4f3a-8e9a-b7c81dd3963c
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface PieChartRootProps
  extends React.ComponentProps<typeof SubframeCore.PieChart> {
  className?: string;
}

const PieChartRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.PieChart>,
  PieChartRootProps
>(function PieChartRoot({ className, ...otherProps }: PieChartRootProps, ref) {
  return (
    <SubframeCore.PieChart
      className={SubframeUtils.twClassNames("w-full", className)}
      ref={ref}
      colors={[
        "#cc2747",
        "#aeb384",
        "#a82551",
        "#c79f6f",
        "#842352",
        "#d2724f",
      ]}
      {...otherProps}
    />
  );
});

export const PieChart = PieChartRoot;
