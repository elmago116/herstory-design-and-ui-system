"use client";

import React from "react";
import { Button } from "@/ui/components/Button";

function Ui401ClearHistory() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color">
            SEARCH HISTORY
          </span>
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Clear search history
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            Removes every saved and recent search from this account.
            Personalised suggestions stop until you search again.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-body font-body text-subtext-color">
              Saved searches
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              0
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-body font-body text-subtext-color">
              Recent searches
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              3
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-secondary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="destructive-primary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Clear history
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui401ClearHistory;
