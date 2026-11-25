"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/fbbaaa9a39d6/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.LineChart>,
  LineChartRootProps
>(function LineChartRoot(
  { className, ...otherProps }: LineChartRootProps,
  ref
) {
  return (
    <SubframeCore.LineChart
      className={SubframeUtils.twClassNames("h-80 w-full", className)}
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

export const LineChart = LineChartRoot;
