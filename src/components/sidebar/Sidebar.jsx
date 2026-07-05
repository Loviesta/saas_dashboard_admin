import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    path: "/users",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-xl bg-[#171D33] p-3 text-white shadow-lg lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-[#1E293B] bg-[#060B1D] px-6 py-8 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0`}
      >
        {/* Close Button Mobile */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-white lg:hidden"
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            Core<span className="text-[#4F7CFF]">Panel</span>
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            SaaS Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-12 flex-1 space-y-3">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <NavLink
                key={menu.title}
                to={menu.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#6D5DF6] to-[#4F7CFF] text-white shadow-lg"
                      : "text-slate-400 hover:bg-[#171D33] hover:text-white"
                  }`
                }
              >
                <Icon size={22} />
                <span>{menu.title}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Profile */}
        <div className="border-t border-[#1E293B] pt-6">
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=Budi+Santoso&background=4F7CFF&color=fff&bold=true"
              alt="Profile"
              className="h-12 w-12 rounded-full border-2 border-[#4F7CFF] object-cover"
            />

            <div className="overflow-hidden">
              <h3 className="font-semibold text-white truncate">
                Budi Santoso
              </h3>

              <p className="text-sm text-slate-400">
                Administrator
              </p>
            </div>
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171D33] py-3 text-slate-300 transition-all duration-300 hover:bg-red-500 hover:text-white">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}