import clsx from "clsx";
import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
      className={clsx(
        "rounded-3xl border border-[#1E293B] bg-[#0C1224] p-6 shadow-lg transition-all duration-300 hover:border-[#4F7CFF]/60 hover:shadow-[0_0_30px_rgba(79,124,255,0.18)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}