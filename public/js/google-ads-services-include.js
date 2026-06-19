(() => {
  "use strict";

  const section = document.getElementById("google-ads-services-include");
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
    right.style.minHeight = "0";
    right.style.height = `${left.offsetHeight}px`;
  }

  function init() {
    syncPanelHeight();
    if (resizeObserver) resizeObserver.disconnect();
    resizeObserver = new ResizeObserver(syncPanelHeight);
    resizeObserver.observe(left);
    mq.addEventListener("change", syncPanelHeight);
    window.addEventListener("resize", syncPanelHeight);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
