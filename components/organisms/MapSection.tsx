"use client";

import { useRef, useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { mapMarkers } from "@/data/mockData";
import { useLeafletMap } from "@/hooks/useLeaflefmap";

const MAP_FILTERS = [
  { label: "Roads", shape: "▬", color: "#1D49D8" },
  { label: "Bridges", shape: "◆", color: "#3B67F6" },
  { label: "Sensors", shape: "●", color: "#93ACFD" },
];

export default function MapSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const { containerRef, reinitMap } = useLeafletMap(mapMarkers);

  useEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      reinitMap(fullscreenRef.current);
    } else if (!isFullscreen && containerRef.current) {
      reinitMap(containerRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);

  const filters = (
    <div className="flex items-center gap-2 flex-wrap">
      {MAP_FILTERS.map((f) => (
        <span key={f.label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-caption font-medium text-white" style={{ backgroundColor: f.color }}>
          <span>{f.shape}</span>
          {f.label}
        </span>
      ))}
    </div>
  );

  return (
    <>
      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-slate-950 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <span className="text-h5 font-semibold text-neutral-black-darker dark:text-white">
              3D Infrastructure Network
            </span>
            <div className="flex items-center gap-3">
              {filters}
              <button onClick={() => setIsFullscreen(false)} className="p-1.5 rounded-lg hover:bg-neutral-black-lighter dark:hover:bg-slate-800">
                <Minimize2 size={16} className="text-neutral-black-base dark:text-white" />
              </button>
            </div>
          </div>
          <div ref={fullscreenRef} style={{ flex: 1, width: "100%", zIndex: 0 }} className="rounded-lg overflow-hidden" />
        </div>
      )}

      {/* Normal card */}
      <div className="bg-white dark:bg-slate-900 dark:border dark:border-slate-700 rounded-xl p-5 shadow-sm flex flex-col flex-1">
        <div className="flex flex-col gap-2 mb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-h5 font-semibold text-neutral-black-darker dark:text-white">
              3D Infrastructure Network
            </span>
            <button onClick={() => setIsFullscreen(true)} className="p-1.5 rounded-lg hover:bg-neutral-black-lighter dark:hover:bg-slate-800 flex-shrink-0 ml-2">
              <Maximize2 size={16} className="text-neutral-black-base dark:text-white" />
            </button>
          </div>
          {filters}
        </div>
        <div ref={containerRef} style={{ width: "100%", zIndex: 0, position: "relative" }} className="rounded-lg overflow-hidden flex-1 min-h-64" />
      </div>
    </>
  );
}