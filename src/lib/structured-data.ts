import { education, profile, work } from "@/lib/portfolio-data";
import { LINKEDIN_PROFILE_URL } from "@/lib/profile-links";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const profilePageId = `${SITE_URL}/#profilepage`;

export function buildStructuredDataGraph() {
  const sameAs = [
    "https://github.com/amadorgabriel",
    LINKEDIN_PROFILE_URL,
    "https://x.com/_amadorgabriel_",
  ];

  const person: Record<string, unknown> = {
    "@type": "Person",
    "@id": personId,
    name: SITE_NAME,
    givenName: "Gabriel",
    familyName: "Rodrigues Amador",
    jobTitle: "Frontend & Fullstack Engineer",
    description: SITE_OG_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressCountry: "BR",
    },
    sameAs,
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Frontend Architecture",
      "Web Performance",
      "Node.js",
    ],
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
  };

  if (work[0]) {
    person.worksFor = {
      "@type": "Organization",
      name: "Spott",
      url: work[0].href,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        inLanguage: "en-US",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: SITE_URL,
        name: `${SITE_NAME} · Portfolio`,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        inLanguage: "en-US",
      },
    ],
  };
}
