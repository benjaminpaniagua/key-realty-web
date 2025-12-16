export type TechnologyId =
  | "typescript"
  | "tailwind"
  | "react"
  | "postman"
  | "php"
  | "next"
  | "material"
  | "laravel"
  | "jira"
  | "javascript"
  | "html"
  | "github"
  | "figma"
  | "css"
  | "chart"
  | "aspnet"
  | "asana"
  | "mysql";
  
export type Technology = {
  id: TechnologyId;
  label: string;
  iconSrc: string;
};
