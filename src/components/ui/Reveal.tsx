import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: 'div' | 'li';
}

export const Reveal = ({ children, className = '', delayMs = 0, as = 'div' }: RevealProps) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={isVisible ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
