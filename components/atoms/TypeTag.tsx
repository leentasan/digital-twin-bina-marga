import { AssetType } from "@/types";

const TYPE_SHAPES: Record<AssetType, string> = {
  Road: "▬",
  Bridge: "◆",
  Sensor: "●",
};

export default function TypeTag({ type }: { type: AssetType }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-body2 text-neutral-black-dark dark:text-slate-300">
      <span className="text-neutral-black-base dark:text-slate-400">{TYPE_SHAPES[type]}</span>
      <span className="hidden sm:inline">{type}</span>
    </span>
  );
}