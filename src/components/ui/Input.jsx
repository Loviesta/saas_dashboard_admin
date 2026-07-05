import { Search } from "lucide-react";

export default function Input({
  placeholder = "Search...",
}) {
  return (
    <div className="relative w-full">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#27324A] bg-[#0C1224] py-3 pl-11 pr-20 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#4F7CFF]"
      />

      <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-[#171D33] px-2 py-1 text-xs text-slate-400">
        Ctrl K
      </span>

    </div>
  );
}