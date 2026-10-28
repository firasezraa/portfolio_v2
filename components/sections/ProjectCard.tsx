import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CaseStudy } from "@/types";

interface ProjectCardProps {
  project: CaseStudy;
  reverse?: boolean;
  priority?: boolean;
}

export function ProjectCard({ project, reverse = false, priority = false }: ProjectCardProps) {
  const metrics = project.metrics.slice(0, 2);
  // The card shows the descriptive name; the company already sits in the meta line.
  const displayTitle = (project.title.split(" — ").pop() ?? project.title).trim();

  return (
    <article
      className={cn(
        "group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
      )}
    >
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "relative block overflow-hidden rounded-2xl border border-border/80 bg-muted focus:outline-none",
          "lg:col-span-7",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={project.heroImage}
          alt={`${project.title} — case study cover`}
          width={1200}
          height={800}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
          className="aspect-[3/2] h-auto w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>

      {/* Content */}
      <div className={cn("lg:col-span-5", reverse && "lg:order-1")}>
        <div className="text-xs font-medium text-muted-foreground">
          {project.clientOrContext}
        </div>
        <div className="mt-1.5 text-xs font-semibold text-muted-foreground">
          {project.timeline}
        </div>

        <h3 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-foreground [text-wrap:balance] sm:text-3xl">
          <Link
            href={`/projects/${project.slug}`}
            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {displayTitle}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.tagline}
        </p>

        {/* Key metrics */}
        <div className="mt-6 grid grid-cols-2 gap-6 border-t border-border/70 pt-5">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-heading text-2xl font-bold tracking-tight text-foreground">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-border/70 bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Read case study
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
