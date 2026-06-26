import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Note, NoteFrontmatter, Project, ProjectFrontmatter } from "@/types/project";

const projectDirectory = path.join(process.cwd(), "content/projects");
const notesDirectory = path.join(process.cwd(), "content/notes");

function readCollection<TFrontmatter>(directory: string): Array<TFrontmatter & { slug: string; content: string; readingTime: string }> {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(source);
      return {
        ...(data as TFrontmatter),
        slug,
        content,
        readingTime: estimateReadingTime(content)
      };
    });
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function getAllProjects(): Project[] {
  return readCollection<ProjectFrontmatter>(projectDirectory).sort((a, b) => Number(b.date) - Number(a.date));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllNotes(): Note[] {
  return readCollection<NoteFrontmatter>(notesDirectory).sort((a, b) => Number(b.date.slice(0, 4)) - Number(a.date.slice(0, 4)));
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getAllNotes().find((note) => note.slug === slug);
}

export function getProjectStats(projects = getAllProjects()) {
  const domains = new Set(projects.map((project) => project.category));
  const technologies = new Set(projects.flatMap((project) => project.technologies));
  return {
    projects: projects.length,
    domains: domains.size,
    featured: projects.filter((project) => project.featured).length,
    technologies: technologies.size
  };
}

export function getProjectTaxonomy(projects = getAllProjects()) {
  return {
    categories: Array.from(new Set(projects.map((project) => project.category))).sort(),
    technologies: Array.from(new Set(projects.flatMap((project) => project.technologies))).sort(),
    statuses: Array.from(new Set(projects.map((project) => project.status))).sort()
  };
}