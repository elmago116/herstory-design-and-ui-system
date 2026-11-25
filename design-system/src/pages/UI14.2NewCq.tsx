"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui142NewCq() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[880px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COORDINATOR
          </span>
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex min-w-[0px] flex-col items-start gap-1">
              <h1 className="text-heading-1 font-heading-1 text-default-font">
                New competency question
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                A competency question states what the knowledge graph must
                answer. It stays a draft until the expected count is validated
                against a run.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                size="medium"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Cancel
              </Button>
              <Button
                variant="brand-primary"
                size="medium"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Save and run
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border px-6 py-6">
          <div className="flex w-full flex-col items-start gap-1">
            <h2 className="text-heading-3 font-heading-3 text-default-font">
              Question
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              One question, phrased so that a SPARQL query can answer it.
            </span>
          </div>
          <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
            <TextField
              label="Code"
              helpText="Assigned automatically. Edit only to reuse an existing identifier."
            >
              <TextField.Input
                placeholder="CQ-06"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextField
              label="Expected count"
              helpText="The number of entities you expect the graph to return."
            >
              <TextField.Input
                placeholder="128"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
          <TextField
            label="Question"
            helpText="Historical, specific and answerable from the registered sources."
          >
            <TextField.Input
              placeholder="Which women of El Raval were registered as seamstresses in 1912?"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Combobox
            label="Target class"
            placeholder="Person"
            value=""
            helpText="Wikidata entity class the question filters on"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border px-6 py-6">
          <div className="flex w-full flex-col items-start gap-1">
            <h2 className="text-heading-3 font-heading-3 text-default-font">
              Facets
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              Each facet becomes one triple pattern in the generated query.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <span className="text-caption font-caption text-subtext-color">
              Facet 1
            </span>
            <div className="w-full items-start gap-3 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
              <Select
                label="Property"
                placeholder="Property"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Occupation">Occupation</Select.Item>
                <Select.Item value="Location">Location</Select.Item>
                <Select.Item value="Gender">Gender</Select.Item>
              </Select>
              <Select
                label="Operator"
                placeholder="Operator"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="equals">equals</Select.Item>
                <Select.Item value="contains">contains</Select.Item>
                <Select.Item value="greater than">greater than</Select.Item>
              </Select>
              <TextField label="Value" helpText="">
                <TextField.Input
                  placeholder="seamstress"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <span className="text-caption font-caption text-subtext-color">
              Facet 2
            </span>
            <div className="w-full items-start gap-3 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
              <Select
                label="Property"
                placeholder="Property"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Occupation">Occupation</Select.Item>
                <Select.Item value="Location">Location</Select.Item>
                <Select.Item value="Gender">Gender</Select.Item>
              </Select>
              <Select
                label="Operator"
                placeholder="Operator"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="equals">equals</Select.Item>
                <Select.Item value="contains">contains</Select.Item>
                <Select.Item value="greater than">greater than</Select.Item>
              </Select>
              <TextField label="Value" helpText="">
                <TextField.Input
                  placeholder="El Raval"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
            </div>
          </div>
          <Button
            variant="neutral-tertiary"
            size="small"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Add facet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui142NewCq;
