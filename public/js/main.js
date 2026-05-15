/* ============================================================
   360 Web Solutions — Premium Agency Site
   Interactions: sticky nav, scroll reveal,
   animated counters, dashboard tabs, mobile nav,
   contact form, back-to-top, footer year,
   services editorial sidebar sync, circular process,
   FAQ accordion (single-open).
   ============================================================ */

/* ---------------------------------------------------
   CIRCULAR PROCESS DATA + GLOBAL activateStep()
   (exposed globally so inline SVG handlers can reach it)
--------------------------------------------------- */
const DEFAULT_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover',
    subtitle: 'We find the gaps your competitors are already exploiting.',
    text: 'A full audit of your current digital presence — SEO health, paid account structure, content gaps, technical issues, and competitive landscape.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80',
    alt: 'Team reviewing audit analytics to discover competitor gaps',
    points: [
      'Complete digital health audit',
      'Competitor gap & opportunity analysis',
      'Market & keyword research',
      'Audience persona mapping'
    ]
  },
  {
    num: '02',
    title: 'Strategise',
    subtitle: 'A plan built for your market — not pulled from a shared template folder.',
    text: 'We build a bespoke strategy from what the audit tells us — channel mix, budget allocation, content plan, and 90-day targets. No two 360 strategies look the same, because no two businesses face the same market.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80',
    alt: 'Strategist mapping a bespoke channel mix, budget allocation and 90-day targets',
    points: [
      'Bespoke channel mix & budget allocation',
      '90-day execution roadmap',
      'Content & creative planning',
      'KPIs tied to revenue outcomes'
    ]
  },
  {
    num: '03',
    title: 'Execute',
    subtitle: 'Built and launched in weeks, not quarters.',
    text: 'Every channel, every tactic, every asset is built and launched with precision by the specialist who owns that channel.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80',
    alt: 'Specialists collaborating to build and launch campaigns with precision',
    points: [
      'Specialist-led channel execution',
      'Creative & copy production',
      'Tracking & attribution setup',
      'Live by week four of engagement'
    ]
  },
  {
    num: '04',
    title: 'Measure',
    subtitle: 'Real numbers, in real time — not a summary 30 days after the fact.',
    text: 'Your live dashboard goes live before your campaigns do. Every metric that matters to your business — traffic, leads, revenue, ROAS, CAC — is tracked in one place, visible to you at any time, without having to ask.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1100&q=80',
    alt: 'Live real-time marketing performance dashboard with revenue and ROAS metrics',
    points: [
      'Real-time performance dashboard',
      'Revenue, ROAS, CAC, LTV tracking',
      'Anomaly detection & alerts',
      'Full visibility — no filters, no spin'
    ]
  },
  {
    num: '05',
    title: 'Optimise',
    subtitle: 'We act on the data the same week it changes.',
    text: "Continuous optimisation is not a phrase in our proposal — it's a standing instruction. When something underperforms, we adjust before the next report. When something overperforms, we reallocate the budget to compound it.",
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1100&q=80',
    alt: 'Analyst iterating weekly on campaign data to optimise performance',
    points: [
      'Weekly optimisation cycles',
      'A/B testing & creative iteration',
      'Budget reallocation to winners',
      'Cross-channel feedback loops'
    ]
  },
  {
    num: '06',
    title: 'Scale',
    subtitle: 'When the foundations are right, growth accelerates.',
    text: 'Once the system is performing, we push harder — more budget, more channels, more markets. Scaling without a solid foundation just burns money faster. Scaling with one turns a working campaign into a compounding growth engine.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1100&q=80',
    alt: 'Growth chart showing compounding scale across multiple channels and markets',
    points: [
      'Multi-market expansion',
      'Channel compounding strategy',
      'Team & infrastructure scale-up',
      'From working campaign to growth engine'
    ]
  }
];

const WEBDEV_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery and Planning',
    subtitle: '',
    text: 'We start by understanding your business, your market, and what your website needs to achieve commercially. This is where competitors are reviewed, and the project scope is locked in writing before anything else moves forward.',
    image: '/assets/images/webdev-hero-workspace.png',
    alt: 'Discovery and planning workshop for commercial website goals',
    points: []
  },
  {
    num: '02',
    title: 'Site Structure and UX Mapping',
    subtitle: '',
    text: 'Before any design work begins, we map the full site architecture. This covers page hierarchy, internal linking structure, URL logic, and user journey flows. Every decision at this stage is made with both search engine crawlability and user behaviour in mind.',
    image: '/assets/images/webdev-mockup-desktop.png',
    alt: 'Site architecture and UX journey mapping across key pages',
    points: []
  },
  {
    num: '03',
    title: 'Design Direction',
    subtitle: '',
    text: 'We establish the visual language of your website based on your brand, your audience, and your conversion goals.',
    image: '/assets/images/webdev-split-hero-ref.png',
    alt: 'Design direction workshop for brand-aligned conversion-focused pages',
    points: []
  },
  {
    num: '04',
    title: 'Development and Build',
    subtitle: '',
    text: 'Your website is built by our in-house development team to agreed specifications. Code is written clean, performance is prioritised from the first build, and the CMS is configured so your team can manage content without technical dependency.',
    image: '/assets/images/webdev-mockup-mobile.png',
    alt: 'In-house development and CMS build for responsive performance-focused websites',
    points: []
  },
  {
    num: '05',
    title: 'Testing and Pre-Launch QA',
    subtitle: '',
    text: 'Every page is tested across devices, browsers, and screen sizes before launch. We check load speed, mobile responsiveness, form functionality, tracking setup, redirect logic, and technical SEO implementation as standard.',
    image: '/assets/images/compare-section-office-bg.png',
    alt: 'Pre-launch QA testing for performance, tracking, and technical SEO',
    points: []
  },
  {
    num: '06',
    title: 'Launch and Ongoing Support',
    subtitle: '',
    text: 'Launch is managed by the same team that built the site. Once live, we remain available for support, performance monitoring, and ongoing development as your business grows for long-term user satisfaction.',
    image: '/assets/images/ai-section-meeting-bg.png',
    alt: 'Post-launch support and ongoing development planning session',
    points: []
  }
];

const WORDPRESS_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Scope & technical discovery',
    subtitle: 'Goals, stack, and constraints captured before development starts.',
    text: 'We workshop your content model, integrations, hosting, SEO baseline, and any migration risks. You get a written scope, sitemap draft, and a timeline tied to realistic milestones.',
    image: '/assets/images/webdev-hero-workspace.png',
    alt: 'WordPress discovery workshop reviewing scope, CMS goals, and technical constraints'
  },
  {
    num: '02',
    title: 'IA, templates & editor UX',
    subtitle: 'Structure and editing flows designed for your team — not a generic theme.',
    text: 'We map page types, blocks, fields, and navigation so content editors get a predictable experience. Technical SEO and Core Web Vitals are considered at template level, not bolted on later.',
    image: '/assets/images/webdev-mockup-desktop.png',
    alt: 'Information architecture and WordPress template planning on desktop'
  },
  {
    num: '03',
    title: 'Custom theme & component build',
    subtitle: 'Lean PHP, clean CSS/JS, and components you can reuse.',
    text: 'We build a bespoke theme (or headless front-end if agreed) with reusable components, accessible markup, and no unnecessary plugin weight. Output is optimised for speed and maintainability.',
    image: '/assets/images/webdev-split-hero-ref.png',
    alt: 'Custom WordPress theme and component development'
  },
  {
    num: '04',
    title: 'Integrations & technical SEO',
    subtitle: 'Forms, CRMs, analytics, and schema wired without fragility.',
    text: 'Plugins and APIs are integrated with staging checks, error handling, and documentation. Redirects, canonicals, XML sitemaps, and structured data are validated before content goes live.',
    image: '/assets/images/compare-section-office-bg.png',
    alt: 'WordPress integrations and technical SEO implementation'
  },
  {
    num: '05',
    title: 'Staging QA & handover',
    subtitle: 'Devices, speed, and editor training before launch.',
    text: 'Cross-browser and device QA, Core Web Vitals checks, security hardening, and backup strategy. Your team gets hands-on CMS training so day-two updates do not depend on us.',
    image: '/assets/images/ai-section-meeting-bg.png',
    alt: 'QA testing and WordPress CMS training session'
  },
  {
    num: '06',
    title: 'Launch & ongoing care',
    subtitle: 'The same engineers stay with you after go-live.',
    text: 'Controlled launch with monitoring, patching, and improvements on a schedule that fits your risk profile. We prioritise stability, uptime, and measurable speed — not endless change requests.',
    image: '/assets/images/webdev-mockup-mobile.png',
    alt: 'Post-launch WordPress maintenance and monitoring'
  }
];

