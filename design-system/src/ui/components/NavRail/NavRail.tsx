"use client";
/*
 * Documentation:
 * Badge — https://app.subframe.com/fbbaaa9a39d6/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Nav Rail — https://app.subframe.com/fbbaaa9a39d6/library?component=Nav+Rail_eb55cc42-cd9b-43a6-9f3e-e5005c3c1da6
 */

import React from "react";
import { FeatherActivity } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherChevronsLeft } from "@subframe/core";
import { FeatherChevronsRight } from "@subframe/core";
import { FeatherCompass } from "@subframe/core";
import { FeatherCurlyBraces } from "@subframe/core";
import { FeatherDatabase } from "@subframe/core";
import { FeatherExternalLink } from "@subframe/core";
import { FeatherFlaskConical } from "@subframe/core";
import { FeatherGitMerge } from "@subframe/core";
import { FeatherHelpCircle } from "@subframe/core";
import { FeatherImport } from "@subframe/core";
import { FeatherLayers } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Badge } from "../Badge";
import { IconButton } from "../IconButton";

export interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "hover" | "active";
  compact?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  count?: React.ReactNode;
  showCount?: boolean;
  hasChildren?: boolean;
  expanded?: boolean;
  className?: string;
}

const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>(function NavItem(
  {
    state = "default",
    compact = false,
    icon = <FeatherDatabase />,
    label,
    count,
    showCount = false,
    hasChildren = false,
    expanded = false,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/ed84ee29 flex h-11 w-full cursor-pointer items-center gap-3 overflow-hidden rounded-md px-3 group/navitem relative hover:bg-neutral-100",
        {
          "justify-center gap-0 px-0 py-0": compact,
          "bg-brand-50 hover:bg-brand-50": state === "active",
          "bg-neutral-100": state === "hover",
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "hidden w-[3px] flex-none items-start rounded-r-md bg-brand-700 absolute left-0 top-2 bottom-2",
          { flex: state === "active" }
        )}
      />
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-heading-3 font-heading-3 text-subtext-color",
            { "text-brand-800": state === "active" }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {label ? (
        <span
          className={SubframeUtils.twClassNames(
            "grow shrink-0 basis-0 whitespace-nowrap text-body font-body text-subtext-color truncate",
            {
              hidden: compact,
              "text-body-bold font-body-bold text-brand-800":
                state === "active",
            }
          )}
        >
          {label}
        </span>
      ) : null}
      <div
        className={SubframeUtils.twClassNames("hidden items-center", {
          flex: showCount,
        })}
      >
        <Badge
          className={SubframeUtils.twClassNames({ hidden: compact })}
          variant={state === "active" ? "brand" : "neutral"}
        >
          {count}
        </Badge>
      </div>
      <div
        className={SubframeUtils.twClassNames("hidden items-center", {
          flex: hasChildren,
        })}
      >
        {expanded ? (
          <FeatherChevronDown
            className={SubframeUtils.twClassNames(
              "text-body font-body text-subtext-color",
              { hidden: compact }
            )}
          />
        ) : (
          <FeatherChevronRight
            className={SubframeUtils.twClassNames(
              "text-body font-body text-subtext-color",
              { hidden: compact }
            )}
          />
        )}
      </div>
    </div>
  );
});

export interface NavSubItemProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "hover" | "active";
  label?: React.ReactNode;
  external?: boolean;
  className?: string;
}

const NavSubItem = React.forwardRef<HTMLDivElement, NavSubItemProps>(
  function NavSubItem(
    {
      state = "default",
      label,
      external = false,
      className,
      ...otherProps
    }: NavSubItemProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/c9ec033f flex h-9 w-full cursor-pointer items-center gap-1 overflow-hidden rounded-md pl-10 pr-3 group/navsubitem relative hover:bg-neutral-100",
          {
            "bg-brand-50 hover:bg-brand-50": state === "active",
            "bg-neutral-100": state === "hover",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-[3px] flex-none items-start rounded-r-md bg-brand-700 absolute left-0 top-2 bottom-2",
            { flex: state === "active" }
          )}
        />
        {label ? (
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap text-body font-body text-subtext-color truncate",
              { "text-brand-800": state === "active" }
            )}
          >
            {label}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames("hidden items-center", {
            flex: external,
          })}
        >
          <FeatherExternalLink className="text-caption font-caption text-subtext-color" />
        </div>
      </div>
    );
  }
);

