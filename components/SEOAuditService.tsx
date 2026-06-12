"use client";

import { useState, type ReactNode } from "react";

const SECTION_WRAP =
  "px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20";
const INNER = "w-full max-w-7xl mx-auto";
const H1 =
  "text-[32px] leading-tight md:text-4xl lg:text-5xl font-bold";
const H2 =
  "text-[28px] leading-tight md:text-4xl lg:text-5xl font-bold";
const H3 =
  "text-[24px] leading-tight md:text-4xl lg:text-5xl font-bold";
const P =
  "text-sm md:text-base lg:text-lg";
const GRID =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8";
const FLEX_ROW =
  "flex flex-col md:flex-row";
const BTN =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[15px] w-full md:w-auto px-6 py-3 transition-opacity hover:opacity-90";
const IMG = "w-full h-auto object-cover";
const GRAD_CORAL = "text-[#FF4D3A]";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Business Context",
    text: "We understand your website, target audience, services, locations, competitors and commercial goals.",
    image: "/assets/images/seo-audit-process-step-discovery.png",
    alt: "Team collaborating around a table with charts, laptop and documents in a discovery meeting.",
    tag: "Step 01 · Discovery & Business Context",
    short: "DISCOVER",
  },
  {
    num: "02",
    title: "Data Collection",
    text: "We review Search Console, GA4, crawl data, keyword rankings, backlink tools and live SERPs.",
    image: "/assets/images/seo-audit-process-step-data-collection.png",
    alt: "Presenter reviewing spreadsheets and charts on a boardroom screen with colleagues at the table.",
    tag: "Step 02 · Data Collection",
    short: "DATA",
  },
  {
    num: "03",
    title: "Full Website Audit",
    text: "We inspect technical issues, content quality, page structure, keyword targeting and competitor performance.",
    image: "/assets/images/seo-audit-process-step-full-audit.png",
    alt: "Analyst at a desk reviewing analytics dashboards and charts on a large monitor.",
    tag: "Step 03 · Full Website Audit",
    short: "WEBSITE",
  },
  {
    num: "04",
    title: "Priority Scoring",
    text: "Every issue is ranked by impact, urgency and effort. You know what to fix first.",
    image: "/assets/images/seo-audit-process-step-priority-scoring.png",
    alt: "Hands holding a phone with a satisfaction-style gauge overlay suggesting scored priorities.",
    tag: "Step 04 · Priority Scoring",
    short: "PRIORITY",
  },
  {
    num: "05",
    title: "SEO Audit Report",
    text: "You receive a clear report with findings, screenshots, explanations and recommended actions.",
    image: "/assets/images/seo-audit-process-step-report.png",
    alt: "Professional at a monitor displaying REPORT with charts search and analytics style icons.",
    tag: "Step 05 · SEO Audit Report",
    short: "REPORT",
  },
  {
    num: "06",
    title: "Strategy Call",
    text: "We walk you through the audit in plain English and explain the best next steps.",
    image: "/assets/images/seo-audit-process-step-strategy-call.png",
    alt: "Consultant on a phone call at a desk with annual report charts visible on monitor.",
    tag: "Step 06 · Strategy Call",
    short: "STRATEGY",
  },
  {
    num: "07",
    title: "Implementation Support",
    text: "You can fix issues internally, share the report with your developer, or let our SEO team handle the execution.",
    image: "/assets/images/seo-audit-process-step-implementation-support.png",
    alt: "Person holding a phone with a SUPPORT overlay showing tools globe email and gears icons.",
    tag: "Step 07 · Implementation Support",
    short: "SUPPORT",
  },
] as const;

type AuditSvc = {
  title: string;
  img: string;
  alt: string;
  bullets: string[];
  extra?: ReactNode;
};

