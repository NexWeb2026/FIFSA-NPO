import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkCategory } from "../../types/content";

interface WorkCategoryCardProps {
  category: WorkCategory;
}

export function WorkCategoryCard({ category }: WorkCategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link to={`/our-work/${category.slug}`} className="group relative min-h-[320px] overflow-hidden rounded-brand bg-ink text-white sm:min-h-[360px] lg:min-h-[400px]">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105"
        src={category.image}
        alt={category.title}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/48 to-transparent" />
      <div className="relative flex h-full min-h-[320px] flex-col justify-end p-5 sm:min-h-[360px] sm:p-6 lg:min-h-[400px]">
        <span className="mb-5 grid h-12 w-12 place-items-center rounded-brand bg-white text-ocean">
          <Icon size={24} />
        </span>
        <h3 className="font-heading text-2xl font-extrabold">{category.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/78">{category.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sun">
          View programmes <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}
