"use client";

import { MillVisual } from "./mill-visual";

export function CloudMonitoringPremium({ className = "" }: { className?: string }) {
  return (
    <MillVisual
      variant="cloud"
      className={className}
      alt="Connected rice mills with cloud AI monitoring and IoT sync"
    />
  );
}
