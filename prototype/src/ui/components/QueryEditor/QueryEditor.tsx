"use client";

import React from "react";
import { FeatherAlertCircle } from "@/ui/core";
import { FeatherFolderOpen } from "@/ui/core";
import { FeatherKeyboard } from "@/ui/core";
import { FeatherLink } from "@/ui/core";
import { FeatherListTree } from "@/ui/core";
import { FeatherLoader2 } from "@/ui/core";
import { FeatherMaximize2 } from "@/ui/core";
import { FeatherPlay } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import { FeatherSave } from "@/ui/core";
import { FeatherWand2 } from "@/ui/core";
import { FeatherX } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";
import { LinkButton } from "../LinkButton";
import { Progress } from "../Progress";
import { SplitButton } from "../SplitButton";

export interface QueryEditorRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "running" | "error";
  statusText?: React.ReactNode;
  errorMessage?: React.ReactNode;
  className?: string;
}

const QueryEditorRoot = React.forwardRef<HTMLDivElement, QueryEditorRootProps>(
  function QueryEditorRoot(
    {
      state = "default",
      statusText,
      errorMessage,
      className,
      ...otherProps
    }: QueryEditorRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/82d24133 flex w-full flex-col items-start overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background min-h-90",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-end border-b border-solid border-neutral-border bg-neutral-50 overflow-x-auto">
          <div className="flex h-9 items-center gap-2 bg-default-background pl-3 pr-1 border-t-2 border-r border-solid border-brand-primary border-r-neutral-border">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Women seamstresses 1912
            </span>
            <IconButton size="small" icon={<FeatherX />} />
          </div>
          <div className="flex h-9 items-center gap-2 pl-3 pr-1 border-t-2 border-r border-solid border-transparent border-r-neutral-border">
            <span className="whitespace-nowrap text-body font-body text-subtext-color">
              Unnamed 1
            </span>
            <IconButton size="small" icon={<FeatherX />} />
          </div>
          <div className="flex h-9 items-center px-1">
            <IconButton size="medium" icon={<FeatherPlus />} />
          </div>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
          <div
            className={SubframeUtils.twClassNames("hidden w-full items-start", {
              flex: state === "running",
            })}
          >
            <Progress
              className="h-1 grow shrink-0 basis-0 rounded-none"
              value={40}
            />
          </div>
          <div className="flex w-full grow shrink-0 basis-0 items-stretch">
            <div className="flex w-12 flex-none flex-col items-end border-r border-solid border-neutral-border bg-neutral-50 py-3">
              <div className="flex w-full items-center justify-end pr-3">
                <span className="text-monospace-body font-monospace-body text-neutral-500">
                  1
                </span>
              </div>
              <div className="flex w-full items-center justify-end pr-3">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  2
                </span>
              </div>
              <div
                className={SubframeUtils.twClassNames(
                  "flex w-full items-center justify-end border-l-2 border-solid border-transparent pr-3",
                  {
                    "border-l-2 border-y-0 border-r-0 border-solid border-error-700 bg-error-50":
                      state === "error",
                  }
                )}
              >
                <span
                  className={SubframeUtils.twClassNames(
                    "text-monospace-body font-monospace-body text-neutral-500",
                    { "text-error-700": state === "error" }
                  )}
                >
                  3
                </span>
              </div>
              <div className="flex w-full items-center justify-end pr-3">
                <span className="text-monospace-body font-monospace-body text-neutral-500">
                  4
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start py-3 overflow-x-auto">
              <div className="flex w-full items-center px-4">
                <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                  SELECT
                </span>
                <span className="text-monospace-body font-monospace-body text-success-800 whitespace-pre">
                  {" "}
                  ?person ?name{" "}
                </span>
                <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                  WHERE
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                  {" "}
                  &#123;
                </span>
              </div>
              <div className="flex w-full items-center bg-neutral-100 pl-8 pr-4">
                <span className="text-monospace-body font-monospace-body text-success-800 whitespace-pre">
                  ?person{" "}
                </span>
                <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                  wdt:
                </span>
                <div className="flex h-4 w-0.5 flex-none items-start bg-brand-primary animate-pulse" />
                <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                  P106 wd:Q1414443
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                  {" "}
                  ;
                </span>
              </div>
              <div
                className={SubframeUtils.twClassNames(
                  "flex w-full items-center pl-16 pr-4",
                  { "bg-error-50": state === "error" }
                )}
              >
                <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                  rdfs:label
                </span>
                <span className="text-monospace-body font-monospace-body text-success-800 whitespace-pre">
                  {" "}
                  ?name
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                  {" "}
                  .
                </span>
              </div>
              <div className="flex w-full items-center px-4">
                <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                  &#125;{" "}
                </span>
                <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                  LIMIT
                </span>
                <span className="text-monospace-body font-monospace-body text-error-700 whitespace-pre">
                  {" "}
                  100
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 px-2 py-2">
              <IconButton
                className="h-9 w-9 flex-none"
                icon={<FeatherMaximize2 />}
              />
              <IconButton
                className="h-9 w-9 flex-none"
                icon={<FeatherSave />}
              />
              <IconButton
                className="h-9 w-9 flex-none"
                icon={<FeatherFolderOpen />}
              />
              <IconButton
                className="h-9 w-9 flex-none"
                icon={<FeatherLink />}
              />
              <IconButton
                className="h-9 w-9 flex-none"
                icon={<FeatherWand2 />}
              />
              <IconButton
                className="h-9 w-9 flex-none"
                icon={<FeatherListTree />}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border px-4 py-3 gap-4 mobile:flex-col mobile:items-start">
          {statusText ? (
            <span className="text-caption font-caption text-subtext-color">
              {statusText}
            </span>
          ) : null}
          <div className="flex items-center gap-4 mobile:w-full mobile:flex-none mobile:justify-between">
            <LinkButton size="small" icon={<FeatherKeyboard />}>
              Keyboard shortcuts
            </LinkButton>
            <SplitButton
              icon={state === "running" ? <FeatherLoader2 /> : <FeatherPlay />}
              label={state === "running" ? "Running…" : "Run"}
              menuTitle="Run options"
            >
              <SplitButton.Option label="Run" />
              <SplitButton.Option label="Run as update" />
              <SplitButton.Option label="Explain" />
            </SplitButton>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full items-center gap-2 border-t border-solid border-neutral-border bg-error-50 px-4 py-2",
            { flex: state === "error" }
          )}
        >
          <FeatherAlertCircle className="text-caption font-caption text-status-error" />
          {errorMessage ? (
            <span className="text-caption font-caption text-status-error">
              {errorMessage}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const QueryEditor = QueryEditorRoot;
