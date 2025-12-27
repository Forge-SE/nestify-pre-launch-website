import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/layout/Navbar";
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
        {/*<link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />*/}
        <link rel="icon" href="/brandmark.png" type="image/png" />
      </head>
      <body className={`antialiased ${plusJarkata.variable}`}>
        {/* Navbar at the top */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
