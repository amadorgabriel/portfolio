export type GitHubRepository = {
  id: string;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepageUrl: string | null;
  pushedAt: string;
  languageName: string | null;
  languageColor: string | null;
  defaultBranch: string;
  iconUrl: string | null;
};
