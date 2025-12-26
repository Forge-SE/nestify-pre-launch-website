"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { headingVariants, subtextVariants, buttonVariants, listVariants } from "@/components/animations/Animation";

const solutions = [
  {
    icon: "/students.png",
    title: "Students",
    desc: "Discover tailored opportunities matched to your interests and career goals.",
    href: "#students"
  },
  {
    icon: "/universities.png",
    title: "Universities",
    desc: "Broadcast targeted announcements and increase student engagement.",
    href: "#universities"
  },
  {
    icon: "/companies.png",
    title: "Companies",
    desc: "Post opportunities and connect directly with top student talent.",
    href: "#companies"
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
        {/* Left: Headline and description */}
        <div className="flex-1 w-full max-w-md">
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-0.5 w-8 rounded-full bg-zinc-200"></span>
            <span className="uppercase tracking-[0.08em] text-xs font-semibold text-zinc-400">The Solution</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
            initial={headingVariants.hidden()}
            whileInView={headingVariants.visible(0.1)}
            viewport={{ once: true }}
          >
            One platform<br />for everyone
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-500 mb-8"
            initial={subtextVariants.hidden()}
            whileInView={subtextVariants.visible(0.2)}
            viewport={{ once: true }}
          >
            Nestify brings students, universities, and companies together on a single, unified platform.
          </motion.p>
          <motion.div
            initial={buttonVariants.hidden()}
            whileInView={buttonVariants.visible(0.3)}
            viewport={{ once: true }}
          >
            <Link href="/waitlist" className="w-full md:w-fit flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-zinc-200 text-zinc-900 font-medium bg-white hover:bg-zinc-50 transition">
              Get Early Access <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
        {/* Right: Options */}
        <div className="flex-1 w-full flex flex-col gap-6">
          {solutions.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="flex items-start gap-4 p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={listVariants}
              custom={i}
            >
              <Image src={item.icon} alt={item.title + ' icon'} width={40} height={40} className="mt-1" />
              <div>
                <div className="text-lg font-semibold text-zinc-900">{item.title}</div>
                <div className="text-zinc-500 mt-1 text-base">{item.desc}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
