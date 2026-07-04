import { motion } from "motion/react";
import { useMemo } from "react";

const orbs = [
  {
    className:
      "left-[-10%] top-[5%] h-[520px] w-[520px] bg-emerald-500/20 blur-[120px]",
    animate: { x: [0, 40, -20, 0], y: [0, 30, -15, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 18,
  },
  {
    className:
      "right-[-5%] top-[15%] h-[480px] w-[480px] bg-sky-500/15 blur-[110px]",
    animate: { x: [0, -35, 25, 0], y: [0, -25, 20, 0], scale: [1, 0.94, 1.06, 1] },
    duration: 22,
  },
  {
    className:
      "bottom-[10%] left-[30%] h-[400px] w-[400px] bg-violet-500/10 blur-[100px]",
    animate: { x: [0, 30, -30, 0], y: [0, -20, 25, 0], scale: [1, 1.05, 0.97, 1] },
    duration: 20,
  },
];

const HeroBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 37) % 84)}%`,
        top: `${12 + ((i * 53) % 76)}%`,
        size: 1 + (i % 3),
        delay: (i % 7) * 0.4,
        duration: 3 + (i % 5),
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.06),transparent_70%)]" />

      {/* Animated aurora orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.className}`}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Saudi map watermark */}
      <div className="absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <img src="/sa.svg" alt="" className="h-full w-full object-contain" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            y: [0, -12, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Spotlight behind profile column */}
      <div className="absolute right-[8%] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_65%)] md:block" />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      {/* Subtle scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ top: ["15%", "85%", "15%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HeroBackground;
