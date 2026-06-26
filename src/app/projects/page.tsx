import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllProjects, getProjectTaxonomy } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Projects", "Engineering projects and case studies across CubeSats, C++, embedded systems and mechanical design.", "/projects");

export default function ProjectsPage() {
  const projects = getAllProjects();
  const taxonomy = getProjectTaxonomy(projects);
  return <section className="mx-auto max-w-6xl px-5 py-14"><SectionHeader eyebrow="Case studies" title="Projects" description="Search, filter and sort the content-backed project archive. Project cards are generated from files in content/projects." /><ProjectsExplorer projects={projects} categories={taxonomy.categories} technologies={taxonomy.technologies} statuses={taxonomy.statuses} /></section>;
}