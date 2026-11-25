"use client";

import React from "react";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherCopy } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherRotateCcw } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";
import { Slider } from "../Slider";
import { Switch } from "../Switch";
import { TextArea } from "../TextArea";
import { TextField } from "../TextField";

export interface SettingRowRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: "toggle" | "parameter" | "text-actions";
  expanded?: boolean;
  disabled?: boolean;
  showInfo?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  value?: React.ReactNode;
  placeholder?: React.ReactNode;
  expandedContent?: React.ReactNode;
  className?: string;
}

const SettingRowRoot = React.forwardRef<HTMLDivElement, SettingRowRootProps>(
  function SettingRowRoot(
    {
      type = "toggle",
      expanded = false,
      disabled = false,
      showInfo = false,
      label,
      description,
      value,
      placeholder,
      expandedContent,
      className,
      ...otherProps
    }: SettingRowRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/5b4f371e flex w-full flex-col items-start gap-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full flex-col items-start gap-1",
            { hidden: type === "text-actions" || type === "parameter" }
          )}
        >
          <div className="flex min-h-[48px] w-full items-center gap-3 py-1">
            <Switch checked={false} />
            <div className="flex grow shrink-0 basis-0 flex-col items-start">
              {label ? (
                <span className="text-body font-body text-default-font">
                  {label}
                </span>
              ) : null}
              {description ? (
                <span className="text-caption font-caption text-subtext-color">
                  {description}
                </span>
              ) : null}
            </div>
            <IconButton
              variant="neutral-tertiary"
              size="medium"
              icon={expanded ? <FeatherChevronUp /> : <FeatherChevronDown />}
            />
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full flex-col items-start pl-4",
              { flex: expanded }
            )}
          >
            <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-4 py-3">
              {expandedContent ? (
                <span className="text-body font-body text-subtext-color">
                  {expandedContent}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start gap-2",
            { flex: type === "parameter" }
          )}
        >
          <div className="flex w-full items-center gap-1">
            {label ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {label}
              </span>
            ) : null}
            <FeatherInfo
              className={SubframeUtils.twClassNames(
                "hidden text-body font-body text-subtext-color",
                { inline: showInfo }
              )}
            />
            <div className="flex grow shrink-0 basis-0 items-center justify-end">
              <Switch checked={disabled ? false : true} />
            </div>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full flex-col items-start gap-2",
              { "opacity-50": disabled }
            )}
          >
            <TextField
              className="h-auto w-full flex-none [&>div]:h-10"
              disabled={disabled ? true : false}
              label=""
              helpText=""
            >
              <TextField.Input type="number" placeholder="0.0" value={value} />
            </TextField>
            <Slider />
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start gap-2",
            { flex: type === "text-actions" }
          )}
        >
          <div className="flex w-full items-center gap-2">
            {label ? (
              <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                {label}
              </span>
            ) : null}
            <IconButton
              variant="neutral-tertiary"
              size="small"
              icon={<FeatherCopy />}
            />
            <IconButton
              variant="neutral-tertiary"
              size="small"
              icon={<FeatherRotateCcw />}
            />
          </div>
          <TextArea className="w-full flex-none h-30" label="" helpText="">
            <TextArea.Input
              className="w-full grow shrink-0 basis-0"
              placeholder={placeholder}
              value=""
            />
          </TextArea>
        </div>
      </div>
    );
  }
);

export const SettingRow = SettingRowRoot;
