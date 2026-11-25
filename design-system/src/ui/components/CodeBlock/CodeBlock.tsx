"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/fbbaaa9a39d6/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Code Block — https://app.subframe.com/fbbaaa9a39d6/library?component=Code+Block_a2c9b4d2-7c0d-401b-aa4c-fc3e223a5bf7
 */

import React from "react";
import { FeatherAlertCircle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCopy } from "@subframe/core";
import * as SubframeUtils from "../../utils";
import { Button } from "../Button";

export interface CodeBlockRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  language?: "sparql" | "shacl" | "ttl";
  state?: "default" | "error" | "copy-hover";
  className?: string;
}

const CodeBlockRoot = React.forwardRef<HTMLDivElement, CodeBlockRootProps>(
  function CodeBlockRoot(
    {
      language = "sparql",
      state = "default",
      className,
      ...otherProps
    }: CodeBlockRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/a2c9b4d2 flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-50 group/codeblock",
          {
            "border border-solid border-neutral-border border-l-4 border-l-error-700":
              state === "error",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border bg-neutral-100 px-3 py-2">
          <span className="text-micro font-micro text-default-font uppercase">
            {language === "ttl"
              ? "Turtle"
              : language === "shacl"
              ? "SHACL"
              : "SPARQL"}
          </span>
          <span className="grow shrink-0 basis-0 whitespace-nowrap text-caption font-caption text-subtext-color truncate">
            {language === "ttl"
              ? "merce-puig.ttl"
              : language === "shacl"
              ? "person-shape.shacl.ttl"
              : "women-in-wikidata.rq"}
          </span>
          <Button
            variant={
              state === "copy-hover" ? "brand-secondary" : "neutral-tertiary"
            }
            size="small"
            icon={state === "copy-hover" ? <FeatherCheck /> : <FeatherCopy />}
          >
            {state === "copy-hover" ? "Copied" : "Copy"}
          </Button>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full items-center gap-2 border-b border-solid border-error-200 bg-error-50 px-3 py-2",
            { flex: state === "error" }
          )}
        >
          <FeatherAlertCircle className="text-caption font-caption text-error-700" />
          <span className="text-caption font-caption text-error-700">
            Line 3: unexpected token &#39;&#125;&#39;
          </span>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full flex-col items-start py-3 overflow-x-auto",
            { hidden: language === "ttl" || language === "shacl" }
          )}
        >
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              1
            </span>
            <span className="text-monospace-body font-monospace-body text-neutral-500 whitespace-pre">
              # Women in Wikidata
            </span>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              2
            </span>
            <div className="flex items-center">
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                SELECT
              </span>
              <span className="text-monospace-body font-monospace-body text-success-800 whitespace-pre">
                {" "}
                ?person
              </span>
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                {" "}
                WHERE
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                &#123;
              </span>
            </div>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full items-center gap-3 px-3",
              { "bg-error-50": state === "error" }
            )}
          >
            <span
              className={SubframeUtils.twClassNames(
                "w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right",
                { "text-error-700": state === "error" }
              )}
            >
              3
            </span>
            <div className="flex items-center pl-3">
              <span className="text-monospace-body font-monospace-body text-success-800 whitespace-pre">
                {" "}
                ?person
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                wdt:P31
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                wd:Q5
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                ;
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              4
            </span>
            <div className="flex items-center pl-16">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                wdt:P21
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                wd:Q6581072
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                .
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              5
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
              &#125;
            </span>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              6
            </span>
            <div className="flex items-center">
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                LIMIT
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                100
              </span>
            </div>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start py-3 overflow-x-auto",
            { flex: language === "shacl" }
          )}
        >
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              1
            </span>
            <span className="text-monospace-body font-monospace-body text-neutral-500 whitespace-pre">
              # Birth date constraint for persons
            </span>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              2
            </span>
            <div className="flex items-center">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                ex:PersonShape
              </span>
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                {" "}
                a
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                sh:NodeShape
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                ;
              </span>
            </div>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full items-center gap-3 px-3",
              { "bg-error-50": state === "error" }
            )}
          >
            <span
              className={SubframeUtils.twClassNames(
                "w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right",
                { "text-error-700": state === "error" }
              )}
            >
              3
            </span>
            <div className="flex items-center pl-3">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                sh:property
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                [
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              4
            </span>
            <div className="flex items-center pl-7">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                sh:path
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                schema:birthDate
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                ;
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              5
            </span>
            <div className="flex items-center pl-7">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                sh:datatype
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                xsd:date
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                ;
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              6
            </span>
            <div className="flex items-center pl-7">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                sh:maxCount
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                1
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              7
            </span>
            <span className="text-monospace-body font-monospace-body text-default-font pl-3 whitespace-pre">
              {" "}
              ] .
            </span>
          </div>
        </div>
        <div
          className={SubframeUtils.twClassNames(
            "hidden w-full flex-col items-start py-3 overflow-x-auto",
            { flex: language === "ttl" }
          )}
        >
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              1
            </span>
            <div className="flex items-center">
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                @prefix
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                ex: &lt;http://example.org/&gt;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                .
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              2
            </span>
            <div className="flex items-center">
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                @prefix
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                schema: &lt;https://schema.org/&gt;
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                .
              </span>
            </div>
          </div>
          <div
            className={SubframeUtils.twClassNames(
              "flex w-full items-center gap-3 px-3",
              { "bg-error-50": state === "error" }
            )}
          >
            <span
              className={SubframeUtils.twClassNames(
                "w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right",
                { "text-error-700": state === "error" }
              )}
            >
              3
            </span>
            <div className="flex items-center">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                ex:person42
              </span>
              <span className="text-monospace-body font-monospace-body text-brand-700 whitespace-pre">
                {" "}
                a
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                schema:Person
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                ;
              </span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-3">
            <span className="w-6 flex-none text-monospace-body font-monospace-body text-neutral-500 text-right">
              4
            </span>
            <div className="flex items-center pl-3">
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                {" "}
                schema:name
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                &quot;Mercè Puig&quot;
              </span>
              <span className="text-monospace-body font-monospace-body text-warning-800 whitespace-pre">
                @ca
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font whitespace-pre">
                {" "}
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const CodeBlock = CodeBlockRoot;
