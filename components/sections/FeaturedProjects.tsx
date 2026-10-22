"use client";

import { useState } from "react";
import { getAllProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const allProjects = getAllProjects();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "B2B Web Platform", "Mobile Application Design"];

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 border-t border-border/40 space-y-10">
      {/* Section Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-3">
          <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
            <Layers className="size-3 text-primary" />
            Featured Work
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Curated Case Studies
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Comprehensive deep-dives demonstrating human-centered problem solving, enterprise data architecture, and measurable user impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-border/60 bg-muted/20 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200",
                activeFilter === cat
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              )}
            >
              {cat === "All" ? "All Projects (2)" : cat === "B2B Web Platform" ? "B2B Platform (1)" : "Mobile UX (1)"}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
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
