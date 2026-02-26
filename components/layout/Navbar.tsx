"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-t-2 border-[#5b2740] bg-white px-4 py-4 md:border-t-0 md:px-10">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between">
          <div className=" hidden items-center gap-8 text-sm font-normal text-zinc-900 md:flex">
            <Link href="#students" className="transition-opacity hover:opacity-65">
              About
            </Link>
            <Link
              href="#universities"
              className="transition-opacity hover:opacity-65"
            >
              Case Studies
            </Link>
            <Link href="#companies" className="transition-opacity hover:opacity-65">
              News
            </Link>
          </div>

          <Link
            href="/"
          >
            <Image
              src="/brandmark.png"
              alt="Nestify"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Link>

          <Link
            href="/waitlist"
            className="group hidden overflow-hidden rounded-xl bg-[#221e1b] px-6 py-3 text-sm font-semibold hover:bg-zinc-900 transition-colors  text-white md:inline-flex"
          >
            <span className="relative block h-5 overflow-hidden leading-5">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Join Waitlist
              </span>
              <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Join Waitlist
              </span>
            </span>
          </Link>

          <button
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="mb-1.5 block h-0.5 w-5 rounded bg-zinc-900"></span>
            <span className="block h-0.5 w-5 rounded bg-zinc-900"></span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white animate-slideInDown">
          <div className="flex items-center justify-between  px-4 py-4">
            <span
              className="text-[46px] leading-none text-zinc-900"
              
            >
               <Image
              src="/brandmark.png"
              alt="Nestify"
              width={50}
              height={50}
              className="rounded-lg"
            />
            </span>
            <button
              className="flex h-10 w-10 items-center justify-center text-zinc-700 transition hover:text-zinc-900"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="pped flex flex-1 flex-col items-center justify-center gap-6 px-6">
            <Link
              href="#students"
              className="py-3 text-2xl font-normal text-zinc-900 transition hover:text-[#221e1b]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="#universities"
              className="py-3 text-2xl font-normal text-zinc-900 transition hover:text-[#221e1b]"
              onClick={() => setMobileOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="#companies"
              className="py-3 text-2xl font-normal text-zinc-900 transition hover:text-[#221e1b]"
              onClick={() => setMobileOpen(false)}
            >
              News
            </Link>
          </nav>

          <div className="px-6 pb-8">
            <Link
              href="/waitlist"
              className="block w-full rounded-2xl bg-[#11100f] px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#3a2111]"
              onClick={() => setMobileOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideInDown {
          animation: slideInDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}
