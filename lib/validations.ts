import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(120, "Email cannot exceed 120 characters."),
  company: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long so I can understand your inquiry.")
    .max(2000, "Message cannot exceed 2000 characters."),
  honeypot: z.string().max(0, "Bot submission detected.").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
