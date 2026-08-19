import type { Metadata, Viewport } from "next";
import { Urbanist, Lobster_Two } from "next/font/google";
import { createClient } from "@/prismicio";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const lobster = Lobster_Two({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// Dynamic Metadata powered by Prismic Settings
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings").catch(() => null);

  const title = settings?.data?.site_title || siteConfig.title;
  const description = settings?.data?.meta_description || siteConfig.description;
  const ogImageUrl = settings?.data?.og_image?.url || siteConfig.ogImage;
  const ogImageAlt = settings?.data?.og_image?.alt || "Zentorex AI preview";
  const faviconUrl = settings?.data?.favicon?.url || "/images/favicon.png";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    icons: {
      icon: faviconUrl,
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
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
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
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
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", urbanist.variable, lobster.variable)}
    >
      <body className="min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}