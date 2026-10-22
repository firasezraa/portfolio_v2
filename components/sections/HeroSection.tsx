import Link from "next/link";
import { Download, ArrowRight, Mail, Sparkles, MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { HeroBackgroundPhoto } from "./HeroBackgroundPhoto";

export function HeroSection() {
  return (
    <section className="relative py-10 md:py-20 flex flex-col items-start gap-8 overflow-visible">
      {/* Dynamic Fading Background Photo with Ambient Aura */}
      <HeroBackgroundPhoto />
      {/* Ambient Radial Mesh Glow (Atmosphere & Visual Depth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[420px] bg-gradient-to-b from-emerald-500/[0.08] via-sky-500/[0.04] to-transparent blur-3xl -z-10 rounded-full"
      />

      {/* Top Identity & Status Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 w-full relative z-10">
        <div className="flex items-center gap-3.5">
          {/* Avatar Monogram with Live Ping Indicator */}
          <div className="relative flex size-12 sm:size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/60 shadow-xl shadow-black/40">
            <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              FE
            </span>
            <span className="absolute -bottom-1 -right-1 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-background bg-emerald-500"></span>
            </span>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground tracking-tight">
                Firas Ezra
              </span>
              <Badge
                variant="outline"
                className="hidden sm:inline-flex border-emerald-500/20 bg-emerald-500/10 px-2 py-0 text-[10px] font-medium text-emerald-400"
              >
                Available for Roles
              </Badge>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3 text-muted-foreground/80 shrink-0" />
              <span>South Jakarta, ID &bull; Remote / Hybrid</span>
            </div>
          </div>
        </div>

      </div>

      {/* Main Headline & Value Proposition */}
      <div className="space-y-4 max-w-2xl sm:max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <Sparkles className="size-3 text-primary" />
          <span>Product & UI/UX Designer &bull; Front-End Mindset</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
          Designing intuitive digital products with{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
            engineering precision.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
          I turn complex operational workflows into clean, high-impact digital experiences.
          Currently pursuing a Master of Information Systems Management at <strong className="text-foreground font-semibold">Binus University</strong>,
          formerly UI/UX Designer at <strong className="text-foreground font-semibold">Kadence International</strong>.
        </p>
      </div>

      {/* Primary Conversion CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-1 relative z-10">
        <Link
          href="#projects"
          className={cn(
            buttonVariants({ size: "lg" }),
            "gap-2 font-medium bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-black/20 active:scale-[0.98] transition-all"
          )}
        >
          Explore Case Studies
          <ArrowRight className="size-4" />
        </Link>
        <a
          href="/documents/firas-cv.pdf"
          download="Firas_Ezra_Resume.pdf"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "gap-2 font-medium border-border/80 bg-background/60 backdrop-blur-sm hover:bg-muted active:scale-[0.98] transition-all"
          )}
        >
          <Download className="size-4" />
          Download Resume (PDF)
        </a>
        <Link
          href="#contact"
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/40"
          )}
        >
          <Mail className="size-4" />
          Get in Touch
        </Link>
      </div>

      {/* Credibility Highlights Strip (Bento Micro-Cards) */}
      <div className="w-full pt-8 mt-4 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-3.5 relative z-10">
        <div className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-200 hover:border-foreground/20 hover:bg-card/70">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
            <Briefcase className="size-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">Kadence International</div>
            <div className="text-[11px] text-muted-foreground">Market Research Operations UI/UX</div>
          </div>
        </div>

        <div className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-200 hover:border-foreground/20 hover:bg-card/70">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
            <GraduationCap className="size-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">Binus University</div>
            <div className="text-[11px] text-muted-foreground">M.MSI Information Systems</div>
          </div>
        </div>

        <div className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-200 hover:border-foreground/20 hover:bg-card/70">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-transform duration-200 group-hover:scale-105">
            <Award className="size-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">Proven Usability</div>
            <div className="text-[11px] text-muted-foreground">84.5 SUS Score (Grade A)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
