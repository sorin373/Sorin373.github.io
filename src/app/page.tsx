import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalHeroVisual } from "@/components/home/TechnicalHeroVisual";
import { siteConfig } from "@/config/site";
import { getFeaturedProjects, getProjectStats } from "@/lib/content";

export default function HomePage() {
  const projects = getFeaturedProjects();
  const stats = getProjectStats();
  return (
    <>
      <section className="border-b border-slate-200 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Engineering portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{siteConfig.name}</h1>
            <p className="mt-4 text-2xl font-medium text-slate-700">{siteConfig.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{siteConfig.shortBio}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800">View Projects <ArrowRight className="h-4 w-4" /></Link><Link href={siteConfig.cvPath} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:border-blue-700"><Download className="h-4 w-4" /> Download CV</Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:border-blue-700"><Mail className="h-4 w-4" /> Contact Me</Link></div>
            <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5"><p className="text-sm font-semibold text-slate-950">Currently working on</p><div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{siteConfig.currentFocus.map((item) => <span key={item}>/ {item}</span>)}</div></div>
          </div>
          <TechnicalHeroVisual />
        </div>
      </section>
      {siteConfig.sections.projectStats ? <section className="mx-auto grid max-w-6xl gap-4 px-5 py-10 sm:grid-cols-4">{Object.entries(stats).map(([label, value]) => <div key={label} className="border-l-2 border-blue-700 bg-white p-4"><p className="text-3xl font-semibold text-slate-950">{value}</p><p className="mt-1 text-sm capitalize text-slate-600">{label}</p></div>)}</section> : null}
      <section className="mx-auto max-w-6xl px-5 py-14"><SectionHeader eyebrow="Selected case studies" title="Featured projects" description="A concise view of engineering work across space systems, structural planning, embedded systems and numerical modelling." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
      <section className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-6xl px-5 py-14"><SectionHeader eyebrow="Working style" title="Engineering principles" /><div className="grid gap-4 md:grid-cols-4">{siteConfig.principles.map((principle) => <div key={principle} className="rounded-lg border border-slate-200 p-5 text-sm font-medium text-slate-800">{principle}</div>)}</div></div></section>
    </>
  );
}