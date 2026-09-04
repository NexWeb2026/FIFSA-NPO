import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CTASection } from "../components/common/CTASection";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { programmes } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";

export function ProgrammeDetailPage() {
  const { slug } = useParams();
  const programme = programmes.find((item) => item.slug === slug);
  usePageMeta(programme?.title ?? "Programme", programme?.shortDescription ?? "FIFSA programme details.");

  if (!programme) {
    return <Navigate to="/our-work" replace />;
  }

  const related = programmes.filter((item) => programme.relatedProgrammes.includes(item.slug));

  return (
    <>
      <PageHero
        eyebrow={programme.category}
        title={programme.title}
        copy={programme.shortDescription}
        image={programme.heroImage}
        primary={{ label: programme.ctaLabel, href: programme.ctaUrl }}
        secondary={{ label: "All programmes", href: "/our-work" }}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside>
            <Link to="/our-work" className="inline-flex items-center gap-2 text-sm font-bold text-ocean">
              <ArrowLeft size={17} /> Back to programmes
            </Link>
            <div className="mt-8 rounded-brand bg-white p-6 shadow-[0_8px_24px_rgba(31,37,40,0.06)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-clay">How to participate</p>
              <p className="mt-4 text-sm leading-7 text-muted">{programme.eligibility}</p>
              <Button asChild className="mt-6 w-full" variant="donate">
                <Link to={programme.ctaUrl}>{programme.ctaLabel}</Link>
              </Button>
            </div>
          </aside>
          <div>
            <SectionHeader eyebrow="Programme introduction" title="Why it matters" copy={programme.description} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {programme.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-brand border border-ink/10 bg-white p-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-ocean" size={20} />
                  <span className="font-semibold text-ink">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-brand bg-pearl p-6">
              <p className="font-heading text-2xl font-extrabold text-ink">Impact</p>
              <p className="mt-3 leading-7 text-muted">{programme.impact}</p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <SectionHeader eyebrow="Gallery" title="Programme moments" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {programme.gallery.map((image, index) => (
              <img key={`${image}-${index}`} className="h-64 w-full rounded-brand object-cover sm:h-80" src={image} alt={programme.title} loading="lazy" />
            ))}
          </div>
        </Container>
      </Section>
      {related.length ? (
        <Section>
          <Container>
            <SectionHeader title="Related programmes" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} to={`/programmes/${item.slug}`} className="rounded-brand bg-white p-6 shadow-[0_8px_24px_rgba(31,37,40,0.06)] transition hover:-translate-y-1">
                  <p className="text-sm font-bold text-ocean">{item.category}</p>
                  <h3 className="mt-3 font-heading text-2xl font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
      <CTASection
        title="Help this programme reach further."
        copy="Every pathway is designed to make support easy, practical and meaningful."
        image={programme.heroImage}
        primary={{ label: programme.ctaLabel, href: programme.ctaUrl }}
      />
    </>
  );
}
