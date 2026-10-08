import { fetchProfileReadmeMarkdown } from "@/lib/github/profile-readme";
import { AboutMarkdown } from "./about-markdown";
import { ReposSectionEmpty } from "./repos-section-ui";

const sectionLabelClass = "text-[13px] font-normal text-neutral-600";

export async function AboutSection({
  sectionClass = "",
}: Readonly<{ sectionClass?: string }>) {
  const markdown = await fetchProfileReadmeMarkdown();

  return (
    <section className={sectionClass}>
      <h2 className={sectionLabelClass}>About</h2>
      {!markdown ? (
        <ReposSectionEmpty message="Could not load the profile README from GitHub." />
      ) : (
        <AboutMarkdown markdown={markdown} />
      )}
    </section>
  );
}
