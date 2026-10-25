import { useEffect, useRef } from "react";

const CHARS = "{}<>/=+-*;()[]01".split("");

const ProfileBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 15;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -height));
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let rafId: number;

    const draw = () => {
      frame++;
      if (frame % 3 === 0) {
        ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < columns; i++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillStyle = Math.random() < 0.06 ? "rgba(52,211,153,0.35)" : "rgba(255,255,255,0.14)";
          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.985) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
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