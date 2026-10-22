import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes("your-project-id") &&
  !supabaseAnonKey.includes("your-anon-key")
);

// Fallback dummy URL to prevent createClient initialization throw if env is pending
const validUrl = isSupabaseConfigured ? supabaseUrl : "https://placeholder-project.supabase.co";
const validKey = isSupabaseConfigured ? supabaseAnonKey : "placeholder-key";

export const supabase = createClient(validUrl, validKey);
