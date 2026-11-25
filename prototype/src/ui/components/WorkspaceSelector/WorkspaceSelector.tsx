"use client";

import React from "react";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherDatabase } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import * as SubframeUtils from "../../utils";

export interface WorkspaceOptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name?: React.ReactNode;
  location?: React.ReactNode;
  selected?: boolean;
  className?: string;
}

const WorkspaceOption = React.forwardRef<HTMLDivElement, WorkspaceOptionProps>(
  function WorkspaceOption(
    {
      name,
      location,
      selected = false,
      className,
      ...otherProps
    }: WorkspaceOptionProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/ff38b42f flex h-11 w-full cursor-pointer items-center gap-3 rounded-md px-3 group/option hover:bg-neutral-50",
          { "bg-brand-50 hover:bg-brand-50": selected },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <FeatherDatabase className="text-heading-3 font-heading-3 text-subtext-color" />
        <div className="flex grow shrink-0 basis-0 flex-col items-start">
          {name ? (
            <span className="w-full whitespace-nowrap text-body font-body text-default-font truncate">
              {name}
            </span>
          ) : null}
          {location ? (
            <span className="w-full whitespace-nowrap text-caption font-caption text-subtext-color truncate">
              {location}
            </span>
          ) : null}
        </div>
        <FeatherCheck
          className={SubframeUtils.twClassNames(
            "hidden text-heading-3 font-heading-3 text-link",
            { "inline-flex": selected }
          )}
        />
      </div>
    );
  }
);

export interface WorkspaceSelectorRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "selected" | "empty" | "open";
  workspaceName?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const WorkspaceSelectorRoot = React.forwardRef<
  HTMLDivElement,
  WorkspaceSelectorRootProps
>(function WorkspaceSelectorRoot(
  {
    state = "selected",
    workspaceName,
    children,
    className,
    ...otherProps
  }: WorkspaceSelectorRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/c262cbfc flex flex-col items-start gap-1",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex h-9 flex-none items-center gap-2 rounded-md border border-solid border-control-border bg-default-background px-3 cursor-pointer hover:bg-neutral-50",
          { "border-2 border-solid border-focus px-[11px]": state === "open" }
        )}
      >
        <FeatherDatabase
          className={SubframeUtils.twClassNames(
            "text-heading-3 font-heading-3 text-default-font",
            { hidden: state === "empty" }
          )}
        />
        {workspaceName ? (
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap text-body-bold font-body-bold text-default-font",
              { hidden: state === "empty" }
            )}
          >
            {workspaceName}
          </span>
        ) : null}
        <span
          className={SubframeUtils.twClassNames(
            "hidden whitespace-nowrap text-body font-body text-subtext-color",
            { inline: state === "empty" }
          )}
        >
          Choose workspace
        </span>
        <FeatherChevronDown
          className={SubframeUtils.twClassNames(
            "text-body font-body text-subtext-color",
            { "rotate-180": state === "open" }
          )}
        />
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "hidden flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-lg w-70",
          { flex: state === "open" }
        )}
      >
        {children ? (
          <div className="flex w-full flex-col items-start gap-1">
            {children}
          </div>
        ) : null}
        <div className="flex h-px w-full flex-none items-start bg-neutral-border" />
        <div className="flex h-11 w-full flex-none items-center gap-3 rounded-md px-3 cursor-pointer hover:bg-neutral-50">
          <FeatherPlus className="text-heading-3 font-heading-3 text-link" />
          <span className="text-body-bold font-body-bold text-link">
            Create new workspace
          </span>
        </div>
      </div>
    </div>
  );
});

export const WorkspaceSelector = Object.assign(WorkspaceSelectorRoot, {
  WorkspaceOption,
});
