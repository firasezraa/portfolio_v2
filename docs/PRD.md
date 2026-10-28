# Blueprint MVP & Spesifikasi Produk: Website Portfolio Firas Ezra

**Target Role:** UI/UX / Product Designer (*High-Technical Competence / Design Engineer*)  
**Format:** Personal Portfolio Website  
**Timeline:** 7 Hari Kerja (Komitmen Full-Time 6–8 jam/hari)  
**Budget:** Rp 0,- / bulan (100% Free Tier)  
**Target URL Live:** Custom Domain / Subdomain Vercel  

---

## 1. Executive Summary & Ringkasan Validasi

Berdasarkan audit portfolio versi sebelumnya (`firasezra-personal-web.netlify.app`), Firas Ezra memiliki fondasi kredensial yang kuat (Mahasiswa Magister Manajemen SI Binus, eks-UI/UX Intern Kadence International, eks-Founder bisnis retail). Namun, versi sebelumnya memiliki dua kelemahan utama di mata recruiter:
1. **Posisi Karir Ambigu:** Ada tumpang-tindih label antara *Front-End Developer* dan *Junior UI/UX Designer*, serta elemen non-esensial (*movie list*, persentase *skill bar*).
2. **Ketiadaan UX Case Study:** Proyek hanya berupa thumbnail visual tanpa alur berpikir (*problem statement*, riset, iterasi *wireframe*, dan dampak bisnis).

**Strategi Diferensiasi:**  
Membangun web portfolio berkinerja tinggi menggunakan **Next.js + Tailwind CSS + shadcn/ui** dengan backend utilitas **Supabase**, yang secara langsung mendemonstrasikan kemampuan Firas sebagai **"UI/UX Designer who understands code and data"**.

---

## 2. Analisis Kompetitor & Pemetaan Peluang

| Kompetitor / Alternatif | Kelebihan | Kelemahan Fatal | Celah Keunggulan Firas |
| :--- | :--- | :--- | :--- |
| **Framer / Webflow** | Desain interaktif, animasi kompleks tanpa koding. | Biaya langganan mahal ($15–$25/bln), layout sering generik (*cookie-cutter*), tidak membuktikan pemahaman teknis koding. | **Kode Milik Sendiri:** Dibangun dengan Next.js tanpa watermark platform; membuktikan siap kolaborasi dengan tim engineer. |
| **Notion + Super.so** | Cepat diedit, dokumentasi teks terstruktur. | Terkesan *low-effort* untuk desainer level atas; kontrol tipografi dan styling kaku; loading gambar berat. | **Bespoke Craftsmanship:** Kontrol penuh pada *design tokens*, tipografi, mikro-interaksi, dan performa Web Vitals. |
| **Behance / Dribbble** | Jaringan audiens luas, mudah dilihat sepintas. | Recruiter mudah terdistraksi karya lain; tidak ramah narasi studi kasus mendalam; tidak ada conversion funnel. | **Dedicated Funnel:** Fokus 100% pada Firas tanpa distraksi pihak ketiga, dilengkapi tracking analitik kunjungan mandiri. |

---

## 3. Product Requirement Document (PRD)

### 3.1 Fitur Inti MVP (Maksimal 5)
1. **Hero & Value Proposition Section:**  
   Menampilkan identitas profesional, spesialisasi, ringkasan kredensial (Kadence, Binus Magister), serta dua CTA utama (*Explore Case Studies* dan *Download CV*).
2. **Deep-Dive UX Case Study Engine (Maksimal 2 Proyek Terpilih):**  
   Halaman detail studi kasus terstruktur (*Kadence Internal Portal* dan *SAMPERIN/Dietio Mobile App*) dengan format alur:
   - *Overview & Role*
   - *Problem Statement & User Pain Points*
   - *Design Process (Wireframe & Information Architecture)*
   - *Interactive Prototype (Figma Embed / High-res Mockup)*
   - *Business Impact & Key Learnings*
3. **Verified Resume & Credentials Viewer:**  
   Bagian riwayat pengalaman kerja, pendidikan, dan *tool stack* dengan tombol unduh langsung dokumen PDF ATS-friendly yang tersimpan di CDN.
4. **Interactive Contact & Lead Capture Form:**  
   Formulir kontak langsung (Nama, Email, Perusahaan, Pesan) dengan validasi Zod di client dan server, tersimpan ke Supabase dengan status *toast notification*.
