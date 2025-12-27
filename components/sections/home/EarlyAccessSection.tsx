"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { headingVariants, subtextVariants, buttonVariants } from "@/components/animations/Animation";

export default function EarlyAccessSection() {
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
    <section id="waitlist" className="w-full flex flex-col items-center justify-center py-32 px-4 bg-white relative" onMouseMove={handleMouseMove}>
      <motion.div className="absolute inset-0 flex justify-center items-center pointer-events-none" style={{ x, y }}>
        <div className="w-150 h-150 rounded-full opacity-70" style={{ background: 'radial-gradient(circle, #FFF4ED 0%, #fff 80%)' }} />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center max-w-xl w-full mx-auto">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 bg-white text-base font-medium text-zinc-500">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97015] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F97015]"></span>
            </span>
            Early access opening soon
          </span>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-2 leading-tight"
          initial={headingVariants.hidden()}
          whileInView={headingVariants.visible(0.1)}
          viewport={{ once: true }}
        >
          Be part of the<br />
          <span className="text-zinc-400 font-extrabold">first wave</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-zinc-500 text-center mb-8 max-w-md mx-auto"
          initial={subtextVariants.hidden()}
          whileInView={subtextVariants.visible(0.2)}
          viewport={{ once: true }}
        >
          Nestify is preparing for launch. Early partners get first access to shape the future of student opportunities.
        </motion.p>
        <motion.div
          initial={buttonVariants.hidden()}
          whileInView={buttonVariants.visible(0.3)}
          viewport={{ once: true }}
        >
          <Link href="/waitlist">
            <button className="bg-zinc-900 text-white font-normal rounded-full px-6 py-3 text-base flex items-center gap-2 shadow hover:bg-zinc-800 transition mb-12">
              Join the Waitlist <span className="ml-2">→</span>
            </button>
          </Link>
        </motion.div>
       
        <hr className="w-full border-zinc-200 mb-6" />
        <motion.div
          className="text-xs text-zinc-400 text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Trusted by students from
        </motion.div>
        <motion.div 
          className="flex justify-center gap-8 text-zinc-400 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="overflow-hidden w-full relative" style={{ maxWidth: '900px' }}>
            <div className="flex gap-8 animate-scroll-universities whitespace-nowrap">
              {[
                'ug.png',
                'KNUST.png',
                'Academic.png',
                'Ashesi.png',
                'ATU.png',
                'UCC.png',
                'Central.png',
              ].concat([
                'ug.png',
                'KNUST.png',
                'Academic.png',
                'Ashesi.png',
                'ATU.png',
                'UCC.png',
                'Central.png',
              ]).map((img, idx) => (
                <img
                  key={idx}
                  src={`/${img}`}
                  alt={img.replace('.png', '')}
                  className="h-24 w-auto object-contain inline-block"
                  style={{ minWidth: '160px' }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
