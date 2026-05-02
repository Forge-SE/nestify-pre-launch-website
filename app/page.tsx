"use client"
import { InteractiveGrid } from "@/components/background/InteractiveGrid";
import { MapIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <InteractiveGrid />

      {/* Logo */}
      <div className="fixed  top-1.5 md:top-4 left-6 md:left-20 z-50">
        <Image
          src="/logomark.png"
          alt="Nestify Logo"
          width={80}
          height={80}
          className="w-14 h-14 md:w-20 md:h-20 object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start h-screen text-center px-4 overflow-hidden gap-2 pt-24 md:pt-40">
        {/* Glowing Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1 rounded-full bg-orange-500/5 border border-orange-500/50 text-orange-500 text-[9px] md:text-[10px] sora font-medium tracking-wide flex items-center gap-2 shadow-[0_0_10px_rgba(249,112,21,0.3)] mb-2"
        >
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="capitalize">300+ students currently on the waitlist</span>
        </motion.div>

        <h1 className="hemming text-3xl md:text-6xl text-white px-1">Opportunities without the noise</h1>
        <p className="text-gray-200 text-xs md:text-base w-full max-w-lg md:w-1/2 sora font-light">Nestify is where high-quality opportunities find you—curated, intentional, and built for students who are ready to move.</p>
        <Link href="/waitlist">
          <button className="px-4 py-2 rounded-full text-white bg-orange-500 sora text-[10px] md:text-xs flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300">
            Get Beta Access
          </button>
        </Link>

        {/* App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 md:mt-12 w-full max-w-5xl px-4"
        >
          <div className="relative rounded-t-2xl p-2 bg-white/5 border-x border-t border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden group h-[220px] md:h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Fade out effect at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
            <Image
              src="/app-preview.png"
              alt="Nestify App Preview"
              width={1920}
              height={1080}
              className="rounded-t-xl border border-white/5 shadow-inner w-full object-cover object-top h-full"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Attribution */}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
        <Link
          href="https://www.forgestudios.tech"
          target="_blank"
          className="text-white/30 hover:text-white transition-colors duration-300 sora text-[9px] md:text-[10px] tracking-widest flex items-center gap-2 group font-normal"
        >
          <span className="capitalize">Powered by</span> <span className="font-normal text-orange-500 group-hover:text-orange-500 transition-colors capitalize">Forge Studios</span>
        </Link>
      </div>
    </>
  );
}
