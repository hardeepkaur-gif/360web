(() => {
  "use strict";

  const section = document.getElementById("shopify-services");
  if (!section) return;

  const left = section.querySelector(".svc-left");
  const right = section.querySelector(".svc-right");
  if (!left || !right) return;

  const mq = window.matchMedia("(min-width: 1081px)");
  let resizeObserver;

  function syncPanelHeight() {
    if (!mq.matches) {
      right.style.height = "";
      right.style.minHeight = "";
      return;
    }

    const leftH = left.offsetHeight;
    const activeText = right.querySelector(".svc-img.active .svc-img-text");
    const textNeeded = activeText ? activeText.offsetHeight + 48 : 0;
    const needed = Math.max(leftH, textNeeded, 520);

    right.style.minHeight = "0";
    right.style.height = `${needed}px`;
  }

  function init() {
    syncPanelHeight();
    if (resizeObserver) resizeObserver.disconnect();
    resizeObserver = new ResizeObserver(syncPanelHeight);
    resizeObserver.observe(left);
    right.querySelectorAll(".svc-img-text").forEach((el) => {
      resizeObserver.observe(el);
    });

    section.querySelectorAll(".sl[data-svc]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        requestAnimationFrame(syncPanelHeight);
      });
      el.addEventListener("click", () => {
        requestAnimationFrame(syncPanelHeight);
      });
    });

    mq.addEventListener("change", syncPanelHeight);
    window.addEventListener("resize", syncPanelHeight);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
