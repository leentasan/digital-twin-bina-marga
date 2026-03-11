"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { mapMarkers } from "@/data/mockData";

const MAP_FILTERS = [
  { label: "Roads", shape: "▬", color: "#1D49D8" },
  { label: "Bridges", shape: "◆", color: "#3B67F6" },
  { label: "Sensors", shape: "●", color: "#93ACFD" },
];

const MARKER_CONFIG: Record<string, { color: string; shape: "line" | "diamond" | "circle" }> = {
  Road: { color: "#1D49D8", shape: "line" },
  Bridge: { color: "#3B67F6", shape: "diamond" },
  Sensor: { color: "#93ACFD", shape: "circle" },
};

const getMarkerHtml = (color: string, shape: "line" | "diamond" | "circle") => {
  if (shape === "diamond") {
    return `<div style="width:14px;height:14px;background:${color};transform:rotate(45deg);border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`;
  }
  if (shape === "line") {
    return `<div style="width:18px;height:8px;background:${color};border-radius:2px;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`;
  }
  return `<div style="width:12px;height:12px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`;
};

export default function InfrastructurePanel() {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  const mapInitialized = useRef(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (mapInitialized.current || !mapRef.current) return;
    mapInitialized.current = true;

    const initMap = async () => {
      const leaflet = await import("leaflet");
      const L = leaflet.default;
      if (!mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [-2.5, 120],
        zoom: 4,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      mapMarkers.forEach((marker) => {
        const config = MARKER_CONFIG[marker.type] ?? { color: "#3B67F6", shape: "circle" as const };
        const icon = L.divIcon({
          className: "",
          html: getMarkerHtml(config.color, config.shape),
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        });
        L.marker([marker.lat, marker.lng], { icon })
          .addTo(map)
          .bindPopup(marker.name);
      });

      mapInstanceRef.current = map;
    };

    initMap();
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current) {
      setTimeout(() => mapInstanceRef.current.invalidateSize(), 300);
    }
  }, [isFullscreen]);

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm h-full flex flex-col transition-all duration-300 ${isFullscreen ? "fixed inset-4 z-50" : ""}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-h5 font-semibold text-neutral-black-darker dark:text-white">
          Infrastructure Map
        </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {MAP_FILTERS.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-caption font-medium text-white"
                style={{ backgroundColor: f.color }}
              >
                <span>{f.shape}</span>
                {f.label}
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg hover:bg-neutral-black-lighter dark:hover:bg-slate-700 transition-colors"
          >
            {isFullscreen
              ? <Minimize2 size={16} className="text-neutral-black-base dark:text-slate-400" />
              : <Maximize2 size={16} className="text-neutral-black-base dark:text-slate-400" />
            }
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 px-5 pb-5">
        <div
          ref={mapRef}
          style={{ height: "100%", minHeight: "280px", width: "100%", zIndex: 0 }}
          className="rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
}