const SOCIAL_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Audit and Discovery',
    subtitle: '',
    text: 'We assess your existing social presence, ad account history, content performance, and overall scenario before recommending anything.',
    image: 'https://images.unsplash.com/photo-1611162616305-69e3eada7f9b?auto=format&fit=crop&w=1100&q=80',
    alt: 'Audit and Discovery step visual',
    points: []
  },
  {
    num: '02',
    title: 'Audience and Competitor Research',
    subtitle: '',
    text: 'We define exactly who you are targeting, where they spend time, and what your closest competitors are doing well or getting wrong.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80',
    alt: 'Audience and Competitor Research step visual',
    points: []
  },
  {
    num: '03',
    title: 'Channel and Content Strategy',
    subtitle: '',
    text: 'We select the right platforms for your goals, establish content pillars, define tone of voice, and set measurable KPIs.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80',
    alt: 'Channel and Content Strategy step visual',
    points: []
  },
  {
    num: '04',
    title: 'Content and Campaign Production',
    subtitle: '',
    text: 'Copy, creative, and campaign builds are produced in-house and submitted for approval before anything is published or launched. You see everything before it goes live.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80',
    alt: 'Content and Campaign Production step visual',
    points: []
  },
  {
    num: '05',
    title: 'Launch and Active Management',
    subtitle: '',
    text: 'Campaigns go live, content published on schedule, community responses are managed daily - we handle the execution so your team does not have to.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1100&q=80',
    alt: 'Launch and Active Management step visual',
    points: []
  },
  {
    num: '06',
    title: 'Monthly Reporting and Optimisation',
    subtitle: '',
    text: 'Performance is reviewed against agreed KPIs every month. What is working gets scaled. Every report comes with a clear action list, not just numbers.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1100&q=80',
    alt: 'Monthly Reporting and Optimisation step visual',
    points: []
  }
];

const AI_CONSULTANCY_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Understand Your Business',
    subtitle: '',
    text:
      'Before we do anything or offer any suggestions, we listen to you. We map your current flow, identify where your time and money are wasting, assess your data quality, and understand your commercial objectives.',
    image: '/assets/images/compare-section-office-bg.png',
    alt: 'Consultants mapping business workflows and data context with a client',
    points: []
  },
  {
    num: '02',
    title: 'Find Your Quick Wins',
    subtitle: '',
    text:
      'A long implementation cycle is not required for every AI opportunity. We identify the highest impact, lower effort use cases in your businesses. These are opportunities that can deliver your first proof of value within weeks before the full roadmap begins.',
    image: '/assets/images/ai-section-meeting-bg.png',
    alt: 'Team prioritising quick-win AI use cases on a workshop board',
    points: []
  },
  {
    num: '03',
    title: 'AI Roadmap, Your 90-day Action Plan',
    subtitle: '',
    text:
      'A prioritised practical action plan includes confirmed use cases, recommended tools or custom build specifications, delivery sequence, resource requirements, integration, consideration, and measurable success criteria. We do not believe in delivering slide decks that sit in your download folder unopened.',
    image: '/assets/images/webdev-hero-workspace.png',
    alt: 'Prioritised AI roadmap and delivery planning session',
    points: []
  },
  {
    num: '04',
    title: 'Implementation And Integration',
    subtitle: '',
    text:
      'We build and configure your AI solution. Then these solutions integrate with your existing technology stacks. Test all these properly and provide you with a proper documented outcome.',
    image: '/assets/images/webdev-mockup-desktop.png',
    alt: 'Implementation and integration of AI tools into existing technology stacks',
    points: []
  },
  {
    num: '05',
    title: 'Training, Handover, And Ongoing Support',
    subtitle: '',
    text:
      'A deployed solution that your team does not use is just a waste of time and investment. We provide a structured approach and tailored training to your workflow and the team\'s existing capabilities. If you want proper ongoing consultancy services, we will provide these.',
    image: '/assets/images/ai-consultancy-about-hero.png',
    alt: 'Training and handover so client teams can run AI solutions with confidence',
    points: []
  }
];

const ONPAGE_SEO_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Audit Your Existing Pages',
    subtitle: '',
    text: 'We begin with a detailed on-site audit using tools such as Google Search Console, Screaming Frog, Ahrefs, SEMrush, and advanced SEO platforms to assess indexing, metadata, content quality, and technical signals. This allows us to identify issues that affect visibility and prioritise high-impact improvements.',
    image: '/assets/images/compare-section-office-bg.png',
    alt: 'On-site SEO audit with Search Console, crawl tools and analytics',
    points: []
  },
  {
    num: '02',
    title: 'Identify Keyword and Content Gaps',
    subtitle: '',
    text: 'We analyse your current keyword coverage against competitors to uncover missed opportunities and content gaps. This includes mapping primary and secondary keywords while addressing issues such as keyword cannibalisation.',
    image: '/assets/images/ai-section-meeting-bg.png',
    alt: 'Keyword gap analysis mapped against competitor search coverage',
    points: []
  },
  {
    num: '03',
    title: 'Optimise Content and Metadata',
    subtitle: '',
    text: 'We refine your page content, title tags, and meta descriptions to align with search intent and improve click-through rates. Every update follows proven metadata tagging best practices to strengthen relevance and visibility.',
    image: '/assets/images/webdev-mockup-desktop.png',
    alt: 'Page content title tags and meta descriptions aligned to search intent',
    points: []
  },
  {
    num: '04',
    title: 'Improve Internal Links and Page Structure',
    subtitle: '',
    text: 'We restructure internal linking to create a logical flow across your website and improve crawlability. Clear page hierarchy and contextual links help distribute authority and support stronger rankings.',
    image: '/assets/images/webdev-hero-workspace.png',
    alt: 'Internal linking and site hierarchy plan on screen',
    points: []
  },
  {
    num: '05',
    title: 'Track Rankings, Traffic and Conversions',
    subtitle: '',
    text: 'We track keyword rankings, organic traffic, and how users actually behave on your pages, then adjust based on what is working. Insights from analytics and reporting tools guide ongoing optimisation and ensure your strategy remains effective.',
    image: '/assets/images/webdev-split-hero-ref.png',
    alt: 'Organic traffic conversions and rankings tracked in analytics',
    points: []
  },
  {
    num: '06',
    title: 'Clear Deliverables',
    subtitle: '',
    text: 'Every project is defined by a clear scope, with specific deliverables agreed before work begins. This ensures transparency, consistent execution, and measurable outcomes from your optimisation service.',
    image: '/assets/images/on-page-seo-hero.png',
    alt: 'Agreed SEO deliverables and project scope documented clearly',
    points: []
  }
];

