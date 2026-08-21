import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type Accent = 'primary' | 'secondary';

const accentClasses: Record<Accent, string> = {
  primary: 'hover:border-primary hover:shadow-[0_0_32px_-14px_rgb(var(--color-primary)/0.55)]',
  secondary: 'hover:border-secondary hover:shadow-[0_0_32px_-14px_rgb(var(--color-secondary)/0.55)]',
};

const edgeClasses: Record<Accent, string> = {
  primary: 'before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent',
  secondary: 'before:bg-gradient-to-r before:from-transparent before:via-secondary before:to-transparent',
};

const base =
  'relative overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:opacity-70';

interface CardDivProps extends HTMLAttributes<HTMLDivElement> {
  href?: undefined;
  accent?: Accent;
  children: ReactNode;
}

interface CardAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  accent?: Accent;
  children: ReactNode;
}

type CardProps = CardDivProps | CardAnchorProps;

export const Card = ({ accent = 'secondary', className = '', children, ...props }: CardProps) => {
  const classes = `${base} ${accentClasses[accent]} ${edgeClasses[accent]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...(props as HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
};
