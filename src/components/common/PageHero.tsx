import type { ReactNode } from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, copy, image, primary, secondary, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 text-white sm:pt-32">
      {image ? <img className="absolute inset-0 h-full w-full object-cover opacity-35" src={image} alt="" /> : null}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/88 to-ocean/80" />
      <Container className="relative grid min-h-[430px] items-end gap-8 pb-12 sm:min-h-[480px] sm:pb-16 lg:grid-cols-[1.05fr_0.7fr]">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-sun sm:text-sm">{eyebrow}</p>
          <h1 className="max-w-5xl text-balance font-heading text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">{copy}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary ? (
                <Button asChild variant="secondary">
                  <a href={primary.href}>{primary.label}</a>
                </Button>
              ) : null}
              {secondary ? (
                <Button asChild variant="light">
                  <a href={secondary.href}>{secondary.label}</a>
                </Button>
              ) : null}
            </div>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
