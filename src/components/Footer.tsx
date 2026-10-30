import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ComponentType } from "react";
// Single place for contact details. Empty values are hidden everywhere they are used.
export const GITHUB_URL = "https://github.com/Kiyto1";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ammar-al-saedi-240114242/";
export const EMAIL = "AmmarHassan.CS@gmail.com";
export const CV_PATH = "/Ammar_Alsaedi_CV.pdf"; 
type IconProps = { size?: number; "aria-hidden"?: boolean | "true" | "false" };
type SocialLink = { label: string; href: string; Icon: ComponentType<IconProps> };

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: FaLinkedin },
  { label: "Email", href: EMAIL ? `mailto:${EMAIL}` : "", Icon: Mail },
].filter((link) => link.href);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "rounded-sm transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <a href="#home" className="text-lg font-semibold tracking-wide text-white">
              Ammar<span className="text-emerald-400">.</span>
            </a>
            <p className="text-sm leading-6 text-zinc-500">
              Full-stack and AI developer. Open to roles in Jeddah and Madinah.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-6 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          {socialLinks.length > 0 && (
            <ul className="flex items-center gap-4 text-zinc-400">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className={linkClass}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/80 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center">
          <p>
            © {year} Ammar. Built with React, TypeScript and Tailwind CSS.
          </p>
          <a href="#home" className={`inline-flex items-center gap-1.5 ${linkClass}`}>
            Back to top
            <ArrowUp size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;