import { ArrowRight, BadgeCheck, Building2, HeartHandshake, MapPin, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { EventCard } from "../components/cards/EventCard";
import { WorkCategoryCard } from "../components/cards/WorkCategoryCard";
import { CTASection } from "../components/common/CTASection";
import { Reveal } from "../components/common/Reveal";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { events } from "../data/events";
import { galleryImages, programmes, workCategories } from "../data/programmes";
import { organisation } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const trustItems = [
  { label: "Caring since 2013", icon: Sparkles },
  { label: "Registered NPO", icon: BadgeCheck },
  { label: "PBO registered", icon: ShieldCheck },
  { label: "Section 18A approved", icon: Building2 },
  { label: "Cape Town, South Africa", icon: MapPin },
];

const involved = [
  { title: "Donate", copy: "Help support FIFSA's youth and humanitarian programmes.", href: "/donate", color: "bg-clay text-white" },
  { title: "Volunteer", copy: "Give your time, skills and presence to community work.", href: "/volunteer", color: "bg-ocean text-white" },
  { title: "Fusion Friend", copy: "Help sustain ongoing programmes through consistent support.", href: "/fusion-friend", color: "bg-sun text-ink" },
  { title: "Corporate Partner", copy: "Build meaningful CSI impact with a trusted Cape Town NPO.", href: "/corporate-partnerships", color: "bg-leaf text-white" },
];

export function HomePage() {
  usePageMeta("Home", "Fusion Inyameko Foundation SA empowers youth and uplifts communities in Cape Town.");
  const featured = programmes.find((programme) => programme.slug === "ramadan-initiatives") ?? programmes[0];
  const myChance = programmes.find((programme) => programme.slug === "my-chance-incubator") ?? programmes[0];

  return (
    <>
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-ink" />
        <img className="absolute inset-0 h-full w-full object-cover opacity-58" src={galleryImages[0].src} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/76 to-ink/20" />
        <Container className="relative grid min-h-[680px] items-end pb-12 pt-16 sm:min-h-[720px] lg:min-h-[calc(100svh-80px)] lg:grid-cols-[1fr_0.62fr] lg:pb-16">
          <Reveal className="max-w-4xl text-white">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.14em] text-sun sm:text-sm">Inyameko means care.</p>
            <h1 className="text-balance font-heading text-[clamp(3rem,14vw,4.5rem)] font-extrabold leading-[0.98] sm:text-7xl lg:text-8xl">
              Empowering youth. Uplifting communities.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              {organisation.name} creates opportunities for young people and supports communities through education, mentorship,
              humanitarian aid and meaningful experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary" icon={<ArrowRight size={18} />}>
                <Link to="/our-work">Explore our work</Link>
              </Button>
              <Button asChild variant="light">
                <Link to="/donate">Donate now</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden self-end lg:block">
            <div className="rounded-brand bg-white/90 p-6 shadow-soft backdrop-blur">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">Mission</p>
              <p className="mt-3 font-heading text-2xl font-extrabold leading-tight text-ink">{organisation.mission}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <Container className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 text-sm font-extrabold text-ink">
                <Icon size={20} className="text-ocean" />
                {item.label}
              </div>
            );
          })}
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <img className="image-mask h-72 w-full object-cover sm:h-96" src={imagesFromGallery("Youth")} alt="FIFSA youth activity" />
              <img className="mt-10 h-72 w-full rounded-brand object-cover sm:h-96" src={imagesFromGallery("Humanitarian")} alt="FIFSA humanitarian support" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Who we are"
              title="Care is at the heart of everything FIFSA does."
              copy="FIFSA is a registered South African NPO and NPC that develops youth and supports communities through creative programmes, community projects, humanitarian aid and events."
            />
            <p className="mt-6 text-lg leading-8 text-muted">
              Since 2013, the foundation has built platforms for young people to express their talents, develop skills and grow
              through experiential learning while responding to practical needs across Cape Town communities.
            </p>
            <Button asChild className="mt-8">
              <Link to="/about">Discover our story</Link>
            </Button>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-pearl">
        <Container>
          <SectionHeader
            eyebrow="Our work"
            title="One foundation. Many ways to make an impact."
            copy="Explore FIFSA's five main areas of work, from youth development and leadership to humanitarian aid, productions and community campaigns."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {workCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.04}>
                <WorkCategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <img className="image-mask h-80 w-full object-cover sm:h-96 lg:h-[520px]" src={featured.heroImage} alt={featured.title} loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">Featured initiative</p>
            <h2 className="text-balance font-heading text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{featured.title}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{featured.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.features.slice(0, 4).map((feature) => (
                <span key={feature} className="rounded-full border border-ocean/20 bg-ocean/8 px-4 py-2 text-sm font-bold text-ocean">
                  {feature}
                </span>
              ))}
            </div>
            <Button asChild className="mt-8" variant="donate">
              <Link to={`/programmes/${featured.slug}`}>Support this project</Link>
            </Button>
          </Reveal>
        </Container>
      </Section>

      <Section className="texture bg-ink text-white">
        <Container>
          <SectionHeader
            eyebrow="Impact"
            title="Built for transparent reporting."
            copy="Only verified figures are shown. Placeholder fields are ready for FIFSA's current impact data."
            className="text-white [&_h2]:text-white [&_p]:text-white/70"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            {[
              ["2013", "Caring since"],
              [organisation.npo, "NPO number"],
              [organisation.pbo, "PBO number"],
              ["-", "Youth supported"],
              ["-", "Meals distributed"],
            ].map(([value, label]) => (
              <Reveal key={label}>
                <div className="rounded-brand border border-white/12 bg-white/8 p-5">
                  <p className="font-heading text-4xl font-extrabold text-sun">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-white/70">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">My Chance Spotlight</p>
            <h2 className="text-balance font-heading text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{myChance.title}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{myChance.description}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {myChance.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-brand bg-white p-4 shadow-[0_8px_24px_rgba(31,37,40,0.06)]">
                  <UsersRound size={19} className="text-clay" />
                  <span className="font-semibold text-ink">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to={`/programmes/${myChance.slug}`}>Discover My Chance</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/donate">Support the programme</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img className="h-80 w-full rounded-brand object-cover shadow-soft sm:h-96 lg:h-[560px]" src={myChance.heroImage} alt={myChance.title} loading="lazy" />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Events" title="Upcoming events and recent community activity." />
            <Button asChild variant="outline">
              <Link to="/events">View all events</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {events.slice(0, 2).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Get involved" title="There's more than one way to make a difference." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {involved.map((item) => (
              <Link key={item.title} to={item.href} className={`${item.color} group min-h-64 rounded-brand p-6 transition hover:-translate-y-1 hover:shadow-soft md:min-h-72`}>
                <HeartHandshake className="mb-8" size={30} />
                <h3 className="font-heading text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 opacity-85">{item.copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold">
                  Continue <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-pearl">
        <Container>
          <SectionHeader eyebrow="Gallery" title="See the impact." copy="A visual record of youth, education, humanitarian, sport and event activity." />
          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
            {galleryImages.slice(0, 8).map((image, index) => (
              <Link
                key={`${image.src}-${index}`}
                to="/gallery"
                className={`group overflow-hidden rounded-brand ${index === 0 || index === 3 ? "md:row-span-2" : ""}`}
              >
                <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image.src} alt={image.alt} loading="lazy" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Your support can create someone's next opportunity."
        copy="Donate, volunteer, partner or open a door for a young person through FIFSA's ongoing programmes."
        image={galleryImages[0].src}
        primary={{ label: "Donate now", href: "/donate" }}
        secondary={{ label: "Get involved", href: "/volunteer" }}
      />
    </>
  );
}

function imagesFromGallery(category: "Youth" | "Humanitarian") {
  return galleryImages.find((image) => image.category === category)?.src ?? galleryImages[0].src;
}
