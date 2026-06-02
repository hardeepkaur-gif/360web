(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/local-seo-services")) return;
  if (!document.getElementById("procDesc")) return;

  const LOCAL_SEO_PROCESS_STEPS = [
    {
      num: "01",
      title: "Website Audit (Free)",
      subtitle: "",
      text: "Our first step is a complete local SEO audit to identify visibility gaps and ranking blockers.",
      image: "/assets/images/seo-audit-process-step-discovery.webp",
      alt: "Website audit and local SEO discovery setup with reports and analytics.",
      points: [
        "Google Business Profile performance",
        "Local keyword visibility",
        "Website structure and local landing pages",
        "Technical SEO issues and NAP consistency",
      ],
    },
    {
      num: "02",
      title: "Competitor and SERP Analysis",
      subtitle: "",
      text: "We analyse top local competitors and optimise to capture stronger visibility across local SERP features.",
      image: "/assets/images/seo-audit-process-step-data-collection.webp",
      alt: "Competitor and SERP review meeting with ranking and search feature analysis.",
      points: [
        "Featured snippets optimisation",
        "Local pack visibility strategy",
        "Knowledge panel opportunities",
        "Content structure and local backlink review",
      ],
    },
    {
      num: "03",
      title: "Local Keyword and Intent Mapping",
      subtitle: "",
      text: "We map service + location keywords to buyer intent so your pages target users ready to enquire.",
      image: "/assets/images/seo-audit-process-step-full-audit.webp",
      alt: "Analyst mapping local keywords and intent by geography and search behavior.",
      points: [
        "Service intent",
        "Geographic relevance",
        "Purchase intent",
        "Mobile search behavior and local competition",
      ],
    },
    {
      num: "04",
      title: "On-page Optimisation for Service Pages",
      subtitle: "",
      text: "We optimise your key pages so Google understands service relevance and local proximity signals.",
      image: "/assets/images/seo-audit-process-step-priority-scoring.webp",
      alt: "Team prioritising on-page local SEO actions by impact and urgency.",
      points: [
        "Meta titles and descriptions",
        "Local landing pages and internal linking",
        "Service-specific content and heading structure",
        "Location relevance signals",
      ],
    },
    {
      num: "05",
      title: "Monthly Reporting and Performance Tracking",
      subtitle: "",
      text: "We report on measurable outcomes and conversion movement, not vanity metrics.",
      image: "/assets/images/seo-audit-process-step-report.webp",
      alt: "Monthly local SEO reporting dashboard with rank, traffic, and conversion tracking.",
      points: [
        "Local rank tracking and maps visibility",
        "Traffic, calls, and enquiry performance",
        "GBP integration and backlink quality tracking",
        "Competitive benchmark analysis",
      ],
    },
    {
      num: "06",
      title: "Refinement and Growth Iteration",
      subtitle: "",
      text: "After each cycle, we refine strategy around your strongest growth opportunities and weakest visibility gaps.",
      image: "/assets/images/seo-audit-process-step-strategy-call.webp",
      alt: "Strategy review call to refine local SEO actions and growth priorities.",
      points: [
        "Fix missed areas identified in reviews",
        "Scale winning location pages and terms",
        "Improve review quality and consistency",
        "Sustain rankings with ongoing optimisation",
      ],
    },
  ];

  window.activateStep = function activateStep(stepIndex) {
    const idx = Math.max(0, Math.min(LOCAL_SEO_PROCESS_STEPS.length - 1, stepIndex | 0));
    const step = LOCAL_SEO_PROCESS_STEPS[idx];

    for (let i = 0; i < LOCAL_SEO_PROCESS_STEPS.length; i += 1) {
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
      // trigger reflow
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

    document.querySelectorAll(".pn-dot").forEach((dot, dotIdx) => {
      dot.classList.toggle("is-active", dotIdx === idx);
    });
  };

  requestAnimationFrame(() => window.activateStep(0));
})();

