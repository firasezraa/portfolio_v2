import Link from "next/link";
import { Download, ArrowRight, Mail, Sparkles, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 flex flex-col items-start gap-8">
      {/* Location & Status Badge */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className="gap-1.5 border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
        >
          <MapPin className="size-3 text-muted-foreground" />
          Jakarta, Indonesia &bull; Remote / Hybrid Ready
        </Badge>
        <Badge
          variant="outline"
          className="gap-1.5 border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
        >
          <Sparkles className="size-3" />
          UI/UX + Front-End Engineering
        </Badge>
      </div>

      {/* Main Headline */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          Designing intuitive digital products with{" "}
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
            engineering precision.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I&apos;m <strong className="text-foreground font-semibold">Firas Ezra</strong>, a Product & UI/UX Designer
          currently completing my Master of Information Systems Management at Binus University. 
          Former UI/UX Designer at <strong className="text-foreground font-semibold">Kadence International</strong>. 
          I turn complex operational workflows into clean, high-impact digital experiences.
        </p>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="#projects"
          className={cn(buttonVariants({ size: "lg" }), "gap-2 font-medium")}
        >
          Explore Case Studies
          <ArrowRight className="size-4" />
        </Link>
        <a
          href="/documents/firas-cv.pdf"
          download="Firas_Ezra_Resume.pdf"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 font-medium")}
        >
          <Download className="size-4" />
          Download Resume (PDF)
        </a>
        <Link
          href="#contact"
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "gap-2 text-muted-foreground hover:text-foreground")}
        >
          <Mail className="size-4" />
          Get in Touch
        </Link>
      </div>

      {/* Credibility Indicator Strip */}
      <div className="w-full pt-8 mt-4 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-muted/20">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Briefcase className="size-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Kadence International</div>
            <div className="text-[11px] text-muted-foreground">Market Research Operations UI/UX</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-muted/20">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <GraduationCap className="size-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Binus University</div>
            <div className="text-[11px] text-muted-foreground">M.MSI Information Systems</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-muted/20">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
            <Sparkles className="size-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Technical Design</div>
            <div className="text-[11px] text-muted-foreground">Figma Tokens & Next.js Prototyping</div>
          </div>
        </div>
      </div>
    </section>
  );
}
