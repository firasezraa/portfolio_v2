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
            className="group relative p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.07] to-card/60 backdrop-blur-sm space-y-2 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/[0.05]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                Key Metric 0{idx + 1}
              </span>
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight bg-gradient-to-r from-white via-zinc-200 to-emerald-200 bg-clip-text text-transparent">
              {metric.value}
            </div>
            <div className="text-xs font-bold text-foreground">
              {metric.label}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
