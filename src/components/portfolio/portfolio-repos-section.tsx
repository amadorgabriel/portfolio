import { fetchPortfolioProjects } from "@/lib/github/repos";
import { GitHubRepoListItem } from "./github-repo-list-item";
import { ReposSectionEmpty } from "./repos-section-ui";

export async function PortfolioReposSection({
  enterHeavy = false,
}: Readonly<{ enterHeavy?: boolean }>) {
  const repos = await fetchPortfolioProjects();

  if (repos.length === 0) {
    return (
      <ReposSectionEmpty message='No public repositories tagged with "portfolio" yet.' />
    );
  }

  return (
    <ul className="space-y-5">
      {repos.map((repo, i) => (
        <GitHubRepoListItem
          key={repo.id}
          repo={repo}
          className={enterHeavy ? "proto-heavy-section" : "proto-fade-up"}
          style={{
            animationDelay: enterHeavy ? `${100 + i * 100}ms` : `${i * 50}ms`,
          }}
        />
      ))}
    </ul>
  );
}
