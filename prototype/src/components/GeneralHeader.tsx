"use client";

import React, { useEffect, useState } from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { IconButton } from "@/ui/components/IconButton";
import {
  FeatherCheck,
  FeatherChevronDown,
  FeatherDatabase,
  FeatherGlobe,
  FeatherHelpCircle,
  FeatherMoon,
  FeatherPlus,
  FeatherSun,
} from "@/ui/core";
import { ROLE_LABELS, readRole } from "./general-nav-config";

const THEME_KEY = "herstory-theme";
const WORKSPACE_KEY = "herstory-workspace";
const LANGUAGE_KEY = "herstory-language";

const WORKSPACES = [
  { name: "Barcelona 1912", location: "Local" },
  { name: "Women in Catalan Press", location: "Remote · eu-west" },
];

const LANGUAGES = [
  { label: "English", code: "EN", lang: "en" },
  { label: "Català", code: "CA", lang: "ca" },
  { label: "Español", code: "ES", lang: "es" },
  { label: "Français", code: "FR", lang: "fr" },
  { label: "Euskara", code: "EU", lang: "eu" },
  { label: "العربية", code: "AR", lang: "ar" },
];

export default function GeneralHeader() {
  const [role, setRole] = useState("superadmin");
  const [dark, setDark] = useState(false);
  const [workspace, setWorkspace] = useState(WORKSPACES[0].name);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [lang, setLang] = useState("CA");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    setRole(readRole());
    const isDark = localStorage.getItem(THEME_KEY) === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    const savedWorkspace = localStorage.getItem(WORKSPACE_KEY);
    if (savedWorkspace) setWorkspace(savedWorkspace);
    const savedLang = localStorage.getItem(LANGUAGE_KEY);
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  const selectWorkspace = (name: string) => {
    setWorkspace(name);
    setWorkspaceOpen(false);
    localStorage.setItem(WORKSPACE_KEY, name);
  };

  const selectLanguage = (code: string, htmlLang: string) => {
    setLang(code);
    setLangOpen(false);
    localStorage.setItem(LANGUAGE_KEY, code);
    document.documentElement.lang = htmlLang;
  };

  const closeMenus = () => {
    setWorkspaceOpen(false);
    setLangOpen(false);
  };

  return (
    <header className="general-header relative z-20 flex max-h-[120px] w-full items-center justify-between gap-4 border-b border-solid border-neutral-border bg-default-background px-6 py-6 mobile:px-4 mobile:py-2">
      <a href="/" className="flex h-full items-center" aria-label="HerStory home">
        <img
          className="h-[72px] w-auto flex-none object-contain"
          src="/herstory-logo.png"
          alt="HerStory"
        />
      </a>

      <div className="flex items-center gap-2">
        <div className="relative flex items-center gap-2 mobile:hidden">
          <button
            type="button"
            className="flex h-9 flex-none items-center gap-2 rounded-md border border-solid border-control-border bg-default-background px-3 hover:bg-neutral-50"
            onClick={() => {
              setLangOpen(false);
              setWorkspaceOpen((open) => !open);
            }}
            aria-haspopup="listbox"
            aria-expanded={workspaceOpen}
          >
            <FeatherDatabase className="text-heading-3 font-heading-3 text-default-font" />
            <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
              {workspace}
            </span>
            <FeatherChevronDown
              className={`text-body font-body text-subtext-color ${workspaceOpen ? "rotate-180" : ""}`}
            />
          </button>
          <span className="text-body font-body text-default-font">Workspace</span>
          {workspaceOpen ? (
            <div className="absolute right-0 top-full z-50 mt-1 flex w-[280px] flex-col gap-1 rounded-md border border-solid border-neutral-border bg-default-background p-1 shadow-lg">
              {WORKSPACES.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left hover:bg-neutral-50 ${
                    workspace === item.name ? "bg-brand-50" : ""
                  }`}
                  onClick={() => selectWorkspace(item.name)}
                >
                  <FeatherDatabase className="text-heading-3 font-heading-3 text-subtext-color" />
                  <span className="flex grow flex-col items-start">
                    <span className="w-full truncate text-body font-body text-default-font">
                      {item.name}
                    </span>
                    <span className="w-full truncate text-caption font-caption text-subtext-color">
                      {item.location}
                    </span>
                  </span>
                  {workspace === item.name ? (
                    <FeatherCheck className="text-heading-3 font-heading-3 text-link" />
                  ) : null}
                </button>
              ))}
              <div className="h-px w-full bg-neutral-border" />
              <button
                type="button"
                className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-left hover:bg-neutral-50"
                onClick={() => window.location.assign("/ui/ui-02-2-create-workspace")}
              >
                <FeatherPlus className="text-heading-3 font-heading-3 text-link" />
                <span className="text-body-bold font-body-bold text-link">
                  Create new workspace
                </span>
              </button>
            </div>
          ) : null}
        </div>

        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border mobile:hidden" />

        <div className="relative">
          <button
            type="button"
            className="flex h-9 flex-none items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 shadow-md hover:bg-neutral-50"
            onClick={() => {
              setWorkspaceOpen(false);
              setLangOpen((open) => !open);
            }}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label="Language"
          >
            <FeatherGlobe className="text-body font-body text-subtext-color" />
            <span className="text-body-bold font-body-bold text-default-font">{lang}</span>
            <FeatherChevronDown
              className={`text-body font-body text-subtext-color ${langOpen ? "rotate-180" : ""}`}
            />
          </button>
          {langOpen ? (
            <div className="absolute right-0 top-full z-50 mt-1 flex w-[220px] flex-col rounded-md border border-solid border-neutral-border bg-default-background py-1 shadow-lg">
              {LANGUAGES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-neutral-50 ${
                    lang === item.code ? "bg-brand-50" : ""
                  }`}
                  onClick={() => selectLanguage(item.code, item.lang)}
                >
                  <span className="grow text-body font-body text-default-font">{item.label}</span>
                  <span className="text-caption font-caption text-subtext-color">{item.code}</span>
                  {lang === item.code ? (
                    <FeatherCheck className="h-4 w-4 flex-none text-body font-body text-brand-primary" />
                  ) : (
                    <div className="h-4 w-4 flex-none" />
                  )}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <IconButton
          icon={<FeatherHelpCircle />}
          aria-label="Help"
          onClick={() => window.location.assign("/ui/ui-35-help-documentation-system")}
        />
        <IconButton
          icon={dark ? <FeatherSun /> : <FeatherMoon />}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          onClick={toggleTheme}
        />
        <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font mobile:hidden">
          Elena Gómez
        </span>
        <Badge className="mobile:hidden" variant="neutral">
          {ROLE_LABELS[role] ?? "Superadmin"}
        </Badge>
        <Avatar variant="neutral" image="">
          EG
        </Avatar>
      </div>

      {workspaceOpen || langOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default"
          aria-hidden="true"
          tabIndex={-1}
          onClick={closeMenus}
        />
      ) : null}
    </header>
  );
}
