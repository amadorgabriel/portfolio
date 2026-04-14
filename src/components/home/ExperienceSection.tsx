import type { HomeExperience } from "@/types/home-content";
import {
  diffExperienceYearsMonths,
  formatExperienceMonthYear,
  parseExperienceDate,
} from "@/lib/experience-dates";
import { SectionCard } from "./SectionCard";

type ExperienceSectionProps = {
  title: string;
  locale: string;
  experiences: HomeExperience[];
  currentLabel: string;
  formatDuration: (years: number, months: number) => string;
};

export function ExperienceSection({
  title,
  locale,
  experiences,
  currentLabel,
  formatDuration,
}: ExperienceSectionProps) {
  const now = new Date();

  return (
    <SectionCard title={title} titleClassName="mb-3">
      {experiences.map((job, index) => {
        const start = parseExperienceDate(job.startDate);
        const end = job.endDate === null ? now : parseExperienceDate(job.endDate);
        const { years, months } = diffExperienceYearsMonths(start, end);
        const startLabel = formatExperienceMonthYear(start, locale);
        const endLabel =
          job.endDate === null
            ? currentLabel
            : formatExperienceMonthYear(end, locale);
        const periodLine = `${startLabel} - ${endLabel} (${formatDuration(years, months)})`;
        const isLast = index === experiences.length - 1;
        const companyDisplay = `@${job.company}`;
        const linkTitle = job.companyLinkTitle.trim() || undefined;

        return (
          <article
            key={`${job.startDate}-${job.companyUrl}`}
            className={isLast ? "" : "mb-8"}
          >
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {job.role}{" "}
              <a
                href={job.companyUrl}
                target="_blank"
                title={linkTitle}
                className="hover:underline text-yellow-500 hover:text-yellow-700 italic"
                rel="noopener noreferrer"
              >
                {companyDisplay}
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">{periodLine}</p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              {job.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </SectionCard>
  );
}
