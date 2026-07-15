import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import Image from "next/image";

type ProfileSidebarProps = {
  locale: string;
  profile: {
    name: string;
    role: string;
    location: string;
    photoAlt: string;
    avatarAlt: string;
  };
  social: {
    github: string;
    githubTitle: string;
    linkedin: string;
    linkedinTitle: string;
    reading: string;
    readingTitle: string;
    email: string;
    emailTitle: string;
  };
};

const socialLinkClass =
  "w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200";

export function ProfileSidebar({ locale, profile, social }: ProfileSidebarProps) {
  return (
    <div className="lg:col-span-3">
      <div className="sticky top-16 flex flex-col text-center items-center space-y-2">
        <div className="group w-38 h-38 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <Image
                width={152}
                height={152}
                src="/profile.jpg"
                alt={profile.photoAlt}
                className="rounded-full aspect-square object-cover"
              />
            </div>

            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Image
                width={152}
                height={152}
                src="/notion-face.png"
                alt={profile.avatarAlt}
                className="rounded-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl">{profile.name}</h1>

          <h2 className="text-yellow-500 text-xs font-semibold uppercase">{profile.role}</h2>

          <p className="text-xs text-slate-500">{profile.location}</p>

          <div className="flex flex-col justify-center items-center lg:items-start space-y-2 mt-6">
            <a
              href="https://github.com/amadorgabriel"
              target="_blank"
              title={social.githubTitle}
              className={socialLinkClass}
              rel="noopener noreferrer"
            >
              <Github size={18} />
              <p>{social.github}</p>
            </a>
            <a
              href={`https://www.linkedin.com/in/amadorgabrieldev/?locale=${locale}`}
              target="_blank"
              title={social.linkedinTitle}
              className={socialLinkClass}
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              <p>{social.linkedin}</p>
            </a>
            <a
              href="https://www.goodreads.com/user/show/131404275-gabriel-amador"
              target="_blank"
              title={social.readingTitle}
              className={socialLinkClass}
              rel="noopener noreferrer"
            >
              <BookOpen size={18} />
              <p>{social.reading}</p>
            </a>
            <a
              href="mailto:amadorgabriel.dev@gmail.com"
              target="_blank"
              title={social.emailTitle}
              className={socialLinkClass}
              rel="noreferrer"
            >
              <Mail size={18} />
              <p>{social.email}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
