import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image src={project.thumbnail} alt={project.title + " technical thumbnail"} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
        {project.featured ? <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-blue-700 px-2 py-1 text-xs font-semibold text-white"><Star className="h-3 w-3" /> Featured</span> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2 text-xs text-slate-500"><span>{project.category}</span><span aria-hidden="true">/</span><span>{project.date}</span><span aria-hidden="true">/</span><span>{project.status}</span></div>
        <h2 className="text-xl font-semibold text-slate-950">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
        <Link href={"/projects/" + project.slug} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
          Full case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}