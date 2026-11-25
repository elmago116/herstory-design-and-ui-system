"use client";
/*
 * Documentation:
 * Map Marker — https://app.subframe.com/fbbaaa9a39d6/library?component=Map+Marker_04965ff0-73a6-4caf-80a7-d1b418087caf
 */

import React from "react";
import * as SubframeUtils from "../../utils";

export interface MapMarkerRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "selected" | "cluster";
  label?: React.ReactNode;
  count?: React.ReactNode;
  className?: string;
}

const MapMarkerRoot = React.forwardRef<HTMLDivElement, MapMarkerRootProps>(
  function MapMarkerRoot(
    {
      state = "default",
      label,
      count,
      className,
      ...otherProps
    }: MapMarkerRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/04965ff0 flex flex-col items-center gap-1.5",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "hidden items-center justify-center rounded-md bg-default-background px-2 py-1 shadow-md",
            { flex: state === "selected" }
          )}
        >
          {label ? (
            <span className="whitespace-nowrap text-caption-bold font-caption-bold text-default-font">
              {label}
            </span>
          ) : null}
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex items-center justify-center rounded-full",
            { "bg-brand-200 px-1 py-1": state === "selected" }
          )}
        >
          <div
            className={SubframeUtils.twClassNames(
              "flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-solid border-white bg-brand-700 shadow-sm",
              {
                "h-9 w-9 border-2 border-solid border-brand-700 bg-brand-100 shadow-none":
                  state === "cluster",
                "h-8 w-8 bg-brand-900": state === "selected",
              }
            )}
          >
            <div
              className={SubframeUtils.twClassNames(
                "flex h-2 w-2 flex-none items-start rounded-full bg-white",
                {
                  hidden: state === "cluster",
                  "h-2.5 w-2.5": state === "selected",
                }
              )}
            />
            {count ? (
              <span
                className={SubframeUtils.twClassNames(
                  "hidden text-caption-bold font-caption-bold text-brand-900 text-center",
                  { inline: state === "cluster" }
                )}
              >
                {count}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const MapMarker = MapMarkerRoot;
