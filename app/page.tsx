import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardNavbar from "@/components/organisms/DashboardNavbar";
import StatCardGrid from "@/components/organisms/StatCardGrid";
import AssetTable from "@/components/organisms/AssetTable";
import MapSectionWrapper from "@/components/organisms/MapSectionWrapper";
import { stats, assets } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardNavbar
        title="Dashboard"
        subtitle="Road & Bridge Infrastructure Visualization"
      />
      <StatCardGrid stats={stats} />
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        <div className="w-full lg:w-1/2 flex flex-col">
          <MapSectionWrapper />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <AssetTable
            title="Recent Infrastructure Assets"
            assets={assets}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}