import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">
        <p>© {year} Ammar Alsaedi. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="transition hover:text-white">
            <FaGithub size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
            <FaLinkedin size={16} />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email" className="transition hover:text-white">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;