import type { LucideIcon } from "lucide-react";

export type ProgrammeCategory = "Youth" | "Education" | "Humanitarian" | "Events" | "Community";

export interface Programme {
  id: string;
  slug: string;
  title: string;
  category: ProgrammeCategory;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  eligibility?: string;
  impact?: string;
  ctaLabel: string;
  ctaUrl: string;
  relatedProgrammes: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProgrammeCategory;
  date?: string;
  startTime?: string;
  endTime?: string;
  venue?: string;
  address?: string;
  image: string;
  registrationUrl?: string;
  status: "Upcoming" | "Recent" | "Archive";
  gallery: string[];
}

export interface ImpactStatistic {
  label: string;
  value: string;
  detail: string;
}

export interface WorkCategory {
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: ProgrammeCategory;
}
