export type ProjectCategory = "Frontend" | "Backend" | "Fullstack";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  category: ProjectCategory;
}