const AUDIT_SERVICES: AuditSvc[] = [
  {
    title: "Technical SEO Audit",
    img: "/assets/images/seo-audit-service-technical.png",
    alt: "Two professionals reviewing a bar chart and data on a laptop at a desk.",
    bullets: [
      "Crawling and indexing",
      "XML sitemap",
      "Robots.txt",
      "Site architecture",
      "URL structure",
      "Broken links",
      "Redirect chains",
      "Canonical tags",
      "Duplicate pages",
      "Core Web Vitals",
      "Mobile usability",
      "Page speed",
      "Schema markup",
      "HTTPS and security issues",
    ],
  },
  {
    title: "On-Page SEO Audit",
    img: "/assets/images/seo-audit-service-on-page.png",
    alt: "Analyst comparing printed charts with performance dashboards on a large monitor.",
    bullets: [
      "Meta titles",
      "Meta descriptions",
      "H1 and heading structure",
      "Keyword targeting",
      "Search intent match",
      "Internal links",
      "Image alt text",
      "Page structure",
      "CTA placement",
      "Content depth",
    ],
  },
  {
    title: "Content Audit",
    img: "/assets/images/seo-audit-service-content.png",
    alt: "Team reviewing printed charts, tablet spreadsheets and laptop analytics on a wooden table.",
    bullets: [
      "Thin content",
      "Outdated content",
      "Duplicate content",
      "Cannibalisation",
      "Missing topical coverage",
      "Blog performance",
      "Service page quality",
      "Content gaps",
      "E-E-A-T signals",
      "Pages with traffic but low conversions",
    ],
  },
  {
    title: "Keyword & Search Intent Audit",
    img: "/assets/images/seo-audit-service-keyword-intent.png",
    alt: "Graphic search bar labelled Keywords with magnifying glass over professional workspace collage.",
    bullets: [
      "Current ranking keywords",
      "Lost keywords",
      "Low-hanging keyword opportunities",
      "Commercial intent keywords",
      "Informational support topics",
      "Keyword gaps against competitors",
      "Pages targeting the wrong intent",
    ],
  },
  {
    title: "Competitor SEO Audit",
    img: "/assets/images/seo-audit-service-competitor.png",
    alt: "Two colleagues reviewing charts and performance printouts on a clipboard at a desk.",
    bullets: [
      "Competitor rankings",
      "Page structures",
      "Content depth",
      "Backlinks",
      "Internal linking",
      "Topic coverage",
      "Service page positioning",
      "SERP features they are winning",
    ],
  },
  {
    title: "Backlink Audit",
    img: "/assets/images/seo-audit-service-backlink.png",
    alt: "Analyst at a monitor displaying BACKLINKS with SEO and linking icons on screen.",
    bullets: [
      "Link quality",
      "Toxic or weak links",
      "Authority gaps",
      "Anchor text profile",
      "Competitor backlinks",
      "Digital PR opportunities",
      "Local citation strength",
    ],
  },
  {
    title: "Local SEO Audit",
    img: "/assets/images/seo-audit-service-local.png",
    alt: "Person holding a phone with a glowing projected SEO interface showing search and analytics icons.",
    bullets: [
      "Google Business Profile",
      "Local rankings",
      "NAP consistency",
      "Local landing pages",
      "Reviews",
      "Location pages",
      "Local schema",
      "Map visibility",
    ],
  },
  {
    title: "AI Visibility / GEO Audit",
    img: "/assets/images/seo-audit-service-ai-geo.png",
    alt: "Presenter with calculator beside business reports, charts on board and tablet with dashboards.",
    bullets: [],
    extra: (
      <>
        <p className={`${P} mb-2`}>
          We analyse how your brand may appear in:
        </p>
        <ul className={`${P} list-disc pl-5 space-y-1 mb-4`}>
          <li>Google AI Overviews</li>
          <li>ChatGPT-style answers</li>
          <li>Perplexity</li>
          <li>Gemini</li>
          <li>Bing Copilot</li>
          <li>Answer engines</li>
        </ul>
        <p className={`${P} font-semibold mb-2`}>Check:</p>
        <ul className={`${P} list-disc pl-5 space-y-1`}>
          <li>Brand mentions</li>
          <li>Entity clarity</li>
          <li>Content structure</li>
          <li>FAQ depth</li>
          <li>Citation-worthy content</li>
          <li>Author/business trust signals</li>
          <li>Schema and structured information</li>
        </ul>
      </>
    ),
  },
];

const COMPARE_ROWS: [string, string][] = [
  [
    "Automated checks and generic scores",
    "Manual analysis by experienced SEO specialists",
  ],
  ["Highlights symptoms", "Identifies root causes affecting rankings"],
  [
    "Limited technical checks",
    "Full technical, content, competitor, and backlink analysis",
  ],
  [
    "No commercial context",
    "Recommendations based on traffic, leads, and revenue potential",
  ],
  [
    "Same report for every website",
    "Tailored audit built around your business goals",
  ],
  [
    "Often used as a lead-generation tool",
    "Built to guide real SEO decisions",
  ],
  [
    "Surface-level page checks",
    "Deep crawl data, analytics, search visibility, and competitor insights",
  ],
  [
    "No implementation strategy",
    "Clear priorities, quick wins, and a practical SEO roadmap",
  ],
  [
    "No AI search analysis",
    "Includes modern visibility opportunities across AI-driven search",
  ],
];

