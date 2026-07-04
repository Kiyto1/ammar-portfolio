import { motion } from "motion/react";

const mapMask = {
  maskImage:
    "radial-gradient(ellipse 75% 70% at 50% 50%, black 28%, transparent 82%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 75% 70% at 50% 50%, black 28%, transparent 82%)",
};

const cities = [
  {
    name: "Madinah",
    left: "23%",
    top: "50%",
    labelClass: "bottom-full left-1/2 mb-1.5 -translate-x-1/2",
    delay: 0,
  },
  {
    name: "Jeddah",
    left: "28%",
    top: "62%",
    labelClass: "top-full left-1/2 mt-1.5 -translate-x-1/2",
    delay: 0.4,
  },
];

const CityMarker = ({
  name,
  left,
  top,
  labelClass,
  delay,
}: (typeof cities)[number]) => (
  <motion.div
    className="absolute -translate-x-1/2 -translate-y-1/2"
    style={{ left, top }}
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: [0.75, 1, 0.75], scale: 1 }}
    transition={{
      opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay },
      scale: { duration: 0.5, delay: 0.3 + delay },
    }}
  >
    <span className="absolute -inset-3 rounded-full bg-emerald-400/20 blur-md" />

    <span className="relative block h-2 w-2 rounded-full border border-emerald-300/70 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />

    <span
      className={`absolute whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-400/75 ${labelClass}`}
    >
      {name}
    </span>
  </motion.div>
);

const SaudiMapBackdrop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden
    >
      <div className="absolute left-[56%] top-1/2 h-[min(82vh,760px)] w-[min(82vh,760px)] -translate-x-1/2 -translate-y-[48%]">
        <img
          src="/sa.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-[0.28]"
          style={{
            ...mapMask,
            filter:
              "brightness(0) invert(1) drop-shadow(0 0 24px rgba(16,185,129,0.18))",
          }}
        />

        {cities.map((city) => (
          <CityMarker key={city.name} {...city} />
        ))}
      </div>
    </motion.div>
  );
};

export default SaudiMapBackdrop;