import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Geist, Urbanist } from "next/font/google"; // 1. Added Urbanist import
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

// 2. Initialize Urbanist
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const lobster = localFont({
  src: "../public/fonts/lobster.otf",
  variable: "--font-lobster",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zentronix.com"),
  title: {
    default: "Zentronix | SEO & Digital Growth Agency",
    template: "%s | Zentronix",
  },
  description: "Zentronix – Premier SEO & Digital Growth Agency. Scale your business, drive organic traffic, and generate leads with data-driven strategies.",
  keywords: ["SEO Agency", "Digital Growth", "Lead Generation", "Search Dominance", "Zentronix"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentronix.com",
    siteName: "Zentronix",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Zentronix Digital Growth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentronix | SEO & Digital Growth Agency",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zentronix",
    "url": "https://zentronix.com",
    "logo": "https://zentronix.com/images/favicon.png",
    "description": "Premier SEO & Digital Growth Agency for business scaling."
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable, urbanist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lobster.variable} antialiased font-lobster bg-white`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}