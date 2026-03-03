import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lobster = localFont({
  src: "../public/fonts/lobster.otf",
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: {
    default: "Zentronix",
    template: "%s | Zentronix",
  },
  description:
    "Zentronix – Centralized Technology & Network Interface Exchange platform.",
  keywords: [
    "Zentronix",
    "Technology Platform",
    "Digital Network",
    "SaaS",
    "Innovation",
  ],
  icons: {
    icon: "/images/favicon.png", 
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  authors: [{ name: "Zentronix Team" }],
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
      <body className={`${lobster.variable} antialiased font-lobster`}>
        {children}
      </body>
    </html>
  );
}