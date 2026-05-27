"use client";

import { MillVisual } from "./mill-visual";

export function SmartFactoryPremium({ className = "" }: { className?: string }) {
  return (
    <MillVisual
      variant="factory"
      className={className}
      alt="Smart automated rice mill with silos, conveyors, and AI monitoring"
    />
  );
}
