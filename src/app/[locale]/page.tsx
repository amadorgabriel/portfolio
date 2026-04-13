import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();

  const formatDuration = (years: number, months: number): string => {
    if (years === 0) {
      return t("experience.durations.months", { months });
    }
    if (months === 0) {
      return t("experience.durations.years", { years });
    }
    return t("experience.durations.yearsAndMonths", { years, months });
  };

  return (
    <div className="max-w-[900px] w-full grid gap-8 grid-cols-1 lg:grid-cols-9 mt-40 mx-6 ">
      <div className="lg:col-span-3">
        <div className="sticky top-16 flex flex-col text-center items-center space-y-2">
          <div className="group w-38 h-38 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full[backface-visibility:hidden]">
                <Image
                  width={152}
                  height={152}
                  src="/profile.jpg"
                  alt={t("profile.photoAlt")}
                  className="rounded-full aspect-square object-cover"
                />
              </div>

              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image
                  width={152}
                  height={152}
                  src="/notion-face.png"
                  alt={t("profile.avatarAlt")}
                  className="rounded-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl">{t("profile.name")}</h1>

            <h2 className="text-yellow-500 text-xs font-semibold uppercase">
              {t("profile.role")}
            </h2>

            <p className="text-xs text-slate-500">{t("profile.location")}</p>

            <div className="flex flex-col justify-center items-center lg:items-start space-y-2 mt-6">
              <a
                href="https://github.com/amadorgabriel"
                target="_blank"
                title={t("social.githubTitle")}
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                <p>{t("social.github")}</p>
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-rodrigues-amador/"
                target="_blank"
                title={t("social.linkedinTitle")}
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                <p>{t("social.linkedin")}</p>
              </a>
              <a
                href="https://www.goodreads.com/user/show/131404275-gabriel-amador"
                target="_blank"
                title={t("social.readingTitle")}
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <BookOpen size={18} />
                <p>{t("social.reading")}</p>
              </a>
              <a
                href="mailto:gabrielramador2014@gmail.com"
                target="_blank"
                title={t("social.emailTitle")}
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noreferrer"
              >
                <Mail size={18} />
                <p>{t("social.email")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 h-min space-y-4">
        <section className="bg-white rounded-lg p-8">
          <h2 className="pb-3 font-bold text-yellow-500">{t("sections.about")}</h2>
          <p className="pb-2">
            <span
              dangerouslySetInnerHTML={{
                __html: t.raw("about.paragraph1"),
              }}
            />
          </p>
          <p>{t("about.paragraph2")}</p>
        </section>

        <section className="bg-white rounded-lg p-8">
          <h2 className="mb-3 font-bold text-yellow-500">
            {t("sections.experience")}
          </h2>

          <article className="mb-8">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {t("experience.etiquetaCerta.role")}{" "}
              <a
                href="https://www.linkedin.com/company/etiqueta-certa/"
                target="_blank"
                className="hover:underline text-yellow-500 hover:text-yellow-700 italic"
                rel="noopener noreferrer"
              >
                {t("experience.etiquetaCerta.company")}
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              JUN 2023 - {t("experience.current")} ({formatDuration(2, 2)})
            </p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>{t("experience.etiquetaCerta.achievements.0")}</li>
              <li>{t("experience.etiquetaCerta.achievements.1")}</li>
              <li>{t("experience.etiquetaCerta.achievements.2")}</li>
              <li>{t("experience.etiquetaCerta.achievements.3")}</li>
            </ul>
          </article>

          <article className="mb-8">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {t("experience.istic.role")}{" "}
              <a
                href="https://www.linkedin.com/showcase/istic/"
                target="_blank"
                title={t("experience.istic.companyTitle")}
                className="hover:underline text-yellow-500 hover:text-yellow-700 italic"
                rel="noopener noreferrer"
              >
                {t("experience.istic.company")}
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              NOV 2021 - MAI 2023 ({formatDuration(1, 7)})
            </p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>{t("experience.istic.achievements.0")}</li>
              <li>{t("experience.istic.achievements.1")}</li>
              <li>{t("experience.istic.achievements.2")}</li>
            </ul>
          </article>

          <article>
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {t("experience.intelitrader.role")}{" "}
              <a
                href="https://www.linkedin.com/company/intelitrader"
                target="_blank"
                className="hover:underline text-yellow-500 hover:text-yellow-700 italic"
                rel="noopener noreferrer"
              >
                {t("experience.intelitrader.company")}
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              SET 2021 - OUT 2021 ({formatDuration(0, 2)})
            </p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>{t("experience.intelitrader.achievements.0")}</li>
              <li>{t("experience.intelitrader.achievements.1")}</li>
            </ul>
          </article>
        </section>

        <section className="bg-white rounded-lg p-8">
          <h2 className="pb-3 font-bold text-yellow-500">
            {t("sections.education")}
          </h2>

          <article className="pb-4">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {t("education.uninove.degree")}
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              {t("education.uninove.institution")}{" "}
              <a
                href="https://www.uninove.br/"
                target="_blank"
                className="hover:underline italic"
                rel="noopener noreferrer"
              >
                {t("education.uninove.uninoveHandle")}
              </a>
            </p>
          </article>

          <article className="pb-4">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {t("education.senaiMultimedia.degree")}
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              {t("education.senaiMultimedia.institution")}{" "}
              <a
                href="https://www.sp.senai.br/"
                target="_blank"
                className="hover:underline italic"
                rel="noopener noreferrer"
              >
                {t("education.senaiMultimedia.senaiHandle")}
              </a>
            </p>
          </article>

          <article>
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              {t("education.senaiDev.degree")}
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              {t("education.senaiDev.institution")}{" "}
              <a
                href="https://www.sp.senai.br/"
                target="_blank"
                className="hover:underline italic"
                rel="noopener noreferrer"
              >
                {t("education.senaiDev.senaiHandle")}
              </a>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
