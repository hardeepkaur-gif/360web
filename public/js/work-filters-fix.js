(() => {
  "use strict";

  function parseCategories(node) {
    return (node.getAttribute("data-category") || "")
      .split(/\s+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function applyFilter(filter, buttons, cards) {
    buttons.forEach((btn) => {
      btn.classList.toggle("is-active", (btn.dataset.filter || "all") === filter);
    });

    cards.forEach((card) => {
      const categories = parseCategories(card);
      const hideOnAll = card.getAttribute("data-hide-on-all") === "true";
      const visible = filter === "all" ? !hideOnAll : categories.includes(filter);

      card.style.display = visible ? "" : "none";
      card.style.opacity = visible ? "1" : "0";
      card.style.transform = visible ? "" : "scale(.98)";
    });
  }

  function initCaseStudyFilters() {
    const buttons = Array.from(document.querySelectorAll(".work__filter"));
    const cards = Array.from(document.querySelectorAll(".work [data-category]"));

    if (!buttons.length || !cards.length) return false;

    // Capture-phase handler ensures legacy bubbling listeners cannot override this behavior.
    buttons.forEach((btn) => {
      btn.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          applyFilter(btn.dataset.filter || "all", buttons, cards);
        },
        true
      );
    });

    const active = buttons.find((btn) => btn.classList.contains("is-active"))?.dataset.filter || "all";
    applyFilter(active, buttons, cards);
    return true;
  }

  function boot() {
    if (initCaseStudyFilters()) return;
    setTimeout(initCaseStudyFilters, 200);
    setTimeout(initCaseStudyFilters, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
