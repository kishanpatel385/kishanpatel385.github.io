import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(_lenis: Lenis): void {
  animateNav();
  animateHero();
  animateServices();
  animateSkills();
  animateExperience();
  animateContact();
  animatePinnedPanels();

  const refresh = () => ScrollTrigger.refresh();

  if (document.fonts?.ready) {
    document.fonts.ready.then(refresh).catch(() => {});
  }
  if (document.readyState === "complete") {
    refresh();
  } else {
    window.addEventListener("load", refresh, { once: true });
  }
  setTimeout(refresh, 800);
}

export function destroyAnimations(): void {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf("*");
}

function animatePinnedPanels(): void {
  const panels = gsap.utils.toArray<HTMLElement>("[data-pin-panel]");
  panels.forEach((panel) => {
    gsap.to(panel, {
      filter: "blur(6px)",
      opacity: 0.25,
      scale: 0.96,
      ease: "none",
      scrollTrigger: {
        trigger: panel,
        start: "bottom 70%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  });
}

function animateNav(): void {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!nav) return;
  gsap.to(nav, { opacity: 1, duration: 0.6, delay: 0.1, ease: "power2.out" });
}

function animateHero(): void {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;

  const card = hero.querySelector<HTMLElement>("[data-hero-card]");
  const nameFilled = hero.querySelector("[data-hero-name-filled]");
  const nameOutline = hero.querySelector("[data-hero-name-outline]");
  const tagline = hero.querySelector("[data-hero-tagline]");
  const subtitle = hero.querySelector("[data-hero-subtitle]");
  const bio = hero.querySelector("[data-hero-bio]");
  const actions = hero.querySelector("[data-hero-actions]");
  const blob = hero.querySelector("[data-hero-blob]");

  const tl = gsap.timeline({ delay: 0.1 });

  if (card) {
    tl.fromTo(
      card,
      { opacity: 0, scale: 0.82, borderRadius: "220px", filter: "blur(8px)" },
      {
        opacity: 1,
        scale: 1,
        borderRadius: "32px",
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
      },
      0,
    );
  }

  const textEls = [tagline, nameFilled, nameOutline, subtitle, bio, actions].filter(Boolean) as Element[];
  if (textEls.length) {
    tl.fromTo(
      textEls,
      { opacity: 0, filter: "blur(14px)", y: 18 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      0.45,
    );
  }

  if (blob) {
    tl.fromTo(
      blob,
      { opacity: 0, scale: 0.75, rotate: -18 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.0, ease: "elastic.out(1, 0.75)" },
      0.55,
    );
  }

  if (card) {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    scrollTl
      .fromTo(
        card,
        { scale: 1, borderRadius: "32px", y: 0, opacity: 1 },
        { scale: 0.85, borderRadius: "80px", y: -40, duration: 0.3, ease: "none" },
      )
      .to(card, {
        scale: 0.55,
        borderRadius: "200px",
        y: -160,
        opacity: 0.55,
        duration: 0.4,
        ease: "none",
      })
      .to(card, {
        scale: 0.25,
        borderRadius: "300px",
        y: -360,
        opacity: 0,
        duration: 0.3,
        ease: "none",
      });
  }
}

function animateServices(): void {
  const section = document.querySelector<HTMLElement>("[data-services-stack]");
  const panels = document.querySelectorAll<HTMLElement>("[data-service-panel]");
  if (!section || !panels.length) return;
  const total = panels.length;

  panels.forEach((p, i) => {
    gsap.set(p, {
      y: i * 14,
      x: i * 10,
      rotation: i * 2,
      scale: 1 - i * 0.025,
      opacity: i < 4 ? 1 : 0,
      transformOrigin: "50% 50%",
    });
  });

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${(total - 1) * 80}%`,
      pin: ".services-stack-sticky",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  for (let i = 0; i < total - 1; i++) {
    tl.to(
      panels[i],
      { x: 700, y: -260, rotation: 20, scale: 0.9, opacity: 0, duration: 1 },
      i,
    );

    for (let j = i + 1; j < total; j++) {
      const step = j - i - 1;
      tl.to(
        panels[j],
        {
          y: step * 14,
          x: step * 10,
          rotation: step * 2,
          scale: 1 - step * 0.025,
          opacity: step < 4 ? 1 : 0,
          duration: 1,
        },
        i,
      );
    }
  }
}

function animateSkills(): void {
  const section = document.querySelector<HTMLElement>("[data-skills-section]");
  if (!section) return;

  const label = section.querySelector(".section-label");
  const heading = section.querySelector(".section-heading");
  const desc = section.querySelector("p");
  const rows = section.querySelectorAll<HTMLElement>(".tech-row");

  const entryEls = [label, heading, desc].filter(Boolean) as Element[];
  if (entryEls.length) {
    gsap.fromTo(
      entryEls,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  if (rows.length) {
    gsap.fromTo(
      rows,
      { opacity: 0, y: 60, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  const content = section.querySelector<HTMLElement>(".container-main");
  if (content) {
    gsap.to(content, {
      opacity: 0.15,
      scale: 0.9,
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "bottom 75%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }
}

function animateExperience(): void {
  const section = document.querySelector<HTMLElement>("[data-experience]");
  if (!section) return;

  const label = section.querySelector(".section-label");
  const heading = section.querySelector(".section-heading");
  const desc = section.querySelector(".container-main > div > p");
  const board = section.querySelector(".exp-scatter-board");

  const entryEls = [label, heading, desc].filter(Boolean) as Element[];
  if (entryEls.length) {
    gsap.fromTo(
      entryEls,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  if (board) {
    gsap.fromTo(
      board,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  const content = section.querySelector<HTMLElement>(".container-main");
  if (content) {
    gsap.to(content, {
      opacity: 0.15,
      scale: 0.9,
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "bottom 75%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }
}

function animateContact(): void {
  const section = document.querySelector<HTMLElement>("[data-contact]");
  if (!section) return;

  const label = section.querySelector(".section-label");
  const heading = section.querySelector(".section-heading");
  const desc = section.querySelector(".container-main > div > p");
  const cards = section.querySelectorAll(".contact-card");

  const entryEls = [label, heading, desc].filter(Boolean) as Element[];
  if (entryEls.length) {
    gsap.fromTo(
      entryEls,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  if (cards.length) {
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  const content = section.querySelector<HTMLElement>(".container-main");
  if (content) {
    gsap.to(content, {
      opacity: 0.15,
      scale: 0.9,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "bottom 75%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }
}
