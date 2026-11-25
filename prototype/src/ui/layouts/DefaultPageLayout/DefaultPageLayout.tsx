"use client";

import React from "react";
import { FeatherBarChart2 } from "@/ui/core";
import { FeatherBuilding } from "@/ui/core";
import { FeatherDollarSign } from "@/ui/core";
import { FeatherGauge } from "@/ui/core";
import { FeatherHome } from "@/ui/core";
import { FeatherInbox } from "@/ui/core";
import { FeatherLogOut } from "@/ui/core";
import { FeatherMoreHorizontal } from "@/ui/core";
import { FeatherRocket } from "@/ui/core";
import { FeatherSettings } from "@/ui/core";
import { FeatherTent } from "@/ui/core";
import { FeatherUser } from "@/ui/core";
import { FeatherWebhook } from "@/ui/core";
import * as SubframeCore from "@/ui/core";
import { Avatar } from "../../components/Avatar";
import { DropdownMenu } from "../../components/DropdownMenu";
import { IconButton } from "../../components/IconButton";
import { SidebarWithSections } from "../../components/SidebarWithSections";
import * as SubframeUtils from "../../utils";

export interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full items-start",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <SidebarWithSections
        className="mobile:hidden"
        header={
          <img
            className="h-6 flex-none object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
          />
        }
        footer={
          <>
            <div className="flex grow shrink-0 basis-0 items-start gap-2">
              <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg">
                A
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Irvin
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Founder
                </span>
              </div>
            </div>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton size="small" icon={<FeatherMoreHorizontal />} />
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                      Profile
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherSettings />}>
                      Settings
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherLogOut />}>
                      Log out
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </>
        }
      >
        <SidebarWithSections.NavItem icon={<FeatherHome />} selected={true}>
          Home
        </SidebarWithSections.NavItem>
        <SidebarWithSections.NavItem icon={<FeatherInbox />}>
          Inbox
        </SidebarWithSections.NavItem>
        <SidebarWithSections.NavItem icon={<FeatherBarChart2 />}>
          Reports
        </SidebarWithSections.NavItem>
        <SidebarWithSections.NavSection label="Analytics">
          <SidebarWithSections.NavItem icon={<FeatherGauge />}>
            Dashboard
          </SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem icon={<FeatherRocket />}>
            Trends
          </SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem icon={<FeatherTent />}>
            Campaigns
          </SidebarWithSections.NavItem>
        </SidebarWithSections.NavSection>
        <SidebarWithSections.NavSection label="Settings">
          <SidebarWithSections.NavItem icon={<FeatherBuilding />}>
            Company
          </SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem icon={<FeatherDollarSign />}>
            Payments
          </SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem icon={<FeatherWebhook />}>
            Integrations
          </SidebarWithSections.NavItem>
        </SidebarWithSections.NavSection>
      </SidebarWithSections>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
