"use client";

import { motion } from "framer-motion";

export default function RedEnvelope({
  onOpen,
  disabled,
}: {
  onOpen: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onOpen}
      className={[
        "relative mx-auto block",
        "w-[220px] h-[152px] max-w-[72vw]",
        "focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--ink-subtle)]",
        disabled ? "opacity-50 cursor-default" : "cursor-pointer",
      ].join(" ")}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      aria-label="Open the red envelope"
    >
      <div className="relative h-full w-full rounded-xl bg-[#1a0a0a] border border-white/[0.08] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[#2d0f0f] clip-path-envelope-flap" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[#1f0a0a] clip-path-envelope-bottom" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/[0.06]">
          <span className="serif text-lg text-white/80">馬</span>
        </div>
      </div>
    </motion.button>
  );
}