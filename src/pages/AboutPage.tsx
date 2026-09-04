import { Heart, Lightbulb, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "../components/common/CTASection";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { galleryImages } from "../data/programmes";
import { organisation } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const values = [
  { title: "Care", icon: Heart, copy: "Human dignity sits at the centre of every programme and campaign." },
  { title: "Opportunity", icon: Lightbulb, copy: "Young people need spaces to learn, lead, perform, compete and grow." },
  { title: "Community", icon: UsersRound, copy: "Families, schools, businesses and volunteers all have a role in shared upliftment." },
  { title: "Trust", icon: ShieldCheck, copy: "Verified registration details and Section 18A readiness support accountable giving." },
];

export function AboutPage() {
  usePageMeta("About", "Learn about FIFSA, a Cape Town NPO focused on youth development and community upliftment.");

  return (
    <>
      <PageHero
        eyebrow="About FIFSA"
        title="Inyameko means care."
        copy="FIFSA is a South African organisation focused on youth development, community upliftment, humanitarian support, education and meaningful experiences."
        image={galleryImages[0].src}
        primary={{ label: "Explore our work", href: "/our-work" }}
        secondary={{ label: "Contact FIFSA", href: "/contact" }}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Our story"
              title="Caring since 2013, with youth and community at the centre."
              copy="FIFSA creates platforms for young people to express their talents, develop skills and grow through experiential learning."
            />
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              The foundation also works in different communities through projects that range from basic needs support to development initiatives,
              events, mentorship and faith-centred youth experiences.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img className="image-mask h-80 w-full object-cover shadow-soft sm:h-96 lg:h-[520px]" src={galleryImages[2].src} alt="FIFSA youth performance" />
          </Reveal>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-5 md:grid-cols-2">
          <div className="rounded-brand bg-ocean p-6 text-white sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">Mission</p>
            <h2 className="mt-4 text-balance font-heading text-2xl font-extrabold sm:text-3xl">{organisation.mission}</h2>
          </div>
          <div className="rounded-brand bg-ink p-6 text-white sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">Vision</p>
            <h2 className="mt-4 text-balance font-heading text-2xl font-extrabold sm:text-3xl">A community where young people are supported, confident and able to contribute.</h2>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader eyebrow="Values" title="Faith, dignity, hope and action." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title}>
                  <article className="rounded-brand border border-ink/10 bg-white p-6 shadow-[0_8px_24px_rgba(31,37,40,0.06)]">
                    <Icon className="text-clay" size={28} />
                    <h3 className="mt-6 font-heading text-2xl font-extrabold text-ink">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{value.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="bg-pearl">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <img className="h-80 w-full rounded-brand object-cover shadow-soft sm:h-96 lg:h-[460px]" src={galleryImages[5].src} alt="FIFSA community work" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Our approach"
              title="Practical care, meaningful platforms and sustainable participation."
              copy="FIFSA combines youth-facing programmes with humanitarian campaigns and community-led support, creating multiple ways for ordinary people and organisations to contribute."
            />
            <Button asChild className="mt-8" variant="donate">
              <Link to="/donate">Support the work</Link>
            </Button>
          </Reveal>
        </Container>
      </Section>
      <CTASection
        title="Be part of FIFSA's next chapter."
        copy="Join the foundation as a donor, volunteer, school, parent or corporate partner."
        image={galleryImages[1].src}
        primary={{ label: "Get involved", href: "/volunteer" }}
        secondary={{ label: "Partner with FIFSA", href: "/corporate-partnerships" }}
      />
    </>
  );
}
