"use client";

import React from "react";
import * as SubframeUtils from "../../utils";
import { Badge } from "../Badge";

export interface EventProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  state?: "default" | "active";
  last?: boolean;
  timestamp?: React.ReactNode;
  title?: React.ReactNode;
  actor?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
}

const Event = React.forwardRef<HTMLDivElement, EventProps>(function Event(
  {
    state = "default",
    last = false,
    timestamp,
    title,
    actor,
    badge,
    className,
    ...otherProps
  }: EventProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/4ccf7a9b flex w-full gap-3 group/evt items-stretch",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex flex-col items-center self-stretch">
        <div
          className={SubframeUtils.twClassNames(
            "flex h-5 w-5 flex-none items-center justify-center rounded-full",
            { "bg-brand-100": state === "active" }
          )}
        >
          <div
            className={SubframeUtils.twClassNames(
              "flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-neutral-400 bg-default-background",
              {
                "border-2 border-solid border-brand-700 bg-brand-700":
                  state === "active",
              }
            )}
          />
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex min-h-[16px] w-0.5 grow shrink-0 basis-0 items-start bg-neutral-300",
            { hidden: last }
          )}
        />
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex grow shrink-0 basis-0 flex-col items-start gap-1 pt-0.5 pb-6",
          { "pb-0": last }
        )}
      >
        {timestamp ? (
          <span className="text-caption font-caption text-subtext-color">
            {timestamp}
          </span>
        ) : null}
        {title ? (
          <span
            className={SubframeUtils.twClassNames(
              "text-body-bold font-body-bold text-default-font",
              { "text-brand-800": state === "active" }
            )}
          >
            {title}
          </span>
        ) : null}
        {actor ? (
          <span className="text-caption font-caption text-default-font">
            {actor}
          </span>
        ) : null}
        {badge ? (
          <div className="flex items-center gap-2 pt-1">{badge}</div>
        ) : null}
      </div>
    </div>
  );
});

export interface TimelineRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  emphasis?: "default" | "active-latest";
  className?: string;
}

const TimelineRoot = React.forwardRef<HTMLDivElement, TimelineRootProps>(
  function TimelineRoot(
    { emphasis = "default", className, ...otherProps }: TimelineRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/901f7cdd flex w-full flex-col items-start",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <Event
          state={emphasis === "active-latest" ? "active" : "default"}
          timestamp="12 Oct 2026 · 14:32"
          title="Mapping rule published"
          actor="by M. Puig · Coordinator"
          badge={<Badge variant="success">Published</Badge>}
        />
        <Event
          timestamp="11 Oct 2026 · 09:15"
          title="Governance review approved"
          actor="by A. Serra · Data Steward"
          badge={<Badge variant="brand">Approved</Badge>}
        />
        <Event
          timestamp="08 Oct 2026 · 16:47"
          title="Source dataset ingested"
          actor="by System · Ingestion pipeline"
        />
        <Event
          last={true}
          timestamp="02 Oct 2026 · 11:03"
          title="Provenance record created"
          actor="by L. Vidal · Archivist"
          badge={<Badge variant="neutral">Draft</Badge>}
        />
      </div>
    );
  }
);

export const Timeline = Object.assign(TimelineRoot, {
  Event,
});
