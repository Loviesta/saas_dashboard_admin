import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Card from "../ui/Card";

export default function StatCard({
  title,
  value,
  growth,
  icon,
  progress,
  positive = true,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card className="group transition-all duration-300 hover:border-[#4F7CFF]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-400">
              {title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {value}
            </h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171D33] text-[#4F7CFF] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            {icon}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          {positive ? (
            <ArrowUpRight
              size={18}
              className="text-green-400"
            />
          ) : (
            <ArrowDownRight
              size={18}
              className="text-red-400"
            />
          )}

          <span
            className={`text-sm font-medium ${
              positive
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {growth}
          </span>

          <span className="text-sm text-slate-500">
            compared to last month
          </span>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#1A2238]">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className={`h-full rounded-full ${
              positive
                ? "bg-gradient-to-r from-[#6D5DF6] to-[#4F7CFF]"
                : "bg-gradient-to-r from-red-500 to-orange-400"
            }`}
          />
        </div>
      </Card>
    </motion.div>
  );
}