"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroBackgroundPhoto() {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Smooth fade out from 1.0 down to 0.0 as user scrolls past 300px
      const newOpacity = Math.max(0, 1 - scrollY / 280);
      const newTranslateY = scrollY * 0.22; // subtle parallax depth
      setOpacity(newOpacity);
      setTranslateY(newTranslateY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: "opacity, transform",
      }}
      className="pointer-events-none absolute -right-4 sm:-right-6 md:-right-10 lg:-right-14 -top-8 sm:-top-12 md:-top-16 lg:-top-20 w-[320px] sm:w-[420px] md:w-[540px] lg:w-[640px] xl:w-[700px] h-[400px] sm:h-[500px] md:h-[640px] lg:h-[740px] select-none -z-10 transition-opacity duration-75"
    >
      {/* Ambient emerald-cyan aura behind the portrait */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-sky-500/15 blur-3xl scale-95" />

      {/* Portrait Image with double-layer smooth feathering & bottom fade */}
      <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_30%,rgba(0,0,0,0.85)_50%,rgba(0,0,0,0.3)_70%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_30%,rgba(0,0,0,0.85)_50%,rgba(0,0,0,0.3)_70%,transparent_92%)]">
        <Image
          src="/images/firas-hero.webp"
          alt="Firas Ezra"
          fill
          priority
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 540px, 700px"
          className="object-contain object-top opacity-40 sm:opacity-60 md:opacity-95 drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] brightness-95 contrast-105"
        />
      </div>
    </div>
  );
}
