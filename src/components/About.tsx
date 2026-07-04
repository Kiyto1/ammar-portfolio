import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Code2, Sparkles, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: Code2, text: "Full-stack web development" },
  { icon: Sparkles, text: "React, TypeScript, and modern UI" },
  { icon: GraduationCap, text: "AI-powered academic and hackathon projects" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-6xl px-6 py-24"
    >
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 md:sticky md:top-28"
        >
          <Badge
            variant="outline"
            className="border-zinc-700 bg-zinc-950 text-zinc-300"
          >
            About Me
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Building practical software with clean user experiences.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-24 origin-left bg-gradient-to-r from-zinc-500 to-transparent"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="leading-7 text-zinc-400"
          >
            I am a Computer Science graduate with a strong interest in
            full-stack development and artificial intelligence. I enjoy building
            practical applications, turning ideas into usable interfaces, and
            working with modern technologies such as React, TypeScript, Node.js,
            Python, and FastAPI.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {highlights.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="group h-full border-zinc-800 bg-[#111111] text-white transition-colors duration-300 hover:border-zinc-500 hover:bg-[#151515]">
                  <CardContent className="flex h-full flex-col gap-4 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 group-hover:rotate-3 group-hover:border-zinc-600 group-hover:text-white">
                      <Icon size={16} />
                    </div>

                    <p className="text-sm leading-6 text-zinc-300">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;