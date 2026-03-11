import { StatCardData, Asset, NavItemData, MapMarker } from "@/types";

export const stats: StatCardData[] = [
  { id: "roads", label: "Roads", value: "1,274", icon: "road", color: "blue" },
  { id: "bridges", label: "Bridge", value: "324", icon: "bridge", color: "blue" },
  { id: "sensors", label: "Active Sensors", value: "8,432", icon: "sensor", color: "blue" },
  { id: "alerts", label: "Alerts", value: "12", icon: "alert", color: "red" },
];

export const assets: Asset[] = [
  { id: "1", name: "Jalan Tol Jakarta-Cikampek KM 23", location: "West Java", type: "Road", status: "Good" },
  { id: "2", name: "Jembatan Suramadu", location: "East Java", type: "Bridge", status: "Good" },
  { id: "3", name: "Jalan Lingkar Luar Jakarta", location: "Jakarta", type: "Road", status: "Fair" },
  { id: "4", name: "Jembatan Ampera", location: "South Sumatra", type: "Bridge", status: "Good" },
  { id: "5", name: "Jalan Trans Papua", location: "Papua", type: "Road", status: "Poor" },
  { id: "6", name: "Jembatan Mahakam", location: "East Kalimantan", type: "Bridge", status: "Fair" },
  { id: "7", name: "Jalan Tol Cipularang", location: "West Java", type: "Road", status: "Good" },
  { id: "8", name: "Jembatan Barelang", location: "Riau Islands", type: "Bridge", status: "Good" },
  { id: "9", name: "Jalan Lintas Sumatera", location: "North Sumatra", type: "Road", status: "Fair" },
  { id: "10", name: "Jembatan Kutai Kartanegara", location: "East Kalimantan", type: "Bridge", status: "Poor" },
];

export const navItems: NavItemData[] = [
  { label: "Dashboard", href: "/", icon: "dashboard" },
  { label: "Catalog", href: "/catalog", icon: "catalog" },
  { label: "Monitoring", href: "/monitoring", icon: "monitoring" },
  { label: "Analytics", href: "/analytics", icon: "analytics" },
];

export const mapMarkers: MapMarker[] = [
  { id: "m1", lat: -6.2, lng: 106.816, type: "Road", name: "Jalan Tol Jakarta-Cikampek" },
  { id: "m2", lat: -7.165, lng: 112.780, type: "Bridge", name: "Jembatan Suramadu" },
  { id: "m3", lat: -2.5, lng: 140.7, type: "Sensor", name: "Sensor Papua" },
  { id: "m4", lat: -3.8, lng: 136.2, type: "Sensor", name: "Sensor Papua 2" },
];