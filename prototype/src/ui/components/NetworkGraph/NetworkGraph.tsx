"use client";

import React from "react";
import { FeatherFileText } from "@/ui/core";
import { FeatherLandmark } from "@/ui/core";
import { FeatherMapPin } from "@/ui/core";
import { FeatherMaximize } from "@/ui/core";
import { FeatherScan } from "@/ui/core";
import { FeatherScissors } from "@/ui/core";
import { FeatherUser } from "@/ui/core";
import { FeatherZoomIn } from "@/ui/core";
import { FeatherZoomOut } from "@/ui/core";
import * as SubframeUtils from "../../utils";
import { IconButton } from "../IconButton";

export interface NetworkGraphRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "selected" | "dimmed" | "zoomed";
  className?: string;
}

const NetworkGraphRoot = React.forwardRef<
  HTMLDivElement,
  NetworkGraphRootProps
>(function NetworkGraphRoot(
  { state = "default", className, ...otherProps }: NetworkGraphRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/fd7ae17a flex h-[420px] w-[640px] items-start overflow-hidden rounded-lg border border-solid border-neutral-border bg-neutral-50 relative bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] bg-[size:16px_16px] mobile:w-full",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-[179px] flex-none items-start bg-viz-edge absolute left-[140px] top-[100px] origin-left rotate-[26.6deg]",
          {
            "w-[268px] left-[30px] top-[50px]": state === "zoomed",
            "h-0.5 bg-brand-primary":
              state === "dimmed" || state === "selected",
          }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-48 flex-none items-start bg-viz-edge absolute left-[300px] top-[180px] origin-left rotate-[-27.9deg]",
          {
            "w-[289px] left-[270px] top-[170px]": state === "zoomed",
            "h-0.5 bg-brand-primary":
              state === "dimmed" || state === "selected",
          }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-[125px] flex-none items-start bg-viz-edge absolute left-[240px] top-[290px] origin-left rotate-[-61.4deg]",
          {
            "w-[188px] left-[180px] top-[335px]": state === "zoomed",
            "h-0.5 bg-brand-primary":
              state === "dimmed" || state === "selected",
          }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-[184px] flex-none items-start bg-viz-edge absolute left-[300px] top-[180px] origin-left rotate-[29.4deg]",
          {
            "w-[275px] left-[270px] top-[170px]": state === "zoomed",
            "h-0.5 bg-brand-primary":
              state === "dimmed" || state === "selected",
          }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-[124px] flex-none items-start bg-viz-edge absolute left-[300px] top-[56px] origin-left rotate-90",
          {
            "w-[186px] left-[270px] top-[-16px]": state === "zoomed",
            "h-0.5 bg-brand-primary":
              state === "dimmed" || state === "selected",
          }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-36 flex-none items-start bg-viz-edge absolute left-[60px] top-[220px] origin-left rotate-[-56.3deg]",
          {
            "w-[216px] left-[-90px] top-[230px]": state === "zoomed",
            "opacity-25": state === "dimmed",
          }
        )}
      />
      <div
        className={SubframeUtils.twClassNames(
          "flex h-px w-[122px] flex-none items-start bg-viz-edge absolute left-[460px] top-[270px] origin-left rotate-[-9.5deg]",
          {
            "w-[183px] left-[510px] top-[305px]": state === "zoomed",
            "opacity-25": state === "dimmed",
          }
        )}
      />
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[220px] top-[140px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[150px] top-[110px]": state === "zoomed",
            "text-brand-primary": state === "dimmed" || state === "selected",
          }
        )}
      >
        born in
      </span>
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[385px] top-[135px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[398px] top-[103px]": state === "zoomed",
            "text-brand-primary": state === "dimmed" || state === "selected",
          }
        )}
      >
        listed in
      </span>
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[270px] top-[235px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[225px] top-[253px]": state === "zoomed",
            "text-brand-primary": state === "dimmed" || state === "selected",
          }
        )}
      >
        occupation
      </span>
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[380px] top-[225px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[390px] top-[238px]": state === "zoomed",
            "text-brand-primary": state === "dimmed" || state === "selected",
          }
        )}
      >
        member of
      </span>
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[300px] top-[124px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[270px] top-[86px]": state === "zoomed",
            "text-brand-primary": state === "dimmed" || state === "selected",
          }
        )}
      >
        daughter of
      </span>
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[100px] top-[160px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[-30px] top-[140px]": state === "zoomed",
            "opacity-25": state === "dimmed",
          }
        )}
      >
        district of
      </span>
      <span
        className={SubframeUtils.twClassNames(
          "whitespace-nowrap text-micro font-micro text-subtext-color absolute left-[520px] top-[260px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neutral-50 px-1",
          {
            "left-[600px] top-[290px]": state === "zoomed",
            "opacity-25": state === "dimmed",
          }
        )}
      >
        member of
      </span>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[300px] top-[180px]",
          { "left-[270px] top-[170px]": state === "zoomed" }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-viz-node shadow-sm relative",
            {
              "h-14 w-14": state === "zoomed",
              "h-12 w-12 ring-[3px] ring-brand-primary":
                state === "dimmed" || state === "selected",
            }
          )}
        >
          <FeatherUser
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              {
                "text-heading-2 font-heading-2": state === "zoomed",
                "text-heading-3 font-heading-3":
                  state === "dimmed" || state === "selected",
              }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-high absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            {
              "text-body font-body top-8": state === "zoomed",
              "text-caption-bold font-caption-bold text-brand-primary top-7":
                state === "dimmed" || state === "selected",
            }
          )}
        >
          Mercè Puig
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[140px] top-[100px]",
          { "left-[30px] top-[50px]": state === "zoomed" }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-success-300 shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherMapPin
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-high absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          Barcelona
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[470px] top-[90px]",
          { "left-[525px] top-[35px]": state === "zoomed" }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-warning-300 shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherFileText
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-medium absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          1912 census
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[240px] top-[290px]",
          { "left-[180px] top-[335px]": state === "zoomed" }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-neutral-400 shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherScissors
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-high absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          Seamstress
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[460px] top-[270px]",
          { "left-[510px] top-[305px]": state === "zoomed" }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-brand-500 shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherLandmark
            className={SubframeUtils.twClassNames(
              "text-body font-body text-white",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-medium absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          Ateneu Obrer
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[300px] top-[56px]",
          { "left-[270px] top-[-16px]": state === "zoomed" }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-viz-node shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherUser
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-low absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          Josep Puig
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[60px] top-[220px]",
          {
            "left-[-90px] top-[230px]": state === "zoomed",
            "opacity-25": state === "dimmed",
          }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-success-300 shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherMapPin
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-high absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          El Raval
        </span>
      </div>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-0 w-0 flex-none items-center justify-center absolute left-[580px] top-[250px]",
          {
            "left-[690px] top-[275px]": state === "zoomed",
            "opacity-25": state === "dimmed",
          }
        )}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-solid border-default-background bg-viz-node shadow-sm relative",
            { "h-14 w-14": state === "zoomed" }
          )}
        >
          <FeatherUser
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font",
              { "text-heading-2 font-heading-2": state === "zoomed" }
            )}
          />
          <div className="flex h-3 w-3 flex-none items-start rounded-full border-2 border-solid border-default-background bg-quality-low absolute -right-0.5 -top-0.5" />
        </div>
        <span
          className={SubframeUtils.twClassNames(
            "whitespace-nowrap text-caption font-caption text-default-font absolute left-0 top-6 -translate-x-1/2 rounded-sm bg-neutral-50 px-1",
            { "text-body font-body top-8": state === "zoomed" }
          )}
        >
          Teresa Vidal
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-sm absolute right-3 top-3">
        <IconButton icon={<FeatherZoomIn />} />
        <span
          className={SubframeUtils.twClassNames(
            "hidden text-micro font-micro text-brand-primary",
            { inline: state === "zoomed" }
          )}
        >
          150%
        </span>
        <IconButton icon={<FeatherZoomOut />} />
        <div className="flex h-px w-6 flex-none items-start bg-neutral-border" />
        <IconButton icon={<FeatherScan />} />
        <IconButton icon={<FeatherMaximize />} />
      </div>
      <div className="flex h-8 items-center gap-3 overflow-hidden border-t border-solid border-neutral-border bg-default-background px-3 w-full absolute bottom-0 left-0">
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
            TYPE
          </span>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-viz-node" />
            <span className="text-caption font-caption text-default-font">
              Person
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-success-300" />
            <span className="text-caption font-caption text-default-font">
              Place
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-warning-300" />
            <span className="text-caption font-caption text-default-font">
              Record
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-neutral-400" />
            <span className="text-caption font-caption text-default-font">
              Occupation
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-brand-500" />
            <span className="text-caption font-caption text-default-font">
              Organization
            </span>
          </div>
        </div>
        <div className="flex h-4 w-px flex-none items-start bg-neutral-border mobile:hidden" />
        <div className="flex items-center gap-2 mobile:hidden">
          <span className="whitespace-nowrap text-micro font-micro text-subtext-color">
            QUALITY
          </span>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-quality-high" />
            <span className="text-caption font-caption text-default-font">
              High
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-quality-medium" />
            <span className="text-caption font-caption text-default-font">
              Medium
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex h-2 w-2 flex-none items-start rounded-full bg-quality-low" />
            <span className="text-caption font-caption text-default-font">
              Low
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export const NetworkGraph = NetworkGraphRoot;
