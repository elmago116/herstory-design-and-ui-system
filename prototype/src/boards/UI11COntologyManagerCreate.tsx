"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { ProcessStepper } from "@/ui/components/ProcessStepper";
import { SplitButton } from "@/ui/components/SplitButton";
import { Table } from "@/ui/components/Table";
import { Tabs } from "@/ui/components/Tabs";
import { TreeView } from "@/ui/components/TreeView";
import { FeatherBot } from "@/ui/core";
import { FeatherCheck } from "@/ui/core";
import { FeatherChevronDown } from "@/ui/core";
import { FeatherChevronUp } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherEdit2 } from "@/ui/core";
import { FeatherFileCheck } from "@/ui/core";
import { FeatherFileCode } from "@/ui/core";
import { FeatherFolder } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherPencil } from "@/ui/core";
import { FeatherPenLine } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";
import { FeatherShare2 } from "@/ui/core";
import { FeatherTrash } from "@/ui/core";
import { FeatherUpload } from "@/ui/core";
import * as SubframeCore from "@/ui/core";

function Ui11COntologyManagerCreate() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start py-6">
        <div className="flex w-full flex-col items-start gap-2 pb-6 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Ontology manager
          </h1>
          <p className="text-body font-body text-subtext-color">
            Browse and edit ontology classes, their properties and mappings.
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
                <span className="h-5 w-5 flex-none font-['IBM_Plex_Sans'] text-[10px] font-[700] leading-[12px] tracking-[0.04em] text-white flex items-center justify-center rounded-full bg-brand-500">
                  3
                </span>
                <span className="whitespace-nowrap font-['IBM_Plex_Sans'] text-[12px] font-[700] leading-[16px] text-brand-700">
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
                Brigadistas
              </Badge>
              <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
                stage 3 of 6
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 pb-6">
          <Tabs>
            <Tabs.Item icon={<FeatherShare2 />}>
              Select an existing mapping
            </Tabs.Item>
            <Tabs.Item active={false} icon={<FeatherUpload />}>
              Upload yours
            </Tabs.Item>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Tabs.Item active={true} icon={<FeatherPencil />}>
                   Create a new one
                </Tabs.Item>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                      Create from scratch
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                      Create a version
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                      Delete
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </Tabs>
          <ProcessStepper>
            <ProcessStepper.Step
              number="1"
              label="Select ontology"
              state="active"
            />
            <ProcessStepper.Step
              number="2"
              label="Review characteristics"
            />
            <ProcessStepper.Step
              number="3"
              label="Edit classes and properties"
            />
            <ProcessStepper.Step number="4" label="Draft ontology" />
            <ProcessStepper.Step number="5" label="Validate" />
            <ProcessStepper.Step
              number="6"
              label="Run transformation"
              lastStep={true}
            />
          </ProcessStepper>
          <div className="flex w-full flex-col items-start">
            <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-5">
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Name
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Date created
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Last upgrade date
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Coordinator
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                Actions
              </span>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-5">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                Brigadistas
              </span>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                18/21/2020
              </span>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                18/21/2021
              </span>
              <div className="flex items-center gap-2">
                <Avatar size="small" image="">
                  EG
                </Avatar>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Elena Gómez
                </span>
              </div>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronUp />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Close
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-3 border-t border-solid border-neutral-border bg-neutral-50 px-6 py-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Class parameters · Brigadistas
                </span>
                <Badge variant="neutral">Q5 · inmutable</Badge>
              </div>
              <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Etiquetas
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    4
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    ca · en · es · pt
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Relaciones
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    1
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    subClassOf · 1
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Restricciones
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    0
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    OWL
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Propiedades
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    8
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    3 mapped
                  </span>
                </div>
              </div>
              <div className="w-full items-start gap-3 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-2 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Etiquetas rdfs:label
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      ca
                    </span>
                    <span className="text-body font-body text-default-font">
                      Persona
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      en
                    </span>
                    <span className="text-body font-body text-default-font">
                      Person
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      es
                    </span>
                    <span className="text-body font-body text-default-font">
                      Persona
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      pt
                    </span>
                    <span className="text-body font-body text-default-font">
                      Pessoa
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Relaciones
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      rdfs:subClassOf
                    </span>
                    <span className="text-body font-body text-default-font">
                      Homo sapiens · Q171283
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      owl:equivalentClass
                    </span>
                    <span className="text-body font-body text-default-font">
                      —
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      owl:disjointWith
                    </span>
                    <span className="text-body font-body text-default-font">
                      —
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      owl:complementOf
                    </span>
                    <span className="text-body font-body text-default-font">
                      —
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-end gap-2">
                <Button
                  variant="neutral-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Edit class
                </Button>
              </div>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                Memoria Democrática
              </span>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                18/21/2020
              </span>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                18/21/2020
              </span>
              <div className="flex items-center gap-2">
                <Avatar size="small" image="">
                  TV
                </Avatar>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Teresa Vidal
                </span>
              </div>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View
              </Button>
            </div>
            <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                Wikidata - HerStory
              </span>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                18/21/2020
              </span>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                18/21/2020
              </span>
              <div className="flex items-center gap-2">
                <Avatar size="small" image="">
                  LF
                </Avatar>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Laia Font
                </span>
              </div>
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
        <div className="flex h-px w-full flex-none flex-col items-center gap-10 bg-brand-500" />
        <div className="flex w-full flex-col items-start gap-2 py-6 mobile:pt-0 mobile:pb-8">
          <h1 className="text-heading-2 font-heading-2 text-default-font">
            Ontology&#39;s clases and properties
          </h1>
          <p className="text-body font-body text-subtext-color">
            Review and edit the parameters of selected ontology&#39;
          </p>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start py-6">
          <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Ontology classes
              </span>
              <span className="text-caption font-caption text-subtext-color">
                4 classes · 24 properties defined
              </span>
            </div>
            <TreeView>
              <TreeView.Folder label="Person" icon={<FeatherFolder />}>
                <TreeView.Item
                  label="census_person"
                  icon={<FeatherFileCode />}
                />
                <TreeView.Item
                  selected={true}
                  label="seamstress"
                  icon={<FeatherFileCode />}
                />
              </TreeView.Folder>
              <TreeView.Folder label="Occupation" icon={<FeatherFolder />}>
                <TreeView.Item label="seamstress" icon={<FeatherFileCheck />} />
                <TreeView.Item
                  label="trade_union_member"
                  icon={<FeatherFileCode />}
                />
              </TreeView.Folder>
              <TreeView.Folder label="Organization" icon={<FeatherFolder />}>
                <TreeView.Item label="trade_union" icon={<FeatherFileCode />} />
                <TreeView.Item
                  label="ateneu_obrer"
                  icon={<FeatherFileCode />}
                />
              </TreeView.Folder>
              <TreeView.Folder label="Place" icon={<FeatherFolder />}>
                <TreeView.Item
                  label="raval_district"
                  icon={<FeatherFileCode />}
                />
                <TreeView.Item label="barcelona" icon={<FeatherFileCode />} />
              </TreeView.Folder>
            </TreeView>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Class: Person (Q5)
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Wikidata Q5 · 8 properties
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <Tabs>
                <Tabs.Item active={true}>Overview</Tabs.Item>
                <Tabs.Item active={false}>Properties</Tabs.Item>
                <Tabs.Item active={false}>Relations</Tabs.Item>
                <Tabs.Item active={false}>Constraints</Tabs.Item>
                <Tabs.Item active={false}>Diff</Tabs.Item>
                <Tabs.Item active={false}>History</Tabs.Item>
              </Tabs>
              <div className="w-full items-start gap-3 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Properties
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    8
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    3 mapped
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Relations
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    1
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    subClassOf
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Constraints
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    0
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    OWL
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                  <span className="text-caption font-caption text-subtext-color">
                    Diff vs base
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    6
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    2 added · 4 changed
                  </span>
                </div>
              </div>
              <div className="w-full items-start gap-3 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                <div className="flex flex-col items-start gap-2 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Etiqueta rdfs:label
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      ca
                    </span>
                    <span className="text-body font-body text-default-font">
                      Persona
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      en
                    </span>
                    <span className="text-body font-body text-default-font">
                      Person
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      es
                    </span>
                    <span className="text-body font-body text-default-font">
                      Persona
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption font-caption text-subtext-color">
                      pt
                    </span>
                    <span className="text-body font-body text-default-font">
                      Pessoa
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Descripción rdfs:comment
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    en
                  </span>
                  <span className="text-body font-body text-default-font">
                    Any member of Homo sapiens, unique extant species of the
                    genus Homo.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start overflow-x-auto">
              <div className="flex w-full flex-col items-start">
                <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-5">
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Property
                  </span>
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Type
                  </span>
                  <span className="text-caption-bold font-caption-bold text-subtext-color">
                    Cardinality
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
                    given_name
                  </span>
                  <span className="text-body font-body text-default-font">
                    xsd:string
                  </span>
                  <span className="text-body font-body text-default-font">
                    1..*
                  </span>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Active
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      className="h-auto min-w-[59px] grow shrink-0 basis-0 self-stretch"
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronUp />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Close
                    </Button>
                    <IconButton
                      className="h-auto min-h-[32px] w-auto min-w-[24px] flex-none self-stretch"
                      variant="neutral-secondary"
                      icon={<FeatherPenLine />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      className="h-auto w-auto min-w-[24px] flex-none self-stretch"
                      variant="destructive-secondary"
                      icon={<FeatherTrash />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-4 border-t border-solid border-neutral-border bg-neutral-50 px-8 py-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      Property details · given_name
                    </span>
                    <Badge variant="success" icon={<FeatherCheck />}>
                      Active
                    </Badge>
                  </div>
                  <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Class
                      </span>
                      <span className="text-body font-body text-default-font">
                        Person (Q5)
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Datatype
                      </span>
                      <span className="text-body font-body text-default-font">
                        xsd:string
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Cardinality
                      </span>
                      <span className="text-body font-body text-default-font">
                        1..*
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Last changed
                      </span>
                      <span className="text-body font-body text-default-font">
                        12 Nov 2026 · Teresa Vidal
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Version
                      </span>
                      <span className="text-body font-body text-default-font">
                        v12
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        Used by mappings
                      </span>
                      <span className="text-body font-body text-default-font">
                        3 rules
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                      <span className="text-caption font-caption text-subtext-color">
                        SHACL shapes
                      </span>
                      <span className="text-body font-body text-default-font">
                        2 constraints
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                    <span className="text-caption font-caption text-subtext-color">
                      IRI
                    </span>
                    <span className="break-words text-monospace-body font-monospace-body text-default-font">
                      https://schema.org/givenName
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3">
                    <span className="text-caption font-caption text-subtext-color">
                      Impact of changing this property
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Retyping or changing the IRI touches person_mapping.ttl
                      rules 3 and 7 and the PersonShape given-name constraint.
                      Saves are versioned and audited.
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-end gap-2">
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      View mappings
                    </Button>
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Edit property
                    </Button>
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    family_name
                  </span>
                  <span className="text-body font-body text-default-font">
                    xsd:string
                  </span>
                  <span className="text-body font-body text-default-font">
                    1..*
                  </span>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Active
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      className="h-auto min-w-[59px] grow shrink-0 basis-0 self-stretch"
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      view
                    </Button>
                    <IconButton
                      className="h-auto min-h-[32px] w-auto min-w-[24px] flex-none self-stretch"
                      variant="neutral-secondary"
                      icon={<FeatherPenLine />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      className="h-auto w-auto min-w-[24px] flex-none self-stretch"
                      variant="destructive-secondary"
                      icon={<FeatherTrash />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    birth_date
                  </span>
                  <span className="text-body font-body text-default-font">
                    xsd:date
                  </span>
                  <span className="text-body font-body text-default-font">
                    0..1
                  </span>
                  <Badge variant="success" icon={<FeatherCheck />}>
                    Active
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      className="h-auto min-w-[59px] grow shrink-0 basis-0 self-stretch"
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      view
                    </Button>
                    <IconButton
                      className="h-auto min-h-[32px] w-auto min-w-[24px] flex-none self-stretch"
                      variant="neutral-secondary"
                      icon={<FeatherPenLine />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      className="h-auto w-auto min-w-[24px] flex-none self-stretch"
                      variant="destructive-secondary"
                      icon={<FeatherTrash />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    occupation
                  </span>
                  <span className="text-body font-body text-default-font">
                    wikidata:QID
                  </span>
                  <span className="text-body font-body text-default-font">
                    0..*
                  </span>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Needs review
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      className="h-auto min-w-[59px] grow shrink-0 basis-0 self-stretch"
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      view
                    </Button>
                    <IconButton
                      className="h-auto min-h-[32px] w-auto min-w-[24px] flex-none self-stretch"
                      variant="neutral-secondary"
                      icon={<FeatherPenLine />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      className="h-auto w-auto min-w-[24px] flex-none self-stretch"
                      variant="destructive-secondary"
                      icon={<FeatherTrash />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
                <div className="w-full items-center gap-4 border-t border-solid border-neutral-border px-4 py-2 grid grid-cols-5">
                  <span className="text-monospace-body font-monospace-body text-default-font">
                    birth_place
                  </span>
                  <span className="text-body font-body text-default-font">
                    wikidata:QID
                  </span>
                  <span className="text-body font-body text-default-font">
                    0..1
                  </span>
                  <Badge variant="warning" icon={<FeatherClock />}>
                    Needs review
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      className="h-auto min-w-[59px] grow shrink-0 basis-0 self-stretch"
                      variant="neutral-tertiary"
                      size="small"
                      iconRight={<FeatherChevronDown />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      view
                    </Button>
                    <IconButton
                      className="h-auto min-h-[32px] w-auto min-w-[24px] flex-none self-stretch"
                      variant="neutral-secondary"
                      icon={<FeatherPenLine />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                    <IconButton
                      className="h-auto w-auto min-w-[24px] flex-none self-stretch"
                      variant="destructive-secondary"
                      icon={<FeatherTrash />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Relations
                    </span>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Open graph
                    </Button>
                  </div>
                  <Table
                    header={
                      <Table.HeaderRow>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Predicate</Table.HeaderCell>
                        <Table.HeaderCell>Target</Table.HeaderCell>
                        <Table.HeaderCell>Cardinality</Table.HeaderCell>
                      </Table.HeaderRow>
                    }
                    density="compact"
                  >
                    <Table.Row>
                      <Table.Cell>
                        <span className="text-body font-body text-default-font">
                          Person
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-monospace-body font-monospace-body text-subtext-color">
                          rdfs:subClassOf
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-body font-body text-default-font">
                          Homo sapiens
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-body font-body text-subtext-color">
                          1..1
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  </Table>
                  <span className="text-caption font-caption text-subtext-color">
                    equivalentClass, disjointWith and complementOf are not
                    declared.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Constraints (OWL)
                    </span>
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      + restricción
                    </Button>
                  </div>
                  <span className="text-body font-body text-subtext-color">
                    Ninguna restricción declarada.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Diff vs base
                    </span>
                    <Badge variant="warning">Draft v0.1</Badge>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-body font-body text-default-font">
                      +2 classes
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Brigadista, Brigade
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-body font-body text-default-font">
                      ~4 properties
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      datatype or cardinality changed
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-body font-body text-default-font">
                      +1 relation
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Brigadista rdfs:subClassOf Person
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    History
                  </span>
                  <Table
                    header={
                      <Table.HeaderRow>
                        <Table.HeaderCell>Version</Table.HeaderCell>
                        <Table.HeaderCell>Change</Table.HeaderCell>
                        <Table.HeaderCell>Actor</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                      </Table.HeaderRow>
                    }
                    density="compact"
                  >
                    <Table.Row>
                      <Table.Cell>
                        <span className="text-monospace-body font-monospace-body text-default-font">
                          v0.1
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-body font-body text-default-font">
                          Forked from Brigadistas v4
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-body font-body text-subtext-color">
                          Elena Gómez
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-body font-body text-subtext-color">
                          15 Nov 2026
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  </Table>
                </div>
              </div>
            </div>
            <Alert
              className="mobile:h-auto mobile:w-full mobile:flex-none"
              variant="brand"
              icon={<FeatherInfo />}
              title="Mapping-aware adjudication: drift and coupling errors are surfaced here"
              description=""
            />
            <div className="flex items-center gap-2">
              <SplitButton
                emphasis="secondary"
                icon={<FeatherPlus />}
                label="Add"
                menuTitle="Format"
              >
                <SplitButton.Option label="Class" />
                <SplitButton.Option label="Property" />
              </SplitButton>
              <SplitButton
                emphasis="secondary"
                icon={<FeatherPenLine />}
                label="Edit"
                menuTitle="Format"
              >
                <SplitButton.Option label="Class" />
                <SplitButton.Option label="Property" />
              </SplitButton>
              <Button
                variant="neutral-secondary"
                icon={<FeatherBot />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Validate
              </Button>
              <Button
                variant="neutral-secondary"
                icon={<FeatherUpload />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Import / export
              </Button>
              <Button
                variant="neutral-secondary"
                icon={<FeatherBot />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Run reasoner
              </Button>
            </div>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Review Ontology
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui11COntologyManagerCreate;
