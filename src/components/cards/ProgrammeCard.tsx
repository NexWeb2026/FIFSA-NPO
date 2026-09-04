import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Programme } from "../../types/content";

interface ProgrammeCardProps {
  programme: Programme;
}

export function ProgrammeCard({ programme }: ProgrammeCardProps) {
  return (
    <Link
      to={`/programmes/${programme.slug}`}
      className="group grid overflow-hidden rounded-brand border border-ink/10 bg-white shadow-[0_10px_30px_rgba(31,37,40,0.06)] transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={programme.heroImage}
          alt={programme.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-ocean">{programme.category}</p>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl font-extrabold leading-tight text-ink">{programme.title}</h3>
          <ArrowUpRight className="mt-1 shrink-0 text-clay transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{programme.shortDescription}</p>
      </div>
    </Link>
  );
}
