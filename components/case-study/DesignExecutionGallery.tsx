import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Layers } from "lucide-react";
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
      {/* Design Approach Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
          <Layers className="size-4" />
          <span>Design Architecture & Execution</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Iterative Solutions & Design Decisions
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          {approach}
        </p>
      </div>

      {/* Structured Solution Sections */}
      <div className="space-y-16">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6 pt-6 border-t border-border/40">
            <div className="space-y-3">
              {section.badge && (
                <Badge variant="outline" className="text-xs font-normal">
                  {section.badge}
                </Badge>
              )}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {section.title}
              </h3>
            </div>

            <div className="space-y-3">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {section.keyPoints && section.keyPoints.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {section.keyPoints.map((point, kIdx) => (
                  <div
                    key={kIdx}
                    className="flex items-start gap-2 p-3 rounded-lg border border-border/40 bg-card/40 text-xs text-foreground/90 font-medium"
                  >
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-normal">{point}</span>
                  </div>
                ))}
              </div>
            )}

            {section.image && (
              <figure className="space-y-2.5 pt-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/40 shadow-lg">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="text-xs text-center text-muted-foreground italic">
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
