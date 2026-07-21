(() => {
  "use strict";

  if (!window.location.pathname.includes("/healthcare-digital-marketing-agency")) {
    return;
  }

  const HEALTHCARE_GROWTH_STEPS = [
    {
      num: "01",
      title: "Market & Competitor Analysis",
      subtitle: "",
      paragraphs: [
        "We begin by analysing your market, competitors, and current online presence to identify where the biggest opportunities for growth exist.",
      ],
      image: "/assets/images/healthcare-growth-market-competitor-analysis.webp?v=20260721p",
      alt: "Healthcare marketing team analysing market competitors and online growth opportunities.",
      points: [],
    },
    {
      num: "02",
      title: "Audience & Search Intent Research",
      subtitle: "",
      paragraphs: [
        "We research how your audience searches for treatments and services, then build a strategy around the keywords and topics that attract qualified enquiries.",
      ],
      image: "/assets/images/healthcare-growth-audience-search-intent.webp?v=20260721q",
      alt: "Healthcare keyword and search intent research for treatment and service enquiries.",
      points: [],
    },
    {
      num: "03",
      title: "Website & Conversion Optimisation",
      subtitle: "",
      paragraphs: [
        "Your website is the first impression visitors will feel so we improve its speed, user experience, and conversion paths to turn more visits into enquiries.",
      ],
      image: "/assets/images/healthcare-growth-website-conversion.webp?v=20260721r",
      alt: "Healthcare website conversion optimisation for speed, UX, and enquiry paths.",
      points: [],
    },
    {
      num: "04",
      title: "SEO & Local Visibility",
      subtitle: "",
      paragraphs: [
        "We optimise your website, Google Business Profile, location pages, and local search presence so your organisation is easier to find when people need your services.",
      ],
      image: "/assets/images/healthcare-growth-seo-local-visibility.webp?v=20260721s",
      alt: "Local SEO and Google Business Profile optimisation for healthcare organisations.",
      points: [],
    },
    {
      num: "05",
      title: "Paid Campaigns",
      subtitle: "",
      paragraphs: [
        "From Google Ads to remarketing campaigns, we focus your budget on reaching people who are actively looking for the healthcare services you provide.",
      ],
      image: "/assets/images/healthcare-growth-paid-campaigns.webp?v=20260721t",
      alt: "Healthcare paid search and remarketing campaigns focused on qualified patient enquiries.",
      points: [],
    },
    {
      num: "06",
      title: "Authority Content",
      subtitle: "",
      paragraphs: [
        "We create original well-structured content that strengthens your expertise and answers the questions your audience is asking.",
      ],
      image: "/assets/images/healthcare-growth-authority-content.webp?v=20260721u",
      alt: "Medical authority content and service pages that answer patient search questions.",
      points: [],
    },
    {
      num: "07",
      title: "Performance Tracking",
      subtitle: "",
      paragraphs: [
        "Every campaign is tracked through KPI and clear reporting, so you can see what's working, where enquiries are coming from, and how your investment is performing.",
      ],
      image: "/assets/images/healthcare-growth-performance-tracking.webp?v=20260721v",
      alt: "Healthcare marketing performance tracking with KPI reporting and enquiry attribution.",
      points: [],
    },
    {
      num: "08",
      title: "Continuous Growth",
      subtitle: "",
      paragraphs: [
        "We refine campaigns and adapt to changes so your healthcare business continues to grow.",
      ],
      image: "/assets/images/healthcare-growth-continuous-growth.webp?v=20260721w",
      alt: "Ongoing healthcare campaign refinement and continuous digital growth optimisation.",
      points: [],
    },
  ];

  const ROOT = "#healthcare-growth-framework";
  let activeStepIndex = 0;
  let initialized = false;

  function renderParagraphs(container, paragraphs) {
    if (!container) return;

    const blocks = Array.isArray(paragraphs) ? paragraphs.filter(Boolean) : [];
    container.innerHTML = blocks
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
    container.style.display = blocks.length ? "" : "none";
  }

  function showHealthcareGrowthStep(stepIndex) {
    const idx = Math.max(
      0,
      Math.min(HEALTHCARE_GROWTH_STEPS.length - 1, stepIndex | 0),
    );
    const step = HEALTHCARE_GROWTH_STEPS[idx];
    activeStepIndex = idx;

    for (let i = 0; i < HEALTHCARE_GROWTH_STEPS.length; i += 1) {
      const circ = document.getElementById(`healthcareCirc${i}`);
      const num = document.getElementById(`healthcareNum${i}`);
      const short = document.getElementById(`healthcareShort${i}`);
      const glow = document.getElementById(`healthcareGlow${i}`);
      const label = document.getElementById(`healthcareLabel${i}`);
      const node = document.getElementById(`healthcareProcStep${i}`);
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

    const circ = document.getElementById(`healthcareCirc${idx}`);
    const num = document.getElementById(`healthcareNum${idx}`);
    const short = document.getElementById(`healthcareShort${idx}`);
    const glow = document.getElementById(`healthcareGlow${idx}`);
    const label = document.getElementById(`healthcareLabel${idx}`);
    const node = document.getElementById(`healthcareProcStep${idx}`);
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

    const desc = document.getElementById("healthcareProcDesc");
    const descNum = document.getElementById("healthcareProcDescNum");
    const descTitle = document.getElementById("healthcareProcDescTitle");
    const descSub = document.getElementById("healthcareProcDescSub");
    const descText = document.getElementById("healthcareProcDescText");
    const descPts = document.getElementById("healthcareProcDescPts");
    const descImg = document.getElementById("healthcareProcDescImg");
    const descTag = document.getElementById("healthcareProcDescTag");

    if (desc) {
      desc.classList.remove("is-flipping");
      void desc.offsetWidth;
      desc.classList.add("is-flipping");
    }
    if (descNum) descNum.textContent = step.num;
    if (descTitle) descTitle.textContent = step.title;
    if (descSub) {
      descSub.textContent = step.subtitle || "";
      descSub.hidden = !step.subtitle;
    }
    renderParagraphs(descText, step.paragraphs);
    if (descPts) {
      const points = Array.isArray(step.points) ? step.points : [];
      descPts.innerHTML = points
        .map(
          (point) =>
            `<div class="proc-desc__pt"><span class="proc-desc__pt-dot"></span>${point}</div>`,
        )
        .join("");
      descPts.hidden = points.length === 0;
    }
    if (descImg && step.image) {
      descImg.src = step.image;
      descImg.alt = step.alt || `${step.title} step visual`;
    }
    if (descTag) descTag.textContent = `Step ${step.num} · ${step.title}`;

    document.querySelectorAll(`${ROOT} .pn-dot`).forEach((dot, dotIdx) => {
      dot.classList.toggle("is-active", dotIdx === idx);
    });
  }

  function initHealthcareGrowthFramework() {
    if (!document.getElementById("healthcareProcDesc")) {
      return false;
    }

    document.querySelectorAll(`${ROOT} [data-healthcare-step]`).forEach((node) => {
      if (node.dataset.healthcareBound === "1") return;
      node.dataset.healthcareBound = "1";

      const activate = () => {
        const step = Number.parseInt(
          node.getAttribute("data-healthcare-step") || "0",
          10,
        );
        showHealthcareGrowthStep(step);
      };

      node.addEventListener("click", activate);
      node.addEventListener("mouseenter", activate);
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      });
    });

    document.querySelectorAll(`${ROOT} .pn-dot`).forEach((dot) => {
      if (dot.dataset.healthcareBound === "1") return;
      dot.dataset.healthcareBound = "1";

      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
        showHealthcareGrowthStep(step);
      });
    });

    if (!initialized) {
      showHealthcareGrowthStep(activeStepIndex);
      initialized = true;
    }

    return true;
  }

  function bootHealthcareGrowthFramework() {
    if (initHealthcareGrowthFramework()) return;

    document.addEventListener("DOMContentLoaded", initHealthcareGrowthFramework, {
      once: true,
    });
    window.addEventListener("load", initHealthcareGrowthFramework, { once: true });
  }

  bootHealthcareGrowthFramework();
})();
