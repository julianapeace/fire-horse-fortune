"use client";

import { motion } from "framer-motion";

export default function FireHorse() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative w-[640px] max-w-[85vw] opacity-[0.14]">
        <svg
          viewBox="0 0 1200 700"
          className="relative w-full drop-shadow-[0_0_18px_rgba(255,215,130,0.10)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255,215,140,0.95)" />
              <stop offset="0.5" stopColor="rgba(255,186,90,0.85)" />
              <stop offset="1" stopColor="rgba(255,230,180,0.75)" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.6" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 0.9 0 0 0
                  0 0 0.6 0 0
                  0 0 0 0.65 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Mane (subtle animated flicker via opacity) */}
          <motion.path
            d="M395 260 C410 220, 450 200, 480 190 C510 180, 535 160, 560 140
               C575 170, 560 195, 585 210 C615 228, 645 208, 665 180
               C675 220, 640 240, 640 260 C640 290, 670 300, 700 295"
            fill="none"
            stroke="url(#gold)"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#softGlow)"
            initial={{ pathLength: 0, opacity: 0.0 }}
            animate={{ pathLength: 1, opacity: [0.15, 0.28, 0.18] }}
            transition={{
              pathLength: { duration: 3.2, ease: "easeInOut" },
              opacity: { duration: 3.8, repeat: Infinity, repeatType: "mirror" },
            }}
          />

          {/* Main horse line */}
          <motion.path
            d="M360 310
               C390 280, 440 280, 470 305
               C500 330, 525 350, 560 352
               C610 355, 635 320, 690 315
               C750 310, 810 340, 820 395
               C828 440, 790 470, 740 470
               C700 470, 680 455, 650 440
               C620 425, 600 420, 565 425
               C520 432, 480 470, 440 495
               C410 515, 385 520, 360 510

               M440 495
               C430 540, 460 585, 515 605

               M650 440
               C660 510, 700 570, 760 610

               M515 605
               C500 640, 470 660, 450 665

               M760 610
               C770 650, 800 668, 835 668

               M470 305
               C490 260, 520 245, 555 240
               C595 235, 615 250, 630 275"
            fill="none"
            stroke="url(#gold)"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#softGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.95 }}
            transition={{ duration: 4.2, ease: "easeInOut", delay: 0.4 }}
          />

          {/* Tiny embers (static dots, subtle) */}
          {Array.from({ length: 26 }).map((_, i) => {
            const x = 220 + (i * 31) % 760;
            const y = 140 + (i * 47) % 420;
            const r = 1 + (i % 3) * 0.6;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={r}
                fill="rgba(255,200,120,0.55)"
                initial={{ opacity: 0.0 }}
                animate={{ opacity: [0.0, 0.35, 0.05] }}
                transition={{
                  duration: 2.6 + (i % 5) * 0.35,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: (i % 7) * 0.18,
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}