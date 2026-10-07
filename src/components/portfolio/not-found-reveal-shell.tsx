"use client";

import { useCallback, useState, type ReactNode } from "react";
import { NotionNotFoundIntro } from "./notion-not-found-intro";
import { ProfileIdentity } from "./site-header";
import { usePrefersReducedMotion } from "./use-typewriter";

const linkClass =
  "text-neutral-900 underline decoration-neutral-300/55 underline-offset-[3px] hover:decoration-neutral-400/65";

export function NotFoundRevealShell({
  children,
}: Readonly<{ children: ReactNode }>) {
  const reduced = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(reduced);
  const handleReveal = useCallback(() => setRevealed(true), []);

  return (
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-inter)] text-neutral-900">
      <div className="mx-auto w-full max-w-[620px] px-6 pt-20 pb-44">
        <header>
          <ProfileIdentity />
          {!revealed && <NotionNotFoundIntro onReveal={handleReveal} />}
        </header>

        {revealed && (
          <main className="proto-heavy-up mt-12 space-y-4">{children}</main>
        )}
      </div>
    </div>
  );
}

export { linkClass };
