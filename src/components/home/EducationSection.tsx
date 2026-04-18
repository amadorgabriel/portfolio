import type { HomeEducationItem } from "@/types/home-content";
import { SectionCard } from "./SectionCard";

type EducationSectionProps = {
  title: string;
  items: HomeEducationItem[];
};

export function EducationSection({ title, items }: EducationSectionProps) {
  return (
    <SectionCard title={title}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <article key={`${item.degree}-${index}`} className={isLast ? "" : "pb-4"}>
            <h3 className="text-[1.12rem] text-slate-900">{item.degree}</h3>
            <p className="text-sm text-slate-500 mb-2">
              {item.institution}{" "}
              {item.link ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  className="hover:underline italic"
                  rel="noopener noreferrer"
                >
                  {item.link.label}
                </a>
              ) : null}
            </p>
          </article>
        );
      })}
    </SectionCard>
  );
}
