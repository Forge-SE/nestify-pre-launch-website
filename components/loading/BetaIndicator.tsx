import { motion, type Variants } from "framer-motion";

export function BetaIndicator() {
  const text = "We are currently in private beta";
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-wrap gap-1"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterVariants}
          className="text-6xl font-normal text-white inline-block"
          style={{ fontFamily: "Hemming" }}
        >
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
