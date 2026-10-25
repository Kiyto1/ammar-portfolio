import { motion } from "motion/react";
import { GitPullRequest, MessageSquare, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  SiOpenid,
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
    ],
    skills: ["Node.js", "FastAPI", "Python", "REST APIs"],
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
      { Icon: SiOpenid, color: "#FFFFFF" },
      { Icon: SiPython, color: "#FFD43B" },
      { Icon: SiFastapi, color: "#009688" },
    ],
    skills: ["AI APIs", "OCR", "Automation", "API Integration"],
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

// Static illustration of a code review; the displayed code is not executed.
const CodeReviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-[#0D0D0D] shadow-xl shadow-black/30"
    >
      {/* Editor title bar and illustrative pull request label. */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#111111] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="ml-2 truncate font-mono text-xs text-zinc-500">career-match.ts</span>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-2 py-0.5">
          <GitPullRequest size={11} className="text-emerald-400" />
          <span className="text-[10px] text-zinc-500">PR #42</span>
        </div>
      </div>

      {/* Preserve code spacing and allow horizontal scrolling. */}
      <div className="space-y-0.5 overflow-x-auto px-4 py-4 font-mono text-[12px] leading-6">
        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">1</span>
          <span className="whitespace-pre" style={{ color: syntax.comment }}>
            // Rank open roles against a candidate's RIASEC profile
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">2</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.keyword }}>export async function</span>{" "}
            <span style={{ color: syntax.fn }}>matchCareer</span>
            <span style={{ color: syntax.text }}>(profile: </span>
            <span style={{ color: syntax.type }}>RiasecProfile</span>
            <span style={{ color: syntax.text }}>) {"{"}</span>
          </span>
        </div>

        <div className="-mx-2 flex gap-4 rounded bg-emerald-500/10 px-2">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">3</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.keyword }}>  const</span>{" "}
            <span style={{ color: syntax.text }}>scores = </span>
            <span style={{ color: syntax.fn }}>normalizeScores</span>
            <span style={{ color: syntax.text }}>(profile.answers);</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">4</span>
          <span className="whitespace-pre"> </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">5</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.keyword }}>  const</span>{" "}
            <span style={{ color: syntax.text }}>matches = </span>
            <span style={{ color: syntax.keyword }}>await</span>
            <span style={{ color: syntax.text }}> db</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">6</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.text }}>    .from(</span>
            <span style={{ color: syntax.string }}>'careers'</span>
            <span style={{ color: syntax.text }}>)</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">7</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.text }}>    .select(</span>
            <span style={{ color: syntax.string }}>'*'</span>
            <span style={{ color: syntax.text }}>)</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">8</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.text }}>    .order(</span>
            <span style={{ color: syntax.string }}>'fit_score'</span>
            <span style={{ color: syntax.text }}>, {"{"} ascending: </span>
            <span style={{ color: syntax.keyword }}>false</span>
            <span style={{ color: syntax.text }}> {"}"});</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">9</span>
          <span className="whitespace-pre">
            <span style={{ color: syntax.keyword }}>  return</span>{" "}
            <span style={{ color: syntax.fn }}>rankByFit</span>
            <span style={{ color: syntax.text }}>(matches, scores);</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span className="w-5 shrink-0 select-none text-right text-zinc-600">10</span>
          <span className="whitespace-pre" style={{ color: syntax.text }}>{"}"}</span>
        </div>

        {/* Illustrative reviewer comment. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -8 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-4 flex items-start gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 p-3"
        >
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10">
            <MessageSquare size={11} className="text-emerald-400" />
          </div>
          <div className="min-w-0 space-y-1">
            <p className="text-xs font-medium text-zinc-300">Reviewer</p>
            <p className="text-xs leading-5 text-zinc-500">
              Clean normalization step — good call keeping this isolated from the fetch logic.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Static review summary. */}
      <div className="flex items-center justify-between border-t border-zinc-800 bg-[#111111] px-4 py-2.5">
        <span className="text-[11px] text-zinc-500">2 files changed</span>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1">
          <Check size={11} className="text-emerald-400" />
          <span className="text-[11px] font-medium text-emerald-400">Approved</span>
        </div>
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
        <CodeReviewCard />
      </motion.div>
      </div>
    </section>
  );
};

export default Profile;