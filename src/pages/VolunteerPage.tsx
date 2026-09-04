import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputField, SelectField, TextAreaField } from "../components/forms/FormFields";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { galleryImages } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";

const volunteerSchema = z.object({
  firstName: z.string().min(2, "Enter your first name."),
  lastName: z.string().min(2, "Enter your last name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Enter a valid phone number."),
  age: z.string().optional(),
  interest: z.string().min(1, "Choose an area of interest."),
  availability: z.string().min(1, "Choose your availability."),
  message: z.string().min(10, "Tell FIFSA a little more."),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required." }) }),
});

type VolunteerValues = z.infer<typeof volunteerSchema>;

export function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  usePageMeta("Volunteer", "Apply to volunteer with Fusion Inyameko Foundation SA.");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<VolunteerValues>({ resolver: zodResolver(volunteerSchema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Give your time. Create an impact."
        copy="Join Team Fusion as FIFSA develops youth and communities through practical service, events and meaningful care."
        image={galleryImages[1].src}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Why volunteer"
              title="Your presence can strengthen the work."
              copy="Volunteers help FIFSA serve communities, support youth programmes, prepare events and bring energy to campaigns."
            />
            <div className="mt-8 grid gap-3">
              {["Community projects", "Youth programmes", "Food support", "Events and productions", "Care campaigns"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-brand bg-white p-4">
                  <CheckCircle2 size={20} className="text-ocean" />
                  <span className="font-semibold text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-brand bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-3xl font-extrabold text-ink">Volunteer application</h2>
            {submitted ? <p className="mt-4 rounded-brand bg-leaf/12 p-4 text-sm font-semibold text-leaf">Thank you. This prototype captured the form state successfully.</p> : null}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <InputField label="First name" registration={register("firstName")} error={errors.firstName} />
              <InputField label="Last name" registration={register("lastName")} error={errors.lastName} />
              <InputField label="Email" type="email" registration={register("email")} error={errors.email} />
              <InputField label="Phone" registration={register("phone")} error={errors.phone} />
              <InputField label="Age" registration={register("age")} error={errors.age} />
              <SelectField label="Area of interest" registration={register("interest")} error={errors.interest} options={["Youth programmes", "Humanitarian aid", "Events", "Administration", "General volunteering"]} />
              <SelectField label="Availability" registration={register("availability")} error={errors.availability} options={["Weekdays", "Weekends", "Events only", "Flexible"]} className="sm:col-span-2" />
              <TextAreaField label="Message" registration={register("message")} error={errors.message} className="sm:col-span-2" />
              <label className="flex gap-3 text-sm leading-6 text-muted sm:col-span-2">
                <input type="checkbox" className="mt-1 h-5 w-5 rounded border-ink/20" {...register("consent")} />
                I consent to FIFSA contacting me about volunteering and handling my information according to its privacy policy.
              </label>
              {errors.consent ? <span className="text-sm font-medium text-clay sm:col-span-2">{errors.consent.message}</span> : null}
            </div>
            <Button className="mt-7 w-full sm:w-auto" isLoading={isSubmitting}>
              Submit application
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
