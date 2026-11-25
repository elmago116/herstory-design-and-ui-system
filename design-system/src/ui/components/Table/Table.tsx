"use client";
/*
 * Documentation:
 * Table — https://app.subframe.com/fbbaaa9a39d6/library?component=Table_142dfde7-d0cc-48a1-a04c-a08ab2252633
 */

import React from "react";
import { FeatherArrowDown } from "@subframe/core";
import { FeatherArrowUp } from "@subframe/core";
import { FeatherArrowUpDown } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../../utils";

export interface CellProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children?: React.ReactNode;
  density?: "compact" | "comfortable" | "spacious";
  className?: string;
}

const Cell = React.forwardRef<HTMLTableDataCellElement, CellProps>(
  function Cell(
    { children, density = "comfortable", className, ...otherProps }: CellProps,
    ref
  ) {
    return (
      <td
        className={SubframeUtils.twClassNames("h-11", className)}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "group/291d4418 flex h-full w-full items-center gap-1 px-4 py-2",
            {
              "h-14 py-3": density === "spacious",
              "h-8 px-3 py-1": density === "compact",
            }
          )}
        >
          {children}
        </div>
      </td>
    );
  }
);

export interface HeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  density?: "compact" | "comfortable" | "spacious";
  sortable?: boolean;
  sort?: "none" | "ascending" | "descending";
  className?: string;
}

const HeaderCell = React.forwardRef<
  HTMLTableHeaderCellElement,
  HeaderCellProps
>(function HeaderCell(
  {
    children,
    icon = null,
    density = "comfortable",
    sortable = false,
    sort = "none",
    className,
    ...otherProps
  }: HeaderCellProps,
  ref
) {
  return (
    <th
      className={SubframeUtils.twClassNames("h-10", className)}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "group/a3a9d884 flex h-full w-full items-center gap-1 px-4 text-left",
          { "h-12": density === "spacious", "h-8 px-3": density === "compact" }
        )}
      >
        {children ? (
          <span className="whitespace-nowrap text-caption-bold font-caption-bold text-subtext-color">
            {children}
          </span>
        ) : null}
        {icon ? (
          <SubframeCore.IconWrapper className="text-caption font-caption text-subtext-color">
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        <div
          className={SubframeUtils.twClassNames("hidden items-center", {
            flex: sortable,
          })}
        >
          <FeatherArrowUpDown
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-neutral-400",
              { hidden: sort === "descending" || sort === "ascending" }
            )}
          />
          <FeatherArrowUp
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-default-font",
              { "inline-flex": sort === "ascending" }
            )}
          />
          <FeatherArrowDown
            className={SubframeUtils.twClassNames(
              "hidden text-caption font-caption text-default-font",
              { "inline-flex": sort === "descending" }
            )}
          />
        </div>
      </div>
    </th>
  );
});

export interface HeaderRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  className?: string;
}

const HeaderRow = React.forwardRef<HTMLTableRowElement, HeaderRowProps>(
  function HeaderRow(
    { children, className, ...otherProps }: HeaderRowProps,
    ref
  ) {
    return (
      <tr
        className={SubframeUtils.twClassNames(
          "border-b border-solid border-neutral-border bg-neutral-50",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </tr>
    );
  }
);

export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  clickable?: boolean;
  selected?: boolean;
  density?: "compact" | "comfortable" | "spacious";
  className?: string;
}

const Row = React.forwardRef<HTMLTableRowElement, RowProps>(function Row(
  {
    children,
    clickable = false,
    selected = false,
    density = "comfortable",
    className,
    ...otherProps
  }: RowProps,
  ref
) {
  return (
    <tr
      className={SubframeUtils.twClassNames(
        "group/5d119f8d cursor-pointer border-t border-solid border-neutral-border h-11 hover:bg-neutral-50",
        {
          "h-14": density === "spacious",
          "h-8": density === "compact",
          "bg-brand-50": selected,
        },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </tr>
  );
});

export interface TableRootProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  header?: React.ReactNode;
  children?: React.ReactNode;
  density?: "compact" | "comfortable" | "spacious";
  className?: string;
}

const TableRoot = React.forwardRef<HTMLTableElement, TableRootProps>(
  function TableRoot(
    {
      header,
      children,
      density = "comfortable",
      className,
      ...otherProps
    }: TableRootProps,
    ref
  ) {
    return (
      <table
        className={SubframeUtils.twClassNames(
          "group/142dfde7 h-fit w-full text-body font-body",
          { "text-caption font-caption": density === "compact" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <thead>{header}</thead>
        <tbody className="border-b border-solid border-neutral-border">
          {children}
        </tbody>
      </table>
    );
  }
);

export const Table = Object.assign(TableRoot, {
  Cell,
  HeaderCell,
  HeaderRow,
  Row,
});
