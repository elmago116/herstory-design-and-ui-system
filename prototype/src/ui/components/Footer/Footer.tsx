"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface FooterRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  version?: React.ReactNode;
  className?: string;
}

const FooterRoot = React.forwardRef<HTMLDivElement, FooterRootProps>(
  function FooterRoot(
    { title, description, version, className, ...otherProps }: FooterRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full items-center justify-between border-t border-solid border-neutral-border bg-neutral-50 px-6 py-4 gap-6 mobile:flex-col mobile:items-start mobile:justify-start mobile:gap-4 mobile:px-4",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-1 mobile:min-w-0 mobile:flex-none">
          {title ? (
            <span className="text-caption-bold font-caption-bold text-default-font">
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="text-caption font-caption text-subtext-color">
              {description}
            </span>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-6 mobile:gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-caption font-caption text-link hover:underline">
              Documentation
            </span>
            <span className="text-caption font-caption text-link hover:underline">
              Accessibility
            </span>
            <span className="text-caption font-caption text-link hover:underline">
              Privacy
            </span>
            <span className="text-caption font-caption text-link hover:underline">
              Report an issue
            </span>
          </div>
          {version ? (
            <span className="text-monospace-body font-monospace-body text-subtext-color">
              {version}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const Footer = FooterRoot;
