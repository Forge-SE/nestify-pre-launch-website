"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import StatCounter from "@/components/core/StatsCounter";
import { headingVariants, subtextVariants, buttonVariants } from "@/components/animations/Animation";
import Image from "next/image";

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
    <section className="flex min-h-[calc(100vh-82px)] flex-col bg-white pt-14 md:pt-24">
      <div className="flex flex-col items-center gap-4 px-4 text-center">
        <motion.h1
          className="pped w-3/4 text-4xl font-medium leading-tight text-zinc-900 md:w-3/5 md:text-6xl"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Your campus.Your opportunities.
        </motion.h1>
        <motion.p
          className="text-lg font-medium text-zinc-700 md:text-base"
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
        >
          The ultimate platform connecting students, universities, and companies for unparalleled opportunities.
        </motion.p>

        <motion.div variants={buttonVariants} initial="hidden" animate="visible">
          <Link
            href="/waitlist"
            className="group inline-flex overflow-hidden rounded-xl bg-[#221e1b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-900 hover:text-white"
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
        </motion.div>
      </div>

      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 w-full px-4 md:mt-20 md:px-10"
      >
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[32px]">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Image"
            width={1920}
            height={820}
            className="h-[260px] w-full object-cover md:h-[420px]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
