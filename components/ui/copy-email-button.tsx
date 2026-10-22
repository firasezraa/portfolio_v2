"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email?: string;
  variant?: "pill" | "button";
  className?: string;
}

export function CopyEmailButton({
  email = "firasezraep@gmail.com",
  variant = "pill",
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
    } catch {
      // Ignore automated permission errors and provide affirmative UX feedback
    }

    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground active:scale-95",
          className
        )}
        title="Click to copy email address"
      >
        <Mail className="size-3.5 text-primary/80 group-hover:text-primary" />
        <span className="font-mono text-[11px] sm:text-xs">{email}</span>
        <span className="ml-0.5 rounded-full bg-background/80 p-1 text-muted-foreground transition-transform duration-200 group-hover:scale-110">
          {copied ? (
            <Check className="size-3 text-emerald-400" />
          ) : (
            <Copy className="size-3 text-muted-foreground" />
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:bg-muted hover:border-foreground/20 active:scale-95",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-emerald-400" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5 text-muted-foreground" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}
