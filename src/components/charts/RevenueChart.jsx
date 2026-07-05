import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Card from "../ui/Card";

const data = [
  { month: "Jan", revenue: 2200 },
  { month: "Feb", revenue: 2800 },
  { month: "Mar", revenue: 3400 },
  { month: "Apr", revenue: 3100 },
  { month: "May", revenue: 4200 },
  { month: "Jun", revenue: 4800 },
  { month: "Jul", revenue: 5300 },
  { month: "Aug", revenue: 6100 },
  { month: "Sep", revenue: 5900 },
  { month: "Oct", revenue: 6700 },
  { month: "Nov", revenue: 7200 },
  { month: "Dec", revenue: 8100 },
];

export default function RevenueChart() {
  return (
    <Card className="h-full">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-sm text-slate-400">
            Revenue Statistics
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            $128,430
          </h2>

          <div className="mt-2 flex items-center gap-2">

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
              +18.4%
            </span>

            <span className="text-sm text-slate-500">
              from last month
            </span>

          </div>

        </div>

        <button className="rounded-xl border border-[#27324A] bg-[#171D33] px-4 py-2 text-sm text-slate-300 transition hover:border-[#4F7CFF] hover:text-white">
          This Month
        </button>

      </div>

      {/* Chart */}
      <div className="h-[320px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="#1E293B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="#64748B"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748B"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0C1224",
                border: "1px solid #27324A",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4F7CFF"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#4F7CFF",
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
}