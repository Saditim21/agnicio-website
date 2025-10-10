import { useEffect, useRef } from 'react';

interface LaserFlowProps {
  opacity?: number;
  speed?: 'slow' | 'medium' | 'fast' | number;
  color?: string;
  className?: string;
}

export function LaserFlow({
  opacity = 0.08,
  speed = 'slow',
  color = '#373e98',
  className = '',
}: LaserFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Convert speed to numeric value
    const getSpeedValue = () => {
      if (typeof speed === 'number') return speed;
      switch (speed) {
        case 'slow':
          return 0.3;
        case 'medium':
          return 0.6;
        case 'fast':
          return 1;
        default:
          return 0.3;
      }
    };

    const speedValue = getSpeedValue();

    // Particle class for flowing effect
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speedValue;
        this.vy = (Math.random() - 0.5) * speedValue;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 200;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const lifeRatio = this.life / this.maxLife;
        const alpha = opacity * (1 - lifeRatio);

        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      isDead() {
        return this.life >= this.maxLife;
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const maxParticles = 100;

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        // Remove dead particles and replace
        if (particles[i].isDead()) {
          particles.splice(i, 1);
          particles.push(new Particle(canvas.width, canvas.height));
        }
      }

      // Draw connections between nearby particles
      ctx.globalAlpha = opacity * 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = opacity * (1 - distance / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
}
