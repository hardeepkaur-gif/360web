(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/seo-services")) return;

  const ROOT = "#seo-services-process";
  const SEO_SERVICES_PROCESS_STEPS = [
    {
      num: "01",
      title: "Audit",
      subtitle: "",
      text: "We review your website, search visibility, content, competitors and keyword gaps to establish where you are now.",
      image: "/assets/images/on-page-seo-process-step-audit.webp",
      alt: "SEO audit reviewing website search visibility, content, competitors and keyword gaps.",
      points: [],
    },
    {
      num: "02",
      title: "Strategy",
      subtitle: "",
      text: "You receive a plan covering priorities, relevant services and the work we are doing.",
      image: "/assets/images/home-process-strategise.webp",
      alt: "SEO strategy planning session covering priorities and relevant services.",
      points: [],
    },
    {
      num: "03",
      title: "Implementation",
      subtitle: "",
      text: "Work is underway. Your dashboard shows the agreed SEO activity in action according to the agreed plan.",
      image: "/assets/images/on-page-seo-process-step-optimise-content.webp",
      alt: "SEO implementation work underway with content optimisation in progress.",
      points: [],
    },
    {
      num: "04",
      title: "Review",
      subtitle: "",
      text: "We optimise, report honestly and adjust. If something is not working, you hear it from us first.",
      image: "/assets/images/on-page-seo-process-step-tracking.webp",
      alt: "SEO review and tracking with honest reporting and optimisation adjustments.",
      points: [],
    },
  ];

  let activeStepIndex = 0;
  let initialized = false;

  function showSeoServicesProcessStep(stepIndex) {
    const idx = Math.max(
      0,
      Math.min(SEO_SERVICES_PROCESS_STEPS.length - 1, stepIndex | 0),
    );
    const step = SEO_SERVICES_PROCESS_STEPS[idx];
    activeStepIndex = idx;

    for (let i = 0; i < SEO_SERVICES_PROCESS_STEPS.length; i += 1) {
      const circ = document.getElementById(`seoSvcCirc${i}`);
      const num = document.getElementById(`seoSvcNum${i}`);
      const short = document.getElementById(`seoSvcShort${i}`);
      const glow = document.getElementById(`seoSvcGlow${i}`);
      const label = document.getElementById(`seoSvcLabel${i}`);
      const node = document.getElementById(`seoSvcStep${i}`);
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

    const circ = document.getElementById(`seoSvcCirc${idx}`);
    const num = document.getElementById(`seoSvcNum${idx}`);
    const short = document.getElementById(`seoSvcShort${idx}`);
    const glow = document.getElementById(`seoSvcGlow${idx}`);
    const label = document.getElementById(`seoSvcLabel${idx}`);
    const node = document.getElementById(`seoSvcStep${idx}`);
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

    const desc = document.getElementById("seoSvcProcDesc");
    const descNum = document.getElementById("seoSvcProcDescNum");
    const descTitle = document.getElementById("seoSvcProcDescTitle");
    const descSub = document.getElementById("seoSvcProcDescSub");
    const descText = document.getElementById("seoSvcProcDescText");
    const descPts = document.getElementById("seoSvcProcDescPts");
    const descImg = document.getElementById("seoSvcProcDescImg");
    const descTag = document.getElementById("seoSvcProcDescTag");

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
      descPts.hidden = points.length === 0;
    }
    if (descImg && step.image) {
      if (descImg.getAttribute("src") !== step.image) {
        descImg.setAttribute("src", step.image);
      }
      descImg.alt = step.alt || `${step.title} step visual`;
    }
    if (descTag) descTag.textContent = `Step ${step.num} · ${step.title}`;

    document.querySelectorAll(`${ROOT} .pn-dot`).forEach((dot, dotIdx) => {
      dot.classList.toggle("is-active", dotIdx === idx);
    });
  }

  function initSeoServicesProcess() {
    if (!document.getElementById("seoSvcProcDesc")) return false;

    document.querySelectorAll(`${ROOT} [data-seo-services-step]`).forEach((node) => {
      if (node.dataset.seoServicesBound === "1") return;
      node.dataset.seoServicesBound = "1";

      const activate = () => {
        const step = Number.parseInt(
          node.getAttribute("data-seo-services-step") || "0",
          10,
        );
        showSeoServicesProcessStep(step);
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
      if (dot.dataset.seoServicesBound === "1") return;
      dot.dataset.seoServicesBound = "1";

      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
        showSeoServicesProcessStep(step);
      });
    });

    if (!initialized) {
      showSeoServicesProcessStep(activeStepIndex);
      initialized = true;
    }

    return true;
  }

  function bootSeoServicesProcess() {
    if (initSeoServicesProcess()) return;

    document.addEventListener("DOMContentLoaded", initSeoServicesProcess, {
      once: true,
    });
    window.addEventListener("load", () => {
      initSeoServicesProcess();
      setTimeout(initSeoServicesProcess, 0);
      setTimeout(initSeoServicesProcess, 300);
      setTimeout(initSeoServicesProcess, 1000);
    });
  }

  bootSeoServicesProcess();
})();
