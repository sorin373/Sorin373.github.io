"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

type Props = { projects: Project[]; categories: string[]; technologies: string[]; statuses: string[] };

export function ProjectsExplorer({ projects, categories, technologies, statuses }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    return projects
      .filter((project) => {
        const text = (project.title + " " + project.shortDescription + " " + project.category + " " + project.technologies.join(" ")).toLowerCase();
        return text.includes(query.toLowerCase()) && (category === "All" || project.category === category) && (technology === "All" || project.technologies.includes(technology)) && (status === "All" || project.status === status);
      })
      .sort((a, b) => sort === "newest" ? Number(b.date) - Number(a.date) : Number(a.date) - Number(b.date));
  }, [projects, query, category, technology, status, sort]);

  return (
    <div>
      <div className="mb-8 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 md:grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr]">
        <label className="relative block"><span className="sr-only">Search projects</span><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="h-10 w-full rounded-md border border-slate-300 pl-9 pr-3 text-sm" /></label>
        <Select label="Category" value={category} onChange={setCategory} options={["All", ...categories]} />
        <Select label="Technology" value={technology} onChange={setTechnology} options={["All", ...technologies]} />
        <Select label="Status" value={status} onChange={setStatus} options={["All", ...statuses]} />
        <Select label="Sort" value={sort} onChange={setSort} options={["newest", "oldest"]} />
      </div>
      <p className="mb-4 text-sm text-slate-600">Showing {filtered.length} of {projects.length} projects.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return <label className="block"><span className="sr-only">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm">{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}