import React, { useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Contact = () => {
  // Track the form's display state; this does not confirm actual delivery.
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    // Prevent the browser's default form submission and page reload.
    e.preventDefault();
    // Wire this up to your form endpoint (Formspree, Resend, etc.)
    setStatus("sent");
  };

  return (
    // Animate the section once when 25% of it enters the viewport.
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Stack on smaller screens and use two columns from the md breakpoint. */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
            Contact
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Let's build something together.
          </h2>

          <p className="max-w-md leading-7 text-zinc-400">
            Have a project in mind or just want to talk shop? My inbox is open.
          </p>

          {/* Social links use accessible labels for their icon-only content. */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-[#5B7FDE]/60 hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-[#5B7FDE]/60 hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-[#5B7FDE]/60 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Run the submit handler after the browser validates the required fields. */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-zinc-400">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-lg border border-zinc-800 bg-[#111111] px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#5B7FDE]"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-zinc-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-800 bg-[#111111] px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#5B7FDE]"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-zinc-800 bg-[#111111] px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#5B7FDE]"
              placeholder="Tell me about your project"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200"
          >
            {/* Update the button text according to the form's display state. */}
            {status === "sent" ? "Message sent" : "Send message"}
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;