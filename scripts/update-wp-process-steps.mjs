import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mainPath = path.join(root, "public", "js", "main.js");

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    subtitle: "",
    text: "Understanding a business is important before starting anything. We understand your business thoroughly first. In this discovery phase, we map your commercial goals and your audience. We make a list of your technical requirements, interactions, and competitive landscape. This deliverable list is a signed document. Both parties agree on that list before we start any process. This document protects both parties from scope creep and misaligned expectations.",
    image: "/assets/images/webdev-process-discovery.webp",
    alt: "Discovery workshop mapping WordPress project goals, audience, and technical requirements",
    points: [],
  },
  {
    num: "02",
    title: "UX & Wireframing",
    subtitle: "",
    text: "We start our process with a wireframe. It is a low-fidelity key page template. This wireframe will provide information architecture. Content hierarchy and user journey are mapped in this blueprint. It is made independently of colour, typography and visual design. We get this blueprint approved by you before starting the design phase. This step saves time and cost because changes in the wireframe only take minutes, but changes in the live build take days.",
    image: "/assets/images/webdev-process-ux-mapping.webp",
    alt: "UX wireframing and information architecture planning for a WordPress website",
    points: [],
  },
  {
    num: "03",
    title: "Design in Figma",
    subtitle: "",
    text: "All our design work is done in Figma. We start by creating a complete design system. This includes typography scales, a colour system, spacing tokens, and a component library. Only then do we design individual pages. This approach ensures consistency across the entire site. It gives your team a clear visual language that can extend beyond the website into other brand materials. Every design is delivered for both desktop and mobile breakpoints. Two rounds of revisions are included as standard.",
    image: "/assets/images/webdev-process-design-direction.webp",
    alt: "Figma design system and page designs for desktop and mobile WordPress breakpoints",
    points: [],
  },
  {
    num: "04",
    title: "Development",
    subtitle: "",
    text: "This process is divided into stages and is updated on a daily basis. It is accessible to your team for review throughout the build. We make custom PHP, CSS and JavaScript with version control via Git from day one. You will get a Git repository at the end of the project completion. Your code is always in your hands. This staging environment means you can see your website taking shape in real time. We also take into account your feedback and fix it accordingly.",
    image: "/assets/images/webdev-process-development-build.webp",
    alt: "Custom WordPress development with Git version control and staging environment access",
    points: [],
  },
  {
    num: "05",
    title: "QA & Testing",
    subtitle: "",
    text: "We do QA testing before any project goes live. This covers cross-browser and cross-device testing. Every page is WCAG 2.2 AA accessibility verified. Security checks are also performed. Every form of integration and interactive element is tested. Any issues that are found are resolved before launch. We never leave problems to be discovered by your customers.",
    image: "/assets/images/webdev-process-qa-testing.webp",
    alt: "Cross-browser, accessibility, and security QA testing before WordPress launch",
    points: [],
  },
  {
    num: "06",
    title: "Launch",
    subtitle: "",
    text: "Every launch is carefully planned. The go-live process manages DNS cutover. We set up the CDN and configure SSL certificates. A careful redirection is mapped so that your old URL is structured into the new one, and you do not lose the existing rankings. We also monitor uptime activation before the old site goes down.",
    image: "/assets/images/webdev-process-launch-support.webp",
    alt: "Planned WordPress launch with DNS, CDN, SSL, and redirect mapping",
    points: [],
  },
  {
    num: "07",
    title: "Training & Handover",
    subtitle: "",
    text: "Training and handover are the most important steps in our process. A website that your team cannot manage will cost you ongoing agency fees that you shouldn't need to pay for. We provide you with a complete document stating every content management task that your team needs to perform. Video walkthroughs are also provided. All sensitive information, including your credentials, API keys and hosting access, is provided through a password manager. After handover, you'll know exactly what to do with your website.",
    image: "/assets/images/ai-section-meeting-bg.webp",
    alt: "WordPress CMS training, documentation, and secure credential handover",
    points: [],
  },
  {
    num: "08",
    title: "Ongoing Support",
    subtitle: "",
    text: "We provide ongoing support for every project we do. It includes 30-day post-launch support for bug fixes and minor amendments with no additional cost. After this, we provide monthly care plans for maintenance and security monitoring. A retainer arrangement with a prioritised development hour plan is also provided, in which retainer clients can directly access the senior developer who built their website.",
    image: "/assets/images/webdev-service-maintenance.webp",
    alt: "Ongoing WordPress maintenance, security monitoring, and retainer support",
    points: [],
  },
];

let source = fs.readFileSync(mainPath, "utf8");
const key = "WORDPRESS_PROCESS_STEPS=";
const start = source.indexOf(key);
if (start === -1) throw new Error("WORDPRESS_PROCESS_STEPS not found");

let i = start + key.length;
let depth = 0;
let end = i;
for (; end < source.length; end++) {
  if (source[end] === "[") depth++;
  else if (source[end] === "]") {
    depth--;
    if (depth === 0) break;
  }
}

const replacement = key + JSON.stringify(steps);
source = source.slice(0, start) + replacement + source.slice(end + 1);
fs.writeFileSync(mainPath, source);
console.log(`Updated WORDPRESS_PROCESS_STEPS (${steps.length} steps)`);
