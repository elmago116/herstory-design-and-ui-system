"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/ui/components/Badge";
import { FeatherChevronsLeft, FeatherChevronsRight } from "@/ui/core";
import { GENERAL_NAV, readRole } from "./general-nav-config";

const COLLAPSED_KEY = "herstory-nav-collapsed";

export default function GeneralNav({ current }: { current: string }) {
  const [role, setRole] = useState("superadmin");
  const [collapsed, setCollapsed] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setRole(readRole());
    const narrow = window.matchMedia("(max-width: 900px)").matches;
    setCollapsed(narrow ? true : localStorage.getItem(COLLAPSED_KEY) === "1");
  }, []);

  useEffect(() => {
    const shell = document.getElementById("general-shell");
    if (shell) shell.dataset.navCollapsed = collapsed ? "true" : "false";
    localStorage.setItem(COLLAPSED_KEY, collapsed ? "1" : "0");
  }, [collapsed]);

  const sections = GENERAL_NAV[role] ?? GENERAL_NAV.superadmin;
  const expanded = !collapsed || hover;
  const toggle = () => {
    setHover(false);
    setCollapsed((value) => !value);
  };

  return (
    <aside
      className="general-nav flex flex-col border-r border-solid border-neutral-border bg-default-background"
      style={{
        width: expanded ? 240 : 64,
        flex: "none",
        minHeight: 0,
        position: "relative",
        zIndex: expanded && collapsed ? 30 : 1,
        boxShadow: expanded && collapsed ? "var(--shadow-lg)" : "none",
        transition: "width 150ms ease",
      }}
      onMouseEnter={() => {
        if (collapsed) setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      onFocusCapture={() => {
        if (collapsed) setHover(true);
      }}
      onBlurCapture={() => setHover(false)}
    >
      <button
        type="button"
        className="general-nav-toggle flex h-10 w-full flex-none items-center gap-2 border-b border-solid border-neutral-border px-3 text-caption font-caption text-subtext-color hover:bg-neutral-50"
        onClick={toggle}
        aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
        title={collapsed ? "Expand navigation" : "Collapse navigation"}
        style={{ justifyContent: expanded ? "flex-start" : "center" }}
      >
        {collapsed && !hover ? <FeatherChevronsRight /> : <FeatherChevronsLeft />}
        {expanded ? <span>{collapsed ? "Expand" : "Collapse"}</span> : null}
      </button>

      <nav
        className="flex min-h-0 w-full flex-1 flex-col overflow-y-auto overflow-x-hidden px-3 py-4"
        aria-label="Primary"
      >
        {sections.map((section) => (
          <div key={section.label} className="flex w-full flex-col gap-1 pt-4 first:pt-0">
            {expanded ? (
              <span className="px-3 py-1 text-caption-bold font-caption-bold text-subtext-color">
                {section.label}
              </span>
            ) : null}
            {section.items.map((item) => {
              const active = current === item.to;
              return (
                <a
                  key={`${section.label}-${item.label}`}
                  href={item.to}
                  aria-current={active ? "page" : undefined}
                  title={item.label}
                  className={[
                    "flex h-10 w-full items-center gap-2 rounded-md py-2 hover:bg-neutral-50 active:bg-neutral-100",
                    expanded ? "px-3" : "justify-center px-0",
                    active ? "bg-brand-50 text-brand-700 hover:bg-brand-50" : "text-neutral-600",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-5 w-5 flex-none items-center justify-center text-heading-3",
                      active ? "text-brand-700" : "text-neutral-600",
                    ].join(" ")}
                  >
                    {item.icon}
                  </span>
                  {expanded ? (
                    <span className="line-clamp-1 grow shrink-0 basis-0 text-left text-body-bold font-body-bold">
                      {item.label}
                    </span>
                  ) : null}
                  {expanded && item.badge ? (
                    <Badge variant={item.badge.variant ?? "neutral"}>{item.badge.text}</Badge>
                  ) : null}
                </a>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
