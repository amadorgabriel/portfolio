import type { CSSProperties } from "react";
import type { GitHubRepository } from "@/lib/github/types";
import { repoYear } from "@/lib/github/repos";
import { RepoProjectIcon } from "./repo-project-icon";
import { RepoDescription } from "./repo-description";

const dateClass =
  "shrink-0 text-[13px] font-light tabular-nums text-neutral-600";
const linkGroupHoverClass =
  "underline-offset-[3px] decoration-neutral-300/55 group-hover:underline group-hover:decoration-neutral-400/65";

export function GitHubRepoListItem({
  repo,
  className = "",
  style,
}: Readonly<{
  repo: GitHubRepository;
  className?: string;
  style?: CSSProperties;
}>) {
  return (
    <li className={className} style={style}>
      <a
        href={repo.htmlUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4"
      >
        <RepoProjectIcon
          repo={repo}
          tileClassName="h-10 w-10 rounded-[12px] transition-transform duration-200 group-hover:-translate-y-0.5"
        />
        <div className="min-w-0 flex-1">
          <p className={`text-[15px] font-medium ${linkGroupHoverClass}`}>
            {repo.name}
          </p>
          <RepoDescription text={repo.description ?? "No description"} />
        </div>
        <span className={`ml-auto ${dateClass}`}>{repoYear(repo.pushedAt)}</span>
      </a>
    </li>
  );
}
