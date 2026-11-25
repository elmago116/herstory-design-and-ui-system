"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Trace } from "@/ui/components/Trace";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherChevronUp } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";

function Ui20AbsenceRegistry() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Absence registry
          </h1>
          <p className="text-body font-body text-subtext-color">
            Absence is not non-existence…
          </p>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title="Gap classification"
          description="Gaps are classified so the graph never implies false absence"
        />
        <div className="flex flex-col items-start gap-4 flex-1">
          <div className="flex w-full items-center justify-between">
            <Select
              label=""
              placeholder="Absence class: All classes"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="All classes">All classes</Select.Item>
              <Select.Item value="Data absent">Data absent</Select.Item>
              <Select.Item value="Not ingested">Not ingested</Select.Item>
              <Select.Item value="Hidden by policy">
                Hidden by policy
              </Select.Item>
              <Select.Item value="Uncertain">Uncertain</Select.Item>
              <Select.Item value="Archival silence">
                Archival silence
              </Select.Item>
              <Select.Item value="Ethical restriction">
                Ethical restriction
              </Select.Item>
            </Select>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-7">
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Entity/Item
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Missing dimension
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Absence class
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Source
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Note
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Status
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Actions
              </span>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-7">
              <span className="text-body font-body text-default-font">
                Census · 1920
              </span>
              <span className="text-body font-body text-default-font">
                Women’s occupation
              </span>
              <Badge variant="neutral">Data absent</Badge>
              <span className="text-body font-body text-default-font">INE</span>
              <span className="text-body font-body text-default-font">
                Column not collected
              </span>
              <span className="text-body font-body text-default-font">
                Open
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
                  Gap details · Census 1920
                </span>
                <Badge variant="neutral">Data absent</Badge>
              </div>
              <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Absence class
                  </span>
                  <span className="text-body font-body text-default-font">
                    Data absent · the column was never collected
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Source
                  </span>
                  <span className="text-body font-body text-default-font">
                    INE census schedule
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Linked CQ
                  </span>
                  <span className="text-body font-body text-default-font">
                    CQ-01 Seamstresses of El Raval 1912
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Registered
                  </span>
                  <span className="text-body font-body text-default-font">
                    28 Oct 2026 · Elena Gómez
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Status
                  </span>
                  <span className="text-body font-body text-default-font">
                    Open
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <span className="text-caption font-caption text-subtext-color">
                    Graph effect
                  </span>
                  <span className="text-body font-body text-default-font">
                    No false non-existence assertion
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                <span className="text-caption font-caption text-subtext-color">
                  Why this is not non-existence
                </span>
                <span className="text-body font-body text-subtext-color">
                  The 1920 schedule omits occupation for women in domestic
                  service; absence is recorded here instead of leaving the
                  property blank in the graph.
                </span>
              </div>
              <div className="flex w-full items-center justify-end gap-2">
                <Button
                  variant="neutral-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Link competency question
                </Button>
                <Button
                  variant="brand-primary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Reclassify gap
                </Button>
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-body font-body text-default-font">
                Parish register · San Blas
              </span>
              <span className="text-body font-body text-default-font">
                Baptismal records 1880–1890
              </span>
              <Badge variant="error">Not ingested</Badge>
              <span className="text-body font-body text-default-font">
                Diocesan archive
              </span>
              <span className="text-body font-body text-default-font">
                Volume damaged
              </span>
              <span className="text-body font-body text-default-font">
                Escalated
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-body font-body text-default-font">
                Military roll · 1865
              </span>
              <span className="text-body font-body text-default-font">
                Conscientious objectors
              </span>
              <Badge variant="error">Hidden by policy</Badge>
              <span className="text-body font-body text-default-font">MOD</span>
              <span className="text-body font-body text-default-font">
                Sealed per D-47
              </span>
              <span className="text-body font-body text-default-font">
                Archived
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-body font-body text-default-font">
                Merchant ledger · 1742
              </span>
              <span className="text-body font-body text-default-font">
                Transaction counterpart
              </span>
              <Badge variant="warning">Uncertain</Badge>
              <span className="text-body font-body text-default-font">
                Gremi d’Adrover
              </span>
              <span className="text-body font-body text-default-font">
                Partial match only
              </span>
              <span className="text-body font-body text-default-font">
                Reviewing
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-body font-body text-default-font">
                Oral history · 1936
              </span>
              <span className="text-body font-body text-default-font">
                Female narrators
              </span>
              <Badge variant="brand">Archival silence</Badge>
              <span className="text-body font-body text-default-font">AHC</span>
              <span className="text-body font-body text-default-font">
                No women interviewed
              </span>
              <span className="text-body font-body text-default-font">
                Classified
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-7">
              <span className="text-body font-body text-default-font">
                Health records · 1950s
              </span>
              <span className="text-body font-body text-default-font">
                Reproductive health data
              </span>
              <Badge variant="brand">Ethical restriction</Badge>
              <span className="text-body font-body text-default-font">
                MSSSI
              </span>
              <span className="text-body font-body text-default-font">
                Embargo 80 years
              </span>
              <span className="text-body font-body text-default-font">
                Restricted
              </span>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
        <h3 className="text-heading-3 font-heading-3 text-default-font">
          Gap history
        </h3>
        <span className="text-caption font-caption text-subtext-color">
          Q4481 · Census women’s occupation
        </span>
        <Trace title="Gap history · Q4481" summary="3 steps recorded">
          <Trace.Step
            title="Identified"
            duration="2026-10-28"
            detail="Gap flagged by ingestion pipeline"
            status="done"
          />
          <Trace.Step
            title="Classified"
            duration="2026-10-29"
            detail="Classified as ‘archival silence’"
            status="done"
          />
          <Trace.Step
            title="Noted in CQ registry"
            duration="2026-10-30"
            detail="Linked to CQ-04"
            status="done"
            last={true}
          />
        </Trace>
      </div>
    </div>
  );
}

export default Ui20AbsenceRegistry;
