(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/conversion-rate-optimisation-services")) return;
  if (!document.getElementById("procDesc")) return;

  const CRO_PROCESS_STEPS = [
    {
      num: "01",
      title: "Week 1\u20132 Discovery And CRO Audit",
      subtitle: "",
      text: "We link to your analytics, set up behavioural tracking heatmaps, recordings, funnel analysis and carry out an audit of your highest converting pages. At the end of week 2, you get a document with your CRO audit, which will show you exactly what your main conversion killers are, sorted by the estimated revenue impact they are having on your business. This is a custom audit unique to your site and traffic.",
      image: "/assets/images/on-page-seo-process-step-audit.webp",
      alt: "Team reviewing website audit findings, conversion data and funnel analysis on a laptop at a desk.",
      points: [],
    },
    {
      num: "02",
      title: "Week 3\u20134 Test Hypothesis And Design",
      subtitle: "",
      text: "For each problem found in your audit, we develop a custom test hypothesis. That describes our understanding of why this is happening, the proposed solution and how that particular metric should be improved as a result. Each hypothesis is reviewed according to your traffic numbers to make sure we have enough data to be statistically significant. We design the actual test copy and layouts.",
      image: "/assets/images/seo-content-landing-page-copywriting.webp",
      alt: "Hands typing on a laptop showing a landing page layout with headline and call-to-action elements.",
      points: [],
    },
    {
      num: "03",
      title: "Week 5\u20138 Conversion Tracking and Test Monitoring",
      subtitle: "",
      text: "Before an experiment can begin, we set up the tracking for the conversion goal in GA4: the specific action we are measuring purchase, form fill-out, or sign-up. We ensure the accuracy of the data, we analyse the data broken down by device and type of user, and we declare a clear victor only when statistical significance is achieved.",
      image: "/assets/images/cro-what-is-cro.png",
      alt: "Professional reviewing a landing page performance dashboard with conversion rates, funnel views and submission metrics on a laptop.",
      points: [],
    },
    {
      num: "04",
      title: "Month 3 Onward, Iteration and Scaling",
      subtitle: "",
      text: "Implementing winning tests and analysing losing tests to understand what your unique audience finds. This is an ongoing cycle; each month, we build a sharper picture of what your specific audience responds to. Reporting is monthly and written in plain English: what was tested, what occurred, what we\u2019ll be testing next and how it all impacts your bottom line.",
      image: "/assets/images/email-marketing-process-optimisation-reporting.webp",
      alt: "Analyst reviewing performance charts on laptop and printed analytics report.",
      points: [],
    },
  ];

  function bindCroProcess() {
    window.activateStep = function activateStep(stepIndex) {
      const idx = Math.max(0, Math.min(CRO_PROCESS_STEPS.length - 1, stepIndex | 0));
      const step = CRO_PROCESS_STEPS[idx];

      for (let i = 0; i < CRO_PROCESS_STEPS.length; i += 1) {
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
          .map((point) => `<div class="proc-desc__pt"><span class="proc-desc__pt-dot"></span>${point}</div>`)
          .join("");
        descPts.style.display = points.length ? "" : "none";
      }
      if (descImg && step.image) {
        descImg.src = step.image;
        descImg.alt = step.alt || `${step.title} step visual`;
      }
      if (descTag) descTag.textContent = `Step ${step.num} \u00b7 ${step.title}`;

      document.querySelectorAll("#cro-process .pn-dot").forEach((dot, dotIdx) => {
        dot.classList.toggle("is-active", dotIdx === idx);
      });
    };
    requestAnimationFrame(() => window.activateStep(0));
  }

  bindCroProcess();

  document.querySelectorAll("#cro-process .pn-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
      window.activateStep(step);
    });
  });

  window.addEventListener("load", () => {
    setTimeout(bindCroProcess, 0);
  });
})();
