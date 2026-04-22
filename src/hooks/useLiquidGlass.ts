"use client";

import { useEffect, type RefObject } from "react";
import {
  getDisplacementFilter,
  supportsBackdropFilterUrl,
} from "@/lib/liquidGlass";

type Options = {
  depth?: number;
  strength?: number;
  chromaticAberration?: number;
  blur?: number;
  saturate?: number;
  brightness?: number;
};

export function useLiquidGlass(
  ref: RefObject<HTMLElement | null>,
  {
    depth = 8,
    strength = 100,
    chromaticAberration = 0,
    blur = 2,
    saturate = 1.5,
    brightness = 1.1,
  }: Options = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const supported = supportsBackdropFilterUrl();

    const apply = () => {
      if (!el.isConnected) return;
      const rect = el.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      if (width === 0 || height === 0) return;

      const radius = parseFloat(getComputedStyle(el).borderRadius) || 0;

      if (supported) {
        const filter = getDisplacementFilter({
          height,
          width,
          radius,
          depth,
          strength,
          chromaticAberration,
        });
        const value = `blur(${blur / 2}px) url('${filter}') blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;
        el.style.backdropFilter = value;
        el.style.setProperty("-webkit-backdrop-filter", value);
      } else {
        const fallback = `blur(${Math.max(12, width / 12)}px) saturate(${saturate * 100}%) brightness(${brightness})`;
        el.style.backdropFilter = fallback;
        el.style.setProperty("-webkit-backdrop-filter", fallback);
      }
    };

    // Fire across multiple life-cycle events to beat layout/font races
    const raf = requestAnimationFrame(apply);
    const t1 = window.setTimeout(apply, 100);
    const t2 = window.setTimeout(apply, 500);

    if (document.fonts?.ready) {
      document.fonts.ready.then(apply).catch(() => {});
    }
    window.addEventListener("load", apply);
    window.addEventListener("resize", apply);

    const ro = new ResizeObserver(apply);
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", apply);
      window.removeEventListener("resize", apply);
      ro.disconnect();
    };
  }, [ref, depth, strength, chromaticAberration, blur, saturate, brightness]);
}
