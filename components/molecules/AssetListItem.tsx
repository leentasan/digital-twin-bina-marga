import { Asset } from "@/types";
import StatusBadge from "@/components/atoms/StatusBadge";
import TypeTag from "@/components/atoms/TypeTag";

export default function AssetListItem({ asset }: { asset: Asset }) {
  return (
    <div className="grid grid-cols-12 items-center py-4 border-b border-neutral-black-light last:border-0">
      <div className="col-span-6 flex flex-col gap-1">
        <span className="text-body2 font-medium text-neutral-black-darker dark:text-white">{asset.name}</span>
        <span className="text-caption text-neutral-black-base dark:text-slate-400">{asset.location}</span>
      </div>
      <div className="col-span-3 flex justify-center">
        <TypeTag type={asset.type} />
      </div>
      <div className="col-span-3 flex justify-end">
        <StatusBadge status={asset.status} />
      </div>
    </div>
  );
}