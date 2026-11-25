"use client";

import React from "react";
import { FeatherArrowDown } from "@/ui/core";
import { FeatherCheckCircle } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronsUpDown } from "@/ui/core";
import { FeatherFileText } from "@/ui/core";
import { FeatherImport } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherMoreHorizontal } from "@/ui/core";
import { FeatherTrash2 } from "@/ui/core";
import { FeatherXCircle } from "@/ui/core";
import * as SubframeCore from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Checkbox } from "../Checkbox";
import { DropdownMenu } from "../DropdownMenu";
import { IconButton } from "../IconButton";
import { LinkButton } from "../LinkButton";
import { Progress } from "../Progress";

export interface ImportFileRowRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status?: "imported" | "importing" | "failed" | "not-imported";
  isHeader?: boolean;
  fileName?: React.ReactNode;
  fileIcon?: React.ReactNode;
  size?: React.ReactNode;
  uploadedDate?: React.ReactNode;
  uploadedTime?: React.ReactNode;
  importedDate?: React.ReactNode;
  importedTime?: React.ReactNode;
  graph?: React.ReactNode;
  className?: string;
}

const ImportFileRowRoot = React.forwardRef<
  HTMLDivElement,
  ImportFileRowRootProps
>(function ImportFileRowRoot(
  {
    status = "imported",
    isHeader = false,
    fileName,
    fileIcon = <FeatherFileText />,
    size,
    uploadedDate,
    uploadedTime,
    importedDate,
    importedTime,
    graph,
    className,
    ...otherProps
  }: ImportFileRowRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/b671c29d flex w-full flex-col items-start",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "hidden w-full items-center gap-4 border-b border-solid border-neutral-border px-4 py-3",
          { flex: isHeader }
        )}
      >
        <div className="flex items-center gap-1">
          <Checkbox label="" />
          <FeatherChevronDown className="text-caption font-caption text-subtext-color" />
        </div>
        <div className="flex grow shrink-0 basis-0 items-center gap-1">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Name
          </span>
          <FeatherChevronsUpDown className="text-caption font-caption text-subtext-color" />
        </div>
        <div className="flex w-24 flex-none items-center gap-1">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Size
          </span>
          <FeatherChevronsUpDown className="text-caption font-caption text-subtext-color" />
        </div>
        <div className="flex w-24 flex-none items-center gap-1">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Uploaded
          </span>
          <FeatherArrowDown className="text-caption font-caption text-brand-primary" />
        </div>
        <div className="flex w-24 flex-none items-center gap-1">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Imported
          </span>
          <FeatherChevronsUpDown className="text-caption font-caption text-subtext-color" />
        </div>
        <div className="flex w-28 flex-none items-center gap-1">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Graph
          </span>
          <FeatherChevronsUpDown className="text-caption font-caption text-subtext-color" />
        </div>
        <div className="flex w-28 flex-none items-center justify-end">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Actions
          </span>
        </div>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex min-h-[64px] w-full items-start gap-4 border-b border-solid border-neutral-border px-4 py-3 hover:bg-neutral-50",
          { hidden: isHeader }
        )}
      >
        <div className="flex h-6 items-center">
          <Checkbox label="" />
        </div>
        <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-1">
          <div className="flex h-6 w-full flex-none items-center gap-2">
            {fileIcon ? (
              <SubframeCore.IconWrapper className="text-body font-body text-subtext-color">
                {fileIcon}
              </SubframeCore.IconWrapper>
            ) : null}
            {fileName ? (
              <span className="whitespace-nowrap text-monospace-body font-monospace-body text-default-font truncate">
                {fileName}
              </span>
            ) : null}
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full max-w-[240px] flex-col items-start",
              { flex: status === "importing" }
            )}
          >
            <Progress className="h-1 w-full flex-none" value={42} />
          </div>
          <div
            className={SubframeUtils.twClassNames("flex items-center gap-1", {
              hidden:
                status === "not-imported" ||
                status === "failed" ||
                status === "importing",
            })}
          >
            <FeatherCheckCircle className="text-caption font-caption text-success-700" />
            <span className="text-caption font-caption text-success-700">
              Imported successfully in 0.8 s · 15 statements added
            </span>
          </div>
          <div
            className={SubframeUtils.twClassNames("hidden items-center gap-1", {
              flex: status === "importing",
            })}
          >
            <SubframeCore.Loader className="text-caption font-caption text-brand-700" />
            <span className="text-caption font-caption text-brand-700">
              Importing… 42%
            </span>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "hidden flex-wrap items-center gap-2",
              { flex: status === "failed" }
            )}
          >
            <div className="flex items-center gap-1">
              <FeatherXCircle className="text-caption font-caption text-error-700" />
              <span className="text-caption font-caption text-error-700">
                Failed: line 214 unexpected token
              </span>
            </div>
            <LinkButton variant="brand" size="small">
              View log
            </LinkButton>
          </div>
          <div
            className={SubframeUtils.twClassNames("hidden items-center gap-2", {
              flex: status === "not-imported",
            })}
          >
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-neutral-500" />
            <span className="text-caption font-caption text-subtext-color">
              Not imported yet
            </span>
          </div>
        </div>
        <div className="flex h-6 w-24 flex-none items-center">
          {size ? (
            <span className="text-body font-body text-default-font">
              {size}
            </span>
          ) : null}
        </div>
        <div className="flex w-24 flex-none flex-col items-start">
          {uploadedDate ? (
            <span className="text-caption font-caption text-default-font">
              {uploadedDate}
            </span>
          ) : null}
          {uploadedTime ? (
            <span className="text-caption font-caption text-subtext-color">
              {uploadedTime}
            </span>
          ) : null}
        </div>
        <div className="flex w-24 flex-none flex-col items-start">
          {importedDate ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-caption font-caption text-default-font",
                { hidden: status === "not-imported" || status === "importing" }
              )}
            >
              {importedDate}
            </span>
          ) : null}
          {importedTime ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-caption font-caption text-subtext-color",
                { hidden: status === "not-imported" || status === "importing" }
              )}
            >
              {importedTime}
            </span>
          ) : null}
          <span
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-subtext-color",
              { inline: status === "not-imported" || status === "importing" }
            )}
          >
            —
          </span>
        </div>
        <div className="flex h-6 w-28 flex-none items-center">
          {graph ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color truncate">
              {graph}
            </span>
          ) : null}
        </div>
        <div className="flex w-28 flex-none items-center justify-end gap-1">
          <IconButton variant="neutral-tertiary" icon={<FeatherInfo />} />
          <IconButton variant="brand-secondary" icon={<FeatherImport />} />
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <IconButton
                variant="neutral-tertiary"
                icon={<FeatherMoreHorizontal />}
              />
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="end"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={<FeatherTrash2 />}>
                    Delete
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
});

export const ImportFileRow = ImportFileRowRoot;
