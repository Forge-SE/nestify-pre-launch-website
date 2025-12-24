"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const features = [
  {
    icon: "/publish.png",
    text: "Publish announcements, events, and programs",
  },
  {
    icon: "/target.png",
    text: "Target updates by department, level, or interest",
  },
  {
    icon: "/increase.png",
    text: "Increase turnout and engagement",
  },
  {
    icon: "/track.png",
    text: "Track visibility and student interactions",
  },
];


export default function ForUniversitiesSection() {
  const [hovered, setHovered] = useState(-1);
  // Animated counters
  const [reach, setReach] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [posts, setPosts] = useState(0);

  useEffect(() => {
    let r = 0, e = 0, p = 0;
    const rTarget = 12847, eTarget = 89, pTarget = 24;
    const steps = 60;
    const rStep = Math.ceil(rTarget / steps);
    const eStep = Math.ceil(eTarget / steps);
    const pStep = Math.ceil(pTarget / steps);
    const interval = setInterval(() => {
      r = Math.min(r + rStep, rTarget);
      e = Math.min(e + eStep, eTarget);
      p = Math.min(p + pStep, pTarget);
      setReach(r);
      setEngagement(e);
      setPosts(p);
      if (r === rTarget && e === eTarget && p === pTarget) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full flex flex-col items-center pt-12 pb-8 px-4 bg-[#181818]">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
        {/* Left: Rectangle with animated stats */}
        <div className="flex-1 w-full max-w-md flex justify-center items-center mb-10 md:mb-0">
          <div className="relative w-full max-w-sm h-[240px] flex items-center justify-center">
            {/* Top solid rectangle, slightly smaller and offset to reveal border radius */}
            <div className="absolute -left-3 -top-3 w-full h-full rounded-3xl border border-zinc-700" style={{zIndex: 2, background: '#FFFFFF12'}}></div>
            {/* Main border-only rectangle (empty, for border effect) */}
            <div className="relative w-full h-full rounded-3xl border border-zinc-600 bg-transparent" style={{zIndex: 3}}>
              {/* Content absolutely positioned to match the new rectangle's offset and size */}
              <div className="absolute left-3 top-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-3xl flex flex-col justify-center items-center px-4" style={{zIndex: 4}}>
                {/* Animated Counters */}
                <div className="flex justify-between w-full max-w-xl mx-auto mb-4 mt-6">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold tracking-tight text-white">{reach.toLocaleString()}</span>
                    <span className="text-xs font-medium mt-1" style={{color: '#FFFFFF33'}}>Total Reach</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold tracking-tight text-white">{engagement}%</span>
                    <span className="text-xs font-medium mt-1" style={{color: '#FFFFFF33'}}>Engagement</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold tracking-tight text-white">{posts}</span>
                    <span className="text-xs font-medium mt-1" style={{color: '#FFFFFF33'}}>Active Posts</span>
                  </div>
                </div>
                {/* Bar Chart */}
                <div className="flex items-end gap-3 h-16 w-full max-w-xl mx-auto mb-0 mt-2 justify-between" style={{alignSelf: 'center'}}>
                  {[32, 56, 32, 72, 48, 64, 56].map((h, i) => (
                    <div
                      key={i}
                      className={`rounded-lg transition-all`}
                      style={{
                        height: h,
                        width: 36,
                        opacity: i === 3 ? 1 : 0.85,
                        background: i === 3 ? '#F97015' : '#FFFFFF33'
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-center text-zinc-400 text-xs mt-1">Weekly engagement</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Headline and features */}
        <div className="flex-1 w-full max-w-md flex flex-col items-start gap-4">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-2">
            <span className="h-0.5 w-8 rounded-full bg-[#F97015]"></span>
            <span className="uppercase tracking-wider text-xs font-semibold text-[#F97015]" style={{letterSpacing:'0.08em'}}>For Universities</span>
          </div>
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-1 text-left">Campus communication,<br />reimagined</h2>
          {/* Subheading */}
          <p className="text-xl text-zinc-400 mb-2 text-left">Lead and communicate at a whole new level.</p>
          {/* Feature List */}
          <div className="flex flex-col gap-3 w-full">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex items-center justify-center">
                  <Image src={f.icon} alt="feature icon" width={22} height={22} className="brightness-0 invert" />
                </span>
                <span className="text-base text-zinc-100 font-normal">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
