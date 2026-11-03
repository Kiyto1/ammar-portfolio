import type { ComponentType } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";

export const GITHUB_URL = "https://github.com/Kiyto1";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/ammar-al-saedi-240114242/";
export const EMAIL = "AmmarHassan.CS@gmail.com";
export const CV_PATH = "/Ammar_Alsaedi_CV.pdf";

type IconProps = {
  size?: number;
  "aria-hidden"?: boolean | "true" | "false";
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<IconProps>;
};

// Display URLs without the protocol or trailing slash.
const display = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const links: ContactLink[] = [
  {
    label: "Email",
    value: EMAIL,
    href: EMAIL ? `mailto:${EMAIL}` : "",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: display(LINKEDIN_URL),
    href: LINKEDIN_URL,
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: display(GITHUB_URL),
    href: GITHUB_URL,
    Icon: FaGithub,
  },
].filter((link) => link.href);

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const { t } = useApp();
  // Show a name instead of the raw profile address.
  const values: Record<string, string> = {
    LinkedIn: t.name,
    GitHub: "Kiyto1",
  };
  const labels: Record<string, string> = {
    Email: t.contact.email,
    LinkedIn: t.contact.linkedin,
    GitHub: t.contact.github,
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Target the content after the section padding, outside the animation. */}
      <div id="contact" className="scroll-mt-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="border-zinc-700 bg-zinc-950 text-zinc-300"
            >
              {t.contact.badge}
            </Badge>

            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {t.contact.heading}
            </h2>

            <p className="max-w-md leading-7 text-zinc-400">
              {t.contact.body}
            </p>

            {CV_PATH && (
              <Button
                asChild
                className="bg-emerald-500 text-black hover:bg-emerald-400"
              >
                <a href={CV_PATH} download>
                  <Download size={16} aria-hidden="true" />
                  {t.contact.download}
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
                  className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-panel-3 p-4 transition-colors hover:border-emerald-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-emerald-400">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-zinc-500">
                      {labels[label] ?? label}
                    </span>
                    <span
                      dir={label === "Email" ? "ltr" : undefined}
                      className="block truncate text-start text-sm text-zinc-100 rtl:text-right"
                    >
                      {values[label] ?? value}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;