"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowTurnUpLeftIcon } from '@heroicons/react/24/solid';
import { InteractiveGrid } from "@/components/background/InteractiveGrid";
import confetti from "canvas-confetti";

type Step = "name" | "email" | "submitting" | "success";

export default function WaitlistPage() {
  const [step, setStep] = useState<Step>("name");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (step === "success") {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 2) {
      setError("Please enter your full name");
      return;
    }
    setError("");
    setStep("email");
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setStep("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStep("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist");
      setStep("email");
    }
  };

  const slideVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <>
      <InteractiveGrid interactive={false} />
      <div className="min-h-screen flex flex-col relative z-10">
        <header className="py-8 px-6 md:px-20">
          <Link 
            href='/' 
            className='p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex justify-center items-center w-fit hover:bg-white/10 transition-all duration-300 group'
          >
            <ArrowTurnUpLeftIcon className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'/>
          </Link>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              {/* Step 1: Name */}
              {step === "name" && (
                <motion.form
                  key="name"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  onSubmit={handleNameSubmit}
                  className="flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <span className="w-8 h-px bg-orange-500/50" />
                    <p className="text-sm text-orange-500 sora font-medium uppercase tracking-widest">
                      Step 01
                    </p>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-4xl md:text-6xl text-white hemming mb-6"
                  >
                    What&apos;s your name?
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg sora font-light mb-12"
                  >
                    We&apos;d love to know who&apos;s joining the waitlist.
                  </motion.p>
                  
                  <div className="relative group">
                    <motion.input
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      type="text"
                      placeholder="Type your full name here..."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-0 py-6 text-2xl md:text-4xl text-white placeholder-white/10 border-b border-white/10 focus:border-orange-500 focus:outline-none transition-all duration-500 bg-transparent sora font-light"
                      autoFocus
                    />
                    <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-orange-500 to-transparent w-0 group-focus-within:w-full transition-all duration-700" />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 mt-6 sora text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {error}
                    </motion.p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 flex items-center gap-6"
                  >
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-full text-white bg-orange-500 sora text-xs flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300 gap-3 group"
                    >
                      Continue
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    <span className="text-[10px] text-white/20 sora uppercase tracking-tighter hidden md:block">
                      press <span className="text-white/40 font-bold">Enter ↵</span>
                    </span>
                  </motion.div>
                </motion.form>
              )}

              {/* Step 2: Email */}
              {step === "email" && (
                <motion.form
                  key="email"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <span className="w-8 h-px bg-orange-500/50" />
                    <p className="text-sm text-orange-500 sora font-medium uppercase tracking-widest">
                      Step 02
                    </p>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-4xl md:text-6xl text-white hemming mb-6"
                  >
                    Nice to meet you, {fullName.split(" ")[0]}!
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg sora font-light mb-12"
                  >
                    Where should we send your early access invite?
                  </motion.p>

                  <div className="relative group">
                    <motion.input
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-0 py-6 text-2xl md:text-4xl text-white placeholder-white/10 border-b border-white/10 focus:border-orange-500 focus:outline-none transition-all duration-500 bg-transparent sora font-light"
                      autoFocus
                    />
                    <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-orange-500 to-transparent w-0 group-focus-within:w-full transition-all duration-700" />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 mt-6 sora text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {error}
                    </motion.p>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 flex items-center gap-6"
                  >
                    <button
                      type="button"
                      onClick={() => setStep("name")}
                      className="text-gray-500 hover:text-white transition-colors sora text-xs"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-full text-white bg-orange-500 sora text-xs flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300 gap-3 group"
                    >
                      Join Waitlist
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </motion.div>
                </motion.form>
              )}

              {/* Submitting */}
              {step === "submitting" && (
                <motion.div
                  key="submitting"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col items-center justify-center py-20"
                >
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
                    <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin" />
                  </div>
                  <p className="text-gray-400 text-xl sora font-light animate-pulse">Securing your spot...</p>
                </motion.div>
              )}

              {/* Success */}
              {step === "success" && (
                <motion.div
                  key="success"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", damping: 12 }}
                    className="w-24 h-24 bg-orange-500/10 border border-orange-500/20 rounded-3xl flex items-center justify-center mb-10 rotate-12"
                  >
                    <svg className="w-12 h-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl text-white hemming mb-6"
                  >
                    You&apos;re on the list!
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg sora font-light mb-12 max-w-md"
                  >
                    Thanks for joining, {fullName.split(" ")[0]}! We&apos;ve sent a confirmation to <span className="text-orange-500 font-medium">{email}</span>.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href="/"
                      className="px-4 py-2 rounded-full bg-white text-black sora text-xs font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 inline-flex items-center gap-3 group"
                    >
                      Return Home
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Progress indicator */}
        {(step === "name" || step === "email") && (
          <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_20px_rgba(249,112,21,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: step === "name" ? "50%" : "100%" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>
        )}
      </div>
    </>
  );
}
