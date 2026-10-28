import { Lightbulb } from "lucide-react";

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
    <div className="space-y-14">
      {/* Problem statement */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Problem statement &amp; context
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {problemStatement.context}
        </p>

        <ul className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
          {problemStatement.painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Research & discovery */}
      <section className="space-y-6 rounded-2xl border border-border/70 bg-muted/40 p-6 sm:p-8">
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Discovery methodology &amp; insights
        </h3>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {researchAndDiscovery.methodology}
        </p>

        <ul className="space-y-3 pt-2">
          {researchAndDiscovery.keyFindings.map((finding) => (
            <li
              key={finding}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
            >
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
