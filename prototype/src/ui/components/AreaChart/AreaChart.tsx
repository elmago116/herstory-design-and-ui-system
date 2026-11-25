"use client";

import React from "react";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface AreaChartRootProps
  extends React.ComponentProps<typeof SubframeCore.AreaChart> {
  stacked?: boolean;
  className?: string;
}

const AreaChartRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.AreaChart>,
  AreaChartRootProps
>(function AreaChartRoot(
  { stacked = false, className, ...otherProps }: AreaChartRootProps,
  ref
) {
  return (
    <SubframeCore.AreaChart
      className={SubframeUtils.twClassNames("h-80 w-full", className)}
      ref={ref}
      stacked={stacked}
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

export const AreaChart = AreaChartRoot;
