"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Progress } from "@/ui/components/Progress";
import { Select } from "@/ui/components/Select";
import { Tabs } from "@/ui/components/Tabs";
import { FeatherAlertTriangle } from "@/ui/core";
import { FeatherBot } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherGavel } from "@/ui/core";
import { FeatherHandMetal } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherMousePointerClick } from "@/ui/core";
import { FeatherPencil } from "@/ui/core";
import { FeatherSave } from "@/ui/core";
import { FeatherUpload } from "@/ui/core";

function Ui12MappingEditor() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-3 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Mapping manager
          </h1>
          <p className="text-body font-body text-subtext-color">
            Map source columns to Wikidata properties — no syntax needed
          </p>
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
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Ingestion
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Ontology
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  4
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
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
                Barcelona 1912
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 4 of 6
              </span>
            </div>
          </div>
        </div>
        <Tabs>
          <Tabs.Item active={true} icon={<FeatherMousePointerClick />}>
            Select an existing mapping
          </Tabs.Item>
          <Tabs.Item active={false} icon={<FeatherUpload />}>
            Upload yours
          </Tabs.Item>
          <Tabs.Item icon={<FeatherPencil />}> Create one</Tabs.Item>
        </Tabs>
        <div className="flex flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 pt-2 pb-3 self-stretch">
          <span className="text-body-bold font-body-bold text-default-font">
            1. Select the workspace you wish to work on
          </span>
          <Select
            label=""
            placeholder="Workspace Select"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Workspace 1">Workspace 1</Select.Item>
            <Select.Item value="Workspace 1">Workspace 1</Select.Item>
            <Select.Item value="Workspace 1">Workspace 1</Select.Item>
          </Select>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                2. Search
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Select a CSV column and target Wikidata property
              </span>
            </div>
            <Select
              className="h-auto w-full flex-none"
              label="CSV column"
              placeholder="Select source column…"
              helpText="Columns from census_raw.csv"
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="full_name">full_name</Select.Item>
              <Select.Item value="birth_year">birth_year</Select.Item>
              <Select.Item value="occupation">occupation</Select.Item>
              <Select.Item value="address">address</Select.Item>
              <Select.Item value="gender">gender</Select.Item>
            </Select>
            <Combobox
              className="h-auto w-full flex-none"
              label="Target property"
              placeholder="Search by label or property ID…"
              value=""
              helpText="e.g. P106 (occupation), P21 (sex/gender)"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              3. Review mapping rules
            </span>
            <span className="text-caption font-caption text-subtext-color">
              5 mappings · direct and LLM-suggested
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <div className="flex w-full flex-col items-start">
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-6">
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Source field
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Target property
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Type
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Confidence
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Status
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Actions
                </span>
              </div>
              <div className="w-full items-center gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-6">
                <span className="text-body font-body text-default-font">
                  full_name
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P1478 (name)
                </span>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Direct
                </Badge>
                <Progress value={98} />
                <Badge variant="success" icon={<FeatherCheck />}>
                  Active
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    iconRight={<FeatherChevronUp />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Close
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-8 py-4">
                <div className="flex w-full items-center justify-between">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Mapping details · full_name → P1478
                  </span>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Active
                  </Badge>
                </div>
                <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Source column
                    </span>
                    <span className="text-body font-body text-default-font">
                      full_name · census_raw.csv
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Target property
                    </span>
                    <span className="text-body font-body text-default-font">
                      P1478 (name)
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Datatype
                    </span>
                    <span className="text-body font-body text-default-font">
                      xsd:string
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Transformation
                    </span>
                    <span className="text-body font-body text-default-font">
                      concatenate given_name + family_name
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Type
                    </span>
                    <span className="text-body font-body text-default-font">
                      Direct
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Confidence
                    </span>
                    <span className="text-body font-body text-default-font">
                      98%
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Rule version
                    </span>
                    <span className="text-body font-body text-default-font">
                      person_mapping.ttl v41 · rule 1
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <span className="text-caption font-caption text-subtext-color">
                      Last changed
                    </span>
                    <span className="text-body font-body text-default-font">
                      12 Nov 2026 · Teresa Vidal
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Rule preview
                  </span>
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    subject: hs:Person · predicate: wdt:P1478 · object:
                    concat(given_name, family_name)
                  </span>
                </div>
                <div className="flex w-full items-center justify-end gap-2">
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit rule
                  </Button>
                </div>
              </div>
              <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
                <span className="text-body font-body text-default-font">
                  birth_year
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P569 (date of birth)
                </span>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Direct
                </Badge>
                <Progress value={95} />
                <Badge variant="success" icon={<FeatherCheck />}>
                  Active
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    iconRight={<FeatherChevronDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
                <span className="text-body font-body text-default-font">
                  occupation
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P106 (occupation)
                </span>
                <Badge variant="brand" icon={<FeatherInfo />}>
                  LLM-suggested
                </Badge>
                <Progress value={72} />
                <Badge variant="warning" icon={<FeatherClock />}>
                  Review
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    iconRight={<FeatherChevronDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
                <span className="text-body font-body text-default-font">
                  address
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P969 (street address)
                </span>
                <Badge variant="brand" icon={<FeatherInfo />}>
                  LLM-suggested
                </Badge>
                <Progress value={61} />
                <Badge variant="warning" icon={<FeatherClock />}>
                  Review
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    iconRight={<FeatherChevronDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-6">
                <span className="text-body font-body text-default-font">
                  gender
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P21 (sex/gender)
                </span>
                <Badge variant="brand" icon={<FeatherInfo />}>
                  LLM-suggested
                </Badge>
                <Progress value={88} />
                <Badge variant="success" icon={<FeatherCheck />}>
                  Active
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    iconRight={<FeatherChevronDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Validation
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Quality gate and actions
            </span>
          </div>
          <Alert
            variant="brand"
            icon={<FeatherInfo />}
            title="Human validation gate"
            description="All LLM-suggested mappings require human approval before they become active."
          />
          <Alert
            variant="warning"
            icon={<FeatherAlertTriangle />}
            title="14 Q-typing slips pending adjudication"
            description="REQ-4.5.2"
          />
          <div className="flex items-center gap-3">
            <Button
              variant="neutral-primary"
              icon={<FeatherBot />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Validate
            </Button>
            <Button
              variant="neutral-primary"
              icon={<FeatherHandMetal />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Validate
            </Button>
            <Button
              variant="neutral-primary"
              icon={<FeatherSave />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save
            </Button>
            <Button
              variant="neutral-secondary"
              icon={<FeatherGavel />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Adjudicate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui12MappingEditor;
