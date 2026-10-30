import type { ReactNode } from "react";
import { ArrowUpRight, Bot, Check, Clock, Compass, MessageSquare, Play, type LucideIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  contribution?: string;
  highlights: string[];
  technologies: string[];
  Icon: LucideIcon;
  repository?: string;
  demo?: string;
  demoNote?: string;
  visual: ReactNode;
};

/* ------------------------------------------------------------------ */
/* Shared window chrome, same look as the editor card in Profile.tsx   */
/* ------------------------------------------------------------------ */

const Window = ({
  title,
  Icon,
  footer,
  children,
}: {
  title: string;
  Icon: LucideIcon;
  footer: string;
  children: ReactNode;
}) => (
  <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-[#0D0D0D] shadow-2xl shadow-black/40">
    <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#111111] px-4 py-2.5">
      <Icon size={14} className="shrink-0 text-emerald-400" aria-hidden="true" />
      <span className="truncate font-mono text-xs text-zinc-500">{title}</span>
    </div>
    {children}
    <div className="border-t border-zinc-800/80 px-5 py-2.5 text-[11px] text-zinc-600">
      {footer}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* CRM Assistant: screenshot of the real app, linked to the live demo  */
/* ------------------------------------------------------------------ */

const CRM_DEMO_URL = "https://crm-agent-yuoq.onrender.com/";

// The file lives in public/, so it is served from the site root.
const CrmScreenshot = () => (
  <Window title="crm-assistant" Icon={MessageSquare} footer="Screenshot of the CRM Assistant.">
    <a
      href={CRM_DEMO_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Open the live CRM Assistant demo"
      className="group relative block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-400"
    >
      <img
        src="/Demo.png"
        alt="Screenshot of the CRM Assistant chat interface"
        loading="lazy"
        className="block h-auto w-full"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        Open live demo
        <ArrowUpRight size={15} className="ml-1.5" aria-hidden="true" />
      </span>
    </a>
  </Window>
);

/* ------------------------------------------------------------------ */
/* Nahj: recorded preview of the company side                          */
/* ------------------------------------------------------------------ */

// The file lives in public/, so it is served from the site root.
const NahjVideo = () => (
  <Window title="nahj-company-side" Icon={Play} footer="Recorded demo of the company side of Nahj.">
    <video
      controls
      playsInline
      preload="metadata"
      aria-label="Demo of the company side of the Nahj platform"
      className="aspect-video w-full bg-black"
    >
      <source src="/Nahj_Demo.mp4" type="video/mp4" />
      Your browser can't play this video.
    </video>
  </Window>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const projects: Project[] = [
  {
    id: "crm-assistant",
    name: "AI-Powered CRM Assistant",
    category: "AI agent",
    description:
      "A conversational assistant for managing customers, tasks, and notes. It finds overdue follow-ups, answers questions from stored knowledge with source references, and asks for approval before saving any change.",
    highlights: [
      "Conversational customer search with task and note management",
      "Overdue follow-up detection",
      "Approval before changes are saved, with conversations and pending approvals kept between sessions",
    ],
    technologies: ["React", "Python", "FastAPI", "LangGraph", "Gemini", "Chroma", "SQLite"],
    Icon: Bot,
    repository: "https://github.com/Kiyto1/crm-agent",
    demo: CRM_DEMO_URL,
    demoNote:
      "Hosted on a free server. If the demo has been idle, the first load can take up to a minute.",
    visual: <CrmScreenshot />,
  },
  {
    id: "nahj",
    name: "Nahj",
    category: "Career platform",
    description:
      "A career matching platform that connects students and companies, with AI-assisted recommendations informed by RIASEC interest assessments.",
    contribution:
      "My contribution: the landing page and the company side of the platform, built full-stack and integrated with the AI and student sides. The demo shows the company side.",
    highlights: [
      "Matches students and companies on one platform",
      "Recommendations informed by RIASEC assessments",
      "Prompt design for consistent AI output",
    ],
    technologies: ["React", "Python", "FastAPI", "Supabase", "PostgreSQL"],
    Icon: Compass,
    visual: <NahjVideo />,
  },
];

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

const ProjectRow = ({ project, flip }: { project: Project; flip: boolean }) => {
  const { id, name, category, description, contribution, highlights, technologies, Icon, repository, demo, demoNote, visual } =
    project;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
    >
      <div className={cn("min-w-0 space-y-6 lg:col-span-5", flip && "lg:order-2")}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/[0.07] text-emerald-400">
              <Icon size={18} aria-hidden="true" />
            </span>
            <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
              {category}
            </Badge>
          </div>
          <h3 id={`${id}-title`} className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            {name}
          </h3>
        </div>

        <p className="leading-7 text-zinc-400">{description}</p>
        {contribution && <p className="text-sm leading-6 text-zinc-500">{contribution}</p>}

        <ul className="space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
              <Check size={16} className="mt-1 shrink-0 text-emerald-400" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2" aria-label={`${name} technologies`}>
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(demo || repository) && (
          <div className="flex flex-wrap gap-3">
            {demo && (
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400">
                <a href={demo} target="_blank" rel="noreferrer">
                  Live demo
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </Button>
            )}
            {repository && (
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900"
              >
                <a href={repository} target="_blank" rel="noreferrer">
                  <SiGithub size={15} aria-hidden="true" />
                  View source on GitHub
                </a>
              </Button>
            )}
          </div>
        )}

        {demo && demoNote && (
          <p className="flex items-start gap-2 text-xs leading-5 text-zinc-500">
            <Clock size={13} className="mt-0.5 shrink-0 text-zinc-600" aria-hidden="true" />
            {demoNote}
          </p>
        )}
      </div>

      <div className={cn("min-w-0 lg:col-span-7", flip && "lg:order-1")}>{visual}</div>
    </article>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <div className="mb-16 max-w-2xl space-y-4">
        <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
          Projects
        </Badge>
        <h2 id="projects-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Selected work.
        </h2>
        <p className="leading-7 text-zinc-400">
          An AI agent that asks before it acts, and a platform that matches people to careers.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} flip={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;