import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImpactAndLearningsProps {
  impact: {
    summary: string;
    learnings: string[];
  };
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export function ImpactAndLearnings({
  impact,
  nextProjectSlug,
  nextProjectTitle,
}: ImpactAndLearningsProps) {
  return (
    <section className="space-y-10 border-t border-border/70 pt-12">
      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Business outcome &amp; retrospective
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {impact.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {impact.learnings.map((learning) => (
          <div key={learning} className="border-t border-border/70 pt-4">
            <p className="text-sm leading-relaxed text-foreground/90">
              {learning}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation & contact CTA */}
      <div className="flex flex-col items-stretch justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center">
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "gap-2 w-full sm:w-auto"
          )}
        >
          <Mail className="size-4" />
          Discuss this project
        </Link>

        {nextProjectSlug && (
          <Link
            href={`/projects/${nextProjectSlug}`}
            className={cn(
              buttonVariants({ size: "default" }),
              "gap-2 w-full sm:w-auto font-medium"
            )}
          >
            <span>Next project: {nextProjectTitle || "View next"}</span>
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
