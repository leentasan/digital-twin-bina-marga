"use client";

import { useState } from "react";
import Sidebar from "@/components/molecules/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar desktop */}
      <div className="hidden lg:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Sidebar mobile */}
      <div className={`fixed inset-y-0 left-0 z-30 lg:hidden transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar />
      </div>

      <main className="flex-1 overflow-y-auto bg-neutral-black-lighter dark:bg-slate-950">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 border-b border-neutral-black-light dark:border-slate-700 sticky top-0 z-10">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={20} className="text-neutral-black-dark dark:text-white" />
          </button>
          <span className="text-body2 font-bold text-neutral-black-darker dark:text-white">Digital Twin Bina Marga</span>
        </div>

        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}