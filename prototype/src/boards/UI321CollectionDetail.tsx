"use client";

import React from "react";
import { Button } from "@/ui/components/Button";

function Ui321CollectionDetail() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Barcelona 1912 Census
          </h1>
          <p className="text-body font-body text-subtext-color">
            2,418 records · 4 documents · 2 gaps
          </p>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui321CollectionDetail;
