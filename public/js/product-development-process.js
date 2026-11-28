(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/product-development-services"))
    return;

  const ROOT = "#product-dev-process";
  const PRODUCT_DEV_PROCESS_STEPS = [
    {
      num: "01",
      title: "Discover and Validate Your Idea",
      subtitle: "",
      text: "First, we put your idea in front of the people you expect to buy it. You get a product brief and roadmap, or an honest no.",
      image: "/assets/images/product-development-process-discover.webp",
      alt: "Product discovery workspace validating research, vision, learning and innovation",
      points: [],
      short: "IDEA",
      label: "Discover",
    },
    {
      num: "02",
      title: "Design and Prototype with Real Users",
      subtitle: "",
      text: "Our product design and development services put a clickable prototype in front of users before writing any code. Changing a screen here costs far less than reworking it after launch.",
      image: "/assets/images/product-development-process-design.webp",
      alt: "User interface design and prototyping with brand sketches before coding",
      points: [],
      short: "UX",
      label: "Design",
    },
    {
      num: "03",
      title: "Build in Agile Sprints",
      subtitle: "",
      text: "We work in short sprints and tackle the features with the most value first. After each sprint, you help set priorities for the next.",
      image: "/assets/images/product-development-process-build.webp",
      alt: "Agile sprint planning with charts, tablets and collaborative build workflow",
      points: [],
      short: "BUILD",
      label: "Build",
    },
    {
      num: "04",
      title: "Test and Launch",
      subtitle: "",
      text: "Before go-live, we stress-test the product for security gaps and heavy traffic. Analytics tracking goes live with it, so usage data starts on launch day.",
      image: "/assets/images/product-development-process-test.webp",
      alt: "Product test and launch with rocket launch metrics and readiness dashboard",
      points: [],
      short: "QA",
      label: "Test",
    },
    {
      num: "05",
      title: "Support and Scale After Launch",
      subtitle: "",
      text: "After launch, we keep shipping fixes and new features based on how people use the product. If you later move development in-house, we hand over the code with full documentation.",
      image: "/assets/images/webdev-process-launch-support.webp",
      alt: "Post-launch product support, feature shipping and documentation handover",
      points: [],
      short: "SCALE",
      label: "Support",
    },
  ];

  let activeStepIndex = 0;
  let initialized = false;

  function showProductDevProcessStep(stepIndex) {
    const idx = Math.max(
      0,
      Math.min(PRODUCT_DEV_PROCESS_STEPS.length - 1, stepIndex | 0),
    );
    const step = PRODUCT_DEV_PROCESS_STEPS[idx];
    activeStepIndex = idx;

    for (let i = 0; i < PRODUCT_DEV_PROCESS_STEPS.length; i += 1) {
      const circ = document.getElementById(`productDevCirc${i}`);
      const num = document.getElementById(`productDevNum${i}`);
      const short = document.getElementById(`productDevShort${i}`);
      const glow = document.getElementById(`productDevGlow${i}`);
      const label = document.getElementById(`productDevLabel${i}`);
      const node = document.getElementById(`productDevStep${i}`);
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

    const circ = document.getElementById(`productDevCirc${idx}`);
    const num = document.getElementById(`productDevNum${idx}`);
    const short = document.getElementById(`productDevShort${idx}`);
    const glow = document.getElementById(`productDevGlow${idx}`);
    const label = document.getElementById(`productDevLabel${idx}`);
    const node = document.getElementById(`productDevStep${idx}`);
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

    const desc = document.getElementById("productDevProcDesc");
    const descNum = document.getElementById("productDevProcDescNum");
    const descTitle = document.getElementById("productDevProcDescTitle");
    const descSub = document.getElementById("productDevProcDescSub");
    const descText = document.getElementById("productDevProcDescText");
    const descPts = document.getElementById("productDevProcDescPts");
    const descImg = document.getElementById("productDevProcDescImg");
    const descTag = document.getElementById("productDevProcDescTag");

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
    if (descTag) descTag.textContent = `Step ${step.num} · ${step.label || step.title}`;

    document.querySelectorAll(`${ROOT} .pn-dot`).forEach((dot, dotIdx) => {
      dot.classList.toggle("is-active", dotIdx === idx);
    });
  }

  function initProductDevProcess() {
    if (!document.getElementById("productDevProcDesc")) return false;

    document.querySelectorAll(`${ROOT} [data-product-dev-step]`).forEach((node) => {
      if (node.dataset.productDevBound === "1") return;
      node.dataset.productDevBound = "1";

      const activate = () => {
        const step = Number.parseInt(
          node.getAttribute("data-product-dev-step") || "0",
          10,
        );
        showProductDevProcessStep(step);
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
      if (dot.dataset.productDevBound === "1") return;
      dot.dataset.productDevBound = "1";

      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
        showProductDevProcessStep(step);
      });
    });

    if (!initialized) {
      showProductDevProcessStep(activeStepIndex);
      initialized = true;
    }

    return true;
  }

  function bootProductDevProcess() {
    if (initProductDevProcess()) return;

    document.addEventListener("DOMContentLoaded", initProductDevProcess, {
      once: true,
    });
    window.addEventListener("load", () => {
      initProductDevProcess();
      setTimeout(initProductDevProcess, 0);
      setTimeout(initProductDevProcess, 300);
      setTimeout(initProductDevProcess, 1000);
    });
  }

  bootProductDevProcess();
})();
