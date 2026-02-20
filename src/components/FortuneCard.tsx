"use client";

import { motion } from "framer-motion";

export default function FortuneCard({
  fortune,
  onReset,
}: {
  fortune: string;
  onReset: () => void;
}) {
  return (
    <motion.div
      className="relative mx-auto mt-10 w-[760px] max-w-[92vw]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Heat shimmer-ish glow */}
      <div className="absolute -inset-10 rounded-[34px] blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,210,140,0.20),rgba(0,0,0,0))]" />

      <div className="relative rounded-[28px] bg-[linear-gradient(180deg,rgba(245,236,220,0.96),rgba(235,222,200,0.92))] p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ring-1 ring-black/10">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/30" />

        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.45em] uppercase text-black/55">
              Year of the Fire Horse
            </div>
            <div className="mt-6 text-2xl md:text-3xl leading-tight text-black/90">
              {fortune}
            </div>
          </div>

          <button
            onClick={onReset}
            className="shrink-0 rounded-full px-4 py-2 text-xs tracking-[0.28em] uppercase bg-black/90 text-white shadow hover:bg-black transition"
          >
            Again
          </button>
        </div>

        <div className="mt-8 h-px w-full bg-black/10" />
        <div className="mt-6 text-sm text-black/60 tracking-wide">
          Keep it. Don’t overthink it.
        </div>
      </div>
    </motion.div>
  );
}