"use client";
/*
 * Documentation:
 * Alert — https://app.subframe.com/fbbaaa9a39d6/library?component=Alert_3a65613d-d546-467c-80f4-aaba6a7edcd5
 * Empty State — https://app.subframe.com/fbbaaa9a39d6/library?component=Empty+State_755e1abd-8173-425f-908b-02bbf18de868
 * Link Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 * Workspace Picker — https://app.subframe.com/fbbaaa9a39d6/library?component=Workspace+Picker_4b179e79-16ff-4e4d-819c-1bcd9283fb8e
 */

import React from "react";
import { FeatherCheck } from "@subframe/core";
import { FeatherDatabase } from "@subframe/core";
import { FeatherGlobe } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherPlusCircle } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Alert } from "../Alert";
import { EmptyState } from "../EmptyState";
import { LinkButton } from "../LinkButton";

export interface WorkspaceTileProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name?: React.ReactNode;
  location?: React.ReactNode;
  statements?: React.ReactNode;
  icon?: React.ReactNode;
  current?: boolean;
  className?: string;
}

const WorkspaceTile = React.forwardRef<HTMLDivElement, WorkspaceTileProps>(
  function WorkspaceTile(
    {
      name,
      location,
      statements,
      icon = <FeatherDatabase />,
      current = false,
      className,
      ...otherProps
    }: WorkspaceTileProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/d1038e07 flex h-14 w-full cursor-pointer items-center gap-3 rounded-md border border-solid border-neutral-border bg-default-background px-4 group/wstile hover:bg-neutral-50 hover:border-brand-300",
          {
            "border-2 border-solid border-brand-primary bg-brand-50 hover:bg-brand-50 hover:border-brand-primary":
              current,
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "text-heading-3 font-heading-3 text-subtext-color",
              { "text-brand-primary": current }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
          {name ? (
            <span className="w-full whitespace-nowrap text-body-bold font-body-bold text-default-font truncate">
              {name}
            </span>
          ) : null}
          {location ? (
            <span className="w-full whitespace-nowrap text-caption font-caption text-subtext-color truncate">
              {location}
            </span>
          ) : null}
        </div>
        {statements ? (
          <span className="whitespace-nowrap text-monospace-body font-monospace-body text-subtext-color text-right mobile:hidden">
            {statements}
          </span>
        ) : null}
        <FeatherCheck
          className={SubframeUtils.twClassNames(
            "hidden text-heading-3 font-heading-3 text-brand-primary",
            { inline: current }
          )}
        />
      </div>
    );
  }
);

export interface WorkspacePickerRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "not-connected" | "connected" | "empty";
  className?: string;
}

const WorkspacePickerRoot = React.forwardRef<
  HTMLDivElement,
  WorkspacePickerRootProps
>(function WorkspacePickerRoot(
  {
    state = "not-connected",
    className,
    ...otherProps
  }: WorkspacePickerRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/4b179e79 flex w-full flex-col items-start gap-4 bg-default-background group/picker",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <Alert
        className={SubframeUtils.twClassNames({
          hidden: state === "connected",
        })}
        variant="brand"
        icon={<FeatherInfo />}
        title="Some features are unavailable because you are not connected to a workspace."
        description="Choose one below to connect, or create a new workspace."
      />
      <div className="flex w-full flex-col items-start gap-2">
        <LinkButton
          className={SubframeUtils.twClassNames({ hidden: state === "empty" })}
          variant="brand"
          icon={<FeatherGlobe />}
        >
          Show remote locations
        </LinkButton>
        <div
          className={SubframeUtils.twClassNames(
            "w-full items-start gap-2 grid grid-cols-2 mobile:grid mobile:grid-cols-1",
            { hidden: state === "empty" }
          )}
        >
          <WorkspaceTile
            name="Barcelona Labour Archive"
            location="Local"
            statements="1.2M statements"
            current={state === "connected" ? true : false}
          />
          <WorkspaceTile
            name="Black Bread Graph"
            location="Local"
            statements="482K statements"
          />
          <WorkspaceTile
            name="Women in Science 1900–1950"
            location="Local"
            statements="96K statements"
          />
        </div>
        <EmptyState
          className={SubframeUtils.twClassNames("hidden", {
            flex: state === "empty",
          })}
          title="No workspaces yet"
          description="Create a workspace to start building your knowledge graph."
          icon={<FeatherDatabase />}
          hideSecondaryAction={true}
          primaryActionLabel="Create workspace"
          secondaryActionLabel="Read the guide"
        />
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full items-center justify-end",
            { hidden: state === "empty" }
          )}
        >
          <LinkButton variant="brand" icon={<FeatherPlusCircle />}>
            Create new workspace
          </LinkButton>
        </div>
      </div>
    </div>
  );
});

export const WorkspacePicker = Object.assign(WorkspacePickerRoot, {
  WorkspaceTile,
});
