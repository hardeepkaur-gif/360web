"use client";

import { useState, type ReactNode } from "react";

const SECTION_WRAP =
  "px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20";
const INNER = "w-full max-w-7xl mx-auto";
const H1 = "text-2xl md:text-4xl lg:text-5xl font-bold";
const H2 = "text-2xl md:text-4xl lg:text-5xl font-bold";
const H3 = "text-2xl md:text-4xl lg:text-5xl font-bold";
const P = "text-sm md:text-base lg:text-lg";
const GRID =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8";
const FLEX_ROW = "flex flex-col md:flex-row";
const BTN =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl px-6 py-3 transition-opacity hover:opacity-90 w-full md:w-auto";
const IMG = "w-full h-auto object-cover";
const GRAD_CORAL = "text-[#FF4D3A]";

type SvcItem = {
  num: string;
  name: string;
  image: string;
  alt: string;
  title: string;
  desc: string;
};

const SERVICE_ITEMS: SvcItem[] = [
  {
    num: "01",
    name: "Keyword Research and Page Mapping",
    image: "/assets/images/on-page-seo-keyword-research.png",
    alt: "Desk with keyword research notes and SEO icons on a clipboard.",
    title: "Keyword Research and Page Mapping",
    desc: "Every successful page starts with clarity. We identify high-intent keywords based on real search behaviour and map them to the most relevant pages on your site. This prevents keyword cannibalisation, improves targeting, and ensures each page serves a clear purpose within your overall SEO strategy.",
  },
  {
    num: "02",
    name: "SEO Content Optimisation",
    image: "/assets/images/on-page-seo-content-optimisation.png",
    alt: "Desk with SEO notebook diagram: research, content, analysis, and Search Engine Optimize checklist.",
    title: "SEO Content Optimisation",
    desc: "Content remains one of the most important ranking factors, but it must do more than include keywords. We refine your content to match search intent, improve depth, and present information in a way that is both useful to users and easily understood by search engines. The result is content that supports stronger SEO rankings and keeps users engaged.",
  },
  {
    num: "03",
    name: "Meta Title and Meta Description Optimisation",
    image: "/assets/images/on-page-seo-meta-title-description.png",
    alt: "Hands holding a tablet showing a search engine results page with titles and snippets.",
    title: "Meta Title and Meta Description Optimisation",
    desc: "Metadata is often underestimated, yet it directly influences how your pages appear in search results. We create titles and descriptions that adhere to search engine guidelines, incorporate relevant keywords, and encourage users to click. Even small improvements in click-through rate can lead to noticeable gains in traffic.",
  },
  {
    num: "04",
    name: "Heading Structure and Content Formatting",
    image: "/assets/images/on-page-seo-heading-structure.png",
    alt: "Laptop on a desk showing a hand-drawn layout and structure diagram labelled Concept.",
    title: "Heading Structure and Content Formatting",
    desc: "A well-structured page is easier to read and easier to rank. We organise your headings logically using H1, H2, and H3 tags, ensuring your content flows naturally while signalling relevance to search engines. Clear structure improves readability and helps users find what they need without friction.",
  },
  {
    num: "05",
    name: "Internal Linking and Site Architecture",
    image: "/assets/images/on-page-seo-internal-linking.png",
    alt: "Laptop with hands typing and floating page layouts connected by a chain-link icon.",
    title: "Internal Linking and Site Architecture",
    desc: "Internal linking is one of the most overlooked drivers of ranking performance, but it plays a critical role in how your site performs. We build logical connections between your pages, helping search engines crawl your site more effectively while guiding users towards relevant content. This strengthens authority across your website and improves overall visibility.",
  },
  {
    num: "06",
    name: "URL Structure Optimisation",
    image: "/assets/images/on-page-seo-url-structure.png",
    alt: "Developer at a monitor with code and an overlaid search bar showing a web URL.",
    title: "URL Structure Optimisation",
    desc: "Clean, descriptive URLs make it easier for both users and search engines to understand your pages. We ensure your URLs are concise, keyword-relevant where appropriate, and free from unnecessary parameters that can affect indexing.",
  },
  {
    num: "07",
    name: "Image Alt Text and Media Optimisation",
    image: "/assets/images/on-page-seo-media-optimisation.png",
    alt: "Person with headphones using a laptop showing a Multimedia graphic on screen.",
    title: "Image Alt Text and Media Optimisation",
    desc: "Images support both user experience and SEO when used correctly. We optimise file sizes for faster loading and add descriptive alt text so search engines can interpret visual content. This also improves accessibility, which is becoming increasingly important in modern search evaluation.",
  },
  {
    num: "08",
    name: "Schema Markup and Structured Data",
    image: "/assets/images/on-page-seo-schema-structured-data.png",
    alt: "Laptop on a desk showing a hand-drawn DATA infographic with connect, share, and innovation labels.",
    title: "Schema Markup and Structured Data",
    desc: "Structured data helps search engines understand your content at a deeper level. We implement schema markup where relevant to improve your chances of appearing in rich results, such as FAQs, reviews, and enhanced listings that stand out in search results.",
  },
  {
    num: "09",
    name: "Page Speed and Mobile Experience",
    image: "/assets/images/on-page-seo-page-speed.png",
    alt: "Laptop showing website speed optimization gauge with high loading speed on screen.",
    title: "Page Speed and Mobile Experience",
    desc: "Performance is a direct ranking factor. Studies show that around 53% of users abandon a page if it takes longer than three seconds to load. We work alongside development teams to improve load times, optimise assets, and ensure your pages deliver a fast and consistent experience across all devices. This is where on-page work overlaps with a technical SEO service.",
  },
  {
    num: "10",
    name: "Canonical Tags and Duplicate Content Checks",
    image: "/assets/images/on-page-seo-canonical-duplicate-checks.png",
    alt: "Phone and desktop monitor both showing checklist interfaces with verified items.",
    title: "Canonical Tags and Duplicate Content Checks",
    desc: "Duplicate content can dilute your rankings and confuse search engines. We review and implement canonical tags correctly to ensure search engines recognise the preferred version of each page. This protects your content and maintains the integrity of your SEO efforts.",
  },
];

