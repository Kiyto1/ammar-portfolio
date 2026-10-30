import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Characters available for the falling code effect.
const CHARS = "{}<>/=+-*;()[]01".split("");

const ProfileBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Skip the animation on mobile and for reduced-motion visitors.
  const enabled = useMediaQuery(
    "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  );

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];

    const fontSize = 15;

    // Match the canvas to its parent and reset the columns.
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);

      const rows = Math.ceil(height / fontSize);
      drops = Array.from(
        { length: columns },
        () => -Math.floor(Math.random() * rows),
      );
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let rafId = 0;
    let running = false;

    const draw = () => {
      if (!running) return;

      frame++;

      // Draw on every third animation callback.
      if (frame % 3 === 0) {
        ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < columns; i++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillStyle =
            Math.random() < 0.06
              ? "rgba(52,211,153,0.35)"
              : "rgba(255,255,255,0.14)";

          ctx.fillText(char, x, y);

          // Occasionally restart columns that have left the canvas.
          if (y > height && Math.random() > 0.985) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

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

    // Animate only while the canvas is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start();
      } else {
        stop();
      }
    });

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      stop();
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{
        maskImage:
          "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 85%)",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-40" />
    </div>
  );
};

export default ProfileBackground;