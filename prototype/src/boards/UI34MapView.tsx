"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { Map } from "@/ui/components/Map";
import { MapMarker } from "@/ui/components/MapMarker";
import { Select } from "@/ui/components/Select";
import { Table } from "@/ui/components/Table";
import { FeatherInfo } from "@/ui/core";
import { FeatherMapPin } from "@/ui/core";

function Ui34MapView() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Map view
          </h1>
          <p className="text-body font-body text-subtext-color">
            Places, routes and spatial patterns
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-8 pb-12 mobile:pb-8">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <Breadcrumbs>
              <Breadcrumbs.Item>HerStory</Breadcrumbs.Item>
              <Breadcrumbs.Divider />
              <Breadcrumbs.Item>Mapa</Breadcrumbs.Item>
              <Breadcrumbs.Divider />
              <Breadcrumbs.Item active={true}>Barcelona 1912</Breadcrumbs.Item>
            </Breadcrumbs>
            <div className="flex w-56 flex-none items-start">
              <Select
                className="h-auto w-auto flex-none self-stretch"
                label=""
                placeholder="Select region"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="Barcelona">Barcelona</Select.Item>
                <Select.Item value="Valencia">Valencia</Select.Item>
                <Select.Item value="Seville">Seville</Select.Item>
              </Select>
            </div>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-2 mobile:gap-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Map
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  Barcelona, 1912 — 1,204 locations
                </span>
              </div>
              <Map className="h-[480px] w-full flex-none" state="default" />
              <div className="flex w-full gap-6 rounded-md bg-background-alt px-4 py-8 items-end justify-around">
                <MapMarker state="selected" label="El Raval" count="" />
                <MapMarker state="default" label="El Born" count="" />
                <MapMarker state="cluster" label="" count="24" />
                <MapMarker state="default" label="Gràcia" count="" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-micro font-micro text-subtext-color uppercase">
                  Selected place
                </span>
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    El Raval
                  </span>
                  <Badge variant="brand" icon={<FeatherMapPin />}>
                    Place
                  </Badge>
                </div>
              </div>
              <Table
                header={
                  <Table.HeaderRow>
                    <Table.HeaderCell>Property</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.HeaderRow>
                }
                density="comfortable"
              >
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      District
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Ciutat Vella
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Period
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      1912
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Records
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      214
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Occupations
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      seamstress, bordadora, talladora
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table>
              <Alert
                variant="brand"
                icon={<FeatherInfo />}
                title="Related places: El Born, Sant Pere"
                description="Neighbourhoods with overlapping occupation profiles in the 1912 census."
              />
              <Button
                variant="neutral-secondary"
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Explore related
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui34MapView;
