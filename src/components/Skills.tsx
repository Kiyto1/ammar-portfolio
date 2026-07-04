import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiPython,
  SiSupabase,
  SiGithub,
  SiVercel,
  SiOpenid,
} from "react-icons/si";

type IconDef = {
  Icon: IconType;
  color: string;
};

type SkillGroup = {
  title: string;
  description: string;
  icons: IconDef[];
  skills: string[];
  glow: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Building responsive and clean user interfaces.",
    icons: [
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: SiTailwindcss, color: "#38BDF8" },
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
    glow: "#61DAFB",
  },
  {
    title: "Backend",
    description: "Creating APIs and server-side application logic.",
    icons: [
      { Icon: SiNodedotjs, color: "#5FA04E" },
      { Icon: SiFastapi, color: "#009688" },
      { Icon: SiPython, color: "#FFD43B" },
    ],
    skills: ["Node.js", "FastAPI", "Python", "REST APIs"],
    glow: "#5FA04E",
  },
  {
    title: "Database & Tools",
    description: "Managing data, version control, and deployment.",
    icons: [
      { Icon: SiSupabase, color: "#3ECF8E" },
      { Icon: SiGithub, color: "#FFFFFF" },
      { Icon: SiVercel, color: "#FFFFFF" },
    ],
    skills: ["Supabase", "SQL", "Git", "GitHub", "Vercel"],
    glow: "#3ECF8E",
  },
  {
    title: "AI & Integration",
    description: "Connecting applications with AI and automation tools.",
    icons: [
      { Icon: SiOpenid, color: "#FFFFFF" },
      { Icon: SiPython, color: "#FFD43B" },
      { Icon: SiFastapi, color: "#009688" },
    ],
    skills: ["AI APIs", "OCR", "Automation", "API Integration"],
    glow: "#7C8FFF",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="mb-12 max-w-2xl"
      >
        <Badge
          variant="outline"
          className="mb-4 border-zinc-700 bg-zinc-950 text-zinc-300"
        >
          Skills
        </Badge>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Technologies I use to build clean and practical applications.
        </h2>

        <p className="mt-4 leading-7 text-zinc-400">
          A focused set of tools across frontend, backend, databases, and AI
          integration.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <Card className="relative h-full overflow-hidden border-zinc-800 bg-[#111111]/90 text-white transition hover:border-zinc-700 hover:bg-[#151515]">
              <div
                className="h-[3px] w-full opacity-70"
                style={{
                  background: `linear-gradient(90deg, ${group.glow}, transparent)`,
                }}
              />

              <CardContent className="space-y-6 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {group.icons.map(({ Icon, color }, iconIndex) => (
                      <motion.div
                        key={`${group.title}-${iconIndex}`}
                        whileHover={{ y: -3, scale: 1.08 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 transition-colors"
                      >
                        <Icon size={18} color={color} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;