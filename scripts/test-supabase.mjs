import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

// Load .env.local manually for this node script
const envPath = path.resolve(process.cwd(), ".env.local");
let envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
let envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("NEXT_PUBLIC_SUPABASE_URL=")) {
      envUrl = trimmed.split("=")[1].trim();
    }
    if (trimmed.startsWith("NEXT_PUBLIC_SUPABASE_ANON_KEY=")) {
      envKey = trimmed.split("=")[1].trim();
    }
  }
}

console.log("==========================================");
console.log("🔍 SUPABASE CONNECTION & HEALTH CHECK");
console.log("==========================================");
console.log("Supabase URL:", envUrl || "(Not set)");
console.log("Anon Key:", envKey ? `${envKey.slice(0, 10)}...${envKey.slice(-5)}` : "(Not set)");

if (!envUrl || !envKey || envUrl.includes("your-project-id") || envKey.includes("your-anon-key")) {
  console.log("\n⚠️  STATUS: Credentials are still placeholder values.");
  console.log("👉 Silakan buat project di Supabase (https://supabase.com), copy URL & anon key ke .env.local, lalu jalankan SQL migration.");
  console.log("💡 Singleton client `lib/supabase.ts` memiliki fallback aman sehingga local build tetap berfungsi.");
  process.exit(0);
}

const supabase = createClient(envUrl, envKey);

async function testConnection() {
  try {
    console.log("\nTesting connection to project_views table...");
    const { data, error } = await supabase.from("project_views").select("project_slug").limit(1);

    if (error) {
      if (error.code === "PGRST116" || error.message.includes("relation") || error.message.includes("does not exist")) {
        console.error("❌ Table `project_views` belum ditemukan!");
        console.error("👉 Jalankan file SQL migration `supabase/migrations/20261022000000_create_portfolio_tables.sql` di SQL Editor Supabase.");
      } else {
        console.error("❌ Error Supabase:", error.message, `(Code: ${error.code})`);
      }
      process.exit(1);
    }

    console.log("✅ Berhasil terhubung ke Supabase!");
    console.log("✅ Query SELECT pada `project_views` berhasil. Data:", data);
  } catch (err) {
    console.error("❌ Network / connection error:", err.message);
    process.exit(1);
  }
}

testConnection();
