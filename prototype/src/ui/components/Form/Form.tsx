"use client";

import React from "react";
import * as SubframeUtils from "../../utils";

export interface FormRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  layout?: "stacked" | "inline";
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const FormRoot = React.forwardRef<HTMLDivElement, FormRootProps>(
  function FormRoot(
    {
      layout = "stacked",
      title,
      description,
      children,
      actions,
      className,
      ...otherProps
    }: FormRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/1ccf3fee flex w-full flex-col items-start gap-4 max-w-140",
          { "max-w-full": layout === "inline" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full flex-col items-start gap-1",
            { hidden: layout === "inline" }
          )}
        >
          {title ? (
            <span className="text-heading-3 font-heading-3 text-default-font">
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="text-caption font-caption text-subtext-color">
              {description}
            </span>
          ) : null}
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full flex-col items-start gap-4",
            { "flex-row items-end gap-3 mobile:flex-col": layout === "inline" }
          )}
        >
          {children ? (
            <div
              className={SubframeUtils.twClassNames(
                "flex w-full flex-col items-start gap-4",
                {
                  "min-w-[0px] flex-row items-end gap-3 grow shrink basis-0 mobile:flex-col mobile:gap-4":
                    layout === "inline",
                }
              )}
            >
              {children}
            </div>
          ) : null}
          {actions ? (
            <div
              className={SubframeUtils.twClassNames(
                "flex w-full items-center justify-end gap-2 border-t border-solid border-neutral-border pt-4",
                { "border-none px-0 py-0 w-fit": layout === "inline" }
              )}
            >
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const Form = FormRoot;
