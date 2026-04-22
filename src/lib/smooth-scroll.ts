import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll(): Lenis {
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.8,
    syncTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const rafCallback = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(rafCallback);
  gsap.ticker.lagSmoothing(0);

  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  const anchorHandler = (e: Event) => {
    e.preventDefault();
    const anchor = e.currentTarget as HTMLAnchorElement;
    const href = anchor.getAttribute("href");
    if (!href) return;
    if (href === "#" || href === "#top") {
      lenis.scrollTo(0, { duration: 1.5 });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.5 });
    }
  };
  anchors.forEach((anchor) => anchor.addEventListener("click", anchorHandler));

  const goTopBtn = document.querySelector<HTMLElement>("[data-go-top]");
  let goTopClick: (() => void) | null = null;
  if (goTopBtn) {
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      if (scroll > 600) {
        goTopBtn.classList.add("visible");
      } else {
        goTopBtn.classList.remove("visible");
      }
    });

    goTopClick = () => lenis.scrollTo(0, { duration: 2 });
    goTopBtn.addEventListener("click", goTopClick);
  }

  // Attach cleanup for React StrictMode / Fast Refresh
  (lenis as unknown as { __cleanup?: () => void }).__cleanup = () => {
    gsap.ticker.remove(rafCallback);
    anchors.forEach((a) => a.removeEventListener("click", anchorHandler));
    if (goTopBtn && goTopClick) goTopBtn.removeEventListener("click", goTopClick);
  };

  return lenis;
}

export function destroySmoothScroll(lenis: Lenis) {
  const cleanup = (lenis as unknown as { __cleanup?: () => void }).__cleanup;
  if (cleanup) cleanup();
  lenis.destroy();
}
