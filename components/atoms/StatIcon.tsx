import { StatColor } from "@/types";
import { STAT_COLOR_STYLES } from "@/constants";
import { Route, Landmark, Radio, TriangleAlert } from "lucide-react";

const ICONS = {
  road: Route,
  bridge: Landmark,
  sensor: Radio,
  alert: TriangleAlert,
};

interface StatIconProps {
  icon: keyof typeof ICONS;
  color: StatColor;
}

export default function StatIcon({ icon, color }: StatIconProps) {
  const styles = STAT_COLOR_STYLES[color];
  const Icon = ICONS[icon];

  return (
    <div className={`p-3 rounded-lg ${styles.iconBg}`}>
      <Icon size={20} className={styles.iconColor} />
    </div>
  );
}