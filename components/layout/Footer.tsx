import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "Email", href: "mailto:firasezraep@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/firasezra" },
  { label: "GitHub", href: "https://github.com/firasezraa" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Firas Ezra
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              UI/UX &amp; Product Designer blending human-centered research with
              technical engineering feasibility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Firas Ezra. All rights reserved.</p>
          <p>Designed &amp; built with Next.js, Tailwind CSS, &amp; Supabase.</p>
        </div>
      </div>
    </footer>
  );
}
