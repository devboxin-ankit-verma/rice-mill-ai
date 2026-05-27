import Link from "next/link";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[200] grid place-items-center bg-white"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-500 shadow-[0_20px_60px_-20px_rgba(124,58,237,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,transparent_60%)] opacity-70" />
          <div className="absolute inset-0 animate-pulse bg-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="text-white drop-shadow"
            >
              <path
                d="M4 18L12 4L20 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 14H16.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="8" r="1.2" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="font-jakarta text-[15px] font-bold text-[#111827]">
            RiceMill <span className="text-brand-gradient">AI</span>
          </p>
          <p className="mt-2 text-[13px] text-[#6B7280]">
            Preparing your dashboard…
          </p>
        </div>

        <div className="mt-6 h-1.5 w-64 max-w-[80vw] overflow-hidden rounded-full bg-violet-50">
          <div className="h-full w-1/3 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 animate-pulse" />
        </div>

        <Link href="/" className="sr-only">
          Home
        </Link>
      </div>
    </div>
  );
}

