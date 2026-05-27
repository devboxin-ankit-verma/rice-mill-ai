"use client";

import { MillVisual } from "./mill-visual";

export function AnalyticsPremium({ className = "" }: { className?: string }) {
  return (
    <MillVisual
      variant="analytics"
      className={className}
      alt="Rice mill production analytics with AI insights and KPI charts"
    />
  );
}
