import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  // Track whether the page has been scrolled more than 20 pixels.
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    // Animate the header into view and keep it fixed above the page content.
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-zinc-800 bg-[#0A0A0A]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Navigate back to the home section. */}
        <a href="#home" className="text-lg font-semibold tracking-wide">
          Ammar
        </a>

        {/* Show the navigation links from the medium breakpoint onward. */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Render a contact link with the shared button styling. */}
        <Button
          asChild
          className="bg-white text-black hover:bg-zinc-200"
        >
          <a href="#contact">Contact Me</a>
        </Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;