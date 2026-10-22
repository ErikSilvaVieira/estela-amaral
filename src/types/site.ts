import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  short: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
}

export interface CollectionItem {
  id: "feminino" | "masculino";
  title: string;
  description: string;
  position?: string;
}