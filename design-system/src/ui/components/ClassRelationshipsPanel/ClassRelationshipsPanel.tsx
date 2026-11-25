"use client";
/*
 * Documentation:
 * Class Relationships Panel — https://app.subframe.com/fbbaaa9a39d6/library?component=Class+Relationships+Panel_a02600a2-2919-4c24-ab07-ebca5b3f127d
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Radio Group — https://app.subframe.com/fbbaaa9a39d6/library?component=Radio+Group_c4b6300e-20b4-4f3e-8b9f-379a046674ca
 * Text Field — https://app.subframe.com/fbbaaa9a39d6/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherDownload } from "@subframe/core";
import { FeatherMinusCircle } from "@subframe/core";
import { FeatherRotateCcw } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";
import { RadioGroup } from "../RadioGroup";
import { TextField } from "../TextField";

export interface ClassRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: React.ReactNode;
  links?: React.ReactNode;
  direction?: "incoming" | "outgoing";
  selected?: boolean;
  className?: string;
}

const ClassRow = React.forwardRef<HTMLDivElement, ClassRowProps>(
  function ClassRow(
    {
      name,
      links,
      direction = "incoming",
      selected = false,
      className,
      ...otherProps
    }: ClassRowProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/7943c0b6 flex h-11 w-full cursor-pointer items-center gap-2 border-b border-solid border-neutral-border bg-default-background px-3 group/classrow hover:bg-neutral-50",
          { "bg-brand-50 hover:bg-brand-50": selected },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {name ? (
          <span className="line-clamp-1 grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
            {name}
          </span>
        ) : null}
        {links ? (
          <span className="w-12 flex-none text-body font-body text-default-font">
            {links}
          </span>
        ) : null}
        {direction === "outgoing" ? (
          <FeatherArrowRight className="text-body font-body text-brand-primary w-4 flex-none" />
        ) : (
          <FeatherArrowLeft className="text-body font-body text-brand-primary w-4 flex-none" />
        )}
        <IconButton
          variant="neutral-tertiary"
          size="small"
          icon={<FeatherMinusCircle />}
        />
      </div>
    );
  }
);

export interface ClassRelationshipsPanelRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "filtered";
  className?: string;
}

const ClassRelationshipsPanelRoot = React.forwardRef<
  HTMLDivElement,
  ClassRelationshipsPanelRootProps
>(function ClassRelationshipsPanelRoot(
  {
    state = "default",
    className,
    ...otherProps
  }: ClassRelationshipsPanelRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/a02600a2 flex w-full items-start gap-8 bg-default-background px-6 py-6 mobile:flex-col mobile:gap-6 mobile:px-4 mobile:py-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex flex-col items-start gap-4 w-90 shrink-0 mobile:w-full mobile:flex-none">
        <span className="text-caption font-caption text-subtext-color">
          {state === "filtered"
            ? "Showing 2 of 8 classes"
            : "Dependencies between 8 classes"}
        </span>
        <TextField
          className="h-auto w-full flex-none"
          variant="outline"
          label=""
          helpText=""
          icon={<FeatherSearch />}
        >
          <TextField.Input
            placeholder="Filter classes"
            value={state === "filtered" ? "Pers" : ""}
          />
        </TextField>
        <RadioGroup label="" helpText="" horizontal={true} value="b0e088d7">
          <RadioGroup.Option label="All" value="e6b64e0e" />
          <RadioGroup.Option label="Incoming" value="e319162a" />
          <RadioGroup.Option label="Outgoing" value="6140f467" />
        </RadioGroup>
        <div className="flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
          <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border bg-neutral-50 px-3 py-2">
            <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-subtext-color">
              Class
            </span>
            <span className="w-12 flex-none text-caption-bold font-caption-bold text-subtext-color">
              Links
            </span>
            <div className="flex h-4 w-12 flex-none items-start" />
          </div>
          <ClassRow
            name="hs:Person"
            links="3K"
            direction="outgoing"
            selected={true}
          />
          <ClassRow
            className={SubframeUtils.twClassNames("hidden", {
              flex: state === "filtered",
            })}
            name="hs:PersonName"
            links="128"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames({
              hidden: state === "filtered",
            })}
            name="hs:Occupation"
            links="1K"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames({
              hidden: state === "filtered",
            })}
            name="hs:Place"
            links="462"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames({
              hidden: state === "filtered",
            })}
            name="hs:Census"
            links="305"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames({
              hidden: state === "filtered",
            })}
            name="hs:Organisation"
            links="293"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames({
              hidden: state === "filtered",
            })}
            name="hs:Document"
            links="287"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames({
              hidden: state === "filtered",
            })}
            name="hs:Event"
            links="185"
            direction="incoming"
          />
          <ClassRow
            className={SubframeUtils.twClassNames("border-none", {
              hidden: state === "filtered",
            })}
            name="hs:Source"
            links="60"
            direction="incoming"
          />
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-center gap-4 self-stretch mobile:overflow-x-auto">
        <div className="flex w-full items-center justify-end gap-1">
          <IconButton
            variant="neutral-tertiary"
            size="small"
            icon={<FeatherX />}
          />
          <IconButton
            variant="neutral-tertiary"
            size="small"
            icon={<FeatherRotateCcw />}
          />
          <IconButton
            variant="neutral-tertiary"
            size="small"
            icon={<FeatherDownload />}
          />
        </div>
        <div className="flex items-start relative h-110 w-140">
          <svg
            className="font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-brand-600 absolute left-25 top-10"
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M183.14.03a180 180 0 0 1 151.15 272.68l-13.71-8.24A164 164 0 0 0 182.86 16.02Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-success-600 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M330.96 278.04a180 180 0 0 1-172.9 80.62l1.95-15.88a164 164 0 0 0 157.53-73.46Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-warning-600 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M151.84 357.78a180 180 0 0 1-107.69-59.69l12.08-10.5a164 164 0 0 0 98.12 54.39Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-error-600 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M40.11 293.28a180 180 0 0 1-38.77-91.34l15.88-1.95a164 164 0 0 0 35.33 83.22Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-brand-300 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M.69 195.69a180 180 0 0 1 13.62-86.02l14.73 6.25a164 164 0 0 0-12.41 78.37Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-success-300 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M16.86 103.93a180 180 0 0 1 49.86-63.82l10.07 12.44a164 164 0 0 0-45.42 58.14Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-warning-300 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M71.67 36.24a180 180 0 0 1 55.7-28.37l4.68 15.3A164 164 0 0 0 81.3 49.02Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-neutral-500 absolute left-25 top-10",
              { "opacity-25": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M133.41 6.13a180 180 0 0 1 43.45-6.1l.28 15.99a164 164 0 0 0-39.59 5.57Z"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className="font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-brand-600 absolute left-25 top-10 opacity-40"
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M208.48 18.49A164 164 0 0 1 322.03 98Q180 180 305.63 285.42A164 164 0 0 1 180 344q0-164 28.48-325.51"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className="font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-brand-600 absolute left-25 top-10 opacity-40"
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M334.11 123.91a164 164 0 0 1 0 112.18Q180 180 137.55 338.41a164 164 0 0 1-73.52-42.44Q180 180 334.11 123.91"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-error-600 absolute left-25 top-10 opacity-40",
              { "opacity-10": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M45.66 274.07a164 164 0 0 1-27.17-65.59Q180 180 37.97 98a164 164 0 0 1 32.29-39.87Q180 180 45.66 274.07"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <svg
            className={SubframeUtils.twClassNames(
              "font-['IBM_Plex_Sans'] text-[360px] font-[400] leading-[540px] text-brand-300 absolute left-25 top-10 opacity-40",
              { "opacity-10": state === "filtered" }
            )}
            width="1em"
            height="1em"
            viewBox="0 0 360 360"
          >
            <path
              d="M16.1 185.72a164 164 0 0 1 9.79-61.81Q180 180 88.29 44.04a164 164 0 0 1 35.62-18.15Q180 180 16.1 185.72"
              fill="currentColor"
              fillOpacity="1"
            />
          </svg>
          <span className="text-caption-bold font-caption-bold text-default-font absolute left-112 top-30">
            hs:Person
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute left-91 top-98",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Occupation
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute right-94 top-96",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Place
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute right-115 top-72",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Census
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute right-118 top-45",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Organisation
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute right-108 top-20",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Document
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute right-92 top-7",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Event
          </span>
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color absolute right-76 top-1",
              { "opacity-25": state === "filtered" }
            )}
          >
            hs:Source
          </span>
        </div>
      </div>
    </div>
  );
});

export const ClassRelationshipsPanel = Object.assign(
  ClassRelationshipsPanelRoot,
  {
    ClassRow,
  }
);
