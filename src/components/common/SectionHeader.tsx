import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, copy, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">{eyebrow}</p> : null}
      <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-muted sm:text-lg">{copy}</p> : null}
    </div>
  );
}
