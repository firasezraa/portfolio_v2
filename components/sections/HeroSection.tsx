import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrambleText } from "@/components/ui/scramble-text";
import { HangingLanyard } from "@/components/sections/HangingLanyard";

const proofMetrics = [
  { value: "+38%", label: "workflow efficiency", context: "Kadence portal redesign" },
  { value: "84.5", label: "SUS score · Grade A", context: "from a 58 baseline" },
  { value: "89.2%", label: "task completion", context: "SAMPERIN mobile app" },
];

export function HeroSection() {
  return (
    <section id="hero" className="grid grid-cols-1 gap-12 pt-4 md:pt-8 lg:grid-cols-12 lg:gap-8">
      {/* Mobile: reserve the space the hanging badge occupies so it never covers the headline */}
      <div className="col-span-full h-[27rem] sm:h-[24rem] lg:hidden" aria-hidden="true" />
      {/* Copy */}
      <div className="flex flex-col justify-center lg:col-span-7">
        <p className="animate-fade-up text-sm font-medium text-muted-foreground" style={{ '--delay': '0.02s' } as React.CSSProperties}>
          Firas Ezra — UI/UX & Product Designer, Jakarta
        </p>

        <h1 className="mt-5 animate-fade-up font-heading text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl" style={{ '--delay': '0.08s' } as React.CSSProperties}>
          <ScrambleText text="Design that’s" delay={150} />{" "}
          <ScrambleText text="measured." delay={420} className="text-primary" />
        </h1>

        <p className="mt-6 animate-fade-up max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ '--delay': '0.14s' } as React.CSSProperties}>
          I turn complex operational workflows into intuitive digital products —
          then prove the impact. Formerly a UI/UX Designer at{" "}
          <span className="font-semibold text-foreground">Kadence International</span>,
          now completing a Master&rsquo;s in Information Systems at{" "}
          <span className="font-semibold text-foreground">Binus University</span>.
        </p>

        <div className="mt-8 animate-fade-up flex flex-wrap items-center gap-3" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <Link
            href="#work"
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            )}
          >
            Explore case studies
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="/documents/firas-cv.pdf"
            download="Firas_Ezra_Resume.pdf"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
          >
            <ArrowDown className="size-4" />
            Download CV
          </a>
        </div>
      </div>

      {/* Spacer where the hanging badge overlay sits (the overlay itself is fixed) */}
      <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
      <HangingLanyard />

      {/* Proof metrics */}
      <div className="col-span-1 grid grid-cols-1 gap-8 border-t border-border/70 pt-8 sm:grid-cols-3 lg:col-span-12 animate-fade-up" style={{ '--delay': '0.26s' } as React.CSSProperties}>
        {proofMetrics.map((metric) => (
          <div key={metric.value} className="space-y-1.5">
            <div className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {metric.value}
            </div>
            <div className="text-sm font-medium text-foreground">
              {metric.label}
            </div>
            <div className="text-sm text-muted-foreground">{metric.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
}