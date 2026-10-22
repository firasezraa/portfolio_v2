"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-foreground text-background font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
            FE
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-tight tracking-tight text-foreground">
              Firas Ezra
            </span>
            <span className="text-xs text-muted-foreground">
              UI/UX & Product Designer
            </span>
          </div>
        </Link>

        {/* Status Badge (Desktop) */}
        <div className="hidden md:flex items-center">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for New Roles
          </Badge>
        </div>

        {/* Navigation & CTA (Desktop) */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Case Studies
          </Link>
          <Link
            href="/#experience"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="/documents/firas-cv.pdf"
            download="Firas_Ezra_Resume.pdf"
            className={cn(buttonVariants({ size: "sm" }), "gap-2 font-medium")}
          >
            <Download className="size-3.5" />
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/documents/firas-cv.pdf"
            download="Firas_Ezra_Resume.pdf"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5 text-xs h-8 px-2.5")}
          >
            <Download className="size-3" />
            CV
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 py-4 md:hidden">
          <div className="mb-3 flex items-center justify-between pb-3 border-b border-border/50">
            <Badge
              variant="outline"
              className="flex items-center gap-1.5 border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400"
            >
              <span className="size-1.5 rounded-full bg-emerald-500"></span>
              Available for Hire
            </Badge>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground py-1.5 hover:text-primary"
            >
              Case Studies
            </Link>
            <Link
              href="/#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground py-1.5 hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground py-1.5 hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
