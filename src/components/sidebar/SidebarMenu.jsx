import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  ChartColumn,
  Settings,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard", 
    icon: LayoutGrid,
  },
  {
    name: "Users",
    path: "/users",
    icon: Users,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: ChartColumn,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function SidebarMenu() {
  return (
    <nav className="flex flex-col gap-2 mt-6">
      {menus.map((menu) => {
        const Icon = menu.icon;

        return (
          <NavLink
            key={menu.name}
            to={menu.path}
            
            end={menu.path === "/dashboard"} 
          >
            {({ isActive }) => (
              <div
                className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#181B3B]"
                    : "hover:bg-[#11172A]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    className={
                      isActive ? "text-[#7C5CFF]" : "text-slate-400"
                    }
                  />

                  <span
                    className={`font-medium ${
                      isActive
                        ? "text-[#4F7CFF]"
                        : "text-slate-400"
                    }`}
                  >
                    {menu.name}
                  </span>
                </div>

                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-[#7C5CFF]" />
                )}
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}