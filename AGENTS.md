# AGENTS.md — Development Guidelines for Firas Ezra Portfolio

## 1. Tech Stack
Next.js 15 (App Router, React 19, TypeScript), Tailwind CSS v4, shadcn/ui (Radix UI), Lucide Icons, Zod (schema validation), Supabase JS Client (`@supabase/supabase-js` untuk PostgreSQL di Singapore), di-deploy ke Vercel (Hobby Tier).

---

## 2. Project Directory Structure
```text
├── app/
│   ├── layout.tsx              # Root layout & font provider
│   ├── page.tsx                # Landing: Hero, Curated Projects, About, Contact
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic UX case study detail page
│   ├── actions/
│   │   ├── contact.ts          # Server Action: Zod validation + Supabase insert
│   │   └── analytics.ts        # Server Action: Supabase view counter increment
│   └── globals.css             # Tailwind base styles & theme tokens
├── components/
│   ├── ui/                     # shadcn/ui components (button, card, dialog, toast, etc.)
│   ├── sections/               # Hero, ProjectCard, Experience, ContactForm
│   ├── case-study/             # CaseStudyHeader, ImageCompare, FigmaEmbed, ImpactMetric
│   └── layout/                 # Navbar, Footer, MobileNav
├── content/
│   └── projects/               # Local case study data (kadence.ts, samperin.ts)
├── lib/
│   ├── supabase.ts             # Supabase client singleton (anon key)
│   ├── utils.ts                # cn helper (clsx + tailwind-merge)
│   └── validations.ts          # Zod schema (contactFormSchema)
├── public/
│   ├── images/projects/        # Optimized WebP assets for case studies
│   ├── documents/firas-cv.pdf  # ATS-friendly resume file
│   └── og-image.png            # OpenGraph social share card
├── types/
│   └── index.ts                # Shared TypeScript interfaces
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Code Conventions & Standards
- **Routing & Rendering:** Wajib gunakan Next.js App Router. Komponen default adalah Server Components (`RSC`). Tambahkan `'use client'` hanya bila ada event listener (`onClick`), state (`useState`), atau hooks.
- **Data Flow:** Gunakan Server Actions (`'use server'`) untuk mutasi data form kontak dan view counter. Jangan buat Express server atau Route Handlers (`app/api/`) baru jika bisa ditangani oleh Server Action.
- **Form & Validation:** Validasi setiap input form menggunakan Zod schema sebelum dikirim ke Supabase.
- **Styling:** Gunakan utility classes Tailwind CSS murni. Hindari custom CSS/SCSS inline atau class eksternal baru. Pakai helper `cn(...)` untuk conditional classes.
- **Naming Conventions:**
  - Komponen & Types: `PascalCase` (contoh: `ProjectCard.tsx`, `CaseStudyData`).
  - Functions, actions, & variables: `camelCase` (contoh: `submitContactMessage`, `projectSlug`).
  - File non-komponen: `kebab-case` (contoh: `validations.ts`, `samperin.ts`).
- **Images:** Wajib bungkus aset visual dengan `next/image` dengan atribut `width`, `height`, `alt`, serta `placeholder="blur"` untuk mockup studi kasus.

---

## 4. Run / Build / Test Commands
```bash
npm run dev           # Jalankan dev server lokal (http://localhost:3000)
npm run lint          # Jalankan ESLint rule check
npx tsc --noEmit      # Type-check TypeScript secara ketat
npm run build         # Validasi build production Next.js
npm run start         # Jalankan production build secara lokal
```

---

## 5. Yang TIDAK Boleh Dilakukan (Strictly Forbidden)
1. **DILARANG membuat Web CMS / Admin Dashboard / Auth Login:** Data studi kasus wajib dibaca dari file lokal (`content/projects/*.ts` atau `.mdx`). Jangan pasang `@supabase/auth-helpers` atau login session.
2. **DILARANG membuat fitur Guestbook / Komentar Terbuka:** Supabase hanya digunakan untuk `contact_messages` (insert-only) dan `project_views` (counter).
3. **DILARANG menambah database baru atau backend server mandiri (Express/Fastify/NestJS):** Semua backend logic wajib berada di dalam Next.js Server Actions.
4. **DILARANG mengimplementasikan multi-bahasa (i18n):** Bahasa web wajib 100% English.
5. **DILARANG membuat sistem blog / personal posts:** Lingkup konten terbatas pada halaman muka, unduh CV, dan 2 studi kasus utama.
6. **DILARANG memakai gambar format mentah (.png/.jpg) berukuran > 500KB tanpa kompresi WebP:** Semua mockup wajib dikompresi agar target performa Lighthouse $\ge 92$ terpenuhi.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
