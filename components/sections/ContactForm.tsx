"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { submitContactAction } from "@/app/actions/contact";
import { ContactFormData } from "@/lib/validations";

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
    // Clear error for field on change
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
        toast.error("Submission Failed", {
          description: res.message,
        });
      } else {
        setIsSuccess(true);
        toast.success("Message Delivered!", {
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
      toast.error("Network Error", {
        description: "Unable to reach the server. Please try again or email firasezraep@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-border/40 space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
          <Mail className="size-3 text-primary" />
          Direct Inquiries
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Build Something Meaningful
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl">
          Interested in discussing a UI/UX role, design consulting, or a technical product project? Leave a message below or email directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs text-muted-foreground">Direct Email</div>
                    <a
                      href="mailto:firasezraep@gmail.com"
                      className="text-sm font-semibold text-foreground hover:underline"
                    >
                      firasezraep@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-semibold text-foreground">
                      South Jakarta, Indonesia (GMT+7)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Clock className="size-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs text-muted-foreground">Response Time</div>
                    <div className="text-sm font-semibold text-foreground">
                      Within 24 Hours
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border/40 bg-muted/20 space-y-2">
                <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-400" />
                  <span>Open to Opportunities</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Available for Full-Time UI/UX Design positions, Product Design roles, and select freelance design systems consulting.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out. I have received your message and will review it shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (hidden from real users, lures spam bots) */}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium text-foreground">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g. Sarah Jenkins"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={fieldErrors.name ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                      />
                      {fieldErrors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="size-3" />
                          <span>{fieldErrors.name[0]}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-foreground">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. sarah@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={fieldErrors.email ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="size-3" />
                          <span>{fieldErrors.email[0]}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Field (Optional) */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-medium text-foreground">
                      Company / Organization <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="e.g. Acme Corp / Tech Startup"
                      value={formData.company || ""}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-foreground">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hi Firas, I came across your portfolio and would like to talk about..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={fieldErrors.message ? "border-rose-500 focus-visible:ring-rose-500" : ""}
                    />
                    {fieldErrors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="size-3" />
                        <span>{fieldErrors.message[0]}</span>
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2 font-medium"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Delivering Message...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message to Firas
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
