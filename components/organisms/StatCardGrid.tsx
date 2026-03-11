import { StatCardData } from "@/types";
import StatCard from "@/components/molecules/StatCard";

export default function StatCardGrid({ stats }: { stats: StatCardData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
      {stats.map((stat) => (
        <StatCard key={stat.id} data={stat} />
      ))}
    </div>
  );
}