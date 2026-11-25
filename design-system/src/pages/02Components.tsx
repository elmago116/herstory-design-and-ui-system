"use client";

import React from "react";
import { Accordion } from "@/ui/components/Accordion";
import { Alert } from "@/ui/components/Alert";
import { AppHeader } from "@/ui/components/AppHeader";
import { AreaChart } from "@/ui/components/AreaChart";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { BarChart } from "@/ui/components/BarChart";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Bubble } from "@/ui/components/Bubble";
import { Button } from "@/ui/components/Button";
import { Card } from "@/ui/components/Card";
import { Checkbox } from "@/ui/components/Checkbox";
import { CodeBlock } from "@/ui/components/CodeBlock";
import { CollapsibleSection } from "@/ui/components/CollapsibleSection";
import { Combobox } from "@/ui/components/Combobox";
import { CopyToClipboardButton } from "@/ui/components/CopyToClipboardButton";
import { DiffViewer } from "@/ui/components/DiffViewer";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { EmptyState } from "@/ui/components/EmptyState";
import { Field } from "@/ui/components/Field";
import { Footer } from "@/ui/components/Footer";
import { Form } from "@/ui/components/Form";
import { GraphConfigRow } from "@/ui/components/GraphConfigRow";
import { GraphToolbar } from "@/ui/components/GraphToolbar";
import { HoverCard } from "@/ui/components/HoverCard";
import { IconButton } from "@/ui/components/IconButton";
import { Kbd } from "@/ui/components/Kbd";
import { LanguageSelector } from "@/ui/components/LanguageSelector";
import { LineChart } from "@/ui/components/LineChart";
import { LinkButton } from "@/ui/components/LinkButton";
import { ListItem } from "@/ui/components/ListItem";
import { Loader } from "@/ui/components/Loader";
import { Map } from "@/ui/components/Map";
import { MapMarker } from "@/ui/components/MapMarker";
import { MappingBoard } from "@/ui/components/MappingBoard";
import { Message } from "@/ui/components/Message";
import { NavRail } from "@/ui/components/NavRail";
import { NetworkGraph } from "@/ui/components/NetworkGraph";
import { Pagination } from "@/ui/components/Pagination";
import { PieChart } from "@/ui/components/PieChart";
import { Progress } from "@/ui/components/Progress";
import { QueryEditor } from "@/ui/components/QueryEditor";
import { RadioGroup } from "@/ui/components/RadioGroup";
import { Select } from "@/ui/components/Select";
import { Separator } from "@/ui/components/Separator";
import { SkeletonText } from "@/ui/components/SkeletonText";
import { Slider } from "@/ui/components/Slider";
import { Stepper } from "@/ui/components/Stepper";
import { Switch } from "@/ui/components/Switch";
import { Table } from "@/ui/components/Table";
import { Tabs } from "@/ui/components/Tabs";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { Timeline } from "@/ui/components/Timeline";
import { Toast } from "@/ui/components/Toast";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { Tooltip } from "@/ui/components/Tooltip";
import { Trace } from "@/ui/components/Trace";
import { TreeView } from "@/ui/components/TreeView";
import { WorkspacePicker } from "@/ui/components/WorkspacePicker";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherArrowUpRight } from "@subframe/core";
import { FeatherBookOpen } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherCopy } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherFileCheck } from "@subframe/core";
import { FeatherFileCode } from "@subframe/core";
import { FeatherFileSpreadsheet } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherFolder } from "@subframe/core";
import { FeatherHistory } from "@subframe/core";
import { FeatherInbox } from "@subframe/core";
import { FeatherInfo } from "@subframe/core";
import { FeatherLayers } from "@subframe/core";
import { FeatherMap } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherMaximize } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherShare2 } from "@subframe/core";
import { FeatherStar } from "@subframe/core";
import { FeatherTable } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import { FeatherTrash2 } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import { FeatherXCircle } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function _02Components() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY DESIGN SYSTEM · v2
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            02 — Components
          </h1>
          <p className="text-body font-body text-subtext-color">
            Every primitive and domain component, grouped by family. Use these
            instances; don&#39;t redraw them.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Actions
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Buttons and controls that commit, cancel or trigger work.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Button
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  primary · secondary · ghost · destructive
                </span>
              </div>
              <div className="flex w-full flex-wrap items-center gap-3">
                <Button
                  icon={<FeatherSend />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Publish
                </Button>
                <Button
                  variant="neutral-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Cancel
                </Button>
                <Button
                  variant="neutral-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Ghost
                </Button>
                <Button
                  variant="destructive-primary"
                  icon={<FeatherTrash2 />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Delete mapping
                </Button>
              </div>
              <div className="flex w-full flex-wrap items-center gap-3">
                <Button
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Small
                </Button>
                <Button
                  size="medium"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Medium
                </Button>
                <Button
                  size="large"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Large
                </Button>
                <Button
                  disabled={true}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Disabled
                </Button>
                <Button
                  loading={true}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Loading
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Button — interaction states
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  primary · hover · active · focused — colours taken from the
                  component&#39;s own state classes
                </span>
              </div>
              <div className="flex w-full flex-wrap items-start gap-8">
                <div className="flex flex-col items-start gap-2">
                  <Button
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Primary
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    default · bg-brand-primary
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button
                    className="bg-brand-800"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Hover
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    hover:bg-brand-800
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button
                    className="bg-brand-900"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Active
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    active:bg-brand-900
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button
                    className="ring-2 ring-focus ring-offset-2"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Focused
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    focus-within:ring-2 ring-focus
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button
                    disabled={true}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Disabled
                  </Button>
                  <span className="text-caption font-caption text-subtext-color">
                    disabled:bg-neutral-200
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Icon Button
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  neutral · brand · destructive · small / medium / large
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <IconButton
                  variant="neutral-tertiary"
                  icon={<FeatherSettings />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  variant="neutral-secondary"
                  icon={<FeatherShare2 />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  variant="brand-primary"
                  icon={<FeatherPlus />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  variant="brand-secondary"
                  icon={<FeatherStar />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  variant="destructive-tertiary"
                  icon={<FeatherTrash2 />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  variant="neutral-secondary"
                  size="small"
                  icon={<FeatherX />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  variant="neutral-secondary"
                  size="large"
                  icon={<FeatherMaximize />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Link Button
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  brand · neutral · with icon
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <LinkButton
                  variant="brand"
                  iconRight={<FeatherArrowUpRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open in Wikidata
                </LinkButton>
                <LinkButton
                  variant="neutral"
                  icon={<FeatherFileText />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  View source
                </LinkButton>
                <LinkButton
                  variant="brand"
                  size="small"
                  icon={<FeatherPlus />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Create entity
                </LinkButton>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Toggle Group
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  segmented view switch · icon + label
                </span>
              </div>
              <ToggleGroup
                value="1b51443e"
                onValueChange={(value: string) => {}}
              >
                <ToggleGroup.Item icon={<FeatherTable />} value="1ede6162">
                  Table
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={<FeatherShare2 />} value="c9969cba">
                  Graph
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={<FeatherMap />} value="61f515aa">
                  Map
                </ToggleGroup.Item>
              </ToggleGroup>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Copy to clipboard
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  inline beside identifiers
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-solid border-neutral-border bg-input-background px-3 py-1">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  Q6581072
                </span>
                <CopyToClipboardButton
                  clipboardText="Q6581072"
                  tooltipText="Copy QID"
                  icon={<FeatherCopy />}
                  onCopy={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Form &amp; input
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Capture and correct data. Every control sits inside a labelled
              field.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Field + Text Field
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  required · optional · error
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <Field
                  requirement="required"
                  label="Full name"
                  helpText="As written in the source document"
                  errorText=""
                >
                  <TextField
                    className="h-auto w-full flex-none"
                    label=""
                    helpText=""
                    icon={<FeatherUser />}
                  >
                    <TextField.Input
                      placeholder="e.g. Mercè Puig i Vidal"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </Field>
                <Field
                  state="error"
                  label="Birth year"
                  helpText=""
                  errorText="Year must be between 1800 and 1950"
                >
                  <TextField
                    className="h-auto w-full flex-none"
                    error={true}
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder=""
                      value="2012"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </Field>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Combobox
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · open · filtering · empty · disabled
                </span>
              </div>
              <Combobox
                className="h-auto w-full flex-none"
                state="default"
                label="Wikidata entity"
                placeholder="Search by label or QID…"
                value=""
                helpText="Reconciles against Wikidata in real time"
              />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Select
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  outline · filled · error
                </span>
              </div>
              <Select
                className="h-auto w-full flex-none"
                label="Occupation"
                placeholder="Choose occupation"
                helpText="Mapped to property P106"
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Seamstress">Seamstress</Select.Item>
                <Select.Item value="Teacher">Teacher</Select.Item>
                <Select.Item value="Midwife">Midwife</Select.Item>
              </Select>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Text Area
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  outline · filled · error
                </span>
              </div>
              <TextArea
                className="h-auto w-full flex-none"
                label="Reviewer note"
                helpText="Visible to the next reviewer"
              >
                <TextArea.Input
                  placeholder="Explain why this statement was changed…"
                  value=""
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Checkbox · Switch
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  checked · unchecked · disabled
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <Checkbox
                  label="Include married names"
                  checked={true}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <Checkbox
                  label="Only validated statements"
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <Checkbox
                  label="Archived sources"
                  disabled={true}
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={true}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                  <span className="text-body font-body text-default-font">
                    Auto-reconcile on import
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                  <span className="text-body font-body text-default-font">
                    Show low-quality nodes
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Radio Group
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  vertical · horizontal
                </span>
              </div>
              <RadioGroup
                label="Confidence"
                helpText="How certain is this extraction?"
                value="d70b0cc0"
                onValueChange={(value: string) => {}}
              >
                <RadioGroup.Option
                  label="High — direct quote from source"
                  value="e9c7ef6b"
                />
                <RadioGroup.Option
                  label="Medium — inferred from context"
                  value="42a4afb1"
                />
                <RadioGroup.Option
                  label="Low — needs corroboration"
                  value="4c3664a6"
                />
              </RadioGroup>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Slider
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  single value · range filter
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Minimum confidence
                  </span>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    60%
                  </span>
                </div>
                <Slider
                  value={[]}
                  onValueChange={(value: number[]) => {}}
                  onValueCommit={(value: number[]) => {}}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Language Selector
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · open
                </span>
              </div>
              <div className="flex items-center gap-4">
                <LanguageSelector state="default" code="CA" />
                <LanguageSelector state="default" code="EN" />
                <LanguageSelector state="default" code="ES" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Form
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  stacked · inline
                </span>
              </div>
              <Form
                layout="stacked"
                title="New person record"
                description="Creates a staging entity linked to its source document."
                actions={
                  <>
                    <Button
                      variant="neutral-secondary"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Save to staging
                    </Button>
                  </>
                }
              >
                <Field
                  requirement="required"
                  label="Name"
                  helpText=""
                  errorText=""
                >
                  <TextField
                    className="h-auto w-full flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="Full name"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </Field>
                <Field
                  requirement="optional"
                  label="Place of birth"
                  helpText=""
                  errorText=""
                >
                  <TextField
                    className="h-auto w-full flex-none"
                    label=""
                    helpText=""
                    icon={<FeatherMapPin />}
                  >
                    <TextField.Input
                      placeholder="City or municipality"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </Field>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Data display
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Present records, statements, history and provenance.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Table
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  comfortable · compact · spacious · sortable · selected row
                </span>
              </div>
              <div className="flex w-full flex-col items-start overflow-x-auto">
                <Table
                  header={
                    <Table.HeaderRow>
                      <Table.HeaderCell sortable={true} sort="ascending">
                        Name
                      </Table.HeaderCell>
                      <Table.HeaderCell>QID</Table.HeaderCell>
                      <Table.HeaderCell>Occupation</Table.HeaderCell>
                      <Table.HeaderCell>Source</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.HeaderRow>
                  }
                  density="comfortable"
                >
                  <Table.Row>
                    <Table.Cell>
                      <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                        Mercè Puig
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Q123456
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Seamstress
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="whitespace-nowrap text-body font-body text-subtext-color">
                        1912 census
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="success" icon={<FeatherCheck />}>
                        Validated
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row selected={true}>
                    <Table.Cell>
                      <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                        Teresa Vidal
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Q987021
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Teacher
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="whitespace-nowrap text-body font-body text-subtext-color">
                        Ateneu Obrer roll
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="warning" icon={<FeatherClock />}>
                        Needs review
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                        Rosa Serra
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        —
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="text-body font-body text-default-font">
                        Midwife
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className="whitespace-nowrap text-body font-body text-subtext-color">
                        Parish register
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant="brand" icon={<FeatherLayers />}>
                        In staging
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                </Table>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Badge
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  success · warning · error · brand / info · neutral
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success" icon={<FeatherCheck />}>
                  Validated
                </Badge>
                <Badge variant="warning" icon={<FeatherClock />}>
                  Needs review
                </Badge>
                <Badge variant="error" icon={<FeatherX />}>
                  Rejected
                </Badge>
                <Badge variant="brand" icon={<FeatherInfo />}>
                  Info
                </Badge>
                <Badge variant="neutral" icon={<FeatherFileText />}>
                  Draft
                </Badge>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Kbd · Avatar
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  key · chord · sequence · x-small → x-large
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Kbd type="chord" prefixKey="⌘" mainKey="K" />
                <Kbd type="key" prefixKey="" mainKey="Esc" />
                <Kbd type="chord" prefixKey="⇧" mainKey="Enter" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Avatar variant="brand" size="x-small" image="">
                  M
                </Avatar>
                <Avatar variant="success" size="small" image="">
                  A
                </Avatar>
                <Avatar variant="warning" size="medium" image="">
                  L
                </Avatar>
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                >
                  T
                </Avatar>
                <Avatar variant="neutral" size="x-large" image="" square={true}>
                  HS
                </Avatar>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Card
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · actionable · hover · selected
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <Card
                  variant="default"
                  icon={
                    <FeatherFileText className="text-heading-3 font-heading-3 text-brand-700" />
                  }
                  title="Barcelona census 1912"
                  subtitle="2,418 records · CSV"
                  meta="Updated 2 hours ago"
                />
                <Card
                  variant="selected"
                  icon={
                    <FeatherBookOpen className="text-heading-3 font-heading-3 text-brand-700" />
                  }
                  title="Ateneu Obrer membership roll"
                  subtitle="312 records · PDF OCR"
                  meta="Updated 2 hours ago"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Item
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · hover · selected · icon / thumbnail
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <ListItem
                  state="default"
                  leading="icon"
                  title="Mercè Puig"
                  description="Seamstress · born 1884, Barcelona"
                  meta="Q123456"
                  icon={<FeatherUser />}
                  thumbnail=""
                />
                <ListItem
                  state="selected"
                  leading="icon"
                  title="El Raval"
                  description="District of Barcelona"
                  meta="Q1027508"
                  icon={<FeatherMapPin />}
                  thumbnail=""
                  badge={<Badge variant="brand">Linked</Badge>}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Timeline
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · active-latest
                </span>
              </div>
              <Timeline emphasis="active-latest" />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Code Block
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  sparql · shacl · ttl · error · copy-hover
                </span>
              </div>
              <CodeBlock language="sparql" state="default" />
              <QueryEditor
                statusText="Ln 2, Col 14 · SPARQL 1.1"
                errorMessage="Line 3: Expected '}'"
              />
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Diff Viewer
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    inline · side-by-side
                  </span>
                </div>
                <DiffViewer
                  layout="inline"
                  beforeLabel="v3"
                  afterLabel="v4 (proposed)"
                  additions="+2"
                  deletions="−1"
                  inlineLines={
                    <>
                      <DiffViewer.DiffLine
                        variant="unchanged"
                        lineNumber="1"
                        text={'wd:Q123456 rdfs:label "Mercè Puig"@ca ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="removed"
                        lineNumber="2"
                        text={'  wdt:P569 "1885"^^xsd:gYear ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="2"
                        text={'  wdt:P569 "1884"^^xsd:gYear ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="3"
                        text="  wdt:P106 wd:Q11997032 ;"
                      />
                      <DiffViewer.DiffLine
                        variant="unchanged"
                        lineNumber="4"
                        text="  wdt:P21 wd:Q6581072 ."
                      />
                    </>
                  }
                />
              </div>
              <div className="flex flex-col items-start justify-end gap-2 px-2 py-2">
                <DiffViewer
                  beforeLabel="Before · v3"
                  afterLabel="After · v4"
                  additions="+3"
                  deletions="−2"
                  beforeLines={
                    <>
                      <DiffViewer.DiffLine
                        lineNumber="1"
                        text="@prefix schema: <https://schema.org/> ."
                      />
                      <DiffViewer.DiffLine
                        lineNumber="2"
                        text="@prefix wd: <http://www.wikidata.org/entity/> ."
                      />
                      <DiffViewer.DiffLine lineNumber="3" text=" " />
                      <DiffViewer.DiffLine
                        lineNumber="4"
                        text={':rosa schema:name "Rosa Martínez" ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="removed"
                        lineNumber="5"
                        text={'    schema:birthDate "1873" ;'}
                      />
                      <DiffViewer.DiffLine
                        lineNumber="6"
                        text="    schema:birthPlace wd:Q1492 ;"
                      />
                      <DiffViewer.DiffLine
                        variant="removed"
                        lineNumber="7"
                        text={'    schema:occupation "costurera"@es .'}
                      />
                      <DiffViewer.DiffLine
                        variant="empty"
                        lineNumber=""
                        text=" "
                      />
                    </>
                  }
                  afterLines={
                    <>
                      <DiffViewer.DiffLine
                        lineNumber="1"
                        text="@prefix schema: <https://schema.org/> ."
                      />
                      <DiffViewer.DiffLine
                        lineNumber="2"
                        text="@prefix wd: <http://www.wikidata.org/entity/> ."
                      />
                      <DiffViewer.DiffLine lineNumber="3" text=" " />
                      <DiffViewer.DiffLine
                        lineNumber="4"
                        text={':rosa schema:name "Rosa Martínez" ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="5"
                        text={'    schema:birthDate "1874" ;'}
                      />
                      <DiffViewer.DiffLine
                        lineNumber="6"
                        text="    schema:birthPlace wd:Q1492 ;"
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="7"
                        text={'    schema:occupation "seamstress"@en ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="8"
                        text="    schema:nationality wd:Q29 ."
                      />
                    </>
                  }
                  inlineLines={
                    <>
                      <DiffViewer.DiffLine
                        lineNumber="1"
                        text="@prefix schema: <https://schema.org/> ."
                      />
                      <DiffViewer.DiffLine
                        lineNumber="2"
                        text="@prefix wd: <http://www.wikidata.org/entity/> ."
                      />
                      <DiffViewer.DiffLine lineNumber="3" text=" " />
                      <DiffViewer.DiffLine
                        lineNumber="4"
                        text={':rosa schema:name "Rosa Martínez" ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="removed"
                        lineNumber="5"
                        text={'    schema:birthDate "1873" ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="5"
                        text={'    schema:birthDate "1874" ;'}
                      />
                      <DiffViewer.DiffLine
                        lineNumber="6"
                        text="    schema:birthPlace wd:Q1492 ;"
                      />
                      <DiffViewer.DiffLine
                        variant="removed"
                        lineNumber="7"
                        text={'    schema:occupation "costurera"@es .'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="7"
                        text={'    schema:occupation "seamstress"@en ;'}
                      />
                      <DiffViewer.DiffLine
                        variant="added"
                        lineNumber="8"
                        text="    schema:nationality wd:Q29 ."
                      />
                    </>
                  }
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Pagination
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  first · middle · last
                </span>
              </div>
              <Pagination position="middle" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Feedback
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Communicate status, progress and contextual detail without
              interrupting work.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Alert
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  brand · success · warning · error · neutral
                </span>
              </div>
              <div className="w-full items-start gap-3 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
                <Alert
                  variant="brand"
                  icon={<FeatherInfo />}
                  title="New SHACL shape available"
                  description="Person v2 adds checks for married names."
                />
                <Alert
                  variant="success"
                  icon={<FeatherCheckCircle />}
                  title="128 statements published"
                  description="Pushed to Wikidata 3 minutes ago."
                />
                <Alert
                  variant="warning"
                  icon={<FeatherAlertTriangle />}
                  title="12 records need review"
                  description="Birth dates conflict between two sources."
                />
                <Alert
                  variant="error"
                  icon={<FeatherXCircle />}
                  title="Ingestion failed"
                  description="Row 214: unknown column “ofici”."
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Toast
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  brand · success · error · neutral
                </span>
              </div>
              <Toast
                variant="success"
                icon={<FeatherCheckCircle />}
                title="Mapping saved"
                description="Rule “census → Person” is now live."
                actions={
                  <Button
                    variant="inverse"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Undo
                  </Button>
                }
              />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Progress · Loader
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  determinate bar · small / medium / large spinner
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <span className="text-caption-bold font-caption-bold text-default-font">
                    Reconciling entities
                  </span>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    64%
                  </span>
                </div>
                <Progress value={64} />
              </div>
              <div className="flex items-center gap-6">
                <Loader size="small" />
                <Loader size="medium" />
                <Loader size="large" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Skeleton Text
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  header · section-header · subheader · default · label
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <SkeletonText size="header" />
                <SkeletonText size="subheader" />
                <SkeletonText size="default" />
                <SkeletonText size="label" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Empty State
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  with primary + secondary action
                </span>
              </div>
              <EmptyState
                title="No sources yet"
                description="Upload a census, register or roll to start building the graph."
                icon={<FeatherInbox />}
                primaryActionLabel="Upload source"
                secondaryActionLabel="Browse examples"
              />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Tooltip
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  dark surface · caption text · shown on hover
                </span>
              </div>
              <div className="flex w-full flex-col items-center gap-2 py-4">
                <Tooltip>Copy SPARQL query</Tooltip>
                <IconButton
                  variant="neutral-secondary"
                  icon={<FeatherCopy />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="flex flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Hover Card
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  visible · quality high / medium / low
                </span>
              </div>
              <HoverCard
                className="w-auto grow shrink-0 basis-0"
                qualityLevel="high"
                name="Mercè Puig"
                qid="Q123456"
                description="Catalan seamstress and Ateneu Obrer member"
                avatarImage=""
                avatarInitial="M"
                bornValue="1884, Barcelona"
                occupationValue="Seamstress"
                sourcesValue="3 sources"
                quality="High"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Navigation &amp; layout
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              App chrome, wayfinding and structural containers.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  App Header
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · scrolled · mobile
                </span>
              </div>
              <div className="flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border">
                <AppHeader
                  state="default"
                  workspace="Barcelona 1912"
                  language="CA"
                  avatarImage=""
                />
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Nav Rail
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  expanded · collapsed
                </span>
              </div>
              <NavRail
                className="h-[560px] w-60 flex-none"
                state="expanded"
                showSectionLabels={true}
              />
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border px-2 py-2">
              <span className="text-body-bold font-body-bold text-default-font">
                Avatar
              </span>
              <span className="text-body font-body text-default-font">
                Active-inactive
              </span>
              <Avatar
                variant="warning"
                size="x-large"
                image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
              >
                A
              </Avatar>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Tabs
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  horizontal · vertical · icon
                </span>
              </div>
              <Tabs orientation="horizontal">
                <Tabs.Item active={true} icon={<FeatherUser />}>
                  Overview
                </Tabs.Item>
                <Tabs.Item icon={<FeatherFileText />}>Sources</Tabs.Item>
                <Tabs.Item icon={<FeatherHistory />}>History</Tabs.Item>
              </Tabs>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Breadcrumbs
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  active last item
                </span>
              </div>
              <Breadcrumbs>
                <Breadcrumbs.Item>Workspace</Breadcrumbs.Item>
                <Breadcrumbs.Divider />
                <Breadcrumbs.Item>Barcelona 1912</Breadcrumbs.Item>
                <Breadcrumbs.Divider />
                <Breadcrumbs.Item active={true}>Mercè Puig</Breadcrumbs.Item>
              </Breadcrumbs>
            </div>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Separator
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      horizontal · vertical · with label
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-start gap-4">
                    <Separator orientation="horizontal" label="none" text="" />
                    <Separator
                      orientation="horizontal"
                      label="with-label"
                      text="OR"
                    />
                  </div>
                </div>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherStar />}>
                      Favorite
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherPlus />}>
                      Add
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                      Edit
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                      Delete
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
            <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Accordion
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  open · closed
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <Accordion
                  trigger={
                    <div className="flex w-full items-center gap-2 px-3 py-2">
                      <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                        What is a staging entity?
                      </span>
                      <Accordion.Chevron />
                    </div>
                  }
                  defaultOpen={true}
                >
                  <div className="flex w-full flex-col items-start px-3 pb-3">
                    <span className="text-body font-body text-subtext-color">
                      A record reviewed locally before it is pushed to Wikidata.
                    </span>
                  </div>
                </Accordion>
                <Accordion
                  trigger={
                    <div className="flex w-full items-center gap-2 px-3 py-2">
                      <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                        How is quality scored?
                      </span>
                      <Accordion.Chevron />
                    </div>
                  }
                  defaultOpen={true}
                >
                  <div className="flex w-full flex-col items-start px-3 pb-3">
                    <span className="text-body font-body text-subtext-color">
                      By source count, agreement and reviewer validation.
                    </span>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Collapsible
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  bordered section · meta + badge
                </span>
              </div>
              <CollapsibleSection
                title="Provenance"
                meta="3 sources"
                badge="Pending review"
                defaultOpen={true}
              >
                <div className="flex w-full flex-col items-start gap-1 px-4 py-3">
                  <span className="text-body font-body text-default-font">
                    1912 Barcelona municipal census
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Folio 214 · transcribed by L. Vidal
                  </span>
                </div>
              </CollapsibleSection>
            </div>
            <nav className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch">
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border px-2 py-2">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Stepper
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    completed · active · default
                  </span>
                </div>
                <Stepper>
                  <Stepper.Step
                    variant="completed"
                    firstStep={true}
                    stepNumber="1"
                    label="Upload"
                  />
                  <Stepper.Step
                    variant="completed"
                    stepNumber="2"
                    label="Map columns"
                  />
                  <Stepper.Step
                    variant="completed"
                    stepNumber="3"
                    label="Model ontology"
                  />
                  <Stepper.Step
                    variant="active"
                    stepNumber="3"
                    label="Reconcile"
                  />
                  <Stepper.Step
                    variant="default"
                    lastStep={true}
                    stepNumber="4"
                    label="Publish"
                  />
                </Stepper>
              </div>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border px-2 py-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Workspace picker
                </span>
                <span className="w-full text-caption font-caption text-default-font">
                  Not connected - connected - empty
                </span>
                <WorkspacePicker className="w-full grow shrink-0 basis-0" />
              </div>
            </nav>
            <div className="flex flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Footer
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  product name · description · version
                </span>
              </div>
              <div className="flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border">
                <Footer
                  title="HerStory"
                  description="Historical data to the Wikidata knowledge graph."
                  version="v2.0.0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Chat &amp; XAI
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Conversational querying with explainable, cited answers.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Message
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  user · assistant · system
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <Message
                  role="system"
                  timestamp=""
                  answer=""
                  question=""
                  systemText="New conversation · Barcelona 1912 workspace"
                  avatarImage=""
                />
                <Message
                  role="user"
                  timestamp="14:32"
                  answer=""
                  question="Which women mathematicians are in Wikidata?"
                  systemText=""
                  avatarImage=""
                />
                <Message
                  role="assistant"
                  timestamp="14:32"
                  answer="I found 128 women mathematicians in Wikidata. The earliest recorded is Hypatia of Alexandria; the best documented is Ada Lovelace."
                  question=""
                  systemText=""
                  avatarImage=""
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Trace
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  expanded · collapsed · done / running / failed
                </span>
              </div>
              <Trace
                title="How this answer was built"
                summary="3 steps · 1.4s"
                state="expanded"
              >
                <Trace.Step
                  title="Interpreted question"
                  duration="0.2s"
                  detail="Intent: list people · occupation = mathematician"
                  status="done"
                />
                <Trace.Step
                  title="Queried Wikidata · 128 results"
                  duration="0.9s"
                  detail="Endpoint: query.wikidata.org/sparql"
                  status="done"
                  expanded={true}
                />
                <Trace.Step
                  title="Composing answer"
                  duration="0.3s"
                  detail="Sources: Wikidata, MacTutor"
                  status="running"
                  last={true}
                />
              </Trace>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Bubble
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  assistant · user · citation chips
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <Bubble
                  role="assistant"
                  text="Mercè Puig appears in the 1912 census as a seamstress living in El Raval."
                  citations={
                    <>
                      <Bubble.CitationChip label="1" />
                      <Bubble.CitationChip label="2" />
                    </>
                  }
                />
                <div className="flex w-full items-start justify-end">
                  <Bubble
                    className="h-auto grow shrink-0 basis-0 self-stretch"
                    role="user"
                    text="Who else lived on her street?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border py-12 mobile:py-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Knowledge graph
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Explore entities, places and mappings as connected data.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Network Graph
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · selected · dimmed · zoomed
                </span>
              </div>
              <div className="flex w-full items-start gap-2 rounded-md border border-solid border-neutral-border px-3 py-3">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Graph  config row
                  </span>
                  <GraphConfigRow
                    name="Women of El Raval"
                    meta="Advanced · SPARQL-defined"
                    basedOn="Based on: Women of El Raval · Barcelona Labour Archive"
                    advancedLabel="Advanced: Women of El Raval"
                    title="Advanced graph configurations"
                    description="Define how the visualisation works with your own SPARQL queries"
                    actionLabel="Create graph config"
                  />
                </div>
              </div>
              <NetworkGraph
                className="h-[420px] w-full flex-none"
                state="selected"
              />
              <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border px-3 py-3">
                <span className="text-body-bold font-body-bold text-default-font">
                  Graph toolbar
                </span>
                <GraphToolbar
                  maxLinks="300"
                  searchPlaceholder="Search RDF resources…"
                  searchHint={'"abC" matches "abC*", "ab c*" and "ab-c*"'}
                  showLabel="Show"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-2 px-2 py-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Text
                </span>
                <span className="text-caption font-caption text-default-font">
                  Text
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Map
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · zoomed · filtered
                </span>
              </div>
              <Map className="h-[440px] w-full flex-none" state="default" />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Map Marker
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · selected · cluster
                </span>
              </div>
              <div className="flex w-full gap-6 rounded-md bg-background-alt px-4 py-8 items-end justify-around">
                <MapMarker state="default" label="El Raval" count="" />
                <MapMarker state="selected" label="Gràcia" count="" />
                <MapMarker state="cluster" label="" count="24" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Tree View
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  folders · items · selected
                </span>
              </div>
              <TreeView>
                <TreeView.Folder
                  label="Barcelona 1912"
                  icon={<FeatherFolder />}
                >
                  <TreeView.Item
                    label="census_raw.csv"
                    icon={<FeatherFileSpreadsheet />}
                  />
                  <TreeView.Item
                    selected={true}
                    label="person_mapping.ttl"
                    icon={<FeatherFileCode />}
                  />
                </TreeView.Folder>
                <TreeView.Folder label="Shapes" icon={<FeatherFolder />}>
                  <TreeView.Item
                    label="person_v2.shacl"
                    icon={<FeatherFileCheck />}
                  />
                </TreeView.Folder>
              </TreeView>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 col-span-2 mobile:col-span-1">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Mapping Board
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  idle · dragging
                </span>
              </div>
              <MappingBoard className="h-auto w-full flex-none" state="idle" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-8 border-t border-solid border-neutral-border pt-12 mobile:pt-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Charts
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Aggregate views of records, sources and quality. Brand ramp only.
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex h-[405px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Bar Chart
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  grouped · stacked
                </span>
              </div>
              <BarChart
                className="h-64 w-full flex-none"
                categories={["Validated", "In review"]}
                data={[
                  { Decade: "1880s", Validated: 120, "In review": 40 },
                  { Decade: "1890s", Validated: 210, "In review": 65 },
                  { Decade: "1900s", Validated: 340, "In review": 90 },
                  { Decade: "1910s", Validated: 480, "In review": 150 },
                ]}
                index={"Decade"}
              />
            </div>
            <div className="flex h-[405px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Line Chart
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  multi-series trend
                </span>
              </div>
              <LineChart
                className="h-[268px] w-full flex-none"
                categories={["Statements", "Entities"]}
                data={[
                  { Month: "Jun", Statements: 820, Entities: 210 },
                  { Month: "Jul", Statements: 1240, Entities: 340 },
                  { Month: "Aug", Statements: 1610, Entities: 420 },
                  { Month: "Sep", Statements: 2180, Entities: 560 },
                  { Month: "Oct", Statements: 2950, Entities: 710 },
                ]}
                index={"Month"}
              />
            </div>
            <div className="flex h-[405px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Area Chart
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  default · stacked
                </span>
              </div>
              <AreaChart
                className="h-[299px] w-full flex-none"
                stacked={true}
                categories={["Census", "Parish", "Rolls"]}
                data={[
                  { Month: "Jun", Census: 300, Parish: 120, Rolls: 40 },
                  { Month: "Jul", Census: 420, Parish: 160, Rolls: 70 },
                  { Month: "Aug", Census: 510, Parish: 210, Rolls: 95 },
                  { Month: "Sep", Census: 640, Parish: 260, Rolls: 130 },
                  { Month: "Oct", Census: 780, Parish: 330, Rolls: 180 },
                ]}
                index={"Month"}
              />
            </div>
            <div className="flex h-[405px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Pie Chart
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  share of total
                </span>
              </div>
              <div className="flex h-[231px] w-full flex-none flex-col items-start">
                <PieChart
                  className="w-full grow shrink-0 basis-0"
                  category={"Records"}
                  data={[
                    { Source: "Census", Records: 2418 },
                    { Source: "Parish register", Records: 960 },
                    { Source: "Membership roll", Records: 312 },
                    { Source: "Press", Records: 188 },
                  ]}
                  index={"Source"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _02Components;
