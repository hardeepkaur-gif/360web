(() => {
  "use strict";

  const section = document.getElementById("copywriting-services");
  if (!section) return;

  const left = section.querySelector(".svc-left");
  const right = section.querySelector(".svc-right");
  if (!left || !right) return;

  const items = section.querySelectorAll(".sl[data-svc]");
  const panels = section.querySelectorAll(".svc-img[data-idx]");
  const fallback = section.querySelector(".svc-default");
  if (!items.length || !panels.length) return;

  const mq = window.matchMedia("(min-width: 1081px)");
  let resizeObserver;

  function activatePanel(index) {
    const key = String(index);

    items.forEach((el) => {
      el.classList.toggle("active", el.dataset.svc === key);
    });

    panels.forEach((el) => {
      el.classList.toggle("active", el.dataset.idx === key);
    });

    if (fallback) {
      fallback.style.opacity = "0";
      fallback.style.visibility = "hidden";
    }

    right.classList.add("is-visible");
    requestAnimationFrame(syncPanelHeight);
  }

  function syncPanelHeight() {
    if (!mq.matches) {
      right.style.height = "";
      right.style.minHeight = "";
      return;
    }

    const leftH = left.offsetHeight;
    right.style.minHeight = `${leftH}px`;
    right.style.height = `${leftH}px`;
  }

  function bindInteractions() {
    items.forEach((el) => {
      const index = el.dataset.svc;
      if (index == null) return;

      el.addEventListener("mouseenter", () => activatePanel(index));
      el.addEventListener("focus", () => activatePanel(index));
      el.addEventListener("click", () => activatePanel(index));
    });

    section.addEventListener("mouseleave", () => activatePanel(0));
  }

  function init() {
    bindInteractions();
    activatePanel(0);
    syncPanelHeight();

    if (resizeObserver) resizeObserver.disconnect();
    resizeObserver = new ResizeObserver(syncPanelHeight);
    resizeObserver.observe(left);
    right.querySelectorAll(".svc-img-text").forEach((el) => {
      resizeObserver.observe(el);
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
