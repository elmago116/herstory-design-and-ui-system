"use client";
/*
 * Documentation:
 * Badge — https://app.subframe.com/fbbaaa9a39d6/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Collapsible Section — https://app.subframe.com/fbbaaa9a39d6/library?component=Collapsible+Section_ccfa9293-8788-404c-b91a-0deacfbbbd2d
 */

import React from "react";
import { FeatherChevronUp } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Badge } from "../Badge";

export interface ChevronProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Chevron> {
  className?: string;
}

const Chevron = React.forwardRef<
  React.ElementRef<typeof FeatherChevronUp>,
  ChevronProps
>(function Chevron({ className, ...otherProps }: ChevronProps, ref) {
  return (
    <SubframeCore.Collapsible.Chevron {...otherProps}>
      <FeatherChevronUp
        className={SubframeUtils.twClassNames(
          "text-body font-body text-subtext-color",
          className
        )}
        ref={ref}
      />
    </SubframeCore.Collapsible.Chevron>
  );
});

export interface ContentProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Content> {
  children?: React.ReactNode;
  className?: string;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(function Content(
  { children, className, ...otherProps }: ContentProps,
  ref
) {
  return children ? (
    <SubframeCore.Collapsible.Content asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start",
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    </SubframeCore.Collapsible.Content>
  ) : null;
});

export interface TriggerProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Trigger> {
  children?: React.ReactNode;
  className?: string;
}

const Trigger = React.forwardRef<HTMLDivElement, TriggerProps>(function Trigger(
  { children, className, ...otherProps }: TriggerProps,
  ref
) {
  return children ? (
    <SubframeCore.Collapsible.Trigger asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full cursor-pointer flex-col items-start",
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    </SubframeCore.Collapsible.Trigger>
  ) : null;
});

export interface CollapsibleSectionRootProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Root> {
  title?: React.ReactNode;
  meta?: React.ReactNode;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
}

const CollapsibleSectionRoot = React.forwardRef<
  HTMLDivElement,
  CollapsibleSectionRootProps
>(function CollapsibleSectionRoot(
  {
    title,
    meta,
    badge,
    children,
    open,
    className,
    defaultOpen = false,
    ...otherProps
  }: CollapsibleSectionRootProps,
  ref
) {
  return (
    <SubframeCore.Collapsible.Root
      open={open}
      defaultOpen={defaultOpen}
      asChild={true}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "group/ccfa9293 flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background",
          className
        )}
        ref={ref}
      >
        <Trigger>
          <div className="flex min-h-[44px] w-full items-center gap-2 px-4 py-3 hover:bg-neutral-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-500 mobile:flex-wrap">
            <Chevron className="rotate-90 group-data-[state=open]/ccfa9293:rotate-0" />
            {title ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {title}
              </span>
            ) : null}
            {meta ? (
              <span className="grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
                {meta}
              </span>
            ) : null}
            <Badge variant="neutral">{badge}</Badge>
          </div>
        </Trigger>
        <Content>
          {children ? (
            <div className="flex w-full flex-col items-start gap-2 border-t border-solid border-neutral-border px-4 py-4">
              {children}
            </div>
          ) : null}
        </Content>
      </div>
    </SubframeCore.Collapsible.Root>
  );
});

export const CollapsibleSection = Object.assign(CollapsibleSectionRoot, {
  Chevron,
  Content,
  Trigger,
});
