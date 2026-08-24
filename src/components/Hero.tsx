import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { OptimizedImage } from './ui/OptimizedImage';

export function Hero({
  image,
  heading,
  subhead,
  cta,
}: {
  image: string;
  heading: string;
  subhead: string;
  cta?: { label: string; to: string };
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <OptimizedImage src={image} alt="" priority ratio="16/9" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/55 to-primary/25" />
      </div>
      <div className="container-content relative flex min-h-[460px] flex-col justify-end pb-14 pt-24 sm:min-h-[560px] lg:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl text-white sm:text-4xl lg:text-4xl">{heading}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{subhead}</p>
          {cta && (
            <Link
              to={cta.to}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              {cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Callout({
  eyebrow,
  title,
  body,
  to,
  ctaLabel,
  icon,
}: {
  eyebrow: string;
  title: string;
  body: ReactNode;
  to: string;
  ctaLabel: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardhover"
    >
      <div className="mb-3 flex items-center gap-2 text-accent">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wider">{eyebrow}</span>
      </div>
      <h3 className="text-xl leading-snug">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent">
        {ctaLabel} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
