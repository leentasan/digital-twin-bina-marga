import { useEffect, useRef } from "react";
import { MapMarker } from "@/types";

const MARKER_CONFIG: Record<string, { color: string; shape: "line" | "diamond" | "circle" }> = {
  Road: { color: "#1D49D8", shape: "line" },
  Bridge: { color: "#3B67F6", shape: "diamond" },
  Sensor: { color: "#93ACFD", shape: "circle" },
};

const getMarkerHtml = (color: string, shape: "line" | "diamond" | "circle") => {
  if (shape === "diamond") return `<div style="width:14px;height:14px;background:${color};transform:rotate(45deg);border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`;
  if (shape === "line") return `<div style="width:18px;height:8px;background:${color};border-radius:2px;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`;
  return `<div style="width:12px;height:12px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`;
};

export function useLeafletMap(markers: MapMarker[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);

  const initMap = async (container: HTMLDivElement) => {
    container.innerHTML = "";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (container as any)._leaflet_id = null;

    const leaflet = await import("leaflet");
    const L = leaflet.default;

    const map = L.map(container, {
      center: [-2.5, 120],
      zoom: 4,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    markers.forEach((marker) => {
      const config = MARKER_CONFIG[marker.type] ?? { color: "#3B67F6", shape: "circle" as const };
      const icon = L.divIcon({
        className: "",
        html: getMarkerHtml(config.color, config.shape),
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      L.marker([marker.lat, marker.lng], { icon }).addTo(map).bindPopup(marker.name);
    });

    mapInstanceRef.current = map;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Cleanup any existing instance first
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    container.innerHTML = "";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (container as any)._leaflet_id = null;
    
    initMap(container);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (containerRef.current as any)._leaflet_id = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const reinitMap = (container: HTMLDivElement) => {
    setTimeout(() => initMap(container), 300);
  };

  return { containerRef, reinitMap, mapInstanceRef };
}