"use client";
import { useState } from "react";

const problems = [
  {
    title: "Important announcements scattered across WhatsApp, email, and noticeboards",
  },
  {
    title: "Clubs and departments struggle to reach all students",
  },
  {
    title: "Companies want to hire but lack a direct channel to talent",
  },
  {
    title: "The result — missed chances, low engagement, lost opportunities",
    
  },
];

export default function ProblemSection() {
  const [active, setActive] = useState(3);
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4">
      <div className="max-w-3xl w-full">
        {/* THE PROBLEM */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-0.5 w-8 rounded-full bg-[#F97015]"></span>
          <span className="uppercase tracking-[0.08em] text-xs font-semibold text-[#F97015]">The Problem</span>
        </div>
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Opportunities exist.<br />
          <span className="text-zinc-400 font-[600]">Students just can't find them.</span>
        </h2>
        {/* Problem List */}
        <div className="flex flex-col divide-y divide-zinc-100 border-t border-b border-zinc-100">
          {problems.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                className={`flex items-start w-full py-5 px-0 gap-6 text-left transition group focus:outline-none ${isActive ? "bg-white opacity-100" : "bg-transparent opacity-70"}`}
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-base font-semibold mr-2 select-none transition-colors min-w-8 tabular-nums ${isActive ? "text-[#F97015]" : "text-[#737373]"}`}
                >
                  {String(i+1).padStart(2,'0')}
                </span>
                <span
                  className={`text-lg transition-colors ${isActive ? "text-zinc-900" : "text-[#737373]"} `}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
