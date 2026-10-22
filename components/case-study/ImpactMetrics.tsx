import { ImpactMetric } from "@/types";
import { TrendingUp } from "lucide-react";

interface ImpactMetricsProps {
  metrics: ImpactMetric[];
}

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <section className="space-y-4 py-8 border-y border-border/40">
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
        <TrendingUp className="size-4" />
        <span>Measurable Impact & Validation</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-1.5"
          >
            <div className="text-3xl font-extrabold text-foreground tracking-tight">
              {metric.value}
            </div>
            <div className="text-xs font-semibold text-foreground/90">
              {metric.label}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
