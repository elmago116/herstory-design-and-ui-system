"use client";

import React from "react";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import { FeatherSearch } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { LinkButton } from "../LinkButton";

export interface ComboboxOptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  highlighted?: boolean;
  match?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const ComboboxOption = React.forwardRef<HTMLDivElement, ComboboxOptionProps>(
  function ComboboxOption(
    {
      selected = false,
      highlighted = false,
      match,
      label,
      description,
      className,
      ...otherProps
    }: ComboboxOptionProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/fa6bd410 flex w-full cursor-pointer items-center gap-2 rounded-sm px-3 py-2 group/opt hover:bg-neutral-50",
          { "bg-brand-50": highlighted },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start">
          <div className="flex w-full items-center">
            {match ? (
              <span className="text-body-bold font-body-bold text-default-font whitespace-pre">
                {match}
              </span>
            ) : null}
            {label ? (
              <span className="text-body font-body text-default-font whitespace-pre">
                {label}
              </span>
            ) : null}
          </div>
          {description ? (
            <span className="line-clamp-1 text-caption font-caption text-subtext-color">
              {description}
            </span>
          ) : null}
        </div>
        <FeatherCheck
          className={SubframeUtils.twClassNames(
            "hidden text-body font-body text-brand-primary",
            { "inline-flex": selected }
          )}
        />
      </div>
    );
  }
);

export interface ComboboxRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "open" | "filtering" | "empty" | "disabled";
  label?: React.ReactNode;
  placeholder?: React.ReactNode;
  value?: React.ReactNode;
  helpText?: React.ReactNode;
  className?: string;
}

const ComboboxRoot = React.forwardRef<HTMLDivElement, ComboboxRootProps>(
  function ComboboxRoot(
    {
      state = "default",
      label,
      placeholder,
      value,
      helpText,
      className,
      ...otherProps
    }: ComboboxRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/572ed53f flex w-80 flex-col items-start gap-1 group/combo mobile:w-full",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {label ? (
          <span
            className={SubframeUtils.twClassNames(
              "text-caption-bold font-caption-bold text-default-font",
              { "text-subtext-color": state === "disabled" }
            )}
          >
            {label}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-full flex-none items-center gap-2 rounded-md border border-solid border-control-border bg-input-background px-3 focus-within:ring-2 focus-within:ring-brand-500",
            {
              "bg-neutral-100 pointer-events-none": state === "disabled",
              "ring-2 ring-brand-500":
                state === "empty" || state === "filtering" || state === "open",
            }
          )}
        >
          <FeatherSearch
            className={SubframeUtils.twClassNames(
              "text-body font-body text-subtext-color",
              { "text-neutral-400": state === "disabled" }
            )}
          />
          <input
            className={SubframeUtils.twClassNames(
              "grow shrink-0 basis-0 self-stretch text-body font-body text-default-font outline-none placeholder:text-neutral-500",
              { "text-subtext-color": state === "disabled" }
            )}
            placeholder={placeholder}
            value={value}
            type="text"
          />
          {state === "empty" ? (
            <FeatherChevronUp
              className={SubframeUtils.twClassNames(
                "text-body font-body text-subtext-color",
                { "text-neutral-400": state === "disabled" }
              )}
            />
          ) : state === "filtering" ? (
            <FeatherChevronUp
              className={SubframeUtils.twClassNames(
                "text-body font-body text-subtext-color",
                { "text-neutral-400": state === "disabled" }
              )}
            />
          ) : state === "open" ? (
            <FeatherChevronUp
              className={SubframeUtils.twClassNames(
                "text-body font-body text-subtext-color",
                { "text-neutral-400": state === "disabled" }
              )}
            />
          ) : (
            <FeatherChevronDown
              className={SubframeUtils.twClassNames(
                "text-body font-body text-subtext-color",
                { "text-neutral-400": state === "disabled" }
              )}
            />
          )}
        </div>
        {helpText ? (
          <span className="text-caption font-caption text-subtext-color">
            {helpText}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-lg",
            {
              flex:
                state === "empty" || state === "filtering" || state === "open",
            }
          )}
        >
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full flex-col items-start",
              { flex: state === "open" }
            )}
          >
            <ComboboxOption
              selected={true}
              match=""
              label="Ada Lovelace"
              description="Q7259 · English mathematician, 1815–1852"
            />
            <ComboboxOption
              highlighted={true}
              match=""
              label="Female"
              description="Q6581072 · female"
            />
            <ComboboxOption
              match=""
              label="Christine de Pizan"
              description="Q234737 · Italian-French author, 1364–1430"
            />
            <ComboboxOption
              match=""
              label="Hypatia"
              description="Q11903 · Alexandrian philosopher"
            />
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full flex-col items-start",
              { flex: state === "filtering" }
            )}
          >
            <ComboboxOption
              highlighted={true}
              match="Barcel"
              label="ona"
              description="Q1492 · city in Catalonia, Spain"
            />
            <ComboboxOption
              match="Barcel"
              label="ona Province"
              description="Q81949 · province of Spain"
            />
            <ComboboxOption
              match="Barcel"
              label="os"
              description="Q216467 · municipality in Portugal"
            />
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full flex-col items-start gap-1 px-3 py-3",
              { flex: state === "empty" }
            )}
          >
            <span className="text-body font-body text-subtext-color">
              No matches found
            </span>
            <LinkButton variant="brand" size="small" icon={<FeatherPlus />}>
              Create new entity
            </LinkButton>
          </div>
        </div>
      </div>
    );
  }
);

export const Combobox = Object.assign(ComboboxRoot, {
  ComboboxOption,
});
