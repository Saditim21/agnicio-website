import { ReactNode, Children } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface SmoothStaggeredGridProps {
  children: ReactNode;
  staggerDelay?: number;
  animation?: 'fade-up' | 'zoom' | 'slide-left' | 'slide-right';
  distance?: number;
  className?: string;
  /** If true, animations play once and stay visible. If false, re-trigger on every scroll. Default: false */
  persist?: boolean;
  /** Easing curve for animation. Default: 'ease-out' */
  easing?: 'ease-out' | 'ease-in-out' | 'linear';
  /** Animation completion threshold (0-1). Lower = faster. Default: 0.4 */
  threshold?: number;
}

export function SmoothStaggeredGrid({
  children,
  staggerDelay = 0.08,
  animation = 'fade-up',
  distance = 40,
  className = '',
  persist = false,
  easing = 'ease-out',
  threshold = 0.4,
}: SmoothStaggeredGridProps) {
  const { ref, progress } = useScrollProgress({ persist, easing, threshold });
  const childrenArray = Children.toArray(children);

  const getChildStyle = (index: number) => {
    // Stagger calculation: each child needs more progress to start
    const staggerOffset = index * staggerDelay;
    const maxStagger = childrenArray.length * staggerDelay;

    // Adjust progress to account for stagger
    // Ensure we have full range for animation even with stagger
    const adjustedProgress = Math.max(
      0,
      Math.min(1, (progress - staggerOffset) / Math.max(0.3, (1 - maxStagger)))
    );

    const opacity = adjustedProgress;
    const translateValue = (1 - adjustedProgress) * distance;
    const scale = 0.92 + adjustedProgress * 0.08; // Subtle scale (Apple-style)

    switch (animation) {
      case 'fade-up':
        return {
          opacity,
          transform: `translate3d(0, ${translateValue}px, 0)`,
        };

      case 'zoom':
        return {
          opacity,
          transform: `scale3d(${scale}, ${scale}, 1)`,
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

      default:
        return {
          opacity,
          transform: 'translate3d(0, 0, 0)',
        };
    }
  };

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        const staggerOffset = index * staggerDelay;
        const maxStagger = childrenArray.length * staggerDelay;
        const childProgress = Math.max(
          0,
          Math.min(1, (progress - staggerOffset) / Math.max(0.3, (1 - maxStagger)))
        );
        const isAnimating = childProgress > 0 && childProgress < 1;

        return (
          <div
            key={index}
            style={{
              ...getChildStyle(index),
              willChange: isAnimating ? 'transform, opacity' : 'auto',
              transition: 'none', // Use RAF for smoothness
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
