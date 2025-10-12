import { useEffect, useRef, useState } from 'react';

interface ScrollProgressOptions {
  /**
   * If true, progress stays at 1 after element animates in (Apple-style)
   * If false, animations re-trigger when scrolling back (bi-directional)
   */
  persist?: boolean;
  /**
   * Easing function: 'ease-out' (default, snappy), 'ease-in-out' (smooth), 'linear'
   */
  easing?: 'ease-out' | 'ease-in-out' | 'linear';
  /**
   * Threshold (0-1) at which animation completes. Lower = animates faster
   */
  threshold?: number;
}

/**
 * High-performance scroll progress tracker
 * Returns smooth 0-1 progress value as element scrolls into view
 *
 * Features:
 * - Smooth animations that trigger on scroll (both up and down)
 * - Professional easing curves
 * - Performance optimized with RAF and throttling
 */
export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const { persist = false, easing = 'ease-out', threshold = 0.5 } = options;

  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const maxProgressRef = useRef(0); // Track highest progress achieved

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Apply easing function
    const applyEasing = (t: number): number => {
      // Clamp first
      t = Math.max(0, Math.min(1, t));

      switch (easing) {
        case 'ease-out':
          // Cubic ease-out (Apple's favorite)
          return 1 - Math.pow(1 - t, 3);

        case 'ease-in-out':
          // Smooth ease-in-out
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;

        case 'linear':
          return t;

        default:
          return 1 - Math.pow(1 - t, 3);
      }
    };

    // Scroll handler with RAF for smooth updates
    const updateProgress = () => {
      if (!element) return;

      // If persist mode and already at max progress, no need to recalculate
      if (persist && maxProgressRef.current >= 1) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position
      // Animation starts when element enters viewport from bottom
      // Animation completes at threshold point (default: 50% visible)
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Start animation when bottom enters viewport
      const animationStart = windowHeight;
      // Complete animation at threshold point
      const animationEnd = windowHeight * (1 - threshold);

      // Calculate raw progress
      let rawProgress = 0;
      if (elementBottom > 0 && elementTop < windowHeight) {
        // Element is in viewport
        const distanceFromBottom = windowHeight - elementTop;
        const animationRange = animationStart - animationEnd;
        rawProgress = distanceFromBottom / animationRange;
      }

      // Apply easing
      const easedProgress = applyEasing(rawProgress);

      // In persist mode, only increase progress (never decrease)
      if (persist) {
        const newProgress = Math.max(easedProgress, maxProgressRef.current);
        maxProgressRef.current = newProgress;
        setProgress(newProgress);
      } else {
        // Bi-directional mode: progress can go up and down
        setProgress(easedProgress);
      }
    };

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial update
    updateProgress();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [persist, easing, threshold]);

  return { ref, progress };
}