5. **Lightweight Engagement & View Analytics:**  
   Pencatat jumlah pembaca per studi kasus dan tombol interaksi cepat (*claps* / *reactions*) berbasis Supabase RPC.

---

### 3.2 User Stories

* **US-01 (Hero & Direct CV Download):**  
  *Sebagai* Hiring Manager / Tech Recruiter,  
  *Saya mau* membaca spesialisasi Firas dan mengunduh CV dalam 5 detik pertama di halaman muka,  
  *Supaya* saya dapat langsung memvalidasi kecocokan kandidat dengan kualifikasi lowongan tanpa terbebani navigasi rumit.

* **US-02 (UX Case Study Deep-Dive):**  
  *Sebagai* Lead Product Designer / Interviewer,  
  *Saya mau* membaca narasi pemecahan masalah dan melihat evolusi wireframe hingga visual akhir pada proyek Kadence,  
  *Supaya* saya bisa mengevaluasi kedalaman berpikir desain (*design thinking*) dan pemahaman produk kandidat.

* **US-03 (Interactive Prototype Inspection):**  
  *Sebagai* Recruiter / Tim Desain,  
  *Saya mau* mencoba preview prototipe interaktif langsung di dalam halaman studi kasus,  
  *Supaya* saya bisa menilai kualitas mikro-interaksi dan konsistensi komponen desain.

* **US-04 (Direct Lead / Inbound Message):**  
  *Sebagai* Recruiter atau Klien Potensial,  
  *Saya mau* mengirim penawaran interview atau proyek via form kontak langsung,  
  *Supaya* saya tidak perlu repot membuka mail-client terpisah dan pesan langsung terkonfirmasi terkirim.

* **US-05 (Visitor Validation / Analytics):**  
  *Sebagai* Pemilik Portfolio (Firas),  
  *Saya mau* melihat metrik jumlah kunjungan per studi kasus,  
  *Supaya* saya tahu studi kasus mana yang paling menarik minat recruiter dan mengevaluasi efektivitas lamaran.

---

### 3.3 Batasan Eksplisit di Luar Scope (Out-of-Scope MVP)
- **CMS / Admin Panel Berbasis Web:** Konten studi kasus dikelola secara lokal menggunakan file Markdown/MDX statis.
- **Sistem Autentikasi Pengguna:** Tidak ada fitur registrasi/login untuk pengunjung.
- **Guestbook / Komentar Terbuka:** Ditiadakan demi menghindari beban moderasi konten dan spam.
- **Dukungan Multi-Bahasa (i18n):** Menggunakan 100% Bahasa Inggris profesional.
- **Blog Pribadi / Artikel Lepas:** Ditunda hingga versi post-MVP.

---

### 3.4 Metrik Keberhasilan MVP
- **Conversion Rate:** Minimal **≥ 15%** dari total sesi unik melakukan klik pada tombol *Download CV* atau submit form kontak.
- **Reading Time:** Rata-rata *Time on Page* untuk halaman detail studi kasus mencapai **≥ 75 detik**.
- **Google Lighthouse Score:**
  - Performance: **≥ 92**
  - Accessibility: **≥ 95**
  - Best Practices: **≥ 95**
  - SEO: **100**
- **Form Reliability:** Tingkat keberhasilan pengiriman formulir kontak mencapai **100%** (zero failure rate pada pengujian internal).

---

## 4. Arsitektur Teknis & Evaluasi Stack

### 4.1 Perbandingan Opsi Stack

#### A. Front-End

| Pilihan | Kerumitan Setup | Estimasi Biaya/bln | Kecocokan untuk Firas |
| :--- | :--- | :--- | :--- |
| **Next.js 15 (App Router) + Tailwind + shadcn/ui** *(Pilihan Utama)* | Rendah – Sedang | Rp 0 (Vercel Hobby) | **Sangat Cocok:** Menunjukkan kapabilitas modern web development standar industri; komponen shadcn modular dan mudah di-styling. |
| **Vite + React SPA** | Sangat Rendah | Rp 0 (Netlify/Vercel) | **Kurang Optimal:** Metadata OpenGraph saat share link portfolio ke LinkedIn sering tidak ter-render dengan baik (minus SEO). |

#### B. Back-End

