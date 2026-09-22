(function () {
  "use strict";

  var form = document.getElementById("cs-audit-form");
  if (!form) return;

  var btn = document.getElementById("cs-audit-submit");
  var ok = document.getElementById("cs-audit-ok");
  var err = document.getElementById("cs-audit-err");
  var defaultHtml = btn ? btn.innerHTML : "";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (ok) ok.hidden = true;
    if (err) {
      err.hidden = true;
      err.textContent = "";
    }

    var fd = new FormData(form);
    var website = String(fd.get("website") || "").trim();
    var message = String(fd.get("message") || "").trim();
    if (!message) {
      message = "Free audit request from Real Estate Agents London case study.";
    }
    if (website) message += "\n\nWebsite: " + website;

    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending…";
    }

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "contact",
        name: String(fd.get("name") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        company: website,
        message: message,
      }),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(data.error || "Failed to send. Please try again.");
          return data;
        });
      })
      .then(function () {
        form.reset();
        if (ok) ok.hidden = false;
      })
      .catch(function (error) {
        if (err) {
          err.textContent = error.message || "Something went wrong. Please try again.";
          err.hidden = false;
        }
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = defaultHtml;
        }
      });
  });
})();
