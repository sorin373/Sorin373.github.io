import { SectionHeader } from "@/components/ui/SectionHeader";
import { experienceEntries } from "@content/experience";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Experience", "Education, apprenticeships, project roles and training timeline.", "/experience");

export default function ExperiencePage() {
  return <section className="mx-auto max-w-5xl px-5 py-14"><SectionHeader eyebrow="Timeline" title="Experience and education" description="Editable timeline for university education, project roles, training programmes, conferences, competitions and certifications." /><div className="space-y-5">{experienceEntries.map((entry) => <article key={entry.title} className="rounded-lg border border-slate-200 bg-white p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-sm font-semibold text-blue-700">{entry.type}</p><h2 className="mt-1 text-xl font-semibold text-slate-950">{entry.title}</h2><p className="text-slate-600">{entry.organization}</p></div><span className="rounded border border-slate-200 px-2 py-1 text-sm text-slate-600">{entry.period}</span></div><p className="mt-4 leading-7 text-slate-600">{entry.description}</p><ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">{entry.highlights.map((item) => <li key={item}>/ {item}</li>)}</ul></article>)}</div></section>;
}