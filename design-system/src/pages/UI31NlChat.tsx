"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Bubble } from "@/ui/components/Bubble";
import { Button } from "@/ui/components/Button";
import { TextField } from "@/ui/components/TextField";
import { Trace } from "@/ui/components/Trace";
import { FeatherInfo } from "@subframe/core";
import { FeatherSend } from "@subframe/core";

function Ui31NlChat() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · CHAT
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            NL chat
          </h1>
          <p className="text-body font-body text-subtext-color">
            Ask the archive in plain language — grounded answers with citations
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex w-full items-start justify-end">
            <Bubble
              role="user"
              text="Who were the seamstresses of El Raval in 1912?"
            />
          </div>
          <Bubble
            role="assistant"
            text="141 women appear as costureras in the 1912 census. Mercè Puig (b. 1887) is among them."
            citations={
              <>
                <Bubble.CitationChip label="1" />
                <Bubble.CitationChip label="2" />
              </>
            }
          />
          <div className="flex w-full items-start justify-end">
            <Bubble
              role="user"
              text="Why is she linked to the occupation class?"
            />
          </div>
          <Bubble
            role="assistant"
            text="The link comes from census row 441 via mapping person_mapping.ttl v41 — occupation field 'costurera'."
            citations={<Bubble.CitationChip label="2" />}
          />
        </div>
        <Trace
          title="Grounding · sources used"
          summary="3 sources · 2 citations"
          state="collapsed"
        >
          <Trace.Step
            title="1912 census (source #1)"
            duration=""
            detail=""
            status="done"
          />
          <Trace.Step
            title="person_mapping.ttl (source #2)"
            duration=""
            detail=""
            status="done"
            last={true}
          />
        </Trace>
        <div className="flex w-full items-center gap-3">
          <TextField
            className="h-auto grow shrink-0 basis-0"
            label=""
            helpText=""
          >
            <TextField.Input
              placeholder="Ask about the archive…"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Button
            variant="brand-primary"
            icon={<FeatherSend />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Send
          </Button>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title=""
          description="Answers are grounded in the graph; LLM suggestions are labelled as hypotheses"
        />
      </div>
    </div>
  );
}

export default Ui31NlChat;
