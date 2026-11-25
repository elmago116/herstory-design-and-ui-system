"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherTrash2 } from "@/ui/core";

function Ui051RunRetentionSweep() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Run retention sweep
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            This permanently deletes raw imports past their retention window.
            Published triples are untouched.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-start gap-2 rounded-md border border-solid border-warning-200 bg-warning-50 px-3 py-2">
            <FeatherAlertTriangle className="text-caption font-caption text-warning-700 mt-0.5 flex-none" />
            <span className="text-caption font-caption text-warning-700">
              38 files · 2.4 GB will be deleted across 3 data classes
            </span>
          </div>
          <TextField
            label="Type DELETE to confirm"
            helpText="This cannot be undone."
          >
            <TextField.Input
              placeholder="DELETE"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="destructive-primary"
            icon={<FeatherTrash2 />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Delete files
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui051RunRetentionSweep;
