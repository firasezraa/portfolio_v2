const experiences = [
  {
    company: "Kadence International",
    role: "Lead UI/UX Designer Intern",
    period: "Feb 2024 – Jul 2024",
    location: "Jakarta, Indonesia",
    description:
      "Led the UX redesign of the internal market research operations and reporting portal for a global market research agency.",
    achievements: [
      "Cut cross-market client report compilation time by 38% with a consolidated 3-pillar information architecture.",
      "Raised System Usability Scale from 58 (Grade F) to 84.5 (Grade A) across 24 analyst workflows.",
      "Authored atomic design-token guidelines in Figma, accelerating front-end handoff by 50%.",
    ],
    tags: ["Figma Tokens", "Enterprise B2B", "Information Architecture", "Usability Testing"],
  },
  {
    company: "SAMPERIN Logistics",
    role: "Product & UI/UX Designer",
    period: "Aug 2023 – Dec 2023",
    location: "Jakarta, Indonesia",
    description:
      "Designed an on-demand peer-to-peer campus errand delivery ecosystem serving university student communities.",
    achievements: [
      "Reached an 89.2% task-completion rate across order placement and courier acceptance journeys.",
      "Lowered time-to-order from 140s to 42s with a 3-step bottom-sheet checkout flow.",
      "Devised a landmark geolocation selector to resolve campus delivery navigation ambiguities.",
    ],
    tags: ["Mobile UX", "User Journeys", "Rapid Prototyping", "Field Research"],
  },
  {
    company: "Lord Goods & Awlelang",
    role: "Founder & Creative Lead",
    period: "Nov 2020 – Dec 2023",
    location: "Jakarta, Indonesia",
    description:
      "Founded and operated digital retail and auction ventures, owning storefront UX and brand identity end to end.",
    achievements: [
      "Oversaw customer journey touchpoints, e-commerce storefront UI, and support channels.",
      "Grew the organic customer base and iterated catalogs from direct buyer feedback.",
    ],
    tags: ["Product Strategy", "E-Commerce UX", "Customer Discovery", "Brand Systems"],
  },
];

const education = [
  {
    school: "Bina Nusantara (Binus) University",
    degree: "Master of Information Systems Management (M.MSI)",
    period: "2021 – Present",
  },
  {
    school: "SMA Negeri 90 Jakarta",
    degree: "Natural Sciences (IPA)",
    period: "2018 – 2021",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/70 pt-16 md:pt-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Experience
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A track record spanning enterprise redesigns, consumer mobile UX, and
          ongoing academic study in Information Systems.
        </p>
      </div>

      {/* Experience list */}
      <div className="divide-y divide-border/70 border-t border-border/70">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {exp.period} · {exp.location}
              </p>
            </div>

            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/70 bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border/70 pt-12 sm:grid-cols-2">
        {education.map((edu) => (
          <div key={edu.school} className="space-y-1.5">
            <p className="text-xs font-medium text-primary">{edu.period}</p>
            <h3 className="font-heading text-base font-bold text-foreground">
              {edu.school}
            </h3>
            <p className="text-sm text-muted-foreground">{edu.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
