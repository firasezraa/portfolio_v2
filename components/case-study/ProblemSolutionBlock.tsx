import { AlertCircle, Search, Lightbulb } from "lucide-react";

interface ProblemSolutionBlockProps {
  problemStatement: {
    context: string;
    painPoints: string[];
  };
  researchAndDiscovery: {
    methodology: string;
    keyFindings: string[];
  };
}

export function ProblemSolutionBlock({
  problemStatement,
  researchAndDiscovery,
}: ProblemSolutionBlockProps) {
  return (
    <div className="space-y-12">
      {/* 1. Problem Statement */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
            <AlertCircle className="size-4" />
            <span>The Challenge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Problem Statement & Context
          </h2>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed">
          {problemStatement.context}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {problemStatement.painPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border/60 bg-card/60 flex items-start gap-3"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-rose-500/10 text-rose-400 font-bold text-xs mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Research & Discovery */}
      <section className="space-y-6 p-6 sm:p-8 rounded-2xl border border-border/60 bg-muted/20">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
            <Search className="size-4" />
            <span>User Research & Discovery</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Discovery Methodology & Insights
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {researchAndDiscovery.methodology}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <div className="text-xs font-semibold text-foreground uppercase tracking-wider">
            Key Research Findings:
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {researchAndDiscovery.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg border border-border/40 bg-background/50"
              >
                <Lightbulb className="size-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 leading-relaxed">
                  {finding}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
