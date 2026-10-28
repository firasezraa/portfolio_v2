"use client";

import { useState } from "react";
import { toast } from "sonner";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactAction } from "@/app/actions/contact";
import { ContactFormData } from "@/lib/validations";
import { CopyEmailButton } from "@/components/ui/copy-email-button";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const res = await submitContactAction(formData);

      if (!res.success) {
        if (res.errors) {
          setFieldErrors(res.errors);
        }
        toast.error("Submission failed", {
          description: res.message,
        });
      } else {
        setIsSuccess(true);
        toast.success("Message delivered!", {
          description: res.message,
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      toast.error("Network error", {
        description:
          "Unable to reach the server. Please try again or email firasezraep@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border/70 pt-16 md:pt-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Let&rsquo;s work together
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Whether it&rsquo;s a job opportunity, a design systems consultation,
          or a product project — leave a message or email directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Contact info */}
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Direct email</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:firasezraep@gmail.com"
                  className="text-base font-semibold text-foreground underline-offset-4 hover:underline"
                >
                  firasezraep@gmail.com
                </a>
                <CopyEmailButton variant="button" />
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-muted-foreground">Location</p>
              <p className="mt-2 flex items-center gap-2 text-base font-semibold text-foreground">
                <MapPin className="size-4 text-primary" />
                South Jakarta, Indonesia (GMT+7)
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-muted-foreground">Response time</p>
              <p className="mt-2 flex items-center gap-2 text-base font-semibold text-foreground">
                <Mail className="size-4 text-primary" />
                Within 24 hours
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border/70 bg-muted/40 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="size-4 text-emerald-500" />
              Open to opportunities
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Available for full-time UI/UX &amp; product design roles, and
              select freelance design-systems consulting.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-muted/40 px-6 py-16 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="size-7" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                Message sent
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thank you for reaching out — I&rsquo;ve received your message
                and will get back to you shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSuccess(false)}
                className="mt-6"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Leave this blank</label>
                <input
                  id="honeypot"
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Sarah Jenkins"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={fieldErrors.name ? "border-destructive" : ""}
                  />
                  {fieldErrors.name && (
                    <p className="flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" />
                      {fieldErrors.name[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="sarah@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={fieldErrors.email ? "border-destructive" : ""}
                  />
                  {fieldErrors.email && (
                    <p className="flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" />
                      {fieldErrors.email[0]}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company / organization{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Acme Corp / Tech Startup"
                  value={formData.company || ""}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Hi Firas, I came across your portfolio and would like to talk about..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={fieldErrors.message ? "border-destructive" : ""}
                />
                {fieldErrors.message && (
                  <p className="flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="size-3" />
                    {fieldErrors.message[0]}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 w-full gap-2 text-sm font-semibold sm:w-auto sm:px-8"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
