export type HomeExperience = {
  role: string;
  company: string;
  companyLinkTitle: string;
  companyUrl: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
};

export type HomeEducationItem = {
  degree: string;
  institution: string;
  link?: {
    href: string;
    label: string;
  };
};

export type HomeContent = {
  sections: {
    about: string;
    experience: string;
    education: string;
  };
  about: {
    paragraph1: string;
    paragraph2: string;
  };
  experiences: HomeExperience[];
  education: HomeEducationItem[];
};
