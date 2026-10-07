import { Pin } from "lucide-react";
import { fetchPinnedRepositories } from "@/lib/github/repos";
import { GitHubRepoListItem } from "./github-repo-list-item";
import { ReposSectionEmpty } from "./repos-section-ui";

const sectionLabelClass = "text-[13px] font-normal text-neutral-400/70";

function PinnedHeading() {
  return (
    <h2 className={`${sectionLabelClass} flex items-center gap-1.5`}>
      Pinned
      <Pin size={13} strokeWidth={1.5} className="text-neutral-400/80" aria-hidden />
    </h2>
  );
}

export async function PinnedReposSection({
  sectionClass,
}: Readonly<{ sectionClass: string }>) {
  const repos = await fetchPinnedRepositories();

  if (repos.length === 0) {
    return (
      <section className={`mt-12 ${sectionClass}`}>
        <PinnedHeading />
        <ReposSectionEmpty message="No pinned repositories on GitHub yet." />
      </section>
    );
  }

  return (
    <section className={`mt-12 ${sectionClass}`}>
      <PinnedHeading />
      <ul className="mt-4 space-y-5">
        {repos.map((repo) => (
          <GitHubRepoListItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
}
