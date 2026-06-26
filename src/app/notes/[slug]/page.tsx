import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/mdx/MarkdownRenderer";
import { getAllNotes, getNoteBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getAllNotes().map((note) => ({ slug: note.slug })); }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const note = getNoteBySlug(slug); return note ? pageMetadata(note.title, note.description, "/notes/" + note.slug) : pageMetadata("Note", "Engineering note."); }
export default async function NotePage({ params }: Props) { const { slug } = await params; const note = getNoteBySlug(slug); if (!note) notFound(); return <article className="mx-auto max-w-3xl px-5 py-14"><Link href="/notes" className="text-sm font-semibold text-blue-700">Back to notes</Link><p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{note.topic} / {note.date}</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{note.title}</h1><p className="mt-4 text-slate-600">{note.description}</p><div className="mt-8"><MarkdownRenderer content={note.content} /></div></article>; }
