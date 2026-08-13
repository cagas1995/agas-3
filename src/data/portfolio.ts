/**
 * ============================================================
 *  MDC PORTFOLIO CONTENT — EDIT THIS FILE TO ADD YOUR WORK
 * ============================================================
 *  To add a Loom recording:
 *    { kind: "loom", title: "...", category: "Automation",
 *      url: "https://www.loom.com/share/XXXXXXXX", description: "..." }
 *    (a normal loom share link works — it is converted to an embed)
 *
 *  To add a screenshot:
 *    { kind: "image", title: "...", category: "Funnels",
 *      url: "https://your-image-url.png", description: "..." }
 *
 *  Categories are auto-collected for the filter bar.
 * ============================================================
 */

export type ShowcaseItem = {
  kind: "loom" | "image";
  title: string;
  category: string;
  url: string;
  description?: string;
  client?: string;
};

export const showcase: ShowcaseItem[] = [
  {
    kind: "loom",
    title: "GoHighLevel Agency Setup — Full Walkthrough",
    category: "Agency Setup",
    url: "https://www.loom.com/share/00000000000000000000000000000000",
    description:
      "White-label branding, sub-accounts, domains, DNS and team permissions configured end to end.",
  },
  {
    kind: "loom",
    title: "Missed Call Text Back + Speed-to-Lead Workflow",
    category: "Automation",
    url: "https://www.loom.com/share/00000000000000000000000000000000",
    description: "Trigger-based follow-up with conditional logic and internal notifications.",
  },
  {
    kind: "loom",
    title: "Voice AI Receptionist Booking Live Appointments",
    category: "AI",
    url: "https://www.loom.com/share/00000000000000000000000000000000",
    description: "Conversation AI qualifying leads and booking straight into the calendar 24/7.",
  },
  {
    kind: "image",
    title: "Sales Pipeline & Opportunity Stages",
    category: "CRM",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "Custom pipeline with stage automation, smart lists and lead segmentation.",
  },
  {
    kind: "image",
    title: "High-Converting Appointment Funnel",
    category: "Funnels",
    url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    description: "Mobile-responsive booking funnel with custom CSS/JS components.",
  },
  {
    kind: "image",
    title: "Service Business Website Build",
    category: "Websites",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-page GHL website with live chat, AI assistant and SEO structure.",
  },
];

