import Link from "next/link";
import { FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publications } from "@content/publications";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Publications", "Presentations, reports, posters and documents.", "/publications");

export default function PublicationsPage() {
  return <section className="mx-auto max-w-5xl px-5 py-14"><SectionHeader eyebrow="Documents" title="Publications, presentations and documents" description="Editable list for conference presentations, posters, technical reports, academic papers, certificates and appropriate letters." /><div className="space-y-4">{publications.map((item) => <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6"><p className="text-sm font-semibold text-blue-700">{item.type} / {item.date}</p><h2 className="mt-2 text-xl font-semibold text-slate-950">{item.title}</h2><p className="mt-2 text-slate-600">{item.description}</p><div className="mt-4 flex gap-3">{item.pdf ? <Link href={item.pdf} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700"><FileText className="h-4 w-4" /> PDF</Link> : null}{item.external ? <Link href={item.external} className="text-sm font-semibold text-blue-700">External link</Link> : null}</div></article>)}</div></section>;
}