| Pilihan | Kerumitan Setup | Estimasi Biaya/bln | Kecocokan untuk Firas |
| :--- | :--- | :--- | :--- |
| **Next.js Server Actions** *(Pilihan Utama)* | Sangat Rendah (Zero Setup) | Rp 0 (Serverless bawaan Vercel) | **Sangat Cocok:** Tidak butuh server terpisah (Express/Nest); logika DB langsung berjalan aman di sisi server. |
| **Dedicated Node.js / Express API** | Tinggi | Rp 0 – Rp 110.000 (jika VPS) | **Tidak Disarankan:** *Over-engineering* untuk solo developer; menghabiskan waktu pada konfigurasi CORS dan server maintenance. |

#### C. Database

| Pilihan | Kerumitan Setup | Estimasi Biaya/bln | Kecocokan untuk Firas |
| :--- | :--- | :--- | :--- |
| **Supabase (PostgreSQL Singapore)** *(Pilihan Utama)* | Rendah | Rp 0 (Free Tier permanen) | **Sangat Cocok:** Setup 2 tabel dalam 5 menit, didukung RLS (Row Level Security) untuk proteksi spam, latensi < 50ms dari Indonesia. |
| **MongoDB Atlas** | Rendah – Sedang | Rp 0 (Free Shared M0) | **Kurang Optimal:** Setup caching connection string di serverless functions lebih rentan *connection limit*. |

---

### 4.2 Target Angka Kinerja (SLA)
- **Largest Contentful Paint (LCP):** `< 1.2 detik`
- **First Contentful Paint (FCP):** `< 0.8 detik`
- **Cumulative Layout Shift (CLS):** `0.00`
- **Total Bundle Size (Initial JS):** `< 95 KB` (gzipped)
- **API Latency (Server Action -> Supabase Insert):** `< 350 ms`
- **Uptime SLA:** `99.9%`

---

### 4.3 Diagram Arsitektur

```text
[ Recruiter / Browser ]
          │
          ▼  (HTTPS / DNS via Vercel Edge CDN)
┌────────────────────────────────────────────────────────┐
│               VERCEL HOSTING INFRASTRUCTURE            │
│                                                        │
│  Next.js 15 (App Router)                               │
│  ├── UI: Tailwind CSS + shadcn/ui                      │
│  ├── Static Pages (SSG): Home, Resume, Case Studies    │
│  └── Server Actions: Form validation (Zod)             │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼ (Encrypted Supabase SDK)
┌────────────────────────────────────────────────────────┐
│             SUPABASE (PostgreSQL Singapore)            │
│  ├── Table: `contact_messages` (RLS: Insert-only)      │
│  └── Table: `project_analytics` (RPC increment)        │
└────────────────────────────────────────────────────────┘
```

---

## 5. Rencana Eksekusi Sprint 7 Hari Kerja

```text
[Hari 1] Konten & Narasi UX (Prioritas Tertinggi)
  • Pilih 2 proyek terbaik: Kadence B2B Portal + 1 Mobile App (SAMPERIN/Dietio).
  • Tulis naskah studi kasus (Problem, Role, User Journey, Solusi, Metrik).

[Hari 2] Aset Visual & Layouting Figma
  • Rapikan mockup visual, ekspor gambar ke format WebP terkompresi.
  • Buat design tokens: tipografi, skala jarak (spacing), palet warna.

[Hari 3] Scaffolding Project & Core Layout
  • Inisialisasi: `npx create-next-app@latest` (TypeScript, Tailwind, App Router).
  • Install shadcn/ui dan komponen dasar (Button, Card, Badge, Toast, Dialog).
  • Slicing Navbar, Hero Section, dan Footer responsif.

[Hari 4] Engine Studi Kasus (/projects/[slug])
  • Buat template halaman studi kasus berbasis data statis lokal.
  • Integrasikan komponen visual: Side-by-side comparison & Figma Embed frame.

[Hari 5] Integrasi Database Supabase & Contact Form
  • Setup project Supabase (Region Singapore), buat tabel `contact_messages`.
  • Aktifkan Row Level Security (RLS) INSERT policy untuk user anon.
  • Buat Server Action dengan validasi Zod + notifikasi toast di UI.

[Hari 6] Performance Optimization, SEO, & Responsive QA
  • Pasang OpenGraph image metadata untuk preview link di LinkedIn/WhatsApp.
  • Audit Lighthouse: optimasi gambar via `next/image`, pastikan LCP < 1.2 detik.
  • QA layout pada resolusi Mobile (375px), Tablet (768px), dan Desktop (1440px).

[Hari 7] Deployment & End-to-End Testing
  • Hubungkan repositori GitHub ke Vercel.
  • Konfigurasi Environment Variables (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_ANON_KEY`).
  • Pengujian pengiriman pesan langsung di production dan validasi final download CV.
```