const SEO_AUDIT_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery & Business Context',
    subtitle: '',
    text: 'We understand your website, target audience, services, locations, competitors and commercial goals.',
    image: '/assets/images/compare-section-office-bg.png',
    alt: 'Discovery session covering website, audience, services and commercial goals',
    points: []
  },
  {
    num: '02',
    title: 'Data Collection',
    subtitle: '',
    text: 'We review Search Console, GA4, crawl data, keyword rankings, backlink tools and live SERPs.',
    image: '/assets/images/ai-section-meeting-bg.png',
    alt: 'SEO data collection from Search Console, GA4, crawls and rank tracking',
    points: []
  },
  {
    num: '03',
    title: 'Full Website Audit',
    subtitle: '',
    text: 'We inspect technical issues, content quality, page structure, keyword targeting and competitor performance.',
    image: '/assets/images/webdev-mockup-desktop.png',
    alt: 'Full website SEO audit across technical, content and competitor factors',
    points: []
  },
  {
    num: '04',
    title: 'Priority Scoring',
    subtitle: '',
    text: 'Every issue is ranked by impact, urgency and effort. You know what to fix first.',
    image: '/assets/images/webdev-hero-workspace.png',
    alt: 'SEO issues prioritised by impact urgency and effort',
    points: []
  },
  {
    num: '05',
    title: 'SEO Audit Report',
    subtitle: '',
    text: 'You receive a clear report with findings, screenshots, explanations and recommended actions.',
    image: '/assets/images/webdev-split-hero-ref.png',
    alt: 'SEO audit report with findings screenshots and recommendations',
    points: []
  },
  {
    num: '06',
    title: 'Strategy Call',
    subtitle: '',
    text: 'We walk you through the audit in plain English and explain the best next steps.',
    image: '/assets/images/social-media-hero.png',
    alt: 'Strategy call walking through SEO audit findings and next steps',
    points: []
  },
  {
    num: '07',
    title: 'Implementation Support',
    subtitle: '',
    text: 'You can fix issues internally, share the report with your developer, or let our SEO team handle the execution.',
    image: '/assets/images/on-page-seo-hero.png',
    alt: 'SEO implementation support in-house developer handoff or agency execution',
    points: []
  }
];

const SEO_CONTENT_WRITING_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery and Content Audit',
    subtitle: '',
    text: 'We assess your current website, content gaps, and performance in Google search.',
    image: '/assets/images/compare-section-office-bg.png',
    alt: 'Discovery and content audit with Google Search performance review',
    points: []
  },
  {
    num: '02',
    title: 'Keyword Research and Planning',
    subtitle: '',
    text: 'We identify target keywords, analyse competitors, and define content priorities based on search demand.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80',
    alt: 'Keyword research and content planning based on search demand',
    points: []
  },
  {
    num: '03',
    title: 'Content Strategy and Briefing',
    subtitle: '',
    text: 'Each page is mapped with clear structure, intent, and SEO requirements before writing begins.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=80',
    alt: 'Content strategy and editorial briefing before writing',
    points: []
  },
  {
    num: '04',
    title: 'SEO Content Writing',
    subtitle: '',
    text: 'Content is written for clarity, rankings, and engagement, aligned with technical SEO principles.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=80',
    alt: 'SEO content writing for clarity and rankings',
    points: []
  },
  {
    num: '05',
    title: 'On-Page Optimisation',
    subtitle: '',
    text: 'We refine headings, metadata, internal links, and formatting to support crawlability and indexing.',
    image: '/assets/images/webdev-mockup-desktop.png',
    alt: 'On-page optimisation of headings metadata and internal links',
    points: []
  },
  {
    num: '06',
    title: 'Review and Iteration',
    subtitle: '',
    text: 'Content is refined based on performance, ensuring long-term improvement and alignment with search trends.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=80',
    alt: 'Content performance review and iterative SEO improvements',
    points: []
  }
];

const AI_MARKETING_PROCESS_STEPS = [
  {
    num: '01',
    title: 'AI Insights',
    subtitle: '',
    text:
      'A large amount of marketing data is processed using AI. You can identify search trends and audience behaviour more quickly with it. Also, AI helps marketers with best-performing campaigns and growth opportunities.',
    image: '/assets/images/ai-marketing-process-ai-insights.png',
    alt: 'Marketer at a laptop interacting with floating holographic dashboards and AI-labelled analytics panels.',
    points: []
  },
  {
    num: '02',
    title: 'Human Strategy',
    subtitle: '',
    text:
      "Human strategists ensure that the campaign matches the brand's tone and long-term growth objectives. They decide the audience that matters, the brand positioning and where the budget should be allocated.",
    image: '/assets/images/ai-marketing-process-human-strategy.png',
    alt: 'Strategist in a VR headset exploring holographic business dashboards and charts.',
    points: []
  },
  {
    num: '03',
    title: 'AI-Assisted Execution',
    subtitle: '',
    text:
      'AI speeds up marketing after the strategy is done through automation. It helps in content briefs and ad variations. This helps the marketing team to launch faster and scale productivity.',
    image: '/assets/images/ai-marketing-process-ai-assisted-execution.png',
    alt: 'Professional holding a glowing phone projecting an AI Assistant graphic with gears and prompt workflow labels.',
    points: []
  },
  {
    num: '04',
    title: 'Performance Optimisation',
    subtitle: '',
    text:
      'The marketing team analyses performance and makes the final optimisation. They review campaign quality, adjust messaging, refine targeting, improve landing pages, etc., all to interpret customer behaviour based on real business context.',
    image: '/assets/images/ai-marketing-process-performance-optimisation.png',
    alt: 'Professional at a laptop with glowing holographic charts connected to a central AI icon.',
    points: []
  },
  {
    num: '05',
    title: 'Reporting',
    subtitle: '',
    text:
      'AI helps the marketing team track rankings and conversions. After interpreting the data, humans analyse the factors impacting performance. This data is then turned into an actionable strategy for growth and future development.',
    image: '/assets/images/ai-marketing-process-reporting.png',
    alt: 'Laptop showing analytics dashboards with a robotic hand resting on the keyboard.',
    points: []
  }
];

const PROCESS_STEPS = window.location.pathname.includes('/services/web-development-services')
  ? WEBDEV_PROCESS_STEPS
  : window.location.pathname.includes('/services/wordpress-development-services')
  ? WORDPRESS_PROCESS_STEPS
  : window.location.pathname.includes('/services/social-media-marketing')
  ? SOCIAL_PROCESS_STEPS
  : window.location.pathname.includes('/services/ai-marketing-agency')
  ? AI_MARKETING_PROCESS_STEPS
  : window.location.pathname.includes('/services/ai-consultancy-services')
  ? AI_CONSULTANCY_PROCESS_STEPS
  : window.location.pathname.includes('/services/on-page-seo-services')
  ? ONPAGE_SEO_PROCESS_STEPS
  : window.location.pathname.includes('/services/seo-audit-services')
  ? SEO_AUDIT_PROCESS_STEPS
  : window.location.pathname.includes('/services/seo-content-writing-services')
  ? SEO_CONTENT_WRITING_PROCESS_STEPS
  : DEFAULT_PROCESS_STEPS;

