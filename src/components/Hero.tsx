import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import HeroBackground from "./HeroBackground";
import { useApp } from "@/lib/app-context";
import Latin from "./Latin";

export const GITHUB_URL = "https://github.com/Kiyto1";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/ammar-al-saedi-240114242/";
export const EMAIL = "AmmarHassan.CS@gmail.com";
export const CV_PATH = "/Ammar_Alsaedi_CV.pdf";

const socialLinks = [
  { href: GITHUB_URL, label: "GitHub", icon: FaGithub },
  { href: LINKEDIN_URL, label: "LinkedIn", icon: FaLinkedin },
  { href: EMAIL ? `mailto:${EMAIL}` : "", label: "Email", icon: Mail },
].filter((link) => link.href);

const floatingBadges = [
  { label: "React", className: "-left-4 top-8 md:-left-8" },
  { label: "Python", className: "-right-2 top-16 md:-right-6" },
  { label: "JS", className: "bottom-12 -left-2 md:-left-6" },
];

const Hero = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { t, lang } = useApp();
  const techStack = t.hero.titles;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:pb-0"
    >
      <HeroBackground />

      {/* Compact mobile spacing; original desktop grid. */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative flex flex-col items-start gap-4 md:gap-6"
        >
          <Badge
            variant="outline"
            className="border-zinc-700/80 bg-zinc-950/60 text-zinc-300 md:backdrop-blur-md"
          >
            <span className="me-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {t.hero.available}
          </Badge>

          <div className="w-full space-y-2 md:space-y-3">
            <p className="text-zinc-400">{t.hero.hi}</p>

            <h1 className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent min-[400px]:text-5xl md:text-6xl rtl:py-1 rtl:leading-[1.5] md:rtl:py-2 md:rtl:leading-[1.6]">
              {t.name}
            </h1>

            {/* Reserve space while the typed title changes. */}
            <h2 className="min-h-[2rem] text-xl font-medium text-zinc-300 md:min-h-[2.5rem] md:text-2xl">
              <TypeAnimation
                key={lang}
                sequence={techStack.flatMap((item) => [item, 2200])}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-emerald-400/90"
              />
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-6 text-zinc-400 md:text-base md:leading-7">
            <Latin>{t.hero.intro}</Latin>
          </p>

          {/* Social links follow the buttons on mobile. */}
          <div className="order-2 flex items-center gap-4 lg:order-none">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full md:h-10 md:w-10 border border-zinc-800/80 bg-zinc-950/50 text-zinc-400 transition hover:border-zinc-500 hover:text-white md:backdrop-blur-md"
              >
                <Icon size={18} className="transition group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Primary actions appear immediately after the introduction on mobile. */}
          <div className="order-1 flex flex-wrap gap-3 lg:order-none md:gap-4">
            <Button asChild className="bg-white text-black hover:bg-zinc-200">
              <a href="#projects">{t.hero.viewProjects}</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-zinc-700 bg-zinc-950/40 text-white hover:bg-zinc-900 hover:text-white md:backdrop-blur"
            >
              <a href="#contact">{t.hero.contactMe}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative shrink-0">
            {/* Rotating rim on desktop; static on mobile. */}
            <motion.div
              className="absolute -inset-1 rounded-full opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(16,185,129,0.35), transparent, rgba(255,255,255,0.22), transparent)",
              }}
              animate={isDesktop ? { rotate: 360 } : undefined}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Portrait glow runs on desktop only. */}
            {isDesktop && (
              <motion.div
                className="absolute -inset-4 rounded-full bg-emerald-500/15 blur-2xl"
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [0.95, 1.04, 0.95],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Smaller portrait on mobile; existing desktop sizes. */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="relative h-56 w-56 overflow-hidden rounded-full border border-zinc-700/50 bg-photo p-[3px] shadow-2xl shadow-black/50 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
            >
              <div className="h-full w-full overflow-hidden rounded-full border border-zinc-800 bg-photo">
                <img
                  src="/profile.webp"
                  alt={t.name}
                  width={498}
                  height={501}
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {floatingBadges.map((badge, index) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.12 }}
                className={`absolute ${badge.className} rounded-full border border-zinc-700/60 bg-zinc-950/80 px-3 py-1 text-xs font-medium text-zinc-300 md:backdrop-blur-md`}
              >
                <motion.span
                  animate={isDesktop ? { y: [0, -4, 0] } : undefined}
                  transition={{
                    duration: 2.5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="block"
                >
                  {badge.label}
                </motion.span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;