"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// three.js is ~165 KB gzip; keep it off the initial bundle and off the server.
const Lanyard = dynamic(() => import("@/components/ui/lanyard"), {
  ssr: false,
  loading: () => null,
});

const PORTRAIT = "/images/firas-profile.png";
const FALLBACK_CARD = "rgb(255, 255, 255)";
const MOBILE_BREAKPOINT = 768;
// Phones push a 3x device pixel ratio; cap harder there than on desktop.
const MOBILE_MAX_PIXEL_RATIO = 1.5;
const DESKTOP_MAX_PIXEL_RATIO = 2;
const MOUNT_DELAY_MS = 300;

/**
 * Canvas 2D cannot resolve `var(--token)`, and Chrome serialises oklch/lab tokens
 * verbatim, which the component's colour parser (hex / rgb only) would misread as
 * 0-255 values. Render the token through a 1x1 canvas so the browser hands back
 * real sRGB channels.
 */
function resolveTokenToRgb(token: string, fallback: string): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
  if (!raw) return fallback;
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  if (!ctx) return fallback;
  // Draw the fallback first: an unparsable token leaves fillStyle untouched.
  ctx.fillStyle = fallback;
  ctx.fillStyle = raw;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return `rgb(${r}, ${g}, ${b})`;
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!gl) return false;
    // Release the probe context immediately; browsers cap live contexts.
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function subscribeToTheme(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "style"] });
  return () => observer.disconnect();
}

// getSnapshot has to be cheap and stable: memoise on the raw token text so repeated
// reads return the identical string and React skips the re-render.
let cachedToken = "";
let cachedRgb = FALLBACK_CARD;

function getCardColor(): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--card").trim();
  if (raw === cachedToken) return cachedRgb;
  cachedToken = raw;
  cachedRgb = resolveTokenToRgb("--card", FALLBACK_CARD);
  return cachedRgb;
}

function getServerCardColor(): string {
  return FALLBACK_CARD;
}

/**
 * A lanyard badge dangling from the sticky navbar. The stage is a fixed overlay
 * that covers the viewport below the 64px navbar; the canvas lets clicks through
 * anywhere except on the card itself (passthrough mode in <Lanyard />).
 */
export function HangingLanyard() {
  const [mounted, setMounted] = useState(false);
  const cardColor = useSyncExternalStore(subscribeToTheme, getCardColor, getServerCardColor);

  // Park the badge once the hero scrolls away: it hangs from the navbar for the
  // first screen only, so it never covers another section's content.
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver((entries) => setHeroVisible(entries[0]?.isIntersecting ?? true), {
      threshold: 0.15,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Wait for the window load event so three.js never competes with the poster
  // image (LCP) for bandwidth or main thread time.
  useEffect(() => {
    if (!supportsWebGL()) return;
    const activate = () => setMounted(true);
    if (document.readyState === "complete") {
      const timer = window.setTimeout(activate, MOUNT_DELAY_MS);
      return () => window.clearTimeout(timer);
    }
    let timer = 0;
    const onLoad = () => {
      timer = window.setTimeout(activate, MOUNT_DELAY_MS);
    };
    window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(timer);
    };
  }, []);

  const isPhone = typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;
  const size = isPhone ? 0.32 : 0.42;
  const strapLength = isPhone ? 0.26 : 0.3;

  return (
    <div
      className={`pointer-events-none fixed right-0 top-16 bottom-0 z-40 w-[clamp(230px,26vw,370px)] ${
        heroVisible ? "" : "hidden"
      }`}
    >
      {mounted ? (
        <Lanyard
          frontImage={PORTRAIT}
          backImage={PORTRAIT}
          imageFit="cover"
          cardColor={cardColor}
          orientation="portrait"
          finish="glossy"
          cornerRadius={0.24}
          size={size}
          anchor="center"
          strapLength={strapLength}
          strapColor="#111111"
          strapWidth={0.62}
          metal="silver"
          gravity={1}
          damping={0.5}
          elasticity={0.5}
          breeze={0.35}
          interactive
          intro
          passthrough
          maxPixelRatio={isPhone ? MOBILE_MAX_PIXEL_RATIO : DESKTOP_MAX_PIXEL_RATIO}
        />
      ) : (
        // Static fallback: no WebGL, or three.js still loading.
        <div className="absolute inset-x-0 top-0 px-3">
          <div className="mx-auto h-14 w-7 bg-[#111]" aria-hidden="true" />
          <div className="relative -mt-1 aspect-[1.6/2.25] -rotate-6 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xl shadow-foreground/10">
            <Image
              src={PORTRAIT}
              alt="Portrait of Firas Ezra"
              fill
              priority
              sizes="(max-width: 768px) 58vw, 260px"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  );
}