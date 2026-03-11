"use client";

import dynamic from "next/dynamic";

const MapSection = dynamic(() => import("@/components/organisms/MapSection"), {
  ssr: false,
});

export default function MapSectionWrapper() {
  return <MapSection />;
}