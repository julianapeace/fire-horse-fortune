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
      className="relative mx-auto w-full max-w-md"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-8 md:p-10">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--ink-subtle)]">
          Year of the Fire Horse
        </p>
        <p className="mt-6 serif text-xl md:text-2xl font-light leading-snug text-[var(--ink)]">
          {fortune}
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={onReset}
            className="text-[10px] tracking-[0.28em] uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            Again
          </button>
          <div className="h-px flex-1 max-w-[60px] bg-white/[0.08]" />
        </div>
      </div>
    </motion.div>
  );
}
