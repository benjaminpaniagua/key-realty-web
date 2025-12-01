import { TechnologyId } from "./technology";


export type CardItem = {
  id: number;
  title: string;
  description: string;
  image?: string;
  link_url?: string;
  technologies: TechnologyId[];
};
