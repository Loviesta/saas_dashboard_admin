import Card from "../ui/Card";
import { motion } from "framer-motion";

const activities = [
  {
    name: "Enjelia Putri",
    action: "Completed payment",
    time: "2 minutes ago",
    color: "bg-green-500",
  },
  {
    name: "Michael Jail",
    action: "New subscription",
    time: "8 minutes ago",
    color: "bg-purple-500",
  },
  {
    name: "Olivia Sudarsono",
    action: "Profile updated",
    time: "15 minutes ago",
    color: "bg-blue-500",
  },
  {
    name: "James Born",
    action: "Invoice paid",
    time: "1 hour ago",
    color: "bg-yellow-500",
  },
];

export default function ActivityList() {
  return (
    <Card className="h-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Activity
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Today's Activity
          </h2>
        </div>

        <button className="text-sm text-[#4F7CFF] hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-[#27324A] hover:bg-[#111827]"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${item.color}`}
            >
              {item.name.charAt(0)}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-white">
                {item.name}
              </h3>

              <p className="text-sm text-slate-400">
                {item.action}
              </p>
            </div>

            <span className="text-xs text-slate-500 whitespace-nowrap">
              {item.time}
            </span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}