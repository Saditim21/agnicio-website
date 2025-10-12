import { ReactNode } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface SmoothScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'blur';
  distance?: number;
  className?: string;
  /** If true, animations play once and stay visible. If false, re-trigger on every scroll. Default: false */
  persist?: boolean;
  /** Easing curve for animation. Default: 'ease-out' */
  easing?: 'ease-out' | 'ease-in-out' | 'linear';
  /** Animation completion threshold (0-1). Lower = faster. Default: 0.5 */
  threshold?: number;
}

export function SmoothScrollReveal({
  children,
  animation = 'fade',
  distance = 50,
  className = '',
  persist = false,
  easing = 'ease-out',
  threshold = 0.5,
}: SmoothScrollRevealProps) {
  const { ref, progress } = useScrollProgress({ persist, easing, threshold });

  const getAnimationStyles = () => {
    const opacity = progress;
    const translateValue = (1 - progress) * distance;
    const scale = 0.92 + progress * 0.08; // Subtle scale (Apple-style: less dramatic)

    switch (animation) {
      case 'fade':
        return {
          opacity,
          transform: 'translate3d(0, 0, 0)',
        };

      case 'slide-up':
        return {
          opacity,
          transform: `translate3d(0, ${translateValue}px, 0)`,
        };

      case 'slide-left':
        return {
          opacity,
          transform: `translate3d(${translateValue}px, 0, 0)`,
        };

      case 'slide-right':
        return {
          opacity,
          transform: `translate3d(${-translateValue}px, 0, 0)`,
        };

      case 'zoom':
        return {
          opacity,
          transform: `scale3d(${scale}, ${scale}, 1)`,
        };

      case 'blur':
        return {
          opacity,
          filter: `blur(${(1 - progress) * 10}px)`,
          transform: 'translate3d(0, 0, 0)',
        };

      default:
        return {
          opacity,
          transform: 'translate3d(0, 0, 0)',
        };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getAnimationStyles(),
        willChange: progress > 0 && progress < 1 ? 'transform, opacity' : 'auto',
        transition: 'none', // Use RAF for smoothness, not CSS transitions
      }}
    >
      {children}
    </div>
  );
}
