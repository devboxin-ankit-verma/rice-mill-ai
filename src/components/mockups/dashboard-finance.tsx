"use client";

import { FINANCE_FEATURE } from "@/constants/landing";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabData: Record<
  (typeof FINANCE_FEATURE.tabs)[number],
  { total: string; rows: { label: string; amount: string; status: string }[] }
> = {
  Revenue: {
    total: "₹4.82 Cr",
    rows: [
      { label: "Rice Sales — Export", amount: "₹1.2 Cr", status: "Paid" },
      { label: "Rice Sales — Domestic", amount: "₹89L", status: "Paid" },
      { label: "Bran & By-products", amount: "₹24L", status: "Pending" },
    ],
  },
  Expenses: {
    total: "₹2.14 Cr",
    rows: [
      { label: "Paddy Procurement", amount: "₹1.6 Cr", status: "Paid" },
      { label: "Labor & Payroll", amount: "₹32L", status: "Paid" },
      { label: "Transport & Freight", amount: "₹18L", status: "Due" },
    ],
  },
  Profitability: {
    total: "₹1.28 Cr",
    rows: [
      { label: "Gross Margin", amount: "26.5%", status: "Healthy" },
      { label: "Net Profit", amount: "₹68L", status: "Up 14%" },
      { label: "Cost per Ton", amount: "₹18,400", status: "Optimized" },
    ],
  },
  "Cash Flow": {
    total: "₹94L",
    rows: [
      { label: "Receivables", amount: "₹56L", status: "7 days" },
      { label: "Payables", amount: "₹38L", status: "14 days" },
      { label: "Net Position", amount: "+₹18L", status: "Positive" },
    ],
  },
};

export function DashboardFinanceMockup() {
  const [activeTab, setActiveTab] =
    useState<(typeof FINANCE_FEATURE.tabs)[number]>("Revenue");
  const data = tabData[activeTab];

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_20px_60px_-16px_rgba(124,58,237,0.12)]">
      <div className="flex flex-wrap gap-1 border-b border-zinc-100 p-2 sm:gap-0 sm:p-0">
        {FINANCE_FEATURE.tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`relative rounded-lg px-4 py-2.5 text-xs font-medium transition-colors sm:rounded-none sm:px-5 sm:py-3.5 sm:text-sm ${
              activeTab === tab
                ? "text-violet-700"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {activeTab === tab && (
              <motion.span
                layoutId="finance-tab"
                className="absolute inset-0 rounded-lg bg-violet-50 sm:rounded-none sm:border-b-2 sm:border-violet-600 sm:bg-transparent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{tab}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="p-5 sm:p-6"
        >
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs text-zinc-500">{activeTab} — This month</p>
              <p className="font-jakarta text-2xl font-bold text-zinc-900">{data.total}</p>
            </div>
            <div className="flex h-16 items-end gap-1">
              {[35, 55, 40, 70, 50, 85, 65].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t bg-violet-500/80 sm:w-4"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-100">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/80">
                  <th className="px-4 py-2.5 font-medium text-zinc-500">Description</th>
                  <th className="px-4 py-2.5 font-medium text-zinc-500">Amount</th>
                  <th className="px-4 py-2.5 font-medium text-zinc-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row) => (
                  <tr key={row.label} className="border-b border-zinc-50 last:border-0">
                    <td className="px-4 py-3 text-zinc-800">{row.label}</td>
                    <td className="px-4 py-3 font-medium text-zinc-900">{row.amount}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-medium text-violet-700">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
