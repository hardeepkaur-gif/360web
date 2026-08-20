(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/copywriting-agency")) {
    return;
  }

  const COPYWRITING_PROCESS_STEPS = [
    {
      num: "01",
      title: "We've tried copywriters before, and it didn't work.",
      subtitle: "",
      paragraphs: [
        "Usually, what happens here is: the brief was too vague, the writer did not ask enough questions, and the result sounded like nobody in particular. An ideal process starts with at least a 45-minute discussion call specifically designed to understand your brand.",
      ],
      image: "/assets/images/copywriting-process-tried.webp?v=20260819",
      alt: "Copywriter reviewing a Copywriting brief at a desk with a laptop, coffee and notebook after a previous attempt did not work.",
      points: [],
    },
    {
      num: "02",
      title: "I'm not sure we have enough to brief a writer properly.",
      subtitle: "",
      paragraphs: [
        "In most cases, you do not need that; it is usually seen that clients who come with half a brief and a rough idea of what they want often end up with better copy than those who arrive with a 20-page document. It is because expert copywriters ask the questions that show what actually needs to be said. The brief emerges from the conversation; you don't need to arrive with it.",
      ],
      image: "/assets/images/copywriting-process-brief.webp?v=20260819",
      alt: "Business workspace with laptop, strategy notes and documents used to brief a copywriter properly.",
      points: [],
    },
    {
      num: "03",
      title: "The budget feels like a lot for something we could write ourselves.",
      subtitle: "",
      paragraphs: [
        "You can do the copywriting yourself if you have the time, a good instinct for your audience, and no launch deadline. But if you're searching “digital copywriting agency UK”, something in your current copy is not working. The cost of fixing it is the project fee; the cost of not fixing it is every conversion you are losing right now.",
      ],
      image: "/assets/images/copywriting-process-budget.webp?v=20260819",
      alt: "Laptop showing copywriting on screen in a bright workspace with coffee and stationery.",
      points: [],
    },
    {
      num: "04",
      title: "We're not sure we're ready to commit to an agency.",
      subtitle: "",
      paragraphs: [
        "You are not committing to anything by getting in touch. The first conversation is free with us, takes 20 minutes, and ends with either a fixed quote you can take away and think about or an honest recommendation that someone else might be a better fit.",
      ],
      image: "/assets/images/copywriting-process-commit.webp?v=20260819",
      alt: "Professional woman smiling at her computer in a bright modern office during a first agency conversation.",
      points: [],
    },
  ];

  const ROOT = "#copywriting-holds-back";
  let activeStepIndex = 0;
  let initialized = false;

  function renderParagraphs(container, paragraphs) {
    if (!container) return;
    const blocks = Array.isArray(paragraphs) ? paragraphs.filter(Boolean) : [];
    container.innerHTML = blocks.map((paragraph) => `<p>${paragraph}</p>`).join("");
    container.style.display = blocks.length ? "" : "none";
  }

  function showCopywritingProcessStep(stepIndex) {
    const idx = Math.max(
      0,
      Math.min(COPYWRITING_PROCESS_STEPS.length - 1, stepIndex | 0),
    );
    const step = COPYWRITING_PROCESS_STEPS[idx];
    activeStepIndex = idx;

    for (let i = 0; i < COPYWRITING_PROCESS_STEPS.length; i += 1) {
      const circ = document.getElementById(`copywritingCirc${i}`);
      const num = document.getElementById(`copywritingNum${i}`);
      const short = document.getElementById(`copywritingShort${i}`);
      const glow = document.getElementById(`copywritingGlow${i}`);
      const label = document.getElementById(`copywritingLabel${i}`);
      const node = document.getElementById(`copywritingProcStep${i}`);
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

    const circ = document.getElementById(`copywritingCirc${idx}`);
    const num = document.getElementById(`copywritingNum${idx}`);
    const short = document.getElementById(`copywritingShort${idx}`);
    const glow = document.getElementById(`copywritingGlow${idx}`);
    const label = document.getElementById(`copywritingLabel${idx}`);
    const node = document.getElementById(`copywritingProcStep${idx}`);
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

    const desc = document.getElementById("copywritingProcDesc");
    const descNum = document.getElementById("copywritingProcDescNum");
    const descTitle = document.getElementById("copywritingProcDescTitle");
    const descSub = document.getElementById("copywritingProcDescSub");
    const descText = document.getElementById("copywritingProcDescText");
    const descPts = document.getElementById("copywritingProcDescPts");
    const descImg = document.getElementById("copywritingProcDescImg");
    const descTag = document.getElementById("copywritingProcDescTag");

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
    if (descTag) descTag.textContent = `Concern ${step.num} · ${step.title}`;

    document.querySelectorAll(`${ROOT} .pn-dot`).forEach((dot, dotIdx) => {
      dot.classList.toggle("is-active", dotIdx === idx);
    });
  }

  function initCopywritingProcess() {
    if (!document.getElementById("copywritingProcDesc")) {
      return false;
    }

    document.querySelectorAll(`${ROOT} [data-copywriting-step]`).forEach((node) => {
      if (node.dataset.copywritingBound === "1") return;
      node.dataset.copywritingBound = "1";

      const activate = () => {
        const step = Number.parseInt(node.getAttribute("data-copywriting-step") || "0", 10);
        showCopywritingProcessStep(step);
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
      if (dot.dataset.copywritingBound === "1") return;
      dot.dataset.copywritingBound = "1";

      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
        showCopywritingProcessStep(step);
      });
    });

    if (!initialized) {
      showCopywritingProcessStep(activeStepIndex);
      initialized = true;
    }

    return true;
  }

  function bootCopywritingProcess() {
    if (initCopywritingProcess()) return;
    document.addEventListener("DOMContentLoaded", initCopywritingProcess, { once: true });
    window.addEventListener("load", initCopywritingProcess, { once: true });
  }

  bootCopywritingProcess();
})();
