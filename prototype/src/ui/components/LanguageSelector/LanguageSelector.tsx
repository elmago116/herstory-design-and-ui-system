"use client";

import React from "react";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherGlobe } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Badge } from "../Badge";

export interface LanguageSelectorRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "open";
  code?: React.ReactNode;
  className?: string;
}

const LanguageSelectorRoot = React.forwardRef<
  HTMLDivElement,
  LanguageSelectorRootProps
>(function LanguageSelectorRoot(
  {
    state = "default",
    code,
    className,
    ...otherProps
  }: LanguageSelectorRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/151784fc flex flex-col items-start gap-2",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex h-9 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 shadow-md cursor-pointer hover:bg-neutral-50",
          { "border-none ring-1 ring-focus": state === "open" }
        )}
      >
        <FeatherGlobe className="text-body font-body text-subtext-color" />
        {code ? (
          <span className="text-body-bold font-body-bold text-default-font">
            {code}
          </span>
        ) : null}
        <FeatherChevronDown className="text-body font-body text-subtext-color" />
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "hidden w-[220px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background py-1 shadow-lg",
          { flex: state === "open" }
        )}
      >
        <div className="flex w-full items-center gap-2 bg-brand-50 px-3 py-2">
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            English
          </span>
          <span className="text-caption font-caption text-subtext-color">
            EN
          </span>
          <FeatherCheck className="text-body font-body text-brand-primary h-4 w-4 flex-none" />
        </div>
        <div className="flex w-full items-center gap-2 px-3 py-2 cursor-pointer hover:bg-neutral-50">
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            Català
          </span>
          <span className="text-caption font-caption text-subtext-color">
            CA
          </span>
          <div className="flex h-4 w-4 flex-none items-start" />
        </div>
        <div className="flex w-full items-center gap-2 px-3 py-2 cursor-pointer hover:bg-neutral-50">
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            Español
          </span>
          <span className="text-caption font-caption text-subtext-color">
            ES
          </span>
          <div className="flex h-4 w-4 flex-none items-start" />
        </div>
        <div className="flex w-full items-center gap-2 px-3 py-2 cursor-pointer hover:bg-neutral-50">
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            Français
          </span>
          <span className="text-caption font-caption text-subtext-color">
            FR
          </span>
          <div className="flex h-4 w-4 flex-none items-start" />
        </div>
        <div className="flex w-full items-center gap-2 px-3 py-2 cursor-pointer hover:bg-neutral-50">
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            Euskara
          </span>
          <span className="text-caption font-caption text-subtext-color">
            EU
          </span>
          <div className="flex h-4 w-4 flex-none items-start" />
        </div>
        <div className="flex w-full items-center gap-2 px-3 py-2 cursor-pointer hover:bg-neutral-50">
          <div className="flex grow shrink-0 basis-0 items-center gap-2">
            <span className="text-body font-body text-default-font">
              العربية
            </span>
            <Badge variant="neutral">RTL</Badge>
          </div>
          <span className="text-caption font-caption text-subtext-color">
            AR
          </span>
          <div className="flex h-4 w-4 flex-none items-start" />
        </div>
      </div>
    </div>
  );
});

export const LanguageSelector = LanguageSelectorRoot;
