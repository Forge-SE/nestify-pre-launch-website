

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <nav className="w-full flex items-center justify-between py-4 px-6 md:px-20 bg-white">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Nestify logo" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg text-zinc-900">nestify</span>
        </div>
        <div className="hidden md:flex gap-8 text-zinc-500 font-medium">
          <Link href="#students" className="hover:text-zinc-900 transition">
            Students
          </Link>
          <Link href="#universities" className="hover:text-zinc-900 transition">
            Universities
          </Link>
          <Link href="#companies" className="hover:text-zinc-900 transition">
            Companies
          </Link>
        </div>
        <Link href="/waitlist" className="hidden md:inline-block bg-zinc-900 text-white rounded-full text-base px-8 py-2 font-medium hover:bg-zinc-800 transition">
          Join Waitlist
        </Link>
       
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-zinc-200 ml-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-zinc-900 mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-zinc-900 mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-zinc-900 rounded"></span>
        </button>
      </nav>
      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white animate-slideInDown">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between py-4 px-6 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Nestify logo" width={36} height={36} className="rounded-lg" />
              <span className="font-bold text-lg text-zinc-900">nestify</span>
            </div>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
            <Link href="#students" className="text-zinc-900 font-semibold text-2xl py-3 hover:text-[#F97015] transition" onClick={() => setMobileOpen(false)}>Students</Link>
            <Link href="#universities" className="text-zinc-900 font-semibold text-2xl py-3 hover:text-[#F97015] transition" onClick={() => setMobileOpen(false)}>Universities</Link>
            <Link href="#companies" className="text-zinc-900 font-semibold text-2xl py-3 hover:text-[#F97015] transition" onClick={() => setMobileOpen(false)}>Companies</Link>
          </nav>
          {/* Bottom CTA */}
          <div className="px-6 pb-8">
            <Link href="/waitlist" className="w-full bg-zinc-900 text-white rounded-full px-6 py-4 font-semibold text-lg text-center hover:bg-zinc-800 transition block" onClick={() => setMobileOpen(false)}>
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slideInDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideInDown {
          animation: slideInDown 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
}
