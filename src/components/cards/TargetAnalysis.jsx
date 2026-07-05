import { motion } from "framer-motion";
import Card from "../ui/Card";

const targets = [
  {
    title: "Revenue",
    value: 82,
  },
  {
    title: "Customers",
    value: 94,
  },
  {
    title: "Conversion",
    value: 67,
  },
  {
    title: "Growth",
    value: 89,
  },
];

export default function TargetAnalysis() {
  return (
    <Card>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Performance
          </p>

          <h2 className="text-2xl font-bold text-white">
            Target Analysis
          </h2>
        </div>

        <button className="rounded-xl bg-[#171D33] px-4 py-2 text-sm text-slate-300 transition hover:bg-[#222B45]">
          Monthly
        </button>
      </div>

      <div className="space-y-7">
        {targets.map((item, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-white">
                {item.title}
              </span>

              <span className="text-sm font-semibold text-[#4F7CFF]">
                {item.value}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-[#1A2238]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                }}
                className="h-full rounded-full bg-gradient-to-r from-[#6D5DF6] to-[#4F7CFF]"
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}