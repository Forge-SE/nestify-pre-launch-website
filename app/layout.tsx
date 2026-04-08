import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Chivo_Mono } from "next/font/google";

import "./globals.css";
import { LayoutClient } from "@/components/LayoutClient";

const plusJarkata = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nestify",
  description: "Nestify - Connecting Students, Universities, and Companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brandmark.png" type="image/png" />
      </head>
      <body className={`antialiased bg-[#0a0a0a] text-white ${plusJarkata.variable} ${chivoMono.variable}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
