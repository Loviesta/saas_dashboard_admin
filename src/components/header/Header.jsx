import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Avatar from "../ui/Avatar";

import {
  Bell,
  Settings,
  Moon,
} from "lucide-react";

export default function Header() {
  
  const location = useLocation();

  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/users":
        return "Users";
      case "/analytics":
        return "Analytics";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard"; 
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#1E293B] bg-[#060B1D]/90 backdrop-blur-md">

      <div className="flex flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

        {/* Left */}
        <div className="pl-14 lg:pl-0">

        
          <h1 className="text-3xl font-bold text-white">
            {getPageTitle()}
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Administrator Portal
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="w-full sm:w-80">
            <SearchBar />
          </div>

          <div className="flex items-center justify-end gap-3">

            <button className="rounded-xl bg-[#171D33] p-3 text-slate-400 transition-all duration-300 hover:bg-[#222B45] hover:text-white">
              <Bell size={20} />
            </button>

            <button className="rounded-xl bg-[#171D33] p-3 text-slate-400 transition-all duration-300 hover:bg-[#222B45] hover:text-white">
              <Settings size={20} />
            </button>

            <button className="rounded-xl bg-[#171D33] p-3 text-slate-400 transition-all duration-300 hover:bg-[#222B45] hover:text-white">
              <Moon size={20} />
            </button>

            <Avatar
              src="https://ui-avatars.com/api/?name=Budi+Santoso&background=4F7CFF&color=fff"
              size="md"
            />

          </div>

        </div>

      </div>

    </header>
  );
}