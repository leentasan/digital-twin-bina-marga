import { AssetStatus } from "@/types";
import { STATUS_STYLES } from "@/constants";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

const STATUS_ICONS = {
  Good: CheckCircle,
  Fair: AlertCircle,
  Poor: XCircle,
};

interface StatusBadgeProps {
  status: AssetStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = STATUS_STYLES[status];
  const Icon = STATUS_ICONS[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-caption font-medium ${styles.bg} ${styles.text}`}>
      <Icon size={12} />
      {status}
    </span>
  );
}