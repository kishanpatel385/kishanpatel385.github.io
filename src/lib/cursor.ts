import gsap from "gsap";

export function initCursor(): () => void {
  const dot = document.querySelector<HTMLElement>(".cursor-dot");
  const outline = document.querySelector<HTMLElement>(".cursor-outline");
  if (!dot || !outline) return () => {};

  if ("ontouchstart" in window) {
    dot.style.display = "none";
    outline.style.display = "none";
    return () => {};
  }

  const moveDot = gsap.quickTo(dot, "left", { duration: 0.1, ease: "power2.out" });
  const moveDotY = gsap.quickTo(dot, "top", { duration: 0.1, ease: "power2.out" });
  const moveOutline = gsap.quickTo(outline, "left", { duration: 0.35, ease: "power2.out" });
  const moveOutlineY = gsap.quickTo(outline, "top", { duration: 0.35, ease: "power2.out" });

  const onMove = (e: MouseEvent) => {
    moveDot(e.clientX);
    moveDotY(e.clientY);
    moveOutline(e.clientX);
    moveOutlineY(e.clientY);
  };

  const hoverTargets = "a, button, .btn-primary, .btn-outline, .project-card-v2";

  const onOver = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(hoverTargets)) {
      gsap.to(dot, { scale: 3, duration: 0.3 });
      gsap.to(outline, { scale: 1.5, opacity: 0, duration: 0.3 });
    }
  };

  const onOut = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(hoverTargets)) {
      gsap.to(dot, { scale: 1, duration: 0.3 });
      gsap.to(outline, { scale: 1, opacity: 0.3, duration: 0.3 });
    }
  };

  window.addEventListener("mousemove", onMove);
  document.addEventListener("mouseover", onOver);
  document.addEventListener("mouseout", onOut);

  return () => {
    window.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseover", onOver);
    document.removeEventListener("mouseout", onOut);
  };
}