const PROBLEMS: { title: string; desc: string }[] = [
  {
    title:
      "Your website looks great, but important pages are not ranking",
    desc: "We review your site structure, keyword targeting and on page optimization to find out why search engines are ignoring valuable pages.",
  },
  {
    title: "Organic traffic is growing, but enquiries are not",
    desc: "We analyse search intent, landing page structure and content quality to determine where visitors are leaving the funnel before converting.",
  },
  {
    title:
      "Pages are published, but not appearing in Google search results",
    desc: "We look at crawlability, indexation, sitemap setup, robots and canonicals to identify technical obstacles to visibility.",
  },
  {
    title: "Rankings dropped after a website redesign or migration",
    desc: "We examine redirects, metadata loss, broken links, URL changes and indexing errors that frequently appear after a website goes live.",
  },
  {
    title: "Competitors keep outranking you for valuable keywords",
    desc: "We compare your content, authority, page structure and keyword coverage with your competitors and share with you what they are doing better.",
  },
  {
    title:
      "Your website has traffic, but key service pages are underperforming",
    desc: "We review page intent, content depth, keyword alignment and trust signals to strengthen commercial visibility.",
  },
  {
    title: "SEO reports show activity, but growth feels unclear",
    desc: "We don’t waste time on busy work and don’t get caught up in what’s not moving rankings and leads, we stick to what does.",
  },
  {
    title:
      "Your content ranks in traditional search, but lacks visibility in AI-driven search",
    desc: "We evaluate entity signals, structured data and content formatting to enhance your brand’s visibility in AI search results such as Google’s AI Overview and ChatGPT.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is included in an SEO audit?",
    a: "Our SEO audit includes technical SEO, on-page optimisation, content quality, keyword opportunities, competitor analysis, backlinks, user experience and conversion barriers, all prioritised in a clear action plan.",
  },
  {
    q: "Do I need access to Google Analytics and Search Console?",
    a: "Not required but strongly suggested. Access provides us with greater understanding of traffic, rankings, user behaviour and technical challenges.",
  },
  {
    q: "Can you audit a website before a redesign?",
    a: "Yes, and we highly recommend it! A pre-launch SEO audit safeguards existing rankings, traffic, and SEO equity in the event of a redesign or migration.",
  },
  {
    q: "Can an SEO audit help after a traffic drop?",
    a: "Absolutely. We investigate technical issues, algorithm impacts, content performance, competitor movements, and indexing problems to find the root cause.",
  },
  {
    q: "Is an SEO audit enough to improve rankings?",
    a: "An audit provides you with the roadmap. The better the right fixes are made and applied correctly and consistently, the higher the rankings will be.",
  },
  {
    q: "Can you implement the SEO audit recommendations?",
    a: "Yes, you can do it yourself, with your staff, or have 360 Web Solutions do it.",
  },
  {
    q: "Do you offer AI visibility audits?",
    a: "Yes, we review and audit content structure, entity signals, schema, and citation opportunities for your brand across new search experiences and how they are positioned for AI-powered search.",
  },
];

const WHY_CHOOSE: string[] = [
  "Every audit is led by senior SEO specialists and content strategists.",
  "We do not send automated reports filled with warnings. Every finding is reviewed manually, prioritised commercially, and explained in plain English.",
  "We analyse rankings, traffic, content, technical SEO, competitor movements, and conversion barriers as one connected system, not separate checklists.",
  "We tell you what to fix now, what can wait, and what is simply not worth your budget.",
  "Our audits are built around revenue opportunities with no vanity metrics.",
  "We benchmark your website against real competitors in live UK search results.",
  "Alongside traditional SEO, we assess how your brand is positioned for AI-driven search, answer engines, and emerging organic visibility opportunities.",
  "Every recommendation is implementation-ready, whether your internal team handles the work or you choose us to deliver it.",
];

