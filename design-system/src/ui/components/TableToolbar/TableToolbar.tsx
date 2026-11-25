"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Checkbox — https://app.subframe.com/fbbaaa9a39d6/library?component=Checkbox_3816e3b5-c48c-499b-b45e-0777c6972523
 * Link Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 * Select — https://app.subframe.com/fbbaaa9a39d6/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 * Table Toolbar — https://app.subframe.com/fbbaaa9a39d6/library?component=Table+Toolbar_e3df883d-f6dd-4c72-962f-ea379f20a013
 * Text Field — https://app.subframe.com/fbbaaa9a39d6/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import { FeatherDownload } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherTrash2 } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { LinkButton } from "../LinkButton";
import { Select } from "../Select";
import { TextField } from "../TextField";

export interface TableToolbarRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "default" | "bulk-selected";
  searchPlaceholder?: React.ReactNode;
  actions?: React.ReactNode;
  resultCount?: React.ReactNode;
  perPageLabel?: React.ReactNode;
  perPageValue?: React.ReactNode;
  selectedCount?: React.ReactNode;
  className?: string;
}

const TableToolbarRoot = React.forwardRef<
  HTMLDivElement,
  TableToolbarRootProps
>(function TableToolbarRoot(
  {
    mode = "default",
    searchPlaceholder,
    actions,
    resultCount,
    perPageLabel,
    perPageValue,
    selectedCount,
    className,
    ...otherProps
  }: TableToolbarRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/e3df883d flex w-full items-center gap-3 mobile:flex-col mobile:items-start",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex grow shrink-0 basis-0 flex-wrap items-center gap-3",
          { hidden: mode === "bulk-selected" }
        )}
      >
        <TextField
          className="w-70 mobile:grow mobile:shrink-0 mobile:basis-0"
          label=""
          helpText=""
          icon={<FeatherSearch />}
        >
          <TextField.Input placeholder={searchPlaceholder} value="" />
        </TextField>
        {actions ? (
          <div className="flex flex-wrap items-center gap-3">{actions}</div>
        ) : null}
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "hidden grow shrink-0 basis-0 items-center gap-3 rounded-md border-l-[3px] border-solid border-brand-primary bg-neutral-100 px-3 py-1 mobile:flex-wrap",
          { flex: mode === "bulk-selected" }
        )}
      >
        <Checkbox label="" checked={true} />
        {selectedCount ? (
          <span className="text-body-bold font-body-bold text-default-font">
            {selectedCount}
          </span>
        ) : null}
        <div className="flex items-center gap-1">
          <Button
            variant="neutral-tertiary"
            size="small"
            icon={<FeatherDownload />}
          >
            Export
          </Button>
          <Button
            variant="destructive-tertiary"
            size="small"
            icon={<FeatherTrash2 />}
          >
            Delete
          </Button>
        </div>
        <div className="flex grow shrink-0 basis-0 items-center justify-end">
          <LinkButton variant="brand">Clear selection</LinkButton>
        </div>
      </div>
      <div className="flex items-center gap-4 mobile:w-full mobile:flex-none mobile:justify-between">
        {resultCount ? (
          <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
            {resultCount}
          </span>
        ) : null}
        <div className="flex items-center gap-2">
          {perPageLabel ? (
            <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
              {perPageLabel}
            </span>
          ) : null}
          <Select
            className="h-auto w-20 flex-none"
            label=""
            placeholder={perPageValue}
            helpText=""
          >
            <Select.Item value="20">20</Select.Item>
            <Select.Item value="50">50</Select.Item>
            <Select.Item value="100">100</Select.Item>
          </Select>
        </div>
      </div>
    </div>
  );
});

export const TableToolbar = TableToolbarRoot;
