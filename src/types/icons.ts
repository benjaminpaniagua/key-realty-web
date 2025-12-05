export type IconItems = {
  id: number;
  label: string;
  icon: string;
  alt: string;
  url: string;
};

export const DEFAULT_ICON_ITEMS: IconItems[] = [
  {
    id: 1,
    label: "LinkedIn",
    icon: "/images/icons/linkedin.svg",
    alt: "LinkedIn image",
    url: "https://www.linkedin.com/in/benjaminpaniaguarojas/",
  },
  {
    id: 2,
    label: "GitHub",
    icon: "/images/icons/github.svg",
    alt: "GitHub image",
    url: "https://github.com/benjaminpaniagua",
  },
];
