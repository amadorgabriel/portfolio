import { getTranslations } from "next-intl/server";
import { AboutSection } from "@/components/home/AboutSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProfileSidebar } from "@/components/home/ProfileSidebar";
import { formatExperienceDuration } from "@/lib/format-experience-duration";
import { getHomeContent } from "@/lib/home-content";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const content = getHomeContent(locale);

  const tProfile = await getTranslations({ locale, namespace: "profile" });
  const tSocial = await getTranslations({ locale, namespace: "social" });
  const tExperience = await getTranslations({ locale, namespace: "experience" });

  const formatDuration = (years: number, months: number) =>
    formatExperienceDuration(
      (key, values) => tExperience(key, values),
      years,
      months,
    );

  return (
    <div className="max-w-[900px] w-full grid gap-8 grid-cols-1 lg:grid-cols-9 mt-40 mx-6 ">
      <ProfileSidebar
        locale={locale}
        profile={{
          name: tProfile("name"),
          role: tProfile("role"),
          location: tProfile("location"),
          photoAlt: tProfile("photoAlt"),
          avatarAlt: tProfile("avatarAlt"),
        }}
        social={{
          github: tSocial("github"),
          githubTitle: tSocial("githubTitle"),
          linkedin: tSocial("linkedin"),
          linkedinTitle: tSocial("linkedinTitle"),
          reading: tSocial("reading"),
          readingTitle: tSocial("readingTitle"),
          email: tSocial("email"),
          emailTitle: tSocial("emailTitle"),
        }}
      />

      <div className="lg:col-span-6 h-min space-y-4">
        <AboutSection content={content.about} title={content.sections.about} />
        <ExperienceSection
          title={content.sections.experience}
          locale={locale}
          experiences={content.experiences}
          currentLabel={tExperience("current")}
          formatDuration={formatDuration}
        />
        <EducationSection title={content.sections.education} items={content.education} />
      </div>
    </div>
  );
}
