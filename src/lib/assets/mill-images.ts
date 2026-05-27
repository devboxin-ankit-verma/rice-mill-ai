/** Section visuals — hero uses user asset only; others are unique generated renders */
export const MILL_IMAGES = {
  hero: "/images/rice-mill-premium.png",
  factory: "/images/rice-mill-factory.png",
  workflow: "/images/rice-mill-workflow.png",
  dashboard: "/images/rice-mill-dashboard.png",
  analytics: "/images/rice-mill-analytics.png",
  mobile: "/images/rice-mill-mobile.png",
  cloud: "/images/rice-mill-cloud.png",
} as const;

export type MillVisualVariant = keyof typeof MILL_IMAGES;

/** Hero-only asset path — do not reuse in other sections */
export const HERO_MILL_IMAGE = MILL_IMAGES.hero;
