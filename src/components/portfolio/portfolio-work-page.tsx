import type { ReactNode } from "react";
import { education, profile, work } from "@/lib/portfolio-data";
import { WorkExperienceList } from "./work-experience-list";

const sectionLabelClass = "text-[13px] font-normal text-neutral-600";
const metaTextClass =
  "shrink-0 text-[13px] font-light tabular-nums text-neutral-600";
const linkHoverClass =
  "underline-offset-[3px] decoration-neutral-300/55 hover:underline hover:decoration-neutral-400/65";

type Layout = "quiet" | "lines";
export type FavoritesMode = "star-label" | "inline-star" | "icon-shelf";

function heavySectionProps(
  enterHeavy: boolean,
  index: number,
  baseClass = "",
) {
  if (!enterHeavy) return baseClass ? { className: baseClass } : {};
  return {
    className: `${baseClass} proto-heavy-section`.trim(),
    style: { animationDelay: `${120 + index * 85}ms` },
  };
}

export function WorkTabContent({
  layout,
  enterHeavy = false,
  aboutSection,
  pinnedSection,
}: Readonly<{
  layout: Layout;
  favoritesMode?: FavoritesMode;
  enterHeavy?: boolean;
  aboutSection: ReactNode;
  pinnedSection: ReactNode;
}>) {
  const sectionClass =
    layout === "lines" ? "border-t border-neutral-200 pt-10 first:border-0 first:pt-0" : "";

  return (
    <div className={layout === "lines" ? "space-y-0" : ""}>
      <div {...heavySectionProps(enterHeavy, 0, sectionClass)}>
        {aboutSection}
      </div>

      <div {...heavySectionProps(enterHeavy, 1)}>{pinnedSection}</div>

      <section {...heavySectionProps(enterHeavy, 2, `mt-12 ${sectionClass}`)}>
        <h2 className={sectionLabelClass}>Work</h2>
        <WorkExperienceList jobs={work} />
      </section>

      <section {...heavySectionProps(enterHeavy, 3, `mt-12 ${sectionClass}`)}>
        <h2 className={sectionLabelClass}>Education</h2>
        <ul className="mt-4 space-y-4">
          {education.map((item) => (
            <li key={item.degree}>
              <p className="text-[15px] leading-relaxed text-neutral-900">{item.degree}</p>
              <p className={`mt-0.5 ${metaTextClass}`}>{item.institution}</p>
            </li>
          ))}
        </ul>
      </section>

      <section {...heavySectionProps(enterHeavy, 4, `mt-12 ${sectionClass}`)}>
        <h2 className={sectionLabelClass}>Contact</h2>
        <a
          href={`mailto:${profile.email}`}
          className={`mt-4 inline-block text-[15px] font-medium ${linkHoverClass}`}
        >
          {profile.email}
        </a>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-neutral-500">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkHoverClass} hover:text-neutral-800`}
            >
              {social.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
