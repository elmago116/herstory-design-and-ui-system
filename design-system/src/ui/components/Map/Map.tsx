"use client";
/*
 * Documentation:
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Map — https://app.subframe.com/fbbaaa9a39d6/library?component=Map_429c1bb3-cd59-42e2-be16-748778e06a37
 * Map Marker — https://app.subframe.com/fbbaaa9a39d6/library?component=Map+Marker_04965ff0-73a6-4caf-80a7-d1b418087caf
 */

import React from "react";
import { FeatherFilter } from "@subframe/core";
import { FeatherLocateFixed } from "@subframe/core";
import { FeatherMinus } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";
import { MapMarker } from "../MapMarker";

export interface MapRootProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "zoomed" | "filtered";
  className?: string;
}

const MapRoot = React.forwardRef<HTMLDivElement, MapRootProps>(function MapRoot(
  { state = "default", className, ...otherProps }: MapRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/429c1bb3 flex items-start overflow-hidden rounded-lg border border-solid border-neutral-border bg-neutral-100 group/map relative h-110 w-180 mobile:h-96 mobile:w-full",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-36 w-56 flex-none items-start rounded-lg border border-dashed border-neutral-300 absolute left-12 top-20" />
      <div className="flex h-44 w-48 flex-none items-start rounded-lg border border-dashed border-neutral-300 absolute left-72 top-32" />
      <div className="flex h-32 w-60 flex-none items-start rounded-lg border border-dashed border-neutral-300 absolute left-20 top-64" />
      <div className="flex h-24 w-36 flex-none items-start rounded-lg border border-dashed border-neutral-300 absolute left-92 top-80" />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0.5 items-start bg-default-background absolute left-0 top-28 w-140",
          { "h-1 flex-none": state === "zoomed" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-1 w-144 flex-none items-start bg-default-background absolute left-0 top-60",
          { "h-2": state === "zoomed" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0.5 items-start bg-default-background absolute left-0 top-88 w-136",
          { "h-1 flex-none": state === "zoomed" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex w-0.5 flex-none items-start bg-default-background absolute left-36 top-0 h-full",
          { "w-1": state === "zoomed" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex w-1 flex-none items-start bg-default-background absolute left-80 top-0 h-full",
          { "w-2": state === "zoomed" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex w-0.5 flex-none items-start bg-default-background absolute left-120 top-0 h-full",
          { "w-1": state === "zoomed" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-1 items-start bg-default-background absolute left-8 top-96 w-160 origin-left -rotate-12",
          { "h-2 flex-none": state === "zoomed" }
        )}
      />
      <div className="flex w-40 flex-none items-start bg-brand-50 absolute right-0 top-0 bottom-0 mobile:w-20" />
      <div className="flex h-32 items-start rounded-l-3xl bg-brand-50 w-46 absolute right-0 top-0 mobile:w-26" />
      <div className="flex h-36 items-start rounded-l-3xl bg-brand-50 w-50 absolute right-0 top-24 mobile:w-30" />
      <div className="flex h-32 w-44 flex-none items-start rounded-l-3xl bg-brand-50 absolute right-0 top-52 mobile:w-24" />
      <div className="flex w-52 flex-none items-start rounded-l-3xl bg-brand-50 h-34 absolute right-0 top-76 mobile:w-32" />
      <div className="flex w-40 flex-none items-center justify-center absolute right-0 top-0 bottom-0 mobile:w-20">
        <span className="text-micro font-micro text-brand-700 text-center">
          Mar Mediterrània
        </span>
      </div>
      <MapMarker
        className={SubframeUtils.twClassNames("absolute left-32 top-36", {
          hidden: state === "filtered",
          "left-16 top-28": state === "zoomed",
        })}
        state="default"
        label="Barcelona · 42 records"
        count="128"
      />
      <MapMarker
        className={SubframeUtils.twClassNames("absolute left-64 top-72", {
          hidden: state === "filtered",
          "left-44 top-92": state === "zoomed",
        })}
        state="default"
        label="Barcelona · 42 records"
        count="128"
      />
      <MapMarker
        className={SubframeUtils.twClassNames("absolute left-104 top-44", {
          "left-116 top-32": state === "zoomed",
        })}
        state="default"
        label="Barcelona · 42 records"
        count="128"
      />
      <MapMarker
        className={SubframeUtils.twClassNames("absolute left-72 top-24", {
          "left-64 top-40": state === "zoomed",
        })}
        state="selected"
        label="Barcelona · 42 records"
        count="128"
      />
      <MapMarker
        className={SubframeUtils.twClassNames("absolute left-108 top-72", {
          hidden: state === "zoomed",
        })}
        state="cluster"
        label="Barcelona · 42 records"
        count={state === "filtered" ? "36" : "128"}
      />
      <MapMarker
        className={SubframeUtils.twClassNames(
          "hidden absolute left-92 top-72",
          { flex: state === "zoomed" }
        )}
        state="default"
        label="Barcelona · 42 records"
        count="128"
      />
      <MapMarker
        className={SubframeUtils.twClassNames(
          "hidden absolute left-104 top-88",
          { flex: state === "zoomed" }
        )}
        state="default"
        label="Barcelona · 42 records"
        count="128"
      />
      <MapMarker
        className={SubframeUtils.twClassNames(
          "hidden absolute left-116 top-68",
          { flex: state === "zoomed" }
        )}
        state="default"
        label="Barcelona · 42 records"
        count="128"
      />
      <div className="flex items-center gap-2 rounded-md bg-default-background px-2 py-2 shadow-sm absolute left-3 top-3">
        <div className="flex items-center gap-1">
          <FeatherFilter className="text-body font-body text-subtext-color" />
          <span className="text-caption-bold font-caption-bold text-default-font">
            Filters
          </span>
          <div
            className={SubframeUtils.twClassNames(
              "hidden h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-700",
              { flex: state === "filtered" }
            )}
          >
            <span className="text-micro font-micro text-white">2</span>
          </div>
        </div>
        <div className="flex h-4 w-px flex-none items-start bg-neutral-border" />
        <div
          className={SubframeUtils.twClassNames(
            "flex h-6 items-center gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-2",
            {
              "border border-solid border-brand-200 bg-brand-50":
                state === "filtered",
            }
          )}
        >
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap text-caption font-caption text-default-font",
              { "text-brand-800": state === "filtered" }
            )}
          >
            1900–1930
          </span>
          <FeatherX
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color",
              { "text-brand-700": state === "filtered" }
            )}
          />
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex h-6 items-center gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-2 mobile:hidden",
            {
              "border border-solid border-brand-200 bg-brand-50":
                state === "filtered",
            }
          )}
        >
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap text-caption font-caption text-default-font",
              { "text-brand-800": state === "filtered" }
            )}
          >
            Occupation: textile
          </span>
          <FeatherX
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color",
              { "text-brand-700": state === "filtered" }
            )}
          />
        </div>
        <div className="flex h-6 items-center gap-1 rounded-md border border-dashed border-neutral-border px-2">
          <FeatherPlus className="text-caption font-caption text-subtext-color" />
          <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
            Add filter
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-md bg-default-background px-1 py-1 shadow-sm absolute right-3 top-3">
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherPlus />}
        />
        <div className="flex h-px w-6 flex-none items-start bg-neutral-border" />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherMinus />}
        />
        <div className="flex h-px w-6 flex-none items-start bg-neutral-border" />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherLocateFixed />}
        />
      </div>
      <div className="flex items-end gap-3 absolute bottom-3 left-3">
        <div className="flex flex-col items-start gap-1 rounded-sm bg-default-background px-2 py-1">
          <span className="text-micro font-micro text-default-font">
            {state === "zoomed" ? "250 m" : "1 km"}
          </span>
          <div className="flex h-1 w-16 flex-none items-start border-x-2 border-b-2 border-solid border-default-font" />
        </div>
        <span className="text-micro font-micro text-subtext-color">
          © OpenStreetMap
        </span>
      </div>
    </div>
  );
});

export const Map = MapRoot;
