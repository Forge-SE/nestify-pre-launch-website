"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowTurnUpLeftIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

type Step = "name" | "email" | "submitting" | "success";

export default function WaitlistPage() {
  const [step, setStep] = useState<Step>("name");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="min-h-[80vh] bg-white flex flex-col">
      
      <header className=" py-6 px-6 md:px-20">
         <div className='p-2 bg-gray-200 rounded-sm flex justify-center items-center w-1/16'>
          <Link href='/' className='text-gray-700 hover:text-gray-900'>
          <ArrowTurnUpLeftIcon className='w-5 h-5'/>
          </Link>
        </div>
      </header>

      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            {/* Step 1: Name */}
            {step === "name" && (
              <motion.form
                key="name"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onSubmit={handleNameSubmit}
                className="flex flex-col"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-[#F97015] font-medium mb-4"
                >
                  Step 1 of 2
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
                >
                  What&apos;s your name?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-zinc-500 mb-8"
                >
                  We&apos;d love to know who&apos;s joining the waitlist.
                </motion.p>
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-0 py-4 text-2xl md:text-3xl font-medium text-zinc-900 placeholder-zinc-300 border-b-2 border-zinc-200 focus:border-[#F97015] focus:outline-none transition bg-transparent"
                  autoFocus
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 mt-4 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-10 flex items-center gap-4"
                >
                  <button
                    type="submit"
                    className="bg-zinc-900 text-white rounded-full px-8 py-3 font-medium text-base hover:bg-zinc-800 transition flex items-center gap-2"
                  >
                    Continue
                    <span>→</span>
                  </button>
                  <span className="text-sm text-zinc-400">press Enter ↵</span>
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onSubmit={handleEmailSubmit}
                className="flex flex-col"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-[#F97015] font-medium mb-4"
                >
                  Step 2 of 2
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
                >
                  Nice to meet you, {fullName.split(" ")[0]}! 👋
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-zinc-500 mb-8"
                >
                  Where should we send your early access invite?
                </motion.p>
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-4 text-2xl md:text-3xl font-medium text-zinc-900 placeholder-zinc-300 border-b-2 border-zinc-200 focus:border-[#F97015] focus:outline-none transition bg-transparent"
                  autoFocus
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 mt-4 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-10 flex items-center gap-4"
                >
                  <button
                    type="button"
                    onClick={() => setStep("name")}
                    className="text-zinc-500 hover:text-zinc-900 transition px-4 py-4"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-zinc-900 text-white rounded-full px-8 py-3 font-medium text-base hover:bg-zinc-800 transition flex items-center gap-2"
                  >
                    Join Waitlist
                    <span>→</span>
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="w-12 h-12 border-4 border-zinc-200 border-t-[#F97015] rounded-full animate-spin mb-6"></div>
                <p className="text-zinc-500 text-lg">Joining the waitlist...</p>
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8"
                >
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
                >
                  You&apos;re on the list! 🎉
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-zinc-500 mb-8 max-w-md"
                >
                  Thanks for joining, {fullName.split(" ")[0]}! We&apos;ve sent a confirmation email to <span className="font-medium text-zinc-900">{email}</span>. Keep an eye on your inbox!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/"
                    className="bg-zinc-900 text-white rounded-full px-8 py-4 font-medium text-base hover:bg-zinc-800 transition inline-flex items-center gap-2"
                  >
                    Back to Home
                    <span>→</span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Progress indicator */}
      {(step === "name" || step === "email") && (
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-zinc-100">
          <motion.div
            className="h-full bg-[#F97015]"
            initial={{ width: "0%" }}
            animate={{ width: step === "name" ? "50%" : "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
}