const TRUST_CARDS: {
  title: string;
  desc: string;
  svg: ReactNode;
}[] = [
  {
    title: "Trusted across sectors",
    desc: "UK businesses in competitive markets rely on us for structured, outcome-focused on-page optimisation.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <path d="M8 21h8M12 17v4" />
        <path d="M7 4h10v5a5 5 0 1 1-10 0V4z" />
        <path d="M7 9H5a2 2 0 0 1-2-2V7h4M17 9h2a2 2 0 0 0 2-2V7h-4" />
      </svg>
    ),
  },
  {
    title: "Data-led strategy",
    desc: "We work from Search Console, Screaming Frog, Ahrefs, Moz and SEMrush — not guesswork.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <path d="M3 3v18h18" />
        <path d="M7 12l4-4 4 4 5-5" />
        <path d="M18 8h-4v4" />
      </svg>
    ),
  },
  {
    title: "Clear reporting",
    desc: "Search visibility and rankings explained plainly, with a practical list of next actions.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "100% in-house",
    desc: "All on-page optimisation is delivered by our UK team — no outsourced shortcuts.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const EFFECTIVE: {
  num: string;
  title: string;
  desc: string;
  svg: ReactNode;
}[] = [
  {
    num: "01",
    title: "Search Intent Alignment",
    desc: "Pages that directly match user intent outperform those that simply include keywords. Over 68% of online experiences begin with a search engine, which makes intent alignment the foundation of visibility.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="6" strokeDasharray="3 8" opacity=".6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Content Depth and Relevance",
    desc: "Top-ranking pages provide complete answers, not surface-level information. Content must cover a topic clearly and fully to compete in modern search results.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <path d="M8 4h13v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h5V4z" />
        <path d="M8 4v4H4" />
        <path d="M8 13h10M8 17h10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Click-Through Rate Optimisation",
    desc: "Ranking alone is not enough. Titles and meta descriptions must attract clicks. The top result can receive over 25% of total clicks, which shows how important SERP optimisation is.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <path d="M4 18h17" />
        <path d="M7 18v-5M11 18v-8M15 18v-4M19 18V9" />
        <circle cx="7" cy="7" r="1.6" />
        <path d="m8 7 13-1 1 3" opacity=".92" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Structure and Readability",
    desc: "Clear headings, logical flow, and easy-to-scan content improve engagement and help search engines understand your page.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <path d="M5 7h15M5 13h11M5 19h14" />
        <path d="M4 5v16" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Internal Linking and Site Structure",
    desc: "Strong internal links help search engines crawl your site and connect related topics, improving overall search rankings.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <circle cx="7" cy="12" r="2.8" />
        <circle cx="17" cy="12" r="2.8" />
        <path d="m9.6 11.95 10.85-.06" opacity=".94" />
        <circle cx="7" cy="12" r=".9" fill="currentColor" stroke="none" />
        <circle cx="17" cy="12" r=".9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Technical Performance",
    desc: "Page speed, mobile usability, and indexing directly affect visibility. Google now uses mobile-first indexing, making performance a key ranking factor.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-8 w-8"
        aria-hidden
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10 7h4M10 20h4" opacity=".45" />
        <path d="M4 10v4M2 12v1M20 9v6" opacity=".88" />
      </svg>
    ),
  },
];

const PROCESS_STEPS: {
  short: string;
  label: string;
  title: string;
  text: string;
  tag: string;
  image: string;
  alt: string;
}[] = [
  {
    short: "AUDIT",
    label: "Audit",
    title: "Audit Your Existing Pages",
    tag: "Step 01 · Audit Your Existing Pages",
    text: "We begin with a detailed on-site audit using tools such as Google Search Console, Screaming Frog, Ahrefs, SEMrush, and advanced SEO platforms to assess indexing, metadata, content quality, and technical signals. This allows us to identify issues that affect visibility and prioritise high-impact improvements.",
    image: "/assets/images/on-page-seo-process-step-audit.png",
    alt: "Desk covered with reports, charts and sticky notes around a central banner reading AUDIT.",
  },
  {
    short: "GAPS",
    label: "Keywords",
    title: "Identify Keyword and Content Gaps",
    tag: "Step 02 · Identify Keyword and Content Gaps",
    text: "We map search intent to your pages, uncover missing topics, and compare coverage against competitors so each URL targets the right queries without cannibalisation.",
    image: "/assets/images/on-page-seo-keyword-research.png",
    alt: "Desk with keyword research notes and SEO icons on a clipboard.",
  },
  {
    short: "OPTIMISE",
    label: "Content",
    title: "Optimise Content and Metadata",
    tag: "Step 03 · Optimise Content and Metadata",
    text: "We refine headings, body copy, meta titles and descriptions for clarity, intent alignment and CTR — improving both relevance signals and user experience.",
    image: "/assets/images/on-page-seo-content-optimisation.png",
    alt: "Desk with SEO notebook diagram: research, content, analysis, and Search Engine Optimize checklist.",
  },
  {
    short: "INTERNAL",
    label: "Structure",
    title: "Improve Internal Links and Page Structure",
    tag: "Step 04 · Improve Internal Links and Page Structure",
    text: "Logical internal linking and clean IA help crawlers and users discover your most important pages and distribute authority effectively.",
    image: "/assets/images/on-page-seo-internal-linking.png",
    alt: "Laptop with hands typing and floating page layouts connected by a chain-link icon.",
  },
  {
    short: "TRACKING",
    label: "Measure",
    title: "Track Rankings, Traffic and Conversions",
    tag: "Step 05 · Track Rankings, Traffic and Conversions",
    text: "We monitor rankings, impressions and on-site behaviour so improvements are measurable and we can iterate based on what moves commercial outcomes.",
    image: "/assets/images/on-page-seo-page-speed.png",
    alt: "Laptop showing website speed optimization gauge with high loading speed on screen.",
  },
  {
    short: "SCOPE",
    label: "Deliverables",
    title: "Clear Deliverables",
    tag: "Step 06 · Clear Deliverables",
    text: "You receive a prioritised action list, implementation guidance and plain-English reporting — whether your team executes or we support delivery.",
    image: "/assets/images/on-page-seo-schema-structured-data.png",
    alt: "Laptop on a desk showing a hand-drawn DATA infographic with connect, share, and innovation labels.",
  },
];

