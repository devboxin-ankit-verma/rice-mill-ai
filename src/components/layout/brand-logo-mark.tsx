"use client";

export function BrandLogoMark({
  className = "",
  title = "Rice leaf logo",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rm-grad" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="rm-sheen" x1="20" y1="10" x2="44" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* soft tile */}
      <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#rm-grad)" opacity="0.14" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="13.5" stroke="url(#rm-grad)" opacity="0.35" />

      {/* patti / leaf mark */}
      <path
        d="M18 42C18 28 28.6 18 42 18c0 14-10.6 24-24 24Z"
        fill="url(#rm-grad)"
        opacity="0.98"
      />
      <path
        d="M22 40.5c7.7-2.4 14-8.8 16.5-16.6"
        stroke="url(#rm-sheen)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M26.5 44.5c1.7-7.8 7.8-13.9 15.6-15.6"
        stroke="#A78BFA"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* AI node + ring */}
      <circle cx="45.5" cy="22.5" r="6.8" stroke="url(#rm-grad)" strokeWidth="2.4" opacity="0.9" />
      <circle cx="45.5" cy="22.5" r="2.6" fill="#7C3AED" />

      {/* subtle base line */}
      <path
        d="M18 52h28"
        stroke="#A78BFA"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

