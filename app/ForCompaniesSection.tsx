"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "/job.png",
    text: "Post internships, jobs, and training programs",
  },
  {
    icon: "/reach.png",
    text: "Reach students across multiple universities",
  },
  {
    icon: "/filter.png",
    text: "Filter by department, course, or skill",
  },
  {
    icon: "/students.png",
    text: "Build a pipeline of young talent",
  },
];

export default function ForCompaniesSection() {
  // Animated counters for values
  const [views, setViews] = useState(0);
  const [saves, setSaves] = useState(0);
  const [match, setMatch] = useState(0);

  useEffect(() => {
    let v = 0, s = 0, m = 0;
    const vTarget = 2100, sTarget = 342, mTarget = 94;
    const steps = 60;
    const vStep = Math.ceil(vTarget / steps);
    const sStep = Math.ceil(sTarget / steps);
    const mStep = Math.ceil(mTarget / steps);
    const interval = setInterval(() => {
      v = Math.min(v + vStep, vTarget);
      s = Math.min(s + sStep, sTarget);
      m = Math.min(m + mStep, mTarget);
      setViews(v);
      setSaves(s);
      setMatch(m);
      if (v === vTarget && s === sTarget && m === mTarget) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4 bg-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
        {/* Left: Headline and features */}
        <div className="flex-1 w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-8 rounded-full" style={{background:'#F97015'}}></span>
            <span className="uppercase tracking-wider text-xs font-semibold" style={{color:'#F97015',letterSpacing:'0.08em'}}>For Companies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Find talent faster
          </h2>
          <p className="text-xl text-zinc-500 mb-10">
            One platform. Real student reach. No noise.
          </p>
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex items-center justify-center">
                  <Image src={f.icon} alt="feature icon" width={24} height={24} />
                </span>
                <span className="text-base text-zinc-900 font-normal truncate">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Job card UI */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-xl">
            {/* Layered background rectangles */}
            <div className="absolute -left-4 top-6 w-full h-full rounded-2xl bg-white shadow-md opacity-80 z-0" style={{filter:'blur(1px)'}}></div>
            <div className="absolute left-0 top-0 w-full h-full rounded-2xl bg-white shadow-lg z-0"></div>
            <div className="relative rounded-2xl border border-zinc-100 bg-white shadow-md pt-8 pb-8 px-8 z-10" style={{minHeight:340}}>
              {/* Browser window dots inside card */}
              <div className="absolute left-8 top-4 flex gap-2">
                <span className="w-3 h-3 rounded-full" style={{background:'#E5E5E5'}}></span>
                <span className="w-3 h-3 rounded-full" style={{background:'#E5E5E5'}}></span>
                <span className="w-3 h-3 rounded-full" style={{background:'#E5E5E5'}}></span>
              </div>
              {/* Job Card Content */}
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-zinc-400 text-base font-medium mb-1">Open Position</div>
                    <div className="text-2xl font-semibold text-zinc-900">Software Engineering Intern</div>
                  </div>
                  <span className="bg-[#F970151A] text-[#F97015] text-sm font-semibold rounded-lg px-4 py-1">Active</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-zinc-100 text-zinc-500 rounded-full px-4 py-1 text-sm font-medium">Computer Science</span>
                  <span className="bg-zinc-100 text-zinc-500 rounded-full px-4 py-1 text-sm font-medium">Engineering</span>
                  <span className="bg-zinc-100 text-zinc-500 rounded-full px-4 py-1 text-sm font-medium">Data Science</span>
                </div>
                <div className="flex justify-between items-center border-t border-zinc-200 pt-4">
                  <div className="text-zinc-500 text-base">248 applications</div>
                  <div className="flex -space-x-2">
                    <Image src="/people.png" alt="people" width={88} height={44} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="flex flex-col items-center justify-center bg-zinc-50 rounded-xl py-4">
                    <span className="text-2xl font-bold text-zinc-900">{views >= 1000 ? (views/1000).toFixed(1) + 'K' : views}</span>
                    <span className="text-zinc-400 text-sm mt-1">Views</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-zinc-50 rounded-xl py-4">
                    <span className="text-2xl font-bold text-zinc-900">{saves}</span>
                    <span className="text-zinc-400 text-sm mt-1">Saves</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-zinc-50 rounded-xl py-4">
                    <span className="text-2xl font-bold text-zinc-900">{match}%</span>
                    <span className="text-zinc-400 text-sm mt-1">Match</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
