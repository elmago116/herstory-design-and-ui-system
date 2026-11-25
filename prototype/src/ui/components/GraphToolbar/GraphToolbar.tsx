"use client";

import React from "react";
import { FeatherArrowUpCircle } from "@/ui/core";
import { FeatherPin } from "@/ui/core";
import { FeatherRotateCcw } from "@/ui/core";
import { FeatherRotateCw } from "@/ui/core";
import { FeatherSave } from "@/ui/core";
import { FeatherSearch } from "@/ui/core";
import { FeatherSettings } from "@/ui/core";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { NumberStepper } from "../NumberStepper";
import { TextField } from "../TextField";
import { Tooltip } from "../Tooltip";

export interface GraphToolbarRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "pinned" | "search";
  maxLinks?: React.ReactNode;
  searchPlaceholder?: React.ReactNode;
  searchHint?: React.ReactNode;
  showLabel?: React.ReactNode;
  className?: string;
}

const GraphToolbarRoot = React.forwardRef<
  HTMLDivElement,
  GraphToolbarRootProps
>(function GraphToolbarRoot(
  {
    state = "default",
    maxLinks,
    searchPlaceholder,
    searchHint,
    showLabel,
    className,
    ...otherProps
  }: GraphToolbarRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/2c585ee9 flex flex-col items-end gap-2",
        {
          "w-full items-stretch": state === "search",
          "px-0 pt-10 pb-0": state === "pinned",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex flex-wrap items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-2 py-1 shadow-sm",
          { hidden: state === "search" }
        )}
      >
        <NumberStepper label="Max links" value={maxLinks} />
        <div className="flex h-6 w-px flex-none items-start bg-neutral-border" />
        <div className="flex items-center gap-1">
          <SubframeCore.Tooltip.Provider>
            <SubframeCore.Tooltip.Root>
              <SubframeCore.Tooltip.Trigger asChild={true}>
                <IconButton icon={<FeatherArrowUpCircle />} />
              </SubframeCore.Tooltip.Trigger>
              <SubframeCore.Tooltip.Portal>
                <SubframeCore.Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <Tooltip>Expand all</Tooltip>
                </SubframeCore.Tooltip.Content>
              </SubframeCore.Tooltip.Portal>
            </SubframeCore.Tooltip.Root>
          </SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Provider>
            <SubframeCore.Tooltip.Root>
              <SubframeCore.Tooltip.Trigger asChild={true}>
                <IconButton icon={<FeatherRotateCcw />} />
              </SubframeCore.Tooltip.Trigger>
              <SubframeCore.Tooltip.Portal>
                <SubframeCore.Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <Tooltip>Rotate left</Tooltip>
                </SubframeCore.Tooltip.Content>
              </SubframeCore.Tooltip.Portal>
            </SubframeCore.Tooltip.Root>
          </SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Provider>
            <SubframeCore.Tooltip.Root>
              <SubframeCore.Tooltip.Trigger asChild={true}>
                <IconButton icon={<FeatherRotateCw />} />
              </SubframeCore.Tooltip.Trigger>
              <SubframeCore.Tooltip.Portal>
                <SubframeCore.Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <Tooltip>Rotate right</Tooltip>
                </SubframeCore.Tooltip.Content>
              </SubframeCore.Tooltip.Portal>
            </SubframeCore.Tooltip.Root>
          </SubframeCore.Tooltip.Provider>
          <div className="flex flex-col items-center relative">
            <Tooltip
              className={SubframeUtils.twClassNames(
                "hidden absolute bottom-full mb-2 whitespace-nowrap",
                { flex: state === "pinned" }
              )}
            >
              Unpin all nodes
            </Tooltip>
            <IconButton
              variant={
                state === "pinned" ? "brand-secondary" : "neutral-tertiary"
              }
              icon={<FeatherPin />}
            />
          </div>
          <SubframeCore.Tooltip.Provider>
            <SubframeCore.Tooltip.Root>
              <SubframeCore.Tooltip.Trigger asChild={true}>
                <IconButton icon={<FeatherSave />} />
              </SubframeCore.Tooltip.Trigger>
              <SubframeCore.Tooltip.Portal>
                <SubframeCore.Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <Tooltip>Save graph</Tooltip>
                </SubframeCore.Tooltip.Content>
              </SubframeCore.Tooltip.Portal>
            </SubframeCore.Tooltip.Root>
          </SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Provider>
            <SubframeCore.Tooltip.Root>
              <SubframeCore.Tooltip.Trigger asChild={true}>
                <IconButton icon={<FeatherSettings />} />
              </SubframeCore.Tooltip.Trigger>
              <SubframeCore.Tooltip.Portal>
                <SubframeCore.Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <Tooltip>Settings</Tooltip>
                </SubframeCore.Tooltip.Content>
              </SubframeCore.Tooltip.Portal>
            </SubframeCore.Tooltip.Root>
          </SubframeCore.Tooltip.Provider>
        </div>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "hidden w-full items-start gap-2",
          { flex: state === "search" }
        )}
      >
        <TextField
          className="h-auto grow shrink-0 basis-0"
          label=""
          helpText={searchHint}
          icon={<FeatherSearch />}
        >
          <TextField.Input placeholder={searchPlaceholder} value="" />
        </TextField>
        <Button size="small">{showLabel}</Button>
      </div>
    </div>
  );
});

export const GraphToolbar = GraphToolbarRoot;
