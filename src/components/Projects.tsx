import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Nahj — Smart Career Empowerment Platform",
    description: "A career guidance platform that matches users to career paths using a RIASEC-based AI assessment.",
    stack: ["React", "Next.js", "FastAPI", "Supabase", "AI"],
    link: "#",
  },
  {
    title: "Saheh AI",
    description: "An OCR-based system for grading handwritten exam answers automatically.",
    stack: ["Python", "Flask", "Azure", "OCR"],
    link: "#",
  },
  {
    title: "Tatabu",
    description: "A mobile application built with Flutter, backed by Supabase and Firebase.",
    stack: ["Flutter", "Supabase", "Firebase"],
    link: "#",
  },
  {
    title: "Tamem AI",
    description: "An AI concept and presentation project exploring how AI could support study workflows.",
    stack: ["AI Concept", "Presentation"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-12 space-y-4">
        <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
          Projects
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Selected work.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="group h-full border-zinc-800 bg-[#111111] text-white transition hover:border-[#5B7FDE]/50">
              <CardContent className="flex h-full flex-col justify-between gap-4 p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        aria-label={`Open ${project.title}`}
                        className="mt-1 text-zinc-500 transition group-hover:text-[#5B7FDE]"
                      >
                        <FiArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;