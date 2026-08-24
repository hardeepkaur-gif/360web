(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/digital-pr-agency")) return;
  if (!document.getElementById("procDesc")) return;

  const DIGITAL_PR_PROCESS_STEPS = [
    {
      num: "01",
      title: "Discovery & Strategy",
      subtitle: "You receive:",
      text: "We audit your domain and identify your link gap against competitors currently outranking you. We map every keyword target your campaign must support. This process is not just surface-level. It is a forensic analysis of exactly what your domain needs to rank.",
      image: "/assets/images/digital-pr-process-discovery.webp",
      alt: "Digital PR team auditing domain authority, keyword gaps and competitor backlink profiles.",
      points: [
        "Reports on keyword gaps",
        "Competitor backlinks",
        "Possible campaign angles",
      ],
    },
    {
      num: "02",
      title: "Campaign Creation",
      subtitle: "You receive:",
      text: "Our editorial team creates content or stories likely to grab attention from high-authority sites. We send out three campaign proposals each quarter. Each angle is validated against current journalist interest before production begins.",
      image: "/assets/images/digital-pr-process-campaign.webp",
      alt: "Editorial team developing a newsworthy digital PR campaign asset and press release.",
      points: [
        "A data asset or story piece",
        "A press release",
        "A publication target list",
      ],
    },
    {
      num: "03",
      title: "Outreach & Placement",
      subtitle: "You receive:",
      text: "We reach out to journalists through personal connections, not mass emails. This approach yields much higher response rates because every pitch is tailored to their specific beat and recent work.",
      image: "/assets/images/digital-pr-process-outreach.webp",
      alt: "Digital PR specialist pitching tailored stories to UK journalists and publication editors.",
      points: [
        "Logs of journalist responses",
        "Real-time coverage updates",
        "DR scores for each placement",
      ],
    },
    {
      num: "04",
      title: "Reporting & Iteration",
      subtitle: "You receive:",
      text: "Monthly reports highlight linked websites secured, DR scores, organic ranking shifts, and visibility gains. We don\u2019t just focus on acquiring coverage; each metric ties back to your initial ranking goals from month one.",
      image: "/assets/images/digital-pr-process-reporting.webp",
      alt: "Monthly digital PR report showing backlinks secured, domain rating gains and ranking movement.",
      points: [
        "Live link log",
        "Changes in ranking positions",
        "Plan for the next quarter\u2019s campaign",
      ],
    },
  ];

  function bindDigitalPrProcess() {
    window.activateStep = function activateStep(stepIndex) {
      const idx = Math.max(
        0,
        Math.min(DIGITAL_PR_PROCESS_STEPS.length - 1, stepIndex | 0),
      );
      const step = DIGITAL_PR_PROCESS_STEPS[idx];

      for (let i = 0; i < DIGITAL_PR_PROCESS_STEPS.length; i += 1) {
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
      if (descTag) descTag.textContent = `Step ${step.num} \u00b7 ${step.title}`;

      document.querySelectorAll("#digital-pr-process .pn-dot").forEach((dot, dotIdx) => {
        dot.classList.toggle("is-active", dotIdx === idx);
      });
    };
    requestAnimationFrame(() => window.activateStep(0));
  }

  bindDigitalPrProcess();

  document.querySelectorAll("#digital-pr-process .pn-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
      window.activateStep(step);
    });
  });

  window.addEventListener("load", () => {
    setTimeout(bindDigitalPrProcess, 0);
  });
})();
