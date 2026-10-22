export interface ImpactMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudySection {
  title: string;
  badge?: string;
  content: string[];
  keyPoints?: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: "B2B Web Platform" | "Mobile Application Design";
  heroImage: string;
  role: string;
  timeline: string;
  clientOrContext: string;
  tools: string[];
  summary: string;
  liveUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
  metrics: ImpactMetric[];
  problemStatement: {
    context: string;
    painPoints: string[];
  };
  researchAndDiscovery: {
    methodology: string;
    keyFindings: string[];
  };
  designExecution: {
    approach: string;
    sections: CaseStudySection[];
  };
  impactAndLearnings: {
    summary: string;
    learnings: string[];
  };
}
