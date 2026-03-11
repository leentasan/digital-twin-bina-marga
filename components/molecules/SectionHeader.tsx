import { Maximize2 } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  onExpand?: () => void;
}

export default function SectionHeader({ title, onExpand }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-h5 font-semibold text-neutral-black-darker">{title}</span>
      {onExpand && (
        <button onClick={onExpand} className="p-1.5 rounded-lg hover:bg-neutral-black-lighter transition-colors">
          <Maximize2 size={16} className="text-neutral-black-base" />
        </button>
      )}
    </div>
  );
}