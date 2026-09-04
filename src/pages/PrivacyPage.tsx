import { PageHero } from "../components/common/PageHero";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { galleryImages } from "../data/programmes";
import { organisation } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function PrivacyPage() {
  usePageMeta("Privacy Policy", "Privacy and terms placeholder for the FIFSA website.");

  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy and terms."
        copy="A policy route prepared for launch-ready legal and privacy copy."
        image={galleryImages[7].src}
      />
      <Section>
        <Container className="max-w-4xl">
          <article className="rounded-brand bg-white p-6 leading-8 text-muted shadow-soft sm:p-10">
            <h2 className="font-heading text-3xl font-extrabold text-ink">Privacy Policy</h2>
            <p className="mt-5">
              This page is ready for FIFSA's approved privacy policy, POPIA wording, donation terms and website terms. Form data
              in this frontend prototype is not sent to a backend.
            </p>
            <p className="mt-5">
              For privacy or policy enquiries, contact <a className="font-bold text-ocean" href={`mailto:${organisation.email}`}>{organisation.email}</a>.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
