(function () {
  if (!/\/contact-us\/?$/.test(window.location.pathname)) return;

  function positionTawkOverSlot() {
    var host = document.getElementById("tawk-contact-slot");
    var tawk = document.getElementById("tawkchat-container");
    if (!host || !tawk) return false;

    var r = host.getBoundingClientRect();
    tawk.style.cssText =
      "position:fixed!important;" +
      "top:" + r.top + "px!important;" +
      "left:" + r.left + "px!important;" +
      "width:" + r.width + "px!important;" +
      "height:" + r.height + "px!important;" +
      "max-width:" + r.width + "px!important;" +
      "max-height:" + r.height + "px!important;" +
      "margin:0!important;" +
      "right:auto!important;" +
      "bottom:auto!important;" +
      "z-index:9999!important;";

    var iframe = tawk.querySelector("iframe");
    if (iframe) {
      iframe.style.cssText =
        "width:100%!important;height:100%!important;min-height:" +
        r.height +
        "px!important;max-height:none!important;";
    }

    document.documentElement.classList.add("tawk-docked-contact");
    return true;
  }

  function openAndPosition() {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.maximize();
    }
    positionTawkOverSlot();
  }

  var prevOnLoad = window.Tawk_API && window.Tawk_API.onLoad;
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function () {
    if (typeof prevOnLoad === "function") prevOnLoad();
    openAndPosition();
  };

  function watch() {
    openAndPosition();
  }

  function init() {
    watch();
    var n = 0;
    var timer = setInterval(function () {
      watch();
      if (++n >= 30) clearInterval(timer);
    }, 200);

    window.addEventListener("resize", positionTawkOverSlot);
    window.addEventListener("scroll", positionTawkOverSlot, { passive: true });

    new MutationObserver(function () {
      positionTawkOverSlot();
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
