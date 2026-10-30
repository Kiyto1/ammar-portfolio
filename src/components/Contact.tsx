import type { ComponentType } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Single place for contact details. Empty values are hidden everywhere they are used.
export const GITHUB_URL = "https://github.com/Kiyto1";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ammar-al-saedi-240114242/";
export const EMAIL = "AmmarHassan.CS@gmail.com";
export const CV_PATH = "/Ammar_Alsaedi_CV.pdf";
type IconProps = { size?: number; "aria-hidden"?: boolean | "true" | "false" };

type ContactLink = {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<IconProps>;
};

// "https://www.linkedin.com/in/x/" -> "linkedin.com/in/x"
const display = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Links left empty in src/lib/contact.ts are filtered out instead of shown dead.
const links: ContactLink[] = [
  { label: "Email", value: EMAIL, href: EMAIL ? `mailto:${EMAIL}` : "", Icon: Mail },
  { label: "LinkedIn", value: display(LINKEDIN_URL), href: LINKEDIN_URL, Icon: FaLinkedin },
  { label: "GitHub", value: display(GITHUB_URL), href: GITHUB_URL, Icon: FaGithub },
].filter((link) => link.href);

const Contact = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <Badge variant="outline" className="border-zinc-700 bg-zinc-950 text-zinc-300">
            Contact
          </Badge>

          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Let's work together.
          </h2>

          <p className="max-w-md leading-7 text-zinc-400">
            I'm looking for full-stack and AI developer roles in Jeddah and Madinah. Reach out
            through any of these.
          </p>

          {CV_PATH && (
            <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400">
              <a href={CV_PATH} download>
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </Button>
          )}
        </div>

        <ul className="space-y-3">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-[#101010] p-4 transition-colors hover:border-emerald-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-emerald-400">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-500">{label}</span>
                  <span className="block truncate text-sm text-zinc-100">{value}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;