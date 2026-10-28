import { getAllProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const projects = getAllProjects();

  return (
    <section id="work" className="border-t border-border/70 pt-16 md:pt-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Selected work
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Deep-dive case studies — human-centered problem solving, enterprise
          information architecture, and measurable user impact.
        </p>
      </div>

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            reverse={index % 2 === 1}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
