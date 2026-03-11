import { AssetStatus, StatColor } from "@/types";

export const STATUS_STYLES: Record<AssetStatus, {
  bg: string;
  text: string;
  border: string;
  dot: string;
}> = {
  Good: {
    bg: "bg-system-green-lighter",
    text: "text-system-green-darker",
    border: "border-system-green-base",
    dot: "bg-system-green-base",
  },
  Fair: {
    bg: "bg-system-yellow-lighter",
    text: "text-system-yellow-darker",
    border: "border-system-yellow-base",
    dot: "bg-system-yellow-base",
  },
  Poor: {
    bg: "bg-system-red-lighter",
    text: "text-system-red-darker",
    border: "border-system-red-base",
    dot: "bg-system-red-base",
  },
};

export const STAT_COLOR_STYLES: Record<StatColor, {
  iconBg: string;
  iconColor: string;
  valueColor: string;
}> = {
  blue: {
    iconBg: "bg-primary-lighter",
    iconColor: "text-primary-base",
    valueColor: "text-primary-base dark:text-primary-light",
  },
  yellow: {
    iconBg: "bg-system-yellow-lighter",
    iconColor: "text-system-yellow-base",
    valueColor: "text-system-yellow-base dark:text-yellow-300",
  },
  green: {
    iconBg: "bg-system-green-lighter",
    iconColor: "text-system-green-base",
    valueColor: "text-system-green-base dark:text-green-300",
  },
  red: {
    iconBg: "bg-system-red-lighter",
    iconColor: "text-system-red-base",
    valueColor: "text-system-red-base dark:text-red-400",
  },
};

export const SIDEBAR_WIDTH = {
  expanded: "w-52",
  collapsed: "w-16",
};