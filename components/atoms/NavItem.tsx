"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemData } from "@/types";
import { LayoutDashboard, FolderOpen, Activity, BarChart2 } from "lucide-react";

const NAV_ICONS = {
  dashboard: LayoutDashboard,
  catalog: FolderOpen,
  monitoring: Activity,
  analytics: BarChart2,
};

interface NavItemProps {
  item: NavItemData;
  collapsed: boolean;
}

export default function NavItem({ item, collapsed }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = NAV_ICONS[item.icon];

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
        ${isActive
          ? "bg-primary-base text-white"
          : "text-neutral-black-dark dark:text-slate-300 hover:bg-neutral-black-lighter dark:hover:bg-slate-800"
        }
        ${collapsed ? "justify-center" : ""}
      `}
    >
      <Icon size={18} />
      {!collapsed && (
        <span className="text-body2 font-medium">{item.label}</span>
      )}
    </Link>
  );
}