(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/email-marketing-services")) return;
  if (!document.getElementById("procDesc")) return;

  const EMAIL_MARKETING_PROCESS_STEPS = [
    {
      num: "01",
      title: "Discovery and Audit",
      subtitle: "",
      text: "We start our process with a free, thorough audit to analyse your email programme. This covers your current list health, segmentation, and deliverability analytics. This audit gives you a clear picture of where you are now, where you need to be, and what it costs you to generate revenue.",
      image: "/assets/images/email-marketing-process-discovery.webp",
      alt: "Team reviewing email programme audit with notification icon on monitor and consultant pointing at screen.",
      points: [],
    },
    {
      num: "02",
      title: "Strategy Development and Segmentation",
      subtitle: "",
      text: "With the help of your audit findings, we build an email marketing strategy that includes list renewal, segmentation, customer journey mapping and making a personalised campaign calendar for your seasonal, promotional and nurture series. Specific KPIs are set that are tied directly to your revenue.",
      image: "/assets/images/email-marketing-process-strategy.webp",
      alt: "Team collaborating around a tablet showing email marketing strategy and campaign icons.",
      points: [],
    },
    {
      num: "03",
      title: "Design and Automation Setup",
      subtitle: "",
      text: "Once a good strategy is built, our specialist team creates email templates, writes a welcome series, automations flow content and first campaign copy. We set personalised and specific subject lines that increase open rates. Our technical team ensures your automation setup and CRM integration for optimal delivery.",
      image: "/assets/images/email-marketing-process-design-automation.webp",
      alt: "Professional at a desk with laptop and tablet showing email marketing workflow automation graphics.",
      points: [],
    },
    {
      num: "04",
      title: "Launch and Monitor",
      subtitle: "",
      text: "First launches are carefully monitored. Open rate, click-through rate, delivery, and performance everything is well managed. Any unusual complaints or issues are addressed within hours without delay.",
      image: "/assets/images/email-marketing-process-launch-monitor.webp",
      alt: "Laptop on a desk displaying email marketing icons with envelope and notification graphics on screen.",
      points: [],
    },
    {
      num: "05",
      title: "Optimisation Reporting and Refinement",
      subtitle: "",
      text: "Every month, we provide a full report of your performance and present your recommendations for improvement and optimisation. After every report, your current email program is being refined and is ready to perform better to give you higher revenues.",
      image: "/assets/images/email-marketing-process-optimisation-reporting.webp",
      alt: "Analyst reviewing email marketing performance charts on laptop and printed analytics report.",
      points: [],
    },
  ];

  function bindEmailMarketingProcess() {
    window.activateStep = function activateStep(stepIndex) {
      const idx = Math.max(0, Math.min(EMAIL_MARKETING_PROCESS_STEPS.length - 1, stepIndex | 0));
      const step = EMAIL_MARKETING_PROCESS_STEPS[idx];

      for (let i = 0; i < EMAIL_MARKETING_PROCESS_STEPS.length; i += 1) {
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
      if (descTag) descTag.textContent = `Step ${step.num} · ${step.title}`;

      document.querySelectorAll("#email-marketing-process .pn-dot").forEach((dot, dotIdx) => {
        dot.classList.toggle("is-active", dotIdx === idx);
      });
    };
    requestAnimationFrame(() => window.activateStep(0));
  }

  bindEmailMarketingProcess();

  document.querySelectorAll("#email-marketing-process .pn-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
      window.activateStep(step);
    });
  });

  window.addEventListener("load", () => {
    setTimeout(bindEmailMarketingProcess, 0);
  });
})();
