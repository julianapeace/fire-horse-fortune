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
        "w-[260px] h-[180px] max-w-[76vw]",
        "focus:outline-none",
        disabled ? "opacity-60 cursor-default" : "cursor-pointer",
      ].join(" ")}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      aria-label="Open the red envelope"
    >
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[28px] blur-2xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,70,70,0.22),rgba(0,0,0,0))]" />

      {/* Envelope body */}
      <div className="relative h-full w-full rounded-[22px] bg-[linear-gradient(145deg,#7c0000,#b00000)] shadow-[0_16px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/10 overflow-hidden">
        {/* Silk texture */}
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.8),rgba(255,255,255,0)_60%)]" />

        {/* Flap */}
        <div className="absolute inset-x-0 top-0 h-[62%]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#8d0000,#c10000)]" />
          <div className="absolute left-0 top-0 h-full w-full clip-path-envelope-flap" />
        </div>

        {/* Bottom triangle */}
        <div className="absolute inset-x-0 bottom-0 h-[62%]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#680000,#a10000)] clip-path-envelope-bottom" />
        </div>

        {/* Gold seal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]">
          <div className="relative h-[56px] w-[56px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,240,200,0.95),rgba(255,180,80,0.92)_45%,rgba(160,95,20,0.95))] shadow-[0_10px_28px_rgba(0,0,0,0.35)] ring-1 ring-black/20">
            <div className="absolute inset-[10px] rounded-full ring-1 ring-black/20 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[18px] font-semibold tracking-wide text-black/70">
                馬
              </span>
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="absolute inset-x-0 bottom-3 text-center">
          <span className="text-xs tracking-[0.35em] uppercase text-white/70">
            Tap to reveal
          </span>
        </div>
      </div>
    </motion.button>
  );
}