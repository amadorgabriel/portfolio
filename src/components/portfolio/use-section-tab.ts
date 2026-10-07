"use client";

import { useCallback, useEffect, useState } from "react";

export type SectionId = "work" | "projects";

const ids: readonly SectionId[] = ["work", "projects"];

export function useSectionTab() {
  const [tab, setTabState] = useState<SectionId>("work");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("section");
    if (ids.includes(param as SectionId)) setTabState(param as SectionId);
  }, []);

  const setTab = useCallback((next: SectionId) => {
    setTabState(next);
    const url = new URL(window.location.href);
    url.searchParams.set("section", next);
    window.history.replaceState(null, "", url);
  }, []);

  return { tab, setTab };
}
