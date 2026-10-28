import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CaseStudySection } from "@/types";

interface DesignExecutionGalleryProps {
  approach: string;
  sections: CaseStudySection[];
}

export function DesignExecutionGallery({
  approach,
  sections,
}: DesignExecutionGalleryProps) {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Iterative solutions &amp; design decisions
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {approach}
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <div
            key={section.title}
            className="space-y-6 border-t border-border/70 pt-8"
          >
            <div className="space-y-3">
              {section.badge && (
                <Badge variant="outline" className="text-xs font-medium">
                  {section.badge}
                </Badge>
              )}
              <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {section.title}
              </h3>
            </div>

            <div className="space-y-3">
              {section.content.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {section.keyPoints && section.keyPoints.length > 0 && (
              <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                {section.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-background p-3 text-xs font-medium text-foreground/90"
                  >
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-normal">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.image && (
              <figure className="space-y-2.5 pt-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/70 bg-muted/40">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground">
                  {section.image.caption}
                </figcaption>
              </figure>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
