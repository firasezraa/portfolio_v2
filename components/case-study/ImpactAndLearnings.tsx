import Link from "next/link";
import { Award, ArrowRight, Mail } from "lucide-react";
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
    <section className="space-y-10 pt-12 border-t border-border/40">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          <Award className="size-4" />
          <span>Reflections & Key Takeaways</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Business Outcome & Retrospective
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          {impact.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {impact.learnings.map((learning, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-border/60 bg-muted/20 space-y-2.5"
          >
            <span className="text-xs font-bold text-primary">0{idx + 1}</span>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
              {learning}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation & Contact CTA */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40">
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "gap-2 w-full sm:w-auto"
          )}
        >
          <Mail className="size-4" />
          Discuss this Project with Firas
        </Link>

        {nextProjectSlug && (
          <Link
            href={`/projects/${nextProjectSlug}`}
            className={cn(
              buttonVariants({ size: "default" }),
              "gap-2 w-full sm:w-auto font-medium"
            )}
          >
            <span>Next Project: {nextProjectTitle || "View Next"}</span>
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
