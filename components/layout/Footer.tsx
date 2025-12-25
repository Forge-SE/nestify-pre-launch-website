"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-100 pt-10 pb-4 px-4">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Left: Logo and tagline */}
        <div className="flex flex-col gap-2 min-w-55">
          <div className="flex items-center gap-2 mb-1">
            <Image src="/logo.png" alt="Nestify logo" width={32} height={32} className="rounded-md" />
            <span className="font-semibold text-zinc-900 text-lg">nestify</span>
          </div>
          <span className="text-zinc-400 text-sm leading-snug">Connecting students to the opportunities that matter.</span>
        </div>
        {/* Center: Navigation */}
        <div className="flex gap-10 text-zinc-500 text-sm font-medium mt-2 md:mt-0">
          <Link href="#students" className="hover:text-zinc-900 transition">Students</Link>
          <Link href="#universities" className="hover:text-zinc-900 transition">Universities</Link>
          <Link href="#companies" className="hover:text-zinc-900 transition">Companies</Link>
        </div>
      </div>
      {/* <hr className="my-6 border-zinc-100" /> */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 gap-2">
        <span>© 2025 Nestify. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-zinc-900 transition">Privacy</Link>
          <Link href="#" className="hover:text-zinc-900 transition">Terms</Link>
        </div>
      </div>
      <div className="h-8" />
    </footer>
  );
}
