"use client";

import { useEffect } from "react";
import { initSmoothScroll, destroySmoothScroll } from "@/lib/smooth-scroll";
import { initCursor } from "@/lib/cursor";
import { initAnimations, destroyAnimations } from "@/lib/animations";

export default function SiteEffects() {

  useEffect(() => {
    // Prevent browser from restoring scroll after refresh (conflicts with ScrollTrigger pins)
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const lenis = initSmoothScroll();
    const cleanupCursor = initCursor();
    initAnimations(lenis);

    return () => {
      cleanupCursor();
      destroyAnimations();
      destroySmoothScroll(lenis);
    };
  }, []);

  return (
    <button data-go-top className="go-top-btn" aria-label="Go to top">
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
