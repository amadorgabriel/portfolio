"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import type { WorkItem } from "@/lib/portfolio-data";
import { faviconApiUrl, googleFaviconUrl } from "@/lib/site-favicon";
import { NotionSpinner } from "./notion-spinner";

const linkGroupHoverClass =
  "underline-offset-[3px] decoration-neutral-300/55 group-hover:underline group-hover:decoration-neutral-400/65";
const dateClass =
  "shrink-0 text-[13px] font-light tabular-nums text-neutral-600";

type HoverState = {
  href: string;
  x: number;
  y: number;
};

function FaviconPreview({ href }: Readonly<{ href: string }>) {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState(() => faviconApiUrl(href));
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUseFallback(false);
    setSrc(faviconApiUrl(href));
  }, [href]);

  const handleError = () => {
    if (!useFallback) {
      setUseFallback(true);
      setSrc(googleFaviconUrl(href));
      setLoading(true);
      return;
    }
    setLoading(false);
  };

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200/90 bg-white p-1.5 shadow-lg shadow-neutral-900/10">
      {loading ? (
        <NotionSpinner size={20} />
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element -- external favicon URLs vary by host */}
      <img
        key={`${href}-${useFallback ? "fb" : "api"}`}
        src={src}
        alt=""
        width={44}
        height={44}
        className={`h-full w-full object-contain ${loading ? "hidden" : "block"}`}
        onLoad={() => setLoading(false)}
        onError={handleError}
      />
    </div>
  );
}

export function WorkExperienceList({
  jobs,
  listClassName = "mt-3",
}: Readonly<{ jobs: WorkItem[]; listClassName?: string }>) {
  const [hover, setHover] = useState<HoverState | null>(null);

  const onMove = useCallback((event: MouseEvent, href: string) => {
    setHover({ href, x: event.clientX, y: event.clientY });
  }, []);

  const clearHover = useCallback(() => setHover(null), []);

  return (
    <>
      <ul className={listClassName}>
        {jobs.map((job, i) => (
          <li
            key={job.title}
            className="proto-fade-up"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <a
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-6 py-2.5"
              onMouseEnter={(e) => onMove(e, job.href)}
              onMouseMove={(e) => onMove(e, job.href)}
              onMouseLeave={clearHover}
            >
              <span className={`text-[15px] ${linkGroupHoverClass}`}>
                {job.title}
              </span>
              <span className={dateClass}>{job.period}</span>
            </a>
          </li>
        ))}
      </ul>

      {hover && typeof document !== "undefined"
        ? createPortal(
            <div
              className="pointer-events-none fixed z-[100] -translate-y-1/2"
              style={{ left: hover.x + 18, top: hover.y }}
              aria-hidden
            >
              <FaviconPreview key={hover.href} href={hover.href} />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
