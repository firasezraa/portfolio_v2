import { ImpactMetric } from "@/types";

interface ImpactMetricsProps {
  metrics: ImpactMetric[];
}

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <section className="space-y-8 border-y border-border/70 py-10">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Measurable impact
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="font-heading text-4xl font-bold tracking-tight text-foreground">
              {metric.value}
            </div>
            <div className="text-sm font-semibold text-foreground">
              {metric.label}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
