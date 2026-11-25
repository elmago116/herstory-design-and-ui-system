"use client";

import React from "react";

function Ui372Footer() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
        <footer className="flex w-full max-w-[1120px] flex-col items-start gap-6 border-t border-solid border-neutral-border pt-8">
          <div className="w-full items-start gap-8 grid grid-cols-4 mobile:gap-6 mobile:grid mobile:grid-cols-2">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <span className="text-heading-3 font-heading-3 text-brand-primary">
                HerStory
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Historical data → Wikidata knowledge graph
              </span>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Platform
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Ingestion
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Mapping
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Graph explorer
              </span>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Governance
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Authority matrix
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Consent and GDPR
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Absence registry
              </span>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Help
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Getting started
              </span>
              <span className="text-caption font-caption text-subtext-color">
                FAQ
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Contact support
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-4">
            <span className="text-caption font-caption text-subtext-color">
              © 2026 HerStory · v1.4
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Ui372Footer;
