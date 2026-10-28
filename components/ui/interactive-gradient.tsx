"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InteractiveGradient({
  className,
  intensity = 0.15,
  colors = [
    "oklch(0.5 0.2 263)",
    "oklch(0.55 0.18 220)",
    "oklch(0.6 0.16 180)",
  ],
}: {
  className?: string;
  intensity?: number;
  colors?: string[];
}) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
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
        (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * 0.08;

      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  const gradientStops = colors
    .map((c, i) => `${c} ${Math.round(20 + i * 30)}%`)
    .join(", ");

  const style: React.CSSProperties = {
    background: `radial-gradient(ellipse 120% 120% at ${currentRef.current.x * 100}% ${currentRef.current.y * 100}%, ${gradientStops})`,
    opacity: intensity,
    pointerEvents: "none",
    position: "fixed",
    inset: 0,
    zIndex: -1,
    willChange: "background",
  } as React.CSSProperties;

  return <div className={cn("fixed inset-0 -z-10", className)} style={style} />;
}