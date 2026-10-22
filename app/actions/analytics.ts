"use server";

import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// In-memory counter for local development when Supabase credentials are not yet linked
const localViewCache: Record<string, number> = {
  "kadence-internal-portal": 128,
  "samperin-mobile-app": 94,
};

export async function incrementProjectView(slug: string): Promise<{ count: number }> {
  if (!slug) return { count: 0 };

  try {
    if (!isSupabaseConfigured) {
      localViewCache[slug] = (localViewCache[slug] || 50) + 1;
      return { count: localViewCache[slug] };
    }

    // Call atomic PostgreSQL RPC function
    const { data, error } = await supabase.rpc("increment_project_view", {
      p_slug: slug,
    });

    if (error) {
      console.warn("[Analytics Error] increment_project_view RPC:", error.message);
      return { count: localViewCache[slug] || 100 };
    }

    return { count: typeof data === "number" ? data : Number(data) || 1 };
  } catch (err: unknown) {
    console.warn("[Analytics Exception]:", err);
    return { count: localViewCache[slug] || 100 };
  }
}

export async function getProjectViewCount(slug: string): Promise<number> {
  if (!slug) return 0;

  try {
    if (!isSupabaseConfigured) {
      return localViewCache[slug] || 100;
    }

    const { data, error } = await supabase
      .from("project_views")
      .select("view_count")
      .eq("project_slug", slug)
      .single();

    if (error || !data) {
      return localViewCache[slug] || 100;
    }

    return Number(data.view_count) || 0;
  } catch {
    return localViewCache[slug] || 100;
  }
}
