(() => {
  "use strict";

  function parseCategories(node) {
    return (node.getAttribute("data-category") || "")
      .split(/\s+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function isMobileView() {
    return window.matchMedia("(max-width: 767px)").matches;
  }

  function applyFilter(filter, buttons, gridCards) {
    buttons.forEach((btn) => {
      btn.classList.toggle("is-active", (btn.dataset.filter || "all") === filter);
    });

    const mobileLimit = isMobileView() ? 3 : Infinity;
    let mobileShown = 0;

    gridCards.forEach((card) => {
      const categories = parseCategories(card);
      const hideOnAll = card.getAttribute("data-hide-on-all") === "true";
      const matches = filter === "all" ? !hideOnAll : categories.includes(filter);

      let visible = matches;
      if (matches && isMobileView()) {
        visible = mobileShown < mobileLimit;
        if (visible) mobileShown += 1;
      }

      card.style.display = visible ? "" : "none";
      card.style.opacity = visible ? "1" : "0";
      card.style.transform = visible ? "" : "scale(.98)";
    });
  }

  function updateFilterCounts(buttons, gridCards, featured) {
    const cards = featured ? [featured, ...gridCards] : gridCards;
    const allCount = cards.filter(
      (card) => card.getAttribute("data-hide-on-all") !== "true",
    ).length;

    buttons.forEach((btn) => {
      const filter = btn.dataset.filter || "all";
      const count =
        filter === "all"
          ? allCount
          : cards.filter((card) => parseCategories(card).includes(filter)).length;
      const em = btn.querySelector("em");
      if (em) em.textContent = String(count);
    });
  }

  function initCaseStudyFilters() {
    const buttons = Array.from(document.querySelectorAll(".work__filter"));
    const gridCards = Array.from(document.querySelectorAll(".work__grid .work-card[data-category]"));
    const featured = document.querySelector(".work-feature[data-category]");

    if (!buttons.length || !gridCards.length) return false;

    updateFilterCounts(buttons, gridCards, featured);

    buttons.forEach((btn) => {
      btn.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          applyFilter(btn.dataset.filter || "all", buttons, gridCards);
        },
        true
      );
    });

    const active = buttons.find((btn) => btn.classList.contains("is-active"))?.dataset.filter || "all";
    applyFilter(active, buttons, gridCards);

    window.matchMedia("(max-width: 767px)").addEventListener("change", () => {
      const current = buttons.find((btn) => btn.classList.contains("is-active"))?.dataset.filter || "all";
      applyFilter(current, buttons, gridCards);
    });

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
