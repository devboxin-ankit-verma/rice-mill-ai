"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQ_ITEMS } from "@/constants/landing";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-[#7C3AED] outline-none focus-visible:text-[#7C3AED]"
      >
        <span className="font-jakarta text-[15px] font-semibold text-text-primary md:text-base">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown
            className={`h-5 w-5 shrink-0 ${isOpen ? "text-[#7C3AED]" : "text-[#6B7280]"}`}
            aria-hidden
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-body pb-5 pr-8 text-[15px]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding section-shell scroll-mt-24">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently asked questions"
          description="Quick answers, and a simple form to get a demo."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <FadeIn className="mx-auto w-full max-w-3xl lg:max-w-none">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-6 shadow-[0_12px_36px_-24px_rgba(17,24,39,0.3)] md:px-8">
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn className="mx-auto w-full max-w-xl lg:max-w-none">
            <div
              id="contact"
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_12px_36px_-24px_rgba(17,24,39,0.3)] md:p-8"
            >
              <h3 className="font-jakarta text-xl font-bold text-text-primary">
                Book a demo
              </h3>
              <p className="text-body mt-2 text-[15px]">
                Share your details — we’ll reach out shortly.
              </p>

              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-text-primary">
                    Name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[15px] outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-200"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-text-primary">
                    Phone
                    <input
                      required
                      name="phone"
                      autoComplete="tel"
                      className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[15px] outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium text-text-primary">
                  Mill name
                  <input
                    name="mill"
                    className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[15px] outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-200"
                    placeholder="Your rice mill"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-text-primary">
                  Message (optional)
                  <textarea
                    name="message"
                    rows={4}
                    className="resize-none rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[15px] outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-200"
                    placeholder="What do you want to manage (inventory, billing, production…)?"
                  />
                </label>

                <button
                  type="submit"
                  className="btn-glow inline-flex h-11 items-center justify-center rounded-full bg-linear-to-r from-violet-600 via-violet-600 to-purple-600 px-6 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Request a callback
                </button>

                <p className="text-[12px] leading-relaxed text-text-secondary">
                  By submitting, you agree to be contacted by MillFlow AI.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
