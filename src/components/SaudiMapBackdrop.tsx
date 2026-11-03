import { useApp } from "@/lib/app-context";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const mapMask = {
  maskImage:
    "radial-gradient(ellipse 75% 70% at 50% 50%, black 28%, transparent 82%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 75% 70% at 50% 50%, black 28%, transparent 82%)",
};

const cities = [
  {
    id: "madinah" as const,
    desktop: { left: "23%", top: "50%" },
    phone: { left: "25%", top: "50%" },
    labelClass: "bottom-full left-1/2 mb-1.5 -translate-x-1/2",
    delay: 0,
  },
  {
    id: "jeddah" as const,
    desktop: { left: "28%", top: "62%" },
    phone: { left: "28%", top: "64%" },
    labelClass: "top-full left-1/2 mt-1.5 -translate-x-1/2",
    delay: 0.4,
  },
];

const CityMarker = ({
  city,
  compact,
}: {
  city: (typeof cities)[number];
  compact: boolean;
}) => {
  const { t } = useApp();
  const name = t.cities[city.id];
  const { labelClass, delay } = city;
  const { left, top } = compact ? city.phone : city.desktop;

  // Mobile: dots only.
  if (compact) {
    return (
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left, top }}
      >
        <span
          className="relative block h-1.5 w-1.5 rounded-full border border-emerald-300/70 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] motion-safe:animate-pulse"
          style={{ animationDelay: `${delay}s` }}
        />
      </div>
    );
  }

  // Desktop: animated dots, glow, and labels.
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left, top }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.75, 1, 0.75], scale: 1 }}
      transition={{
        opacity: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        scale: {
          duration: 0.5,
          delay: 0.3 + delay,
        },
      }}
    >
      <span className="absolute -inset-3 rounded-full bg-emerald-400/20 blur-md" />

      <span className="relative block h-2 w-2 rounded-full border border-emerald-300/70 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />

      <span
        className={`absolute hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-400/75 rtl:text-xs rtl:normal-case md:block ${labelClass}`}
      >
        {name}
      </span>
    </motion.div>
  );
};

const SaudiMapBackdrop = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { theme } = useApp();
  const tone = theme === "light" ? "brightness(0)" : "brightness(0) invert(1)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="pointer-events-none absolute inset-0"
      aria-hidden
    >
      {/* In Arabic the map follows the page content width, so the city markers stay in the gap between the photo and the text. */}
      <div className="absolute inset-y-0 left-1/2 w-full -translate-x-1/2 rtl:w-[min(72rem,calc(100%-3rem))]">
      <div
        className={
          isDesktop
            ? "absolute left-[56%] rtl:left-[62%] top-1/2 h-[min(82vh,760px)] w-[min(82vh,760px)] -translate-x-1/2 -translate-y-[48%]"
            : "absolute inset-x-0 top-[10%] mx-auto h-[min(78vw,340px)] w-[min(78vw,340px)]"
        }
      >
        <img
          src="/sa.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-[0.10] md:opacity-[0.28] light:opacity-[0.07] md:light:opacity-[0.12]"
          style={{
            ...mapMask,
            filter: isDesktop
              ? `${tone} drop-shadow(0 0 24px rgba(16,185,129,0.18))`
              : tone,
          }}
        />

        {isDesktop &&
          cities.map((city) => (
            <CityMarker key={city.id} city={city} compact={false} />
          ))}
      </div>
      </div>
    </motion.div>
  );
};

export default SaudiMapBackdrop;