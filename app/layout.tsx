import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { HeroBackground } from "@/components/ui/tweenly-hero-background";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://firasezra.com"),
  title: {
    default: "Firas Ezra — UI/UX Designer & Product Thinker",
    template: "%s | Firas Ezra",
  },
  description:
    "Portfolio of Firas Ezra: UI/UX & Product Designer blending human-centered research with technical engineering feasibility.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Design Engineer",
    "Firas Ezra",
    "Next.js",
    "Figma Tokens",
    "Information Architecture",
    "Jakarta",
  ],
  authors: [{ name: "Firas Ezra" }],
  creator: "Firas Ezra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firasezra.com",
    siteName: "Firas Ezra — Portfolio",
    title: "Firas Ezra — UI/UX Designer & Product Thinker",
    description:
      "UI/UX & Product Designer blending human-centered research with technical engineering feasibility.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Firas Ezra — UI/UX Designer & Product Thinker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firas Ezra — UI/UX Designer & Product Thinker",
    description:
      "UI/UX & Product Designer blending human-centered research with technical engineering feasibility.",
    images: ["/og-image.png"],
    creator: "@firasezra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${bricolage.variable} ${figtree.className} font-sans h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={`${figtree.className} min-h-full flex flex-col font-sans text-foreground`} suppressHydrationWarning>
          {/* Full-viewport hero background, fixed behind all content */}
          <HeroBackground
            variant="dots"
            mask="radial"
            color="currentColor"
            accent="#ff4d12"
            density={1}
            size={1.5}
            speed={1}
            interaction="repel"
            radius={160}
            strength={1}
            opacity={0.35}
            clickRipple={true}
            interactive={true}
            seed={1}
            fps={60}
          />
          
          {/* Page content layered on top */}
          <div className="relative flex flex-col min-h-screen z-10">
            <Navbar />
            <div className="flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-16">
              {children}
            </div>
            <Footer />
          </div>
          
          <Toaster richColors position="top-right" />
        </body>
      </ThemeProvider>
    </html>
  );
}