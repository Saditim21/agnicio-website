import { useEffect, useState } from 'react';

interface KineticTypographyProps {
  text: string;
  highlightWords?: string[]; // Words to highlight with accent color
  className?: string;
  animationDuration?: number;
  staggerDelay?: number; // Delay between each word animation
}

export function KineticTypography({
  text,
  highlightWords = [],
  className = '',
  animationDuration = 250,
  staggerDelay = 50,
}: KineticTypographyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Split text into words
  const words = text.split(' ');

  return (
    <h1 className={`font-heading font-bold ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={index}
            className="inline-block"
            style={{
              animation: isVisible
                ? `kineticSlideIn ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${
                    index * staggerDelay
                  }ms both`
                : 'none',
            }}
          >
            <span
              className={`
                inline-block
                ${
                  isHighlighted
                    ? 'text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text'
                    : 'text-neutral-text-primary'
                }
              `}
              style={{
                animation: isHighlighted && isVisible
                  ? `kineticPulse 2s ease-in-out ${index * staggerDelay + animationDuration}ms infinite`
                  : 'none',
              }}
            >
              {word}
            </span>
            {index < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}

      <style>{`
        @keyframes kineticSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes kineticPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </h1>
  );
}
