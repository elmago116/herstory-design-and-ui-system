"use client";

import React from "react";
import { FeatherBell } from "@/ui/core";
import { FeatherBookOpen } from "@/ui/core";
import { FeatherHelpCircle } from "@/ui/core";
import { FeatherMenu } from "@/ui/core";
import { FeatherMoon } from "@/ui/core";
import { FeatherSearch } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Avatar } from "../Avatar";
import { IconButton } from "../IconButton";
import { LanguageSelector } from "../LanguageSelector";
import { WorkspaceSelector } from "../WorkspaceSelector";

export interface AppHeaderRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "scrolled" | "mobile";
  workspace?: React.ReactNode;
  language?: React.ReactNode;
  avatarImage?: string;
  className?: string;
}

const AppHeaderRoot = React.forwardRef<HTMLDivElement, AppHeaderRootProps>(
  function AppHeaderRoot(
    {
      state = "default",
      workspace,
      language,
      avatarImage,
      className,
      ...otherProps
    }: AppHeaderRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/d40a6fc6 flex h-14 w-full items-center justify-between border-b border-solid border-neutral-border bg-default-background px-6 gap-4 mobile:px-4",
          {
            "px-4 w-90": state === "mobile",
            "border-none shadow-sm": state === "scrolled",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex items-center gap-4 shrink-0 mobile:gap-2">
          <IconButton
            className={SubframeUtils.twClassNames("hidden mobile:flex", {
              flex: state === "mobile",
            })}
            icon={<FeatherMenu />}
          />
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-sm bg-brand-700">
              <FeatherBookOpen className="text-caption font-caption text-white" />
            </div>
            <span className="text-heading-3 font-heading-3 text-default-font">
              HerStory
            </span>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex h-8 items-center gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-2 w-90 focus-within:border-focus mobile:hidden",
            { hidden: state === "mobile" }
          )}
        >
          <FeatherSearch className="text-body font-body text-subtext-color" />
          <input
            className="grow shrink-0 basis-0 self-stretch text-body font-body text-default-font outline-none placeholder:text-neutral-500"
            placeholder="Search entities, sources, documents…"
            value=""
            type="text"
          />
          <div className="flex items-center gap-1">
            <div className="flex h-5 min-w-[20px] items-center justify-center rounded-sm border border-solid border-neutral-border bg-default-background px-1">
              <span className="text-monospace-body font-monospace-body text-default-font">
                ⌘
              </span>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              +
            </span>
            <div className="flex h-5 min-w-[20px] items-center justify-center rounded-sm border border-solid border-neutral-border bg-default-background px-1">
              <span className="text-monospace-body font-monospace-body text-default-font">
                K
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <IconButton
            className={SubframeUtils.twClassNames("hidden mobile:flex", {
              flex: state === "mobile",
            })}
            icon={<FeatherSearch />}
          />
          <WorkspaceSelector
            className={SubframeUtils.twClassNames("mr-1 mobile:hidden", {
              hidden: state === "mobile",
            })}
            state="selected"
            workspaceName={workspace}
          >
            <WorkspaceSelector.WorkspaceOption
              name="Barcelona Labour Archive"
              location="Local"
              selected={true}
            />
            <WorkspaceSelector.WorkspaceOption
              name="Black Bread Graph"
              location="Local"
            />
            <WorkspaceSelector.WorkspaceOption
              name="Women in Science 1900–1950"
              location="Remote · eu-west"
            />
          </WorkspaceSelector>
          <IconButton
            className={SubframeUtils.twClassNames("mobile:hidden", {
              hidden: state === "mobile",
            })}
            icon={<FeatherHelpCircle />}
          />
          <div
            className={SubframeUtils.twClassNames(
              "flex items-start relative mobile:hidden",
              { hidden: state === "mobile" }
            )}
          >
            <IconButton icon={<FeatherBell />} />
            <div className="flex h-2 w-2 flex-none items-start rounded-full border border-solid border-default-background bg-error-700 absolute top-1.5 right-1.5" />
          </div>
          <LanguageSelector
            className={SubframeUtils.twClassNames("mx-1 mobile:hidden", {
              hidden: state === "mobile",
            })}
            state="default"
            code={language}
          />
          <IconButton
            className={SubframeUtils.twClassNames("mobile:hidden", {
              hidden: state === "mobile",
            })}
            icon={<FeatherMoon />}
          />
          <div className="flex items-center pl-2">
            <Avatar image={avatarImage}>M</Avatar>
          </div>
        </div>
      </div>
    );
  }
);

export const AppHeader = AppHeaderRoot;
