import { HeartHandshake, Repeat, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "../components/common/CTASection";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { galleryImages } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";

export function FusionFriendPage() {
  usePageMeta("Fusion Friend", "Become a Fusion Friend and help sustain FIFSA's ongoing projects.");

  return (
    <>
      <PageHero
        eyebrow="Fusion Friend"
        title="Sustain the work month after month."
        copy="Become a Fusion Friend to help FIFSA keep youth and community programmes moving with dependable support."
        image={galleryImages[0].src}
        primary={{ label: "Start giving", href: "/donate" }}
      />
      <Section>
        <Container>
          <SectionHeader eyebrow="Ongoing support" title="Small consistent commitments help carry big community work." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Monthly care", icon: Repeat, copy: "Support recurring programme costs and campaign readiness." },
              { title: "Youth opportunity", icon: Sprout, copy: "Help create learning, mentorship and event access for young people." },
              { title: "Community response", icon: HeartHandshake, copy: "Strengthen FIFSA's ability to respond when help is needed." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-brand bg-white p-7 shadow-[0_8px_24px_rgba(31,37,40,0.06)]">
                  <Icon className="text-clay" size={30} />
                  <h2 className="mt-6 font-heading text-2xl font-extrabold text-ink">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{item.copy}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="donate">
              <Link to="/donate">Become a Fusion Friend</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Help FIFSA plan with confidence."
        copy="Reliable giving helps the foundation sustain ongoing youth and community projects."
        image={galleryImages[4].src}
        primary={{ label: "Donate monthly", href: "/donate" }}
      />
    </>
  );
}
