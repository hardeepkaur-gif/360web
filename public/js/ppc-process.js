(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/ppc-services")) return;

  const ROOT = "#ppc-process";
  const PPC_PROCESS_STEPS = [
    {
      num: "01",
      title: "Review Your Account and Agree on Your Targets",
      subtitle: "",
      text: "We audit your account, then agree on a target before spending anything: cost per lead, or revenue per £1 spent (ROAS). You receive a one-page targets sheet.",
      image: "/assets/images/ppc-process-review-targets.webp?v=20261126c",
      alt: "Business handshake with a target graphic for PPC account goals",
      points: [],
    },
    {
      num: "02",
      title: "Set Up Accurate Conversion Tracking",
      subtitle: "",
      text: "Conversion tracking records calls, form fills, and purchases after each click. We test it before launch, filter out spam, and send you a list of everything tracked.",
      image: "/assets/images/ppc-process-conversion-tracking.webp?v=20261126c",
      alt: "Hands on a laptop showing a conversion tracking analytics dashboard",
      points: [],
    },
    {
      num: "03",
      title: "Build or Restructure Your Campaigns",
      subtitle: "",
      text: "After researching keywords and competitors, we build new campaigns or restructure yours, keeping what earns its place. You see a campaign map, with budgets and targets, before anything goes live.",
      image: "/assets/images/ppc-process-build-campaigns.webp?v=20261126c",
      alt: "Team at a desk reviewing charts while building campaign structure on a laptop",
      points: [],
    },
    {
      num: "04",
      title: "Launch and Manage the Learning Period",
      subtitle: "",
      text: "Once Google approves your ads, we launch and send you a note on what\u2019s live. Automated bidding adjusts to your goals during the learning period, so we avoid rash changes.",
      image: "/assets/images/ppc-process-launch-learning.webp?v=20261126c",
      alt: "Team reviewing a calendar planner on a laptop during campaign launch",
      points: [],
    },
    {
      num: "05",
      title: "Optimise and Report Every Month",
      subtitle: "",
      text: "We review search terms (what people actually typed), block wasted clicks, and test new ads. Each month you get a plain-English report on what changed, why, and what\u2019s next.",
      image: "/assets/images/ppc-process-optimise-report.webp?v=20261126c",
      alt: "Person reviewing monthly performance charts and a balance sheet on a laptop",
      points: [],
    },
  ];

  let activeStepIndex = 0;
  let initialized = false;

  function showPpcProcessStep(stepIndex) {
    const idx = Math.max(0, Math.min(PPC_PROCESS_STEPS.length - 1, stepIndex | 0));
    const step = PPC_PROCESS_STEPS[idx];
    activeStepIndex = idx;

    for (let i = 0; i < PPC_PROCESS_STEPS.length; i += 1) {
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
      // Always force the shared PPC asset (main.js may leave an older src).
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

  function lockActivateStep() {
    try {
      Object.defineProperty(window, "activateStep", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: showPpcProcessStep,
      });
    } catch (_err) {
      window.activateStep = showPpcProcessStep;
    }
  }

  function initPpcProcess() {
    if (!document.getElementById("procDesc")) return false;

    lockActivateStep();

    document.querySelectorAll(`${ROOT} [data-ppc-step]`).forEach((node) => {
      if (node.dataset.ppcBound === "1") return;
      node.dataset.ppcBound = "1";

      const activate = () => {
        const step = Number.parseInt(node.getAttribute("data-ppc-step") || "0", 10);
        showPpcProcessStep(step);
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
      if (dot.dataset.ppcBound === "1") return;
      dot.dataset.ppcBound = "1";

      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
        showPpcProcessStep(step);
      });
    });

    showPpcProcessStep(activeStepIndex);
    initialized = true;
    return true;
  }

  function bootPpcProcess() {
    lockActivateStep();

    if (initPpcProcess()) return;

    document.addEventListener("DOMContentLoaded", initPpcProcess, { once: true });
    window.addEventListener("load", () => {
      initPpcProcess();
      setTimeout(initPpcProcess, 0);
      setTimeout(initPpcProcess, 300);
      setTimeout(initPpcProcess, 1000);
    });
  }

  bootPpcProcess();
})();
