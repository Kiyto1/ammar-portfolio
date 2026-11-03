import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";

const Navbar = () => {
  const { t, theme, toggleTheme, toggleLang } = useApp();

  // Track whether the page has been scrolled more than 20 pixels.
  const [isScrolled, setIsScrolled] = useState(false);
  // Mobile menu state.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Update the navbar's appearance when the user scrolls.
    window.addEventListener("scroll", handleScroll);

    // Remove the listener when this effect is cleaned up.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu with Escape, and when the screen grows to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const iconButton =
    "flex h-9 min-w-9 items-center justify-center rounded-full border border-zinc-800 px-2 text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    // Animate the header into view and keep it fixed above the page content.
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || open
          ? "border-b border-zinc-800 bg-page/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-20">
        {/* Navigate back to the home section. */}
        <a href="#home" className="text-lg font-semibold tracking-wide">
          {t.firstName}
        </a>

        {/* Show the navigation links from the medium breakpoint onward. */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.langLabel}
            className={iconButton}
          >
            {t.nav.langButton}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.toLight : t.nav.toDark}
            className={iconButton}
          >
            {theme === "dark" ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </button>

          {/* Desktop contact button. On phones it lives in the menu. */}
          <Button
            asChild
            className="hidden bg-white text-black hover:bg-zinc-200 lg:inline-flex"
          >
            <a href="#contact">{t.nav.contactMe}</a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${iconButton} lg:hidden`}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-zinc-800 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-zinc-800/70 py-3.5 text-base text-zinc-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pb-2 pt-4">
              <Button
                asChild
                className="h-10 w-full bg-white text-black hover:bg-zinc-200"
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  {t.nav.contactMe}
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
