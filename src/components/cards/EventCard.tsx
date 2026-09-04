import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { EventItem } from "../../types/content";
import { Button } from "../ui/Button";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="grid min-w-0 overflow-hidden rounded-brand border border-ink/10 bg-white shadow-[0_10px_30px_rgba(31,37,40,0.06)] lg:grid-cols-[0.85fr_1fr]">
      <img src={event.image} alt={event.title} loading="lazy" className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-72" />
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-bold text-ocean">{event.status}</span>
          <span className="rounded-full bg-sun/20 px-3 py-1 text-xs font-bold text-ink">{event.category}</span>
        </div>
        <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-ink">{event.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{event.description}</p>
        <div className="mt-6 grid gap-3 text-sm text-muted">
          <span className="flex items-center gap-2">
            <CalendarDays size={17} className="text-clay" />
            {event.date ?? "Date to be confirmed"}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={17} className="text-clay" />
            {event.venue ?? "Venue to be confirmed"}
          </span>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to={`/events/${event.slug}`}>View event</Link>
          </Button>
          {event.registrationUrl ? (
            <Button asChild variant="outline">
              <a href={event.registrationUrl}>Register</a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
