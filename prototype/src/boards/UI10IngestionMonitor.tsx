"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { Progress } from "@/ui/components/Progress";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherCheckCircle } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherTrash } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui10IngestionMonitor() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Ingestion monitor
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Live status of source ingestion runs across every registered
            archive.
          </span>
          <div className="flex w-full items-center gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-3 py-2">
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Source registration
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  2
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
                  Ingestion
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  3
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Ontology
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  4
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Mapping
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  5
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Validation
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-micro font-micro text-neutral-600 flex items-center justify-center rounded-full bg-neutral-100">
                  6
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-subtext-color">
                  Publish
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Badge className="whitespace-nowrap" variant="brand">
                run #241
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 2 of 6
              </span>
            </div>
          </div>
        </div>
        <Alert
          variant="success"
          icon={<FeatherCheckCircle />}
          title="Pipeline healthy"
          description="2 runs completed in the last 24 hours · 1 retry scheduled · average run 12m 40s."
        />
        <div className="w-full items-start gap-6 pt-8 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Barcelona 1912
              </span>
              <Badge variant="brand">Ingesting</Badge>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              census_raw.csv · stage: mapping
            </span>
            <Progress value={62} />
            <div className="flex w-full items-center justify-between">
              <span className="text-caption font-caption text-subtext-color">
                Started 09:40
              </span>
              <span className="text-caption font-caption text-subtext-color">
                6m 12s
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Women in Catalan Press
              </span>
              <Badge variant="success">Done</Badge>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              press_1927.csv · stage: validated
            </span>
            <Progress value={100} />
            <div className="flex w-full items-center justify-between">
              <span className="text-caption font-caption text-subtext-color">
                Started 07:20
              </span>
              <span className="text-caption font-caption text-subtext-color">
                9m 48s
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Suffrage Correspondence
              </span>
              <Badge variant="neutral">Queued</Badge>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              letters.xml · stage: awaiting slot
            </span>
            <Progress value={0} />
            <div className="flex w-full items-center justify-between">
              <span className="text-caption font-caption text-subtext-color">
                Queued 09:58
              </span>
              <span className="text-caption font-caption text-subtext-color">
                —
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 pt-8">
          <div className="flex w-full flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Recent runs
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Newest first · click a run for stage-level detail.
            </span>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-7">
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Run
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Source
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Stage
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Status
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Records
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Duration
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Actions
              </span>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-7">
              <span className="text-monospace-body font-monospace-body text-default-font">
                run-2412
              </span>
              <span className="text-body font-body text-default-font">
                Barcelona 1912
              </span>
              <span className="text-body font-body text-default-font">
                Mapping
              </span>
              <Badge variant="brand">Ingesting</Badge>
              <span className="text-body font-body text-default-font">
                9,740
              </span>
              <span className="text-body font-body text-default-font">
                6m 12s
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronUp />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Close
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-8 py-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Stages · run-2412
                </span>
                <Badge variant="brand">Ingesting</Badge>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Ingestion
                  </span>
                  <Progress value={100} />
                  <span className="text-caption font-caption text-subtext-color">
                    9,740 rows · done
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Mapping
                  </span>
                  <Progress value={62} />
                  <span className="text-caption font-caption text-subtext-color">
                    6,041 of 9,740 rows
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Validation
                  </span>
                  <Progress value={0} />
                  <span className="text-caption font-caption text-subtext-color">
                    queued
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Load
                  </span>
                  <Progress value={0} />
                  <span className="text-caption font-caption text-subtext-color">
                    queued
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                <span className="text-caption font-caption text-subtext-color">
                  Last log line
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  mapping: 6,041 of 9,740 rows transformed · errors 0 · elapsed
                  6m 12s
                </span>
              </div>
              <div className="flex w-full items-center justify-end gap-2">
                <Button
                  variant="brand-primary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Retry run
                </Button>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <Button
                      variant="neutral-secondary"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      More
                    </Button>
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={4}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem>
                          Retry run
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem>
                          Escalate to engineer
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-monospace-body font-monospace-body text-default-font">
                run-2411
              </span>
              <span className="text-body font-body text-default-font">
                Women in Catalan Press
              </span>
              <span className="text-body font-body text-default-font">
                Validated
              </span>
              <Badge variant="success">Done</Badge>
              <span className="text-body font-body text-default-font">
                1,126
              </span>
              <span className="text-body font-body text-default-font">
                9m 48s
              </span>
              <div className="flex items-start gap-2">
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
                <IconButton
                  className="h-auto w-auto min-w-[40px] flex-none self-stretch"
                  variant="destructive-secondary"
                  icon={<FeatherTrash />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-monospace-body font-monospace-body text-default-font">
                run-2410
              </span>
              <span className="text-body font-body text-default-font">
                Maritime Trade Register
              </span>
              <span className="text-body font-body text-default-font">
                Transformation
              </span>
              <Badge variant="success">Done</Badge>
              <span className="text-body font-body text-default-font">875</span>
              <span className="text-body font-body text-default-font">
                4m 05s
              </span>
              <div className="flex items-start gap-2">
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
                <IconButton
                  className="h-auto w-auto min-w-[40px] flex-none self-stretch"
                  variant="destructive-secondary"
                  icon={<FeatherTrash />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-monospace-body font-monospace-body text-default-font">
                run-2409
              </span>
              <span className="text-body font-body text-default-font">
                Seville Archivo Municipal
              </span>
              <span className="text-body font-body text-default-font">
                Ingestion
              </span>
              <Badge variant="error">Failed</Badge>
              <span className="text-body font-body text-default-font">0</span>
              <span className="text-body font-body text-default-font">
                1m 32s
              </span>
              <div className="flex items-start gap-2">
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
                <IconButton
                  className="h-auto w-auto min-w-[40px] flex-none self-stretch"
                  variant="destructive-secondary"
                  icon={<FeatherTrash />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-monospace-body font-monospace-body text-default-font">
                run-2408
              </span>
              <span className="text-body font-body text-default-font">
                Suffrage Correspondence
              </span>
              <span className="text-body font-body text-default-font">
                Queued
              </span>
              <Badge variant="neutral">Queued</Badge>
              <span className="text-body font-body text-default-font">340</span>
              <span className="text-body font-body text-default-font">—</span>
              <div className="flex items-start gap-2">
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View
                </Button>
                <IconButton
                  className="h-auto w-auto min-w-[40px] flex-none self-stretch"
                  variant="destructive-secondary"
                  icon={<FeatherTrash />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5 mt-8">
          <div className="flex w-full items-center justify-between">
            <span className="text-body font-body text-default-font">
              Storage used
            </span>
            <span className="text-body-bold font-body-bold text-default-font">
              6.2 GB / 10 GB
            </span>
          </div>
          <Progress value={62} />
          <span className="text-caption font-caption text-subtext-color">
            Raw imports and intermediate files retained per the data-retention
            policy.
          </span>
        </div>
        <Alert
          variant="error"
          icon={<FeatherAlertTriangle />}
          title="1 run failed in the last 24h"
          description="run-2409 · Seville Archivo Municipal — connection reset by the source endpoint. Retry scheduled 12:00 UTC."
        />
      </div>
    </div>
  );
}

export default Ui10IngestionMonitor;
