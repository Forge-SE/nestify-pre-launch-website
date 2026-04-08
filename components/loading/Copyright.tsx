import { motion, type Variants } from "framer-motion";

export function Copyright() {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="mt-2"
    >
      <p className="text-white text-sm font-normal uppercase" style={{ fontFamily: "Chivo Mono" }}>
        © {currentYear} Nestify. All rights reserved.
      </p>
    </motion.div>
  );
}
