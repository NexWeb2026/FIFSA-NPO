import { CreditCard, HeartHandshake, Landmark, ShieldCheck, type LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { galleryImages, programmes } from "../data/programmes";
import { usePageMeta } from "../hooks/usePageMeta";
import { cn } from "../lib/utils";

const amounts = [150, 400, 800, 3600];
const causes = ["General Donation", "Youth Development", "Humanitarian Projects", "Food Support", "Orphans & Vulnerable Children", "Ramadan Campaigns", "Zakaah"];

export function DonatePage() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [cause, setCause] = useState(causes[0]);
  const [amount, setAmount] = useState<number | "custom">(800);
  usePageMeta("Donate", "Support FIFSA youth development, humanitarian aid and community programmes.");
  const selectedProgramme = useMemo(() => programmes.find((programme) => programme.title.includes("Food")), []);

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your generosity creates opportunity."
        copy="Choose what to support and prepare for future PayFast or South African payment-provider integration."
        image={galleryImages[5].src}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-brand bg-white p-6 shadow-soft sm:p-8">
            <SectionHeader title="Choose your donation" copy="This frontend is ready for payment integration; no payment is processed in this prototype." />
            <div className="mt-8 grid gap-6">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">Frequency</p>
                <div className="grid grid-cols-2 gap-2">
                  {(["once", "monthly"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFrequency(item)}
                      className={cn("min-h-12 rounded-brand border text-sm font-bold capitalize", frequency === item ? "border-ocean bg-ocean text-white" : "border-ink/12 bg-paper")}
                    >
                      {item === "once" ? "One-time" : "Monthly"}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">Cause</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {causes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCause(item)}
                      className={cn("min-h-12 rounded-brand border px-4 text-left text-sm font-bold", cause === item ? "border-clay bg-clay text-white" : "border-ink/12 bg-paper text-ink")}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">Amount</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                  {amounts.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAmount(item)}
                      className={cn("min-h-12 rounded-brand border font-bold", amount === item ? "border-sun bg-sun text-ink" : "border-ink/12 bg-paper text-ink")}
                    >
                      R{item.toLocaleString()}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setAmount("custom")}
                    className={cn("min-h-12 rounded-brand border font-bold", amount === "custom" ? "border-sun bg-sun text-ink" : "border-ink/12 bg-paper text-ink")}
                  >
                    Custom
                  </button>
                </div>
              </div>
              <Button variant="donate" className="w-full sm:w-auto" icon={<CreditCard size={18} />}>
                Continue to payment setup
              </Button>
            </div>
          </div>
          <aside className="grid gap-5">
            <InfoCard icon={ShieldCheck} title="Section 18A" copy="FIFSA states that it is approved to issue Section 18A tax-deductible certificates for qualifying donations." />
            <InfoCard icon={Landmark} title="Bank transfer ready" copy="Verified bank account details should be inserted here once FIFSA confirms donation and Zakaah accounts." />
            <InfoCard icon={HeartHandshake} title={selectedProgramme?.title ?? "Programme giving"} copy={selectedProgramme?.impact ?? "Programme-specific donation notes can be managed from central data."} />
          </aside>
        </Container>
      </Section>
    </>
  );
}

function InfoCard({ icon: Icon, title, copy }: { icon: LucideIcon; title: string; copy: string }) {
  return (
    <article className="rounded-brand bg-ink p-6 text-white">
      <Icon className="text-sun" size={26} />
      <h2 className="mt-5 font-heading text-2xl font-extrabold">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/72">{copy}</p>
    </article>
  );
}
