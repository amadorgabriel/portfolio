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
    <div className="relative mt-8">
      <div className="relative max-w-[280px]">
        <div className="min-h-[36px] px-0.5 py-1.5">
          {typed.length === 0 && phase === "block" ? (
            <p className="text-[14px] text-neutral-500">
              Type &apos;/&apos; for commands…
            </p>
          ) : (
            <p className="text-[14px] text-neutral-800">
              {typed}
              {!complete && phase === "typing" ? (
                <span className="proto-cursor ml-0.5 inline-block h-[1em] w-px translate-y-[1px] bg-neutral-800" />
              ) : null}
            </p>
          )}
        </div>

        {showMenu ? (
          <ul
            className="mt-0.5 overflow-hidden rounded-md border border-neutral-200/90 bg-white py-0.5 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
            style={{ transformOrigin: "top left" }}
          >
            {visibleItems.map((item) => {
              const Icon = item.icon;
              const isPrimary = item.match === selectedMatch;
              const active = selected && isPrimary;
              const isDecoy = !isPrimary;
              return (
                <li
                  key={item.match}
                  className={`flex items-center gap-2 px-2 ${
                    isDecoy ? "h-6 text-[12px]" : "h-7 text-[13px]"
                  } transition-colors duration-150 ease-out ${
                    active
                      ? "bg-neutral-100 text-neutral-900"
                      : isDecoy
                        ? "text-neutral-400"
                        : "text-neutral-600"
                  }`}
                >
                  {isDecoy ? (
                    <span className="w-[14px] shrink-0" aria-hidden />
                  ) : (
                    <Icon size={14} className="shrink-0 text-neutral-500" />
                  )}
                  <span className={isPrimary && !active ? "font-medium" : ""}>
                    {item.label}
                  </span>
                  {item.hint && isPrimary ? (
                    <span className="ml-auto text-[11px] text-neutral-400">
                      {item.hint}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
