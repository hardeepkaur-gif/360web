export const DIGITAL_PR_FAQS = [
  {
    question: "What does a digital PR agency do?",
    answer:
      "A digital PR agency gets editorial backlinks from actual publications by crafting news-worthy content that journalists love to publish. This boosts domain authority, organic rankings, and brand credibility all at once. In 2026, it also trains AI tools like ChatGPT and Google AI Overviews to recommend your brand in your category.",
  },
  {
    question:
      "Can digital PR help my brand appear in AI Overviews and AI-powered search results?",
    answer:
      "Yes. Google AI, ChatGPT, and Perplexity pull citations from high authority editorial publications. They surface brands that appear frequently in high-authority UK publications. This makes the AI think of your brand when they consider your category. We build every campaign with this as an explicit outcome alongside traditional link metrics.",
  },
  {
    question: "Do I need to sign a long contract?",
    answer:
      "No, we don't require long-term contracts at any tier. Digital PR gets better over time; longer campaigns have a stronger cumulative domain authority effect. We suggest staying for at least three months to see real progress. We keep earning your business through our results, not just contract obligations.",
  },
  {
    question: "What's the difference between digital PR and traditional PR?",
    answer:
      "Traditional PR focuses on print and broadcast coverage for a good reputation. Digital PR, on the other hand, gets online editorial coverage, generating backlinks, domain authority growth, and organic traffic. It also helps in training AI discovery tools, which is something traditional PR does not do.",
  },
  {
    question: "What links will I actually get? Are they guaranteed?",
    answer:
      "Our objective is to secure links for you through editorials placed in national, consumer, and trade magazines, where we aim for a DR50+. Since ethical agencies cannot give guarantees about links from certain sources, because of the editorial freedom of the journalists, we ensure the achievement of a guaranteed minimum number of links per quarter, according to your package.",
  },
  {
    question: "Can digital PR help my SEO?",
    answer:
      "Yes, Digital PR is impactful for SEO in the UK in 2026. Backlinks from high-authority publications raise your domain authority. Higher domain authority directly improves rankings across every page on your site. Actually, a Semrush study shows that pages with backlinks from DR 70+ sites see their target keyword positions improve by about 28%.",
  },
  {
    question: "How long does it take to see results from digital PR?",
    answer:
      "Initial link placements usually go live in 4 to 6 weeks after the campaign starts. Organic ranking gets better around 6 to 12 weeks later. Domain authority growth takes 3 to 6 months of steady work. For urgent needs, reactive PR can get live placements within 24 to 48 hours. During our strategy audit, we set realistic goals and timelines, so you know what to expect.",
  },
] as const;

export function createDigitalPrFaqPageNode() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DIGITAL_PR_FAQS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
