import { LogOut } from "lucide-react";

export default function SidebarProfile() {
  return (
    <div className="border-t border-slate-800 pt-5">
      <div className="flex items-center gap-3">
        <img
          src="https://ui-avatars.com/api/?name=Budi+Santoso&background=6366f1&color=fff"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h3 className="text-white text-sm font-semibold">
            Budi Santoso
          </h3>

          <p className="text-slate-400 text-xs">
            budi.santoso@saasflow.com
          </p>
        </div>
      </div>

      <button className="mt-5 flex items-center justify-center gap-2 w-full rounded-xl border border-slate-700 py-3 text-slate-300 hover:bg-[#181B3B] transition">
        <LogOut size={18} />
        Keluar (Sign Out)
      </button>
    </div>
  );
}