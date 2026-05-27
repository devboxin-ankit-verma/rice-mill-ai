"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function DashboardAnalyticsMockup() {
  return (
    <FadeIn delay={0.15}>
      <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_20px_60px_-16px_rgba(124,58,237,0.15)]">
        <div className="border-b border-zinc-100 px-5 py-4">
          <p className="text-[11px] font-medium text-zinc-400">Production Analytics</p>
          <p className="font-jakarta text-sm font-bold text-zinc-900">Yield & Efficiency</p>
        </div>
        <div className="p-5">
          <div className="mb-4 flex gap-4">
            {[
              { label: "Avg Yield", value: "68.2%" },
              { label: "Efficiency", value: "+24%" },
              { label: "Downtime", value: "2.1 hrs" },
            ].map((m) => (
              <div key={m.label} className="flex-1 rounded-lg bg-violet-50/50 px-3 py-2">
                <p className="text-[10px] text-zinc-500">{m.label}</p>
                <p className="font-jakarta text-sm font-bold text-violet-700">{m.value}</p>
              </div>
            ))}
          </div>
          <div className="relative h-36 w-full">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 120">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 L40,75 L80,80 L120,55 L160,60 L200,35 L240,45 L280,25 L320,30 L360,15 L400,20 L400,120 L0,120 Z"
                fill="url(#areaGrad)"
              />
              <path
                d="M0,90 L40,75 L80,80 L120,55 L160,60 L200,35 L240,45 L280,25 L320,30 L360,15 L400,20"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-zinc-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
