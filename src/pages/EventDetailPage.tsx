import { CalendarDays, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CTASection } from "../components/common/CTASection";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { events } from "../data/events";
import { usePageMeta } from "../hooks/usePageMeta";

export function EventDetailPage() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);
  usePageMeta(event?.title ?? "Event", event?.description ?? "FIFSA event details.");

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow={event.status}
        title={event.title}
        copy={event.description}
        image={event.image}
        primary={{ label: event.registrationUrl ? "Register" : "Contact FIFSA", href: event.registrationUrl ?? "/contact" }}
        secondary={{ label: "All events", href: "/events" }}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <aside className="rounded-brand bg-white p-6 shadow-[0_8px_24px_rgba(31,37,40,0.06)]">
            <h2 className="font-heading text-2xl font-extrabold text-ink">Event details</h2>
            <div className="mt-6 grid gap-4 text-sm text-muted">
              <span className="flex gap-3">
                <CalendarDays className="text-clay" size={19} />
                {event.date ?? "Date to be confirmed"}
              </span>
              <span className="flex gap-3">
                <MapPin className="text-clay" size={19} />
                {event.venue ?? "Venue to be confirmed"}
              </span>
            </div>
            <Button asChild className="mt-7 w-full">
              <Link to={event.registrationUrl ?? "/contact"}>{event.registrationUrl ? "Register" : "Ask about this event"}</Link>
            </Button>
          </aside>
          <div>
            <SectionHeader eyebrow={event.category} title="About this event" copy={event.description} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {event.gallery.map((image, index) => (
                <img key={`${image}-${index}`} className="h-64 w-full rounded-brand object-cover sm:h-80" src={image} alt={event.title} loading="lazy" />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Bring your school, family or business into the next FIFSA event."
        copy="FIFSA events create meaningful moments where youth can participate, perform and grow."
        image={event.image}
        primary={{ label: "Contact FIFSA", href: "/contact" }}
      />
    </>
  );
}
