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
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forma Studio — Design Agency",
  description:
    "We make brands that move people. Forma Studio is a creative design agency specializing in UI/UX, web development, branding, and digital marketing.",
  openGraph: {
    title: "Forma Studio — Design Agency",
    description:
      "We make brands that move people. Creative design agency specializing in UI/UX, web development, branding, and digital marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
