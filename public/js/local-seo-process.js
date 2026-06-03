(() => {
  "use strict";

  if (!window.location.pathname.includes("/services/local-seo-services")) return;
  if (!document.getElementById("procDesc")) return;

  const LOCAL_SEO_PROCESS_STEPS = [
    {
      num: "01",
      title: "Website Audit – Free!",
      subtitle: "",
      text: "Our first step in improving search results for your website is an analysis of your website to increase visibility in local searches, including Google Business Profile optimisation and citation.",
      image: "/assets/images/local-seo-process-audit.webp",
      alt: "SEO team reviewing technical SEO metrics and local search ranking dashboards on wall monitors.",
      points: [
        "Google Business Profile performance",
        "Local keyword visibility",
        "Website structure",
        "Local landing pages",
        "Technical SEO issues",
        "NAP consistency",
      ],
    },
    {
      num: "02",
      title: "Competitor and SERP Analysis",
      subtitle: "",
      text: "Our team analyses your top-ranking competitors and the strategies they are following to boost their engagement by optimising for the entire SERP. After this evaluation, it becomes quite easy for us to work on the areas your business is missing.",
      image: "/assets/images/local-seo-process-competitor.webp",
      alt: "SEO specialists analysing competitor performance data on monitors and printed reports.",
      points: [
        "Featured Snippets: We optimise your content so it grabs the “position zero” spot where Google shows direct answers to people’s questions.",
        "Local Packs: We get your business into the local pack, where local businesses pop up for relevant searches.",
        "Knowledge Panels: We aim to get your business in the knowledge panel, so it’s front and centre, giving users a quick idea of what you offer.",
        "Content structure",
        "Google Business Profile strength",
        "Local backlinks",
        "Review quality and frequency",
        "Keyword targeting",
      ],
    },
    {
      num: "03",
      title: "Local Keyword and Intent Mapping",
      subtitle: "",
      text: "Successful local SEO services for small business growth require targeting keywords that match buyer intent. Optimising your pages for these keywords increases visibility in search results, including in maps results and AI-powered search, which can drive more organic website traffic, foot traffic, inquiries, and sales. That way, you’ll be sure that your site targets users who are ready to make an enquiry about your services.",
      image: "/assets/images/local-seo-process-keywords.webp",
      alt: "SEO analyst reviewing keyword performance tables and Google search results on dual monitors.",
      points: [
        "Service intent",
        "Geographic relevance",
        "Purchase intent",
        "Mobile search behaviour",
        "Local competition",
      ],
    },
    {
      num: "04",
      title: "On-page Optimisation for Service Pages",
      subtitle: "",
      text: "On-page optimisation helps to make your site more relevant for local searches and also improves user experience and conversion chances. On-page SEO for local search is all about showing Google you’re relevant to the service a customer wants, and that you’re close enough to be useful to them.",
      image: "/assets/images/local-seo-process-onpage.webp",
      alt: "Team collaborating on a service page SEO plan whiteboard with meta titles and local structure.",
      points: [
        "Meta titles and descriptions",
        "Local landing pages",
        "Internal linking",
        "Service-specific content",
        "Heading structure",
        "Location signals",
      ],
    },
    {
      num: "05",
      title: "Monthly Reporting and Performance Tracking",
      subtitle: "",
      text: "Professional SEO services are always based on transparency. We offer monthly reporting that focuses on tangible business results rather than vanity metrics. This includes local ranking gains, Google Maps visibility, increased traffic, and conversion monitoring. Monthly SEO performance is measured through comprehensive monthly reports that combine data from multiple sources to demonstrate growth and visibility.",
      image: "/assets/images/local-seo-process-reporting.webp",
      alt: "Agency team reviewing local rankings, maps data, and monthly SEO performance on screens.",
      points: [
        "Local rank tracking",
        "Traffic analysis",
        "Google Business Profile integration",
        "Backlink quality tracking",
        "Competitive analysis with benchmark local rivals in your industry",
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

    document.querySelectorAll("#local-seo-process .pn-dot").forEach((dot, dotIdx) => {
      dot.classList.toggle("is-active", dotIdx === idx);
    });
  };

  document.querySelectorAll("#local-seo-process .pn-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const step = Number.parseInt(dot.getAttribute("data-step") || "0", 10);
      window.activateStep(step);
    });
  });

  requestAnimationFrame(() => window.activateStep(0));
})();
