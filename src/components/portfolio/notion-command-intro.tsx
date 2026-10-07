"use client";

import { Briefcase, LayoutGrid } from "lucide-react";
import { NotionSlashIntro } from "./notion-slash-intro";

const COMMAND = "/portfolio";

export function NotionCommandIntro({
  onReveal,
}: Readonly<{ onReveal: () => void }>) {
  return (
    <NotionSlashIntro
      command={COMMAND}
      selectedMatch="portfolio"
      onReveal={onReveal}
      menuItems={[
        { icon: Briefcase, label: "Portfolio", hint: "Page", match: "portfolio" },
        { icon: LayoutGrid, label: "Projects grid", hint: "", match: "projects" },
      ]}
    />
  );
}
