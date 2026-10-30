import { motion } from "motion/react";
import { FileCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
export const EMAIL = "AmmarHassan.CS@gmail.com";
import ProfileBackground from "./ProfileBackground";
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
  SiGooglegemini,
  SiOpenjdk,
} from "react-icons/si";

// Define the structure of each skill category.
type SkillGroup = {
  title: string;
  icons: { Icon: IconType; color: string }[];
  skills: string[];
};

// Content used to generate the skill cards.
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icons: [
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: SiTailwindcss, color: "#38BDF8" },
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    title: "Backend",
    icons: [
      { Icon: SiNodedotjs, color: "#5FA04E" },
      { Icon: SiFastapi, color: "#009688" },
      { Icon: SiPython, color: "#FFD43B" },
      { Icon: SiOpenjdk, color: "#ED8B00" },
    ],
    skills: ["Node.js", "FastAPI", "Python", "Java", "REST APIs"],
  },
  {
    title: "Database & Tools",
    icons: [
      { Icon: SiSupabase, color: "#3ECF8E" },
      { Icon: SiGithub, color: "#FFFFFF" },
      { Icon: SiVercel, color: "#FFFFFF" },
    ],
    skills: ["Supabase", "SQL", "Git", "GitHub", "Vercel"],
  },
  {
    title: "AI & Integration",
    icons: [
      { Icon: SiGooglegemini, color: "#8E75B2" },
      { Icon: SiPython, color: "#FFD43B" },
      { Icon: SiFastapi, color: "#009688" },
    ],
    skills: ["AI APIs", "RAG", "LangGraph", "OCR", "Automation", "API Integration"],
  },
];

// Coordinate the entrance animations of the skill cards.
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Colors for the decorative code preview.
const syntax = {
  keyword: "#C792EA",
  fn: "#82AAFF",
  string: "#C3E88D",
  type: "#FFCB6B",
  text: "#E4E4E7",
  comment: "#546E7A",
};

type Token = [text: string, color: keyof typeof syntax];

// The card shows a small "developer profile" object, including availability.
const profileCode = `// Who I am and what I'm looking for
const developer = {
  name: "Ammar Alsaedi",
  role: "Full-Stack Developer",
  education: "Computer Science, Islamic University of Madinah",
  stack: ["React", "TypeScript", "Python", "FastAPI"],
  location: ["Jeddah", "Madinah"],
  status: "Open to work",
${EMAIL ? `  contact: "${EMAIL}",\n` : ""}} as const;`;

// Small highlighter: comments, strings, keywords and function calls.
const pattern = /(\/\/.*)|("[^"]*")|\b(const|as)\b|\b([A-Za-z_]\w*)(?=\()/g;

const highlight = (line: string): Token[] => {
  const tokens: Token[] = [];
  let last = 0;
  for (const m of line.matchAll(pattern)) {
    const start = m.index ?? 0;
    if (start > last) tokens.push([line.slice(last, start), "text"]);
    const color = m[1] ? "comment" : m[2] ? "string" : m[3] ? "keyword" : "fn";
    tokens.push([m[0], color]);
    last = start + m[0].length;
  }
  if (last < line.length) tokens.push([line.slice(last), "text"]);
  return tokens;
};

// Code card that doubles as a status line: the availability row is highlighted.
const CodeCard = () => {
  const lines = profileCode.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-[#0D0D0D] shadow-xl shadow-black/30"
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#111111] px-4 py-2.5">
        <FileCode size={14} className="shrink-0 text-emerald-400" aria-hidden="true" />
        <span className="truncate font-mono text-xs text-zinc-500">developer.ts</span>
      </div>

      {/* Preserve code spacing and allow horizontal scrolling. */}
      <div className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-6 sm:text-[13px]">
        {lines.map((line, i) => {
          const isStatus = line.includes("status:");
          return (
            <div
              key={i}
              className={`flex gap-4 ${isStatus ? "-mx-2 rounded bg-emerald-500/10 px-2" : ""}`}
            >
              <span className="w-5 shrink-0 select-none text-right text-zinc-600">{i + 1}</span>
              <span className="flex items-center whitespace-pre" style={{ color: syntax.text }}>
                {highlight(line).map(([text, color], j) => (
                  <span key={j} style={{ color: syntax[color] }}>
                    {text}
                  </span>
                ))}
                {isStatus && (
                  <span className="relative ml-3 flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Profile = () => {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <ProfileBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        {/* About text and animated underline. */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="min-w-0 space-y-6"
        >
          <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
            About Me
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Clean software for real problems.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-24 origin-left bg-gradient-to-r from-zinc-500 to-transparent"
          />

          <p className="leading-7 text-zinc-400">
            I am a Computer Science graduate with a strong interest in
            full-stack development and artificial intelligence. I enjoy
            building practical applications, turning ideas into usable
            interfaces, and working with modern technologies such as React,
            TypeScript, Node.js, Python, Java and FastAPI.
          </p>
        </motion.div>

        <div className="min-w-0 space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-zinc-200">Core stack</h3>
            <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">
              Frontend · Backend · Tools · AI
            </span>
          </div>

          {/* Generate skill cards with staggered entrance animations. */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-4 xl:grid-cols-2"
          >
            {skillGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="min-w-0">
                <Card className="h-full min-w-0 border-zinc-800 bg-[#111111] text-white transition-colors duration-300 hover:border-zinc-600">
                  <CardContent className="min-w-0 space-y-4 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="truncate text-sm font-semibold text-zinc-200">{group.title}</h4>
                      <div className="flex shrink-0 gap-1.5">
                        {group.icons.map(({ Icon, color }, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y: -2, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950"
                          >
                            <Icon size={14} color={color} />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Code review card, full section width, sitting below both columns */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <CodeCard />
      </motion.div>
      </div>
    </section>
  );
};

export default Profile;