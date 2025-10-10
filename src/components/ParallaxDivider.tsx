import { useEffect, useRef, useState } from 'react';
import { DESIGN_TOKENS } from '../design-system';

interface ParallaxDividerProps {
  /**
   * Speed multiplier for parallax effect
   * 0.8 = background moves at 80% of scroll speed (subtle depth)
   * @default 0.8
   */
  speed?: number;
  height?: string;
  backgroundColor?: string;
  pattern?: 'dots' | 'lines' | 'gradient' | 'none';
}

export function ParallaxDivider({
  speed = 0.8,
  height = '300px',
  backgroundColor = DESIGN_TOKENS.colors.neutrals.background,
  pattern = 'gradient',
}: ParallaxDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return;

      const rect = dividerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const parallaxOffset = scrollProgress * (1 - speed);

      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const getPatternBackground = () => {
    switch (pattern) {
      case 'dots':
        return {
          backgroundImage: `radial-gradient(circle, ${DESIGN_TOKENS.colors.primary.lightest} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        };
      case 'lines':
        return {
          backgroundImage: `linear-gradient(90deg, ${DESIGN_TOKENS.colors.neutrals.border} 1px, transparent 1px)`,
          backgroundSize: '40px 100%',
        };
      case 'gradient':
        return {
          background: `radial-gradient(ellipse at center, ${DESIGN_TOKENS.colors.primary.lightest} 0%, ${backgroundColor} 60%)`,
        };
      case 'none':
      default:
        return {
          backgroundColor,
        };
    }
  };

  return (
    <div
      ref={dividerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s linear',
          ...getPatternBackground(),
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-64 h-64 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${DESIGN_TOKENS.colors.primary.light} 0%, transparent 70%)`,
            transform: `translateY(${offset * 0.5}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
      </div>

      {/* Foreground Content (moves at normal scroll speed) */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <div
            className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full"
            style={{
              transform: `translateY(${offset * 0.3}px)`,
              transition: 'transform 0.1s linear',
            }}
          />
          <p className="text-body font-body text-neutral-text-tertiary italic">
            Scroll to explore
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${backgroundColor} 100%)`,
        }}
      />
    </div>
  );
}
