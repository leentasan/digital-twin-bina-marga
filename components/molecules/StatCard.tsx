import { StatCardData } from "@/types";
import { STAT_COLOR_STYLES } from "@/constants";
import StatIcon from "@/components/atoms/StatIcon";

export default function StatCard({ data }: { data: StatCardData }) {
  const styles = STAT_COLOR_STYLES[data.color];
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-900 dark:border dark:border-slate-700 rounded-xl p-4 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-caption text-neutral-black-base dark:text-slate-300">{data.label}</span>
        <span className={`text-h4 lg:text-h3 font-bold ${styles.valueColor}`}>{data.value}</span>
      </div>
      <StatIcon icon={data.icon} color={data.color} />
    </div>
  );
}