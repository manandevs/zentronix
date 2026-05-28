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
  title: {
    default: "Zentorex AI | Next-Gen Intelligence",
    template: "%s | Zentorex AI",
  },
  description: "Zentorex AI – Powered by Gemini. The ultimate AI-native growth engine for modern enterprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(geist.variable, urbanist.variable, lobster.variable)}>
      <body className="antialiased font-urbanist bg-white text-stone-950">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}