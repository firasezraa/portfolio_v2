"use client";

import Link from "next/link";
import { ArrowDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-5 sm:px-8 lg:px-10">
        {/* Brand */}
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground">
              FE
            </span>
            <span className="font-heading text-base font-bold tracking-tight text-foreground">
              Firas Ezra
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop status + CTA */}
        <div className="hidden flex-1 items-center justify-end gap-5 md:flex">
          <span className="flex items-center gap-2 whitespace-nowrap text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for roles
          </span>
          <a
            href="/documents/firas-cv.pdf"
            download="Firas_Ezra_Resume.pdf"
            className={cn(
              "inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            )}
          >
            <ArrowDown className="size-4" />
            Download CV
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/documents/firas-cv.pdf"
            download="Firas_Ezra_Resume.pdf"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground"
          >
            <ArrowDown className="size-3.5" />
            CV
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="size-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-border/70 pt-4 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new roles
          </div>
        </div>
      )}
    </header>
  );
}