window.activateStep = function (i) {
  i = Math.max(0, Math.min(PROCESS_STEPS.length - 1, i | 0));
  const data = PROCESS_STEPS[i];

  // 1. Reset all step circles to default
  for (let k = 0; k < PROCESS_STEPS.length; k++) {
    const circ  = document.getElementById('circ' + k);
    const num   = document.getElementById('num' + k);
    const shrt  = document.getElementById('short' + k);
    const glow  = document.getElementById('glow' + k);
    const label = document.getElementById('label' + k);
    const stepG = document.getElementById('step' + k);
    if (!circ) continue;
    circ.setAttribute('fill', '#fff');
    circ.setAttribute('stroke', 'rgba(15,42,74,.15)');
    circ.setAttribute('stroke-width', '2');
    circ.setAttribute('r', '36');
    num.setAttribute('fill', '#0F2A4A');
    shrt.setAttribute('fill', '#5B6A82');
    label.setAttribute('fill', '#5B6A82');
    if (glow) glow.setAttribute('opacity', '0');
    if (stepG) stepG.classList.remove('is-active');
  }

  // 2. Activate current
  const circ  = document.getElementById('circ' + i);
  const num   = document.getElementById('num' + i);
  const shrt  = document.getElementById('short' + i);
  const glow  = document.getElementById('glow' + i);
  const label = document.getElementById('label' + i);
  const stepG = document.getElementById('step' + i);
  if (circ) {
    circ.setAttribute('fill', '#FF4D3A');
    circ.setAttribute('stroke', '#FF4D3A');
    circ.setAttribute('stroke-width', '3');
    circ.setAttribute('r', '40');
    num.setAttribute('fill', '#fff');
    shrt.setAttribute('fill', 'rgba(255,255,255,.85)');
    label.setAttribute('fill', '#FF4D3A');
    if (glow) glow.setAttribute('opacity', '1');
    if (stepG) stepG.classList.add('is-active');
  }

  // 3. Update description panel
  const panel = document.getElementById('procDesc');
  const tNum = document.getElementById('procDescNum');
  const tTitle = document.getElementById('procDescTitle');
  const tSub = document.getElementById('procDescSub');
  const tText = document.getElementById('procDescText');
  const tPts = document.getElementById('procDescPts');
  const tImg = document.getElementById('procDescImg');
  const tTag = document.getElementById('procDescTag');
  if (!panel) return;

  panel.classList.remove('is-flipping');
  // trigger reflow so the keyframe re-runs
  void panel.offsetWidth;
  panel.classList.add('is-flipping');

  if (tNum)   tNum.textContent = data.num;
  if (tTitle) tTitle.textContent = data.title;
  if (tSub) {
    tSub.textContent = data.subtitle || '';
    tSub.style.display = data.subtitle ? '' : 'none';
  }
  if (tText) {
    tText.textContent = data.text || '';
    tText.style.display = data.text ? '' : 'none';
  }
  if (tPts) {
    const points = Array.isArray(data.points) ? data.points : [];
    tPts.innerHTML = points.map(p =>
      '<div class="proc-desc__pt"><span class="proc-desc__pt-dot"></span>' + p + '</div>'
    ).join('');
    tPts.style.display = points.length ? '' : 'none';
  }
  if (tImg && data.image) {
    // only swap if different to avoid re-download flicker
    if (!tImg.src.endsWith(data.image.split('/').pop())) {
      tImg.src = data.image;
    }
    tImg.alt = data.alt || (data.title + ' step visual');
  }
  if (tTag) tTag.textContent = 'Step ' + data.num + ' \u00b7 ' + data.title;

  // 4. Sync dots nav
  document.querySelectorAll('.pn-dot').forEach((d, idx) => {
    d.classList.toggle('is-active', idx === i);
  });
};

