import type { CSSProperties } from "react";
import {
  siFigma,
  siGithub,
  siGit,
  siMaze,
  siMiro,
  siNextdotjs,
  siPostgresql,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

interface ToolIcon {
  path: string;
  hex: string;
}

const tools: { name: string; icon: ToolIcon }[] = [
  { name: "Figma", icon: siFigma },
  { name: "Maze", icon: siMaze },
  { name: "Miro", icon: siMiro },
  { name: "Next.js", icon: siNextdotjs },
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Supabase", icon: siSupabase },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "Vercel", icon: siVercel },
];

const methods = [
  {
    group: "Research & Strategy",
    items: [
      "User Interviews",
      "Usability Testing",
      "Information Architecture",
      "Heuristic Evaluation",
      "SUS Benchmarking",
    ],
  },
  {
    group: "Design Systems",
    items: [
      "Design Tokens",
      "Component Specs",
      "Auto-layout",
      "Micro-interactions",
      "Design QA",
    ],
  },
  {
    group: "Information Systems",
    items: [
      "Enterprise Architecture",
      "Business Process Analysis",
      "Agile / Scrum",
      "Product Analytics",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border/70 pt-16 md:pt-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Skills &amp; tools
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The tools and methods I use to research, design, and ship — from user
          research to production code.
        </p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-4 lg:grid-cols-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            style={{ "--brand": tool.icon.hex } as CSSProperties}
            className="group flex flex-col items-center justify-center gap-3 bg-background px-4 py-7 transition-colors duration-200 hover:bg-accent/40"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7 text-muted-foreground transition-colors duration-200 group-hover:text-[var(--brand)]"
            >
              <path d={tool.icon.path} fill="currentColor" />
            </svg>
            <span className="text-center text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      {/* Methods */}
      <div className="mt-14 grid grid-cols-1 gap-10 border-t border-border/70 pt-12 sm:grid-cols-3">
        {methods.map((method) => (
          <div key={method.group}>
            <h3 className="font-heading text-base font-bold text-foreground">
              {method.group}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {method.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