export default function SEOAuditService() {
  const [svcIdx, setSvcIdx] = useState(0);
  const [procIdx, setProcIdx] = useState(0);
  const activeSvc = AUDIT_SERVICES[svcIdx];

  return (
    <div className="bg-white text-[#0F2A4A]">
      {/* Hero */}
      <section
        className={`${SECTION_WRAP} bg-gradient-to-b from-[#F9EEE9] via-white to-[#F6EAEF]`}
        aria-labelledby="seo-audit-hero-title"
      >
        <div
          className={`${INNER} flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center`}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
            <span
              className={`${P} inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(26,95,191,.12)] bg-[rgba(210,220,240,.6)] px-4 py-2 font-semibold`}
            >
              <span className="h-2 w-2 rounded-full bg-[#FF4D3A]" aria-hidden />
              UK in-house team · Technical & on-page · Prioritised fixes
            </span>
            <h1 id="seo-audit-hero-title" className={H1}>
              <span className="block">
                <span className="text-[#1A5FBF]">SEO Audit Services</span>{" "}
                That Show What&apos;s Really
              </span>
              <span className={`block ${GRAD_CORAL}`}>
                Holding Your Website Back
              </span>
            </h1>
            <p className={`${P} max-w-3xl`}>
              <strong>
                Most SEO problems are not obvious from the surface.
              </strong>{" "}
              Your website may look fine, but hidden technical issues, weak
              content structure, missed keywords, poor internal linking or
              competitor gaps can quietly stop rankings, traffic and leads.
            </p>
            <p className={`${P} max-w-3xl`}>
              Our SEO audit services give you a clear, evidence-based view of
              what is working, what is failing and what should be fixed first.
            </p>
            <div className={`${FLEX_ROW} flex-wrap gap-4 md:gap-6`}>
              <a
                href="/#contact"
                className={`${BTN} bg-[#FF4D3A] text-white`}
              >
                Book Your SEO Audit
              </a>
              <a
                href="#seo-audit-workflow"
                className={`${BTN} border border-[#1A5FBF]/25 bg-white text-[#0F2A4A]`}
              >
                How We Work
              </a>
            </div>
          </div>
          <div className="relative order-last flex min-w-0 flex-1 justify-center md:order-none">
            <img
              src="/assets/images/seo-audit-hero.png"
              alt="Laptop illustration with analytics, world map and magnifying glass"
              width={800}
              height={800}
              className={`${IMG} max-w-lg`}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Built for rankings */}
      <section
        id="seo-audit-built-for-rankings"
        className={SECTION_WRAP}
        aria-labelledby="seo-audit-split-title"
      >
        <div className={INNER}>
          <div className={`${GRID} items-start lg:grid-cols-2`}>
            <div className={`${FLEX_ROW} gap-4 md:gap-6 lg:col-span-1 lg:flex-row`}>
              <div className="relative flex min-w-0 flex-1 flex-col gap-4">
                <img
                  src="/assets/images/seo-audit-built-for-rankings-main.png"
                  alt="Desktop monitor on a desk showing analytics dashboards with charts and performance metrics."
                  width={560}
                  height={700}
                  className={`${IMG} rounded-3xl shadow-xl`}
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=80"
                  alt="Team reviewing search analytics and audit findings together."
                  width={280}
                  height={180}
                  className={`${IMG} rounded-2xl`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-4 md:gap-6">
              <h2 id="seo-audit-split-title" className={H2}>
                What Is an <span className={GRAD_CORAL}>SEO Audit?</span>
              </h2>
              <p className={P}>
                An SEO audit is an in-depth analysis of your site&apos;s organic search results. It
                can pinpoint technical problems, content gaps, keyword gaps, and
                competitor opportunities that could be preventing you from
                appearing in search engines such as Google.
              </p>
              <p className={P}>
                Simply put, it lets you know what is working for your website,
                what isn&apos;t, and where the best opportunities for improvement
                lie.
              </p>
              <p className={P}>
                Even with a well-designed website, if search engines are unable
                to crawl, understand, or trust the content, it can be difficult
                to get consistent organic traffic. Issues such as slow page
                speed, indexing errors, duplicate pages, weak internal linking,
                outdated content, or poor keyword targeting can quietly impact
                rankings, enquiries, and revenue.
              </p>
              <p className={P}>
                A professional SEO audit takes the hassle out of it. It provides
                your business with a clear and evidence-based picture of where
                your website stands today, how it is doing compared to your
                competitors, and what you need to do next to get a better
                ranking, more traffic and more conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why needs audit */}
      <section
        id="seo-audit-process"
        className={`${SECTION_WRAP} bg-[#f5f7fa]`}
        aria-labelledby="seo-audit-proc-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              Why it matters
            </span>
            <h2 id="seo-audit-proc-title" className={`${H2} mb-4`}>
              Why Your Website Needs an{" "}
              <span className={GRAD_CORAL}>SEO Audit</span>
            </h2>
            <p className={P}>
              A professional SEO audit service will give you a clear
              understanding of what is holding your website back from ranking,
              getting the right visitors and lead in consistent enquiries.
            </p>
            <p className={`${P} mt-3`}>
              From a drop in rankings to a slowdown in leads or even investing in
              SEO without a clear direction, a website SEO audit provides you with
              the data, clarity, and action plan to move forward with confidence.
            </p>
          </header>

          <div className={`${FLEX_ROW} gap-8 md:gap-12 lg:gap-16`}>
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              {[
                {
                  n: "01",
                  t: "Your rankings have dropped",
                  b: "There’s always a reason why your website isn’t visible in Google. Rankings can be affected by algorithm changes, technical SEO problems, poor content signals, indexing errors, loss of backlinks, or a stronger competitor. Our SEO audit services reveal what has changed, which pages have been impacted and what needs to be done to regain organic performance.",
                },
                {
                  n: "02",
                  t: "Your traffic is not turning into leads",
                  b: "Traffic means very little if visitors are not converting. Our website SEO audit looks beyond rankings to identify content gaps, weak landing pages, poor keyword targeting, UX issues, and missed conversion opportunities that may be costing your business enquiries. The goal is not just more traffic. It is better traffic that turns into leads.",
                },
                {
                  n: "03",
                  t: "Your agency is sending reports, but results are unclear",
                  b: "Businesses get monthly SEO reports that come with charts, rankings, and technical jargon, but don’t know what’s actually driving growth. An independent SEO audit service can provide you with a true and fair view of your organic performance, what you are doing well, what you are not doing well and where the opportunities really are.",
                },
                {
                  n: "04",
                  t: "Your website was redesigned or migrated",
                  b: "Some SEO problems are hidden when launching a site, redesigning or changing the CMS or domain name. Ranking issues can quietly creep up on you, such as broken redirects, lost metadata, indexing errors, duplicate pages and internal linking. Our technical SEO audit uncovers migration problems before they affect visibility in the long-term.",
                },
                {
                  n: "05",
                  t: "You are planning an SEO campaign",
                  b: "You can’t invest in monthly SEO, content marketing, or link building without knowing where your site is at now. Our SEO audit company evaluates your technical configuration, keyword exposure, rivals, material quality, and development opportunities, so your SEO strategy begins with information.",
                },
              ].map((item) => (
                <article key={item.n} className={`${FLEX_ROW} gap-4 rounded-2xl border border-[#E5EAF2] bg-white p-4 md:p-6`}>
                  <div className={`${P} shrink-0 font-black text-[#FF4D3A]`}>
                    {item.n}
                  </div>
                  <div className="min-w-0">
                    <h3 className={`${H3} mb-2 text-left`}>{item.t}</h3>
                    <p className={P}>{item.b}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="relative flex min-w-0 flex-1 justify-center">
              <img
                src="/assets/images/seo-audit-why-needs-audit.png"
                alt="Specialist at a desk studying analytics dashboards on a large monitor in a dim workspace."
                width={900}
                height={900}
                className={`${IMG} max-w-xl rounded-3xl`}
                loading="lazy"
                decoding="async"
              />
              <div className={`${P} absolute bottom-4 left-4 right-4 mx-auto max-w-sm rounded-2xl bg-[#0F2A4A] p-4 text-center text-white md:bottom-8`}>
                <div className="text-2xl font-bold text-[#FF4D3A]">
                  +312%
                </div>
                <div>Average client ROI in 90 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services include */}
      <section
        id="seo-audit-include"
        className={SECTION_WRAP}
        aria-labelledby="seo-audit-include-title"
      >
        <div className={INNER}>
          <header className="mb-10 text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
              Our Services
            </span>
            <h2 id="seo-audit-include-title" className={H2}>
              What Our <span className={GRAD_CORAL}>SEO Audit Services</span>{" "}
              Include
            </h2>
          </header>

          <div className={`${FLEX_ROW} gap-8 md:gap-12`}>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              {AUDIT_SERVICES.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setSvcIdx(i)}
                  className={`${P} flex w-full md:w-auto flex-col md:flex-row items-start md:items-center gap-2 rounded-xl border px-4 py-3 text-left transition-colors ${i === svcIdx ? "border-[#FF4D3A] bg-[#FFF1F0]" : "border-[#E5EAF2] bg-white"}`}
                >
                  <span className="font-bold text-[#FF4D3A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{s.title}</span>
                </button>
              ))}
            </div>
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-3xl border border-[#E5EAF2] bg-[#F5F7FA] md:min-h-[420px]">
              <img
                src={activeSvc.img}
                alt={activeSvc.alt}
                className={`${IMG} max-h-[420px] object-cover`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <h3 className={`${H3} mb-3 text-white`}>{activeSvc.title}</h3>
                <div className={`${P} max-h-56 overflow-y-auto text-white/95 md:max-h-none md:overflow-visible`}>
                  {activeSvc.extra ?? (
                    <ul className="columns-1 gap-x-8 md:columns-2 lg:columns-2">
                      {activeSvc.bullets.map((b) => (
                        <li key={b} className="break-inside-avoid py-1">
                          • {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="seo-audit-workflow"
        className={`${SECTION_WRAP} bg-[#fafbfd]`}
        aria-labelledby="seo-audit-workflow-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              Workflow
            </span>
            <h2 id="seo-audit-workflow-title" className={`${H2} mb-4`}>
              Our <span className={GRAD_CORAL}>SEO Audit</span> Process
            </h2>
            <p className={P}>
              From discovery through to implementation, every step is designed to
              give you clarity, evidence and a practical order of work — not a
              generic checklist.
            </p>
          </header>

          <div className={`${FLEX_ROW} gap-8 md:gap-12 lg:gap-16`}>
            <div className="flex min-w-0 flex-1 flex-wrap justify-center gap-3 md:justify-start">
              {PROCESS_STEPS.map((st, i) => (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setProcIdx(i)}
                  className={`${BTN} border ${procIdx === i ? "border-[#FF4D3A] bg-[#FFF1F0]" : "border-[#E5EAF2] bg-white"} px-4 py-2 text-sm md:text-base`}
                  aria-pressed={procIdx === i}
                >
                  <span className="font-black text-[#FF4D3A]">{st.num}</span>
                  <span className="font-semibold">{st.short}</span>
                </button>
              ))}
            </div>
            <div className={`${FLEX_ROW} flex-1 gap-6 md:gap-8`}>
              <div className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-[#E5EAF2] bg-white">
                <img
                  src={PROCESS_STEPS[procIdx].image}
                  alt={PROCESS_STEPS[procIdx].alt}
                  className={`${IMG} max-h-80`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <span className={`${P} font-semibold text-[#1A5FBF]`}>
                  {PROCESS_STEPS[procIdx].tag}
                </span>
                <span className={`${P} text-4xl font-black text-[#FF4D3A]`}>
                  {PROCESS_STEPS[procIdx].num}
                </span>
                <h3 className={H3}>{PROCESS_STEPS[procIdx].title}</h3>
                <p className={P}>{PROCESS_STEPS[procIdx].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section
        id="why-choose-seo-audit"
        className={`${SECTION_WRAP} bg-[#F5F7FA]`}
        aria-labelledby="seo-audit-choose-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              Why choose 360
            </span>
            <h2 id="seo-audit-choose-title" className={H2}>
              Why Choose 360 Web Solutions for{" "}
              <span className={GRAD_CORAL}>SEO Audits?</span>
            </h2>
          </header>

          <div className={GRID}>
            {WHY_CHOOSE.map((text, i) => (
              <article
                key={i}
                className={`${FLEX_ROW} gap-4 rounded-2xl border border-[#E5EAF2] bg-white p-4 md:p-6`}
              >
                <span className={`${P} shrink-0 font-black text-[#1A5FBF]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={P}>{text}</p>
              </article>
            ))}
          </div>

          <div className={`${FLEX_ROW} mt-8 gap-4 rounded-2xl border border-[#FF4D3A]/30 bg-white p-4 md:mt-12 md:p-8`}>
            <div className="min-w-0 flex-1">
              <p className={`${P} mb-4`}>
                <strong>Most importantly</strong> — you leave with clarity,
                priorities, and a roadmap built to grow traffic, leads, and
                long-term search visibility.
              </p>
              <p className={P}>
                <strong>From 360</strong> — because we cover every angle under
                one UK team, your audit can flow straight into on-page SEO,
                content, and web execution with the same people who wrote the
                priorities — not a disconnected handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section
        id="seo-audit-vs-free-compare"
        className={`${SECTION_WRAP} bg-[#0F2A4A] text-white`}
        aria-labelledby="seo-audit-vs-free-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-white/70`}>
              Free tool vs professional audit
            </span>
            <h2 id="seo-audit-vs-free-title" className={`${H2}`}>
              SEO Audit vs{" "}
              <span className={GRAD_CORAL}>Free Website Audit</span>
            </h2>
            <p className={`${P} mt-4 text-white/85`}>
              Before investing in SEO, many businesses try a free website audit
              tool. While these tools can highlight surface-level issues, they
              rarely explain why problems exist, what is affecting rankings, or
              what should be fixed first.
            </p>
          </header>

          <div className={`${FLEX_ROW} mb-8 justify-center gap-4 md:gap-8`}>
            <span className={`${P} rounded-full border border-white/20 px-4 py-2`}>
              Free Website Audit
            </span>
            <span className={`${P} rounded-full border border-[#FF4D3A] bg-[#FF4D3A]/15 px-4 py-2`}>
              Professional SEO Audit
            </span>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {COMPARE_ROWS.map(([free, pro], idx) => (
              <div key={idx} className={GRID}>
                <div className={`${P} rounded-2xl border border-white/15 bg-white/5 p-4 md:p-6`}>
                  {free}
                </div>
                <div className={`${P} rounded-2xl border border-[#FF4D3A]/40 bg-white/10 p-4 md:p-6 lg:col-span-2`}>
                  {pro}
                </div>
              </div>
            ))}
          </div>

          <div className={`${FLEX_ROW} mt-10 items-center justify-between gap-6 md:mt-14`}>
            <h3 className={`${H3} flex-1 text-left text-white`}>
              Ready for an audit that explains the &ldquo;why&rdquo; and what to
              do next?
            </h3>
            <a href="/#contact" className={`${BTN} bg-[#FF4D3A] text-white`}>
              Book a professional SEO audit
            </a>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section
        id="seo-audit-common-problems"
        className={SECTION_WRAP}
        aria-labelledby="seo-audit-problems-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              What we see most often
            </span>
            <h2 id="seo-audit-problems-title" className={H2}>
              Common SEO Problems <span className={GRAD_CORAL}>We Find</span>
            </h2>
            <p className={P}>
              The following are the most common SEO problems that we encounter.
            </p>
          </header>

          <div className={GRID}>
            {PROBLEMS.map((card, i) => (
              <article
                key={i}
                className="flex flex-col gap-3 rounded-2xl border border-[#E5EAF2] bg-[#fafbfd] p-4 md:p-6"
              >
                <span className={`${P} font-black text-[#1A5FBF]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={H3}>{card.title}</h3>
                <p className={P}>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Duration */}
      <section
        id="seo-audit-duration"
        className={`${SECTION_WRAP} bg-[#F5F7FA]`}
        aria-labelledby="seo-audit-duration-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              Planning & delivery
            </span>
            <h2 id="seo-audit-duration-title" className={H2}>
              How Long Does an <span className={GRAD_CORAL}>SEO Audit Take?</span>
            </h2>
            <p className={P}>
              The time frame for an SEO audit varies depending on the size,
              complexity and extent of analysis you need for your website, but
              most SEO audits are finished in 2-10 working days.
            </p>
          </header>

          <div className={`${GRID} items-start lg:grid-cols-2`}>
            <div className="flex flex-col gap-6">
              {[
                {
                  h: "Smaller business websites usually take less time",
                  p: "In most cases, we can perform the audit within a few working days if your website is focused on a set of service pages and has a simple structure.",
                },
                {
                  h: "Larger websites need deeper investigation",
                  p: "A detailed review may be necessary for ecommerce stores, multi-location websites, content-heavy websites, or websites that have previously suffered from SEO problems.",
                },
                {
                  h: "Migration reviews and traffic-drop investigations may take longer",
                  p: "If rankings have decreased following a redesign, platform change or major update, further analysis may be required to determine the cause.",
                },
              ].map((item) => (
                <article key={item.h} className="rounded-2xl border border-[#E5EAF2] bg-white p-4 md:p-6">
                  <h3 className={`${H3} mb-3`}>{item.h}</h3>
                  <p className={P}>{item.p}</p>
                </article>
              ))}
            </div>
            <div className={`${FLEX_ROW} gap-6`}>
              <img
                src="/assets/images/seo-audit-duration-visual.png"
                alt="Team around a conference table reviewing web design on a monitor, charts and laptops."
                width={640}
                height={480}
                className={`${IMG} rounded-3xl shadow-lg`}
                loading="lazy"
                decoding="async"
              />
              <blockquote className={`${P} rounded-2xl border border-[#1A5FBF]/20 bg-white p-4 md:p-6`}>
                <strong>Typical range:</strong> 2–10 working days — we&apos;ll
                confirm after a quick scoping call.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="seo-audit-cost"
        className={SECTION_WRAP}
        aria-labelledby="seo-audit-cost-title"
      >
        <div className={INNER}>
          <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              Investment guide
            </span>
            <h2 id="seo-audit-cost-title" className={H2}>
              How Much Does an <span className={GRAD_CORAL}>SEO Audit Cost?</span>
            </h2>
            <p className={P}>
              The price of an SEO audit in the UK will vary from £300 to £3,000+
              and will depend on the size of your website, the technical
              complexity and the level of analysis that you need.
            </p>
          </header>

          <div className={GRID}>
            {[
              {
                tag: "Starter",
                title:
                  "Smaller business websites usually start from £300–£750",
                desc: "Perfect for service websites, brochure websites and local businesses who need a clear SEO health check and growth opportunities.",
              },
              {
                tag: "Growth",
                title:
                  "Growth-focused websites range from £750–£3,000",
                desc: "Ideal for companies that are targeting competitive markets or multiple services or national search visibility.",
                featured: true,
              },
              {
                tag: "Enterprise",
                title:
                  "Enterprise, ecommerce, and complex websites can exceed £5,000+",
                desc: "Larger websites often require deeper technical analysis, competitor benchmarking, historical data reviews, migration assessments, and advanced content audits.",
              },
            ].map((card) => (
              <article
                key={card.tag}
                className={`flex flex-col gap-4 rounded-3xl border p-4 md:p-8 ${card.featured ? "border-[#FF4D3A] bg-[#FFF1F0]" : "border-[#E5EAF2] bg-white"}`}
              >
                <span className={`${P} w-fit rounded-full bg-[#1A5FBF]/10 px-3 py-1 font-semibold text-[#1A5FBF]`}>
                  {card.tag}
                </span>
                <h3 className={H3}>{card.title}</h3>
                <p className={P}>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="book-seo-audit-consultation"
        className={`${SECTION_WRAP} bg-[#071629] text-white`}
        aria-labelledby="seo-audit-cta-title"
      >
        <div className={`${INNER} text-center`}>
          <span className={`${P} mb-4 block text-white/70`}>
            SEO audit specialists · UK in-house team
          </span>
          <h2 id="seo-audit-cta-title" className={`${H2} mx-auto max-w-4xl`}>
            The real question is not how much does an SEO audit cost?
          </h2>
          <p className={`${P} mx-auto mt-6 max-w-3xl text-white/85`}>
            It is how much is <span className={GRAD_CORAL}>poor SEO</span> already
            costing your business in{" "}
            <span className={GRAD_CORAL}>
              lost rankings, missed traffic, and unrealised leads?
            </span>
            <br />
            <br />
            Every SEO audit service at 360 Web Solutions is customized around your
            website, objectives and growth opportunities, meaning you only invest
            what you need in the analysis of your website.
          </p>
          <div className={`${FLEX_ROW} mt-8 justify-center gap-4 md:mt-12`}>
            <a href="/contact-us" className={`${BTN} bg-[#FF4D3A] text-white`}>
              Book your SEO audit consultation
            </a>
            <a
              href="/case-studies"
              className={`${BTN} border border-white/40 bg-transparent text-white`}
            >
              View our results
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq-seo-audit"
        className={`${SECTION_WRAP} bg-[#F5F7FA]`}
        aria-labelledby="faq-seo-audit-title"
      >
        <div className={INNER}>
          <header className="mb-10 md:mb-14">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#5B6A82]`}>
              FAQs
            </span>
            <h2 id="faq-seo-audit-title" className={H2}>
              <span className={GRAD_CORAL}>SEO Audit</span> FAQs
            </h2>
          </header>

          <div className="flex flex-col gap-3 md:gap-4">
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-[#E5EAF2] bg-white p-4 md:p-6"
                open={i === 0}
              >
                <summary className={`${FLEX_ROW} cursor-pointer list-none gap-4 font-semibold`}>
                  <span className={`${P} shrink-0 text-[#FF4D3A]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={H3}>{faq.q}</span>
                </summary>
                <div className={`${P} mt-4 pl-0 md:pl-12`}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
