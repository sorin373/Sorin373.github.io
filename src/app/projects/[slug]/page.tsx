import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { MarkdownRenderer } from "@/components/mdx/MarkdownRenderer";
import { Tag } from "@/components/ui/Tag";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getAllProjects().map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? pageMetadata(project.title, project.shortDescription, "/projects/" + project.slug) : pageMetadata("Project", "Engineering project case study.");
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const links = [{ label: "GitHub", href: project.github }, { label: "Demo", href: project.demo }, { label: "Report", href: project.report }].filter((link) => link.href);
  const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.shortDescription, dateCreated: project.date, keywords: project.technologies.join(", ") };
  return <article className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1fr_320px]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><div><Link href="/projects" className="text-sm font-semibold text-blue-700">Back to projects</Link><p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{project.category}</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{project.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{project.shortDescription}</p><div className="mt-8"><MarkdownRenderer content={project.content} /></div></div><aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 lg:sticky lg:top-24"><h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Project metadata</h2><dl className="mt-4 space-y-3 text-sm"><div><dt className="text-slate-500">Year</dt><dd className="font-medium text-slate-950">{project.date}</dd></div><div><dt className="text-slate-500">Status</dt><dd className="font-medium text-slate-950">{project.status}</dd></div><div><dt className="text-slate-500">Reading time</dt><dd className="font-medium text-slate-950">{project.readingTime}</dd></div></dl><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>{links.length ? <div className="mt-6 space-y-2">{links.map((link) => <Link key={link.label} href={link.href || "#"} className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm font-medium hover:border-blue-700">{link.label}<ExternalLink className="h-4 w-4" /></Link>)}</div> : null}</aside></article>;
}