"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherSave } from "@subframe/core";

function Ui03IntegrationSettings() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · SUPERADMIN
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Integration settings
          </h1>
          <span className="text-caption font-caption text-subtext-color">
            Configure external services, providers and sync behaviour.
          </span>
          <div className="flex w-full flex-wrap items-start gap-3 pt-2">
            <Button
              variant="brand-primary"
              icon={<FeatherSave />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save changes
            </Button>
          </div>
        </div>
        <Alert
          variant="success"
          icon={<FeatherCheckCircle />}
          title="All integrations operational"
          description="Last connectivity check passed 12 minutes ago. No degraded services."
        />
        <div className="flex w-full flex-col items-start gap-8 pt-8">
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Wikidata reconciliation
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Endpoint used to match historical records against Wikidata
                entities.
              </span>
            </div>
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex max-w-[400px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <TextField
                  label="Endpoint"
                  helpText="SPARQL / reconciliation service base URL."
                >
                  <TextField.Input
                    placeholder="https://query.wikidata.org/sparql"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
              <div className="flex max-w-[280px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <TextField
                  label="User agent"
                  helpText="Identifies requests to Wikidata."
                >
                  <TextField.Input
                    placeholder="HerStory/1.0 (contact@herstory.dev)"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
              <div className="flex max-w-[220px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Default language
                </span>
                <Select
                  label=""
                  placeholder="es"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="Catalan (ca)">Catalan (ca)</Select.Item>
                  <Select.Item value="Spanish (es)">Spanish (es)</Select.Item>
                  <Select.Item value="English (en)">English (en)</Select.Item>
                  <Select.Item value="French (fr)">French (fr)</Select.Item>
                </Select>
              </div>
            </div>
            <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border px-4 py-3 gap-4">
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-body font-body text-default-font">
                  Auto-validate mappings
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Run reconciliation checks when new mappings enter staging.
                </span>
              </div>
              <Switch
                checked={true}
                onCheckedChange={(checked: boolean) => {}}
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                LLM suggestion provider
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Model used for mapping suggestions. Suggestions are always
                hypotheses until a human validates them.
              </span>
            </div>
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex max-w-[260px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Provider
                </span>
                <Select
                  label=""
                  placeholder="OpenAI"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="OpenAI">OpenAI</Select.Item>
                  <Select.Item value="Anthropic">Anthropic</Select.Item>
                  <Select.Item value="Local (Ollama)">
                    Local (Ollama)
                  </Select.Item>
                </Select>
              </div>
              <div className="flex max-w-[300px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <TextField
                  label="API key"
                  helpText="Stored encrypted. Never exposed in export."
                >
                  <TextField.Input
                    placeholder="sk-••••••••••••••••"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
              <div className="flex max-w-[220px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <TextField label="Model" helpText="">
                  <TextField.Input
                    placeholder="gpt-4.1"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
            </div>
            <Alert
              variant="brand"
              icon={<FeatherInfo />}
              title="Human validation gate"
              description="LLM-suggested triples are labelled with confidence, provider and model, and require explicit approval before entering the graph."
            />
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Synchronisation
              </span>
              <span className="text-caption font-caption text-subtext-color">
                How often source archives are re-ingested and reconciled.
              </span>
            </div>
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex max-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Sync frequency
                </span>
                <Select
                  label=""
                  placeholder="Nightly (02:00 UTC)"
                  helpText=""
                  value={undefined}
                  onValueChange={(value: string) => {}}
                >
                  <Select.Item value="Hourly">Hourly</Select.Item>
                  <Select.Item value="Nightly (02:00 UTC)">
                    Nightly (02:00 UTC)
                  </Select.Item>
                  <Select.Item value="Weekly (Sun 02:00 UTC)">
                    Weekly (Sun 02:00 UTC)
                  </Select.Item>
                  <Select.Item value="Manual only">Manual only</Select.Item>
                </Select>
              </div>
              <div className="flex max-w-[360px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <TextField
                  label="Webhook URL"
                  helpText="Receives pipeline completion events."
                >
                  <TextField.Input
                    placeholder="https://hooks.example.com/herstory"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
            </div>
            <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border px-4 py-3 gap-4">
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-body font-body text-default-font">
                  Automated nightly sync
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Re-run ingestion pipeline for all registered sources.
                </span>
              </div>
              <Switch
                checked={true}
                onCheckedChange={(checked: boolean) => {}}
              />
            </div>
            <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border px-4 py-3 gap-4">
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-body font-body text-default-font">
                  Failure notifications
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Email the coordinator contact when a pipeline run fails.
                </span>
              </div>
              <Switch
                checked={true}
                onCheckedChange={(checked: boolean) => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 pt-8">
          <div className="flex w-full flex-wrap items-start gap-3 border-t border-solid border-neutral-border pt-6">
            <Button
              variant="brand-primary"
              icon={<FeatherSave />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save changes
            </Button>
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Discard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui03IntegrationSettings;
