"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Delay before the decode begins (ms). */
  delay?: number;
  /** Total decode duration (ms). */
  duration?: number;
}

/**
 * Decodes `text` from random glyphs into the real characters, left to right.
 * Renders the final text server-side (SEO + no-JS), then animates on mount.
 */
export function ScrambleText({
  text,
  className,
  delay = 0,
  duration = 1100,
}: ScrambleTextProps) {
  const [output, setOutput] = useState(text);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      let start: number | null = null;

      const tick = (now: number) => {
        if (start === null) start = now;
        const progress = Math.min(1, (now - start) / duration);
        const settled = Math.floor(progress * text.length);

        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === " ") {
            out += " ";
          } else if (i < settled) {
            out += ch;
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }

        setOutput(out);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setOutput(text);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay, duration]);

  return (
    <span className={cn(className)} aria-label={text}>
      {output}
    </span>
  );
}
