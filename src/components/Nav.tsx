"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Nav() {
  const linksRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = linksRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const links = container.querySelectorAll<HTMLElement>(".nav-link");
    let currentTl: gsap.core.Timeline | null = null;
    let isVisible = false;

    const moveTo = (link: HTMLElement) => {
      const linkRect = link.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const targetX = linkRect.left - containerRect.left;
      const targetW = linkRect.width;

      if (currentTl) currentTl.kill();

      if (!isVisible) {
        // First entry — just appear at target (no stretch)
        isVisible = true;
        currentTl = gsap.timeline();
        currentTl.set(indicator, { x: targetX, width: targetW });
        currentTl.to(indicator, {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
        return;
      }

      // Already visible — liquid merge stretch between current and target
      const currentX = (gsap.getProperty(indicator, "x") as number) || 0;
      const currentW = (gsap.getProperty(indicator, "width") as number) || targetW;
      const stretchX = Math.min(currentX, targetX);
      const stretchW = Math.max(currentX + currentW, targetX + targetW) - stretchX;

      currentTl = gsap.timeline();
      currentTl.to(indicator, {
        x: stretchX,
        width: stretchW,
        duration: 0.18,
        ease: "power2.out",
      });
      currentTl.to(indicator, {
        x: targetX,
        width: targetW,
        duration: 0.35,
        ease: "back.out(1.6)",
      });
    };

    const hide = () => {
      if (currentTl) currentTl.kill();
      isVisible = false;
      currentTl = gsap.timeline();
      currentTl.to(indicator, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const handlers: { el: HTMLElement; fn: () => void }[] = [];
    links.forEach((link) => {
      const fn = () => moveTo(link);
      link.addEventListener("mouseenter", fn);
      handlers.push({ el: link, fn });
    });
    container.addEventListener("mouseleave", hide);

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("mouseenter", fn));
      container.removeEventListener("mouseleave", hide);
      if (currentTl) currentTl.kill();
    };
  }, []);

  return (
    <nav data-nav className="site-nav opacity-0">
      <svg
        aria-hidden
        width="0"
        height="0"
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <defs>
          <filter id="nav-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="nav-pill">
        <div className="nav-pill-content">
          <div className="nav-socials">
            <a
              href="https://github.com/kishanpatel385"
              target="_blank"
              rel="noopener"
              className="nav-social"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden>
                <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 4.93 3.2 9.11 7.64 10.59.56.1.77-.24.77-.54 0-.27-.01-1.15-.02-2.08-3.11.68-3.77-1.32-3.77-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.67.08-.67 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.61 1.22 3.25.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.15.89-.25 1.84-.37 2.79-.37.95 0 1.9.13 2.79.37 2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.09 5.51.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.64.78.53 4.44-1.48 7.63-5.66 7.63-10.59C23.34 5.57 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kishanpatel385"
              target="_blank"
              rel="noopener"
              className="nav-social"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          <div ref={linksRef} className="nav-links">
            <div
              ref={indicatorRef}
              className="nav-indicator"
              aria-hidden
            />
            <a href="#" className="nav-link active">Home</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-right">
            <a href="/Kishan_Patel_Resume.pdf" download className="nav-ghost">Resume</a>
            <a href="#contact" className="nav-cta">Get in Touch</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
