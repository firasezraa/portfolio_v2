import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Wrench, Calendar, CheckCircle2, Search, Code2, Layers, BookOpen } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Kadence International",
      role: "Lead UI/UX Designer Intern",
      period: "Feb 2024 – Jul 2024 (6 Mos)",
      location: "Jakarta, Indonesia",
      description:
        "Led the comprehensive UX redesign of the internal market research operations and reporting portal for a global market research agency.",
      achievements: [
        "Reduced cross-market client report compilation time by +38% through a consolidated 3-pillar information architecture.",
        "Elevated System Usability Scale (SUS) from 58 (Grade F) to 84.5 (Grade A) across 24 core analyst workflows.",
        "Authored atomic design token guidelines in Figma, accelerating front-end implementation velocity by 50%.",
      ],
      tags: ["Figma Tokens", "Enterprise B2B", "Information Architecture", "Usability Testing", "Next.js"],
    },
    {
      company: "SAMPERIN Logistics",
      role: "Product & UI/UX Designer",
      period: "Aug 2023 – Dec 2023 (5 Mos)",
      location: "Jakarta, Indonesia",
      description:
        "Designed an on-demand peer-to-peer campus errand delivery ecosystem serving university student communities.",
      achievements: [
        "Attained an 89.2% task completion rate across buyer order placement and courier acceptance journeys.",
        "Lowered average time-to-order from 140s to 42s by engineering a 3-step bottom-sheet checkout flow.",
        "Devised landmark geolocation selector to solve campus delivery navigation ambiguities.",
      ],
      tags: ["Mobile UX", "User Journeys", "Rapid Prototyping", "Field Research", "Maze Testing"],
    },
    {
      company: "Lord Goods & Awlelang",
      role: "Founder & Creative Lead",
      period: "Nov 2020 – Dec 2023 (3 Yrs)",
      location: "Jakarta, Indonesia",
      description:
        "Founded and operated digital retail and auction ventures, managing storefront UX and brand identities.",
      achievements: [
        "Supervised customer journey touchpoints, e-commerce storefront UI, and customer support channels.",
        "Grew organic customer base and iterated product catalogs based on direct buyer feedback.",
      ],
      tags: ["Product Strategy", "E-Commerce UX", "Customer Discovery", "Brand Systems"],
    },
  ];

  const education = [
    {
      school: "Bina Nusantara (Binus) University",
      degree: "Master of Information Systems Management (M.MSI)",
      period: "2021 – Present",
      notes: "Advanced coursework in Enterprise Systems Architecture, Agile Software Engineering, and Strategic Product Management.",
    },
    {
      school: "SMA Negeri 90 Jakarta",
      degree: "Natural Sciences (IPA)",
      period: "2018 – 2021",
      notes: "Strong foundation in analytical problem solving and quantitative reasoning.",
    },
  ];

  return (
    <section id="experience" className="py-16 border-t border-border/40 space-y-16">
      {/* Section Header */}
      <div className="space-y-3">
        <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
          <Briefcase className="size-3 text-primary" />
          Career & Credentials
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Work Experience & Education
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl">
          A track record spanning corporate enterprise redesigns, consumer mobile UX, and continuous master&apos;s academic study in Information Systems.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
          <Briefcase className="size-5 text-primary" />
          Professional Experience
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border/60 bg-card/60 backdrop-blur-sm transition-all hover:border-border">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/40 pb-4">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                    <span className="text-sm font-medium text-primary">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" />
                    <span>{exp.period}</span>
                    <span>&bull;</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-1">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-foreground/90">
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-normal">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {exp.tags.map((tag, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="text-[11px] font-normal px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Education & Academic Rigor */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
          <GraduationCap className="size-5 text-primary" />
          Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, eIdx) => (
            <Card key={eIdx} className="border-border/60 bg-card/40">
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-primary">{edu.period}</span>
                </div>
                <h4 className="text-base font-bold text-foreground">{edu.school}</h4>
                <p className="text-xs font-medium text-muted-foreground">{edu.degree}</p>
                <p className="text-xs text-muted-foreground/80 pt-1 leading-relaxed">
                  {edu.notes}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Bento Grid (Replaces arbitrary percentage bars with verified capabilities) */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
            <Wrench className="size-5 text-primary" />
            Design & Engineering Capabilities
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            A balanced synthesis of user research rigor, design system craftsmanship, and technical code literacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: UX Research & Strategy (Span 7) */}
          <div className="md:col-span-7 p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm space-y-4 hover:border-foreground/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <Search className="size-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  UX Research & Product Strategy
                </h4>
                <p className="text-xs text-muted-foreground">
                  Heuristic evaluations, contextual inquiries, and usability benchmarking
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "User Interviews",
                "Usability Testing (Maze)",
                "Information Architecture",
                "Heuristic Evaluation",
                "Customer Journey Mapping",
                "SUS Benchmarking",
              ].map((skill, sIdx) => (
                <Badge
                  key={sIdx}
                  variant="outline"
                  className="text-xs bg-background/60 font-normal border-border/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Card 2: Design Systems & Tokens (Span 5) */}
          <div className="md:col-span-5 p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm space-y-4 hover:border-foreground/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Layers className="size-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  UI Design Systems
                </h4>
                <p className="text-xs text-muted-foreground">
                  Tokenized Figma atomic components
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Figma Auto-layout",
                "Design Tokens",
                "Component Specs",
                "Micro-interactions",
                "Design QA",
              ].map((skill, sIdx) => (
                <Badge
                  key={sIdx}
                  variant="outline"
                  className="text-xs bg-background/60 font-normal border-border/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Card 3: Front-End Engineering (Span 6) */}
          <div className="md:col-span-6 p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm space-y-4 hover:border-foreground/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Code2 className="size-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Front-End Engineering Feasibility
                </h4>
                <p className="text-xs text-muted-foreground">
                  Production code fluency for smooth dev handoff
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Next.js 15 (App Router)",
                "React 19",
                "TypeScript",
                "Tailwind CSS v4",
                "shadcn/ui",
                "Supabase (PostgreSQL)",
                "Git & GitHub",
              ].map((skill, sIdx) => (
                <Badge
                  key={sIdx}
                  variant="outline"
                  className="text-xs bg-background/60 font-normal border-border/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Card 4: Academic & IS Strategy (Span 6) */}
          <div className="md:col-span-6 p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm space-y-4 hover:border-foreground/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <BookOpen className="size-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Information Systems & Management
                </h4>
                <p className="text-xs text-muted-foreground">
                  Master&apos;s level business & technology alignment
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Enterprise Architecture",
                "Business Process Analysis",
                "Agile / Scrum Methodologies",
                "Product Analytics",
                "Decision Support Systems",
              ].map((skill, sIdx) => (
                <Badge
                  key={sIdx}
                  variant="outline"
                  className="text-xs bg-background/60 font-normal border-border/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
