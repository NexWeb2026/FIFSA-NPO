import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkCategory } from "../../types/content";

interface WorkCategoryCardProps {
  category: WorkCategory;
}

export function WorkCategoryCard({ category }: WorkCategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      to={`/our-work/${category.slug}`}
      className="group relative min-h-[320px] overflow-hidden rounded-brand bg-ink bg-cover bg-center bg-no-repeat text-white transition-[background-size] duration-500 group-hover:bg-[length:105%] sm:min-h-[360px] lg:min-h-[400px]"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(31, 37, 40, 0.88) 0%, rgba(31, 37, 40, 0.48) 48%, rgba(31, 37, 40, 0) 76%), url(${category.image})`,
      }}
    >
      <div className="relative flex h-full min-h-[320px] flex-col justify-end p-5 sm:min-h-[360px] sm:p-6 lg:min-h-[400px]">
        <span className="mb-5 grid h-12 w-12 place-items-center rounded-brand bg-white text-ocean">
          <Icon size={24} />
        </span>
        <h3 className="font-heading text-2xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]">{category.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/78 drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]">{category.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sun drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]">
          View programmes <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}
