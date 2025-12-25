"use client";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: "/search.png",
    text: "Personalized feed of jobs, internships, and updates",
  },
  {
    icon: "/send.png",
    text: "Apply directly on the platform",
  },
  {
    icon: "/saved.png",
    text: "Save opportunities for later",
  },
  {
    icon: "/notification.png",
    text: "Get notified when something matches your interests",
  },
];

const cards = [
  {
    type: "Internship",
    title: "Google Summer 2025",
    color: "#F97015",
  },
  {
    type: "Scholarship",
    title: "Merit Awards Open",
    color: "#737373",
  },
  {
    type: "Event",
    title: "Tech Career Fair",
    color: "#737373",
  },
];

export default function ForStudentsSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
        {/* Left: Headline and features */}
        <div className="flex-1 w-full max-w-md">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="h-0.5 w-8 rounded-full" style={{background:'#F97015'}}></span>
            <span className="uppercase tracking-wider text-xs font-semibold" style={{color:'#F97015',letterSpacing:'0.08em'}}>For Students</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-6">
            More than just school
          </h2>
          <p className="text-base md:text-xl text-zinc-400 md:text-zinc-500 mb-6 md:mb-10">
            Your academic, social, and career life — organized in one place.
          </p>
          <div className="flex flex-col gap-4 md:gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center justify-center">
                  <Image src={f.icon} alt="feature icon" width={22} height={22} />
                </span>
                <span className="text-sm md:text-base text-zinc-900 font-normal">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Animated cards */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Layered background rectangles */}
            <div className="absolute -left-4 top-6 w-full h-full rounded-2xl bg-white shadow-md opacity-80 z-0" style={{filter:'blur(1px)'}}></div>
            <div className="absolute left-0 top-0 w-full h-full rounded-2xl bg-white shadow-lg z-0"></div>
            <div className="relative rounded-2xl border border-zinc-100 bg-white shadow-md pt-8 pb-4 px-4 md:px-8 z-10" style={{minHeight:380}}>
              {/* Browser window dots inside card */}
              <div className="absolute left-6 top-4 flex gap-2">
                <span className="w-3 h-3 rounded-full" style={{background:'#E5E5E5'}}></span>
                <span className="w-3 h-3 rounded-full" style={{background:'#E5E5E5'}}></span>
                <span className="w-3 h-3 rounded-full" style={{background:'#E5E5E5'}}></span>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className={
                      `flex items-center justify-between rounded-xl border transition-all cursor-pointer p-6 group ` +
                      `border-transparent bg-[#F5F5F580] hover:border-[#F97015] hover:bg-[#F970150D]`
                    }
                    style={{}}
                  >
                    <div>
                      <div className={
                        `text-sm font-medium mb-1 text-zinc-400 group-hover:text-[#F97015]`
                      }>{card.type}</div>
                        <div className="text-xl font-medium text-zinc-900">{card.title}</div>
                    </div>
                    <span className={
                      `flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-[#F97015]`
                    }>
                      <Image src="/save.png" alt="save icon" width={18} height={18} className="transition group-hover:invert group-hover:brightness-0" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
