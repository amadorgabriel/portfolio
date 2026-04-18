import type { HomeContent } from "@/types/home-content";
import { SectionCard } from "./SectionCard";

type AboutSectionProps = {
  content: HomeContent["about"];
  title: string;
};

function aboutParagraphHtml(raw: string) {
  return raw
    .replace(/<bold>/g, "<strong>")
    .replace(/<\/bold>/g, "</strong>");
}

export function AboutSection({ content, title }: AboutSectionProps) {
  return (
    <SectionCard title={title}>
      <p className="pb-2">
        <span
          dangerouslySetInnerHTML={{
            __html: aboutParagraphHtml(content.paragraph1),
          }}
        />
      </p>
      <p>{content.paragraph2}</p>
    </SectionCard>
  );
}
