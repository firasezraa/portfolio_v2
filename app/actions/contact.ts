"use server";

import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
}

export async function submitContactAction(
  data: ContactFormData
): Promise<ContactActionResult> {
  // 1. Zod Server-Side Schema Validation
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please correct the highlighted errors in the form.",
      errors: fieldErrors,
    };
  }

  const { name, email, company, message, honeypot } = validationResult.data;

  // 2. Anti-Spam Honeypot Guard
  if (honeypot && honeypot.length > 0) {
    // Silently drop bot submissions
    return {
      success: true,
      message: "Your message has been safely received.",
    };
  }

  // 3. Database Insertion via Supabase
  try {
    if (!isSupabaseConfigured) {
      console.log("[DEV MODE] Contact Message Submitted:", {
        name,
        email,
        company: company || "(Not provided)",
        message,
        timestamp: new Date().toISOString(),
      });

      return {
        success: true,
        message: "Thank you, Firas will get back to you shortly! (Saved in local demo mode)",
      };
    }

    const { error } = await supabase.from("contact_messages").insert([
      {
        name,
        email,
        company: company || null,
        message,
      },
    ]);

    if (error) {
      console.error("[Supabase Error] contact_messages insert failed:", error);
      return {
        success: false,
        message: "Failed to deliver message to database. Please reach out directly to firasezraep@gmail.com.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully to Firas.",
    };
  } catch (err: unknown) {
    console.error("[Server Error] Exception in submitContactAction:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please contact firasezraep@gmail.com directly.",
    };
  }
}
