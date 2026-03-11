"use client";

import dynamic from "next/dynamic";

const InfrastructurePanel = dynamic(
  () => import("@/components/organisms/InfrastructurePanel"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-xl shadow-sm mb-6 h-80 flex items-center justify-center">
        <span className="text-neutral-black-base text-body2">Loading...</span>
      </div>
    ),
  }
);

export default function InfrastructurePanelWrapper() {
  return <InfrastructurePanel />;
}