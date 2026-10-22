import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseStudy } from "@/types";

interface ProjectCardProps {
  project: CaseStudy;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:shadow-xl">
      <Link href={`/projects/${project.slug}`} className="block focus:outline-none">
        {/* Mockup Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/40 border-b border-border/40">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge className="bg-background/85 text-foreground backdrop-blur-md border border-border/60 text-xs font-medium">
              {project.category}
            </Badge>
          </div>

          <div className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-md text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="size-4" />
          </div>
        </div>

        {/* Content Body */}
        <CardContent className="p-6 sm:p-8 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <span>{project.clientOrContext}</span>
              <span>&bull;</span>
              <span>{project.timeline}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border/40 bg-muted/20 p-2.5 space-y-0.5"
              >
                <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground truncate">
                  <TrendingUp className="size-3 text-emerald-500 shrink-0" />
                  <span className="truncate">{metric.label}</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-foreground">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Role & Tech Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/40">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 3).map((tool, tIdx) => (
                <Badge
                  key={tIdx}
                  variant="secondary"
                  className="text-[11px] font-normal px-2 py-0.5"
                >
                  {tool}
                </Badge>
              ))}
              {project.tools.length > 3 && (
                <span className="text-[11px] text-muted-foreground self-center">
                  +{project.tools.length - 3} more
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-1">
              Read Case Study
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
