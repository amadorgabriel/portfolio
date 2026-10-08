"use client";

import { profile } from "@/lib/portfolio-data";
import type { ProfileHeader } from "@/lib/github/user-profile";
import type { SectionId } from "./use-section-tab";

const tabs: { id: SectionId; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
];

export function ProfileIdentity({
  header,
}: Readonly<{ header?: ProfileHeader }>) {
  const name = header?.name ?? profile.displayName;
  const subtitle =
    header?.subtitle ?? `${profile.role} · ${profile.location}`;

  return (
    <div className="flex items-center gap-3.5">
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="cursor-pointer rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
        aria-label="Refresh page"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- fixed 80px avatar; skip the image optimizer srcset */}
        <img
          src="/profile-avatar.png"
          width={40}
          height={40}
          alt={name}
          fetchPriority="high"
          decoding="async"
          className="h-10 w-10 rounded-full bg-neutral-100 object-cover"
        />
      </button>
      <div>
        <h1 className="text-[16px] font-semibold tracking-[-0.01em]">{name}</h1>
        <p className="text-[14px] text-neutral-500">{subtitle}</p>
      </div>
    </div>
  );
}

export function SiteNav({
  active,
  onChange,
  className = "",
}: Readonly<{
  active: SectionId;
  onChange: (id: SectionId) => void;
  className?: string;
}>) {
  return (
    <nav
      className={`mt-7 flex items-center gap-5 text-[14px] ${className}`}
      aria-label="Sections"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          {...(active === tab.id ? { "aria-current": "true" as const } : {})}
          className={`cursor-pointer underline-offset-4 transition-colors ${
            active === tab.id
              ? "font-medium text-neutral-900 underline decoration-neutral-300/60"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export function SiteHeader({
  active,
  onChange,
}: Readonly<{
  active: SectionId;
  onChange: (id: SectionId) => void;
}>) {
  return (
    <header>
      <ProfileIdentity />
      <SiteNav active={active} onChange={onChange} />
    </header>
  );
}
