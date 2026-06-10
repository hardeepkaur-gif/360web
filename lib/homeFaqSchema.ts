export const HOMEPAGE_FAQS = [
  {
    question: "What does a digital marketing agency do?",
    answer:
      "A digital marketing agency helps businesses grow online through services like SEO, PPC, paid social, content marketing, web design, and conversion optimization. At 360, we go further by connecting all of those channels so your SEO data feeds your PPC.",
  },
  {
    question: "How do I choose the right digital marketing agency in the UK?",
    answer:
      "The right agency will audit your current position before proposing a solution, have proven results in your industry, offer transparent real-time reporting, and give you a dedicated strategist. We offer a free one-hour strategy session specifically so you can evaluate us before committing to anything.",
  },
  {
    question:
      "Is it better to hire a digital marketing agency or build an in-house team?",
    answer:
      "An in-house team brings deep brand knowledge but a narrow market view, and hiring takes 4-8 weeks before anything starts. An agency brings multi-channel expertise, live market data, and specialist tools from day one.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "PPC can generate leads within days. SEO shows meaningful movement within 90 days and compounds over 6-12 months. Our clients average 142% organic traffic growth in the first six months. The honest answer depends on your starting point and competition which is exactly what we map in your free strategy session.",
  },
  {
    question: "Do I need SEO, PPC, and paid social running together?",
    answer:
      "You don't always need it from day one but the businesses that grow fastest run channels that share data. SEO tells you what your buyers search; PPC tests what converts fastest; paid social builds the audience that makes both cheaper over time.",
  },
  {
    question: "Can AI replace a digital marketing agency?",
    answer:
      "AI can generate content and surface anomalies faster than any human. What it cannot do is build the strategy, understand your market, make judgment calls when the data contradicts the brief, or take accountability for results.",
  },
  {
    question: "Which industries do you specialise in?",
    answer:
      "We specialise in Real Estate, E-commerce, and SaaS. Also, we do selectively work with businesses outside these sectors when the fit is right.",
  },
  {
    question: "What happens in the first 30 days of working with 360?",
    answer:
      "At 360 Web Solutions, week one is a full audit: SEO health, paid account structure, content gaps, technical issues, and competitive landscape. Week two is strategy: a bespoke channel plan, budget allocation, and 90-day targets. By week four your campaigns are live and your real-time dashboard is already tracking every metric that matters to your business.",
  },
] as const;

export function createFaqPageNode() {
  return {
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
