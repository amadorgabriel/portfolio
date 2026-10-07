"use client";

import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion, useTypewriter } from "./use-typewriter";

export type SlashMenuItem = {
  icon: LucideIcon;
  label: string;
  hint?: string;
  match: string;
};

type Phase = "block" | "typing" | "selecting";

export function NotionSlashIntro({
  command,
  menuItems,
  selectedMatch,
  onReveal,
}: Readonly<{
  command: string;
  menuItems: SlashMenuItem[];
  selectedMatch: string;
  onReveal: () => void;
}>) {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>(reduced ? "selecting" : "block");
  const [selected, setSelected] = useState(reduced);
  const typingEnabled = phase === "typing" || phase === "selecting";
  const { typed, complete } = useTypewriter(
    command,
    72,
    220,
    typingEnabled && !reduced,
  );

  useEffect(() => {
    if (reduced) onReveal();
  }, [reduced, onReveal]);

  useEffect(() => {
    if (phase !== "block") return;
    const start = setTimeout(() => setPhase("typing"), 420);
    return () => clearTimeout(start);
  }, [phase]);

  useEffect(() => {
    if (!complete || phase !== "typing") return;
    setPhase("selecting");
  }, [complete, phase]);

  useEffect(() => {
    if (phase !== "selecting" || reduced) return;
    const pick = setTimeout(() => setSelected(true), 280);
    const reveal = setTimeout(onReveal, 820);
    return () => {
      clearTimeout(pick);
      clearTimeout(reveal);
    };
  }, [phase, reduced, onReveal]);

  const showMenu = typed.length >= 2 && phase !== "block";
  const query = typed.slice(1).toLowerCase();
  const visibleItems = menuItems.filter(
    (item) => !query || item.match.startsWith(query),
  );

  if (reduced) return null;

  return (
    <div className="relative mt-8 min-h-[min(28vh,220px)]">
      <div className="relative max-w-[360px]">
        <div className="min-h-[44px] rounded-md px-1 py-2">
          {typed.length === 0 && phase === "block" && (
            <p className="text-[15px] text-neutral-400">
              Type &apos;/&apos; for commands…
            </p>
          )}
          {(typed.length > 0 || phase !== "block") && (
            <p className="text-[15px] text-neutral-800">
              {typed}
              {!complete && phase === "typing" && (
                <span className="proto-cursor ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-neutral-800" />
              )}
            </p>
          )}
        </div>

        {showMenu && (
          <ul className="mt-1 overflow-hidden rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              const isPrimary = item.match === selectedMatch;
              const active = selected && isPrimary;
              return (
                <li
                  key={item.match}
                  className={`flex items-center gap-3 px-3 py-2 text-[14px] transition-colors ${
                    active
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-500"
                  }`}
                >
                  <Icon size={16} className="shrink-0 text-neutral-400" />
                  <span className={isPrimary ? "font-medium" : ""}>
                    {item.label}
                  </span>
                  {item.hint ? (
                    <span className="ml-auto text-[12px] text-neutral-400">
                      {item.hint}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
