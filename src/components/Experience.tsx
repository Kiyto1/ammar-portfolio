import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
};

const experience: ExperienceItem[] = [
  {
    role: "IT Intern / Cooperative Training",
    company: "Prince Sultan Armed Forces Hospital",
    location: "Madinah, Saudi Arabia",
    period: "Jul 2025 — Aug 2025",
    description:
      "Supported the IT department with day-to-day technical operations and hands-on systems work during a cooperative training placement.",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-12 space-y-4">
        <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
          Experience
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Where I have worked.
        </h2>
      </div>

      <div className="relative space-y-10 border-l border-zinc-800 pl-8">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border border-[#5B7FDE] bg-[#0A0A0A]" />
            <p className="text-sm text-zinc-500">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{item.role}</h3>
            <p className="text-sm text-zinc-400">
              {item.company} · {item.location}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;