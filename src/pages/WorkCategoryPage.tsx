import { Navigate, useParams } from "react-router-dom";
import { ProgrammeCard } from "../components/cards/ProgrammeCard";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { programmes, workCategories } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";

export function WorkCategoryPage() {
  const { categorySlug } = useParams();
  const category = workCategories.find((item) => item.slug === categorySlug);
  usePageMeta(
    category?.title ?? "Our Work",
    category ? `${category.title} programmes and initiatives from Fusion Inyameko Foundation SA.` : "Explore FIFSA programmes.",
  );

  if (!category) {
    return <Navigate to="/our-work" replace />;
  }

  const categoryMap = {
    "youth-development": "Youth",
    "education-leadership": "Education",
    humanitarian: "Humanitarian",
    "events-productions": "Events",
    community: "Community",
  } as const;
  const visible = programmes.filter((programme) => programme.category === categoryMap[category.slug as keyof typeof categoryMap]);

  return (
    <>
      <PageHero eyebrow="Our work" title={category.title} copy={category.description} image={category.image} />
      <Section>
        <Container>
          <SectionHeader title={`${category.title} programmes`} copy="Each route is powered by central structured data for future CMS or Supabase integration." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
