import Link from "next/link";
import { BrandLogoMark } from "@/components/layout/brand-logo-mark";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-200 grid place-items-center bg-white"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-2xl bg-linear-to-br from-violet-600 via-purple-500 to-indigo-500 shadow-[0_20px_60px_-20px_rgba(124,58,237,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,transparent_60%)] opacity-70" />
          <div className="absolute inset-0 animate-pulse bg-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <BrandLogoMark className="h-7 w-7" title="MillFlow AI logo" />
          </div>
        </div>

        <div className="text-center">
          <p className="font-jakarta text-[15px] font-bold text-text-primary">
            MillFlow <span className="text-brand-gradient">AI</span>
          </p>
          <p className="mt-1 text-[12px] font-medium text-[#6B7280]">by Developer Box AI</p>
          <p className="mt-2 text-[13px] text-[#6B7280]">
            Preparing your dashboard…
          </p>
        </div>

        <div className="mt-6 h-1.5 w-64 max-w-[80vw] overflow-hidden rounded-full bg-violet-50 relative">
          <div className="loading-sweep absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500" />
        </div>

        <Link href="/" className="sr-only">
          Home
        </Link>
      </div>
    </div>
  );
}

