type PremiumDefsProps = { id: string };

export function PremiumDefs({ id }: PremiumDefsProps) {
  const p = id;
  return (
    <defs>
      <linearGradient id={`${p}-brand`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id={`${p}-soft`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F3FF" />
      </linearGradient>
      <linearGradient id={`${p}-glass`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
        <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id={`${p}-glow`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
      </linearGradient>
      <filter id={`${p}-shadow`} x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#7C3AED" floodOpacity="0.14" />
      </filter>
      <filter id={`${p}-shadow-sm`} x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#6D28D9" floodOpacity="0.12" />
      </filter>
    </defs>
  );
}
