import { motion } from "motion/react";
import { useMemo } from "react";
import SaudiMapBackdrop from "./SaudiMapBackdrop";


// Define the glowing background shapes and their animation paths.
const orbs = [
  {
    className: "left-[-10%] top-[5%] h-[520px] w-[520px] bg-emerald-500/12 blur-[120px]",
    animate: { x: [0, 40, -20, 0], y: [0, 30, -15, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 18,
  },
  {
    className: "right-[-5%] top-[15%] h-[480px] w-[480px] bg-white/[0.04] blur-[110px]",
    animate: { x: [0, -35, 25, 0], y: [0, -25, 20, 0], scale: [1, 0.94, 1.06, 1] },
    duration: 22,
  },
];

const HeroBackground = () => {
  // Cache the particle settings across renders using an empty dependency array.
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 37) % 84)}%`,
        top: `${12 + ((i * 53) % 76)}%`,
        size: 1 + (i % 2),
        delay: (i % 7) * 0.4,
        duration: 3 + (i % 5),
      })),
    [],
  );

  return (
    // Cover the parent section without intercepting clicks or hover events.
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.05),transparent_70%)]" />

      {/* Two soft ambient orbs, kept light so they don't compete with the map */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${orb.className}`}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* The imported component provides the desktop map. */}
      <SaudiMapBackdrop />

      {/* Mobile: same tint recipe as desktop map, so it reads as one consistent system */}
      <div className="absolute inset-x-0 top-[10%] mx-auto h-[min(78vw,340px)] w-[min(78vw,340px)] md:hidden">
        <img
          src="/sa.svg"
          alt=""
          className="relative h-full w-full object-contain opacity-[0.45]"
          style={{
            // Fade the map's edges using a gradient mask.
            maskImage:
              "radial-gradient(ellipse 68% 62% at 50% 50%, black 24%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 68% 62% at 50% 50%, black 24%, transparent 78%)",
            // Recolor the SVG and add a soft green glow.
            filter:
              "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(100deg) drop-shadow(0 0 24px rgba(16,185,129,0.25))",
          }}
        />

        {/* Position each city marker relative to the mobile map container. */}
        {[
          { name: "Madinah", left: "38%", top: "42%" },
          { name: "Jeddah", left: "35%", top: "58%" },
        ].map((city) => (
          <div
            key={city.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: city.left, top: city.top }}
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          </div>
        ))}
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
        }}
      />

      {/* Floating particles, kept subtle and fewer */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ opacity: [0.1, 0.45, 0.1], y: [0, -10, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Spotlight behind profile column */}
      <div className="absolute left-3/4 top-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_65%)] md:block" />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </div>
  );
};

export default HeroBackground;