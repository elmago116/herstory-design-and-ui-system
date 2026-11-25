"use client";

import React from "react";

function Ui321CollectionDetail() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · COLLECTIONS
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font">
            Barcelona 1912 Census
          </h1>
          <p className="text-body font-body text-subtext-color">
            2,418 records · 4 documents · 2 gaps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ui321CollectionDetail;
