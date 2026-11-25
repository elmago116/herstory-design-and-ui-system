"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { Progress } from "@/ui/components/Progress";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheck } from "@/ui/core";
import { FeatherClock } from "@/ui/core";
import { FeatherInfo } from "@/ui/core";
import { FeatherLoader2 } from "@/ui/core";
import { FeatherPlus } from "@/ui/core";

function Ui33DocumentCorpus() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Document corpus
          </h1>
          <p className="text-body font-body text-subtext-color">
            Full-text searchable archive documents
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4 py-6">
          <Breadcrumbs>
            <Breadcrumbs.Item>HerStory</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <Breadcrumbs.Item active={true}>Documents</Breadcrumbs.Item>
          </Breadcrumbs>
          <TextField className="h-auto w-72 flex-none" label="" helpText="">
            <TextField.Input
              placeholder="Search documents…"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Button
            variant="brand-primary"
            icon={<FeatherPlus />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Upload document
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-6 overflow-x-auto">
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Author/Repository</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Progress</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.HeaderRow>
            }
          >
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Barcelona Census 1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Arxiu Municipal
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1912
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">census</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Indexed
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Letter — Mercè Rodoreda
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  ANC
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1934
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">letter</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand" icon={<FeatherLoader2 />}>
                  Processing
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Progress value={45} />
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  La Vanguardia Archives
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Hemeroteca Digital
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1923
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">press</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Indexed
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Gràcia Parish Register
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Arxiu Diocesà
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1885
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">register</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="brand" icon={<FeatherLoader2 />}>
                  Processing
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Progress value={72} />
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Ateneu Obrer Roll
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Ateneu Obrer
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1911
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">register</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Indexed
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  Vidal Correspondence
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Arxiu Històric
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1902
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">letter</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning" icon={<FeatherClock />}>
                  Pending OCR
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                  El Raval Census 1905
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  Arxiu Municipal
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-default-font">
                  1905
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="neutral">census</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Indexed
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="text-body font-body text-subtext-color">
                  —
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Open
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <Alert
          variant="brand"
          icon={<FeatherInfo />}
          title=""
          description="Documents are indexed for full-text search; upload provenance is recorded."
        />
      </div>
    </div>
  );
}

export default Ui33DocumentCorpus;
