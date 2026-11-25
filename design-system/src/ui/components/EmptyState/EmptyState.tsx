"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Empty State — https://app.subframe.com/fbbaaa9a39d6/library?component=Empty+State_755e1abd-8173-425f-908b-02bbf18de868
 * Icon with background — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 * Link Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 */

import React from "react";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";
import { IconWithBackground } from "../IconWithBackground";
import { LinkButton } from "../LinkButton";

export interface EmptyStateRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  hideSecondaryAction?: boolean;
  primaryActionLabel?: React.ReactNode;
  secondaryActionLabel?: React.ReactNode;
  className?: string;
}

const EmptyStateRoot = React.forwardRef<HTMLDivElement, EmptyStateRootProps>(
  function EmptyStateRoot(
    {
      title,
      description,
      icon = <FeatherFileText />,
      hideSecondaryAction = false,
      primaryActionLabel,
      secondaryActionLabel,
      className,
      ...otherProps
    }: EmptyStateRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/755e1abd flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-neutral-border bg-neutral-50 px-12 py-12 mobile:px-6 mobile:py-8",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <IconWithBackground variant="neutral" size="large" icon={icon} />
        <div className="flex w-full flex-col items-center gap-1 max-w-90">
          {title ? (
            <span className="text-heading-3 font-heading-3 text-default-font text-center">
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="text-body font-body text-subtext-color text-center">
              {description}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col items-center gap-3 pt-2">
          <Button variant="brand-primary" icon={<FeatherPlus />}>
            {primaryActionLabel}
          </Button>
          <LinkButton
            className={SubframeUtils.twClassNames({
              hidden: hideSecondaryAction,
            })}
            variant="brand"
            iconRight={<FeatherArrowRight />}
          >
            {secondaryActionLabel}
          </LinkButton>
        </div>
      </div>
    );
  }
);

export const EmptyState = EmptyStateRoot;