(function () {
  'use strict';

  /* ---------- HOME SECTION ORDER ---------- */
  const mainEl = document.querySelector('main');
  if (mainEl && window.location.pathname === '/') {
    const desiredOrder = [
      '#home',          // Hero + tagline + stats
      '.trusted-section', // Trust logos
      '#services',      // Services
      '#industries',    // Industry specialisations
      '.sectors-bridge', // Supporting bridge copy for industries
      '#process',       // Process section
      '#ai',            // AI section
      '#principles',    // 4 core values
      '.compare',       // Comparison table
      '#work',          // Case studies
      '#results',       // Supporting results section
      '#testimonials',  // Testimonials
      '#cta-final',     // CTA (Free Strategy Session)
      '#contact',       // Booking/contact form
      '#faq'            // FAQs
    ];

    desiredOrder.forEach(function (selector) {
      const section = mainEl.querySelector(selector);
      if (section) mainEl.appendChild(section);
    });
  }

  /* ---------- WEB DEVELOPMENT SERVICES PAGE SECTION ORDER (hero → trust → include → types → philosophy → process → compare → commerce/migrations → FAQ) ---------- */
  if (
    mainEl &&
    /\/services\/web-development-services\/?$/.test(window.location.pathname)
  ) {
    const webDevSectionOrder = [
      'section.hero',           // Hero + Tagline (in-page stats stay in hero)
      '.svc-webdev-ticker',     // Stats & Trust Signals
      '#include',               // What Services Include
      '#website-types',         // Types of Websites We Build
      '.svc-transform',         // Philosophy block
      '#dev-process',           // Process Section
      '#agency-compare',        // Why Choose 360 (comparison table)
      '.wd-migration',         // WooCommerce Development + CMS Migrations (same section)
      '#faq-webdev'             // FAQs
    ];

    webDevSectionOrder.forEach(function (selector) {
      const section = mainEl.querySelector(selector);
      if (section) mainEl.appendChild(section);
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- STICKY NAV SCROLL ---------- */
  const nav = document.getElementById('nav');
  const toTop = document.getElementById('toTop');

  function handleScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('is-scrolled', y > 20);
    if (toTop) toTop.classList.toggle('is-visible', y > 500);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav__menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- BACK TO TOP ---------- */
  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- PROC-SEC STEPS (hover + keyboard active row) ---------- */
  const procStepRoot = document.querySelector('.proc-sec .proc-steps');
  if (procStepRoot) {
    const stepItems = [...procStepRoot.querySelectorAll('.pst')];
    const setProcActive = index => {
      stepItems.forEach((row, j) => {
        const on = j === index;
        row.classList.toggle('is-active', on);
        row.setAttribute('aria-expanded', on ? 'true' : 'false');
      });
    };

    const applyTouchMode = () => {
      const coarse = window.matchMedia('(hover: none)').matches;
      const narrow = window.innerWidth <= 560;
      procStepRoot.classList.toggle('proc-steps--touch', coarse || narrow);
    };

    stepItems.forEach((row, i) => {
      row.setAttribute('tabindex', '0');
      row.setAttribute('role', 'button');
      row.setAttribute('aria-expanded', i === 0 ? 'true' : 'false');
      row.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          setProcActive(i);
        }
      });
      row.addEventListener('mouseenter', () => setProcActive(i));
      row.addEventListener('focus', () => setProcActive(i));
    });
    setProcActive(0);
    procStepRoot.addEventListener('mouseleave', () => setProcActive(0));
    procStepRoot.addEventListener('focusout', e => {
      if (!procStepRoot.contains(e.relatedTarget)) setProcActive(0);
    });

    applyTouchMode();
    window.matchMedia('(hover: none)').addEventListener('change', applyTouchMode);
    window.addEventListener('resize', applyTouchMode);
  }

  /* ---------- ANIMATED COUNTERS ---------- */
  const counters = document.querySelectorAll('.count');

  function animateCount(el) {
    const target = parseFloat(el.dataset.count || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---------- SERVICE CARDS AUTO-SLIDE (one by one) ---------- */
  const bestViewport = document.querySelector('.svc-best__viewport');
  const bestTrack = document.querySelector('.svc-best__track');
  if (bestViewport && bestTrack) {
    let currentIndex = 0;
    let timerId = null;
    const intervalMs = 3200;

    const getCardsVisible = () => {
      const styles = getComputedStyle(bestTrack);
      const parsed = parseInt(styles.getPropertyValue('--cards-visible').trim(), 10);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 3;
    };

    const getCardMetrics = () => {
      const firstCard = bestTrack.querySelector('.svc-best-card');
      if (!firstCard) return null;
      const trackStyles = getComputedStyle(bestTrack);
      const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
      return { cardWidth: firstCard.getBoundingClientRect().width, gap };
    };

    const slideTo = idx => {
      const metrics = getCardMetrics();
      if (!metrics) return;
      const step = metrics.cardWidth + metrics.gap;
      bestTrack.style.transform = `translateX(${-idx * step}px)`;
      updateActiveCards();
    };

    const updateActiveCards = () => {
      const cards = bestTrack.querySelectorAll('.svc-best-card');
      const visible = getCardsVisible();
      cards.forEach((card, idx) => {
        const inRange = idx >= currentIndex && idx < currentIndex + visible;
        card.classList.toggle('is-active', inRange);
      });
    };

    const stepSlide = () => {
      const cards = bestTrack.querySelectorAll('.svc-best-card');
      const visible = getCardsVisible();
      const maxIndex = Math.max(cards.length - visible, 0);
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      slideTo(currentIndex);
    };

    const start = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (timerId) clearInterval(timerId);
      timerId = setInterval(stepSlide, intervalMs);
    };

    const stop = () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };

    bestViewport.addEventListener('mouseenter', stop);
    bestViewport.addEventListener('mouseleave', start);
    window.addEventListener('resize', () => {
      const cards = bestTrack.querySelectorAll('.svc-best-card');
      const visible = getCardsVisible();
      const maxIndex = Math.max(cards.length - visible, 0);
      if (currentIndex > maxIndex) currentIndex = 0;
      slideTo(currentIndex);
    });

    slideTo(0);
    start();
  }

  /* ---------- SERVICES PANEL (left list -> right preview); one init per .svc-sec ---------- */
  document.querySelectorAll('.svc-sec').forEach(svcSection => {
    const svcItems = svcSection.querySelectorAll('.sl[data-svc]');
    const svcPreviewPanels = svcSection.querySelectorAll('.svc-img[data-idx]');
    const svcDefault = svcSection.querySelector('.svc-default');
    if (!svcItems.length || !svcPreviewPanels.length) return;

    const showSvc = idx => {
      svcItems.forEach(item => {
        item.classList.toggle('active', item.dataset.svc === String(idx));
      });
      svcPreviewPanels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.idx === String(idx));
      });
      if (svcDefault) {
        svcDefault.style.opacity = '0';
        svcDefault.style.visibility = 'hidden';
      }
    };

    const clearSvc = () => {
      showSvc(0);
    };

    svcItems.forEach(item => {
      const idx = item.dataset.svc;
      item.addEventListener('mouseenter', () => showSvc(idx));
      item.addEventListener('focus', () => showSvc(idx));
      item.addEventListener('click', () => showSvc(idx));
    });

    svcSection.addEventListener('mouseleave', clearSvc);
    showSvc(0);
  });

  /* ---------- SMM DIAGNOSIS LIST (click / keyboard to activate) ---------- */
  const diagItems = document.querySelectorAll('.smm-diag__item');
  const diagList = document.querySelector('.smm-diag__list');
  if (diagItems.length && diagList) {
    const activateDiag = target => {
      diagItems.forEach(it => it.classList.toggle('is-active', it === target));
      // Mark list as having a deliberate selection so hover no longer
      // collapses the clicked item — sticky click behaviour.
      diagList.classList.add('has-selection');
    };
    diagItems.forEach(item => {
      item.addEventListener('click', () => activateDiag(item));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateDiag(item);
        }
      });
    });
  }

  /* ---------- DASHBOARD TAB TOGGLE ---------- */
  const toggles = document.querySelectorAll('.dashboard__toggles button');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      toggles.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
    });
  });

  /* ---------- CASE STUDY FILTER PILLS ---------- */
  const workFilters = document.querySelectorAll('.work__filter');
  const workCards = document.querySelectorAll('.work-card[data-category]');

  if (workFilters.length && workCards.length) {
    workFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        workFilters.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.dataset.filter;
        workCards.forEach(card => {
          const cat = card.dataset.category;
          const match = filter === 'all' || cat === filter;
          card.style.transition = 'opacity .35s var(--ease), transform .35s var(--ease)';
          if (match) {
            card.style.display = '';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = '';
            });
          } else {
            card.style.opacity = '.25';
            card.style.transform = 'scale(.98)';
          }
        });
      });
    });
  }

  /* ---------- CONTACT FORM (multi-step) ---------- */
  const contactFormErrStyle = '#FF4D3A';

  function clearFieldError(el) {
    if (!el) return;
    el.style.borderColor = '';
    el.style.boxShadow = '';
  }

  function setFieldError(el) {
    if (!el) return;
    el.style.borderColor = contactFormErrStyle;
    el.style.boxShadow = '0 0 0 4px rgba(255, 77, 58, .12)';
  }

  const form = document.getElementById('contactForm');
  const successEl = document.getElementById('contactSuccess');
  const step1 = document.getElementById('contactStep1');
  const step2 = document.getElementById('contactStep2');
  const btnNext = document.getElementById('contactBtnNext');
  const btnBack = document.getElementById('contactBtnBack');
  const preferredTimeSel = document.getElementById('contactPreferredTime');
  const countrySel = document.getElementById('contactCountry');
  const contactTzHidden = document.getElementById('contactTimezoneIana');
  if (contactTzHidden && !contactTzHidden.value) {
    try {
      contactTzHidden.value = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/London';
    } catch (_) {
      contactTzHidden.value = 'Europe/London';
    }
  }
  const progressItems = form ? form.querySelectorAll('.contact__progress-item') : [];
  /** IANA timezone by ISO country code; filled from `/data/country-primary-timezone.json`. */
  var countryTzMap = {};

  function syncTimezoneFromCountry(cc) {
    if (!contactTzHidden) return;
    var code = (cc || 'GB').toUpperCase();
    var tz = countryTzMap[code] || countryTzMap.GB || 'Europe/London';
    contactTzHidden.value = tz;
  }

  async function fetchGeoCountryCode() {
    try {
      var r = await fetch('https://get.geojs.io/v1/ip/geo.json', { credentials: 'omit' });
      if (!r.ok) return '';
      var d = await r.json();
      var c = d.country_code;
      return typeof c === 'string' && c.length >= 2 ? c.slice(0, 2).toUpperCase() : '';
    } catch (_) {
      return '';
    }
  }

  function localeFallbackCountryCode() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var m = /^[a-z]{2}-([A-Za-z]{2})/i.exec(String(langs[i]).replace('_', '-'));
      if (m) return m[1].toUpperCase();
    }
    return '';
  }

  /** Single shared guess (geo → browser locale); used by Country select defaults. */
  var visitorCountryPromise = null;
  function getVisitorCountryCodeGuess() {
    if (!visitorCountryPromise) {
      visitorCountryPromise = (async function () {
        var g = await fetchGeoCountryCode();
        return (g || localeFallbackCountryCode() || '').toUpperCase();
      })();
    }
    return visitorCountryPromise;
  }

  async function initContactCountry() {
    if (!countrySel) return;
    try {
      try {
        var tzRes = await fetch('/data/country-primary-timezone.json');
        if (tzRes.ok) {
          (await tzRes.json()).forEach(function (row) {
            countryTzMap[row.code] = row.tz;
          });
        }
      } catch (_) {}
      var res = await fetch('/data/iso-countries.json');
      if (!res.ok) throw new Error('countries');
      var rows = await res.json();
      var codes = {};
      countrySel.innerHTML = '';
      var ph = document.createElement('option');
      ph.value = '';
      ph.textContent = 'Select country';
      countrySel.appendChild(ph);
      rows.forEach(function (row) {
        codes[row.code] = true;
        var opt = document.createElement('option');
        opt.value = row.code;
        opt.textContent = row.name;
        countrySel.appendChild(opt);
      });
      var visitor = await getVisitorCountryCodeGuess();
      var pick = visitor && codes[visitor] ? visitor : '';
      if (!pick && codes.GB) pick = 'GB';
      countrySel.value = pick || '';
      syncTimezoneFromCountry(countrySel.value || 'GB');
      updateContactTimeSlotAvailability();
    } catch (_) {
      countrySel.innerHTML =
        '<option value="">Unable to load countries</option>';
      syncTimezoneFromCountry('GB');
      updateContactTimeSlotAvailability();
    }
  }

  initContactCountry();

  function setContactStep(which) {
    if (!step1 || !step2) return;
    const onTwo = which === 2;
    step1.hidden = !onTwo ? false : true;
    step2.hidden = !onTwo;
    progressItems.forEach((li, i) => {
      const active = (i === 0 && !onTwo) || (i === 1 && onTwo);
      li.classList.toggle('is-active', active);
      if (active) li.setAttribute('aria-current', 'step');
      else li.removeAttribute('aria-current');
    });
    if (onTwo) {
      const first = step2.querySelector('input[type="text"], input:not([type])');
      if (first && typeof first.focus === 'function') first.focus();
    }
  }

  if (preferredTimeSel) {
    preferredTimeSel.addEventListener('change', () => clearFieldError(preferredTimeSel));
    preferredTimeSel.addEventListener('focus', () => clearFieldError(preferredTimeSel));
  }

  if (countrySel) {
    countrySel.addEventListener('change', function () {
      clearFieldError(countrySel);
      syncTimezoneFromCountry(countrySel.value || 'GB');
      updateContactTimeSlotAvailability();
    });
    countrySel.addEventListener('focus', () => clearFieldError(countrySel));
  }

  if (btnNext && step2) {
    btnNext.addEventListener('click', () => {
      if (!preferredTimeSel || !preferredTimeSel.value.trim()) {
        setFieldError(preferredTimeSel);
        return;
      }
      clearFieldError(preferredTimeSel);
      setContactStep(2);
    });
  }

  if (btnBack && step1) {
    btnBack.addEventListener('click', () => setContactStep(1));
  }

  if (form && step2) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const country = countrySel;

      if (step2.hidden) {
        clearFieldError(preferredTimeSel);
        if (!preferredTimeSel || !preferredTimeSel.value.trim()) {
          setFieldError(preferredTimeSel);
          return;
        }
        clearFieldError(preferredTimeSel);
        setContactStep(2);
        return;
      }

      let valid = true;

      [name, email, country].forEach(input => {
        if (!input) return;
        if (!input.value.trim()) {
          setFieldError(input);
          valid = false;
        } else {
          clearFieldError(input);
        }
      });

      if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setFieldError(email);
        valid = false;
      }

      if (!valid) return;

      syncTimezoneFromCountry(country && country.value ? country.value : 'GB');

      const submitBtn = document.getElementById('contactBtnSubmit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '.85';
        submitBtn.innerHTML =
          '<span>Sending...</span>';
      }

      setTimeout(() => {
        const inner = form.querySelector('.contact__form-inner');
        if (inner) inner.style.display = 'none';
        else {
          form.querySelectorAll(
            'input, select, textarea, .chips, .contact__form-head, .form-field, .form-row, .contact__submit'
          ).forEach(el => {
            el.style.display = 'none';
          });
        }
        if (successEl) successEl.hidden = false;
      }, 900);
    });

    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('focus', () => clearFieldError(input));
    });
  }

  const simpleForm = document.getElementById('simpleContactForm');
  const simpleInner = document.getElementById('simpleContactInner');
  const simpleSuccess = document.getElementById('simpleContactSuccess');
  const simpleSubmitBtn = document.getElementById('simpleContactSubmit');
  if (simpleForm && simpleInner && simpleSuccess) {
    simpleForm.addEventListener('submit', e => {
      e.preventDefault();
      const nameEl = simpleForm.querySelector('input[name="name"]');
      const emailEl = simpleForm.querySelector('input[name="email"]');
      const msgEl = simpleForm.querySelector('textarea[name="message"]');

      let valid = true;
      [nameEl, emailEl, msgEl].forEach(input => {
        if (!input) return;
        if (!input.value.trim()) {
          setFieldError(input);
          valid = false;
        } else {
          clearFieldError(input);
        }
      });
      if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        setFieldError(emailEl);
        valid = false;
      }
      if (!valid) return;

      if (simpleSubmitBtn) {
        simpleSubmitBtn.disabled = true;
        simpleSubmitBtn.style.opacity = '.85';
        simpleSubmitBtn.textContent = 'Sending...';
      }

      setTimeout(() => {
        simpleInner.style.display = 'none';
        simpleSuccess.hidden = false;
      }, 650);
    });

    simpleForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('focus', () => clearFieldError(input));
    });
  }

  /* ---------- CONTACT BOOKING CALENDAR (dynamic months, Mon–Sun) ---------- */
  const contactCal = document.getElementById('contactCal');
  const contactPreferredDate = document.getElementById('contactPreferredDate');
  const contactCalGrid = document.getElementById('contactCalGrid');
  const contactCalPrev = document.getElementById('contactCalPrev');
  const contactCalNext = document.getElementById('contactCalNext');
  const contactCalMonthLabel = document.getElementById('contactCalMonthLabel');

  function pad2(n) {
    return String(n).padStart(2, '0');
  }
  function isoFromDate(d) {
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }
  function parseISOLocal(iso) {
    if (!iso || typeof iso !== 'string') return null;
    const p = iso.split('-');
    if (p.length !== 3) return null;
    const y = parseInt(p[0], 10);
    const mo = parseInt(p[1], 10) - 1;
    const da = parseInt(p[2], 10);
    if (isNaN(y) || isNaN(mo) || isNaN(da)) return null;
    return new Date(y, mo, da);
  }
  function startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  function ymCompare(aY, aM, bY, bM) {
    if (aY !== bY) return aY < bY ? -1 : 1;
    if (aM === bM) return 0;
    return aM < bM ? -1 : 1;
  }
  function getDatePartsInTimezone(date, timeZone) {
    try {
      const dtf = new Intl.DateTimeFormat('en-CA', {
        timeZone: timeZone || 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const parts = dtf.formatToParts(date);
      const out = {};
      parts.forEach(function (p) {
        if (p.type !== 'literal') out[p.type] = p.value;
      });
      return {
        year: parseInt(out.year || '0', 10),
        month: parseInt(out.month || '0', 10),
        day: parseInt(out.day || '0', 10),
        hour: parseInt(out.hour || '0', 10),
        minute: parseInt(out.minute || '0', 10)
      };
    } catch (_) {
      return null;
    }
  }

  function updateContactTimeSlotAvailability() {
    if (!preferredTimeSel || !contactPreferredDate) return;
    const selectedDate = parseISOLocal(contactPreferredDate.value);
    if (!selectedDate) return;

    const tz = (contactTzHidden && contactTzHidden.value) || 'Europe/London';
    const nowParts = getDatePartsInTimezone(new Date(), tz);
    if (!nowParts) return;

    const selectedDateIso = isoFromDate(selectedDate);
    const nowDateIso = nowParts.year + '-' + pad2(nowParts.month) + '-' + pad2(nowParts.day);
    const isTodayInTimezone = selectedDateIso === nowDateIso;
    const nowMinutes = nowParts.hour * 60 + nowParts.minute;

    var selectedStillValid = true;
    Array.from(preferredTimeSel.options).forEach(function (opt, idx) {
      if (idx === 0 || !opt.value || !opt.value.includes('-')) {
        opt.disabled = false;
        return;
      }
      const start = opt.value.split('-')[0] || '';
      const hm = start.split(':');
      const hh = parseInt(hm[0], 10);
      const mm = parseInt(hm[1], 10);
      const startMinutes = (isNaN(hh) ? 0 : hh) * 60 + (isNaN(mm) ? 0 : mm);
      const disable = isTodayInTimezone && startMinutes <= nowMinutes;
      opt.disabled = disable;
      if (disable && preferredTimeSel.value === opt.value) selectedStillValid = false;
    });

    if (!selectedStillValid) {
      preferredTimeSel.value = '';
      setFieldError(preferredTimeSel);
    }
  }

  /** Book from today through this many calendar days (~12 months+) */
  const CONTACT_CAL_MAX_BOOKING_DAYS = 370;

  if (
    contactCal &&
    contactPreferredDate &&
    contactCalGrid &&
    contactCalPrev &&
    contactCalNext &&
    contactCalMonthLabel
  ) {
    const today = startOfDay(new Date());
    const maxSelectable = new Date(today);
    maxSelectable.setDate(maxSelectable.getDate() + CONTACT_CAL_MAX_BOOKING_DAYS);

    const minViewY = today.getFullYear();
    const minViewM = today.getMonth();
    const maxViewY = maxSelectable.getFullYear();
    const maxViewM = maxSelectable.getMonth();

    if (!contactPreferredDate.value) {
      contactPreferredDate.value = isoFromDate(today);
    }

    let sel = parseISOLocal(contactPreferredDate.value);
    if (!sel || sel < today || sel > maxSelectable) {
      sel = new Date(today);
      contactPreferredDate.value = isoFromDate(sel);
    }

    let viewY = sel.getFullYear();
    let viewM = sel.getMonth();
    if (ymCompare(viewY, viewM, minViewY, minViewM) < 0) {
      viewY = minViewY;
      viewM = minViewM;
    }
    if (ymCompare(viewY, viewM, maxViewY, maxViewM) > 0) {
      viewY = maxViewY;
      viewM = maxViewM;
    }

    let selectedISO = isoFromDate(sel);

    function renderContactCal() {
      const monthTitle = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(
        new Date(viewY, viewM, 1)
      );
      contactCalMonthLabel.textContent = monthTitle.charAt(0).toUpperCase() + monthTitle.slice(1);
      contactCal.setAttribute(
        'aria-label',
        'Choose a booking date — ' + contactCalMonthLabel.textContent.replace(/\u00a0/g, ' ')
      );

      contactCalPrev.disabled = ymCompare(viewY, viewM, minViewY, minViewM) <= 0;
      contactCalNext.disabled = ymCompare(viewY, viewM, maxViewY, maxViewM) >= 0;

      const first = new Date(viewY, viewM, 1);
      const lead = (first.getDay() + 6) % 7;
      const dim = new Date(viewY, viewM + 1, 0).getDate();

      contactCalGrid.innerHTML = '';
      const frag = document.createDocumentFragment();

      function addPad(n) {
        for (let i = 0; i < n; i++) {
          const s = document.createElement('span');
          s.className = 'contact__cal-pad';
          frag.appendChild(s);
        }
      }

      addPad(lead);

      for (let day = 1; day <= dim; day++) {
        const dt = new Date(viewY, viewM, day);
        const iso = isoFromDate(dt);
        const beforeToday = dt < today;
        const afterBook = dt > maxSelectable;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'contact__cal-day';

        btn.textContent = String(day);

        if (beforeToday || afterBook) {
          btn.classList.add('contact__cal-day--muted');
          btn.disabled = true;
        } else {
          btn.classList.add('contact__cal-day--pick');
          btn.setAttribute('data-date', iso);
          if (iso === selectedISO) btn.classList.add('is-selected');
        }

        frag.appendChild(btn);
      }

      const totalCells = lead + dim;
      const tail = (7 - (totalCells % 7)) % 7;
      addPad(tail);

      contactCalGrid.appendChild(frag);
    }

    contactCalGrid.addEventListener('click', ev => {
      const btn = ev.target.closest('button.contact__cal-day[data-date]');
      if (!btn || btn.disabled) return;
      selectedISO = btn.getAttribute('data-date') || '';
      contactPreferredDate.value = selectedISO;
      contactCalGrid.querySelectorAll('.contact__cal-day.is-selected').forEach(d => d.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      updateContactTimeSlotAvailability();
    });

    contactCalPrev.addEventListener('click', () => {
      if (ymCompare(viewY, viewM, minViewY, minViewM) <= 0) return;
      viewM -= 1;
      if (viewM < 0) {
        viewM = 11;
        viewY -= 1;
      }
      renderContactCal();
    });

    contactCalNext.addEventListener('click', () => {
      if (ymCompare(viewY, viewM, maxViewY, maxViewM) >= 0) return;
      viewM += 1;
      if (viewM > 11) {
        viewM = 0;
        viewY += 1;
      }
      renderContactCal();
    });

    renderContactCal();
    updateContactTimeSlotAvailability();
  }

  /* ---------- SMOOTH ANCHOR OFFSET FOR STICKY NAV ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = (nav ? nav.offsetHeight : 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- HERO PARALLAX ---------- */
  const hero = document.querySelector('.hero');
  const heroCards = document.querySelectorAll('.hero__card');
  if (hero && heroCards.length && window.matchMedia('(min-width: 1100px)').matches) {
    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroCards.forEach((card, i) => {
        const depth = (i + 1) * 6;
        card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    });
    hero.addEventListener('mouseleave', () => {
      heroCards.forEach(card => { card.style.transform = ''; });
    });
  }

  /* ---------- SERVICES EDITORIAL: sidebar ↔ panels sync ---------- */
  const svcNav = document.querySelectorAll('.svc-nav__item');
  const svcPanels = document.querySelectorAll('.svc-panel');

  if (svcNav.length && svcPanels.length) {
    // Click nav item -> scroll to corresponding panel
    svcNav.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.target, 10);
        const target = svcPanels[idx];
        if (!target) return;
        const offset = (nav ? nav.offsetHeight : 0) + 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });

    // Scroll spy: which panel is the user looking at
    if ('IntersectionObserver' in window) {
      const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.i, 10);
            svcNav.forEach((b, k) => b.classList.toggle('is-active', k === idx));
          }
        });
      }, { rootMargin: '-30% 0px -50% 0px', threshold: 0 });
      svcPanels.forEach(p => spy.observe(p));
    }
  }

  /* ---------- PROCESS DOTS NAV ---------- */
  const dotNav = document.querySelectorAll('.pn-dot');
  dotNav.forEach(d => {
    d.addEventListener('click', () => {
      const step = parseInt(d.dataset.step, 10);
      if (!isNaN(step) && typeof window.activateStep === 'function') {
        window.activateStep(step);
      }
    });
  });

  /* Sync panel + active ring with step 0 when circular process is present */
  if (document.getElementById('procDesc') && typeof window.activateStep === 'function') {
    requestAnimationFrame(() => window.activateStep(0));
  }

  /* ---------- PROCESS AUTO-ROTATE ON FIRST VIEW ---------- */
  const procSvg = document.getElementById('procSvg');
  if (procSvg && 'IntersectionObserver' in window) {
    let autoPlay = null;
    const pio = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !autoPlay) {
          let i = 0;
          autoPlay = setInterval(() => {
            if (typeof window.activateStep === 'function') window.activateStep(i);
            i = (i + 1) % PROCESS_STEPS.length;
          }, 2800);

          // Stop auto-play when user hovers the SVG or clicks a dot/step
          const stop = () => {
            clearInterval(autoPlay);
            autoPlay = 'stopped';
          };
          procSvg.addEventListener('mouseenter', stop, { once: true });
          document.querySelectorAll('.pn-dot').forEach(d => d.addEventListener('click', stop, { once: true }));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    pio.observe(procSvg);
  }

  /* ---------- FAQ: only one open at a time ---------- */
  const faqItems = document.querySelectorAll('.faq-row, .faq__item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  /* ---------- Who needs on-page SEO: single-open accordion ---------- */
  const whoNeedsAcc = document.querySelectorAll('.seo-who-needs__acc');
  whoNeedsAcc.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        whoNeedsAcc.forEach(other => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  /* ---------- COMPARE: add mobile data-labels ---------- */
  const compareRows = document.querySelectorAll('.compare__row');
  const headers = ['', 'Most agencies', 'In-house team', '360 Web Solutions'];
  compareRows.forEach(row => {
    row.querySelectorAll('.compare__cell').forEach((cell, idx) => {
      if (idx > 0 && !cell.hasAttribute('data-label')) {
        cell.setAttribute('data-label', headers[idx] || '');
      }
    });
  });

  /* ---------- PRINCIPLES v2 — step pills ↔ detail panels ---------- */
  const pv2Steps  = document.querySelectorAll('.pv2-step');
  const pv2Panels = document.querySelectorAll('.pv2-panel');

  function pv2Activate(step) {
    pv2Steps.forEach(s => {
      const on = s.dataset.step === String(step);
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    pv2Panels.forEach(p => {
      p.classList.toggle('is-active', p.dataset.panel === String(step));
    });
  }

  pv2Steps.forEach(step => {
    step.addEventListener('click', () => pv2Activate(step.dataset.step));
    step.addEventListener('keydown', (e) => {
      const total = pv2Steps.length;
      const current = parseInt(step.dataset.step, 10);
      let next = current;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = current === total ? 1 : current + 1;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = current === 1 ? total : current - 1;
      else return;
      e.preventDefault();
      pv2Activate(next);
      const target = document.querySelector(`.pv2-step[data-step="${next}"]`);
      if (target) target.focus();
    });
  });

  /* Optional: auto-cycle the principles once when first in view */
  const pv2Section = document.querySelector('.principles-v2');
  if (pv2Section && pv2Steps.length) {
    let cycled = false;
    const pv2Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !cycled) {
          cycled = true;
          let i = 1;
          const total = pv2Steps.length;
          const timer = setInterval(() => {
            i++;
            if (i > total) { clearInterval(timer); pv2Activate(1); return; }
            pv2Activate(i);
          }, 2200);
          pv2Section.addEventListener('click', () => clearInterval(timer), { once: true });
          pv2Section.addEventListener('mouseenter', () => clearInterval(timer), { once: true });
        }
      });
    }, { threshold: 0.35 });
    pv2Observer.observe(pv2Section);
  }

  /* ---------- GOOGLE REVIEWS — filter chips + re-order ---------- */
  const grChips = document.querySelectorAll('.gr-chip');
  const grGrid  = document.querySelector('.gr-grid');
  if (grChips.length && grGrid) {
    const grCards = Array.from(grGrid.querySelectorAll('.gr-card'));
    const originalOrder = grCards.slice();

    const monthsAgoFromTime = (txt) => {
      // Parse strings like "2 weeks ago", "a month ago", "3 months ago"
      const t = (txt || '').toLowerCase();
      if (t.includes('week'))  return (parseInt(t) || 1) * 0.25;
      if (t.includes('day'))   return 0.03;
      if (t.includes('month')) return (parseInt(t) || 1);
      if (t.includes('year'))  return (parseInt(t) || 1) * 12;
      return 99;
    };
    const ratingOf = (card) => {
      const stars = card.querySelectorAll('.gr-card__rate .gr-stars svg');
      return stars.length || 5;
    };
    const helpfulOf = (card) => {
      const txt = card.querySelector('.gr-action em')?.textContent || '';
      return parseInt(txt.replace(/[^\d]/g, ''), 10) || 0;
    };
    const timeOf = (card) => monthsAgoFromTime(card.querySelector('.gr-card__time')?.textContent);

    function applyFilter(filter) {
      let ordered = originalOrder.slice();
      if (filter === 'newest') {
        ordered.sort((a, b) => timeOf(a) - timeOf(b));
      } else if (filter === 'highest') {
        ordered.sort((a, b) => (ratingOf(b) - ratingOf(a)) || (helpfulOf(b) - helpfulOf(a)));
      } else if (filter === 'lowest') {
        ordered.sort((a, b) => (ratingOf(a) - ratingOf(b)) || (helpfulOf(a) - helpfulOf(b)));
      } else {
        // 'relevant' → by helpful count desc
        ordered.sort((a, b) => helpfulOf(b) - helpfulOf(a));
      }

      // Fade-out → reorder → fade-in
      grGrid.style.transition = 'opacity .18s ease';
      grGrid.style.opacity = '0';
      setTimeout(() => {
        ordered.forEach(card => grGrid.appendChild(card));
        grGrid.style.opacity = '1';
      }, 180);
    }

    grChips.forEach(chip => {
      chip.addEventListener('click', () => {
        grChips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        applyFilter(chip.dataset.filter || 'relevant');
      });
    });
  }

  /* ---------- LIVE CHAT (branded floating widget) ---------- */
  const livechat = document.getElementById('livechat');
  const livechatToggle = document.getElementById('livechatToggle');
  const livechatPanel = document.getElementById('livechatPanel');
  const livechatClose = document.getElementById('livechatClose');
  if (livechat && livechatToggle && livechatPanel) {
    const livechatOpen = () => {
      livechatPanel.hidden = false;
      livechatToggle.setAttribute('aria-expanded', 'true');
      livechat.classList.add('is-open');
    };
    const livechatShut = () => {
      livechatPanel.hidden = true;
      livechatToggle.setAttribute('aria-expanded', 'false');
      livechat.classList.remove('is-open');
      livechatToggle.focus();
    };
    livechatToggle.addEventListener('click', () => {
      if (livechatPanel.hidden) livechatOpen();
      else livechatShut();
    });
    livechatClose?.addEventListener('click', livechatShut);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !livechatPanel.hidden) livechatShut();
    });

    /** Tawk: reference sites embed Tawk but use a custom launcher; avoid default pink bubble via hideWidget in layout. */
    const livechatCta = livechat.querySelector('.livechat__cta');
    const tryOpenTawk = (attempt) => {
      var a = window.Tawk_API;
      if (a && typeof a.maximize === 'function') {
        a.maximize();
        livechatShut();
        return;
      }
      if (attempt < 40) {
        window.setTimeout(function () { tryOpenTawk(attempt + 1); }, 100);
        return;
      }
      var href = livechatCta && livechatCta.getAttribute('href');
      if (href && href !== '#') window.location.href = href;
    };
    livechatCta?.addEventListener('click', function (e) {
      if (typeof window.Tawk_API === 'undefined') return;
      e.preventDefault();
      tryOpenTawk(0);
    });
  }
})();
