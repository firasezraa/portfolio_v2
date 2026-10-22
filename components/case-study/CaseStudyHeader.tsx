import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Briefcase, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CaseStudy } from "@/types";
import { ViewCounter } from "./ViewCounter";

interface CaseStudyHeaderProps {
  project: CaseStudy;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <div className="space-y-8">
      {/* Back Link */}
      <div>
        <Link
          href="/#projects"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 text-muted-foreground hover:text-foreground -ml-2.5"
          )}
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>
      </div>

      {/* Title & Tagline */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 text-xs">
            {project.category}
          </Badge>
          <span className="text-xs text-muted-foreground">&bull;</span>
          <span className="text-xs text-muted-foreground">{project.timeline}</span>
          <span className="text-xs text-muted-foreground">&bull;</span>
          <ViewCounter slug={project.slug} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {project.tagline}
        </p>
      </div>

      {/* Metadata Specification Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl border border-border/60 bg-muted/20">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <User className="size-3.5" />
            <span>Role</span>
          </div>
          <div className="text-sm font-semibold text-foreground">
            {project.role}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Briefcase className="size-3.5" />
            <span>Context</span>
          </div>
          <div className="text-sm font-semibold text-foreground truncate">
            {project.clientOrContext}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Calendar className="size-3.5" />
            <span>Timeline</span>
          </div>
          <div className="text-sm font-semibold text-foreground">
            {project.timeline}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Wrench className="size-3.5" />
            <span>Core Tools</span>
          </div>
          <div className="text-sm font-semibold text-foreground truncate">
            {project.tools.slice(0, 2).join(", ")}
          </div>
        </div>
      </div>

      {/* Hero Visual Mockup */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-2xl">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
