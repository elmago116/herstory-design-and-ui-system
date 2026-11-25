"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Switch } from "@/ui/components/Switch";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherXCircle } from "@subframe/core";

function Ui23EjChecklistOperator() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            EJ checklist operator
          </h1>
          <p className="text-body font-body text-subtext-color">
            Verify representation before publication
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Publication checklist — batch 7 · Barcelona 1912
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Coordinator verification gate · REQ-11.2.5
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Gender representation
            </span>
            <span className="text-caption font-caption text-subtext-color">
              47%
            </span>
            <Badge variant="warning" icon={<FeatherAlertTriangle />}>
              FAILS
            </Badge>
            <Switch
              checked={false}
              onCheckedChange={(checked: boolean) => {}}
            />
          </div>
          <div className="flex w-full items-center gap-3">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Intersectionality coverage
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Passed
            </span>
            <Badge variant="success" icon={<FeatherCheck />}>
              Passed
            </Badge>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
          </div>
          <div className="flex w-full items-center gap-3">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Language diversity
            </span>
            <span className="text-caption font-caption text-subtext-color">
              3 languages
            </span>
            <Badge variant="success" icon={<FeatherCheck />}>
              Passed
            </Badge>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
          </div>
          <div className="flex w-full items-center gap-3">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Community provenance
            </span>
            <span className="text-caption font-caption text-subtext-color">
              1 workshop
            </span>
            <Badge variant="success" icon={<FeatherCheck />}>
              Passed
            </Badge>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
          </div>
          <div className="flex w-full items-center gap-3">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Source diversity
            </span>
            <span className="text-caption font-caption text-subtext-color">
              4 sources
            </span>
            <Badge variant="success" icon={<FeatherCheck />}>
              Passed
            </Badge>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
          </div>
          <div className="flex w-full items-center gap-3">
            <span className="whitespace-nowrap text-body font-body text-default-font">
              Absence classification
            </span>
            <span className="text-caption font-caption text-subtext-color">
              9 gaps documented
            </span>
            <Badge variant="success" icon={<FeatherCheck />}>
              Passed
            </Badge>
            <Switch checked={true} onCheckedChange={(checked: boolean) => {}} />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Readiness
              </span>
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                83%
              </span>
            </div>
            <Progress value={83} />
          </div>
          <Alert
            variant="error"
            icon={<FeatherXCircle />}
            title="Publication blocked: gender representation check failed"
            description="Gender representation at 47% falls below the 50% threshold. Review source registration and re-run the EJ check before publishing."
          />
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="2 of 3 batches passed"
            description="Batch 6 (Deprecated) and Batch 8 (Current) passed all checks. Batch 7 · Barcelona 1912 requires attention."
          />
          <div className="flex w-full flex-wrap items-center gap-3">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Re-run EJ check
            </Button>
            <Button
              variant="brand-primary"
              icon={<FeatherCheckCircle />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui23EjChecklistOperator;
