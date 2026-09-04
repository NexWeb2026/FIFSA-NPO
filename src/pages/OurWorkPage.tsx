import { useMemo, useState } from "react";
import { ProgrammeCard } from "../components/cards/ProgrammeCard";
import { WorkCategoryCard } from "../components/cards/WorkCategoryCard";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { cn } from "../lib/utils";
import { galleryImages, programmes, workCategories } from "../data/programmes";
import type { ProgrammeCategory } from "../types/content";
import { usePageMeta } from "../hooks/usePageMeta";

const filters: Array<ProgrammeCategory | "All"> = ["All", "Youth", "Education", "Humanitarian", "Events", "Community"];

export function OurWorkPage() {
  const [filter, setFilter] = useState<ProgrammeCategory | "All">("All");
  usePageMeta("Our Work", "Explore FIFSA youth, education, humanitarian, event and community programmes.");
  const visibleProgrammes = useMemo(() => (filter === "All" ? programmes : programmes.filter((item) => item.category === filter)), [filter]);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Programmes designed around care and opportunity."
        copy="Browse FIFSA's youth development, education, humanitarian, events and community initiatives from one central directory."
        image={galleryImages[3].src}
      />
      <Section>
        <Container>
          <SectionHeader eyebrow="Impact areas" title="Five ways FIFSA serves youth and community." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {workCategories.map((category) => (
              <WorkCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader title="Programme directory" copy="Filter by category to find the right programme, campaign or event pathway." />
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Programme filters">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={cn(
                    "min-h-11 rounded-brand border px-4 text-sm font-bold transition",
                    filter === item ? "border-ocean bg-ocean text-white" : "border-ink/12 bg-paper text-ink hover:border-ocean",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProgrammes.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
