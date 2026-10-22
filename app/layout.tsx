import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${poppins.variable} ${poppins.className} font-sans dark h-full scroll-smooth antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        <Navbar />
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {children}
        </div>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
