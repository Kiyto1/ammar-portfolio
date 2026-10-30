import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Characters available for the falling code effect.
const CHARS = "{}<>/=+-*;()[]01".split("");

const ProfileBackground = () => {
  // Hold a reference to the canvas element without triggering re-renders.
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Skip the animation on phones and when the visitor prefers reduced motion.
  const enabled = useMediaQuery("(min-width: 768px) and (prefers-reduced-motion: no-preference)");

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let columns = 0;

    // Track each column's vertical position in character-sized steps.
    let drops: number[] = [];
    const fontSize = 15;

    // Match the canvas drawing area to its parent and reset the columns.
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);

      // Start columns at varied positions up to one screen above the canvas.
      const rows = Math.ceil(height / fontSize);
      drops = Array.from({ length: columns }, () => -Math.floor(Math.random() * rows));
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let rafId = 0;
    let running = false;

    const draw = () => {
      if (!running) return;
      frame++;

      // Update the drawing on every third animation callback.
      if (frame % 3 === 0) {
        // Gradually cover previous characters to create fading trails.
        ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < columns; i++) {
          // Select a random character and calculate its pixel coordinates.
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Occasionally draw green characters among the white ones.
          ctx.fillStyle = Math.random() < 0.06 ? "rgba(52,211,153,0.35)" : "rgba(255,255,255,0.14)";
          ctx.fillText(char, x, y);

          // Give columns below the canvas a chance to restart at the top.
          if (y > height && Math.random() > 0.985) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      // Schedule the next animation callback.
      rafId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    // Only animate while the section is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    observer.observe(canvas);

    // Stop the animation and remove listeners during cleanup.
    return () => {
      observer.disconnect();
      stop();
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    // Keep the decoration non-interactive and hidden from assistive technology.
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{
        maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 85%)",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-40" />
    </div>
  );
};

export default ProfileBackground;