(function () {
  function bindNavToggle() {
    var btn = document.getElementById("navToggle");
    var menu = document.querySelector(".nav__menu");
    if (!btn || !menu || btn.dataset.navBound === "1") {
      return Boolean(btn && menu);
    }

    btn.dataset.navBound = "1";

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (e) {
      if (
        menu.classList.contains("is-open") &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        menu.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    return true;
  }

  function initNavToggle() {
    if (bindNavToggle()) return;

    var observer = new MutationObserver(function () {
      if (bindNavToggle()) observer.disconnect();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    window.setTimeout(bindNavToggle, 100);
    window.setTimeout(bindNavToggle, 500);
    window.setTimeout(function () {
      bindNavToggle();
      observer.disconnect();
    }, 2000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavToggle);
  } else {
    initNavToggle();
  }
})();
