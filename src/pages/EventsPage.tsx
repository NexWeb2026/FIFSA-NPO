import { EventCard } from "../components/cards/EventCard";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { events } from "../data/events";
import { galleryImages } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";

export function EventsPage() {
  usePageMeta("Events", "Upcoming and past FIFSA events, productions, competitions and community activity.");
  const upcoming = events.filter((event) => event.status === "Upcoming");
  const archive = events.filter((event) => event.status !== "Upcoming");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Experiences that build confidence, faith and community."
        copy="Explore FIFSA productions, competitions and youth platforms. Upcoming dates can be added as soon as they are confirmed."
        image={galleryImages[1].src}
      />
      <Section>
        <Container>
          <SectionHeader title={upcoming.length ? "Upcoming events" : "Recent community activity"} />
          <div className="mt-10 grid gap-6">
            {(upcoming.length ? upcoming : archive).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </Section>
      {archive.length && upcoming.length ? (
        <Section className="bg-white">
          <Container>
            <SectionHeader title="Event archive" />
            <div className="mt-10 grid gap-6">
              {archive.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
