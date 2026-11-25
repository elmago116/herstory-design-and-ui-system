"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { TextField } from "@/ui/components/TextField";
import { FeatherInfo } from "@/ui/core";

function Ui181EditAlias() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Edit alias
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            Ambiguous name · 2 candidates
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Local name
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              anna-miralles
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Matched entity
            </span>
            <span className="text-monospace-body font-monospace-body text-subtext-color">
              —
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-caption font-caption text-subtext-color">
              Confidence
            </span>
            <Badge variant="warning" icon={<FeatherInfo />}>
              Ambiguous
            </Badge>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            className="h-auto w-full flex-none"
            label="Alias"
            helpText=""
          >
            <TextField.Input
              placeholder="local-name"
              value="anna-miralles"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Combobox
            className="h-auto w-full flex-none"
            label="Target item"
            placeholder="Resolve local name…"
            value=""
            helpText=""
          />
        </div>
        <p className="text-caption font-caption text-subtext-color">
          Saving changes the match for every source using this name.
        </p>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save alias
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui181EditAlias;
