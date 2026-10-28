"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InteractiveGradient({
  className,
  intensity = 0.35,
  colors = [
    "oklch(0.75 0.25 280)",
    "oklch(0.7 0.22 240)",
    "oklch(0.65 0.2 200)",
    "oklch(0.7 0.18 160)",
  ],
}: {
  className?: string;
  intensity?: number;
  colors?: string[];
}) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMove = (e: MouseEvent) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    const tick = () => {
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * 0.06;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * 0.06;

      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  if (reduceMotion || !mounted) return null;

  const gradientStops = colors
    .map((c, i) => `${c} ${Math.round(i * 100 / (colors.length - 1))}%`)
    .join(", ");

  const style: React.CSSProperties = {
    background: `radial-gradient(ellipse 150% 150% at ${currentRef.current.x * 100}% ${currentRef.current.y * 100}%, ${gradientStops})`,
    opacity: intensity,
    pointerEvents: "none",
    position: "fixed",
    inset: 0,
    zIndex: 0,
    willChange: "background",
  } as React.CSSProperties;

  return <div className={cn("fixed inset-0", className)} style={style} />;
}