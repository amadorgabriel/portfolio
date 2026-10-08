"use client";

import { useCallback, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";

const descriptionClass =
  "truncate text-[13px] font-light text-neutral-600";

export function RepoDescription({
  text,
  className = descriptionClass,
}: Readonly<{ text: string; className?: string }>) {
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null);
  const display = text.trim() || "No description";

  const onMove = useCallback((event: MouseEvent) => {
    setHover({ x: event.clientX, y: event.clientY });
  }, []);

  const clear = useCallback(() => setHover(null), []);

  const showTooltip = display.length > 48;

  return (
    <>
      <p
        className={className}
        onMouseEnter={onMove}
        onMouseMove={onMove}
        onMouseLeave={clear}
      >
        {display}
      </p>

      {showTooltip && hover && typeof document !== "undefined"
        ? createPortal(
            <div
              className="pointer-events-none fixed z-[100] max-w-[min(320px,90vw)] -translate-y-1/2 rounded-lg border border-neutral-200/90 bg-white px-3 py-2 text-[13px] font-light leading-relaxed text-neutral-600 shadow-lg shadow-neutral-900/10"
              style={{ left: hover.x + 16, top: hover.y }}
              role="tooltip"
            >
              {display}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
