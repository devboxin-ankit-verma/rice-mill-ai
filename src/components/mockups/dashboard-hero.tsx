"use client";

import { floatAnimation } from "@/lib/motion/variants";
import { motion, useReducedMotion } from "framer-motion";

export function DashboardHeroMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : floatAnimation}
      className="relative w-full"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 via-purple-400/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_24px_80px_-12px_rgba(124,58,237,0.18),0_8px_24px_-8px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[11px] font-medium text-zinc-400">
            ricemill.ai/dashboard
          </span>
        </div>
        <div className="flex min-h-[320px] sm:min-h-[380px]">
          <aside className="hidden w-[72px] shrink-0 border-r border-zinc-100 bg-zinc-50/50 p-3 sm:block">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`mb-2 h-8 rounded-lg ${i === 1 ? "bg-violet-100" : "bg-zinc-100"}`}
              />
            ))}
          </aside>
          <div className="flex-1 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-zinc-400">Mill Overview</p>
                <p className="font-jakarta text-sm font-bold text-zinc-900">
                  Punjab Grains — Main Unit
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                Live
              </span>
            </div>
            <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: "Total Revenue", value: "₹2.4Cr", change: "+12%" },
                { label: "Active Mills", value: "3", change: "All online" },
                { label: "Today Output", value: "48T", change: "+8%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-2.5 sm:p-3"
                >
                  <p className="text-[9px] text-zinc-500 sm:text-[10px]">{stat.label}</p>
                  <p className="font-jakarta text-sm font-bold text-zinc-900 sm:text-base">
                    {stat.value}
                  </p>
                  <p className="text-[9px] font-medium text-violet-600">{stat.change}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-xl border border-zinc-100 p-3">
                <p className="mb-2 text-[10px] font-medium text-zinc-500">
                  Production Trend
                </p>
                <div className="flex h-24 items-end gap-1 sm:h-28">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-violet-400 opacity-90"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-zinc-100 p-3">
                <p className="mb-2 text-[10px] font-medium text-zinc-500">Yield Rate</p>
                <div className="relative mx-auto h-20 w-20 sm:h-24 sm:w-24">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#f4f4f5"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="3"
                      strokeDasharray="72 100"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-jakarta text-xs font-bold text-zinc-900">
                    72%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
