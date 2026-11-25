"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Select } from "@/ui/components/Select";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";

function Ui15TransformerRunner() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Transforming runner
          </h1>
          <p className="text-body font-body text-subtext-color">
            Convert raw sources into RDF triples
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Transform controls
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Select transformer and dataset
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Select
              label="Transformer"
              placeholder="Choose transformer"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="CSV→RDF Triples">CSV→RDF Triples</Select.Item>
              <Select.Item value="XML→RDF">XML→RDF</Select.Item>
              <Select.Item value="NAF→RDF">NAF→RDF</Select.Item>
            </Select>
            <Select
              label="Dataset"
              placeholder="Choose dataset"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Barcelona_1912">Barcelona_1912</Select.Item>
              <Select.Item value="press_1927">press_1927</Select.Item>
              <Select.Item value="letters_1926">letters_1926</Select.Item>
            </Select>
            <div className="flex items-center gap-3">
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Run transformation
              </Button>
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Dry run
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Progress
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <span className="text-caption-bold font-caption-bold text-default-font">
                RDF transformation
              </span>
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                35%
              </span>
            </div>
            <Progress value={35} />
            <span className="text-caption font-caption text-subtext-color">
              Transforming row 3,412 of 9,740
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              DRF transformation log
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Live output from the running transformer
            </span>
          </div>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-3 py-2">
            <span className="text-monospace-body font-monospace-body text-default-font">
              [14:02:11] loading source census_raw.csv (9,740 rows)
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              [14:02:14] applying person_mapping.ttl v41
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              [14:02:19] 3,412 / 9,740 rows transformed
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              [14:02:21] warning: 14 rows skipped (missing birthDate)
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3 px-6 py-6">
          <Alert
            className="h-auto w-auto flex-none"
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="14 rows skipped"
            description="Review mapping rule M-12"
          />
          <Alert
            variant="success"
            icon={<FeatherCheckCircle />}
            title="Transform complete"
            description="(previous run)"
          />
        </div>
      </div>
    </div>
  );
}

export default Ui15TransformerRunner;