export interface NavGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  expanded?: boolean;
  compact?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const NavGroup = React.forwardRef<HTMLDivElement, NavGroupProps>(
  function NavGroup(
    {
      icon = <FeatherCompass />,
      label,
      expanded = false,
      compact = false,
      children,
      className,
      ...otherProps
    }: NavGroupProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/a46267c3 flex w-full flex-col items-start gap-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <NavRail.NavItem
          compact={compact ? true : false}
          icon={icon}
          label={label}
          count="12"
          hasChildren={true}
          expanded={expanded ? true : false}
        />
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start",
            { flex: expanded }
          )}
        >
          {children ? (
            <div
              className={SubframeUtils.twClassNames(
                "flex w-full flex-col items-start",
                { hidden: compact }
              )}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export interface NavRailRootProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "expanded" | "collapsed";
  showSectionLabels?: boolean;
  className?: string;
}

const NavRailRoot = React.forwardRef<HTMLDivElement, NavRailRootProps>(
  function NavRailRoot(
    {
      state = "expanded",
      showSectionLabels = false,
      className,
      ...otherProps
    }: NavRailRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/eb55cc42 flex h-full w-60 flex-col items-start border-r border-solid border-neutral-border bg-background-alt",
          { "w-16": state === "collapsed" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-16 w-full flex-none items-center gap-3 border-b border-solid border-neutral-border px-5",
            { "justify-center px-0 py-0": state === "collapsed" }
          )}
        >
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-brand-700">
            <span className="text-body-bold font-body-bold text-white">H</span>
          </div>
          <span
            className={SubframeUtils.twClassNames(
              "text-heading-3 font-heading-3 text-default-font",
              { hidden: state === "collapsed" }
            )}
          >
            HerStory
          </span>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full items-center justify-end px-2 pt-2",
            { "justify-center px-0": state === "collapsed" }
          )}
        >
          <IconButton
            size="small"
            icon={
              state === "collapsed" ? (
                <FeatherChevronsRight />
              ) : (
                <FeatherChevronsLeft />
              )
            }
          />
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-2 pt-1 pb-4 overflow-auto">
          <div className="flex w-full flex-col items-start gap-1">
            <div
              className={SubframeUtils.twClassNames(
                "hidden h-6 w-full flex-none items-center px-3",
                {
                  flex: showSectionLabels,
                  "justify-center px-0 py-0": state === "collapsed",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-micro font-micro text-subtext-color uppercase",
                  { hidden: state === "collapsed" }
                )}
              >
                WORKFLOW
              </span>
              <div
                className={SubframeUtils.twClassNames(
                  "hidden h-px w-6 flex-none items-start bg-neutral-border",
                  { flex: state === "collapsed" }
                )}
              />
            </div>
            <NavItem
              compact={state === "collapsed" ? true : false}
              icon={<FeatherImport />}
              label="Import"
              count="12"
            />
            <NavGroup
              icon={<FeatherCompass />}
              label="Explore"
              expanded={true}
              compact={state === "collapsed" ? true : false}
            >
              <NavSubItem state="active" label="Graphs overview" />
              <NavSubItem label="Class hierarchy" />
              <NavSubItem label="Class relationships" />
              <NavSubItem label="Visual graph" />
              <NavSubItem label="Similarity" />
            </NavGroup>
            <NavItem
              compact={state === "collapsed" ? true : false}
              icon={<FeatherCurlyBraces />}
              label="SPARQL"
              count="12"
            />
            <NavItem
              compact={state === "collapsed" ? true : false}
              icon={<FeatherGitMerge />}
              label="Mappings"
              count="4"
              showCount={true}
            />
            <NavItem
              compact={state === "collapsed" ? true : false}
              icon={<FeatherLayers />}
              label="Staging"
              count="3"
              showCount={true}
            />
            <NavGroup
              icon={<FeatherFlaskConical />}
              label="Lab"
              compact={state === "collapsed" ? true : false}
            >
              <NavSubItem label="Talk to your graph" />
            </NavGroup>
          </div>
          <div className="flex w-full flex-col items-start gap-1">
            <div
              className={SubframeUtils.twClassNames(
                "hidden h-6 w-full flex-none items-center px-3",
                {
                  flex: showSectionLabels,
                  "justify-center px-0 py-0": state === "collapsed",
                }
              )}
            >
              <span
                className={SubframeUtils.twClassNames(
                  "text-micro font-micro text-subtext-color uppercase",
                  { hidden: state === "collapsed" }
                )}
              >
                SYSTEM
              </span>
              <div
                className={SubframeUtils.twClassNames(
                  "hidden h-px w-6 flex-none items-start bg-neutral-border",
                  { flex: state === "collapsed" }
                )}
              />
            </div>
            <NavGroup
              icon={<FeatherActivity />}
              label="Monitor"
              compact={state === "collapsed" ? true : false}
            >
              <NavSubItem label="Queries and updates" />
              <NavSubItem label="System resources" />
            </NavGroup>
            <NavGroup
              icon={<FeatherSettings />}
              label="Setup"
              compact={state === "collapsed" ? true : false}
            >
              <NavSubItem label="Workspaces" />
              <NavSubItem label="Users" />
              <NavSubItem label="Connectors" />
            </NavGroup>
            <NavGroup
              icon={<FeatherHelpCircle />}
              label="Help"
              compact={state === "collapsed" ? true : false}
            >
              <NavSubItem label="Interactive guides" />
              <NavSubItem label="REST API" />
              <NavSubItem label="Documentation" external={true} />
              <NavSubItem label="Tutorials" external={true} />
              <NavSubItem label="Support" external={true} />
              <NavSubItem label="System information" />
            </NavGroup>
          </div>
        </div>
      </div>
    );
  }
);

export const NavRail = Object.assign(NavRailRoot, {
  NavItem,
  NavSubItem,
  NavGroup,
});
