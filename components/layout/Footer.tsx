import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/50 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Firas Ezra
            </span>
            <p className="text-xs text-muted-foreground max-w-sm">
              UI/UX & Product Designer blending human-centered research with technical engineering feasibility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a
              href="mailto:firasezraep@gmail.com"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Email
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              GitHub
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Dribbble
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <p>© 2026 Firas Ezra. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with Next.js 15, Tailwind CSS, & Supabase.
          </p>
        </div>
      </div>
    </footer>
  );
}
