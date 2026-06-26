export type ProjectStatus = "In progress" | "Completed" | "Paused" | "Concept";

export type ProjectFrontmatter = {
  title: string;
  shortDescription: string;
  date: string;
  status: ProjectStatus;
  category: string;
  featured: boolean;
  thumbnail: string;
  technologies: string[];
  github?: string;
  demo?: string;
  report?: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

export type NoteFrontmatter = {
  title: string;
  description: string;
  date: string;
  topic: string;
  featured?: boolean;
};

export type Note = NoteFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};