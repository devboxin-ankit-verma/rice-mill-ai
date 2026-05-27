"use client";

import { MillVisual } from "./mill-visual";

export function MobileAppPremium({ className = "" }: { className?: string }) {
  return (
    <MillVisual
      variant="mobile"
      className={className}
      alt="Rice mill mobile app with live stock and AI alerts"
    />
  );
}
