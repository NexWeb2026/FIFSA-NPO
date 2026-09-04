import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PageHero } from "../components/common/PageHero";
import { InputField, SelectField, TextAreaField } from "../components/forms/FormFields";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { galleryImages } from "../data/programmes";
import { organisation } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string().min(2, "Enter a subject."),
  reason: z.string().min(1, "Choose a reason."),
  message: z.string().min(10, "Enter your message."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  usePageMeta("Contact", "Contact Fusion Inyameko Foundation SA in Cape Town.");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Team Fusion."
        copy="Reach FIFSA about programmes, donations, volunteering, corporate partnerships, events or general enquiries."
        image={galleryImages[8].src}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="grid content-start gap-5">
            <div className="rounded-brand bg-ink p-6 text-white">
              <MapPin className="text-sun" size={26} />
              <h2 className="mt-5 font-heading text-2xl font-extrabold">Visit</h2>
              <p className="mt-3 text-sm leading-7 text-white/72">{organisation.addressLines.join(", ")}</p>
            </div>
            <div className="rounded-brand bg-ocean p-6 text-white">
              <Mail className="text-sun" size={26} />
              <h2 className="mt-5 font-heading text-2xl font-extrabold">Email</h2>
              <a className="mt-3 block text-sm leading-7 text-white/80" href={`mailto:${organisation.email}`}>
                {organisation.email}
              </a>
            </div>
            <div className="min-h-72 rounded-brand border border-ink/10 bg-white p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">Map</p>
              <p className="mt-4 text-sm leading-7 text-muted">Embedded map can be connected here after launch preferences are confirmed.</p>
            </div>
          </aside>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-brand bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-3xl font-extrabold text-ink">Contact form</h2>
            {submitted ? <p className="mt-4 rounded-brand bg-leaf/12 p-4 text-sm font-semibold text-leaf">Thank you. The form state was captured successfully.</p> : null}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <InputField label="Name" registration={register("name")} error={errors.name} />
              <InputField label="Email" type="email" registration={register("email")} error={errors.email} />
              <InputField label="Phone" registration={register("phone")} error={errors.phone} />
              <InputField label="Subject" registration={register("subject")} error={errors.subject} />
              <SelectField label="Reason for contact" registration={register("reason")} error={errors.reason} options={["General Enquiry", "Youth Programme", "School Programme", "Volunteer", "Donation", "Corporate Partnership", "Events", "Other"]} className="sm:col-span-2" />
              <TextAreaField label="Message" registration={register("message")} error={errors.message} className="sm:col-span-2" />
            </div>
            <Button className="mt-7" isLoading={isSubmitting}>
              Send message
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
