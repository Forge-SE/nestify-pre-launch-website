"use client";

import Link from "next/link";

export default function EarlyAccessSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-32 px-4 bg-white relative">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none" aria-hidden="true">
        <div className="w-150 h-150 rounded-full opacity-70" style={{background: 'radial-gradient(circle, #FFF4ED 0%, #fff 80%)' }}></div>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-xl w-full mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 bg-white text-base font-medium text-zinc-500">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97015] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F97015]"></span>
            </span>
            Early access opening soon
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-2 leading-tight">
          Be part of the<br />
          <span className="text-zinc-400 font-extrabold">first wave</span>
        </h2>
        <p className="text-lg text-zinc-500 text-center mb-8 max-w-md mx-auto">
          Nestify is preparing for launch. Early partners get first access to shape the future of student opportunities.
        </p>
        <Link href="">
         <button className="bg-zinc-900 text-white font-normal rounded-full px-6 py-3 text-base flex items-center gap-2 shadow hover:bg-zinc-800 transition mb-12">
          Join the Waitlist <span className="ml-2">→</span>
        </button>
        </Link>
       
        <hr className="w-full border-zinc-200 mb-6" />
        <div className="text-xs text-zinc-400 text-center mb-6">Trusted by students from</div>
        <div className="flex justify-center gap-8 text-zinc-400 text-sm font-medium">
          <span>University A</span>
          <span>University B</span>
          <span>University C</span>
        </div>
      </div>
    </section>
  );
}
