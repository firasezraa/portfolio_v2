import { CaseStudy } from "@/types";

export const samperinAppCaseStudy: CaseStudy = {
  slug: "samperin-mobile-app",
  title: "SAMPERIN — On-Demand Campus Delivery & Logistic Ecosystem",
  tagline: "Empowering college students with friction-free peer-to-peer errand running and doorstep deliveries.",
  category: "Mobile Application Design",
  heroImage: "/images/projects/samperin-hero.webp",
  role: "Lead Product & UI/UX Designer",
  timeline: "Aug 2023 – Dec 2023 (5 Months)",
  clientOrContext: "Academic Capstone Project & Binus University Pilot",
  tools: ["Figma", "Design Systems", "Prototyping", "User Interviews", "Usability Testing (Maze)"],
  summary:
    "SAMPERIN is an on-demand peer delivery and errand-runner mobile application specifically engineered for university campus environments. Combining real-time GPS tracking with a transparent micro-task escrow model, I designed the mobile app from zero to an interactive high-fidelity prototype that achieved an 89% task completion rate in usability trials.",
  figmaUrl: "https://www.figma.com",
  metrics: [
    {
      label: "Task Completion Rate",
      value: "89.2%",
      description: "First-time user test completion across order placement and courier acceptance journeys.",
    },
    {
      label: "Time-to-Order",
      value: "42 sec",
      description: "Average time required to request a campus errand runner, down from 140s in initial wireframe tests.",
    },
    {
      label: "Courier Satisfaction",
      value: "4.8 / 5.0",
      description: "Feedback score from student couriers regarding route clarity and tip transparency.",
    },
  ],
  problemStatement: {
    context:
      "University students frequently face time crunches between back-to-back lectures, requiring urgent deliveries of printed study materials, cafeteria meals, and forgotten equipment. Mainstream commercial courier apps are prohibitively expensive for sub-kilometer campus distances and disallow student drivers inside pedestrian campus corridors.",
    painPoints: [
      "Minimum Fare Thresholds: Commercial logistics charge high base rates unsuited for Rp 10.000–20.000 student tasks.",
      "Vague Drop-off Points: Standard delivery maps fail to navigate internal university faculties, lecture rooms, and specific floor numbers.",
      "Trust & Safety Friction: Requesters feared unreliable hand-offs with strangers on open social media bulletin boards.",
      "Complicated Order Steps: Competitor forms required 7+ screens to simply ask a peer to pick up stationery.",
    ],
  },
  researchAndDiscovery: {
    methodology:
      "Surveyed 120 campus students and conducted 10 in-depth 1-on-1 discovery interviews to map student behavioral triggers and willingness to pay.",
    keyFindings: [
      "68% of students expressed willingness to run small errands for peers on their walk to their own lecture buildings if compensated.",
      "Precise faculty building tagging and landmark photos were prioritized above street names.",
      "A quick 3-tap order flow was decisive for students ordering during short 10-minute lecture breaks.",
    ],
  },
  designExecution: {
    approach:
      "Crafted an accessible, thumb-zone optimized iOS and Android interface with bold typography, distinct color-coded task states, and a streamlined 3-step checkout flow.",
    sections: [
      {
        title: "1. Campus-Specific Pinpointing & Landmark Selector",
        badge: "Location UX",
        content: [
          "Replaced generic latitude/longitude map pins with pre-curated campus landmarks (e.g. 'Lab 402 - Binus Anggrek', 'Kantin Bawah Meja 12').",
          "Enabled photo attachments of specific drop-off locations so student couriers never waste time wandering campus hallways.",
        ],
        keyPoints: [
          "Pre-indexed building directory with floor filters",
          "One-tap favorite campus hubs (Library, Canteen, Student Lounge)",
          "Real-time indoor proximity distance estimates",
        ],
        image: {
          src: "/images/projects/samperin-maps.webp",
          alt: "SAMPERIN campus landmark selection screen",
          caption: "Precision campus landmark selector eliminating delivery ambiguities in multi-story university buildings.",
        },
      },
      {
        title: "2. The 3-Step Instant Errand Request Flow",
        badge: "Flow Optimization",
        content: [
          "Streamlined the checkout journey into 3 linear steps: What do you need? Where should it go? Offer your tip.",
          "Integrated dynamic fee suggestions based on distance between lecture buildings and estimated walking duration.",
        ],
        keyPoints: [
          "Bottom-sheet progressive disclosure minimizing keyboard pops",
          "Transparent pricing breakdown with zero hidden fees",
          "Instant order cancellation with zero penalty before courier acceptance",
        ],
        image: {
          src: "/images/projects/samperin-order.webp",
          alt: "SAMPERIN order checkout flow",
          caption: "Frictionless 3-step ordering modal designed for quick execution during short lecture breaks.",
        },
      },
      {
        title: "3. Dual-Mode Courier Dashboard with Safe Verification",
        badge: "Driver Experience",
        content: [
          "Engineered a seamless toggle between 'Student Requester' and 'Student Courier' modes within a single unified profile.",
          "Introduced a 4-digit PIN hand-off verification to guarantee that orders are only completed when physical transfer occurs.",
        ],
        keyPoints: [
          "Instant earnings overview with withdrawal wallet",
          "Route preview showing building elevator availability",
          "PIN verification code safeguarding student couriers and buyers",
        ],
        image: {
          src: "/images/projects/samperin-courier.webp",
          alt: "SAMPERIN courier tracking and verification interface",
          caption: "Courier order radar with route preview and secure 4-digit handover verification.",
        },
      },
    ],
  },
  impactAndLearnings: {
    summary:
      "SAMPERIN earned an 'A' grade for graduation thesis defense and validated that hyper-local contextual design solves problems generic national logistics platforms cannot address.",
    learnings: [
      "Physical context dictates digital UX: Designing for walking students moving between lecture halls demands larger tap targets and high-contrast sunlight visibility.",
      "Two-sided marketplaces succeed or fail on courier adoption; streamlining the driver acceptance screen was twice as impactful as tweaking buyer animations.",
      "Continuous micro-usability testing with actual student peers identified blind spots that internal assumptions had overlooked.",
    ],
  },
};
