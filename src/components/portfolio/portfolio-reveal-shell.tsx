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
  const { showIntro, handleReveal } = usePortfolioIntro();

  return (
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-inter)] text-neutral-900">
      <div className="mx-auto w-full max-w-[620px] px-6 pt-20 pb-44">
        <header>
          <div className="relative">
            <ProfileIdentity header={profileHeader} />
            {showIntro && (
              <div className="absolute inset-x-0 top-full z-20 bg-white">
                <NotionCommandIntro onReveal={handleReveal} />
              </div>
            )}
          </div>
          <div className="proto-heavy-up">
            <SiteNav active={tab} onChange={setTab} />
          </div>
        </header>

        <main key={tab} className="mt-12">
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
      </div>
    </div>
  );
}
