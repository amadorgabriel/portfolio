"use client";

import { FileQuestion, Home } from "lucide-react";
import { NotionSlashIntro } from "./notion-slash-intro";

const COMMAND = "/not-found";

export function NotionNotFoundIntro({
  onReveal,
}: Readonly<{ onReveal: () => void }>) {
  return (
    <NotionSlashIntro
      command={COMMAND}
      selectedMatch="not-found"
      onReveal={onReveal}
      menuItems={[
        {
          icon: FileQuestion,
          label: "Not found",
          hint: "Page",
          match: "not-found",
        },
        { icon: Home, label: "Home", hint: "", match: "home" },
      ]}
    />
  );
}
