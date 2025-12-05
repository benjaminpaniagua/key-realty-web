import { TechnologyId } from "./technology";


export type CardItem = {
  id: number;
  title: string;
  description: string;
  technologies: TechnologyId[];
};