const COMPARE_ROWS: {
  type: string;
  focus: string;
  elements: string;
  matters: string;
}[] = [
  {
    type: "On-Page SEO",
    focus: "Optimising elements within your website pages",
    elements:
      "Content quality, keyword targeting, metadata, headings, internal linking, URL structure",
    matters:
      "Directly influences how your pages rank and how users engage with your content",
  },
  {
    type: "Technical SEO",
    focus: "Improving how search engines crawl and index your website",
    elements:
      "Page speed, mobile usability, site architecture, indexing, Core Web Vitals",
    matters:
      "Ensures your site is accessible and performs efficiently in search engines",
  },
  {
    type: "Off-Page SEO",
    focus: "Building authority and trust outside your website",
    elements: "Backlinks, brand mentions, digital PR, citations",
    matters:
      "Strengthens your domain authority and improves your ability to compete for rankings",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How long does it take to see results from on-page SEO?",
    a: "Most people expect instant changes, but on-page SEO works progressively. You may see early improvements within a few weeks, while stronger gains in rankings and traffic build over 2–3 months depending on competition.",
  },
  {
    q: "My website already has content. Why is it still not ranking?",
    a: "Having content is not enough if it is not aligned with search intent or structured properly. Many pages fail because they do not clearly communicate relevance to search engines or users, which is where professional on-page seo services make the difference.",
  },
  {
    q: "Do I need on-page SEO if I am already running ads or doing off page seo?",
    a: "Yes, On-page SEO is still mandatory even if you are running ads or investing in off-page SEO. Ads can drive traffic and backlinks can build authority, but poorly optimised pages struggle to rank and convert. On-page SEO helps search engines understand your content and improves the user experience once visitors arrive on your website.",
  },
  {
    q: "Can on-page SEO really improve conversions, not just traffic?",
    a: "Yes, when your content matches what users are looking for and is presented clearly, visitors are more likely to take action. This is why businesses often see better lead quality after improving on-site optimisation.",
  },
  {
    q: "Is on-page SEO a one-time task or an ongoing process?",
    a: "Many expect it to be a one-time fix, but search behaviour and competition keep changing. Ongoing improvements through monthly seo services help maintain and grow your visibility over time.",
  },
  {
    q: "How do I know what is actually wrong with my pages?",
    a: "Most issues are not obvious without proper analysis. A detailed audit using tools like Google Search Console, Screaming Frog, and Surfer SEO can reveal gaps in content, structure, and performance that affect your rankings.",
  },
];

const WHO_NEEDS: { q: string; body: string }[] = [
  {
    q: "Websites getting traffic but struggling to convert visitors into leads",
    body: "If users are landing on your pages but not taking action, your content, structure, or calls to action may not be doing enough to move them forward.",
  },
  {
    q: "Businesses ranking on page two or three for important keywords",
    body: "You are already close. In many cases, focused on-page improvements can push your pages into positions that attract significantly more clicks and qualified traffic.",
  },
  {
    q: "Sites with outdated, thin, or poorly structured content",
    body: "Content that once performed can lose visibility over time. Refreshing depth, relevance, and structure often unlocks rankings you have already earned.",
  },
  {
    q: "New service pages that need strong SEO foundations from the start",
    body: "Launching pages without proper keyword mapping, metadata, and internal linking makes ranking harder than it needs to be from day one.",
  },
];

const CHOOSE_POINTS: string[] = [
  "We build SEO into every page from the ground up, ensuring your content, structure, and metadata are aligned before any off page seo or promotion begins.",
  "You work with a single in-house team across content, design, and development, so your on page seo services are executed without delays or disconnects.",
  "We prioritise search intent over keyword placement, which allows your pages to rank for the queries that actually drive qualified traffic and conversions.",
  "We take full-cycle responsibility, from audit and strategy to implementation and ongoing optimisation, so nothing is left incomplete.",
  "You receive a fixed scope with clear deliverables, along with a one-hour consultation that outlines exactly what needs to be improved and why.",
];

const TICKER_PHRASES = [
  "360 Web Solutions – Digital Marketing Agency UK",
  "On-Page SEO Services",
];

