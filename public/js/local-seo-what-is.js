(() => {
  "use strict";

  const section = document.getElementById("local-seo-what-is");
  if (!section) return;

  const content = section.querySelector(".svc-ai-about__content");
  const figure = section.querySelector(".svc-ai-about__figure");
  if (!content || !figure) return;

  const mq = window.matchMedia("(min-width: 961px)");
  let resizeObserver;

  function syncFigureHeight() {
    if (!mq.matches) {
      figure.style.height = "";
      return;
    }
    figure.style.height = `${content.offsetHeight}px`;
  }

  function init() {
    syncFigureHeight();
    if (resizeObserver) resizeObserver.disconnect();
    resizeObserver = new ResizeObserver(syncFigureHeight);
    resizeObserver.observe(content);
    mq.addEventListener("change", syncFigureHeight);
    window.addEventListener("resize", syncFigureHeight);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
