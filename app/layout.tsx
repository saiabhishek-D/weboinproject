import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forma Studio — Digital Design & Branding Agency",
  description:
    "We make brands that move people. Forma Studio is an independent creative design studio crafting thoughtful digital identities, performant web platforms, and memorable brand systems.",
  keywords: [
    "Design Agency",
    "Branding",
    "UI/UX Design",
    "Web Development",
    "Digital Products",
    "Forma Studio",
  ],
  authors: [{ name: "Forma Studio" }],
  openGraph: {
    title: "Forma Studio — Digital Design & Branding Agency",
    description:
      "We make brands that move people. Independent design agency specializing in UI/UX, web development, branding, and digital marketing.",
    type: "website",
    locale: "en_US",
    siteName: "Forma Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Studio — Design Agency",
    description: "We make brands that move people.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen text-[#141414] antialiased relative">
        {/* Analog Film Grain / Paper Texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Architectural Grid Guidelines (Swiss Studio Structure) */}
        <div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-7xl px-6 flex justify-between" aria-hidden="true">
          <div className="w-[1px] h-full bg-[#E0E0E0]/40" />
          <div className="w-[1px] h-full bg-[#E0E0E0]/25 hidden lg:block" />
          <div className="w-[1px] h-full bg-[#E0E0E0]/25 hidden lg:block" />
          <div className="w-[1px] h-full bg-[#E0E0E0]/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