export type Service = {
  icon: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "Building2",
    title: "Agency & Account Setup",
    blurb: "Your whole GoHighLevel agency configured from zero.",
    points: [
      "Full agency + white-label setup",
      "Sub-accounts & SaaS configuration",
      "Custom domains & DNS",
      "Snapshots, users & permissions",
    ],
  },
  {
    icon: "Workflow",
    title: "Workflows & Automation",
    blurb: "Follow-up that never sleeps and never forgets.",
    points: [
      "Speed-to-lead & missed call text back",
      "Appointment reminders & no-show recovery",
      "Nurture, reactivation & long-term campaigns",
      "Conditional logic and trigger design",
    ],
  },
  {
    icon: "Bot",
    title: "AI Chatbots & Voice AI",
    blurb: "24/7 receptionists that qualify and book.",
    points: [
      "Conversation AI & website assistants",
      "Voice AI receptionist",
      "AI booking & lead qualification",
      "Knowledge base + prompt engineering",
    ],
  },
  {
    icon: "GitBranch",
    title: "CRM, Pipelines & Opportunities",
    blurb: "Every lead visible, tracked and moving.",
    points: [
      "Pipeline architecture & stage automation",
      "Custom fields, tags & smart lists",
      "Lead segmentation & tracking",
      "Sales process automation",
    ],
  },
  {
    icon: "Rocket",
    title: "Funnels & Landing Pages",
    blurb: "Built to convert, not just to look good.",
    points: [
      "Lead gen, booking & sales funnels",
      "Webinar and AI demo funnels",
      "Forms, surveys & calendar integration",
      "Mobile responsive by default",
    ],
  },
  {
    icon: "Code2",
    title: "Vibe Coding & Custom Dev",
    blurb: "Custom HTML, CSS and JS inside GHL.",
    points: [
      "Custom components & GHL styling",
      "Calculators & advanced forms",
      "Funnel enhancements",
      "Custom integrations",
    ],
  },
  {
    icon: "Globe",
    title: "Websites & E-Commerce",
    blurb: "Full sites, stores and checkout flows.",
    points: [
      "Multi-page GHL websites & redesigns",
      "Store, products & checkout pages",
      "Payment integration & order workflows",
      "Upsells, offers & follow-up",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Courses & Memberships",
    blurb: "Sell and deliver knowledge on autopilot.",
    points: [
      "Course products, modules & lessons",
      "Membership areas & student access",
      "Automated enrollment & renewals",
      "Student follow-up campaigns",
    ],
  },
  {
    icon: "Repeat",
    title: "Full Account Migration",
    blurb: "Move an entire system into GoHighLevel.",
    points: [
      "CRM, contacts & pipeline migration",
      "Workflow and automation recreation",
      "Funnels, websites & calendars",
      "Complete account rebuilding",
    ],
  },
  {
    icon: "Plug",
    title: "Integrations",
    blurb: "Everything talking to everything.",
    points: [
      "Zapier, Make & webhooks",
      "API integrations",
      "Google Calendar / Sheets / Stripe",
      "Facebook, Instagram & email platforms",
    ],
  },
  {
    icon: "Phone",
    title: "A2P & Communication",
    blurb: "Deliverability handled properly.",
    points: [
      "A2P 10DLC registration",
      "Phone numbers, SMS & calling",
      "Dedicated sending domains",
      "Email deliverability configuration",
    ],
  },
  {
    icon: "Star",
    title: "Reputation, SEO & Affiliates",
    blurb: "Growth layers on top of the system.",
    points: [
      "Google review automation & routing",
      "On-page & local SEO structure",
      "Affiliate manager & commissions",
      "Prospecting and cold outreach infrastructure",
    ],
  },
];

export const journey = [
  { step: "Visitor", detail: "Traffic lands on a funnel or site built to convert." },
  { step: "Lead", detail: "Forms, chat and AI capture and qualify instantly." },
  { step: "Follow-Up", detail: "Automated SMS + email sequences fire in seconds." },
  { step: "Appointment", detail: "Calendars, reminders and no-show recovery." },
  { step: "Opportunity", detail: "Pipelines track every deal stage automatically." },
  { step: "Sale", detail: "Checkout, payments and fulfilment workflows." },
  { step: "Review", detail: "Reputation campaigns turn customers into proof." },
  { step: "Reactivation", detail: "Database marketing brings them back." },
];

export const industries = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Cleaning Companies",
  "Dental Clinics",
  "Medical & Healthcare",
  "Med Spas",
  "Salons & Beauty",
  "Real Estate",
  "Law Firms",
  "Home Services",
  "Auto Services",
  "Coaches & Consultants",
  "Education & Online Courses",
  "Event Services",
  "Car Rentals",
  "Local Businesses",
  "Marketing Agencies",
  "SaaS Businesses",
];

export const skillStack = [
  "GoHighLevel",
  "CRM",
  "Workflows",
  "Automation",
  "AI Chatbots",
  "Voice AI",
  "Funnels",
  "Landing Pages",
  "Websites",
  "Vibe Coding",
  "A2P Registration",
  "White Labeling",
  "Sub-Accounts",
  "Pipelines",
  "Opportunities",
  "Calendars",
  "Reputation Management",
  "SEO",
  "Prospecting",
  "Affiliate Systems",
  "E-Courses",
  "Account Migration",
  "Integrations",
  "Email Marketing",
  "SMS Marketing",
];

export const stats = [
  { value: "2+", label: "Years hands-on GHL" },
  { value: "20+", label: "Industries supported" },
  { value: "100%", label: "End-to-end builds" },
  { value: "24/7", label: "AI follow-up uptime" },
];
