import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, FileText, HandHeart, UsersRound } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { InputField, SelectField, TextAreaField } from "../components/forms/FormFields";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { galleryImages } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";

const schema = z.object({
  companyName: z.string().min(2, "Enter your company name."),
  contactPerson: z.string().min(2, "Enter a contact person."),
  jobTitle: z.string().min(2, "Enter a job title."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Enter a valid phone number."),
  interest: z.string().min(1, "Choose an area of interest."),
  message: z.string().min(10, "Tell FIFSA a little more."),
});

type CorporateValues = z.infer<typeof schema>;

const supportAreas = [
  { title: "Youth development", icon: UsersRound, copy: "Support mentorship, leadership and school-based programmes." },
  { title: "Community projects", icon: HandHeart, copy: "Fund practical upliftment campaigns and direct community care." },
  { title: "Events and sponsorship", icon: Building2, copy: "Help create performance, sport and competition platforms." },
  { title: "Section 18A", icon: FileText, copy: "FIFSA states it can issue certificates for qualifying donations." },
];

export function CorporatePartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);
  usePageMeta("Corporate Partnerships", "Corporate social investment and sponsorship opportunities with FIFSA.");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CorporateValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Corporate partnerships"
        title="Make your CSI matter."
        copy="Partner with FIFSA to support youth development, community projects, humanitarian work and meaningful event platforms in Cape Town."
        image={galleryImages[4].src}
      />
      <Section>
        <Container>
          <SectionHeader eyebrow="Partner pathways" title="Let's create impact together." copy="FIFSA gives South African businesses practical, human and visible ways to contribute to community upliftment." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="rounded-brand bg-white p-6 shadow-[0_8px_24px_rgba(31,37,40,0.06)]">
                  <Icon className="text-ocean" size={28} />
                  <h2 className="mt-6 font-heading text-xl font-extrabold text-ink">{area.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{area.copy}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Corporate enquiry"
            title="Start the conversation."
            copy="This form is frontend-ready and can later submit to Supabase and trigger Resend notifications."
          />
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-brand bg-paper p-6 shadow-soft sm:p-8">
            {submitted ? <p className="mb-5 rounded-brand bg-leaf/12 p-4 text-sm font-semibold text-leaf">Thank you. The enquiry state was captured successfully.</p> : null}
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField label="Company name" registration={register("companyName")} error={errors.companyName} />
              <InputField label="Contact person" registration={register("contactPerson")} error={errors.contactPerson} />
              <InputField label="Job title" registration={register("jobTitle")} error={errors.jobTitle} />
              <InputField label="Email" type="email" registration={register("email")} error={errors.email} />
              <InputField label="Phone" registration={register("phone")} error={errors.phone} />
              <SelectField label="Area of interest" registration={register("interest")} error={errors.interest} options={["Youth Development", "Community Projects", "Humanitarian Support", "Events Sponsorship", "General CSI"]} />
              <TextAreaField label="Message" registration={register("message")} error={errors.message} className="sm:col-span-2" />
            </div>
            <Button className="mt-7" isLoading={isSubmitting}>
              Send enquiry
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
