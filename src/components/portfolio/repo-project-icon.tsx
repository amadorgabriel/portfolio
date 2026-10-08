"use client";

import { useState } from "react";
import type { GitHubRepository } from "@/lib/github/types";
import { GitHubRepoIcon } from "./github-repo-icon";

export function RepoProjectIcon({
  repo,
  tileClassName,
  letterClassName,
}: Readonly<{
  repo: GitHubRepository;
  tileClassName: string;
  letterClassName?: string;
}>) {
  const [usePlaceholder, setUsePlaceholder] = useState(!repo.iconUrl);

  if (usePlaceholder || !repo.iconUrl) {
    return (
      <GitHubRepoIcon
        repo={repo}
        tileClassName={tileClassName}
        letterClassName={letterClassName}
      />
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-white ${tileClassName}`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- raw GitHub asset URLs */}
      <img
        src={repo.iconUrl}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
