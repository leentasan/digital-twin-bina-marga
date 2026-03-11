export type AssetType = "Road" | "Bridge" | "Sensor";
export type AssetStatus = "Good" | "Fair" | "Poor";
export type StatColor = "blue" | "yellow" | "green" | "red";

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  icon: "road" | "bridge" | "sensor" | "alert";
  color: StatColor;
}

export interface Asset {
  id: string;
  name: string;
  location: string;
  type: AssetType;
  status: AssetStatus;
}

export interface NavItemData {
  label: string;
  href: string;
  icon: "dashboard" | "catalog" | "monitoring" | "analytics";
}

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  type: AssetType;
  name: string;
}