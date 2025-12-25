

"use client";
import Image from "next/image";
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
          <a href="#students" className="hover:text-zinc-900 transition">Students</a>
          <a href="#universities" className="hover:text-zinc-900 transition">Universities</a>
          <a href="#companies" className="hover:text-zinc-900 transition">Companies</a>
        </div>
        <a href="#waitlist" className="hidden md:inline-block bg-zinc-900 text-white rounded-full px-6 py-2 font-medium hover:bg-zinc-800 transition">
          Join Waitlist
        </a>
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
        <div className="fixed inset-0 z-50 flex justify-end" style={{backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.15)'}}>
          <div className="w-72 bg-white shadow-lg flex flex-col items-center justify-start p-6 pt-4 animate-slideInRight relative" style={{height: 'fit-content', maxHeight: '100vh', marginTop: '0', borderRadius: '0 0 1.5rem 1.5rem'}}>
            <button
              className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-900 text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-200"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
            <nav className="flex flex-col items-center w-full gap-4 mt-8 mb-4">
              <a href="#students" className="text-zinc-900 font-semibold text-base w-full text-center py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMobileOpen(false)}>Students</a>
              <a href="#universities" className="text-zinc-900 font-semibold text-base w-full text-center py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMobileOpen(false)}>Universities</a>
              <a href="#companies" className="text-zinc-900 font-semibold text-base w-full text-center py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMobileOpen(false)}>Companies</a>
            </nav>
            <a href="#waitlist" className="w-full bg-zinc-900 text-white rounded-full px-6 py-3 font-semibold text-base text-center hover:bg-zinc-800 transition block" onClick={() => setMobileOpen(false)}>
              Join Waitlist
            </a>
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
      `}</style>
    </>
  );
}
