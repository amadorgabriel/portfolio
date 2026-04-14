import type React from "react";

type SectionCardProps = {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
};

export function SectionCard({
  title,
  titleClassName = "pb-3",
  children,
}: SectionCardProps) {
  return (
    <section className="bg-white rounded-lg p-8">
      <h2 className={`${titleClassName} font-bold text-yellow-500`}>{title}</h2>
      {children}
    </section>
  );
}
