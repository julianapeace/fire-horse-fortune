"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FireHorse from "@/components/FireHorse";
import RedEnvelope from "@/components/RedEnvelope";
import FortuneCard from "@/components/FortuneCard";
import { fortunes } from "@/data/fortunes";

function pickRandomFortune(exclude?: string) {
  if (!exclude) return fortunes[Math.floor(Math.random() * fortunes.length)];
  // avoid immediate repeat
  let next = exclude;
  let guard = 0;
  while (next === exclude && guard < 20) {
    next = fortunes[Math.floor(Math.random() * fortunes.length)];
    guard++;
  }
  return next;
}

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [fortune, setFortune] = useState<string | null>(null);

  const yearLabel = useMemo(() => "Year of the Fire Horse", []);
  const subLabel = useMemo(() => "A single truth, delivered in flame.", []);

  const openEnvelope = () => {
    if (opened) return;
    setOpened(true);
    setFortune(pickRandomFortune());
  };

  const reset = () => {
    setOpened(false);
    setFortune(null);
    // Let them get another one (still no retention mechanics; just a button)
  };

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-[var(--bg0)]">
      <FireHorse />

      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-8 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--ink-muted)]">
            Lunar New Year
          </p>
          <h1 className="mt-6 serif text-3xl md:text-5xl font-light tracking-tight text-[var(--ink)]">
            {yearLabel}
          </h1>
          <p className="mt-5 text-[13px] tracking-[0.02em] text-[var(--ink-muted)]">
            {subLabel}
          </p>
        </motion.div>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            {!fortune ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <RedEnvelope onOpen={openEnvelope} disabled={opened} />
                <p className="mt-8 text-[10px] tracking-[0.35em] uppercase text-[var(--ink-subtle)]">
                  Tap to reveal
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="fortune"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <FortuneCard
                  fortune={fortune}
                  onReset={() => setFortune(pickRandomFortune(fortune))}
                />
                <div className="mt-8 text-center">
                  <button
                    onClick={reset}
                    className="text-[10px] tracking-[0.3em] uppercase text-[var(--ink-subtle)] hover:text-[var(--ink-muted)] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-20 text-center text-[10px] tracking-[0.35em] uppercase text-[var(--ink-subtle)]">
          No accounts. No history.
        </p>
      </div>
    </main>
  );
}