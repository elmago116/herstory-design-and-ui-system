"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { FeatherChevronRight } from "@/ui/core";

function Ui361SubmissionReceipt() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Submitted as ticket T-4821
          </h1>
          <p className="text-body font-body text-subtext-color">
            Your report is queued for triage. You will be notified when its
            status changes.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <div className="flex w-full items-start gap-6">
            <span className="w-36 flex-none text-caption font-caption text-subtext-color">
              Type
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              Bug
            </span>
          </div>
          <div className="flex w-full items-start gap-6">
            <span className="w-36 flex-none text-caption font-caption text-subtext-color">
              Title
            </span>
            <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
              Mapping editor drops the second voice on merge
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full items-start gap-6">
              <span className="w-36 flex-none text-caption font-caption text-subtext-color">
                Workspace affected
              </span>
              <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
                Women of El Raval
              </span>
            </div>
            <div className="flex w-full items-start gap-6">
              <span className="w-36 flex-none text-caption font-caption text-subtext-color">
                Attached context
              </span>
              <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
                1 saved query, 2 sources
              </span>
            </div>
            <div className="flex w-full items-start gap-6">
              <span className="w-36 flex-none text-caption font-caption text-subtext-color">
                Notifications
              </span>
              <span className="min-w-[0px] grow shrink-0 basis-0 text-body font-body text-default-font">
                on
              </span>
            </div>
          </div>
        </div>
        <span className="text-caption font-caption text-subtext-color">
          Keep this reference: T-4821. The attached query context stays private
          to your workspace.
        </span>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
          <Button
            variant="brand-primary"
            icon={<FeatherChevronRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            View ticket
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui361SubmissionReceipt;
