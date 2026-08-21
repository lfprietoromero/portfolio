type Accent = 'primary' | 'secondary';

const accentClasses: Record<Accent, string> = {
  primary: 'border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_-8px_rgb(var(--color-primary)/0.6)]',
  secondary: 'border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_20px_-8px_rgb(var(--color-secondary)/0.6)]',
};

interface SectionHeadingProps {
  number: string;
  title: string;
  accent?: Accent;
}

export const SectionHeading = ({ number, title, accent = 'secondary' }: SectionHeadingProps) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span
        className={`flex items-center justify-center w-11 h-11 rounded-md border font-mono text-sm ${accentClasses[accent]}`}
      >
        {number}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">{title}</h2>
    </div>
  );
};
