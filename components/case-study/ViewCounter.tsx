"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { incrementProjectView } from "@/app/actions/analytics";

interface ViewCounterProps {
  slug: string;
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    incrementProjectView(slug).then((res) => {
      if (isMounted && res.count) {
        setViews(res.count);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <Badge
      variant="outline"
      className="flex items-center gap-1.5 border-border/60 bg-muted/30 px-2.5 py-0.5 text-xs text-muted-foreground font-normal transition-opacity duration-300"
    >
      <Eye className="size-3 text-muted-foreground/80 shrink-0" />
      <span>{views !== null ? `${views.toLocaleString()} reads` : "Tracking..."}</span>
    </Badge>
  );
}
