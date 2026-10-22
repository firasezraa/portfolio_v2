import { CaseStudy } from "@/types";

export const kadencePortalCaseStudy: CaseStudy = {
  slug: "kadence-internal-portal",
  title: "Kadence International — Research Operations & Client Portal",
  tagline: "Redesigning complex market research workflows into an intuitive B2B analytics portal.",
  category: "B2B Web Platform",
  heroImage: "/images/projects/kadence-hero.webp",
  role: "Lead UI/UX Designer Intern",
  timeline: "Feb 2024 – Jul 2024 (6 Months)",
  clientOrContext: "Kadence International (Global Market Research Agency)",
  tools: ["Figma", "Design Tokens", "Information Architecture", "Usability Testing", "Next.js Prototyping"],
  summary:
    "During my 6-month internship at Kadence International, I spearheaded the end-to-end UX redesign of their internal market research operations and client reporting portal. The project tackled fragmented data tables, convoluted reporting workflows, and inconsistent design components, ultimately boosting research analyst efficiency and client presentation turnaround.",
  figmaUrl: "https://www.figma.com",
  metrics: [
    {
      label: "Workflow Efficiency",
      value: "+38%",
      description: "Reduction in average time needed by market analysts to compile cross-market client reports.",
    },
    {
      label: "System Usability Score",
      value: "84.5 / 100",
      description: "Jumped from previous baseline of 58 (Grade F) to Grade A usability after design overhaul.",
    },
    {
      label: "Data Error Reduction",
      value: "-45%",
      description: "Decreased manual filtering errors through unified data table facets and preset views.",
    },
  ],
  problemStatement: {
    context:
      "Kadence analysts process high volumes of qualitative and quantitative survey data across Asia-Pacific markets. The legacy system suffered from cognitive overload: researchers had to navigate 14 detached tabs, struggle with unresponsive data tables, and export raw spreadsheets manually to generate executive presentation decks for enterprise clients.",
    painPoints: [
      "Fragmented Information Architecture: Essential report filters were scattered across multiple disjointed sub-menus.",
      "High Visual Clutter: High-density data tables lacked visual hierarchy, column prioritization, and sticky headers.",
      "Inconsistent Component Library: Developers lacked a centralized tokenized design system, leading to arbitrary styling and inconsistent button states.",
      "Lengthy Onboarding Curve: New junior researchers required over 3 weeks of training just to understand report extraction flows.",
    ],
  },
  researchAndDiscovery: {
    methodology:
      "Conducted 8 contextual inquiry sessions with senior research analysts and project directors, paired with heuristic evaluations of 24 distinct screen workflows.",
    keyFindings: [
      "80% of analyst tasks were concentrated around 4 core functions: cohort filtering, trend chart exports, cross-tabulation tables, and client share links.",
      "Analysts frequently had 10+ browser tabs open because the legacy portal lacked persistent draft comparisons.",
      "Clients requested interactive web presentations rather than static 50-page PDF downloads.",
    ],
  },
  designExecution: {
    approach:
      "Engineered an atomic design system in Figma tailored for high-density enterprise displays, featuring flexible data-grid layouts, contextual action rails, and customizable chart widgets.",
    sections: [
      {
        title: "1. Information Architecture Overhaul & Breadcrumb Trail",
        badge: "Information Architecture",
        content: [
          "Restructured the 14-tab labyrinth into 3 clear domains: Projects, Analytics Studio, and Client Deliverables.",
          "Introduced a persistent contextual sidebar with active project state and quick switcher, reducing context-switching latency.",
        ],
        keyPoints: [
          "Zero-dead-end navigation model",
          "Contextual breadcrumbs with state preservation",
          "Global keyboard search for fast report indexing",
        ],
        image: {
          src: "/images/projects/kadence-ia.webp",
          alt: "Kadence Information Architecture and wireframe diagram",
          caption: "Simplified navigation hierarchy mapping analysts directly to core reporting milestones.",
        },
      },
      {
        title: "2. High-Density Data Grid with Smart Faceted Filtering",
        badge: "UI Engineering",
        content: [
          "Designed customizable data tables supporting column freeze, batch actions, and saved filter presets.",
          "Implemented progressive disclosure: primary survey metrics appear at glance, while deep crosstabs slide open in an accessible slide-over drawer.",
        ],
        keyPoints: [
          "Sticky headers with horizontal scroll indicators",
          "One-click filter presets for recurring monthly tracking studies",
          "Accessible WCAG AA contrast for dark-mode data inspection",
        ],
        image: {
          src: "/images/projects/kadence-table.webp",
          alt: "Kadence data grid and table redesign mockup",
          caption: "Modular data table with active filter chips, column visibility toggles, and instant data export.",
        },
      },
      {
        title: "3. Interactive Client Deliverables View",
        badge: "Client Experience",
        content: [
          "Empowered clients to explore survey insights dynamically with toggleable demographic filters, eliminating the wait time for analyst re-exports.",
        ],
        keyPoints: [
          "Real-time chart rendering with responsive SVG visualizations",
          "Role-based permission gating for executive vs internal team members",
        ],
        image: {
          src: "/images/projects/kadence-analytics.webp",
          alt: "Client analytics dashboard preview",
          caption: "Live interactive report dashboard providing executive summaries and drill-down metrics.",
        },
      },
    ],
  },
  impactAndLearnings: {
    summary:
      "The redesigned portal transformed the internal operational velocity of the Jakarta research team and was adopted as the reference benchmark for Kadence's regional offices.",
    learnings: [
      "Designing for enterprise domain experts requires balancing simplicity with data density; never hide power features behind artificial minimalism.",
      "Bridging design with front-end feasibility early (using tokenized component specifications) accelerated engineering handoff by 50%.",
      "Qualitative shadowing yields deeper insights into workflow bottlenecks than survey questionnaires alone.",
    ],
  },
};
