(() => {
  "use strict";
  const track = document.querySelector("#work .work__grid");
  if (!track) return;

  const INTERVAL = 3500;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let timer = 0;
  let hovering = false;
  let inView = false;

  const visibleCards = () =>
    [...track.querySelectorAll(".work-card")].filter((c) => c.style.display !== "none");

  const step = () => {
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 2) return;
    if (track.scrollLeft >= max - 2) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const next = visibleCards().find((c) => c.offsetLeft - track.offsetLeft - pad > track.scrollLeft + 2);
    if (next) track.scrollTo({ left: next.offsetLeft - track.offsetLeft - pad, behavior: "smooth" });
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = 0;
  };
  const start = () => {
    stop();
    if (!hovering && inView && !document.hidden) timer = window.setInterval(step, INTERVAL);
  };

  track.addEventListener("mouseenter", () => { hovering = true; stop(); });
  track.addEventListener("mouseleave", () => { hovering = false; start(); });
  track.addEventListener("focusin", () => { hovering = true; stop(); });
  track.addEventListener("focusout", () => { hovering = false; start(); });
  track.addEventListener("touchstart", stop, { passive: true });
  track.addEventListener("touchend", () => window.setTimeout(start, INTERVAL), { passive: true });
  document.addEventListener("visibilitychange", start);

  document.querySelector("#work .work__filters")?.addEventListener("click", (e) => {
    if (!e.target.closest(".work__filter")) return;
    track.scrollTo({ left: 0 });
    start();
  });

  new IntersectionObserver((entries) => {
    inView = entries.some((e) => e.isIntersecting);
    start();
  }).observe(track);
})();
