"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { Pagination } from "@/ui/components/Pagination";

function Ui32CollectionBrowser() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-2 pb-12 mobile:pb-8">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Collection browser
          </h1>
          <p className="text-body font-body text-subtext-color">
            Browse archives, press and registers
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 pb-10">
          <Breadcrumbs>
            <Breadcrumbs.Item>HerStory</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <Breadcrumbs.Item>Acervo</Breadcrumbs.Item>
            <Breadcrumbs.Divider />
            <Breadcrumbs.Item active={true}>Barcelona 1912</Breadcrumbs.Item>
          </Breadcrumbs>
          <div className="flex w-full items-center justify-between gap-6">
            <div className="flex grow shrink-0 basis-0 items-center">
              <Combobox
                className="h-auto grow shrink-0 basis-0"
                state="default"
                label=""
                placeholder="Search collections…"
                value=""
                helpText=""
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Cards
              </Button>
              <Button
                variant="neutral-tertiary"
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                List
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full items-start gap-6 grid grid-cols-3 mobile:gap-4 mobile:grid mobile:grid-cols-1">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Barcelona 1912 Census
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1912 · Municipal census
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral">2,418 records</Badge>
              <Badge variant="warning">2 gaps</Badge>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-end">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Women in Catalan Press 1927
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1927 · Press corpus, Catalonia
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral">1,126 records</Badge>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-end">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Suffrage Correspondence
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1908–1931 · Correspondence collection
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral">340 records</Badge>
              <Badge variant="brand">Polyvocal</Badge>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-end">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Maritime Trade Register
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1890–1920 · Commercial registers
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral">875 records</Badge>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-end">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Parish Register Gràcia
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1875–1936 · Baptisms &amp; marriages
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral">1,540 records</Badge>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-end">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Labour Union Membership Rolls
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1900–1936 · Ateneu Obrer rolls
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral">312 records</Badge>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-end">
              <Button
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Open
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-t border-solid border-neutral-border pt-8">
          <Pagination position="first" />
        </div>
      </div>
    </div>
  );
}

export default Ui32CollectionBrowser;
