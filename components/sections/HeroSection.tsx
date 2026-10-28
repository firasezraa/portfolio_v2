import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrambleText } from "@/components/ui/scramble-text";

const proofMetrics = [
  { value: "+38%", label: "workflow efficiency", context: "Kadence portal redesign" },
  { value: "84.5", label: "SUS score · Grade A", context: "from a 58 baseline" },
  { value: "89.2%", label: "task completion", context: "SAMPERIN mobile app" },
];

const reveal = (delay: number) => ({
  animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
  animationDelay: `${delay}s`,
});

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 gap-12 pt-4 md:pt-8 lg:grid-cols-12 lg:gap-8">
      {/* Copy */}
      <div className="flex flex-col justify-center lg:col-span-7">
        <p
          className="text-sm font-medium text-muted-foreground"
          style={reveal(0.02)}
        >
          Firas Ezra — UI/UX &amp; Product Designer, Jakarta
        </p>

        <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <ScrambleText text="Design that’s" delay={150} />{" "}
          <ScrambleText text="measured." delay={420} className="text-primary" />
        </h1>

        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={reveal(0.14)}
        >
          I turn complex operational workflows into intuitive digital products —
          then prove the impact. Formerly a UI/UX Designer at{" "}
          <span className="font-semibold text-foreground">Kadence International</span>,
          now completing a Master&rsquo;s in Information Systems at{" "}
          <span className="font-semibold text-foreground">Binus University</span>.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-3"
          style={reveal(0.2)}
        >
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

      {/* Portrait */}
      <div
        className="lg:col-span-5"
        style={reveal(0.16)}
      >
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/80 bg-muted">
            <Image
              src="/images/firas-profile.png"
              alt="Portrait of Firas Ezra"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover object-top grayscale mix-blend-multiply"
            />
          </div>
          <div className="mt-3 flex items-center justify-between px-1 text-xs font-medium text-muted-foreground">
            <span>South Jakarta, Indonesia</span>
            <span className="text-foreground">GMT+7</span>
          </div>
        </div>
      </div>

      {/* Proof metrics */}
      <div
        className="col-span-1 grid grid-cols-1 gap-8 border-t border-border/70 pt-8 sm:grid-cols-3 lg:col-span-12"
        style={reveal(0.26)}
      >
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
