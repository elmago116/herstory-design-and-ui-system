"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";

function Ui032DiscardChanges() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[520px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Discard unsaved changes?
          </h1>
          <p className="text-body font-body text-subtext-color">
            Three integration settings are edited but not saved. Discarding
            restores the last saved values; nothing is written to the pipeline.
          </p>
        </div>
        <Alert
          variant="warning"
          title="These edits will be lost"
          description="Default language, sync frequency and auto-validate mappings revert to their saved values. This cannot be undone."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Keep editing
          </Button>
          <Button
            variant="destructive-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Discard changes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui032DiscardChanges;
