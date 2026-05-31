import type { Metadata, Viewport } from "next";
import { Urbanist, Lobster_Two } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist", });
const lobster = Lobster_Two({ weight: "400", subsets: ["latin"], variable: "--font-lobster", });


export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Gemini AI",
    "enterprise AI",
    "agentic workflows",
    "multimodal AI",
    "Zentorex",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Zentorex AI — neural intelligence platform",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        urbanist.variable,
        lobster.variable
      )}
    >
      <body className="min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}