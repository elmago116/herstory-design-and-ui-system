"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { FeatherChevronRight } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";

function Ui311SourceCitation() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[640px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Source 1 · Padró municipal 1912
          </h1>
          <p className="text-body font-body text-subtext-color">
            Carrer de la Cera 14, folio 233. Cited for the assertion that Mercè
            Puig worked as a seamstress.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <span className="text-caption font-caption text-subtext-color">
            Verbatim extract
          </span>
          <span className="text-body font-body text-default-font">
            Puig, Mercè, 25 anys, natural de Barcelona, ofici costurera,
            domiciliada al carrer de la Cera 14.
          </span>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Archive
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              Arxiu Municipal Contemporani de Barcelona
            </span>
          </div>
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Collection
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              Padró municipal 1912
            </span>
          </div>
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Page
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              folio 233
            </span>
          </div>
          <div className="flex w-full items-start gap-6">
            <span className="w-32 flex-none text-caption font-caption text-subtext-color">
              Retrieved
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              2 Nov 2026
            </span>
          </div>
        </div>
        <Alert
          variant="neutral"
          icon={<FeatherInfo />}
          title="Machine transcription"
          description="The extract was produced by OCR from the page image, then checked by hand against the scan. Original spelling, accents and abbreviations are kept exactly as written, so the wording can be cited verbatim."
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherChevronRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open original page
          </Button>
          <Button
            variant="neutral-secondary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Open in corpus
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui311SourceCitation;
