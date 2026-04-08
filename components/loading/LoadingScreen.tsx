"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import { NestifyAnimation } from "./NestifyAnimation";
import { BetaIndicator } from "./BetaIndicator";

interface LoadingScreenProps {
  children?: React.ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 bg-orange-500 z-50 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="absolute top-8 left-8"
          >
            <BetaIndicator />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.2 }}
            className="absolute bottom-0 translate-y-[20%] left-0 right-0 flex justify-center w-full"
          >
            <NestifyAnimation />
          </motion.div>
        </motion.div>
      )}

      {!isLoading && children && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
