import { LINKEDIN_PROFILE_URL } from "@/lib/profile-links";

export const profile = {
  name: "Gabriel Rodrigues Amador",
  displayName: "Gabriel Rodrigues",
  role: "Fullstack Engineer ReactJs .NET",
  location: "São Paulo, Brazil",
  email: "amadorgabriel.dev@gmail.com",
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
    title: "Mid Frontend / Fullstack Engineer at Spott",
    href: "https://www.spott.eco/",
    period: "2026",
  },
  {
    title: "Mid Frontend Engineer at Etiqueta",
    href: "https://home.etiquetacerta.com/pt",
    period: "2023 - 2026",
  },
  {
    title: "Junior Frontend Engineer at Senai",
    href: "https://www.sp.senai.br/",
    period: "2021 - 2023",
  },
  {
    title: "Junior Frontend Engineer at Intelitrader",
    href: "https://www.intelitrader.com.br/",
    period: "2021",
  },
];

export const education = [
  {
    degree: "Bachelor's in Systems Analysis and Development",
    institution: "Nove de Julho Educational Association @UNINOVE",
  },
  {
    degree: "Multimedia Technician - Digital Media Communication",
    institution: "Information Technology School @SENAI",
  },
  {
    degree: "Systems Development Technician",
    institution: "Information Technology School @SENAI",
  },
];

