import homeContent from "../../public/assets/content/home/en-US.json";
import { LINKEDIN_PROFILE_URL } from "@/lib/profile-links";
import messages from "@/messages/en-US.json";

export const profile = {
  name: messages.profile.name,
  role: messages.profile.role,
  location: messages.profile.location,
  email: "amadorgabriel.dev@gmail.com",
  resume: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/amadorgabriel" },
    { label: "LinkedIn", href: LINKEDIN_PROFILE_URL },
    { label: "Twitter", href: "https://x.com/_amadorgabriel_" },
    { label: "Email", href: "mailto:amadorgabriel.dev@gmail.com" },
  ],
};

export type WorkItem = {
  title: string;
  href: string;
  period: string;
};

export const work: WorkItem[] = [
  {
    title: "Mid Frontend / Fullstack Engineer to Spott",
    href: "https://www.spott.eco/",
    period: "2026",
  },
  {
    title: "Mid Frontend Engineer to Etiqueta",
    href: "https://home.etiquetacerta.com/pt",
    period: "2023 – 2026",
  },
  {
    title: "Junior Frontend Engineer to Senai",
    href: "https://www.sp.senai.br/",
    period: "2021 – 2023",
  },
  {
    title: "Junior Frontend Engineer to Intelitrader",
    href: "https://www.intelitrader.com.br/",
    period: "2021",
  },
];

export const education = homeContent.education.map((item) => ({
  degree: item.degree,
  institution: `${item.institution.replace(/\s*-$/, "").trim()} ${item.link.label}`,
}));

