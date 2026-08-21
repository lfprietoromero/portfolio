import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost';

const base =
  'group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider rounded-md font-medium transition-all duration-300 overflow-hidden';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-onAccent hover:shadow-[0_0_28px_-4px_rgb(var(--color-primary)/0.65)] hover:-translate-y-0.5',
  ghost:
    'border border-border text-ink hover:border-primary hover:text-primary hover:-translate-y-0.5',
};

const Brackets = () => (
  <>
    <span className="pointer-events-none absolute left-1.5 -translate-x-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      [
    </span>
    <span className="pointer-events-none absolute right-1.5 translate-x-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      ]
    </span>
  </>
);

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: Variant;
  children: ReactNode;
}

interface ButtonAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  children: ReactNode;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <Brackets />
        <span className="relative">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <Brackets />
      <span className="relative">{children}</span>
    </button>
  );
};
