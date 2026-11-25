"use client";
/*
 * Documentation:
 * Breadcrumbs — https://app.subframe.com/fbbaaa9a39d6/library?component=Breadcrumbs_8898334b-a66f-4ee8-8bd1-afcfa8e37cc0
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Page Header — https://app.subframe.com/fbbaaa9a39d6/library?component=Page+Header_e378db25-6700-48a8-97d0-74f186cd2300
 * Tooltip — https://app.subframe.com/fbbaaa9a39d6/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 */

import React from "react";
import { FeatherInfo } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
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
