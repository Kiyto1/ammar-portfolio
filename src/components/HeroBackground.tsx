import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SaudiMapBackdrop from "./SaudiMapBackdrop";

// Glowing background shapes and their animation paths.
const orbs = [
  {
    className:
      "left-[-10%] top-[5%] h-[520px] w-[520px] bg-emerald-500/12 blur-[120px]",
    animate: {
      x: [0, 40, -20, 0],
      y: [0, 30, -15, 0],
      scale: [1, 1.08, 0.96, 1],
    },
    duration: 18,
  },
  {
    className:
      "right-[-5%] top-[15%] h-[480px] w-[480px] bg-white/[0.04] blur-[110px]",
    animate: {
      x: [0, -35, 25, 0],
      y: [0, -25, 20, 0],
      scale: [1, 0.94, 1.06, 1],
    },
    duration: 22,
  },
];

// Fixed particle settings shared across renders.
const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 37) % 84)}%`,
  top: `${12 + ((i * 53) % 76)}%`,
  size: 1 + (i % 2),
  delay: (i % 7) * 0.4,
  duration: 3 + (i % 5),
}));

const mobileParticles = particles.slice(0, 8);

const HeroBackground = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.05),transparent_70%)]" />

      {/* Mobile: subtle neutral glow */}
      {!isDesktop && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_85%_32%,rgba(255,255,255,0.05),transparent_70%)]" />
      )}

      {/* Desktop: animated ambient orbs */}
      {isDesktop &&
        orbs.map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${orb.className}`}
            animate={orb.animate}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Map with desktop labels and mobile dots */}
      <SaudiMapBackdrop />

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

      {/* Desktop: floating particles */}
      {isDesktop &&
        particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.1, 0.45, 0.1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Mobile: fewer particles with CSS opacity pulses */}
      {!isDesktop &&
        mobileParticles.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full bg-white/30 motion-safe:animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

      {/* Desktop spotlight behind the profile column */}
      {isDesktop && (
        <div className="absolute left-3/4 top-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_65%)] md:block" />
      )}

      {/* Bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </div>
  );
};

export default HeroBackground;