"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Team Lead",
  "Senior Full-Stack Developer",
  "Problem Solver",
  "SaaS Builder",
  "System Architect",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (!deleting && typed === current) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && typed === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }, 300);
      return () => clearTimeout(t);
    }

    const speed = deleting ? 40 : 85;
    const t = setTimeout(() => {
      setTyped(
        deleting
          ? current.slice(0, typed.length - 1)
          : current.slice(0, typed.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <section data-hero className="relative min-h-screen">
      <div
        data-hero-sticky
        className="relative h-screen flex items-center justify-center z-10 overflow-hidden"
      >
        <div data-hero-card className="hero-card">
          <div className="hero-grid">
            <div className="hero-content">
              <span data-hero-tagline className="hero-eyebrow">
                Hi, I&apos;m
              </span>

              <h1 className="hero-headline">
                <span data-hero-name-filled className="hero-name-filled-inline">
                  Kishan
                </span>{" "}
                <span data-hero-name-outline className="hero-name-outline-inline">
                  Patel
                </span>
              </h1>

              <div data-hero-subtitle className="hero-typer">
                I build as a{" "}
                <span className="hero-type-word">
                  {typed}
                  <span className="hero-type-cursor" aria-hidden />
                </span>
              </div>

              <p data-hero-bio className="hero-bio">
                11+ years owning backend systems end-to-end across SaaS, e-commerce,
                healthcare, and education. Laravel, Node.js, React &amp; AWS — clean
                architecture, real impact.
              </p>

              <div data-hero-actions className="hero-actions">
                <a href="#work" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-outline">Get in Touch</a>
              </div>
            </div>

            <div className="hero-visual">
              <div data-hero-blob className="hero-blob">
                <img
                  src="/images/hero.png"
                  alt="Kishan Patel"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
