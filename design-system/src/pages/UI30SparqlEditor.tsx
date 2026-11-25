"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Kbd } from "@/ui/components/Kbd";
import { Table } from "@/ui/components/Table";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherSave } from "@subframe/core";
import { FeatherSend } from "@subframe/core";

function Ui30SparqlEditor() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · QUERY
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            SPARQL editor
          </h1>
          <p className="text-body font-body text-subtext-color">
            Direct query access with full transparency.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-default-font">
              Query
            </span>
            <span className="text-caption font-caption text-subtext-color">
              SPARQL 1.1 · seamstresses of El Raval, Barcelona
            </span>
          </div>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
            <span className="text-monospace-body font-monospace-body text-default-font">
              SELECT ?p ?label WHERE &#123;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              ?p wdt:P106 wd:Q327529 .
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              ?p wdt:P131 wd:Q1492 .
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              {" "}
              SERVICE wikibase:label &#123; bd:serviceParam wikibase:language
              &quot;ca&quot;,&quot;es&quot;,&quot;en&quot; . &#125;
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font">
              &#125;
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              icon={<FeatherSend />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Run
            </Button>
            <Button
              variant="neutral-secondary"
              icon={<FeatherSave />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save query
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-heading-2 font-heading-2 text-default-font">
              Results
            </h2>
            <span className="text-caption font-caption text-subtext-color">
              5 rows · 0.4s · query.wikidata.org/sparql
            </span>
          </div>
          <div className="flex w-full flex-col items-start overflow-x-auto">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell sortable={true} sort="ascending">
                    Person
                  </Table.HeaderCell>
                  <Table.HeaderCell>Label</Table.HeaderCell>
                  <Table.HeaderCell>Occupation</Table.HeaderCell>
                  <Table.HeaderCell>District</Table.HeaderCell>
                  <Table.HeaderCell>Source</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Mercè Puig i Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Mercè Puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Seamstress
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    1912 census
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Teresa Vidal Coll
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Teresa Vidal
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Teacher
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Ateneu Obrer roll
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Rosa Serra Font
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Rosa Serra
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Midwife
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Parish register
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Antònia Soler Grau
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Antònia Soler
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Seamstress
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    1912 census
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Carme Rovira Puig
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Carme Rovira
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    Laundress
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-default-font">
                    El Raval
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-subtext-color">
                    Civil registry
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4 self-stretch">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Channel comparison
              </span>
              <span className="text-caption font-caption text-subtext-color">
                SPARQL vs UI builder · same query intent
              </span>
            </div>
            <Badge variant="success" icon={<FeatherCheck />}>
              Match
            </Badge>
          </div>
          <Button
            variant="neutral-secondary"
            size="small"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Compare with UI query
          </Button>
        </div>
        <Alert
          variant="warning"
          icon={<FeatherAlertTriangle />}
          title="Results may diverge from UI/API channels — divergence is documented"
          description="REQ-3.8.1 · divergence between channels is tracked in the audit log."
        />
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Shortcuts
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Kbd type="chord" prefixKey="Ctrl" mainKey="Enter" />
            <span className="text-body font-body text-default-font">Run</span>
            <span className="text-caption font-caption text-subtext-color">
              ·
            </span>
            <Kbd type="chord" prefixKey="Ctrl" mainKey="Space" />
            <span className="text-body font-body text-default-font">
              Autocomplete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui30SparqlEditor;
