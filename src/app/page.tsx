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
    <main className="grain relative min-h-screen overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[620px] w-[620px] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,90,60,0.25),rgba(0,0,0,0))]" />
        <div className="absolute right-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(255,210,130,0.22),rgba(0,0,0,0))]" />
      </div>

      <FireHorse />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <div className="text-[11px] tracking-[0.55em] uppercase text-white/65">
            Lunar New Year
          </div>
          <h1 className="mt-5 serif text-4xl md:text-6xl leading-[1.05] text-white/95">
            {yearLabel}
          </h1>
          <div className="mt-4 text-sm md:text-base text-white/60 tracking-wide">
            {subLabel}
          </div>
        </motion.div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {!fortune ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <RedEnvelope onOpen={openEnvelope} disabled={opened} />
                <div className="mt-7 text-xs tracking-[0.32em] uppercase text-white/45">
                  One tap. One fortune.
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="fortune"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {/* Flame burst overlay */}
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,120,60,0.35),rgba(0,0,0,0))]"
                  initial={{ scale: 0.65, opacity: 0 }}
                  animate={{ scale: 1.05, opacity: 0.35 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <FortuneCard
                  fortune={fortune}
                  onReset={() => setFortune(pickRandomFortune(fortune))}
                />
                <div className="mt-6 text-center">
                  <button
                    onClick={reset}
                    className="text-xs tracking-[0.32em] uppercase text-white/50 hover:text-white/75 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center text-[11px] tracking-[0.45em] uppercase text-white/35">
          No accounts. No history. Just heat.
        </div>
      </div>
    </main>
  );
}