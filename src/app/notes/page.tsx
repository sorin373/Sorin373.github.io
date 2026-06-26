import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { getAllNotes } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Engineering Notes", "Short technical articles and engineering notes.", "/notes");

export default function NotesPage() {
  if (!siteConfig.sections.notes) return <section className="mx-auto max-w-4xl px-5 py-14"><SectionHeader title="Notes are disabled" description="Enable notes in src/config/site.ts to publish technical articles." /></section>;
  const notes = getAllNotes();
  return <section className="mx-auto max-w-5xl px-5 py-14"><SectionHeader eyebrow="Technical writing" title="Engineering notes" description="Short Markdown-based notes for modelling, testing, verification and lessons learned." /><div className="space-y-4">{notes.map((note) => <Link key={note.slug} href={"/notes/" + note.slug} className="block rounded-lg border border-slate-200 bg-white p-6 hover:border-blue-700"><p className="text-sm font-semibold text-blue-700">{note.topic} / {note.date}</p><h2 className="mt-2 text-xl font-semibold text-slate-950">{note.title}</h2><p className="mt-2 text-slate-600">{note.description}</p></Link>)}</div></section>;
}