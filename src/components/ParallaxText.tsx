import { ReactNode } from 'react';
import { useParallax } from '../hooks/useScrollAnimation';

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ParallaxText({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
}: ParallaxTextProps) {
  const { ref, offset } = useParallax(speed);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return 'none';
    }
  };

  return (
    <div ref={ref} className={className} style={{ transform: getTransform() }}>
      {children}
    </div>
  );
}
