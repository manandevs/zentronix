import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const lobster = localFont({
  src: "../public/fonts/lobster.otf",
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: {
    default: "Zentronix | SEO & Digital Growth Agency",
    template: "%s | Zentronix",
  },
  description:
    "Zentronix – Premier SEO & Digital Growth Agency. Scale your business, drive organic traffic, and generate high-quality leads with data-driven strategies.",
  keywords: [
    "Zentronix",
    "SEO Agency",
    "Digital Growth",
    "Organic Traffic",
    "Lead Generation",
    "Conversion Optimization",
    "Business Scaling"
  ],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  authors: [{ name: "Zentronix Growth Team" }],
  creator: "Zentronix",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lobster.variable} antialiased font-lobster  bg-white`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}