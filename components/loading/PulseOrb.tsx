import { motion } from "framer-motion";

export function PulseOrb() {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 rounded-full bg-blue-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
