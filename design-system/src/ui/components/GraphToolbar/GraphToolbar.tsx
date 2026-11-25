"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Graph Toolbar — https://app.subframe.com/fbbaaa9a39d6/library?component=Graph+Toolbar_2c585ee9-3370-4903-baf4-93ac0fb0ee94
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Number Stepper — https://app.subframe.com/fbbaaa9a39d6/library?component=Number+Stepper_fa7248db-488a-485f-a741-1cca1f77eaae
 * Text Field — https://app.subframe.com/fbbaaa9a39d6/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Tooltip — https://app.subframe.com/fbbaaa9a39d6/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 */

import React from "react";
import { FeatherArrowUpCircle } from "@subframe/core";
import { FeatherPin } from "@subframe/core";
import { FeatherRotateCcw } from "@subframe/core";
import { FeatherRotateCw } from "@subframe/core";
import { FeatherSave } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
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
