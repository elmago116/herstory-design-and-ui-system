"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherX } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui13ShaclShapesEditor() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            SHACL shapes monitor
          </h1>
          <p className="text-body font-body text-subtext-color">
            Validate graph data against shapes
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
                <span className="h-5 w-5 flex-none text-body font-body text-default-font flex items-center justify-center rounded-full bg-success-100">
                  {" "}
                </span>
                <span className="whitespace-nowrap text-caption font-caption text-default-font">
                  Mapping
                </span>
              </div>
              <span className="h-px min-w-[8px] grow shrink-0 basis-0 text-body font-body text-default-font bg-neutral-300">
                {" "}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  5
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
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
                PersonShape
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 5 of 6
              </span>
            </div>
          </div>
        </div>
        <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Shapes
              </span>
              <span className="text-caption font-caption text-subtext-color">
                4 shape constraints defined
              </span>
            </div>
            <div className="w-full items-start gap-6 grid grid-cols-3">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Triples checked
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  250
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Violations
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  14
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <span className="text-caption font-caption text-subtext-color">
                  Warnings
                </span>
                <span className="text-heading-2 font-heading-2 text-default-font">
                  2
                </span>
              </div>
            </div>
            <Select
              label=""
              placeholder="Filter severity"
              helpText=""
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="All severities">All severities</Select.Item>
              <Select.Item value="sh:Violation">sh:Violation</Select.Item>
              <Select.Item value="sh:Warning">sh:Warning</Select.Item>
            </Select>
            <div className="flex w-full flex-col items-start overflow-x-auto">
              <div className="flex w-full flex-col items-start">
                <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-5">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Shape
                  </span>
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Target class
                  </span>
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Severity
                  </span>
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Status
                  </span>
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Actions
                  </span>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    PersonShape
                  </span>
                  <span className="text-body font-body text-default-font">
                    ex:Person
                  </span>
                  <Badge variant="error">Violation</Badge>
                  <Badge variant="success">Active</Badge>
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
                      Shape details · ex:PersonShape
                    </span>
                    <Badge variant="error">Violation</Badge>
                  </div>
                  <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Target class
                      </span>
                      <span className="text-body font-body text-default-font">
                        ex:Person
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Properties constrained
                      </span>
                      <span className="text-body font-body text-default-font">
                        2 · birth_date, occupation
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Last validation
                      </span>
                      <span className="text-body font-body text-default-font">
                        13 Nov 2026, 09:41
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Focus nodes
                      </span>
                      <span className="text-body font-body text-default-font">
                        14 violations · 2 warnings
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Shape version
                      </span>
                      <span className="text-body font-body text-default-font">
                        v6
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Applies to
                      </span>
                      <span className="text-body font-body text-default-font">
                        staging-2026-11-02a
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                    <span className="text-caption font-caption text-subtext-color">
                      Failing constraints
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      birth_date maxCount 1 · occupation datatype QID. Fix the
                      shape or the source rows before the batch can publish.
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-end gap-2">
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View validation report
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Edit shape
                    </Button>
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    PlaceShape
                  </span>
                  <span className="text-body font-body text-default-font">
                    ex:Place
                  </span>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="success">Active</Badge>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    OrgShape
                  </span>
                  <span className="text-body font-body text-default-font">
                    ex:Organization
                  </span>
                  <Badge variant="error">Violation</Badge>
                  <Badge variant="warning">Draft</Badge>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    EventShape
                  </span>
                  <span className="text-body font-body text-default-font">
                    ex:Event
                  </span>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="success">Active</Badge>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Alert
              variant="error"
              icon={<FeatherX />}
              title="Validation blocks publication"
              description="14 staged triples violate cardinality or datatype constraints. Fix the shapes or the source rows; the batch stays in staging until the report is clean."
            />
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Shape definition
              </span>
              <span className="text-caption font-caption text-subtext-color">
                ex:PersonShape · Turtle
              </span>
            </div>
            <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-3 py-2">
              <span className="text-monospace-body font-monospace-body text-default-font">
                ex:PersonShape a sh:NodeShape ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                sh:targetClass ex:Person ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                sh:property [ sh:path ex:birthDate ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                sh:datatype xsd:gYear ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                sh:minCount 1 ;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                {" "}
                sh:severity sh:Violation ] .
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-surface px-4 py-4">
              <div className="flex w-full items-center justify-between gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  Target class
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  ex:Person
                </span>
              </div>
              <div className="flex w-full items-center justify-between gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  Property
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  ex:birthDate
                </span>
              </div>
              <div className="flex w-full items-center justify-between gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  Constraint
                </span>
                <span className="text-monospace-body font-monospace-body text-default-font">
                  sh:minCount 1
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Edit shape
              </Button>
              <SubframeCore.Popover.Root>
                <SubframeCore.Popover.Trigger asChild={true}>
                  <Button
                    variant="brand-primary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Re-run validation
                  </Button>
                </SubframeCore.Popover.Trigger>
                <SubframeCore.Popover.Portal>
                  <SubframeCore.Popover.Content
                    side="bottom"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <Button
                        className="min-h-[32px] w-full min-w-[145px] grow shrink-0 basis-0"
                        loading={true}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Button
                      </Button>
                    </div>
                  </SubframeCore.Popover.Content>
                </SubframeCore.Popover.Portal>
              </SubframeCore.Popover.Root>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-4 px-5 py-5">
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save shape
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui13ShaclShapesEditor;
