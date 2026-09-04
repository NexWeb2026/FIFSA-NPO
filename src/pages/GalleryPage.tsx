import { useState } from "react";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { cn } from "../lib/utils";
import { galleryImages } from "../data/programmes";
import type { ProgrammeCategory } from "../types/content";
import { usePageMeta } from "../hooks/usePageMeta";

const filters: Array<ProgrammeCategory | "All"> = ["All", "Youth", "Education", "Humanitarian", "Events", "Community"];

export function GalleryPage() {
  const [filter, setFilter] = useState<ProgrammeCategory | "All">("All");
  usePageMeta("Gallery", "FIFSA youth, humanitarian, education, event and community photography.");
  const visible = filter === "All" ? galleryImages : galleryImages.filter((image) => image.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See the impact."
        copy="Photography from FIFSA's youth, humanitarian, community, education and event work."
        image={galleryImages[3].src}
      />
      <Section>
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader title="Community gallery" />
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={cn(
                    "min-h-11 rounded-brand border px-4 text-sm font-bold transition",
                    filter === item ? "border-ocean bg-ocean text-white" : "border-ink/12 bg-white text-ink hover:border-ocean",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((image, index) => (
              <figure key={`${image.src}-${image.alt}-${index}`} className={cn("group overflow-hidden rounded-brand bg-white", index % 5 === 0 && "lg:col-span-2 lg:row-span-2")}>
                <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
