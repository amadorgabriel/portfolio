"use client";

import { type ReactNode } from "react";
import { ProfileIdentity, SiteNav } from "./site-header";
import { NotionCommandIntro } from "./notion-command-intro";
import { useSectionTab } from "./use-section-tab";
import { usePortfolioIntro } from "./use-portfolio-intro";
import type { ProfileHeader } from "@/lib/github/user-profile";
import { WorkTabContent, type FavoritesMode } from "./portfolio-work-page";

export function PortfolioRevealShell({
  favoritesMode,
  workLayout = "lines",
  profileHeader,
  aboutSection,
  pinnedSection,
  projectsSection,
}: Readonly<{
  favoritesMode: FavoritesMode;
  workLayout?: "quiet" | "lines";
  profileHeader: ProfileHeader;
  aboutSection: ReactNode;
  pinnedSection: ReactNode;
  projectsSection: ReactNode;
}>) {
  const { tab, setTab } = useSectionTab();
  const { revealed, showIntro, handleReveal, checked } = usePortfolioIntro();

  return (
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-inter)] text-neutral-900">
      <div className="mx-auto w-full max-w-[620px] px-6 pt-20 pb-44">
        <header>
          <ProfileIdentity header={profileHeader} />
          {showIntro && <NotionCommandIntro onReveal={handleReveal} />}
          {checked && revealed && (
            <div className="proto-heavy-up" style={{ animationDelay: "0ms" }}>
              <SiteNav active={tab} onChange={setTab} />
            </div>
          )}
        </header>

        {checked && revealed && (
          <main key={tab} className="proto-heavy-up mt-12" style={{ animationDelay: "90ms" }}>
            {tab === "work" ? (
              <WorkTabContent
                layout={workLayout}
                favoritesMode={favoritesMode}
                enterHeavy
                aboutSection={aboutSection}
                pinnedSection={pinnedSection}
              />
            ) : (
              projectsSection
            )}
          </main>
        )}
      </div>
    </div>
  );
}
