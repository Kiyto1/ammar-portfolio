import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroBackground from "./HeroBackground";

const techStack = [
  "Full-Stack Developer",
  "React & TypeScript",
  "Node.js & Python",
  "AI-Powered Apps",
];

const socialLinks = [
  { href: "#", label: "GitHub", icon: FaGithub },
  { href: "#", label: "LinkedIn", icon: FaLinkedin },
  {
    href: "mailto:your-email@example.com",
    label: "Email",
    icon: Mail,
  },
];

const floatingBadges = [
  { label: "React", className: "-left-4 top-8 md:-left-8" },
  { label: "TS", className: "-right-2 top-16 md:-right-6" },
  { label: "Node", className: "bottom-12 -left-2 md:-left-6" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative space-y-6"
        >
          <Badge
            variant="outline"
            className="border-zinc-700/80 bg-zinc-950/60 text-zinc-300 backdrop-blur-md"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </Badge>

          <div className="space-y-3">
            <p className="text-zinc-400">Hi, I am</p>

            <h1 className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
              Ammar Alsaedi
            </h1>

            <h2 className="min-h-[2rem] text-xl font-medium text-zinc-300 md:min-h-[2.5rem] md:text-2xl">
              <TypeAnimation
                sequence={techStack.flatMap((item) => [item, 2200])}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-emerald-400/90"
              />
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-zinc-400">
            Computer Science graduate focused on building clean, practical web
            applications using React, TypeScript, Node.js, Python, and
            AI-powered tools.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-950/50 text-zinc-400 backdrop-blur-md transition hover:border-zinc-500 hover:text-white"
              >
                <Icon size={18} className="transition group-hover:scale-110" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-white text-black hover:bg-zinc-200">
              <a href="#projects">View Projects</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-zinc-700 bg-zinc-950/40 text-white backdrop-blur hover:bg-zinc-900 hover:text-white"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative shrink-0">
            <motion.div
              className="absolute -inset-1 rounded-full opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(16,185,129,0.35), transparent, rgba(255,255,255,0.22), transparent)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute -inset-4 rounded-full bg-emerald-500/15 blur-2xl"
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [0.95, 1.04, 0.95],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="relative h-72 w-72 overflow-hidden rounded-full border border-zinc-700/50 bg-zinc-950 p-[3px] shadow-2xl shadow-black/50 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96"
            >
              <div className="h-full w-full overflow-hidden rounded-full border border-zinc-800 bg-zinc-900">
                <img
                  src="/profile.png"
                  alt="Ammar Alsaedi"
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
                className={`absolute ${badge.className} rounded-full border border-zinc-700/60 bg-zinc-950/80 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md`}
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
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