"use client";
/*
 * Documentation:
 * Message — https://app.subframe.com/fbbaaa9a39d6/library?component=Message_4a976f46-b66c-4437-a288-d32e9011b924
 * Message Scroller — https://app.subframe.com/fbbaaa9a39d6/library?component=Message+Scroller_8da334cb-147c-4edf-9d30-7385c586588d
 */

import React from "react";
import { FeatherArrowDown } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Message } from "../Message";

export interface MessageScrollerRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "auto-scroll" | "jump-to-latest";
  className?: string;
}

const MessageScrollerRoot = React.forwardRef<
  HTMLDivElement,
  MessageScrollerRootProps
>(function MessageScrollerRoot(
  { state = "auto-scroll", className, ...otherProps }: MessageScrollerRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/8da334cb flex h-[520px] w-full flex-col items-start overflow-hidden bg-default-background group/scroller relative",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full grow shrink-0 basis-0 flex-col items-start justify-end gap-4 overflow-hidden pl-6 pr-8 py-6 mobile:pl-4 mobile:pr-6 mobile:py-4",
          { "justify-start": state === "jump-to-latest" }
        )}
      >
        <Message
          role="system"
          timestamp="14:32"
          answer={
            'The 1912 Barcelona municipal census lists 1,284 women whose occupation is recorded as "costurera" (seamstress). Most lived in the Raval and Sant Pere districts, and roughly a third were registered as heads of household.'
          }
          question="How many women were listed as seamstresses in the 1912 Barcelona census?"
          systemText="Query scope limited to the Barcelona Labour Archive workspace"
          avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96"
        />
        <Message
          role="user"
          timestamp="14:31"
          answer={
            'The 1912 Barcelona municipal census lists 1,284 women whose occupation is recorded as "costurera" (seamstress). Most lived in the Raval and Sant Pere districts, and roughly a third were registered as heads of household.'
          }
          question="How many women were registered as seamstresses in the 1912 Barcelona census?"
          systemText="Query scope limited to the Barcelona Labour Archive workspace"
          avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96"
        />
        <Message
          role="assistant"
          timestamp="14:32"
          answer={
            'The 1912 Barcelona municipal census lists 1,284 women whose occupation is recorded as "costurera" (seamstress). Most lived in the Raval and Sant Pere districts, and roughly a third were registered as heads of household.'
          }
          question="How many women were listed as seamstresses in the 1912 Barcelona census?"
          systemText="Query scope limited to the Barcelona Labour Archive workspace"
          avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96"
        />
        <Message
          role="user"
          timestamp="14:33"
          answer={
            'The 1912 Barcelona municipal census lists 1,284 women whose occupation is recorded as "costurera" (seamstress). Most lived in the Raval and Sant Pere districts, and roughly a third were registered as heads of household.'
          }
          question="Show them on a map"
          systemText="Query scope limited to the Barcelona Labour Archive workspace"
          avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96"
        />
        <Message
          role="assistant"
          timestamp="14:33"
          answer="Here are the 1,284 registered seamstresses plotted by recorded address. The densest clusters appear around Carrer de l'Hospital in the Raval and along Carrer de Sant Pere Més Alt."
          question="How many women were listed as seamstresses in the 1912 Barcelona census?"
          systemText="Query scope limited to the Barcelona Labour Archive workspace"
          avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96"
        />
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex w-1 flex-col items-start justify-end rounded-full absolute bottom-2 right-1 top-2",
          { "justify-start": state === "jump-to-latest" }
        )}
      >
        <div className="flex h-24 w-full flex-none items-start rounded-full bg-neutral-200" />
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "hidden h-24 flex-none items-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-default-background to-transparent pointer-events-none",
          { flex: state === "jump-to-latest" }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "hidden items-center justify-center absolute bottom-6 left-0 right-0",
          { flex: state === "jump-to-latest" }
        )}
      >
        <div className="flex items-center gap-2 rounded-full border border-solid border-neutral-border bg-default-background px-3 py-2 shadow-md cursor-pointer hover:bg-neutral-50 active:bg-neutral-100">
          <div className="flex h-2 w-2 flex-none items-start rounded-full bg-brand-700" />
          <span className="text-caption-bold font-caption-bold text-default-font">
            New messages
          </span>
          <FeatherArrowDown className="text-caption font-caption text-default-font" />
        </div>
      </div>
    </div>
  );
});

export const MessageScroller = MessageScrollerRoot;
