(() => {
  "use strict";

  function syncIncludePanels() {
    const section = document.getElementById("product-dev-include");
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

      const leftH = Math.round(left.getBoundingClientRect().height);
      right.style.minHeight = "0";
      right.style.height = `${leftH}px`;
    }

    function init() {
      syncPanelHeight();
      requestAnimationFrame(syncPanelHeight);

      if (resizeObserver) resizeObserver.disconnect();
      resizeObserver = new ResizeObserver(syncPanelHeight);
      resizeObserver.observe(left);

      section.querySelectorAll(".sl[data-svc]").forEach((el) => {
        el.addEventListener("mouseenter", () =>
          requestAnimationFrame(syncPanelHeight),
        );
        el.addEventListener("click", () =>
          requestAnimationFrame(syncPanelHeight),
        );
      });

      mq.addEventListener("change", syncPanelHeight);
      window.addEventListener("resize", syncPanelHeight);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  function syncWhyChoose() {
    const section = document.getElementById("product-dev-why-choose");
    if (!section) return;

    const left = section.querySelector(".seo-choose__copy-col");
    const frame = section.querySelector(".seo-choose__frame");
    if (!left || !frame) return;

    const mq = window.matchMedia("(min-width: 901px)");
    let resizeObserver;

    function syncFrameHeight() {
      if (!mq.matches) {
        frame.style.height = "";
        frame.style.minHeight = "";
        return;
      }

      const leftH = Math.round(left.getBoundingClientRect().height);
      frame.style.minHeight = "0";
      frame.style.height = `${leftH}px`;
    }

    function init() {
      syncFrameHeight();
      requestAnimationFrame(syncFrameHeight);

      if (resizeObserver) resizeObserver.disconnect();
      resizeObserver = new ResizeObserver(syncFrameHeight);
      resizeObserver.observe(left);

      mq.addEventListener("change", syncFrameHeight);
      window.addEventListener("resize", syncFrameHeight);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  syncIncludePanels();
  syncWhyChoose();
})();
