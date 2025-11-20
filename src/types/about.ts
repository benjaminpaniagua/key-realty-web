// aboutCards.ts
export type AboutCardVariant =
  | "location"
  | "social"
  | "stack"
  | "passion"
  | "contact"
  | "code";

export type AboutCard = {
  id: number;
  variant: AboutCardVariant;
  layout: string;
};

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: 1,
    variant: "location",
    layout: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    variant: "social",
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    variant: "stack",
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 4,
    variant: "passion",
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 6,
    variant: "code",
    layout: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 5,
    variant: "contact",
    layout: "lg:col-span-1 lg:row-span-1",
  },
];

export type SocialItem = {
  id: string;
  href: string;
  src: string;
  alt: string;
  className?: string;
};

export const SOCIALS: SocialItem[] = [
  {
    id: "github",
    href: "https://github.com/benjaminpaniagua",
    src: "/images/icons/github2.svg",
    alt: "GitHub logo",
    className: "hover:bg-black",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/benjaminpaniaguarojas/",
    src: "/images/icons/linkedin2.svg",
    alt: "LinkedIn logo",
    className: "hover:bg-white",
  },
];
