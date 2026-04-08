import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJarkata = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
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
      <body className={`antialiased ${plusJarkata.variable}`}>
        {children}
      </body>
    </html>
  );
}
