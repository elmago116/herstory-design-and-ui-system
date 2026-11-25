"use client";

import React from "react";
import { Select } from "@/ui/components/Select";

function Ui374LanguagePicker() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <div className="flex w-full max-w-[880px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="text-heading-1 font-heading-1 text-default-font">
              Language picker
            </h1>
            <span className="text-body font-body text-subtext-color">
              Interface languages and label languages are chosen separately.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Interface language
            </span>
            <Select
              label="Language"
              placeholder="Select language"
              helpText="The interface switches immediately; RTL layouts mirror the navigation."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Català">Català</Select.Item>
              <Select.Item value="Español">Español</Select.Item>
              <Select.Item value="English">English</Select.Item>
              <Select.Item value="العربية">العربية</Select.Item>
            </Select>
            <div className="flex w-full items-center justify-between rounded-md bg-background-alt px-4 py-3">
              <span className="text-caption font-caption text-subtext-color">
                Preview
              </span>
              <span className="text-body font-body text-default-font">
                Cerca · Mapes · Ajuda
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Label language
            </span>
            <Select
              label="Preferred labels"
              placeholder="Select label language"
              helpText="Applies to Wikidata labels and entity names, independent of the interface."
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Català, Español, English">
                Català, Español, English
              </Select.Item>
              <Select.Item value="Español, English">
                Español, English
              </Select.Item>
              <Select.Item value="English only">English only</Select.Item>
            </Select>
            <span className="text-caption font-caption text-subtext-color">
              Fallback order is preserved: a missing Catalan label falls back to
              Spanish, then English.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui374LanguagePicker;
