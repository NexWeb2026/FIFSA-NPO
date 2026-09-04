import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

interface CTASectionProps {
  title: string;
  copy: string;
  image?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({ title, copy, image, primary, secondary }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
      {image ? <img className="absolute inset-0 h-full w-full object-cover opacity-30" src={image} alt="" loading="lazy" /> : null}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ocean/70" />
      <Container className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl min-w-0">
          <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/78">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild variant="secondary" icon={<ArrowRight size={18} />}>
            <a href={primary.href}>{primary.label}</a>
          </Button>
          {secondary ? (
            <Button asChild variant="light">
              <a href={secondary.href}>{secondary.label}</a>
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
