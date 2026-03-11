"use client";

import { Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function DashboardNavbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-h2 font-bold text-neutral-black-darker dark:text-white">{title}</h2>
        {subtitle && (
          <span className="text-body2 text-neutral-black-base dark:text-slate-400 hidden sm:block">{subtitle}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-neutral-black-lighter dark:hover:bg-slate-800 transition-colors"
        >
          {darkMode
            ? <Sun size={18} className="text-slate-400" />
            : <Moon size={18} className="text-neutral-black-base" />
          }
        </button>
        <button className="p-2 rounded-lg hover:bg-neutral-black-lighter dark:hover:bg-slate-800 transition-colors">
          <Globe size={18} className="text-neutral-black-base dark:text-slate-400" />
        </button>
      </div>
    </div>
  );
}