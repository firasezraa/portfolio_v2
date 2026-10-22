import { getAllProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

export function FeaturedProjects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-16 border-t border-border/40 space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
          <Layers className="size-3 text-primary" />
          Featured Work
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Curated Case Studies
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl">
          Comprehensive deep-dives demonstrating human-centered problem solving, enterprise data architecture, and measurable user impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
