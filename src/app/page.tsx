import { Suspense } from "react";
import { AboutSection } from "@/components/portfolio/about-section";
import { PinnedReposSection } from "@/components/portfolio/pinned-repos-section";
import { PortfolioRevealShell } from "@/components/portfolio/portfolio-reveal-shell";
import { PortfolioReposSection } from "@/components/portfolio/portfolio-repos-section";
import { ReposSectionLoading } from "@/components/portfolio/repos-section-ui";
import { staticProfileHeader } from "@/lib/github/user-profile";
import { SITE_DESCRIPTION } from "@/lib/site";

const sectionClass =
  "border-t border-neutral-200 pt-10 first:border-0 first:pt-0";

export default function Home() {
  return (
    <>
      <p className="sr-only">{SITE_DESCRIPTION}</p>
      <PortfolioRevealShell
        profileHeader={staticProfileHeader}
        favoritesMode="star-label"
        workLayout="lines"
        aboutSection={
        <Suspense fallback={<ReposSectionLoading label="Loading about…" />}>
          <AboutSection sectionClass={sectionClass} />
        </Suspense>
      }
      pinnedSection={
        <Suspense
          fallback={
            <ReposSectionLoading label="Loading pinned repositories…" />
          }
        >
          <PinnedReposSection sectionClass={sectionClass} />
        </Suspense>
      }
      projectsSection={
        <Suspense fallback={<ReposSectionLoading label="Loading projects…" />}>
          <PortfolioReposSection enterHeavy />
        </Suspense>
      }
    />
    </>
  );
}
