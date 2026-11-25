"use client";

import React from "react";
import { FeatherInfo } from "@/ui/core";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Breadcrumbs } from "../Breadcrumbs";
import { IconButton } from "../IconButton";
import { Tooltip } from "../Tooltip";

export interface PageHeaderRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  layout?: "default" | "with-description" | "with-breadcrumbs";
  actions?: React.ReactNode;
  className?: string;
}

const PageHeaderRoot = React.forwardRef<HTMLDivElement, PageHeaderRootProps>(
  function PageHeaderRoot(
    {
      title,
      description,
      layout = "default",
      actions,
      className,
      ...otherProps
    }: PageHeaderRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/e378db25 flex w-full flex-col items-start gap-2 pb-4",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <Breadcrumbs
          className={SubframeUtils.twClassNames("hidden", {
            flex: layout === "with-breadcrumbs",
          })}
        >
          <Breadcrumbs.Item className="text-caption font-caption">
            Workspace
          </Breadcrumbs.Item>
          <Breadcrumbs.Divider className="text-caption font-caption" />
          <Breadcrumbs.Item className="text-caption font-caption" active={true}>
            Graphs
          </Breadcrumbs.Item>
        </Breadcrumbs>
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-2">
            {title ? (
              <h1 className="line-clamp-1 text-heading-1 font-heading-1 text-default-font mobile:text-heading-2 mobile:font-heading-2">
                {title}
              </h1>
            ) : null}
            <SubframeCore.Tooltip.Provider>
              <SubframeCore.Tooltip.Root>
                <SubframeCore.Tooltip.Trigger asChild={true}>
                  <IconButton size="small" icon={<FeatherInfo />} />
                </SubframeCore.Tooltip.Trigger>
                <SubframeCore.Tooltip.Portal>
                  <SubframeCore.Tooltip.Content
                    side="bottom"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <Tooltip>About this page</Tooltip>
                  </SubframeCore.Tooltip.Content>
                </SubframeCore.Tooltip.Portal>
              </SubframeCore.Tooltip.Root>
            </SubframeCore.Tooltip.Provider>
          </div>
          {actions ? (
            <div className="flex flex-wrap items-center gap-2">{actions}</div>
          ) : null}
        </div>
        {description ? (
          <span
            className={SubframeUtils.twClassNames(
              "hidden w-full whitespace-nowrap text-body font-body text-subtext-color truncate",
              { block: layout === "with-description" }
            )}
          >
            {description}
          </span>
        ) : null}
      </div>
    );
  }
);

export const PageHeader = PageHeaderRoot;
