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

  function initReviewTabsA11y() {
    const chips = Array.from(document.querySelectorAll(".gr-filters .gr-chip"));
    if (!chips.length) return;

    chips.forEach((chip) => {
      chip.setAttribute("role", "tab");
      chip.setAttribute("aria-selected", chip.classList.contains("is-active") ? "true" : "false");
      chip.addEventListener("click", () => {
        chips.forEach((item) => {
          item.setAttribute("aria-selected", item === chip ? "true" : "false");
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      boot();
      initReviewTabsA11y();
    }, { once: true });
  } else {
    boot();
    initReviewTabsA11y();
  }
})();
