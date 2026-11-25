"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { TextField } from "@/ui/components/TextField";

function Ui241EditWorkshop() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Edit workshop
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            Changing the date notifies registered participants.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            label="Purpose"
            helpText="Workshop title shown to participants"
          >
            <TextField.Input
              placeholder="e.g. Women of El Raval"
              value="Women of El Raval"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <TextField label="Location" helpText="Venue or meeting link">
            <TextField.Input
              placeholder="e.g. Ateneu Obrer, Barcelona"
              value="Ateneu Obrer, Barcelona"
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
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui241EditWorkshop;
