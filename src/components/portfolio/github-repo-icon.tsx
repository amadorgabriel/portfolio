import type { GitHubRepository } from "@/lib/github/types";

function fallbackTint(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return {
    backgroundColor: `hsl(${hue} 45% 92%)`,
    color: `hsl(${hue} 35% 38%)`,
  };
}

export function GitHubRepoIcon({
  repo,
  tileClassName,
  letterClassName = "text-[15px] font-semibold",
}: Readonly<{
  repo: GitHubRepository;
  tileClassName: string;
  letterClassName?: string;
}>) {
  const style = repo.languageColor
    ? {
        backgroundColor: `${repo.languageColor}22`,
        color: repo.languageColor,
      }
    : fallbackTint(repo.name);

  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center ${tileClassName}`}
      style={style}
    >
      <span className={letterClassName}>{repo.name.slice(0, 1).toUpperCase()}</span>
    </div>
  );
}
