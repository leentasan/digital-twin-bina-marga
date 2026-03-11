"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import NavItem from "@/components/atoms/NavItem";
import { navItems } from "@/data/mockData";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`relative flex flex-col bg-white dark:bg-slate-900 border-r border-neutral-black-light dark:border-slate-700 transition-all duration-300 h-screen ${collapsed ? "w-16" : "w-52"}`}>
      <div className={`flex items-center gap-3 px-4 py-5 ${collapsed ? "justify-center" : ""}`}>
        <Image src="/logo.png" alt="Digital Twin Bina Marga" width={36} height={36} className="flex-shrink-0" />
        {!collapsed && (
          <span className="text-body2 font-bold text-neutral-black-darker dark:text-white leading-tight">
            Digital Twin<br />Bina Marga
          </span>
        )}
      </div>

      <nav className="flex flex-col gap-1 px-3 flex-1">
        {navItems.map((item) => (
          <NavItem key={item.href} item={item} collapsed={collapsed} />
        ))}
      </nav>

      <div className="flex flex-col gap-1 px-3 pb-4 border-t border-neutral-black-light dark:border-slate-700 pt-3">
        <button className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-neutral-black-lighter dark:hover:bg-slate-800 ${collapsed ? "justify-center" : ""}`}>
          <Settings size={18} className="text-neutral-black-dark dark:text-white" />
          {!collapsed && <span className="text-body2 font-medium text-neutral-black-dark dark:text-white">Settings</span>}
        </button>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden lg:flex absolute -right-3 top-16 bg-white dark:bg-slate-900 border border-neutral-black-light dark:border-slate-700 rounded-full p-0.5 shadow-sm hover:shadow-md transition-shadow items-center justify-center"
      >
        {collapsed
          ? <ChevronRight size={14} className="text-neutral-black-base" />
          : <ChevronLeft size={14} className="text-neutral-black-base" />
        }
      </button>
    </aside>
  );
}