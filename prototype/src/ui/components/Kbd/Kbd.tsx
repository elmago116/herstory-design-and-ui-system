"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface KbdRootProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "key" | "chord" | "sequence";
  prefixKey?: React.ReactNode;
  mainKey?: React.ReactNode;
  className?: string;
}

const KbdRoot = React.forwardRef<HTMLDivElement, KbdRootProps>(function KbdRoot(
  { type = "key", prefixKey, mainKey, className, ...otherProps }: KbdRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/d1385603 items-center gap-1 inline-flex",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "hidden h-5 min-w-[20px] items-center justify-center rounded-sm border border-solid border-neutral-300 bg-default-background px-1",
          { flex: type === "sequence" || type === "chord" }
        )}
      >
        {prefixKey ? (
          <span className="text-monospace-body font-monospace-body text-default-font">
            {prefixKey}
          </span>
        ) : null}
      </div>
      <span
        className={SubframeUtils.twClassNames(
          "hidden text-caption font-caption text-subtext-color",
          { inline: type === "sequence" || type === "chord" }
        )}
      >
        {type === "sequence" ? "then" : "+"}
      </span>
      <div className="flex h-5 min-w-[20px] items-center justify-center rounded-sm border border-solid border-neutral-300 bg-default-background px-1">
        {mainKey ? (
          <span className="text-monospace-body font-monospace-body text-default-font">
            {mainKey}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const Kbd = KbdRoot;
