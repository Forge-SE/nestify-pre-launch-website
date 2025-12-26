"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import StatCounter from "@/components/core/StatsCounter";
import { headingVariants, subtextVariants, buttonVariants } from "@/components/animations/Animation";

const stats = [
  { label: "Universities", value: 3, suffix: "+" },
  {
    label: "Students Waiting",
    value: 1000,
    suffix: "+",
    format: (v: number) => (v < 1000 ? v.toString() : "1K")
  },
  { label: "Early Partners", value: 50, suffix: "+" },
];



export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, [0, 1], [-20, 20]);
  const y = useTransform(mouseY, [0, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section className="flex flex-col items-center w-full pt-16 pb-12 relative" onMouseMove={handleMouseMove}>
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{ x, y }}
      >
        <div className="w-150 h-150 rounded-full opacity-70" style={{ background: 'radial-gradient(circle, #FFF4ED 0%, #fff 80%)' }} />
      </motion.div>
      <motion.div 
        className="mb-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white border border-zinc-200 text-[15px] font-normal text-zinc-700 leading-[22px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97015] opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97015]"></span>
          </span>
          Launching soon
        </span>
      </motion.div>
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-center text-zinc-900 leading-tight relative z-10"
        initial={headingVariants.hidden()}
        animate={headingVariants.visible(0.1)}
      >
        Your campus.<br />
        <span className="text-zinc-400 font-semibold">Your opportunities.</span>
      </motion.h1>
      <motion.p 
        className="mt-6 text-base md:text-lg text-center text-zinc-400 md:text-zinc-500 max-w-xs md:max-w-xl font-normal md:font-normal mx-auto relative z-10"
        initial={subtextVariants.hidden()}
        animate={subtextVariants.visible(0.2)}
      >
        Internships, jobs, scholarships, and campus updates — all in one place. Built by students, for students.
      </motion.p>
      <motion.div 
        className="mt-8 flex flex-col items-center gap-6 md:hidden relative z-10"
        initial={buttonVariants.hidden()}
        animate={buttonVariants.visible(0.3)}
      >
        <Link href="/waitlist" className="flex items-center gap-2 bg-zinc-900 text-white rounded-full px-8 py-3 font-medium text-lg hover:bg-zinc-800 transition">
          Join the Waitlist
          <span className="inline-block text-xl">→</span>
        </Link>
        <Link href="#problem" className="flex items-center gap-2 text-zinc-900 font-medium text-lg transition">
          Learn more
        </Link>
      </motion.div>
      <motion.div 
        className="mt-8 hidden md:flex gap-6 items-center relative z-10"
        initial={buttonVariants.hidden()}
        animate={buttonVariants.visible(0.3)}
      >
        <Link href="/waitlist" className="flex justify-center items-center gap-2 bg-zinc-900 text-white rounded-full px-8 py-3 font-medium text-base hover:bg-zinc-800 transition">
          Join the Waitlist →
        </Link>
        <Link href="#problem" className="flex items-center gap-2 text-zinc-900 font-medium text-base transition hover:bg-gray-200 px-8 py-3 rounded-full">
          Learn more
        </Link>
      </motion.div>
      <motion.div 
        className="w-full max-w-4xl mt-10 md:mt-16 border-t border-zinc-200 pt-8 md:pt-12 flex flex-row justify-center items-center gap-6 md:gap-0 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex-1 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-zinc-900">
              <StatCounter end={stat.value} format={stat.format} suffix={stat.suffix} />
            </div>
            <div className="mt-1 md:mt-2 text-zinc-500 text-xs md:text-base text-center">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
