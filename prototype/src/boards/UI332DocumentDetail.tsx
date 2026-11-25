"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherCheck } from "@/ui/core";

function Ui332DocumentDetail() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Barcelona Census 1912
          </h1>
          <div className="flex w-full flex-wrap items-center gap-3">
            <Badge variant="success" icon={<FeatherCheck />}>
              Indexed
            </Badge>
            <span className="text-caption font-caption text-subtext-color">
              Arxiu Municipal · 48 pages · Public domain
            </span>
          </div>
        </div>
        <div className="w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-surface px-6 py-6 grid grid-cols-2">
          <div className="flex flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color uppercase">
              Source
            </span>
            <span className="text-body font-body text-default-font">
              Arxiu Municipal de Barcelona, Padró municipal 1912
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color uppercase">
              Ingested
            </span>
            <span className="text-body font-body text-default-font">
              14 March 2026 · OCR confidence 97%
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color uppercase">
              Extracted entities
            </span>
            <span className="text-body font-body text-default-font">
              1,284 people · 312 households · 46 occupations
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-caption font-caption text-subtext-color uppercase">
              Rights
            </span>
            <span className="text-body font-body text-default-font">
              Public domain — Ajuntament de Barcelona
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui332DocumentDetail;
