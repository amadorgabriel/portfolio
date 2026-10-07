"use client";

import Link from "next/link";
import { NotFoundRevealShell, linkClass } from "./not-found-reveal-shell";

export function NotFoundPage() {
  return (
    <NotFoundRevealShell>
      <p className="text-[15px] leading-relaxed text-neutral-600">
        <span className="font-medium text-neutral-800">404</span>
        {" · "}
        This page isn&apos;t here.{" "}
        <Link href="/" className={linkClass}>
          Go home
        </Link>
      </p>
    </NotFoundRevealShell>
  );
}
