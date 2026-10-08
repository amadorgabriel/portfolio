"use client";

import { useCallback, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./use-typewriter";

const INTRO_SESSION_KEY = "portfolio-intro-played";

export function usePortfolioIntro() {
  const reduced = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(reduced);
  const [showIntro, setShowIntro] = useState(!reduced);
  const [checked, setChecked] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setRevealed(true);
      setShowIntro(false);
      setChecked(true);
      return;
    }

    const played = sessionStorage.getItem(INTRO_SESSION_KEY) === "1";
    if (played) {
      setRevealed(true);
      setShowIntro(false);
    } else {
      setRevealed(false);
      setShowIntro(true);
    }
    setChecked(true);
  }, [reduced]);

  const handleReveal = useCallback(() => {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    setRevealed(true);
    setShowIntro(false);
  }, []);

  return {
    revealed,
    showIntro: checked && showIntro,
    handleReveal,
    checked,
  };
}
