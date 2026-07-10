(function () {
  "use strict";

  var form = document.getElementById("heroLeadForm");
  if (!form) return;

  var success = document.getElementById("heroLeadSuccess");
  var submitBtn = document.getElementById("heroLeadSubmit");
  var defaultBtnHtml = submitBtn ? submitBtn.innerHTML : "";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var fd = new FormData(form);
    var payload = {
      formType: "lead",
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      services: String(fd.get("services") || "").trim(),
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(data.error || "Failed to send. Please try again.");
          return data;
        });
      })
      .then(function () {
        form.hidden = true;
        if (success) success.hidden = false;
      })
      .catch(function (err) {
        window.alert(err.message || "Something went wrong. Please try again.");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = defaultBtnHtml;
        }
      });
  });
})();
