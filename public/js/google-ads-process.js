(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/google-ads-management-services")) return;
  if (!document.getElementById("procDesc")) return;

  const GOOGLE_ADS_PROCESS_STEPS = [
    {
      num: "01",
      title: "Week 1–2: Audit Strategy and Account",
      subtitle: "",
      text: "We begin by auditing your existing account or building one from scratch if there isn't any preexisting account. The audit helps us to identify wasted ad spend, structural issues, missing conversion tracking, and keyword gaps. We then define campaign architecture, match types, and build the negative keywords lists that save your budget from day one. Conversion tracking is set up or verified in GA4 before a single campaign goes live.",
      image: "/assets/images/google-ads-process-audit-strategy.webp",
      alt: "Analyst auditing Google Ads account strategy with financial and performance data overlays.",
      points: [],
    },
    {
      num: "02",
      title: "Week 3–4: Campaign Launch and Budget Allocation",
      subtitle: "",
      text: "We launch campaigns with controlled initial budgets, split across campaign types based on your funnel stage and business objective. If your business needs leads quickly, it gets more weight behind search. An e-commerce client with strong product margins gets shopping prioritised. Budget allocation is a strategic decision, but not a default 50/50 split.",
      image: "/assets/images/google-ads-process-campaign-launch.webp",
      alt: "Google Ads campaign launch and budget allocation service displayed on a desktop monitor.",
      points: [],
    },
    {
      num: "03",
      title: "What Happens After You Sign Up",
      subtitle: "",
      text: "There's a kick-off call within 48 hours. Audit delivered by the end of the first week. Strategy sign-off and campaign build-in are done by week two, and the campaign is live by the third week. The first performance review is done at day 30. It's not that you'd have to wait months to see movement because our onboarding is built around getting you actionable data as soon as possible.",
      image: "/assets/images/google-ads-process-after-sign-up.webp",
      alt: "Client signing up on laptop during Google Ads onboarding and account setup.",
      points: [],
    },
  ];

  function bindGoogleAdsProcess() {
    window.activateStep = function activateStep(stepIndex) {
      const idx = Math.max(
        0,
        Math.min(GOOGLE_ADS_PROCESS_STEPS.length - 1, stepIndex | 0),
      );
      const step = GOOGLE_ADS_PROCESS_STEPS[idx];

      for (let i = 0; i < GOOGLE_ADS_PROCESS_STEPS.length; i += 1) {
        const circ = document.getElementById(`circ${i}`);
        const num = document.getElementById(`num${i}`);
        const short = document.getElementById(`short${i}`);
        const glow = document.getElementById(`glow${i}`);
        const label = document.getElementById(`label${i}`);
        const node = document.getElementById(`step${i}`);
        if (!circ || !num || !short || !label) continue;
        circ.setAttribute("fill", "#fff");
        circ.setAttribute("stroke", "rgba(15,42,74,.15)");
        circ.setAttribute("stroke-width", "2");
        circ.setAttribute("r", "36");
        num.setAttribute("fill", "#0F2A4A");
        short.setAttribute("fill", "#5B6A82");
        label.setAttribute("fill", "#5B6A82");
        if (glow) glow.setAttribute("opacity", "0");
        if (node) node.classList.remove("is-active");
      }

      const circ = document.getElementById(`circ${idx}`);
      const num = document.getElementById(`num${idx}`);
      const short = document.getElementById(`short${idx}`);
      const glow = document.getElementById(`glow${idx}`);
      const label = document.getElementById(`label${idx}`);
      const node = document.getElementById(`step${idx}`);
      if (circ && num && short && label) {
        circ.setAttribute("fill", "#FF4D3A");
        circ.setAttribute("stroke", "#FF4D3A");
        circ.setAttribute("stroke-width", "3");
        circ.setAttribute("r", "40");
        num.setAttribute("fill", "#fff");
        short.setAttribute("fill", "rgba(255,255,255,.85)");
        label.setAttribute("fill", "#FF4D3A");
        if (glow) glow.setAttribute("opacity", "1");
        if (node) node.classList.add("is-active");
      }

      const desc = document.getElementById("procDesc");
      const descNum = document.getElementById("procDescNum");
      const descTitle = document.getElementById("procDescTitle");
      const descSub = document.getElementById("procDescSub");
      const descText = document.getElementById("procDescText");
      const descPts = document.getElementById("procDescPts");
      const descImg = document.getElementById("procDescImg");
      const descTag = document.getElementById("procDescTag");

      if (desc) {
        desc.classList.remove("is-flipping");
        void desc.offsetWidth;
        desc.classList.add("is-flipping");
      }
      if (descNum) descNum.textContent = step.num;
      if (descTitle) descTitle.textContent = step.title;
      if (descSub) {
        descSub.textContent = step.subtitle || "";
        descSub.style.display = step.subtitle ? "" : "none";
      }
      if (descText) {
        descText.textContent = step.text || "";
        descText.style.display = step.text ? "" : "none";
      }
      if (descPts) {
        const points = Array.isArray(step.points) ? step.points : [];
        descPts.innerHTML = points
          .map(
            (point) =>
              `<div class="proc-desc__pt"><span class="proc-desc__pt-dot"></span>${point}</div>`,
          )
          .join("");
        descPts.style.display = points.length ? "" : "none";
      }
      if (descImg && step.image) {
        descImg.src = step.image;
        descImg.alt = step.alt || `${step.title} step visual`;
      }
      if (descTag) descTag.textContent = `Step ${step.num} · ${step.title}`;

      document.querySelectorAll("#google-ads-process .pn-dot").forEach((dot, dotIdx) => {
        dot.classList.toggle("is-active", dotIdx === idx);
      });
    };
    requestAnimationFrame(() => window.activateStep(0));
  }

  bindGoogleAdsProcess();

  document.querySelectorAll("#google-ads-process .pn-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
      window.activateStep(step);
    });
  });

  window.addEventListener("load", () => {
    setTimeout(bindGoogleAdsProcess, 0);
  });
})();
