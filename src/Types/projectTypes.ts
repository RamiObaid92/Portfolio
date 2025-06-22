export type ProjectCategory = "Web" | "Desktop";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  category: ProjectCategory;
}
