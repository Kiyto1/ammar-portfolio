import { motion } from "motion/react";
import { ArrowUpRight} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiSupabase,
  SiPython,
  SiFlask,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

type TechTag = { Icon: IconType; label: string; color: string };

const featured = {
  name: "Nahj",
  tagline: "Smart Career Empowerment Platform",
  description:
    "A career guidance platform that matches users to career paths using a RIASEC-based AI assessment, turning a psychological framework into a working recommendation engine end to end.",
  role: "Led development across the stack — assessment logic, matching engine, and the interface presenting results.",
  tech: [
    { Icon: SiReact, label: "React", color: "#61DAFB" },
    { Icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
    { Icon: SiFastapi, label: "FastAPI", color: "#009688" },
    { Icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
  ] as TechTag[],
  link: "#",
  repo: "#",
};

const otherProjects = [
  {
    name: "Saheh AI",
    tagline: "OCR-based exam grading",
    description:
      "Automatically grades handwritten exam answers using OCR, cutting manual review time for instructors.",
    tech: [
      { Icon: SiPython, label: "Python", color: "#FFD43B" },
      { Icon: SiFlask, label: "Flask", color: "#FFFFFF" },
    ] as TechTag[],
    link: "#",
  },
  {
    name: "Tatabu",
    tagline: "Mobile application",
    description:
      "A cross-platform mobile app backed by Supabase and Firebase for data and auth.",
    tech: [
      { Icon: SiFlutter, label: "Flutter", color: "#02569B" },
      { Icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
      { Icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
    ] as TechTag[],
    link: "#",
  },
  {
    name: "Tamem AI",
    tagline: "AI concept & presentation",
    description:
      "An early-stage concept exploring how AI could support study workflows, presented as a pitch rather than a shipped product.",
    tech: [] as TechTag[],
    link: undefined,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedProject = () => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55 }}
    className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
  >
    <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-[#0D0D0D] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#111111] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1 text-center font-mono text-[11px] text-zinc-500">
          nahj.app
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-zinc-800" />
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-full bg-zinc-800" />
            <div className="h-6 w-16 rounded-full bg-zinc-800" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-4 w-3/4 rounded bg-zinc-800" />
          <div className="h-3 w-1/2 rounded bg-zinc-800/70" />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3"
            >
              <div className="h-8 w-8 rounded-md bg-emerald-500/15" />
              <div className="h-2 w-full rounded-full bg-zinc-800" />
              <div className="h-2 w-2/3 rounded-full bg-zinc-800/70" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.06] px-3 py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-xs text-emerald-300/90">Match score calculated</span>
        </motion.div>
      </div>
    </div>

    <div className="min-w-0 space-y-5">
      <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-300">
        Featured project
      </Badge>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{featured.name}</h3>
        <p className="text-sm font-medium text-zinc-400">{featured.tagline}</p>
      </div>

      <p className="leading-7 text-zinc-400">{featured.description}</p>
      <p className="text-sm leading-6 text-zinc-500">{featured.role}</p>

      <div className="flex flex-wrap gap-2">
        {featured.tech.map(({ Icon, label, color }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
          >
            <Icon size={13} color={color} />
            {label}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href={featured.link}
          className="group flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          View project
          <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={featured.repo}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
        >
          Source
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-2xl space-y-4"
      >
        <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
          Projects
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Selected work.</h2>
        <p className="leading-7 text-zinc-400">
          A mix of shipped platforms, applied AI experiments, and one concept still on paper.
        </p>
      </motion.div>

      <div className="mb-16">
        <FeaturedProject />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {otherProjects.map((project) => (
          <motion.div key={project.name} variants={fadeUp} whileHover={{ y: -5 }} transition={{ duration: 0.25 }} className="min-w-0">
            <Card className="group h-full min-w-0 border-zinc-800 bg-[#111111] text-white transition-colors duration-300 hover:border-zinc-600">
              <CardContent className="flex h-full min-w-0 flex-col justify-between gap-4 p-5">
                <div className="min-w-0 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="truncate text-base font-semibold text-white">{project.name}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        aria-label={`Open ${project.name}`}
                        className="mt-0.5 shrink-0 text-zinc-500 transition group-hover:text-white"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{project.tagline}</p>
                  <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
                </div>

                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(({ Icon, label, color }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-400"
                      >
                        <Icon size={12} color={color} />
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;