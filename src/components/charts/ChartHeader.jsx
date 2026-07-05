export default function ChartHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">

      <div>
        <h2 className="text-xl font-semibold text-white">
          Revenue Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Revenue performance over the last 7 months
        </p>
      </div>

      <div className="flex items-center gap-2">

        <button className="rounded-lg bg-[#4F7CFF] px-4 py-2 text-sm font-medium text-white">
          7D
        </button>

        <button className="rounded-lg bg-[#171D33] px-4 py-2 text-sm text-slate-400 hover:bg-[#222B45]">
          30D
        </button>

        <button className="rounded-lg bg-[#171D33] px-4 py-2 text-sm text-slate-400 hover:bg-[#222B45]">
          90D
        </button>

        <button className="rounded-lg bg-[#171D33] px-4 py-2 text-sm text-slate-400 hover:bg-[#222B45]">
          1Y
        </button>

      </div>

    </div>
  );
}