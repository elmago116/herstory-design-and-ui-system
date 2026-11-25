"use client";
/*
 * Documentation:
 * Agent Config Dialog — https://app.subframe.com/fbbaaa9a39d6/library?component=Agent+Config+Dialog_3d984d68-acf4-4d1a-9a17-40aecf93ab93
 * Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Field — https://app.subframe.com/fbbaaa9a39d6/library?component=Field_c63eaa65-f318-4ba2-8422-e7209b7a0776
 * Icon Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Link Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 * Select — https://app.subframe.com/fbbaaa9a39d6/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 * Setting Row — https://app.subframe.com/fbbaaa9a39d6/library?component=Setting+Row_5b4f371e-806d-4bde-85f1-5112c3a1edb5
 * Text Field — https://app.subframe.com/fbbaaa9a39d6/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherChevronUp } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";
import { Field } from "../Field";
import { IconButton } from "../IconButton";
import { LinkButton } from "../LinkButton";
import { Select } from "../Select";
import { SettingRow } from "../SettingRow";
import { TextField } from "../TextField";

export interface AgentConfigDialogRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "advanced-collapsed";
  className?: string;
}

const AgentConfigDialogRoot = React.forwardRef<
  HTMLDivElement,
  AgentConfigDialogRootProps
>(function AgentConfigDialogRoot(
  { state = "default", className, ...otherProps }: AgentConfigDialogRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/3d984d68 flex h-192 flex-col items-start overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background shadow-lg group/agentdialog w-180 max-w-full max-h-full",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-4 border-b border-solid border-neutral-border px-6 py-4 mobile:px-4">
        <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
          Create agent
        </span>
        <IconButton
          variant="neutral-tertiary"
          size="medium"
          icon={<FeatherX />}
        />
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-6 py-6 overflow-y-auto mobile:px-4">
        <Field
          label="Agent name"
          helpText=""
          errorText="This field is required."
        >
          <TextField
            className="h-auto w-full flex-none [&>div]:h-10"
            label=""
            helpText=""
          >
            <TextField.Input placeholder="Enter a friendly name" value="" />
          </TextField>
        </Field>
        <Field
          label="Workspace"
          helpText=""
          errorText="This field is required."
        >
          <Select
            className="h-auto w-full flex-none [&>div]:h-10"
            label=""
            placeholder="Barcelona Labour Archive"
            helpText=""
          >
            <Select.Item value="Barcelona Labour Archive">
              Barcelona Labour Archive
            </Select.Item>
            <Select.Item value="Women in Catalan Press">
              Women in Catalan Press
            </Select.Item>
            <Select.Item value="Suffrage Correspondence">
              Suffrage Correspondence
            </Select.Item>
          </Select>
        </Field>
        <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-1">
          <Field
            showInfo={true}
            label="Model"
            helpText=""
            errorText="This field is required."
          >
            <TextField
              className="h-auto w-full flex-none [&>div]:h-10"
              label=""
              helpText=""
            >
              <TextField.Input placeholder="Model name" value="gpt-4.1" />
            </TextField>
          </Field>
          <Field
            label="Context size"
            helpText=""
            errorText="This field is required."
          >
            <TextField
              className="h-auto w-full flex-none [&>div]:h-10"
              label=""
              helpText=""
            >
              <div className="flex w-full grow shrink-0 basis-0 items-center gap-2">
                <TextField.Input placeholder="0" value="1,000,000" />
                <span className="text-caption font-caption text-subtext-color">
                  tokens
                </span>
              </div>
            </TextField>
          </Field>
          <SettingRow
            type="parameter"
            label="Temperature"
            description="Generate and run SPARQL queries against the repository"
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
          <SettingRow
            type="parameter"
            label="Top P"
            description="Generate and run SPARQL queries against the repository"
            value="1"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-body-bold font-body-bold text-default-font">
            Query methods
          </span>
          <SettingRow
            type="toggle"
            label="SPARQL"
            description=""
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
          <SettingRow
            type="toggle"
            label="Full-text search"
            description=""
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
          <SettingRow
            type="toggle"
            label="Similarity search"
            description=""
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
          <SettingRow
            type="toggle"
            label="Retrieval connector"
            description=""
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          <span className="text-body-bold font-body-bold text-default-font">
            Additional query methods
          </span>
          <SettingRow
            type="toggle"
            label="Full-text search in labels for IRI discovery"
            description=""
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
          <SettingRow
            type="toggle"
            label="Autocomplete for IRI discovery"
            description=""
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
        </div>
        <div className="flex w-full items-center justify-center py-1">
          <LinkButton
            variant="brand"
            size="medium"
            iconRight={
              state === "advanced-collapsed" ? (
                <FeatherChevronDown />
              ) : (
                <FeatherChevronUp />
              )
            }
          >
            {state === "advanced-collapsed"
              ? "Show advanced settings"
              : "Hide advanced settings"}
          </LinkButton>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full flex-col items-start gap-4",
            { hidden: state === "advanced-collapsed" }
          )}
        >
          <SettingRow
            type="text-actions"
            label="Additional instructions"
            description="Generate and run SPARQL queries against the repository"
            value="0.7"
            placeholder="Enter additional instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
          <SettingRow
            type="text-actions"
            label="Base instructions"
            description="Generate and run SPARQL queries against the repository"
            value="0.7"
            placeholder="Enter base instructions"
            expandedContent="Configure the ontology, query limits and allowed graphs for this method."
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-2 border-t border-solid border-neutral-border px-6 py-4 mobile:flex-col mobile:px-4 mobile:items-stretch">
        <div className="flex grow shrink-0 basis-0 items-center">
          <Button
            className="mobile:grow mobile:shrink-0 mobile:basis-0"
            variant="neutral-secondary"
          >
            Review agent instructions
          </Button>
        </div>
        <div className="flex items-center gap-2 mobile:flex-col-reverse mobile:items-stretch">
          <Button className="mobile:w-full" variant="neutral-secondary">
            Cancel
          </Button>
          <Button className="mobile:w-full" variant="brand-primary">
            Create agent
          </Button>
        </div>
      </div>
    </div>
  );
});

export const AgentConfigDialog = AgentConfigDialogRoot;
