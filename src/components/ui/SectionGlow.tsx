type Accent = 'primary' | 'secondary' | 'ember';
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const posClasses: Record<Position, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

const maskClasses: Record<Position, string> = {
  'top-left': '[mask-image:radial-gradient(480px_380px_at_0%_0%,black,transparent)]',
  'top-right': '[mask-image:radial-gradient(480px_380px_at_100%_0%,black,transparent)]',
  'bottom-left': '[mask-image:radial-gradient(480px_380px_at_0%_100%,black,transparent)]',
  'bottom-right': '[mask-image:radial-gradient(480px_380px_at_100%_100%,black,transparent)]',
};

const glowClasses: Record<Accent, string> = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  ember: 'bg-ember/10',
};

interface SectionGlowProps {
  accent?: Accent;
  position?: Position;
}

export const SectionGlow = ({ accent = 'primary', position = 'top-right' }: SectionGlowProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 bg-grid-pattern bg-grid ${maskClasses[position]}`} />
      <div className={`absolute w-80 h-80 rounded-full blur-[100px] ${glowClasses[accent]} ${posClasses[position]} translate-x-1/3 ${position.startsWith('top') ? '-translate-y-1/3' : 'translate-y-1/3'}`} />
    </div>
  );
};