export default function OnPageSEO() {
  const [svcIdx, setSvcIdx] = useState(0);
  const [procIdx, setProcIdx] = useState(0);
  const activeSvc = SERVICE_ITEMS[svcIdx];
  const activeProc = PROCESS_STEPS[procIdx];

  return (
    <div className="bg-white text-[#0F2A4A]">
      <section
        className={`${SECTION_WRAP} bg-gradient-to-b from-[#F9EEE9] via-white to-[#F6EAEF]`}
        aria-labelledby="seo-hero-title"
      >
        <div
          className={`${INNER} ${FLEX_ROW} items-center gap-8 md:gap-12 lg:gap-16`}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
            <span
              className={`${P} inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(26,95,191,.12)] bg-[rgba(210,220,240,.6)] px-4 py-2 font-semibold`}
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF4D3A]" />
              UK in-house team · Audit-led · Search intent first
            </span>
            <h1 id="seo-hero-title" className={H1}>
              <span className="block text-[#1A5FBF]">
                On-Page&nbsp;SEO&nbsp;Services
              </span>
              <span className="block">for&nbsp;UK&nbsp;Businesses&nbsp;That</span>
              <span className="block">
                Want&nbsp;More{" "}
                <span className={GRAD_CORAL}>Qualified&nbsp;Traffic</span>
              </span>
            </h1>
            <p className={`${P} max-w-3xl`}>
              <strong>
                Most websites do not struggle because of competition.
              </strong>{" "}
              They fall short because pages are not optimised for search intent,
              structure and visibility — we improve content, metadata, internal
              links and technical elements so pages rank higher and convert
              consistently.
            </p>
            <div className={`${FLEX_ROW} flex-wrap gap-4 md:gap-6`}>
              <a
                href="/#contact"
                className={`${BTN} bg-[#FF4D3A] text-white`}
              >
                Get Your Free On-Page SEO Audit
              </a>
              <a
                href="#on-page-seo-process"
                className={`${BTN} border border-[#1A5FBF]/25 bg-white text-[#0F2A4A]`}
              >
                How We Work
              </a>
            </div>
            <div className={GRID}>
              <div className="rounded-2xl border border-[#0F2A4A]/10 bg-white/80 p-4">
                <p className={`${P} text-2xl md:text-4xl font-bold ${GRAD_CORAL}`}>
                  +180%
                </p>
                <p className={P}>Avg. organic traffic uplift</p>
              </div>
              <div className="rounded-2xl border border-[#0F2A4A]/10 bg-white/80 p-4">
                <p className={`${P} text-2xl md:text-4xl font-bold ${GRAD_CORAL}`}>
                  62%
                </p>
                <p className={P}>Lower cost per lead</p>
              </div>
              <div className="rounded-2xl border border-[#0F2A4A]/10 bg-white/80 p-4">
                <p className={`${P} text-2xl md:text-4xl font-bold ${GRAD_CORAL}`}>
                  94%
                </p>
                <p className={P}>Client retention rate</p>
              </div>
            </div>
          </div>
          <div className="relative flex min-w-0 flex-1 justify-center">
            <img
              src="/assets/images/on-page-seo-hero.png"
              alt="Laptop on a desk displaying an SEO infographic with search optimisation icons on screen."
              width={800}
              height={800}
              className={`${IMG} max-w-lg`}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#0F2A4A]/10 bg-[#0F2A4A] py-4 text-white"
        aria-label="On-page SEO and agency highlights"
      >
        <div className={`${SECTION_WRAP} py-4 md:py-4 lg:py-4`}>
          <div className={INNER}>
            <div className={`${FLEX_ROW} flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12`}>
              {TICKER_PHRASES.map((t) => (
                <span key={t} className={`${P} text-center font-semibold opacity-90`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-choose-seo"
        className={`${SECTION_WRAP} bg-[#FAFAFB]`}
        aria-labelledby="seo-trust-title"
      >
        <div className={INNER}>
          <h2 id="seo-trust-title" className={`${H2} mb-8 md:mb-12 max-w-4xl`}>
            Trusted by UK businesses to improve{" "}
            <span className={GRAD_CORAL}>visibility</span> and on-site
            performance
          </h2>
          <div className={GRID}>
            {TRUST_CARDS.map((c) => (
              <article
                key={c.title}
                className="flex flex-col gap-4 rounded-2xl border border-[#0F2A4A]/10 bg-white p-6"
              >
                <div className="text-[#1A5FBF]">{c.svg}</div>
                <h3 className={H3}>{c.title}</h3>
                <p className={P}>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="seo-include"
        className={`${SECTION_WRAP} bg-white`}
        aria-labelledby="seo-include-title"
      >
        <div className={INNER}>
          <div className="mb-8 md:mb-12">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
              Our Services
            </span>
            <h2 id="seo-include-title" className={`${H2} mb-4 max-w-4xl`}>
              What Our <span className={GRAD_CORAL}>Page-level SEO Services</span>{" "}
              Include
            </h2>
            <p className={`${P} mb-3 max-w-3xl`}>
              Effective on-page SEO is not built on a single change. It is the
              result of multiple elements working together, each contributing to
              how your pages are understood, ranked, and experienced.
            </p>
            <p className={`${P} max-w-3xl`}>
              Our on-page SEO services cover every critical touchpoint that
              influences your visibility in search results, from content and
              structure to technical signals that support long-term performance.
            </p>
          </div>

          <div className={`${FLEX_ROW} gap-8 lg:gap-12`}>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              {SERVICE_ITEMS.map((s, i) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setSvcIdx(i)}
                  className={`${FLEX_ROW} w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors md:items-center ${
                    i === svcIdx
                      ? "border-[#FF4D3A] bg-[#FFF5F3]"
                      : "border-[#0F2A4A]/10 bg-white hover:border-[#1A5FBF]/30"
                  }`}
                >
                  <span className={`${P} font-bold text-[#FF4D3A]`}>{s.num}</span>
                  <span className={`${P} font-semibold`}>{s.name}</span>
                </button>
              ))}
            </div>
            <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#0F2A4A]/10 bg-[#FAFAFB]">
              <img
                src={activeSvc.image}
                alt={activeSvc.alt}
                width={800}
                height={520}
                className={IMG}
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 md:p-8">
                <h3 className={`${H3} mb-3`}>{activeSvc.title}</h3>
                <p className={P}>{activeSvc.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="seo-services-overview"
        className={`${SECTION_WRAP} bg-[#FAFAFB]`}
        aria-labelledby="seo-split-title"
      >
        <div className={INNER}>
          <div className="flex flex-col gap-8 md:flex-row-reverse md:items-start md:gap-12 lg:gap-16">
            <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
              <h2 id="seo-split-title" className={H2}>
                On-Page SEO Services for{" "}
                <span className={GRAD_CORAL}>UK Businesses</span>
              </h2>
              <p className={`${P} font-semibold`}>
                Most UK businesses are already investing in SEO, yet a large
                percentage still struggle to achieve consistent visibility. The
                reason is simple. Their pages are not built to match how modern
                search engines evaluate content.
              </p>
              <p className={P}>
                Google processes over 8.5 billion searches per day, and the
                majority of users never go beyond the first page of results. In
                fact, studies show that over 75% of users do not scroll past page
                one, which means even a small improvement in your on-page
                optimisation can directly impact your traffic and revenue.
              </p>
              <p className={P}>
                Our on-page optimisation services are designed to close that gap.
                We focus on aligning your website with real search intent,
                improving on-site structure, and strengthening the signals that
                influence rankings. From content and metadata to internal linking
                and technical elements, every change is made to help your pages
                perform better in competitive UK search results.
              </p>
              <p className={P}>
                Unlike agencies that run the same template across every client, we
                begin each project with a competitor gap analysis specific to your
                market. Every page is analysed based on its purpose, its
                competition, and the behaviour of your target audience. This
                allows us to identify what is missing, what is underperforming,
                and what needs to be improved to drive measurable results.
              </p>
              <p className={P}>
                Whether you are looking for affordable seo services to strengthen
                existing pages or a complete overhaul supported by monthly seo
                services, our approach remains focused on one outcome. Better
                rankings that lead to qualified traffic and real business growth.
              </p>
            </div>
            <div className="relative flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
              <img
                src="/assets/images/on-page-seo-uk-businesses-visual.png"
                alt="Futuristic SEO holographic interface with large SEO lettering and digital analytics displays."
                width={560}
                height={700}
                className={`${IMG} rounded-2xl`}
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=480&q=80"
                alt="UK digital marketing team collaborating in a modern studio."
                width={280}
                height={180}
                className={`${IMG} mt-4 rounded-xl md:mt-0 md:w-72`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-is-on-page-seo"
        className={`${SECTION_WRAP} bg-white`}
        aria-labelledby="seo-explained-title"
      >
        <div className={INNER}>
          <header className="mb-8 md:mb-12">
            <h2 id="seo-explained-title" className={`${H2} mb-6`}>
              What Is <span className={GRAD_CORAL}>On-Page SEO?</span>
            </h2>
            <div className={`${FLEX_ROW} flex-wrap gap-3`}>
              {[
                "Content",
                "Headings",
                "Metadata",
                "URLs",
                "Internal links",
                "Technical signals",
              ].map((tag) => (
                <span
                  key={tag}
                  className={`${P} inline-flex items-center gap-2 rounded-full border border-[#0F2A4A]/15 bg-[#FAFAFB] px-4 py-2`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#FF4D3A]" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className={`${FLEX_ROW} items-start gap-8 md:gap-12 lg:gap-16`}>
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p className={P}>
                On-page SEO refers to the optimisation of elements within your
                website pages to improve their visibility in search engines. This
                includes your content, headings, metadata, URLs, and internal
                links, along with key technical signals that help search engines
                understand your pages.
              </p>
              <p className={P}>
                At its core, on-page SEO ensures that each page is clearly aligned
                with a specific search intent and communicates its relevance
                effectively. When these elements are structured correctly, your
                pages are more likely to rank higher, attract the right audience,
                and perform consistently in search results.
              </p>
              <p className={`${P} rounded-xl border border-[#1A5FBF]/20 bg-[#F0F6FF] p-4 font-semibold`}>
                Strong on-site SEO services focus on getting these fundamentals
                right before any off-site or promotional work begins.
              </p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col rounded-2xl border border-[#0F2A4A]/10 bg-gradient-to-br from-[#F9EEE9] to-white p-6 md:p-8">
              <div className="mb-4 rounded-xl border border-[#0F2A4A]/10 bg-white p-4 shadow-sm">
                <p className={`${P} mb-2 font-semibold text-[#5B6A82]`}>
                  Meta · SERP Preview
                </p>
                <p className={`${P} font-bold text-[#1A5FBF]`}>
                  On-Page SEO Services for UK Businesses
                </p>
                <p className={`${P} text-[#5B6A82]`}>
                  yourwebsite.co.uk › on-page-seo
                </p>
                <p className={P}>
                  We help UK businesses improve visibility through expert on-page
                  optimisation — content, metadata, and technical signals.
                </p>
              </div>
              <div className={`${P} mb-4 rounded-lg bg-[#0F2A4A]/5 px-3 py-2`}>
                <span className="font-semibold">URL</span>{" "}
                yourwebsite.co.uk /{" "}
                <span className={GRAD_CORAL}>on-page-seo</span>
              </div>
              <div className={`${FLEX_ROW} mb-4 items-center gap-3`}>
                <span className="rounded bg-[#FF4D3A] px-2 py-1 text-xs font-bold text-white">
                  H1
                </span>
                <span className={`${P} font-semibold`}>
                  On-Page SEO Services for UK Businesses
                </span>
              </div>
              <div className="mb-4 space-y-2">
                <span className={`${P} inline-block rounded-full bg-[#1A5FBF]/10 px-3 py-1 font-semibold`}>
                  Content · Search Intent
                </span>
                <div className="h-2 w-full rounded-full bg-[#1A5FBF]/30" />
                <div className="h-2 w-[90%] rounded-full bg-[#1A5FBF]/20" />
                <div className="h-2 w-full rounded-full bg-[#0F2A4A]/10" />
              </div>
              <div>
                <p className={`${P} mb-2 font-semibold`}>Internal Links</p>
                <div className={`${FLEX_ROW} flex-wrap gap-2`}>
                  {[
                    "Technical SEO →",
                    "Content Strategy →",
                    "Site Audit →",
                    "Keyword Research →",
                  ].map((x) => (
                    <span
                      key={x}
                      className={`${P} rounded-full border border-[#0F2A4A]/15 px-3 py-1`}
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${FLEX_ROW} mt-6 items-center gap-4`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#FF4D3A] text-lg font-bold">
                  88
                </div>
                <div>
                  <p className={`${P} font-bold`}>On-Page Score</p>
                  <p className={`${P} text-[#5B6A82]`}>Optimised & structured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="seo-cta-pages"
        className={`${SECTION_WRAP} relative overflow-hidden bg-[#0B1F36] text-white`}
        aria-labelledby="seo-cta-pages-title"
      >
        <div className={`${INNER} relative z-10 flex flex-col items-center text-center`}>
          <img
            src="/assets/images/logo.png"
            alt=""
            width={38}
            height={38}
            className={`${IMG} mb-6 max-h-[38px] max-w-[38px]`}
            decoding="async"
          />
          <h2 id="seo-cta-pages-title" className={`${H2} mb-4 max-w-3xl`}>
            See What&apos;s Holding Your Pages Back
          </h2>
          <p className={`${P} mb-8 max-w-2xl text-white/85`}>
            Understand how each element of your pages is performing and what needs
            to be improved to achieve stronger rankings.
          </p>
          <div className={`${FLEX_ROW} flex-wrap justify-center gap-4 md:gap-6`}>
            <a
              href="/#contact"
              className={`${BTN} bg-[#FF4D3A] text-white`}
            >
              Get your free on-page audit
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
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

      <section
        id="on-page-effective-2026"
        className={`${SECTION_WRAP} bg-[#FAFAFB]`}
        aria-labelledby="seo-effective-title"
      >
        <div className={INNER}>
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
              Modern search
            </span>
            <h2 id="seo-effective-title" className={`${H2} mb-4 max-w-4xl`}>
              What Makes On-Page SEO Effective in{" "}
              <span className={GRAD_CORAL}>2026</span>
            </h2>
            <p className={`${P} mx-auto max-w-3xl md:mx-0`}>
              Search engines no longer rank pages based on keywords alone. Modern
              on-page SEO is driven by how well a page matches intent, how it is
              structured, and how users interact with it. Here are the factors
              that define effective on-page SEO services in 2026:
            </p>
          </div>
          <div className={GRID}>
            {EFFECTIVE.map((item) => (
              <article
                key={item.num}
                className="flex flex-col gap-4 rounded-2xl border border-[#0F2A4A]/10 bg-white p-6"
              >
                <div className={`${FLEX_ROW} items-start gap-4 md:items-center`}>
                  <div className="text-[#1A5FBF]">{item.svg}</div>
                  <span className={`${P} font-bold text-[#FF4D3A]`}>{item.num}</span>
                </div>
                <h3 className={H3}>{item.title}</h3>
                <p className={P}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="on-page-seo-process"
        className={`${SECTION_WRAP} bg-white`}
        aria-labelledby="on-page-process-title"
      >
        <div className={INNER}>
          <div className="mb-8 md:mb-12">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
              Workflow
            </span>
            <h2 id="on-page-process-title" className={`${H2} mb-4`}>
              Our <span className={GRAD_CORAL}>On-Page SEO</span> Process
            </h2>
            <p className={`${P} max-w-3xl`}>
              A structured process ensures that every improvement is measurable and
              aligned with your business goals. Our on-page SEO services follow a
              clear framework designed to deliver consistent results.
            </p>
          </div>

          <div className={`${FLEX_ROW} gap-8 lg:gap-12`}>
            <div className={`${GRID} min-w-0 flex-1`}>
              {PROCESS_STEPS.map((step, i) => (
                <button
                  key={step.short}
                  type="button"
                  onClick={() => setProcIdx(i)}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    i === procIdx
                      ? "border-[#FF4D3A] bg-[#FFF5F3]"
                      : "border-[#0F2A4A]/10 bg-[#FAFAFB] hover:border-[#1A5FBF]/30"
                  }`}
                >
                  <span className={`${P} font-bold text-[#FF4D3A]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className={`${P} font-semibold`}>{step.title}</p>
                  <p className={`${P} text-[#5B6A82]`}>{step.short}</p>
                </button>
              ))}
            </div>
            <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#0F2A4A]/10 bg-[#FAFAFB]">
              <span className={`${P} m-4 inline-block rounded-full bg-white px-4 py-2 font-semibold shadow-sm md:m-6`}>
                {activeProc.tag}
              </span>
              <img
                src={activeProc.image}
                alt={activeProc.alt}
                width={800}
                height={480}
                className={IMG}
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 md:p-8">
                <span className={`${P} font-bold text-[#FF4D3A]`}>
                  {String(procIdx + 1).padStart(2, "0")}
                </span>
                <h3 className={`${H3} mb-3`}>{activeProc.title}</h3>
                <p className={P}>{activeProc.text}</p>
              </div>
            </div>
          </div>

          <div
            className={`${FLEX_ROW} mt-8 justify-center gap-3`}
            role="tablist"
            aria-label="On-page SEO process steps"
          >
            {PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === procIdx}
                aria-label={`Step ${i + 1}`}
                onClick={() => setProcIdx(i)}
                className={`h-3 w-3 rounded-full transition-colors md:h-3 md:w-3 ${
                  i === procIdx ? "bg-[#FF4D3A]" : "bg-[#0F2A4A]/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="seo-types-compared"
        className={`${SECTION_WRAP} bg-[#0F2A4A] text-white`}
        aria-labelledby="seo-types-title"
      >
        <div className={INNER}>
          <div className="mb-8 md:mb-12">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-white/70`}>
              Three pillars
            </span>
            <h2 id="seo-types-title" className={`${H2} mb-4 max-w-4xl`}>
              <span className={GRAD_CORAL}>On-Page SEO</span> vs Technical SEO vs
              Off-Page SEO
            </h2>
            <p className={`${P} max-w-3xl text-white/85`}>
              Search engine optimisation is often divided into three core areas.
              Each plays a different role in how your website performs, and
              understanding the distinction helps you invest in the right areas at
              the right time.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className={`${GRID} hidden lg:grid`}>
              <div className={`${P} font-bold`}>SEO Type</div>
              <div className={`${P} font-bold`}>What It Focuses On</div>
              <div className={`${P} font-bold`}>Key Elements</div>
            </div>
            {COMPARE_ROWS.map((row) => (
              <div
                key={row.type}
                className={`${GRID} rounded-2xl border border-white/15 bg-white/5 p-4 md:p-6`}
              >
                <div>
                  <h3 className={`${H3} ${GRAD_CORAL}`}>{row.type}</h3>
                  <p className={`${P} mt-2 text-white/80 lg:hidden`}>
                    <span className="font-semibold text-white">Focus: </span>
                    {row.focus}
                  </p>
                </div>
                <p className={`${P} hidden text-white/85 lg:block`}>{row.focus}</p>
                <div>
                  <p className={`${P} font-semibold lg:hidden`}>Key elements</p>
                  <p className={`${P} text-white/85`}>{row.elements}</p>
                  <p className={`${P} mt-3 font-semibold lg:hidden`}>Why it matters</p>
                  <p className={`${P} text-white/85`}>{row.matters}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${FLEX_ROW} mt-10 items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 md:items-center md:p-8`}
          >
            <div className="min-w-0 flex-1">
              <h3 className={H3}>
                Not sure which type of SEO your site needs most?
              </h3>
              <p className={`${P} mt-2 text-white/85`}>
                Get a free audit and we&apos;ll map it out for you.
              </p>
            </div>
            <a href="/#contact" className={`${BTN} shrink-0 bg-[#FF4D3A] text-white`}>
              Get your free audit
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width={18}
                height={18}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        id="why-on-page-seo-matters"
        className={`${SECTION_WRAP} bg-[#FAFAFB]`}
        aria-labelledby="seo-matters-title"
      >
        <div className={INNER}>
          <div className={`${FLEX_ROW} items-center gap-8 md:gap-12 lg:gap-16`}>
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <span className={`${P} font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
                On-site fundamentals
              </span>
              <h2 id="seo-matters-title" className={H2}>
                Why <span className={GRAD_CORAL}>On-Page SEO</span> Matters
              </h2>
              <p className={`${P} font-semibold`}>
                Your website can have strong design, quality content, and even
                backlinks, but without proper on-page optimisation, it will
                struggle to perform in search results. Search engines rely on
                on-site signals to understand your pages. If those signals are
                unclear or poorly structured, your visibility drops, regardless of
                your overall marketing efforts.
              </p>
              <p className={P}>
                More importantly, users make decisions quickly. If your page does
                not load fast, match their intent, or present information clearly,
                they leave. This is why businesses investing in content and
                metadata optimisation see more consistent and sustainable growth
                compared to relying only on off-page SEO or paid channels.
              </p>
            </div>
            <div className="relative min-w-0 flex-1">
              <img
                src="/assets/images/on-page-seo-matters-visual.png"
                alt="Team around a table with devices collaborating over a central SEO graphic and analytics icons."
                width={640}
                height={480}
                className={`${IMG} rounded-2xl`}
                loading="lazy"
                decoding="async"
              />
              <blockquote
                className={`${P} mt-4 rounded-2xl border border-[#0F2A4A]/10 bg-white p-6 font-semibold`}
              >
                Search engines read <strong>structure and intent</strong> — not
                just keywords on the page.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-choose-on-page-seo"
        className={`${SECTION_WRAP} bg-white`}
        aria-labelledby="seo-choose-title"
      >
        <div className={INNER}>
          <header className="mb-8 text-center md:mb-12">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
              Why choose 360
            </span>
            <h2 id="seo-choose-title" className={H2}>
              Why Choose 360 Web Solutions for{" "}
              <span className={GRAD_CORAL}>On-Page SEO?</span>
            </h2>
          </header>

          <div className={`${FLEX_ROW} items-start gap-8 md:gap-12 lg:gap-16`}>
            <ol className="flex min-w-0 flex-1 flex-col gap-6 md:gap-8">
              {CHOOSE_POINTS.map((text, i) => (
                <li key={i} className={`${FLEX_ROW} gap-4`}>
                  <span className={`${P} shrink-0 font-bold text-[#FF4D3A]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className={P}>{text}</p>
                </li>
              ))}
            </ol>
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <img
                src="/assets/images/on-page-seo-choose-us-visual.png"
                alt="Hands holding a tablet showing SEO search bar graphics with rocket, charts and optimisation icons."
                width={800}
                height={600}
                className={`${IMG} rounded-2xl`}
                loading="lazy"
                decoding="async"
              />
              <div className="rounded-2xl border border-[#0F2A4A]/10 bg-[#FAFAFB] p-6">
                <h3 className={`${H3} mb-2`}>94% Client Retention Rate</h3>
                <p className={P}>
                  Across on-page and wider SEO engagements · 100% UK in-house
                  delivery
                </p>
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[#0F2A4A]/10">
                  <div className="h-full w-[94%] rounded-full bg-[#FF4D3A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-needs-on-page-seo"
        className={`${SECTION_WRAP} bg-[#FAFAFB]`}
        aria-labelledby="seo-who-needs-title"
      >
        <div className={INNER}>
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <h2 id="seo-who-needs-title" className={`${H2} mb-4`}>
              Who Needs <span className={GRAD_CORAL}>On-Page SEO Services?</span>
            </h2>
            <p className={`${P} mx-auto max-w-3xl md:mx-0`}>
              If your website is not delivering the results you expected, the issue
              is often not visibility alone. More often, it comes down to how your
              pages are structured, optimised, and aligned with real search intent.
            </p>
          </div>

          <div className={`${FLEX_ROW} items-start gap-8 md:gap-12 lg:gap-16`}>
            <div className="min-w-0 flex-1">
            <img
              src="/assets/images/on-page-seo-who-needs-hero.png"
              alt="Person reviewing analytics and performance dashboards on a laptop in a bright workspace."
              width={1200}
              height={800}
              className={`${IMG} rounded-2xl`}
              loading="lazy"
              decoding="async"
            />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {WHO_NEEDS.map((item, idx) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-[#0F2A4A]/10 bg-white open:border-[#1A5FBF]/30"
                  open={idx === 0}
                >
                  <summary className={`${FLEX_ROW} cursor-pointer list-none items-center justify-between gap-4 p-4 md:p-6 [&::-webkit-details-marker]:hidden`}>
                    <span className={`${P} font-semibold`}>{item.q}</span>
                    <span className="text-[#FF4D3A] group-open:rotate-180">▼</span>
                  </summary>
                  <div className="border-t border-[#0F2A4A]/10 px-4 pb-4 pt-2 md:px-6 md:pb-6">
                    <p className={P}>{item.body}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="book-on-page-seo-consultation"
        className={`${SECTION_WRAP} relative overflow-hidden bg-[#0B1F36] text-white`}
        aria-labelledby="seo-consult-cta-title"
      >
        <div className={`${INNER} relative z-10 flex flex-col items-center text-center`}>
          <img
            src="/assets/images/logo.png"
            alt=""
            width={38}
            height={38}
            className={`${IMG} mb-6 max-h-[38px] max-w-[38px]`}
            decoding="async"
          />
          <span className={`${P} mb-4 text-white/70`}>
            On-page specialists · UK in-house team
          </span>
          <h2 id="seo-consult-cta-title" className={`${H2} mb-4 max-w-3xl`}>
            Book Your Free <span className={GRAD_CORAL}>On-Page SEO Consultation</span>
          </h2>
          <p className={`${P} mb-8 max-w-2xl text-white/85`}>
            Work with a team that takes full responsibility for your SEO performance.
          </p>
          <div className={`${FLEX_ROW} flex-wrap justify-center gap-4 md:gap-6`}>
            <a href="/#contact" className={`${BTN} bg-[#FF4D3A] text-white`}>
              Book Your Free On-Page SEO Consultation
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
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

      <section
        id="faq-seo"
        className={`${SECTION_WRAP} bg-[#FAFAFB]`}
        aria-labelledby="faq-seo-title"
      >
        <div className={INNER}>
          <div className="mb-8 md:mb-12">
            <span className={`${P} mb-3 block font-semibold uppercase tracking-wider text-[#1A5FBF]`}>
              FAQs
            </span>
            <h2 id="faq-seo-title" className={H2}>
              FAQs About <span className={GRAD_CORAL}>On-Page SEO Services</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[#0F2A4A]/10 bg-white open:border-[#1A5FBF]/30"
                open={i === 0}
              >
                <summary className={`${FLEX_ROW} cursor-pointer list-none items-start justify-between gap-4 p-4 md:p-6 [&::-webkit-details-marker]:hidden`}>
                  <span className={`${P} shrink-0 font-bold text-[#FF4D3A]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`${P} flex-1 font-semibold`}>{f.q}</span>
                  <span className="text-xl text-[#0F2A4A] group-open:hidden">+</span>
                  <span className="hidden text-xl group-open:inline">×</span>
                </summary>
                <div className="border-t border-[#0F2A4A]/10 px-4 pb-4 pt-2 md:px-6 md:pb-6 md:pl-16 lg:pl-20">
                  <p className={P}>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
