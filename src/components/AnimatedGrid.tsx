import { useEffect, useRef } from 'react';

interface AnimatedGridProps {
  color?: string;
  opacity?: number;
  lineWidth?: number;
  gridSize?: number;
}

export function AnimatedGrid({
  color = '#373e98',
  opacity = 0.15,
  lineWidth = 1,
  gridSize = 50,
}: AnimatedGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId: number;
    let offset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = opacity;

      // Animated vertical lines
      for (let x = -gridSize + offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Animated horizontal lines
      for (let y = -gridSize + offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animated glow points at intersections
      ctx.globalAlpha = opacity * 0.5;
      for (let x = -gridSize + offset; x < canvas.width; x += gridSize) {
        for (let y = -gridSize + offset; y < canvas.height; y += gridSize) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 3);
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      offset += 0.3;
      if (offset >= gridSize) offset = 0;

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, opacity, lineWidth, gridSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    />
  );
}
