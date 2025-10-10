import { ReactNode, Children } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StaggeredGridProps {
  children: ReactNode;
  staggerDelay?: number;
  animation?: 'fade-up' | 'zoom' | 'slide-left' | 'slide-right' | 'rotate';
  className?: string;
}

export function StaggeredGrid({
  children,
  staggerDelay = 100,
  animation = 'fade-up',
  className = '',
}: StaggeredGridProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, triggerOnce: true });

  const getChildStyle = (index: number) => {
    const delay = index * staggerDelay;
    const baseTransition = `all 250ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;

    switch (animation) {
      case 'fade-up':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: baseTransition,
        };

      case 'zoom':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-5deg)',
          transition: baseTransition,
        };

      case 'slide-left':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) rotate(0deg)' : 'translateX(80px) rotate(10deg)',
          transition: baseTransition,
        };

      case 'slide-right':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) rotate(0deg)' : 'translateX(-80px) rotate(-10deg)',
          transition: baseTransition,
        };

      case 'rotate':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0.3)',
          transition: baseTransition,
        };

      default:
        return {};
    }
  };

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <div style={getChildStyle(index)}>{child}</div>
      ))}
    </div>
  );
}
