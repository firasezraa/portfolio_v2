import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { ImpactMetrics } from "@/components/case-study/ImpactMetrics";
import { ProblemSolutionBlock } from "@/components/case-study/ProblemSolutionBlock";
import { DesignExecutionGallery } from "@/components/case-study/DesignExecutionGallery";
import { ImpactAndLearnings } from "@/components/case-study/ImpactAndLearnings";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found — Firas Ezra",
    };
  }

  return {
    title: `${project.title} — Firas Ezra UX Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Firas Ezra`,
      description: project.tagline,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const nextProject = allProjects.find((p) => p.slug !== project.slug);

  return (
    <article className="py-6 sm:py-10 space-y-16 max-w-4xl mx-auto">
      {/* 1. Header & Project Metadata */}
      <CaseStudyHeader project={project} />

      {/* 2. Highlight Metrics */}
      <ImpactMetrics metrics={project.metrics} />

      {/* 3. Problem Statement & Research Methodology */}
      <ProblemSolutionBlock
        problemStatement={project.problemStatement}
        researchAndDiscovery={project.researchAndDiscovery}
      />

      {/* 4. Design Solutions, Decisions & Visual Gallery */}
      <DesignExecutionGallery
        approach={project.designExecution.approach}
        sections={project.designExecution.sections}
      />

      {/* 5. Business Outcome, Retrospective & Navigation */}
      <ImpactAndLearnings
        impact={project.impactAndLearnings}
        nextProjectSlug={nextProject?.slug}
        nextProjectTitle={nextProject?.title.split("—")[0].trim()}
      />
    </article>
  );
}
