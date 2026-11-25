"use client";
/*
 * Documentation:
 * Action Tile — https://app.subframe.com/fbbaaa9a39d6/library?component=Action+Tile_c7f3e57c-0d2a-4a98-a66f-58940a94dccb
 * Icon with background — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import React from "react";
import { FeatherUpload } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { IconWithBackground } from "../IconWithBackground";

export interface ActionTileRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  state?: "default" | "hover" | "selected" | "disabled";
  className?: string;
}

const ActionTileRoot = React.forwardRef<HTMLDivElement, ActionTileRootProps>(
  function ActionTileRoot(
    {
      title,
      description,
      icon = <FeatherUpload />,
      state = "default",
      className,
      ...otherProps
    }: ActionTileRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c7f3e57c flex min-h-[72px] w-full cursor-pointer items-center gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4 hover:shadow-sm hover:border-brand-300",
          {
            "bg-neutral-50 cursor-not-allowed opacity-60 hover:shadow-none hover:border-neutral-border":
              state === "disabled",
            "border-2 border-solid border-brand-primary bg-brand-50 hover:border-brand-primary":
              state === "selected",
            "border border-solid border-brand-300 shadow-sm": state === "hover",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <IconWithBackground
          className="h-10 w-10 flex-none"
          variant="brand"
          size="large"
          icon={icon}
          square={true}
        />
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-1">
          {title ? (
            <span
              className={SubframeUtils.twClassNames(
                "w-full text-body-bold font-body-bold text-link",
                { "text-subtext-color": state === "disabled" }
              )}
            >
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="w-full text-caption font-caption text-subtext-color">
              {description}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const ActionTile = ActionTileRoot;
