"use client";

import React from "react";
import { FeatherCode } from "@/ui/core";
import { FeatherCopy } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherSparkles } from "@/ui/core";
import { FeatherThumbsDown } from "@/ui/core";
import { FeatherThumbsUp } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { Avatar } from "../Avatar";
import { Bubble } from "../Bubble";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Trace } from "../Trace";

export interface MessageRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
  role?: "assistant" | "user" | "system";
  timestamp?: React.ReactNode;
  answer?: React.ReactNode;
  question?: React.ReactNode;
  systemText?: React.ReactNode;
  avatarImage?: string;
  className?: string;
}

const MessageRoot = React.forwardRef<HTMLDivElement, MessageRootProps>(
  function MessageRoot(
    {
      role = "assistant",
      timestamp,
      answer,
      question,
      systemText,
      avatarImage,
      className,
      ...otherProps
    }: MessageRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/4a976f46 flex w-full flex-col items-start group/msg",
          { "items-center": role === "system", "items-end": role === "user" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full items-start gap-3",
            { hidden: role === "system" || role === "user" }
          )}
        >
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-brand-700">
            <FeatherSparkles className="text-body font-body text-white" />
          </div>
          <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-caption-bold font-caption-bold text-default-font">
                HerStory
              </span>
              {timestamp ? (
                <span className="text-caption font-caption text-subtext-color">
                  {timestamp}
                </span>
              ) : null}
            </div>
            <Bubble
              role="assistant"
              text={answer}
              citations={
                <>
                  <Bubble.CitationChip label="1" />
                  <Bubble.CitationChip label="2" />
                </>
              }
            />
            <Trace
              className="max-w-[560px]"
              title="How this answer was built"
              summary="4 steps · 1.6s"
              state="collapsed"
            >
              <Trace.Step
                title="Interpreted question"
                duration="0.2s"
                detail="Intent: list people · Filters: occupation = mathematician, gender = female"
                status="done"
              />
              <Trace.Step
                title="Generated SPARQL"
                duration="0.4s"
                detail="SELECT ?person ?personLabel WHERE { ?person wdt:P106 wd:Q170790 ; wdt:P21 wd:Q6581072 . }"
                status="done"
                expanded={true}
              />
              <Trace.Step
                title="Queried Wikidata · 128 results"
                duration="0.9s"
                detail="Endpoint: query.wikidata.org/sparql · 128 rows"
                status="done"
              />
              <Trace.Step
                title="Composed answer from 3 sources"
                duration="0.3s"
                detail="Sources: Wikidata, Wikipedia, MacTutor"
                status="running"
                last={true}
              />
            </Trace>
            <div className="flex flex-wrap items-center gap-1">
              <IconButton
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherCopy />}
              />
              <IconButton
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherThumbsUp />}
              />
              <IconButton
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherThumbsDown />}
              />
              <Button
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherCode />}
              >
                View SPARQL
              </Button>
            </div>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full items-start justify-end gap-3",
            { flex: role === "user" }
          )}
        >
          <div className="flex min-w-[0px] grow shrink-0 basis-0 flex-col items-end gap-1">
            <Bubble
              role="user"
              text={question}
              citations={
                <>
                  <Bubble.CitationChip label="1" />
                  <Bubble.CitationChip label="2" />
                </>
              }
            />
            {timestamp ? (
              <span className="text-caption font-caption text-subtext-color">
                {timestamp}
              </span>
            ) : null}
          </div>
          <Avatar variant="brand" size="medium" image={avatarImage}>
            M
          </Avatar>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full items-center gap-3 py-2",
            { flex: role === "system" }
          )}
        >
          <div className="flex h-px grow shrink-0 basis-0 items-start bg-neutral-border" />
          <div className="flex items-center gap-2 mobile:max-w-[75%]">
            <FeatherInfo className="text-caption font-caption text-subtext-color" />
            {systemText ? (
              <span className="text-caption font-caption text-subtext-color">
                {systemText}
              </span>
            ) : null}
          </div>
          <div className="flex h-px grow shrink-0 basis-0 items-start bg-neutral-border" />
        </div>
      </div>
    );
  }
);

export const Message = MessageRoot;
