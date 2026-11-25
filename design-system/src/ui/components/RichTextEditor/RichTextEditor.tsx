"use client";
/*
 * Documentation:
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Rich Text Editor — https://app.subframe.com/fbbaaa9a39d6/library?component=Rich+Text+Editor_0da861fc-1807-4515-9ddf-b742862433b6
 * Select — https://app.subframe.com/fbbaaa9a39d6/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 * Separator — https://app.subframe.com/fbbaaa9a39d6/library?component=Separator_3462e84c-0dff-4f41-a482-c82aa7028b94
 */

import React from "react";
import { FeatherBold } from "@subframe/core";
import { FeatherCode } from "@subframe/core";
import { FeatherItalic } from "@subframe/core";
import { FeatherLink } from "@subframe/core";
import { FeatherList } from "@subframe/core";
import { FeatherListOrdered } from "@subframe/core";
import { FeatherQuote } from "@subframe/core";
import { FeatherRedo2 } from "@subframe/core";
import { FeatherUnderline } from "@subframe/core";
import { FeatherUndo2 } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";
import { Select } from "../Select";
import { Separator } from "../Separator";

export interface RichTextEditorRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "focus";
  lastSaved?: React.ReactNode;
  characterCount?: React.ReactNode;
  className?: string;
}

const RichTextEditorRoot = React.forwardRef<
  HTMLDivElement,
  RichTextEditorRootProps
>(function RichTextEditorRoot(
  {
    state = "default",
    lastSaved,
    characterCount,
    className,
    ...otherProps
  }: RichTextEditorRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/0da861fc flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-white",
        { "border-2 border-solid border-focus": state === "focus" },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full flex-wrap items-center gap-1 border-b border-solid border-neutral-border bg-neutral-50 px-2 py-1">
        <Select
          className="h-auto w-36 flex-none"
          variant="filled"
          label=""
          placeholder="Paragraph"
          helpText=""
        >
          <Select.Item value="Paragraph">Paragraph</Select.Item>
          <Select.Item value="Heading 1">Heading 1</Select.Item>
          <Select.Item value="Heading 2">Heading 2</Select.Item>
          <Select.Item value="Heading 3">Heading 3</Select.Item>
        </Select>
        <div className="flex h-5 items-center px-1">
          <Separator orientation="vertical" text="or" />
        </div>
        <IconButton
          variant="brand-secondary"
          size="medium"
          icon={<FeatherBold />}
        />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherItalic />}
        />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherUnderline />}
        />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherLink />}
        />
        <div className="flex h-5 items-center px-1">
          <Separator orientation="vertical" text="or" />
        </div>
        <IconButton
          variant="brand-secondary"
          size="medium"
          icon={<FeatherList />}
        />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherListOrdered />}
        />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherQuote />}
        />
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherCode />}
        />
        <div className="flex grow shrink-0 basis-0 items-center justify-end gap-1">
          <IconButton
            variant="neutral-tertiary"
            size="medium"
            icon={<FeatherUndo2 />}
          />
          <IconButton
            variant="neutral-tertiary"
            size="medium"
            icon={<FeatherRedo2 />}
          />
        </div>
      </div>
      <div className="flex min-h-[240px] w-full flex-col items-start gap-3 px-5 py-4 mobile:px-4">
        <h2 className="text-heading-2 font-heading-2 text-default-font">
          Data retention policy v4
        </h2>
        <p className="text-body font-body text-default-font">
          This policy defines how HerStory collects, stores, and disposes of
          member and partner data. It applies to all staff, contractors, and
          board members who handle personal or organizational records.
        </p>
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-start gap-2 pl-2">
            <span className="text-body font-body text-default-font">•</span>
            <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
              Member records are retained for 7 years after account closure.
            </span>
          </div>
          <div className="flex w-full items-start gap-2 pl-2">
            <span className="text-body font-body text-default-font">•</span>
            <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
              Donation receipts are archived in encrypted storage for audit
              purposes.
            </span>
          </div>
          <div className="flex w-full items-start gap-2 pl-2">
            <span className="text-body font-body text-default-font">•</span>
            <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
              Event registration data is deleted 24 months after the event date.
            </span>
          </div>
        </div>
        <div className="flex w-full items-start border-l-[3px] border-solid border-neutral-300 pl-4 py-1">
          <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color italic">
            “Data should be kept only as long as it serves the people it belongs
            to.” — Governance Committee, 2024
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-4 border-t border-solid border-neutral-border px-5 py-2 mobile:px-4">
        {lastSaved ? (
          <span className="grow shrink-0 basis-0 whitespace-nowrap text-caption font-caption text-subtext-color truncate">
            {lastSaved}
          </span>
        ) : null}
        {characterCount ? (
          <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
            {characterCount}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const RichTextEditor = RichTextEditorRoot;
