import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'flip' | 'blur';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = 'fade',
  delay = 0,
  duration = 250,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const getAnimationStyles = () => {
    const baseTransition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

    switch (animation) {
      case 'fade':
        return {
          opacity: isVisible ? 1 : 0,
          transition: baseTransition,
        };

      case 'slide-up':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: baseTransition,
        };

      case 'slide-left':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(60px)',
          transition: baseTransition,
        };

      case 'slide-right':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
          transition: baseTransition,
        };

      case 'zoom':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: baseTransition,
        };

      case 'flip':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(-90deg)',
          transition: baseTransition,
        };

      case 'blur':
        return {
          opacity: isVisible ? 1 : 0,
          filter: isVisible ? 'blur(0px)' : 'blur(10px)',
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          transition: baseTransition,
        };

      default:
        return {};
    }
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
}
