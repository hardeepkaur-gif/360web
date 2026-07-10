(() => {
  "use strict";

  const getUKTimezoneLabel = () => {
    const now = new Date();
    const part = new Intl.DateTimeFormat("en-GB", {
      timeZoneName: "short",
      timeZone: "Europe/London",
    })
      .formatToParts(now)
      .find((item) => item.type === "timeZoneName");
    return part?.value || "GMT";
  };

  function applyTimezoneLabels() {
    const select = document.getElementById("contactPreferredTime");
    if (!select) return false;

    const tz = getUKTimezoneLabel();

    select.querySelectorAll("option").forEach((option) => {
      if (!option.value) return;

      if (!option.dataset.baseLabel) {
        option.dataset.baseLabel = option.textContent.trim();
      }

      option.textContent = `${option.dataset.baseLabel} ${tz}`;
    });

    return true;
  }

  function boot() {
    if (applyTimezoneLabels()) return;
    setTimeout(applyTimezoneLabels, 200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
