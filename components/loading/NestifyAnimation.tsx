import { motion, type Variants } from "framer-motion";

export function NestifyAnimation() {
  const text = "Nestify";
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateZ: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      rotateZ: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex items-end justify-between w-full px-4 md:px-8 leading-none pointer-events-none select-none"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterVariants}
          className="font-normal inline-block"
          style={{
            fontFamily: "var(--font-chivo-mono), Chivo Mono, monospace",
            fontSize: "clamp(6rem, 23vw, 40rem)",
            lineHeight: "0.8",
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.575)",
            color: "transparent",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
