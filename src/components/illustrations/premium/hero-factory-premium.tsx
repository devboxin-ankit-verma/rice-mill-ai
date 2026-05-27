"use client";

import { HeroMillImage } from "./hero-mill-image";

export function HeroFactoryPremium({ className = "" }: { className?: string }) {
  return <HeroMillImage className={className} />;
}
