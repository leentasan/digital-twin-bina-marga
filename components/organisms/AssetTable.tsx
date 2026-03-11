import { Asset } from "@/types";
import AssetListItem from "@/components/molecules/AssetListItem";

interface AssetTableProps {
  assets: Asset[];
  title: string;
}

export default function AssetTable({ assets, title }: AssetTableProps) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:border dark:border-slate-700 rounded-xl shadow-sm flex flex-col p-5" style={{ height: "calc(100vh - 320px)" }}>
      <h5 className="text-h5 font-semibold text-neutral-black-darker dark:text-white mb-3 flex-shrink-0">{title}</h5>
        <div className="grid grid-cols-12 pb-2 border-b border-neutral-black-light dark:border-slate-700 flex-shrink-0">
            <span className="col-span-6 text-caption font-medium text-neutral-black-base dark:text-slate-400 uppercase tracking-wide">Name</span>
            <span className="col-span-3 text-caption font-medium text-neutral-black-base dark:text-slate-400 uppercase tracking-wide">Type</span>
            <span className="col-span-3 text-caption font-medium text-neutral-black-base dark:text-slate-400 uppercase tracking-wide text-right">Status</span>
        </div>
      <div className="flex-1 overflow-y-auto">
        {assets.map((asset) => (
          <AssetListItem key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}